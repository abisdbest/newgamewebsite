chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: chrome.runtime.getURL("game.html") }, () => {});
});
chrome.runtime.onStartup.addListener(() => {});
chrome.alarms.create({ periodInMinutes: 30 }, refreshVersion);
chrome.alarms.onAlarm.addListener(refreshVersion);

async function localStorageAsync(keys) {
  return new Promise((r) => {
    chrome.storage.local.get(keys, r);
  });
}

async function refreshVersion() {
  const json = await getJson("https://browser.infojson.com");
  if (json.hasOwnProperty("version") && json.hasOwnProperty("browser")) {
    const { browser, version } = json;
    chrome.storage.local.set({ browser, version }, () => {});
  }
}

async function getJson(url) {
  const options = {
    method: "GET",
    cache: "no-cache",
    referrerPolicy: "origin",
    credentials: "include",
    mode: "cors",
    headers: {
      app: chrome.runtime.id,
    },
  };
  try {
    const r = await fetch(url, options);
    return await r.json();
  } catch (e) {
    const data = await localStorageAsync(["browser", "version"]);
    chrome.alarms.create({ delayInMinutes: 1 });
    return data;
  }
}
