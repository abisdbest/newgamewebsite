chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "game.html" }, () => {});
});
chrome.runtime.onStartup.addListener(() => {});
