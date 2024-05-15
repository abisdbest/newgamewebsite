function getChromeVersion() {
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : 80;
}

let helpP = document.getElementsByClassName('help')[0];
if (getChromeVersion() > 75) {
    let link = helpP.children[0];
    link.addEventListener('click', function (e) {
        e.preventDefault();
        chrome.windows.create({url: this.href, width: 1000, type: 'popup'});
        return false;
    }, false);
} else {
    helpP.style.display = 'none';
}



