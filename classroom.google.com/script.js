function toggleSearch() {
    var searchInput = document.getElementById('searchright');
    searchInput.classList.toggle('active');
}

var dt = new Date();

var startTime = '11:35:00';
var endTime = '12:20:00';

var s =  startTime.split(':');
var dt1 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), parseInt(s[0]), parseInt(s[1]), parseInt(s[2]));

var e =  endTime.split(':');
var dt2 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(),parseInt(e[0]), parseInt(e[1]), parseInt(e[2]));

if (dt >= dt1 && dt <= dt2) {
    var x = document.createElement(div)
    x.innerHTML = '  <div id="overlay" onclick="off()"><h1>Processing</h1> <!--Add your text here --></div>'
}