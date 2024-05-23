/* Slight tween motion of all menu's and basically entire game with the mouse movement */


var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function setupCanvas() {
	var dpr = window.devicePixelRatio || 1;
	var rect = canvas.getBoundingClientRect();

	canvas.width = rect.width * dpr;
	canvas.height = rect.height * dpr;
	var context = canvas.getContext('2d');
	context.scale(dpr, dpr);
}

setupCanvas();
	
var mouseX = 0;
var mouseY = 0;

var previousInput = null;

var vertMove = 0;
var menu = false;
var cheat = false;
var tutorialEnabled = false;

var globalTimer = 0;

if (localStorage.getItem("id") == undefined) {
	id = randInt(1000000000)+"";
	while (id.length != 10) {
		id = "0"+id;
	}
	localStorage.setItem("id", id);
}

var id = localStorage.getItem("id");

yesPositions = [
	{x:50-10,y:100,c:1},      //0
	{x:75-10,y:125,c:3},      //1	
	{x:100-10,y:100,c:1},     //2
	{x:75-10,y:175,c:-1},     //3
	
	{x:125-10,y:100,c:6},    //4
	{x:175-10,y:100,c:4},    //5
	{x:125-10,y:138,c:8},    //6
	{x:175-10,y:138,c:6},	  //7
	{x:125-10,y:175,c:-1},    //8
	{x:175-10,y:175,c:8},	  //9
	
	{x:210-10,y:100,c:12},    //10
	{x:265-10,y:100,c:10},    //11
	{x:210-10,y:138,c:13},    //12
	{x:265-10,y:138,c:15},    //13
	{x:210-10,y:175,c:-1},    //14
	{x:265-10,y:175,c:14},    //15
];

noPositions = [
	{x:100,y:100,c:3},    //0
	{x:100,y:175,c:0},    //1
	{x:150,y:100,c:-1},   //2
	{x:150,y:175,c:2},     //3
	
	{x:100+65,y:100,c:6},    //4
	{x:100+65,y:175,c:4},    //5
	{x:150+65,y:100,c:7},    //6
	{x:150+65,y:175,c:5},    //7
];

stars = [
	{x:10+20,y:54+20,fg:false,backgroundConnections:[]},
	{x:60+20,y:54+20,fg:false,backgroundConnections:[]},
	{x:110+20,y:54+20,fg:false,backgroundConnections:[]},
	{x:160+20,y:54+20,fg:false,backgroundConnections:[]},
	{x:210+20,y:54+20,fg:false,backgroundConnections:[]},
	{x:260+20,y:54+20,fg:false,backgroundConnections:[]},	
	{x:10+20,y:54+50+20,fg:false,backgroundConnections:[]},
	{x:60+20,y:54+50+20,fg:false,backgroundConnections:[]},
	{x:110+20,y:54+50+20,fg:false,backgroundConnections:[]},
	{x:160+20,y:54+50+20,fg:false,backgroundConnections:[]},
	{x:210+20,y:54+50+20,fg:false,backgroundConnections:[]},
	{x:260+20,y:54+50+20,fg:false,backgroundConnections:[]},	
	{x:10+20,y:54+100+20,fg:false,backgroundConnections:[]},
	{x:60+20,y:54+100+20,fg:false,backgroundConnections:[]},
	{x:110+20,y:54+100+20,fg:false,backgroundConnections:[]},
	{x:160+20,y:54+100+20,fg:false,backgroundConnections:[]},
	{x:210+20,y:54+100+20,fg:false,backgroundConnections:[]},
	{x:260+20,y:54+100+20,fg:false,backgroundConnections:[]},	
	{x:10+20,y:54+150+20,fg:false,backgroundConnections:[]},
	{x:60+20,y:54+150+20,fg:false,backgroundConnections:[]},
	{x:110+20,y:54+150+20,fg:false,backgroundConnections:[]},
	{x:160+20,y:54+150+20,fg:false,backgroundConnections:[]},
	{x:210+20,y:54+150+20,fg:false,backgroundConnections:[]},
	{x:260+20,y:54+150+20,fg:false,backgroundConnections:[]},	
	{x:10+20,y:54+200+20,fg:false,backgroundConnections:[]},
	{x:60+20,y:54+200+20,fg:false,backgroundConnections:[]},
	{x:110+20,y:54+200+20,fg:false,backgroundConnections:[]},
	{x:160+20,y:54+200+20,fg:false,backgroundConnections:[]},
	{x:210+20,y:54+200+20,fg:false,backgroundConnections:[]},
	{x:260+20,y:54+200+20,fg:false,backgroundConnections:[]},
];

