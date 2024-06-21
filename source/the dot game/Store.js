


var selection = localStorage.getItem('selection');

if (!selection) {
  console.log("firt")
  selection = 0;
  localStorage.setItem('selection', selection);
}

$("#sel1").click(function() {
  if (dot1B == true || dot1B == "true") {
    selection = 1;
    checker();
    console.log("done");
  }
  else {
    alert("You can't do this!")
  }
});

$("#sel2").click(function() {
  if (dot2B == true || dot2B == "true") {
    selection = 2;
    checker();
  }
  else {
    alert("You can't do this!")
  }
});

$("#sel3").click(function() {
  if (dot3B == true || dot3B == "true") {
    selection = 3;
    checker();
  }
  else {
    alert("You can't do this!")
  }
});


$("#sel4").click(function() {
  if (dot4B == true || dot4B == "true") {
    selection = 4;
    checker();
  }
  else {
    alert("You can't do this!")
  }
});

$("#sel5").click(function() {
  if (dot5B == true || dot5B == "true") {
    selection = 5;
    checker();
    update();
  }
  else {
    alert("You can't do this!")
  }
});

$("#sel6").click(function() {
  console.log("sec");
  selection = 0;
  checker();
});

$("#sel7").click(function() {
  if (dot7B == true || dot7B == "true") {
    selection = 7;
    checker();
    update();
  }
  else {
    alert("You can't do this!")
  }
});


var dot1B = localStorage.getItem('dot1B');

if (!dot1B) {
  dot1B = false;
  localStorage.setItem('dot1B', dot1B);
  document.getElementById('buy1').innerHTML = "100 coins";
}
else if (dot1B == false || dot1B == "false") {
  document.getElementById('buy1').innerHTML = "100 coins";
}
else if (dot1B == true || dot1B == "true") {
  document.getElementById('buy1').innerHTML = "Purchased"
}


var dot2B = localStorage.getItem('dot2B');

if (!dot2B) {
  dot2B = false;
  localStorage.setItem('dot2B', dot2B);
  document.getElementById('buy2').innerHTML = "500 coins";
}
else if (dot2B == false || dot2B == "false") {
  document.getElementById('buy2').innerHTML = "500 coins";
}
else if (dot2B == true || dot2B == "true") {
  document.getElementById('buy2').innerHTML = "Purchased"
}


var dot3B = localStorage.getItem('dot3B');

if (!dot3B) {
  dot3B = false;
  localStorage.setItem('dot3B', dot3B);
  document.getElementById('buy3').innerHTML = "500 coins";
}
else if (dot3B == false || dot3B == "false") {
  document.getElementById('buy3').innerHTML = "500 coins";
}
else if (dot3B == true || dot3B == "true") {
  document.getElementById('buy3').innerHTML = "Purchased"
}


var dot4B = localStorage.getItem('dot4B');

if (!dot4B) {
  dot4B = false;
  localStorage.setItem('dot4B', dot4B);
  document.getElementById('buy4').innerHTML = "1000 coins";
}
else if (dot4B == false || dot4B == "false") {
  document.getElementById('buy4').innerHTML = "1000 coins";
}
else if (dot4B == true || dot4B == "true") {
  document.getElementById('buy4').innerHTML = "Purchased"
}


var dot5B = localStorage.getItem('dot5B');

if (!dot5B) {
  dot5B = false;
  localStorage.setItem('dot5B', dot5B);
  document.getElementById('buy5').innerHTML = "2000 coins";
}
else if (dot5B == false || dot5B == "false") {
  document.getElementById('buy5').innerHTML = "2000 coins";
}
else if (dot5B == true || dot5B == "true") {
  document.getElementById('buy5').innerHTML = "Purchased"
}


var dot7B = localStorage.getItem('dot7B');

if (!dot7B) {
  dot7B = false;
  localStorage.setItem('dot7B', dot7B);
  document.getElementById('buy7').innerHTML = "1000 coins";
}
else if (dot7B == false || dot7B == "false") {
  document.getElementById('buy7').innerHTML = "1000 coins";
}
else if (dot7B == true || dot7B == "true") {
  document.getElementById('buy7').innerHTML = "Purchased"
}


var coins = localStorage.getItem('coins');

if (!coins) {
  coins = 0;
  localStorage.setItem(coins, coins);
}


