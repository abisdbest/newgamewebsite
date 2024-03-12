const { execCmd } = w96.sys;
const shutdownScreen = await include('./shutdown-screen.js');

const options = [
    {
        name: "Stand By",
        icon: 3,
        enabled: false
    },
    {
        name: "Turn Off",
        icon: 2,
        enabled: true,
        onclick: async()=>{
            // Add wait effect
            document.querySelector(".shutdown-dlg").remove();
            await w96.util.wait(1000);

            const mainGfx = document.querySelector("#maingfx");
            mainGfx.classList.remove("anim-grayscale-effect");
            document.body.querySelector(".xpsh-shutdown-container").remove();

            // Show screen
            shutdownScreen.show();
        }
    },
    {
        name: "Restart",
        icon: 1,
        enabled: true,
        onclick: ()=>void execCmd("reboot", [])
    }
]

/**
 * Shows the shutdown menu.
 */
function show() {
    // Add grayscale effect
    const mainGfx = document.querySelector("#maingfx");
    mainGfx.classList.add("anim-grayscale-effect");

    const shutdownMenuContainer = document.createElement('div');
    shutdownMenuContainer.classList.add('xpsh-shutdown-container', 'sysfont');

    const shutdownMenuDlg = document.createElement('div');
    shutdownMenuDlg.classList.add('shutdown-dlg');
    shutdownMenuDlg.innerHTML = `
        <div class="top">
            <div class="text">Turn off computer</div>
        </div>
        <div class="middle">
            <div class="options"></div>
        </div>
        <div class="bottom">
            <button class="w96-button cancel">Cancel</button>
        </div>
    `;

    // Add cancel button handler
    shutdownMenuDlg.querySelector('.cancel').addEventListener('click', ()=>{
        mainGfx.classList.remove("anim-grayscale-effect");
        shutdownMenuContainer.remove();
    });

    // Add options
    const optionsContainer = shutdownMenuDlg.querySelector(".options");

    for(let opt of options) {
        const optionEl = document.createElement('div');
        optionEl.classList.add('item');
        
        // Add icon
        const iconEl = document.createElement('div');
        iconEl.classList.add('icon');
        iconEl.style.backgroundPositionX = `${opt.icon * 33}px`;
        optionEl.appendChild(iconEl);

        // Add text
        const textEl = document.createElement('div');
        textEl.classList.add('text');
        textEl.textContent = opt.name;
        optionEl.appendChild(textEl);

        // Add event listener
        if(opt.onclick && opt.enabled)
            iconEl.addEventListener('click', ()=>opt.onclick());

        if(!opt.enabled)
            optionEl.classList.add('disabled');

        optionsContainer.appendChild(optionEl);
    }

    shutdownMenuContainer.appendChild(shutdownMenuDlg);

    document.querySelector("body").appendChild(shutdownMenuContainer);
}

module.exports = {
    show
}