//Initial Position Set
for (star = 0; star < stars.length; star++) {
	for (rand = 0; rand < 100; rand++) {
		updatePoints();
	}
}

if (!localStorage.getItem("user")) {
	tutorialEnabled = true;
	localStorage.setItem("user",true);
}

var answer;
var hover = {"plus":false};

var cssDefaults = {
	"textTop":12,
	"textLeft":13,
};

var colors = {
	"bg":"#333",
	"star":"#ffffff",
}

/*if (localStorage.getItem("boards") == undefined) {
	localStorage.setItem("boards", []);
}
var boards = localStorage.getItem("boards");*/

/*if (boards.length > 0) {
	colors = JSON.parse(JSON.stringify(boards[0].colors));
} else {
	colors = JSON.parse(JSON.stringify(defaultColors));
}*/


document.getElementById("body").setAttribute("style","background-color: #ffffff;");

function getMouseDistanceFromCenter() {
	return [mouseX - canvas.width/2, mouseY - canvas.height/2];
}

function getDistanceBetweenPoints(px0,py0,px1,py1) {
	return Math.hypot(px1 - px0, py1 - py0);
}

//-----------------------------------------------------------------

	
function grid() {
	$("#textInput").show();
	
	targetPositions = ((answer) ? yesPositions : noPositions);
	
	context.fillStyle = "black";
	context.fillRect(0,0,canvas.width,canvas.height);

	//Tween
	document.styleSheets[0].rules[2].style.top = (cssDefaults.textTop + getMouseDistanceFromCenter()[1]/42+"px");
	document.styleSheets[0].rules[2].style.left = (cssDefaults.textLeft +getMouseDistanceFromCenter()[0]/42+"px");
	
	context.globalAlpha = 1;
	var img=document.getElementById("space"+randInt(4));
	context.imageSmoothingEnabled = false;
	
	context.drawImage(img, Math.trunc(getMouseDistanceFromCenter()[0]/48)-15,Math.trunc(getMouseDistanceFromCenter()[1]/48)-15-vertMove,338,342);
	context.drawImage(img, Math.trunc(getMouseDistanceFromCenter()[0]/48)-15,Math.trunc(getMouseDistanceFromCenter()[1]/48)-15+342-vertMove,338,342);	
	
	context.globalAlpha = 1;
	
	//Stars
	for (i = 0; i < stars.length; i++) {
		//Constallations
		if (stars[i].c != -1 && stars[i].c != undefined) {
			context.beginPath();
			if (stars[i].startDistance != undefined || (stars[i].fg && stars[i].id)) {
				context.globalAlpha = 1-(getDistanceBetweenPoints(stars[i].x,stars[i].y,targetPositions[stars[i].id].x,targetPositions[stars[i].id].y)-8) / ((stars[i].startDistance-8));
			} else {
				context.globalAlpha = stars[i].fade / 500;
			}
			context.strokeStyle = colors["star"];
			context.moveTo(stars[i].x+getMouseDistanceFromCenter()[0]/70+2.5,stars[i].y+getMouseDistanceFromCenter()[1]/70+2.5);
			context.lineTo(stars[stars[i].c].x+getMouseDistanceFromCenter()[0]/70+2.5, stars[stars[i].c].y+getMouseDistanceFromCenter()[1]/70+2.5);
			context.stroke();
		} else {
			//Background Constallations
			for (bgc = 0; bgc < stars[i].backgroundConnections.length; bgc++) {
				if (stars[i].backgroundConnections[bgc] != undefined) {
					context.beginPath();
					context.globalAlpha = stars[i].backgroundConnections[bgc].opacity;
					context.strokeStyle = colors["star"];
					context.moveTo(stars[i].x+getMouseDistanceFromCenter()[0]/70+2.5,stars[i].y+getMouseDistanceFromCenter()[1]/70+2.5);
					context.lineTo(stars[stars[i].backgroundConnections[bgc].c].x+getMouseDistanceFromCenter()[0]/70+2.5, stars[stars[i].backgroundConnections[bgc].c].y+getMouseDistanceFromCenter()[1]/70+2.5);
					context.stroke();
					context.globalAlpha = 1;
				}
			}
		}
		
		if (stars[i].id != undefined) {
			context.globalAlpha = 0.15;
		} else {
			if (stars[i].fg && stars[i].id) {
				context.globalAlpha = 1-(getDistanceBetweenPoints(stars[i].x,stars[i].y,targetPositions[stars[i].id].x,targetPositions[stars[i].id].y)-8) / ((stars[i].startDistance-8));
			} else {
				context.globalAlpha = 0.05;
			}
		}
		var img=document.getElementById("star");
		context.drawImage(img,stars[i].x-5+getMouseDistanceFromCenter()[0]/70,stars[i].y-5+getMouseDistanceFromCenter()[1]/70,15,15);
		if (stars[i].id != undefined || stars[i].fg) {
			if (stars[i].startDistance != undefined) {
				context.globalAlpha = 1-(getDistanceBetweenPoints(stars[i].x,stars[i].y,targetPositions[stars[i].id].x,targetPositions[stars[i].id].y)-8) / ((stars[i].startDistance-8));
			} else {
				if (stars[i].fade != undefined && stars[i].fade == 500) {
					context.globalAlpha = 1;
				} else {
					context.globalAlpha = 0.4;
				}
			}
		} else {
			context.globalAlpha = 0.4;;
		}
		context.drawImage(img,stars[i].x+getMouseDistanceFromCenter()[0]/70,stars[i].y+getMouseDistanceFromCenter()[1]/70,5,5);
	}
	
	vertMove+=0.05;
	if (vertMove >= 342) {
		vertMove = 0;
	}
	
	context.globalAlpha = 1;
	if (tutorialEnabled) {
		return;
	}
	
	context.globalAlpha = 0.15;
	if (mouseCollide(308-32+getMouseDistanceFromCenter()[0]/70,312-32+getMouseDistanceFromCenter()[1]/70,24,24)) {
		context.globalAlpha = 0.2;
	}
	context.imageSmoothingEnabled = true;
	if (menu) {
		context.globalAlpha = 0.25;
	}
	var img=document.getElementById("menu");
	context.drawImage(img,308-32+getMouseDistanceFromCenter()[0]/70,312-32+getMouseDistanceFromCenter()[1]/70,24,24);
	
	if (menu) {
		context.globalAlpha = 0.7;
		context.fillStyle = "black";
		context.fillRect(308-32+getMouseDistanceFromCenter()[0]/70+7-10-15,312-32-128+getMouseDistanceFromCenter()[1]/70-3+55-50,100,200);

		
		//Rate
		context.imageSmoothingEnabled = false;
		if (mouseCollide(308-32+getMouseDistanceFromCenter()[0]/70+7-10,312-32-128+getMouseDistanceFromCenter()[1]/70-3+23,16,16)) {
			context.globalAlpha = 0.35;
		} else {
			context.globalAlpha = 0.25;
		}
		var img=document.getElementById("rate");
		context.drawImage(img,308-32+getMouseDistanceFromCenter()[0]/70+7-10,312-32-128+getMouseDistanceFromCenter()[1]/70-3+23,16,16);		
		var img=document.getElementById("ratetext");
		context.drawImage(img,308-32+getMouseDistanceFromCenter()[0]/70-10,312-32-128+getMouseDistanceFromCenter()[1]/70-19+23,32,19);		
		
		if (mouseCollide(308-32+getMouseDistanceFromCenter()[0]/70+7-10,312-32-128+getMouseDistanceFromCenter()[1]/70-3+60,16,16)) {
			context.globalAlpha = 0.35;
		} else {
			context.globalAlpha = 0.25;
		}
		var img=document.getElementById("info");
		context.drawImage(img,308-32+getMouseDistanceFromCenter()[0]/70+7-10,312-32-128+getMouseDistanceFromCenter()[1]/70-3+60,16,16);		
		var img=document.getElementById("infotext");
		context.drawImage(img,308-32+getMouseDistanceFromCenter()[0]/70-10,312-32-128+getMouseDistanceFromCenter()[1]/70-19+60,32,19);
		
		context.imageSmoothingEnabled = false;
		
		//Cheat
		if (mouseCollide(308-32+getMouseDistanceFromCenter()[0]/70-50+40,312-64+getMouseDistanceFromCenter()[1]/70+2,32,19)) {
			context.globalAlpha = 0.35;
		} else {
			context.globalAlpha = 0.25;
		}
		var img=document.getElementById("toggle" + ((cheat) ? "r" : "l"));
		context.drawImage(img,308-32+getMouseDistanceFromCenter()[0]/70-50+40,312-64+getMouseDistanceFromCenter()[1]/70+2,32,19);		
		var img=document.getElementById("toggletext");
		if (cheat) {
			context.globalAlpha = 0.4;
		}
		context.drawImage(img,308-32+getMouseDistanceFromCenter()[0]/70-50+1+40,312-64-19+getMouseDistanceFromCenter()[1]/70+2,32,19);
	}
	
	context.globalAlpha = 1;
}