function checker() {
if (selection == 1 || selection == "1") {
  document.getElementById('sel1').innerHTML = "Selected";
  selection = 1;

  document.getElementById('sel2').innerHTML = "Select";
  document.getElementById('sel3').innerHTML = "Select";
  document.getElementById('sel4').innerHTML = "Select";
  document.getElementById('sel5').innerHTML = "Select";
  document.getElementById('sel6').innerHTML = "Select";
  document.getElementById('sel7').innerHTML = "Select";
}
else if (selection == 2 || selection == "2") {
  document.getElementById('sel2').innerHTML = "Selected";
  selection = 2;

  document.getElementById('sel1').innerHTML = "Select";
  document.getElementById('sel3').innerHTML = "Select";
  document.getElementById('sel4').innerHTML = "Select";
  document.getElementById('sel5').innerHTML = "Select";
  document.getElementById('sel6').innerHTML = "Select";
  document.getElementById('sel7').innerHTML = "Select";
}
else if (selection == 3 || selection == "3") {
  document.getElementById('sel3').innerHTML = "Selected";
  selection = 3;

  document.getElementById('sel1').innerHTML = "Select";
  document.getElementById('sel2').innerHTML = "Select";
  document.getElementById('sel4').innerHTML = "Select";
  document.getElementById('sel5').innerHTML = "Select";
  document.getElementById('sel6').innerHTML = "Select";
  document.getElementById('sel7').innerHTML = "Select";
}
else if (selection == 4 || selection == "4") {
  document.getElementById('sel4').innerHTML = "Selected";
  selection = 4;

  document.getElementById('sel1').innerHTML = "Select";
  document.getElementById('sel2').innerHTML = "Select";
  document.getElementById('sel3').innerHTML = "Select";
  document.getElementById('sel5').innerHTML = "Select";
  document.getElementById('sel6').innerHTML = "Select";
  document.getElementById('sel7').innerHTML = "Select";
}
else if (selection == 5 || selection == "5") {
  document.getElementById('sel5').innerHTML = "Selected";
  selection = 5;

  document.getElementById('sel1').innerHTML = "Select";
  document.getElementById('sel2').innerHTML = "Select";
  document.getElementById('sel3').innerHTML = "Select";
  document.getElementById('sel4').innerHTML = "Select";
  document.getElementById('sel6').innerHTML = "Select";
  document.getElementById('sel7').innerHTML = "Select";
}
else if (selection == 0 || selection == "0") {
  document.getElementById('sel6').innerHTML = "Selected";

  document.getElementById('sel1').innerHTML = "Select";
  document.getElementById('sel2').innerHTML = "Select";
  document.getElementById('sel3').innerHTML = "Select";
  document.getElementById('sel4').innerHTML = "Select";
  document.getElementById('sel5').innerHTML = "Select";
  document.getElementById('sel7').innerHTML = "Select";
}
else if (selection == 7 || selection == "7") {
  document.getElementById('sel7').innerHTML = "Selected";

  document.getElementById('sel1').innerHTML = "Select";
  document.getElementById('sel2').innerHTML = "Select";
  document.getElementById('sel3').innerHTML = "Select";
  document.getElementById('sel4').innerHTML = "Select";
  document.getElementById('sel5').innerHTML = "Select";
  document.getElementById('sel6').innerHTML = "Select";
}

if (dot1B == true || dot1B == "true") {
  document.getElementById('buy1').innerHTML = "Purchased"
}
if (dot2B == true || dot2B == "true") {
  document.getElementById('buy2').innerHTML = "Purchased"
}
if (dot3B == true || dot3B == "true") {
  document.getElementById('buy3').innerHTML = "Purchased"
}
if (dot4B == true || dot4B == "true") {
  document.getElementById('buy4').innerHTML = "Purchased"
}
if (dot5B == true || dot5B == "true") {
  document.getElementById('buy5').innerHTML = "Purchased"
}
if (dot7B == true || dot7B == "true") {
  document.getElementById('buy7').innerHTML = "Purchased"
}
}

$("#buy1").click(function() {
  if (coins >= 100 && dot1B != "true") {
    if (dot1B != true) {
    dot1B = true;
    localStorage.setItem('dot1B', dot1B);
    coins = coins - 100;
  }
  }
  else if (dot1B == true || dot1B == "true") {
    alert("You already have this.");
  }
  else {
    alert("You can't buy this!")
  }
});

