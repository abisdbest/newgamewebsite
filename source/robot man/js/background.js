/**
 * Created by Nick on 4/29/2017.
 */

chrome.browserAction.onClicked.addListener(function() {
    var screenWidth = screen.availWidth;
    var screenHeight = screen.availHeight;
    var width = 980;
    var height = 634;

    chrome.windows.create({'url': 'robotman.html',
        'type': 'popup',
        'width': width,
        'height': height,
        'left': Math.round((screenWidth - width) / 2),
        'top': Math.round((screenHeight - height) / 2),
        'focused': true
    });
});