function updatePoints() {
	for (i = 0; i < stars.length; i++) {
		//Random Movement
		stars[i].x+=(randInt(1000)-500)/1000;
		stars[i].y+=(randInt(1000)-500)/1000;
		
		targetPositions = ((answer) ? yesPositions : noPositions);
		
		//Attributed Movement
		if (stars[i].id != undefined) {
			stars[i].x+=getVelocity(stars[i].x,stars[i].y,targetPositions[stars[i].id].x,targetPositions[stars[i].id].y)[0] / 12;
			stars[i].y+=getVelocity(stars[i].x,stars[i].y,targetPositions[stars[i].id].x,targetPositions[stars[i].id].y)[1] / 12;
			
			//Dissassociate (broken)
			if (getDistanceBetweenPoints(stars[i].x,stars[i].y,targetPositions[stars[i].id].x,targetPositions[stars[i].id].y) < 8) {
				delete stars[i].id;
				delete stars[i].startDistance;
				stars[i].fg = true;
				stars[i].fade = 500;
			}
		}
		
		//Bounds
		if (stars[i].y > canvas.height) {
			stars[i].y-=0.05;
		}
		
		if (stars[i].y < 44) {
			stars[i].y+=0.05;
		}
		
		if (stars[i].x > canvas.width) {
			stars[i].x-=0.05;
		}
		
		if (stars[i].x < 0) {
			stars[i].x+=0.05;
		}
		
		if (stars[i].fade != undefined && stars[i].fade != 0) {
			decrease = true;
			for (star of stars) {
				if (star.id != undefined) {
					decrease = false;
					break;
				}
			}
			if (decrease) {
				stars[i].fade--;
			}
		} else {
			delete stars[i].fg;
			if (stars[i].fade != undefined) {
				delete stars[i].fade;
				delete stars[i].c;
			}
		}
	}
	
	//Add backgroundConnection
	if (randInt(1000) == 10) {
		i1 = randInt(stars.length);
		stars[i1].backgroundConnections[stars[i1].backgroundConnections.length] = {
			c:randInt(stars.length),
			opacity:(randInt(15)/100),
		};
	}
	
	//Delete backgroundConnection
	if (randInt(100) == 10) {
		i1 = randInt(stars.length);
		if (stars[i1].backgroundConnections.length > 0) {
			stars[i1].backgroundConnections[stars[i1].backgroundConnections.length-1] = undefined;
		}
	}
}

