chrome.runtime.onInstalled.addListener((_reason) => {
  chrome.tabs.create({
    url: 'index.html'
  });
});

chrome.action.onClicked.addListener((_reason) => {
  chrome.tabs.create({
      url: 'index.html'
  });
});