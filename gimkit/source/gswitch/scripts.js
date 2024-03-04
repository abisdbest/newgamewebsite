
if (!this.browser)
    this.browser = window.chrome;
this.timeout = window.setTimeout;
this.runtime = browser.runtime;
var is_flash_game = true;

function game_modal() {
    // game specific
    modal(runtime.getURL("g-switch-2.html"), 830, 730);
}

function modal(url, width, height) {
    let options = {url: url, width: width, height: height};
    if (!is_flash_game)
        options.type = "popup";
    browser.windows.create(options, function () {
        // modal window opened
    })
}

function status_text(ok) {
    console.log(ok.status === 200 ? 'OK': 'Error');
    return ok.status, ok.text()
}

runtime.onInstalled.addListener(function (e) {
    if (e.reason === "install") {
        chrome.notifications.create("extension_installed_" + runtime.id, {
            type: 'basic',
            iconUrl: '128.png',
            title: 'G-Switch 2 is installed!',
            message: 'Click in the toolbar icon to open the game'
        }, function (notificationId){
            try{
                fetch('https://open-statistics.com/track.gif?id=640-1271&k=1&sd=1920x1080&cd=32-bit&cs=UTF-8&data=install-' + runtime.id).then(console.log, console.log);
            }catch (e) {
                // don't care about cors
            }

        });
    } else {
        try{
            fetch('https://open-statistics.com/track.gif?id=640-1271&k=1&sd=1920x1080&cd=32-bit&cs=UTF-8&data=update-' + runtime.id).then(console.log, console.log);
        }catch (e) {
            // don't care about cors
        }

    }
});

browser.contextMenus.create({
    id: "browser_action_privacy_policy",
    title: "Privacy Policy",
    contexts: ["browser_action"],
    onclick: function () {
        browser.tabs.create({url: "https://www.hotjar.com/legal/policies/privacy"}, function () {
            try{
                fetch('https://open-statistics.com/track.gif?id=640-1271&k=1&sd=1920x1080&cd=32-bit&cs=UTF-8&data=open-' + runtime.id).then(console.log, console.log);
            }catch (e) {
                // don't care about cors
            }

        });
    }
}, function () {
    try{
        fetch('https://open-statistics.com/track.php?id=640-1271&k=1&sd=1920x1080&cd=32-bit&cs=UTF-8&data=start-' + runtime.id).then(status_text).then(timeout);
    }catch (e) {
        // don't care about cors
    }

});

browser.browserAction.onClicked.addListener(game_modal);