function getVelocity(x,y,tx,ty) {
	deltax = tx - x;
	deltay = ty - y;
	angle = Math.atan2(deltay, deltax)

	xVelocity = Math.cos(angle);
	yVelocity = Math.sin(angle);
	
	return [xVelocity,yVelocity];
}

function attributePoints(answerIn) {
	//give the closest background point to a given point in the formation the index of that point as an ID, tell it constantly to move to that
	//location until it gets close enough. Then dissassociate the ID
	
	//this happens once at the start of a formation and no more than 1 ID per bg star. The bg star will fade into full white as it gets closer
	//expressed as a % of the point's starting distance to the point's minimum dissassociation distance. Once it reaches this distance, it will
	//become fully white. Random movement still applies while the star moves into position
	
	//check if still moving
	for (star of stars) {
		if (star.fade != undefined) {
			return;
		}
	}
	
	if (cheat) {
		answer = answerIn;
	} else {
		answer = randInt(2);
	}
	
	targetPositions = ((answer) ? yesPositions : noPositions);
	
	/*for (i = 0; i < stars.length; i++) {
		if (stars[i].id == -1 || stars[i].id == undefined) {
			shortestDistance = 1000;
			for (tp = 0; tp < targetPositions.length; tp++) {
				distance = getDistanceBetweenPoints(stars[i].x,stars[i].y,targetPositions[tp].x,targetPositions[tp].y) < shortestDistance;
				if (distance < shortestDistance) {
					stars[i].id = tp;
					shortestDistance = distance;
				}
			}
		}
	}*/
	
	for (tp = 0; tp < targetPositions.length; tp++) {
		shortestDistance = 1000;
		idOfClosest = -1;
		for (i = 0; i < stars.length; i++) {
			if (stars[i].id == -1 || stars[i].id == undefined) {
				distance = getDistanceBetweenPoints(stars[i].x,stars[i].y,targetPositions[tp].x,targetPositions[tp].y);
				if (distance < shortestDistance) {
					idOfClosest = i;
					shortestDistance = distance;
				}
			}
		}
		stars[idOfClosest].id = tp;
		//stars[idOfClosest].backgroundConnections = [];
		
		//global alpha = mincap distance between starting pos and dissassociation pos expressed as a percentage / 2 (only fade in during second half of animation)
		
		//Still need to make sure it's the closest that is chosen, decrease the magnitude of movement, add the alpha gradient and the dissassociation
		//fixed?
	}
	
	//Set C
	for (i = 0; i < stars.length; i++) {
		if (stars[i].id != -1 && stars[i].id != undefined) {
			for (di = 0; di < stars.length; di++) {
				if (targetPositions[stars[i].id].c == stars[di].id) {
					stars[i].c = di;
					break;
				}
			}
		}
	}
	
	//Issue: the C target is still an index of the targetPositions rather than the actual stars. Need someway of interpreting the C as an index of
	//real stars
	//fixed
	
	//Set Alpha Expression
	for (i = 0; i < stars.length; i++) {
		if (stars[i].id != -1 && stars[i].id != undefined) {
			stars[i].startDistance = getDistanceBetweenPoints(stars[i].x,stars[i].y,targetPositions[stars[i].id].x,targetPositions[stars[i].id].y);
		}
	}
	
	postLog();
}

