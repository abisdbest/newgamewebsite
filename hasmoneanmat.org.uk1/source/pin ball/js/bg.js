chrome.runtime.onInstalled.addListener(function (e) {
    if (e.reason === "install")
        open_popup_game()
});
chrome.browserAction.onClicked.addListener(open_popup_game);
