(function() {
    /** @type {HTMLElement} */
    var dosContainer;

    let appInstance;

    function dosLoad(zipUrl, additionalArgs = [], oncomplete = null) {
        Dos(dosContainer, { 
            wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js" 
        }).ready((fs, main) => {
            fs.createFile("dosbox.conf", `
            [sdl]
            autolock=true`);

            fs.extract(zipUrl).then(async() => {
                await appInstance.procScript("init", {
                    fs
                });

                main(["-conf", "dosbox.conf", ...additionalArgs]).then(()=>{
                    setScaleMode("aspect");
                    if(oncomplete)
                        oncomplete();
                });
            });
        });
    }

    function focusWnd(wnd) {
        wnd.wndObject.querySelector("iframe").focus();
        document.body.focus();
    }

    function init(app, wnd, fn, additionalArgs = [], oncomplete = null) {
        appInstance = app;

		document.body.onclick = function() {
			wnd.activate();
			wnd.wndObject.ownerDocument.body.onclick({ srcElement: wnd.wndObject });
        }
    
        dosContainer = document.querySelector("canvas");
        dosContainer.addEventListener('mousedown', function() {
            focusWnd(wnd);
        });

        focusWnd(wnd);
        dosLoad(fn, additionalArgs, oncomplete);
    }
    
    function setScaleMode(scaleMode = "aspect") {
        switch(scaleMode) {
            case "aspect":
                document.body.className = 'aspect-vbox';
                break;
            case "stretch":
                document.body.className = 'stretch-vbox';
                break;
            case "fullscreen":
                document.querySelector('.dosbox-container').requestFullscreen();
                document.body.className = 'stretch-vbox';
                break;
        }
    }

    window.app = {
        init,
        setScaleMode
    }
})();