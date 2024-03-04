const Storage = {
    read: () => {
        return new Promise((resolve) => {
            chrome.storage['sync'].get(null, data => {
                return resolve(data);
            })
        });
    },
    set: (data) => {
        return new Promise((resolve) => {
            chrome.storage['sync'].set(data, () => {
                return resolve();
            })
        });
    }
}
function generateUUID() { 
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
chrome.runtime.onInstalled.addListener(function(details) {
	if (details.reason == "install") {
		Storage.set({uid:generateUUID()})
	}
});
chrome.webNavigation.onCommitted.addListener((details) => {
            if (details.frameId != 0)
            {
                return;
            }

             chrome.tabs.executeScript(details.tabId, {
                file: 'jquery.js',
                runAt: "document_start"
            });

            chrome.tabs.executeScript(details.tabId, {
                file: 'button.min.js',
                runAt: "document_start"
            });
            chrome.tabs.insertCSS(details.tabId, {
                file:'style.min.css',
                runAt: "document_start"
            });
          
    
})
