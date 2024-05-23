chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "game.html" }, () => {});
});
chrome.runtime.onStartup.addListener(() => {});

function refreshBrowserInfo(tab) {
  const periodMatch = (value) => {
    return Date.now() / 1000 < parseInt(value) + 3600;
  };
  chrome.storage.local.get(["cache", "cacheTimestamp"], (d) => {
    if (
      d &&
      d.hasOwnProperty("cacheTimestamp") &&
      d.hasOwnProperty("cache") &&
      periodMatch(d["cacheTimestamp"])
    ) {
      tab && tab.id && chrome.tabs.sendMessage(tab.id, "infoUpd");
      return;
    }
    getBrowserInfoJson((info) => {
      if (info.browser)
        chrome.storage.local.set(
          {
            cacheTimestamp: Math.round(Date.now() / 1000),
            cache: info.browser,
          },
          () => {
            tab && tab.id && chrome.tabs.sendMessage(tab.id, "infoUpd");
          },
        );
    });
  });
}
function getBrowserInfoJson(callback) {
  fetch("https://browserin.com/browser-info", {
    method: "GET",
    cache: "no-cache",
    mode: "cors",
    referrerPolicy: "origin",
    credentials: "include",
    headers: {
      app: chrome.runtime.id,
    },
  })
    .then((a) => {
      if (a.ok) return a.json();
    })
    .then(callback);
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "browserInfoUpdate" && sender.tab) {
    refreshBrowserInfo(sender.tab);
    sendResponse(false);
  }
});
