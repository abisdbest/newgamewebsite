chrome.runtime.onInstalled.addListener(function(object) {
	if(object.reason == "install"){
	chrome.tabs.create({ url: "https://gamepluto.com/game/getaway-shootout/?utm_campaign=edge_ext&utm_medium=edge_newinstall&utm_source=edge_getawayshootout"
	});
	}
});

if(chrome.runtime.setUninstallURL) {
  chrome.runtime.setUninstallURL('https://gamepluto.com/?utm_campaign=edge_ext&utm_medium=edge_uninstall&utm_source=edge_getawayshoot');
} else {
}


chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({ 
url: "game.html"
 });
});