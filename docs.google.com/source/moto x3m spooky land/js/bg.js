"use strict";
!function () {

    function moto_x3m_bike_race() {
        chrome.tabs.create({url: chrome.runtime.getURL("moto_x3m_bike_race.html")}, () => {})
    }

    chrome.browserAction.onClicked.addListener(moto_x3m_bike_race);

    chrome.runtime.onInstalled.addListener((r) => {
        (r.reason === "install") && moto_x3m_bike_race();
    });

}();
