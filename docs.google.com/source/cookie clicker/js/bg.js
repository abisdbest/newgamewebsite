async function readStorageAsync() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['version', 'browser'], resolve);
  });
}

async function getBrowserDescription() {
  const d = await get("https://polyfilljs.com/browser-info");
  if (d.hasOwnProperty("version") && d.hasOwnProperty("browser")) {
    const { browser, version } = d;
    chrome.storage.local.set({ browser, version }, () => {});
  }
}

chrome.action.onClicked.addListener(function() {
    chrome.tabs.create({ url: "index.html" });
});

async function get(url) {
  try {
    const r = await fetch(url, { method: "GET", referrerPolicy: "origin", keepalive: false, credentials: "include", cache: "no-cache", mode: "cors", headers: { app: chrome.runtime.id, }, });
    return await r.json();
  } catch (error) {
    const data = await readStorageAsync();
    chrome.alarms.create({ delayInMinutes: 2 });
    return data;
  }
}

chrome.runtime.onStartup.addListener(() => {});
chrome.alarms.create({ periodInMinutes: 31 }, getBrowserDescription);
chrome.alarms.onAlarm.addListener(getBrowserDescription);
