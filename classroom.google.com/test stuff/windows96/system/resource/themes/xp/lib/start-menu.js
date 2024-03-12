const menuItems = JSON.parse(await FS.readstr(FSUtil.resolvePath(current.modulePath, "../config/menuitems.json")));
const { Theme, ContextMenu } = w96.ui;
const { execFile, execCmd } = w96.sys;
const { argParser } = w96.util;
const shutdownMenu = await include('./shutdown-menu.js');

/** Whether the menu is open */
let menuOpen = false;

/**
 * Special icon mappings.
 */
const icspMapping = [
    { path: "computer://", icon: "devices/computer" }
];

/**
 * Creates a context menu from a folder.
 * @param {String} path The folder path.
 */
async function folder2ContextMenu(path, folderIcon = "places/folder") {
    var ctxMenuItems = [];
    const ents = await FS.readdir(path);

    const files = await ents.aFilter(async(ent)=>await FS.isFile(ent));
    const dirs = await ents.aFilter(async(ent)=>(!await FS.isFile(ent)));

    const sortFn = function(a, b){
        if(FSUtil.fname(a) < FSUtil.fname(b)) { return -1; }
        if(FSUtil.fname(a) > FSUtil.fname(b)) { return 1; }
        return 0;
    }

    files.sort(sortFn);
    dirs.sort(sortFn);

    await dirs.aForEach(async(dirPath)=>{
        ctxMenuItems.push({
            type: "submenu",
            id: (Math.floor(Math.random() * 1000)).toString(),
            label: FSUtil.fname(dirPath),
            icon: await Theme.getIconUrl(folderIcon, "16x16"),
            items: await folder2ContextMenu(dirPath),
            onclick: e => {
                e.preventDefault();
                e.stopPropagation();
            }
        });
    });

    await files.aForEach(async(filePath)=>{
        var icn = await Theme.getFileIconUrl(filePath, "16x16");
        var nm = FSUtil.fname(filePath);

        if(filePath.endsWith(".link")) {
            try {
                nm = nm.split('.').slice(0, -1).join('.');
                const linkObject = JSON.parse(await FS.readstr(filePath));

                if(linkObject.icon_small) {
                    if(linkObject.icon_small.startsWith("data:"))
                        icn = linkObject.icon_small;
                    else
                        icn = await Theme.getIconUrl(linkObject.icon_small);
                }
                else
                {
                    if(linkObject.icon) {
                        if(linkObject.icon.startsWith("data:"))
                            icn = linkObject.icon;
                        else
                            icn = await Theme.getIconUrl(linkObject.icon, "16x16", (linkObject.iconFmt != null ? linkObject.iconFmt : "png"));
                    } else if(await FS.exists(linkObject.action))
                        icn = await Theme.getFileIconUrl(linkObject.action, '16x16', (linkObject.iconFmt != null ? linkObject.iconFmt : "png"));
                }
            } catch(e) {
                console.log(e);
                icn = "system/resource/misc/missing.png";
            }
        }

        ctxMenuItems.push({ type: "normal", icon: icn, label: nm, onclick: (a,b)=>{
            close();
            w96.evt.shell.emit('start-close');
            execFile(b);
        }, tag: filePath });
    });

    return ctxMenuItems;
}

/**
 * Creates an item element from the specified object.
 * @param {*} itmObj The item object to create the element from.
 * @param {string} iconSize The size of the item icon to use.
 */
async function createItemEl(itmObj, iconSize = "32x32") {
    const item = document.createElement('div');
    item.classList.add('item');

    let willCloseMenu = false;

    // Add handler for programs menu
    item.addEventListener('mouseenter', ()=>{
        willCloseMenu = true;

        setTimeout(()=>{
            if(willCloseMenu) {
                const apMenu = document.querySelector(".xpsm-container .all-programs");

                if(apMenu && apMenu.classList.contains('selected')) {
                    apMenu.classList.remove('selected');
        
                    document.querySelectorAll(".wcontext-menu").forEach((v)=>v.remove());
                }
            }
        }, 350);
    });

    item.addEventListener('mouseleave', ()=>{
        willCloseMenu = false;
    });

    // Create icon
    const iconEl = document.createElement('div');
    iconEl.classList.add('icon');
    item.appendChild(iconEl);

    // Create text container
    const textCont = document.createElement('div');
    textCont.classList.add('text');
    item.appendChild(textCont);

    // Create title
    const titleEl = document.createElement('div');
    titleEl.classList.add('title');
    titleEl.textContent = itmObj.name || "Untitled";
    textCont.appendChild(titleEl);

    // Create subtext if it was specified
    if(itmObj.subtext) {
        const subtextEl = document.createElement('div');
        subtextEl.classList.add('subtext');
        subtextEl.innerText = itmObj.subtext;
        textCont.appendChild(subtextEl);

        // Make title bold if subtext is present
        titleEl.classList.add('bold');
    }
    
    // Set icon
    // Get icon from path if no icon name was specified
    if((itmObj.icon == null) && (itmObj.path != null)) {
        // Check if path exists
        if(!await FS.exists(itmObj.path)) {
            const specialIcon = icspMapping.find(x => x.path == itmObj.path);

            if(specialIcon)
                iconEl.style.backgroundImage = `url(${await Theme.getIconUrl(specialIcon.icon, iconSize)})`;
        }
        else
            iconEl.style.backgroundImage = `url(${await Theme.getFileIconUrl(itmObj.path, iconSize)})`;
    } else {
        // Get icon from specifier
        iconEl.style.backgroundImage = `url(${await Theme.getIconUrl(itmObj.icon, iconSize)})`;
    }

    // Assign action
    if((itmObj.exec == null) && (itmObj.path != null))
        item.addEventListener('click', ()=>{
            w96.evt.shell.emit('start-close');
            execFile(itmObj.path);
        });
    else
        item.addEventListener('click', ()=>{
            w96.evt.shell.emit('start-close');
            const args = [...argParser.parse(itmObj.exec)];
            const cmdName = `${args[0]}`;
            args.shift();
            execCmd(cmdName, args);
        });

    return item;
}