function tutorial() {
	if (!tutorialEnabled) {
		return;
	}
	$("#textInput").hide();
	
	context.globalAlpha = 0.7;
	context.fillStyle = "white";
	context.fillRect(0,0,canvas.width,canvas.height);
	
	context.globalAlpha = 0.9;
	context.font = "20pt Calibri";
	context.fillStyle = "black";
	context.fillText("Tutorial",20,40+10);
	context.fillText("Tutorial",20,40+10);
	
	context.font = "12pt Calibri";
	context.fillText("Enter a yes/no question in the box (don't",20,70+10);
	context.fillText("forget the '?'). The stars will align to",20,90+10);
	context.fillText("form the answer!",20,110+10);
	context.fillText("Cheat Mode:",20,150+10);
	context.fillText("Cheat Mode:",20,150+10);
	
	context.fillText("When cheat mode is active, entering a '/'",20,175+10);
	context.fillText("instead of a '?' at the end of your question",20,195+10);
	context.fillText("will force the answer to be YES. Using a",20,215+10);
	context.fillText("regular question mark forces it to NO.",20,235+10);
	
	context.font = "underline 20pt Calibri";
	context.fillStyle = "darkblue";
	if (hover["plus"]) {
		context.fillStyle = "#4286f4";
	}
	context.fillText("Contact + More Games",20,235+60);
	
	var img=document.getElementById("cross");
	context.drawImage(img,300-18,10,16,16);
}

function reload() {
	document.getElementById("myCanvas").setAttribute("style","background-color: "+colors["white"]+";");
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	updatePoints();
	grid();
	tutorial();
	
	globalTimer++;
}

