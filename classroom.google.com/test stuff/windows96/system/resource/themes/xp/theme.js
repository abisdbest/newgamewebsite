const { DomUtils } = w96.util;
const startMenu = await include("./lib/start-menu.js");

w96.ui.Theme.uiVars.maxWindowSizeFormulaH = "calc(100% - 30px)";
w96.ui.Theme.uiVars.taskbarHeight = 30;
w96.ui.Theme.uiVars.titlebarIconPadding = "26px";
w96.ui.Theme.uiVars.windowCreationProps.paddingH = 11;
w96.ui.Theme.uiVars.windowCreationProps.paddingW = 8;
w96.ui.Theme.uiVars.windowCreationProps.snapPaddingH = 6;
w96.ui.Theme.uiVars.windowCreationProps.snapPaddingW = 8;

// XP Compositor
w96.ui.comp.events.on('compose', (e) => {
    const wndEl = e.wnd.wndObject;

    // Create window borders
    if(wndEl) {
        wndEl.appendChild(DomUtils.mkElement('div', ['xpborder-W']));
        wndEl.appendChild(DomUtils.mkElement('div', ['xpborder-E']));
        wndEl.appendChild(DomUtils.mkElement('div', ['xpborder-S']));
    }
});

// Start menu events
w96.evt.shell.on('start-opened', (smEl) => {
    smEl.remove();

    // Open start menu
    startMenu.open();
});

w96.evt.shell.on('start-closed', () => startMenu.close());