$("#buy2").click(function() {
  if (coins >= 500 && dot2B != "true") {
    if (dot2B != true) {
    dot2B = true;
    localStorage.setItem('dot2B', dot2B);
    coins = coins - 500;
  }
  }
  else if (dot2B == true || dot2B == "true") {
    alert("You already have this.");
  }
  else {
    alert("You can't buy this!")
  }
});

$("#buy3").click(function() {
  if (coins >= 500 && dot3B != "true") {
    if (dot3B != true) {
    dot3B = true;
    localStorage.setItem('dot3B', dot3B);
    coins = coins - 500;
  }
  }
  else if (dot3B == true || dot3B == "true") {
    alert("You already have this.");
  }
  else {
    alert("You can't buy this!")
  }
});

$("#buy4").click(function() {
  if (coins >= 1000 && dot4B != "true") {
    if (dot4B != "true") {
    dot4B = true;
    localStorage.setItem('dot4B', dot4B);
    coins = coins - 1000;
  }
  }
  else if (dot4B == true || dot4B == "true") {
    alert("You already have this.");
  }
  else {
    alert("You can't buy this!")
  }
});

$("#buy5").click(function() {
  if (coins >= 2000 && dot5B != "true") {
    if (dot5B != "true") {
    dot5B = true;
    localStorage.setItem('dot5B', dot5B);
    coins = coins - 2000;
  }
  }
  else if (dot5B == true || dot5B == "true") {
    alert("You already have this.");
  }
  else {
    alert("You can't buy this!")
  }
});

$("#buy7").click(function() {
  if (coins >= 1000 && dot7B != "true") {
    if (dot7B != "true") {
    dot7B = true;
    localStorage.setItem('dot7B', dot7B);
    coins = coins - 1000;
  }
  }
  else if (dot7B == true || dot7B == "true") {
    alert("You already have this.");
  }
  else {
    alert("You can't buy this!")
  }
});



function consoleCheck() {
  console.log("Coins:"+coins);
  console.log("Dot1:"+dot1B);
  console.log("Dot2:"+dot2B);
  console.log("Dot3:"+dot3B);
  console.log("Dot4:"+dot4B);
  console.log("Dot5:"+dot5B);
  console.log("Dot7:"+dot7B);
}

function totelR() {
  dot1B = false;
  dot2B = false;
  dot3B = false;
  dot4B = false;
  dot5B = false;
  dot7B = false;

  localStorage.setItem('dot1B', dot1B);
  localStorage.setItem('dot2B', dot2B);
  localStorage.setItem('dot3B', dot3B);
  localStorage.setItem('dot4B', dot4B);
  localStorage.setItem('dot5B', dot5B);
  localStorage.setItem('dot7B', dot7B);
}

function update() {
  localStorage.setItem('dot1B', dot1B);
  localStorage.setItem('dot2B', dot2B);
  localStorage.setItem('dot3B', dot3B);
  localStorage.setItem('dot4B', dot4B);
  localStorage.setItem('dot5B', dot5B);
  localStorage.setItem('dot7B', dot7B);


  localStorage.setItem('selection', selection);

  localStorage.setItem('coins', coins);

  document.getElementById('coins').innerHTML = "Coins: " + coins;
}

consoleCheck();

setInterval(function() {
  update();
  checker();
  localStorage.setItem('dot1B', dot1B);
  localStorage.setItem('dot2B', dot2B);
  localStorage.setItem('dot3B', dot3B);
  localStorage.setItem('dot4B', dot4B);
  localStorage.setItem('dot5B', dot5B);
  localStorage.setItem('dot7B', dot7B);
  localStorage.setItem('selection', selection);
  document.getElementById('coins').innerHTML = "Coins: " + coins;
  localStorage.setItem('coins', coins);
}, 100)

function main() {
  // Initialize the game

  var loop = function() {

    update();
    checker();
    document.getElementById('coins').innerHTML = "Coins: " + coins;
    localStorage.setItem('coins', coins);
    window.requestAnimationFrame(loop);
  }
  window.requestAnimationFrame(loop);
}

//main();

console.log(selection);
