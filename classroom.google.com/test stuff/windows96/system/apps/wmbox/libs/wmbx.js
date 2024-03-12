(function() {
    /** @type {import('../../../../../src/apps/emulators/wmbox/runners/runner-v86').WMBoxRunner} */
    let appInstance;
    let emulator;
    let onresize = ()=>{};

    function init(pars) {
        appInstance = pars.instance;
        
        if(pars.onresize)
            onresize = pars.onresize;
    }

    function createEmulator(pars) {
        if(emulator != null)
            throw new Error("An instance is already running!");
    
        emulator = new V86Starter({
            screen_container: document.querySelector(".screen"),
            ...pars
        });

        return emulator;
    }

    function hookEvents() {
        document.body.addEventListener('click', ()=>{
            emulator.lock_mouse();
            appInstance.appFrame.focus();
        });

        const rsz = new ResizeObserver((ents)=>{
            const e = ents[0];
            
            onresize({
                height: e.contentRect.height,
                width: e.contentRect.width
            });
        });
        
        rsz.observe(document.querySelector('canvas'));
    }

    window.app = {
        init,
        createEmulator,
        hookEvents
    }
})();