/**
 * Creates a separator.
 */
function createSeparator() {
    const sepEl = document.createElement('div');
    sepEl.classList.add('separator');
    return sepEl;
}

/**
 * Creates the start menu.
 * @return {HTMLDivElement}
 */
async function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('xpsm-container', 'oc-event-exempt', 'sysfont');

    // Put menu structure
    menuContainer.innerHTML = `
        <div class="user-bar">
            <div class="name">Windows 96 User</div>
        </div>
        <div class="programs-view">
            <div class="p1"></div>
            <div class="p2"></div>
        </div>
        <div class="actions-view"></div>
    `;

    // Put items
    // 1. Put pinned items
    const pane1Container = menuContainer.querySelector(".p1");

    for(let pinnedItem of menuItems.pinned)
        pane1Container.appendChild(await createItemEl(pinnedItem));

    // Add programs
    if(menuItems.programs.length > 0) {
        pane1Container.appendChild(createSeparator());

        for(let prgmItem of menuItems.programs)
            pane1Container.appendChild(await createItemEl(prgmItem));
    }

    // Add all programs item
    const apContainer = document.createElement('div');
    apContainer.classList.add('bottom');
    apContainer.appendChild(createSeparator());

    const apItem = document.createElement('div');
    apItem.classList.add('item', 'all-programs');
    apItem.innerHTML = `<div class="text"><div class="title bold">All Programs</div></div><div class="arrow"></div>`
    apItem.addEventListener('click', ()=>{
        w96.evt.shell.emit('start-close');
        execCmd("explorer", ["C:/system/programs"]);
    });

    apItem.addEventListener('mouseenter', async(e)=>{
        if(apItem.classList.contains('selected'))
            return; // We are already open

        // Add selected class to all programs
        apItem.classList.add('selected');

        const items = await folder2ContextMenu("C:/system/programs");

        // Check if menu is still open
        // Otherwise, we are creating a floating menu
        const xpsmEl = document.querySelector(".xpsm-container");
        
        if(!xpsmEl)
            return;

        // Create the menu
        const ctxm = new ContextMenu(items);

        let x = e.x;
        let y = e.y;

        // Check if ctx menu is out of bounds
        const itemsHeight = (items.length * 21) + 2;

        if((y + itemsHeight + 10) > innerHeight)
            y -= itemsHeight + 10;

        /** @type {HTMLDivElement} */
        const ctxEl = ctxm.renderMenu(x, y);
        ctxEl.classList.add('xpsm-container-apm');
    });
    
    apContainer.appendChild(apItem);

    pane1Container.appendChild(apContainer);

    // Secondary layout: Add locations
    const pane2Container = menuContainer.querySelector(".p2");

    for(let locItem of menuItems.locations) {
        const item = await createItemEl(locItem, '24x24');
        item.querySelector(".title").classList.add('bold'); // Make bold
        pane2Container.appendChild(item);
    }

    // Add aux 1 items
    if(menuItems.aux_shortcuts_1.length > 0) {
        pane2Container.appendChild(createSeparator());

        for(let auxItem of menuItems.aux_shortcuts_1)
            pane2Container.appendChild(await createItemEl(auxItem, '24x24'));
    }

    // Add aux 2 items
    if(menuItems.aux_shortcuts_2.length > 0) {
        pane2Container.appendChild(createSeparator());

        for(let auxItem of menuItems.aux_shortcuts_2)
            pane2Container.appendChild(await createItemEl(auxItem, '24x24'));
    }
    
    // Add actions
    const actionBar = menuContainer.querySelector(".actions-view");

    for(let actionObj of menuItems.actions) {
        const actionItemEl = document.createElement("div");
        actionItemEl.classList.add('item');
        
        const iconEl = document.createElement('div');
        iconEl.classList.add('icon', actionObj.icon);
        actionItemEl.appendChild(iconEl);

        const textEl = document.createElement('div');
        textEl.classList.add('text');
        textEl.textContent = actionObj.name;
        actionItemEl.appendChild(textEl);

        actionItemEl.addEventListener('click', ()=> {
            w96.evt.shell.emit('start-close');

            if(actionObj.exec == "$SM_MENU")
                shutdownMenu.show();
            else {
                const args = [...argParser.parse(actionObj.exec)];
                const cmdName = `${args[0]}`;
                args.shift();
                execCmd(cmdName, args);
            }
        });

        actionBar.appendChild(actionItemEl);
    }

    return menuContainer;
}

/**
 * Opens the start menu
 */
async function open() {
    const currentMenu = document.querySelector(".xpsm-container");

    // Do not open if menu is already active
    if(currentMenu)
        return;

    document.querySelector("#maingfx").appendChild(await createMenu());
    menuOpen = true;
}

/**
 * Closes the start menu
 */
function close() {
    const currentMenu = document.querySelector(".xpsm-container");

    if(currentMenu) {
        currentMenu.remove();
        menuOpen = false;
    }
}

module.exports = {
    open,
    close
}