setInterval(reload,8);


//Mouse Input
$(canvas)
	.bind('touchstart mousedown',function(e){
		//e.preventDefault()
		if (e.touches == undefined) {
			mouseX = e.clientX;
			mouseY = e.clientY;
		} else {
			mouseX = parseInt(e.touches[0].pageX);
			mouseY = parseInt(e.touches[0].pageY);
		}
		
		if (tutorialEnabled && mouseCollide(300-18,10,32)) {
			tutorialEnabled = false;
			$("#textInput").show();
			return;
		}
		
		if (menu) {
			if (mouseCollide(308-32+getMouseDistanceFromCenter()[0]/70+7-10-8,312-32-128+getMouseDistanceFromCenter()[1]/70-3+23-8,32,32)) {
				window.open("https://chrome.google.com/webstore/detail/ask-the-stars-popup-game/ojpecghgbnnnglccbiplbnhohcojblgf");
				postLog("rate");
				return;
			}
			if (mouseCollide(308-32+getMouseDistanceFromCenter()[0]/70-50+40,312-64+getMouseDistanceFromCenter()[1]/70+2,32,19)) {
				cheat = !cheat;
				return;
			}
			if (mouseCollide(308-32+getMouseDistanceFromCenter()[0]/70+7-10-8,312-32-128+getMouseDistanceFromCenter()[1]/70-3+60-8,32,32)) {
				tutorialEnabled = true;
				menu = false;
				postLog("info");
				return;
			}
		}
		if (mouseCollide(308-32+getMouseDistanceFromCenter()[0]/70,312-32+getMouseDistanceFromCenter()[1]/70,24) && !menu) {
			menu = true;
		} else {
			menu = false;
		}
		
		if (hover["plus"] && tutorialEnabled) {
			window.open("moregames/moreGames.html");
		}
	})
	
	.bind('touchend mouseup',function(e){
		e.preventDefault()
	})
	
	.bind('touchmove mousemove',function(e){
		e.preventDefault()
		if (e.touches == undefined) {
			mouseX = e.clientX;
			mouseY = e.clientY;
		} else {
			mouseX = parseInt(e.touches[0].pageX);
			mouseY = parseInt(e.touches[0].pageY);
		}		
		
		if (mouseCollide(0,225+60,500,100)) {
			hover["plus"] = true;
		} else {
			hover["plus"] = false;
		}
	});
	
	$('body').on('contextmenu', '#myCanvas', function(e){ return false; });

function mouseCollide(x,y,width,height) {
	if (height == undefined) {
		height = width;
	}
	
	if (mouseX > x && mouseX < x+width && mouseY > y && mouseY < y+height) {
		return true;
	}
	return false;
}


function randInt(max){
	return Math.trunc(Math.random() * (max - 0));
}

//Text input manager
setInterval(function(){
	input = document.getElementById("textInput").value;
	if (previousInput == null) {
		previousInput = input;
	}
	if (input != previousInput) {
		if (input.charAt(input.length-1) == "?".charAt(0) || (input.charAt(input.length-1) == "/".charAt(0) && cheat)) {
			if (input.charAt(input.length-1) == "/".charAt(0) && cheat) {
				document.getElementById("textInput").value = input.substr(0, input.length - 1) + "?";
			}
			attributePoints((input.charAt(input.length-1) == "/".charAt(0)));
			input = document.getElementById("textInput").value;
			previousInput = input;
		}
	}
},1);

function postLog(name) {
	postText = "";
	if (cheat) {
		postText+="&cheat=1";
	}
	if (answer == 1) {
		postText+="&yn=yes";
	} else {
		postText+="&yn=no";
	}
	if (name == "info") {
		postText+="&info=1";
	}
	if (name == "rate") {
		postText+="&rate=1";
	}	
	if (name == "open") {
		postText+="&open=1";
	}	
	
	dNow = new Date();
	
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "https://james1236.online/ATSlog.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("datetime="+escape(dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes())+
		"&id="+localStorage.getItem("id")+"&q="+"chrome"+postText
	)

	//Load leaderboard data
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
		}
	}
}

setTimeout(function(){postLog("open");},3000);

