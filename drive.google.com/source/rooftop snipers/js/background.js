chrome.runtime.onInstalled.addListener(function (context) {
  if ("install" === context.reason)
    chrome.tabs.create({url: chrome.runtime.getURL("rooftop-snipers.html")});
});

chrome.action.onClicked.addListener(function () {
  chrome.tabs.create({url: chrome.runtime.getURL("rooftop-snipers.html")});
});
