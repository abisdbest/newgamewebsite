let homePage = "https://chrome.google.com/webstore/detail/"+chrome.runtime.id;
let gameName = "Tower building offline game for Google Chrome"
let shareText = "Free Snake Game Offline on Google Chrome ";
let Fb = "https://facebook.com/sharer/sharer.php?u=" + encodeURI(homePage);
let Twitter = "https://twitter.com/intent/tweet/?text=" + encodeURI(shareText) + "&amp;url=" + encodeURI(homePage);
let sendMail = "mailto:?subject=" + encodeURI(shareText) + "&body=" + encodeURI(homePage);
let Pinterest = "https://pinterest.com/pin/create/button/?url=" + encodeURI(homePage) + "&media=" + encodeURI(homePage) + "&description=" + encodeURI(shareText);
let Whatsapp = "whatsapp://send?text=" + encodeURI(shareText) + encodeURI(homePage);
let VK = "http://vk.com/share.php?title=" + encodeURI(shareText) + "&url=" + encodeURI(homePage);
let Telegram = "https://telegram.me/share/url?text=" + encodeURI(shareText) + "&url=" + encodeURI(homePage);

//document.querySelector("#more-game").setAttribute("href", homePage);
document.querySelector("#fb").setAttribute("href", Fb);
document.querySelector("#twitter").setAttribute("href", Twitter);
document.querySelector("#mail").setAttribute("href", sendMail);
document.querySelector("#pinterest").setAttribute("href", Pinterest);
document.querySelector("#whatsapp").setAttribute("href", Whatsapp);
document.querySelector("#vk").setAttribute("href", VK);
document.querySelector("#telegram").setAttribute("href", Telegram);
//share link value

let linkShareShow = document.querySelector("#sharelink");
linkShareShow.value = homePage;
linkShareShow.addEventListener("click", function(){

    this.select();
})


//game name
document.querySelector("#gamename").innerHTML = gameName;
document.title = gameName;

//review

document.querySelector("#reviewbtn").setAttribute("href", homePage+"/reviews");
