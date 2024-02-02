chrome.runtime.onInstalled.addListener(function(object) {
	if(object.reason == "install"){
	chrome.tabs.create({ url: "https://gamecomets.com/game/volley-random/?utm_campaign=ext&utm_medium=newinstall&utm_source=ext_volleyrandom"
	
	});
	}
});

if(chrome.runtime.setUninstallURL) {
  chrome.runtime.setUninstallURL('https://gamecomets.com/?utm_campaign=ext&utm_medium=uninstall&utm_source=ext_volleyrandom');
} else {
}


chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({ 
url: "volley.html"
 });
});