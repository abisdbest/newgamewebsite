class FStorage {
  static async getString(key) {
    if (!FStorage.isExtension()) {
      return localStorage.getItem(key) ?? null;
    }
    return new Promise((resolve) => {
      const chrome = window.chrome;
      chrome.storage.sync.get(key, function(result) {
        resolve(result[key] ?? null);
      });
    });
  }
  static async getInteger(key) {
    const value = await FStorage.getString(key);
    if (value == null)
      return null;
    return parseInt(value, 10);
  }
  static async set(key, value) {
    if (!FStorage.isExtension()) {
      localStorage.setItem(key, value);
      return;
    }
    return new Promise((resolve) => {
      const saveObject = { [key]: value };
      const chrome = window.chrome;
      chrome.storage.sync.set(saveObject, function() {
        resolve();
      });
    });
  }
  static async destroy(key) {
    if (!FStorage.isExtension()) {
      localStorage.removeItem(key);
      return;
    }
    return new Promise((resolve) => {
      const chrome = window.chrome;
      chrome.storage.sync.remove(key, function() {
        resolve();
      });
    });
  }
  static isExtension() {
    if (window.chrome == null)
      return false;
    if (window.chrome.storage == null)
      return false;
    return true;
  }
}
export {
  FStorage as F
};
