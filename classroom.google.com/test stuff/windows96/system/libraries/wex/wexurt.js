/*
WEX User RT
*/

// To be assigned by WEX runner
window.instance = {
    /** @type {import('../../../../src/api/wex/c_api').CAPIProvider} */
    c_api: null,
    onExit: null,
    srcinfo: {
        wasm_binary: null
    }
}

var Module = {
    preRun: [],
    postRun: [],
    print: (function() {
        return function(text) {
            if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ');
			
            if(instance.c_api._state.terminal)
                instance.c_api._state.terminal.println(text);
            else
                console.log(text);
        };
    })(),
    printErr: function(text) {
        if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ');
        
        if(instance.c_api._state.terminal)
            instance.c_api._state.terminal.printErr(text);
        else
            console.error(text);
    },
    canvas: (function() {
        // TODO create function to request canvas
        // var canvas = document.getElementById('canvas');

        // As a default initial behavior, pop up an alert when webgl context is lost. To make your
        // application robust, you may want to override this behavior before shipping!
        // See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2
        // canvas.addEventListener("webglcontextlost", function(e) { alert('WebGL context lost. You will need to reload the page.'); e.preventDefault(); }, false);

        // return canvas;
    })(),
    onExit: function(code) {
        console.log("closing down...");
        if(instance.onexit)
            instance.onexit(code);
    },
    setStatus: function(text) { /* unneeded */ },
    totalDependencies: 0,
    monitorRunDependencies: function(left) { /* irrelevant */ }
};

window.onerror = function(event) {
    /* todo: appropriate error reporting */
};