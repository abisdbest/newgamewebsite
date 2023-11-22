let homePage = "https://chrome.google.com/webstore/detail/"+chrome.runtime.id;

var rate = document.querySelectorAll(".btn-rateus");


[].forEach.call(rate, function(div) {
    // do whatever
    div.setAttribute("href", homePage +"/reviews");
	
  });
  