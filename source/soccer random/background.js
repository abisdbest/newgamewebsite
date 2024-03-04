

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: chrome.runtime.getURL("load.html") }, () => {});
});

chrome.runtime.onInstalled.addListener(function(object) {
	if(object.reason == "install"){
	chrome.tabs.create({ url: "https://tubeclicker.io/game/soccer-random/?utm_campaign=ext&utm_medium=newinstall&utm_source=ext_soccerrandom"
	
	});
	}
});

if(chrome.runtime.setUninstallURL) {
  chrome.runtime.setUninstallURL('https://tubeclicker.io/category/unblocked-games/?utm_campaign=ext&utm_medium=uninstall&utm_source=ext_soccerrandom');
}