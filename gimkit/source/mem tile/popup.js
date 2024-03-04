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

var keysPressed = [];

var moveTimer = 0;
var moveTimerMax = 10;

var aiTurn = 0;
var aiDirections = [];
var ai = false;
var aiTimer = 0;
var aiTimerMax = 30;
var eeT = 0;
var eeS = 0;

setTimeout(counter,3000);
setTimeout(function(){menu = false},50);

var leaderboardData = [];
var denyPost = false;
var response = false;
var leaderboardDataText;
var leaderboardScores;
var leaderboardNames;
var placeTracker;

var globalTimer = 0;

var ui = 0;

var score = 0;

if (localStorage.getItem("z2914") == undefined) {
	localStorage.setItem("z2914", 0);
}
if (localStorage.getItem("plays") == undefined) {
	localStorage.setItem("plays", 5);
}
if (localStorage.getItem("z1757") == undefined || localStorage.getItem("z1757") == "" || localStorage.getItem("z1757") == "null" || localStorage.getItem("z1757") == null) {
	ui = 1;
	setTimeout(function () {$("#nameMemTile").show(); document.getElementById("nameMemTile").focus(); document.getElementById("nameMemTile").select();}, 10);
} else {
	var name = localStorage.getItem("z1757");
}

if (localStorage.getItem("z0564") == undefined) {
	uuid = randInt(1000000000)+"";
	while (uuid.length != 10) {
		uuid = "0"+uuid;
	}
	localStorage.setItem("z0564", uuid);
}

var muted;
if (localStorage.getItem("mute") == undefined) {
	localStorage.setItem("mute", 0);
	muted = false;
}
if (localStorage.getItem("mute") == 1) {
	muted = true;
}

var highscore = localStorage.getItem("z2914");
var round = 0;
var turn = 0;
var dead = 0;

var defaultColors = {
	"slot":"#f8f8f7",
	"bg":"#bbada0",
	"player":"#eee4da",
	"button":"#8f7a66",
	"white":"#faf8ef",
	"death":"#f76c6c",
	"newHigh":"#7be866",
}

var iconPos = {
	"color":[9+10,69+10],
	"star":[9+10,69+10+(80*3)],
	"tutorial":[69+30,69+10],
	"leaderboard":[9+10,69+10+80],
	"rename":[9+10,69+10+(80*2)],
	"at":[69+30,69+10+(80*1)],
	"plus":[69+30,69+10+(80*2)],
	"mute":[69+30,69+10+(80*3)]
}


if (localStorage.getItem("z8487") == undefined) {
	localStorage.setItem("z8487", JSON.stringify(defaultColors));
}
var colors = JSON.parse(localStorage.getItem("z8487"));


var lumas = {
	"slot":248,
	"bg":175,
	"player":229,
	"button":125,
	"white":248,
	"death":138,
	"newHigh":199,
}

UP = 38;
DOWN = 40;
LEFT = 37;
RIGHT = 39;
SPACE = 32;
R = 82;
ENTER = 13;

W = 87;
A = 65;
S = 83;
D = 68;

//Load SFX
var sounds = {}
sounds[LEFT] = new Audio("slideB.wav");
sounds[DOWN] = new Audio("slideC.wav");
sounds[RIGHT] = new Audio("slideD.wav");
sounds[UP] = new Audio("slideE.wav");
sounds[LEFT+50] = new Audio("slideBp.wav");
sounds[DOWN+50] = new Audio("slideCp.wav");
sounds[RIGHT+50] = new Audio("slideDp.wav");
sounds[UP+50] = new Audio("slideEp.wav");
sounds[LEFT+100] = new Audio("slideBl.wav");
sounds[DOWN+100] = new Audio("slideCl.wav");
sounds[RIGHT+100] = new Audio("slideDl.wav");
sounds[UP+100] = new Audio("slideEl.wav");
sounds["button"] = new Audio("button.wav");

var hover = {"restart":false,"play":false,"color":false,"leaderboard":false,"confirmName":false,"rename":false,"tutorial":false,"menu":false,"rate":false,"star":false,"showAll":false};
var player = {x:1,y:1}
var pos = [{x:1,y:1}];

//If localStorage for mid game exists, load it
if (localStorage.getItem("z2807") && parseInt(localStorage.getItem("z2807")) > 0) {
	die(true);
} else {
	die();
}

document.getElementById("body").setAttribute("style","background-color: #ffffff;");

function addAiDirection(amount) {
	if (amount == undefined) {
		amount = 1;
	}

	attempt = 0;
	
	for (t = 0; t < amount; t++) {
		//Choose random direction
		if (randInt(2)) {
			//X change
			if (randInt(2)) {
				aiDirections[aiDirections.length] = LEFT;
			} else {
				aiDirections[aiDirections.length] = RIGHT;
			}
		} else {
			//Y change
			if (randInt(2)) {
				aiDirections[aiDirections.length] = UP;
			} else {
				aiDirections[aiDirections.length] = DOWN;
			}
		}
		
		//Retry if out of bounds
		x = 1;
		y = 1;
		dirPos = [[1,1]];
		for (i = 0; i < aiDirections.length; i++) {
			switch (aiDirections[i]) {
				case UP:
					y--;
					break;
				case DOWN:
					y++;
					break;
				case LEFT:
					x--;
					break;
				case RIGHT:
					x++;
					break;
			}
			dirPos[dirPos.length] = [x,y];
			
			if (i == aiDirections.length-1) {
				for (dp = 0; dp < dirPos.length-1; dp++) {
					if (x == dirPos[dp] && y == dirPos[dp]) {
						aiDirections.splice(i, 1);
						t--;
						attempt++;
						break;
					}
				}
			}
			
			if (x < 0 || y < 0 || x > 3 || y > 3) {
				aiDirections.splice(i, 1);
				t--;
				break;
			}
		}
	}
}

function buttons() {
	context.fillStyle = colors["button"];
	
	//restart

	//context.globalAlpha = 0.5;
	roundRect(6, 6, 80, 50, 5, true, false);
	//roundRect(9, 9, 80, 50, 5, true, false);
	
	if (hover["restart"]) {
		context.globalAlpha = 0.1;
		context.fillStyle = "#000000";
		roundRect(6, 6, 80, 50, 5, true, false);
	}
	
	context.globalAlpha = 0.5;
	context.fillStyle = colors["bg"];
	
	//score
	roundRect(328/2-5+13, 6, 70, 50, 5, true, false);
	//roundRect(canvas.width/2-5+16, 9, 70, 50, 5, true, false);
	
	//highscore
	roundRect(328/2+75+13, 6, 70, 50, 5, true, false);
	//roundRect(canvas.width/2+75+16, 9, 70, 50, 5, true, false);

	
	context.globalAlpha = 1;
	if (!(!ai && pos.length == 1)){
		context.globalAlpha = 0.7;
	}
	
	//play
	if (score == highscore) {
		context.fillStyle = colors["newHigh"];
	}
	
	roundRect(328/2+5-70, 6, 60, 50, 5, true, false);
	
	if (hover["play"] && !ai && pos.length == 1) {
		context.globalAlpha = 0.1;
		context.fillStyle = "#000000";
		roundRect(328/2+5-70, 6, 60, 50, 5, true, false);
	}
	
	context.globalAlpha = 1;
	
	//play
	context.fillStyle = colors["slot"];
	context.font="25px Arial";
	context.fillText("\u25B6",328/2+5-39,39);
	context.globalAlpha = 1;
	
	//restart
	context.font="20px Arial";
	context.fillStyle = colors["slot"];
	if (!ui) {
		context.fillText("Restart",328/2-118,39);
	} else {
		context.fillText("Back",328/2-118,39);
	}
	
	//score
	context.fillStyle = colors["button"];
	context.textAlign = "center";
	context.font="12px Arial";
	context.fillText("Score",328/2+30+13,23);
	context.font="24px Arial";
	context.fillText(score,328/2+30+13,48);
	
	//highscore
	context.font="12px Arial";
	context.fillText("Best",328/2+110+13,23);
	context.font="24px Arial";
	context.fillText(highscore,328/2+110+13,48);
}

function icons() {
	if (!menu) {
		return;
	}
	
	//Icons
	iconDisplay("color");
	iconDisplay("leaderboard");
	iconDisplay("rename");
	iconDisplay("star");
	iconDisplay("tutorial");
	iconDisplay("at");
	iconDisplay("plus");
	iconDisplay("mute");
	
	//Close
	context.globalAlpha = 0.10;

	var img=document.getElementById("cross");
	context.imageSmoothingEnabled = false;
	if (hover["menu"]) {
		context.globalAlpha = 0.3;
	}
	context.drawImage(img,69+(80*2)+30+35,69+10,15,15);
	context.imageSmoothingEnabled = true;

	context.globalAlpha = 1;
	
	//Icon tooltips
	
	if (hover["color"]) {
		if (JSON.stringify(colors) == JSON.stringify(defaultColors)) {
			text = "Random Color";
			size = 82;
		} else {
			text = "Default Color";
			size = 75;
		}
	}
	if (hover["tutorial"]) {
		text = "Tutorial";
		size = 44;
	} 
	if (hover["rename"]) {
		text = "Change Name";
		size = 82;
	}
	if (hover["leaderboard"]) {
		text = "Leaderboard";
		size = 74;
	}
	if (hover["star"]) {
		text = "Please Rate!";
		size = 73;
	}	
	if (hover["at"]) {
		text = "Contact";
		size = 47;
	}	
	if (hover["plus"]) {
		text = "More Games";
		size = 73;
	}	
	if (hover["mute"]) {
		text = "Mute Sound";
		size = 69;
	}
	
	if (hover["color"] || hover["tutorial"] || hover["rename"] || hover["leaderboard"] || hover["star"] || hover["at"] || hover["plus"] || hover["mute"]) {
		if (hover["star"]) {
			jiggle = globalTimer % 3;
		} else {
			jiggle = 0;
		}
		
		context.fillStyle = colors["button"];
		roundRect(mouseX+jiggle, mouseY-20, size, 20, 2.5, true, false);
		
		if (hover["star"]) {
			context.globalAlpha = 0.4;
			context.fillStyle = "#000";
			roundRect(mouseX+jiggle, mouseY-20, size, 20, 2.5, true, false);
			context.globalAlpha = 1;
		}
		
		context.textAlign = "start";
		context.font="12px Arial";
		if (hover["star"]) {
			context.fillStyle = colors["newHigh"];
		} else {
			context.fillStyle = colors["white"];
		}
		context.fillText(text, mouseX+2+jiggle, mouseY-6);
		context.textAlign = "center";
	}
}

function iconDisplay(icoName) {
	if (hover[icoName]) {
		context.globalAlpha = 0.15;
	} else {
		context.globalAlpha = 0.1;
	}

	var img=document.getElementById(icoName);
	context.drawImage(img,iconPos[icoName][0],iconPos[icoName][1],50,50);
	context.globalAlpha = 1;
}


function hideUi() {
	$("#nameMemTile").hide()
	ui = 0;
}

function displayUi() {
	//Stop background changes while death accepting ui exists
	if (ui == 3 || ui == 1 || ui == 5) {
		die();
		deathAnimation = 0;
	}
	
	//Name
	if (ui == 1) {
		context.fillStyle = "#444";
		context.globalAlpha = 0.8;
		if (hover["skip"]) {
			context.globalAlpha = 1;
			context.fillStyle = "#000";
		}
		
		context.font="italic 14px Arial";
		context.fillText("skip",280,350);
		roundRect(260,335,40,20);
		context.globalAlpha = 1;
		
		context.fillStyle = "#333";
		context.font="18px Arial";
		context.fillText("Enter your name",164,150);
		
		context.fillStyle = colors["newHigh"];
		roundRect(124, 240, 80, 35, 5, true, false);
		
		if (hover["nameConfirm"]) {
			context.globalAlpha = 0.1;
			context.fillStyle = "#000000";
			roundRect(124, 240, 80, 35, 5, true, false);
		}
		
		context.globalAlpha = 1;
		
		context.font="20px Arial";
		context.fillStyle = colors["slot"];
		context.fillText("Confirm",164,265);
	}	
	
	//Leaderboard
	if (ui == 2) {
		context.fillStyle = "#333";
		context.font="22px Arial";
		context.globalAlpha = 0.5;
		context.fillText("New Highscore!",165,101);
		context.globalAlpha = 1;
		context.fillText("New Highscore!",164,100);
		if (!response) {
			context.font="18px Arial";
			context.fillText("Loading...",164,220);
		} else {
			if (leaderboardScores == null || leaderboardScores == undefined || leaderboardScores == []) {
				context.font="14px Arial";
				context.fillText(leaderboardDataText,164,180);
			} else {
				if (leaderboardScores.length < 10) {
					max = -1;
				} else {
					max = leaderboardScores.length-11;
				}
				
				//Find place of player score
				vc2 = 0;
				for (i = leaderboardScores.length-1; i > -1; i--) {
					if (placeTracker[i] != -1) {
						break;
					}
					vc2++;
				}
				
				vc = 0;
				for (i = leaderboardScores.length-1; i > max; i--) {
					context.font="15px Arial";
					if (vc == vc2 && vc < 10) {
						context.fillStyle = "#a55";
						context.font="10px Arial";
						context.fillText("\u25B6",55,128+(20*vc));
						context.font="15px Arial";
					} else {
						context.fillStyle = "#333";
					}
					context.textAlign = "left";
					context.fillText((vc+1)+". "+leaderboardNames[i],65,130+(20*vc));
					
					
					context.textAlign = "center";
					context.globalAlpha = 0.5;
					context.fillText(leaderboardScores[i]+"",251,131+(20*vc));
					context.globalAlpha = 1;
					context.fillText(leaderboardScores[i]+"",250,130+(20*vc));
					vc++;
				}
				
				if (!(vc2 < 10)) {
					context.fillStyle = "#a55";
					context.textAlign = "left";
					data = JSON.parse(leaderboardDataText[leaderboardDataText.length-1]);
					context.fillText((vc2+1)+". "+data.name,65,130+(20*vc)+13);
					
					context.textAlign = "center";
					context.globalAlpha = 0.5;
					context.fillText(data.score+"",251,131+(20*vc)+13);
					context.globalAlpha = 1;
					context.fillText(data.score+"",250,130+(20*vc)+13);
				}
			}
			
			//draw show all button
			context.fillStyle = colors["button"];
		
			//button
			context.globalAlpha = 0.2;
			roundRect(292, 368, 35, 20, 5, true, false);
			
			if (hover["showAll"]) {
				context.globalAlpha = 0.1;
				context.fillStyle = "#000000";
				roundRect(292, 368, 35, 20, 5, true, false);
			}

			context.globalAlpha = 1;
			
			//text
			context.font="italic 13px Arial";
			context.fillStyle = colors["button"];
			context.fillText("all", 310, 382);
		}
		
		//Rate
		context.fillStyle = colors["newHigh"];
	
		//button
		roundRect(10, 345, 35, 35, 5, true, false);
		
		if (hover["rate"]) {
			context.globalAlpha = 0.1;
			context.fillStyle = "#000000";
			roundRect(10, 345, 35, 35, 5, true, false);
		}

		context.globalAlpha = 1;
		
		//text
		context.font="20px Arial";
		context.fillStyle = colors["slot"];
		context.fillText("\u272D",10+35/2, 345+35/2+6);
		
		//Rate Tooltip
		


		text = "Please Rate!";
		size = 73;
		
		if (hover["rate"]) {
			jiggle = globalTimer % 3;
			
			context.fillStyle = colors["button"];
			roundRect(mouseX+jiggle, mouseY-20, size, 20, 2.5, true, false);
			
			context.globalAlpha = 0.4;
			context.fillStyle = "#000";
			roundRect(mouseX+jiggle, mouseY-20, size, 20, 2.5, true, false);
			context.globalAlpha = 1;
			
			context.textAlign = "start";
			context.font="12px Arial";

			context.fillStyle = colors["newHigh"];

			context.fillText(text, mouseX+2+jiggle, mouseY-6);
			
			context.textAlign = "center";
		}
		
		if (leaderboardScores) {
			context.fillStyle = "#333";
			context.font="italic 16px Arial";
			context.globalAlpha = 0.5;
			context.textAlign = "right";
			context.fillText("of "+leaderboardScores.length,308,364);
			context.textAlign = "center";
			
		}
	}
	
	//Top Ten
	if (ui == 3) {
		context.fillStyle = "#333";
		context.font="22px Arial";
		context.globalAlpha = 0.5;
		context.fillText("Top 10",165,101);
		context.globalAlpha = 1;
		context.fillText("Top 10",164,100);
		if (!response) {
			context.font="18px Arial";
			context.fillText("Loading...",164,220);
		} else {
			if (leaderboardScores == null || leaderboardScores == undefined || leaderboardScores == []) {
				context.font="14px Arial";
				context.fillText(leaderboardDataText,164,180);
			} else {
				if (leaderboardScores.length < 10) {
					max = -1;
				} else {
					max = leaderboardScores.length-11;
				}
				
				vc = 0;
				for (i = leaderboardScores.length-1; i > max; i--) {
					context.font="15px Arial";
					context.fillStyle = "#333";
					context.textAlign = "left";
					context.fillText((vc+1)+". "+leaderboardNames[i],65,130+(20*vc));
					
					
					context.textAlign = "center";
					context.globalAlpha = 0.5;
					context.fillText(leaderboardScores[i]+"",251,131+(20*vc));
					context.globalAlpha = 1;
					context.fillText(leaderboardScores[i]+"",250,130+(20*vc));
					vc++;
				}
			}
			
			//draw show all button
			context.fillStyle = colors["button"];
		
			//button
			context.globalAlpha = 0.2;
			roundRect(292, 368, 35, 20, 5, true, false);
			
			if (hover["showAll"]) {
				context.globalAlpha = 0.1;
				context.fillStyle = "#000000";
				roundRect(292, 368, 35, 20, 5, true, false);
			}

			context.globalAlpha = 1;
			
			//text
			context.font="italic 13px Arial";
			context.fillStyle = colors["button"];
			context.fillText("all", 310, 382);
		}

		if (leaderboardScores) {
			context.fillStyle = "#333";
			context.font="italic 16px Arial";
			context.globalAlpha = 0.5;
			context.textAlign = "right";
			context.fillText("of "+leaderboardScores.length,308,364);
			context.textAlign = "center";
		}
		
	}
	
	//No save leaderboard
	if (ui == 4) {
		context.fillStyle = "#333";
		context.font="22px Arial";
		context.globalAlpha = 0.5;
		context.fillText("New Highscore!",165,101);
		context.globalAlpha = 1;
		context.fillText("New Highscore!",164,100);

		context.font="16px Arial";
		context.fillText("Leaderboard scores can't use save data",164,220);
	}
	
		
	//Tutorial
	if (ui == 5) {
		context.fillStyle = "#333";
		context.font="23px Arial";
		context.globalAlpha = 0.5;
		context.fillText("Tutorial",165,101);
		context.globalAlpha = 1;
		context.fillText("Tutorial",164,100);
		
		context.font="13px Arial";
		
		context.textAlign = "start";
		context.globalAlpha = 0.5;
		context.fillText("How to play:",31,136);
		context.globalAlpha = 1;
		context.fillText("How to play:",30,135);
		
		//How to play
		context.fillStyle = "#555";
		
		context.fillText("Try and copy the movement of the tile.",45,160);
		context.fillText("Press the play button to show the sequence",45,175);
		context.fillText("and once it's finished, use the arrow",45,190);
		context.fillText("keys (or WASD) to copy it",45,205);
		
		context.fillStyle = "#333";
		context.globalAlpha = 0.5;
		context.fillText("Shortcuts:",31,241);
		context.globalAlpha = 1;
		context.fillText("Shortcuts:",30,240);
		
		//Controls
		context.fillStyle = "#555";
		context.fillText("R: Restart/Back",45,265);
		context.fillText("SPACE: Play",45,280);
		
		context.fillText("Additional buttons can be found by clicking",30,320);
		context.fillText("the circled icon at the top right of the screen",30,335);
		
		context.beginPath();
		context.strokeStyle = colors["buttons"];
		context.arc(69+(80*2)+30+35+10,69+10-5+10,15,0,2*Math.PI);
		context.stroke();
		
		context.globalAlpha = 0.15;
		var img=document.getElementById("menu");
		context.imageSmoothingEnabled = false;
		context.drawImage(img,69+(80*2)+30+35,69+10-5,20,20);
		context.imageSmoothingEnabled = true;
		
		
		context.textAlign = "center";
		context.globalAlpha = 1;
	}
	
	//Rate please popup
	if (ui == 6) {
		context.fillStyle = "#333";
		context.font="18px Arial";
		context.fillText("If you are enjoying this game",160,205-50);
		context.fillText("please consider rating it so",160,230-50);
		context.fillText("more people can find it! \u263A",160,255-50);
		
		//Rate
		context.fillStyle = colors["newHigh"];
	
		//button
		roundRect(10+100, 345-100, 110, 35, 5, true, false);
		
		if (hover["rate2"]) {
			context.globalAlpha = 0.1;
			context.fillStyle = "#000000";
			roundRect(10+100, 345-100, 110, 35, 5, true, false);
		}

		context.globalAlpha = 1;
		
		//text
		context.font="20px Arial";
		context.fillStyle = colors["slot"];
		
		context.textAlign = "start";
		context.fillText("\u272D Rate? \u272D",35/2+100, 345+35/2+6-100);
		context.textAlign = "center";
		
		//Rate Tooltip
		


		text = "Please Rate!";
		size = 73;
		
		if (hover["rate2"]) {
			jiggle = globalTimer % 3;
			
			context.fillStyle = colors["button"];
			roundRect(mouseX+jiggle, mouseY-20, size, 20, 2.5, true, false);
			
			context.globalAlpha = 0.4;
			context.fillStyle = "#000";
			roundRect(mouseX+jiggle, mouseY-20, size, 20, 2.5, true, false);
			context.globalAlpha = 1;
			
			context.textAlign = "start";
			context.font="12px Arial";

			context.fillStyle = colors["newHigh"];

			context.fillText(text, mouseX+2+jiggle, mouseY-6);
			
			context.textAlign = "center";
		}
	}
}

function grid() {
	slotSize = 70;
	slotRound = 5;
	slotStart = {x:9,y:69}
	
	context.beginPath();
	
	context.fillStyle = colors["bg"];
	roundRect(3, 63, 4*80+3, 4*80+3, 5, true, false);
	
	context.fillStyle = colors["slot"];
	context.globalAlpha = 0.35;

	for (x = 0; x < 4; x++)  {
		for (y = 0; y < 4; y++)  {
			//Coordinate System Positions
			xpos = 9+(80*x);
			ypos = 69+(80*y);
			
			//Draw grid slot
			roundRect(xpos, ypos, slotSize, slotSize, slotRound, true, false);
			
			//Draw possible previous position
			for (i = 0; i < pos.length; i++) {
				if (pos[i].x == x && pos[i].y == y) {
					context.globalAlpha = 0.2;
					context.fillStyle = colors["button"];
					roundRect(xpos, ypos, slotSize, slotSize, slotRound, true, false);
					context.fillStyle = colors["slot"];
					context.globalAlpha = 0.35;
					break;
				}
			}
			
			if (player.x == x && player.y == y) {
				//Draw Player
				context.globalAlpha = 1;
				if (ai) {
					context.fillStyle = colors["d1"];
				} else {
					context.fillStyle = colors["player"];
				}
				
				//Animation
				if (player.direction) {
					if (player.direction == UP) {
						xposSlide = xpos;
						yposSlide = ypos - (80/moveTimerMax)*(moveTimerMax-moveTimer);
					}
					if (player.direction == DOWN) {
						xposSlide = xpos;
						yposSlide = ypos + (80/moveTimerMax)*(moveTimerMax-moveTimer);
					}
					if (player.direction == LEFT) {
						xposSlide = xpos - (80/moveTimerMax)*(moveTimerMax-moveTimer);
						yposSlide = ypos;
					}
					if (player.direction == RIGHT) {
						xposSlide = xpos + (80/moveTimerMax)*(moveTimerMax-moveTimer);
						yposSlide = ypos;
					}
					
					roundRect(xposSlide, yposSlide, slotSize, slotSize, slotRound, true, false);
				} else {
					roundRect(xpos, ypos, slotSize, slotSize, slotRound, true, false);
					if (deathAnimation) {
						context.globalAlpha = 0.3;
						context.fillStyle = colors["death"];
						roundRect(xpos, ypos, slotSize, slotSize, slotRound, true, false);
					}
					context.globalAlpha = 1;
				}
				
				context.globalAlpha = 0.35;
				context.fillStyle = colors["slot"];
			}
		}
	}
	
	context.globalAlpha = 0.10;
	if (!ui && !deathAnimation && !menu) {
		var img=document.getElementById("menu");
		context.imageSmoothingEnabled = false;
		if (hover["menu"]) {
			context.globalAlpha = 0.3;
		}
		context.drawImage(img,69+(80*2)+30+35,69+10-5,20,20);
		context.imageSmoothingEnabled = true;
	}
	
	if (ai || deathAnimation) {
		context.globalAlpha = 0.1;
		context.fillStyle = "#000000";
		roundRect(3, 63, 4*80+3, 4*80+3, 5, true, false);
	}	
	
	if (ui) {
		context.globalAlpha = 0.7;
		context.fillStyle = colors["white"];
		roundRect(3, 63, 4*80+3, 4*80+3, 5, true, false);
	}
	
	//Decide on scanlines
	if (JSON.stringify(colors) != JSON.stringify(defaultColors)) {
		if (isNaN(colors["player"][6])) {
			context.globalAlpha = 0.05;
			var img=document.getElementById("scanLines");
			context.drawImage(img,0,0,canvas.width,canvas.height);
		}
	}
	context.globalAlpha = 1;
}

function die(saveGame) {
	globalTimer = 0;

	if (score == highscore && score > 5 && saveGame == undefined && !denyPost) {
		postScore();
		ui = 2;
	} else {
		if (score == highscore && score > 5) {
			ui = 4;
		} else {
			
			if (!(ui == 3 || ui == 1 || ui == 5)) {
				//Every 15 deaths (or 10 for the first time) ask to rate if the rate button has never been pressed and their highscore is better than 20
				localStorage.setItem("plays", parseInt(localStorage.getItem("plays"))+1);
				plays = parseInt(localStorage.getItem("plays"));
				
				if (plays % 15 == 0 && plays < 50) {
					if (localStorage.getItem("didrate") == undefined || localStorage.getItem("didrate") == "" || localStorage.getItem("didrate") == "null" || localStorage.getItem("didrate") == null) {
						if (highscore > 20) {
							ui = 6;
						}
					}
				}
				
				if (highscore > 25 && plays < 15) {
					if (localStorage.getItem("didrate") == undefined || localStorage.getItem("didrate") == "" || localStorage.getItem("didrate") == "null" || localStorage.getItem("didrate") == null) {
						ui = 6;
						localStorage.setItem("plays",16);
					}
				}
			}
		}
	}
	
	plays = parseInt(localStorage.getItem("plays"));
	if (score == highscore && !(ui == 3 || ui == 1 || ui == 5) && plays % 15 != 0) {
		localStorage.setItem("plays", parseInt(localStorage.getItem("plays"))+1);
	}
	
	//Save data
	
	if (saveGame == undefined) {
		localStorage.setItem("z2807", 0);
		localStorage.setItem("z3169", 0);
		localStorage.setItem("z9951", "[]");
		localStorage.setItem("z9838", 30);
		
		deathAnimation = 100;
		
		aiDirections = [];
		score = 0;
		aiTimerMax = 30;
		round = 0;
		denyPost = false;
	} else {
		score = parseInt(localStorage.getItem("z2807"));
		round = parseInt(localStorage.getItem("z3169"));
		aiDirections = localStorage.getItem("z9951").replace('"',"").split("[")[1].replace('"',"").split("]")[0].replace('"',"").split(",");
		
		for (i = 0; i < aiDirections.length; i++) {
			aiDirections[i] = parseInt(aiDirections[i]);
		}
		
		aiTimerMax = parseInt(localStorage.getItem("z9838"));
		
		deathAnimation = 0;
		denyPost = true;
	}
	

	ai = false;
	aiTurn = 0;
	aiTimer = 0;
	turn = 0;
}

function play() {
	menu = false;
	
	player = {x:1,y:1}
	pos = [{x:1,y:1}];
	turn = 0;
			
	//Spawn
	if (aiDirections.length == 0) {
		addAiDirection(4);
		score = 0;
		player = {x:1,y:1}
		pos = [{x:1,y:1}];
	}
	ai = true;
	if (round+4 > aiDirections.length) {
		addAiDirection(1);
	}
}

function playButtonSound() {
	if (!muted) {
		sound = sounds["button"].cloneNode(true);
		sound.volume = 0.3;
		sound.play();
	}
}

function popup() {
	roundRect()
}

function reload() {
	if (ui || deathAnimation || keysPressed.length) {
		menu = false;
	}
	
	if (keysPressed[R] && !deathAnimation) {
		die();
	}
	
	if (!ai && pos.length > aiDirections.length && !deathAnimation && !ui) {
		round++;
		if (aiTimerMax > 15) {
			aiTimerMax-=2;
		}
		play();
	}
	
	document.getElementById("myCanvas").setAttribute("style","background-color: "+colors["white"]+";");
	context.clearRect(0, 0, canvas.width, canvas.height);
	grid();
	
	buttons();
	
	popup();
	
	if (keysPressed[SPACE] && !ai && pos.length == 1 && !deathAnimation && !ui) {
		play();
	}
	
	if (ui == 1 && keysPressed[ENTER]) {
		confirmTheName();
	}
	
	//If not in transition & movement direction still present (just finished transition)
	if (moveTimer == 0 && player.direction != undefined || (!ai &&
		(moveTimer != 0 && //Skip the movement animation early
		keysPressedOld != keysPressed && 
		(
			keysPressed[UP] || 
			keysPressed[DOWN] || 
			keysPressed[LEFT] || 
			keysPressed[RIGHT] || 
			keysPressed[W] || 
			keysPressed[A] || 
			keysPressed[S] ||  
			keysPressed[D]
		)))
		) {
		//Translate
		if (player.direction == UP) {
			player.y -= 1;
		}
		if (player.direction == DOWN) {
			player.y += 1;
		}
		if (player.direction == LEFT) {
			player.x -= 1;
		}
		if (player.direction == RIGHT) {
			player.x += 1;
		}
		
		//Add to previous pos list
		pos[pos.length] = {x:player.x,y:player.y}
	
		player.direction = undefined;
		
		moveTimer = 0;
	}
	
	if (moveTimer > 0) {
		//Decrement Timer
		moveTimer--;
	}
	
	//Setting initial direction
	newAnimation = false;
	
	if (!ai && !deathAnimation && !ui) {
		if ((keysPressed[UP] || keysPressed[W]) && !moveTimer && player.y != 0) {
			player.direction = UP;
			newAnimation = true;
		}
		if ((keysPressed[DOWN] || keysPressed[S]) && !moveTimer && player.y != 3) {
			player.direction = DOWN;
			newAnimation = true;
		}
		if ((keysPressed[LEFT] || keysPressed[A]) && !moveTimer && player.x != 0) {
			player.direction = LEFT;
			newAnimation = true;
		}
		if ((keysPressed[RIGHT] || keysPressed[D]) && !moveTimer && player.x != 3) {
			player.direction = RIGHT;
			newAnimation = true;
		}
	} else {
		//Die ai
		if (aiTurn == aiDirections.length && aiTimer == 0) {
			ai = false;
			aiTurn = 0;
			//Reset pos
			player = {x:1,y:1}
			pos = [{x:1,y:1}];
			
			//Save data
			localStorage.setItem("z2807", score);
			localStorage.setItem("z2914", highscore);
			localStorage.setItem("z3169", round);
			localStorage.setItem("z9951", JSON.stringify(aiDirections));
			localStorage.setItem("z9838", aiTimerMax);
			
		} else {
			if (aiTimer == 0) {
				aiTimer = aiTimerMax;
				player.direction = aiDirections[aiTurn];
				newAnimation = true;
				aiTurn++;
			}
			if (aiTimer > 0) {
				aiTimer--;
			}
		}
	}
	
	if (newAnimation) {
		moveTimer = moveTimerMax;
		if (!ai) {
			score++;
			turn++;
			
			if (aiDirections[turn-1] != player.direction) {
				score--;
				die();
			}
		}
		
		//Play sound for direction
		if (!muted) {
			sound = sounds[player.direction];
			if (deathAnimation == 100) {
				sound = sounds[player.direction+100];
			} else if (!ai) {
				sound = sounds[player.direction+50];
			}
			sound = sound.cloneNode(true);
			sound.volume = 0.3;
			sound.play();
		}
	}
	
	keysPressedOld = keysPressed;
	keysPressed = [];
	
	if (score > highscore && !(typeof score === 'string')) {
		highscore = score;
		localStorage.setItem("z2914",highscore);
	}
	
	if (deathAnimation > 0) {
		deathAnimation--;
	}	
	
	if (eeT > 0) {
		eeT--;
	} else {
		eeS = 0;
	}
	
	if (!ui && !deathAnimation) {
		icons();
	}
	
	displayUi();
	
	globalTimer++;
}

setInterval(reload,8);

window.addEventListener("keydown",
	function(e){
		keysPressed[e.keyCode] = true;
		if (e.keyCode == R && (ui == 2 || ui == 3 || ui == 4)) {
			hideUi();
		} 
	},
false);

function mute() {
	muted = !muted;
	if (muted) {
		localStorage.setItem("mute", 1);
	} else {
		localStorage.setItem("mute", 0);
	}
}

function confirmTheName() {
	thename = document.getElementById("nameMemTile").value;
	if (hover["skip"]) {
		if (localStorage.getItem("z1757") == undefined || localStorage.getItem("z1757") == "" || localStorage.getItem("z1757") == "null" || localStorage.getItem("z1757") == null) {
			thename = "Player";
		} else {
			thename = localStorage.getItem("z1757");
		}
	}
	if (thename.length > 0) {
		playButtonSound();
		hideUi();
		if (localStorage.getItem("z1757") == undefined || localStorage.getItem("z1757") == "" || localStorage.getItem("z1757") == "null" || localStorage.getItem("z1757") == null) {
			ui = 5;
		}
		localStorage.setItem("z1757",thename);
		name = localStorage.getItem("z1757");
	}
}

//Mouse Input
$(canvas)
	.bind('touchstart mousedown',function(e){
		e.preventDefault()
		if (e.touches == undefined) {
			mouseX = e.clientX;
			mouseY = e.clientY;
		} else {
			mouseX = parseInt(e.touches[0].pageX);
			mouseY = parseInt(e.touches[0].pageY);
		}
		
		if ((hover["rate"] && ui == 2) || (hover["rate2"] && ui == 6) || (hover["star"] && !ui && !deathAnimation && menu)) {
			playButtonSound();
			menu = false;
			localStorage.setItem("didrate", 1);
			//Rate Button
			window.open("https://chrome.google.com/webstore/detail/mem-tile-popup-game/pejfmibchmbdoianjkkglffodmgegiak");
		}
	
		if (hover["restart"] && !deathAnimation && !ui) {
			playButtonSound();
			die();
		} else {
			if (hover["restart"] && !deathAnimation && ui != 1) {
				playButtonSound();
				hideUi();
			}
			//Allow backing out of name menu if name is already defined
			if (hover["restart"] && !deathAnimation && ui == 1 && !(localStorage.getItem("z1757") == undefined || localStorage.getItem("z1757") == "" || localStorage.getItem("z1757") == "null" || localStorage.getItem("z1757") == null)) {
				playButtonSound();
				hideUi();
			}
		}
		
		if (hover["play"] && !ai && pos.length == 1 && !deathAnimation && !ui) {
			playButtonSound();
			play();
		}		
		
		if (hover["color"] && !ui && !deathAnimation && menu) {
			playButtonSound();
			if (JSON.stringify(colors) == JSON.stringify(defaultColors)) {
				generatePallete();
				localStorage.setItem("z8487", JSON.stringify(colors));
			} else {
				colors = JSON.parse(JSON.stringify(defaultColors));
				localStorage.setItem("z8487", JSON.stringify(defaultColors));
			}
		}		
		
		if (hover["leaderboard"] && !ui && !deathAnimation && menu) {
			playButtonSound();
			getScore();
			ui = 3;
			menu = false;
		}				
		if (hover["mute"] && !ui && !deathAnimation && menu) {
			mute();
			ui = 0;
			menu = false;
		}		
		if (hover["rename"] && !ui && !deathAnimation && menu) {
			playButtonSound();
			ui = 1;
			document.getElementById("nameMemTile").value = localStorage.getItem("z1757");
			menu = false;
			setTimeout(function () {$("#nameMemTile").show(); document.getElementById("nameMemTile").focus(); document.getElementById("nameMemTile").select();}, 10);
		}				
		if (hover["at"] && !ui && !deathAnimation && menu) {
			playButtonSound();
			menu = false;
			window.open("mailto:james.app1236@gmail.com");
		}				
		if (hover["plus"] && !ui && !deathAnimation && menu) {
			playButtonSound();
			menu = false;
			window.open("moregames/moreGames.html");
		}		
		if (hover["tutorial"] && !ui && !deathAnimation && menu) {
			playButtonSound();
			ui = 5;
			menu = false;
		}		
		if (hover["menu"] && !ui && !deathAnimation && !menu) {
			playButtonSound();
			menu = true;
		} else {
			if (hover["menu"] && !ui && !deathAnimation && menu) {
				playButtonSound();
				menu = false;
			}
		}
		
		if (hover["menu"] && ui == 5) {
			playButtonSound();
			ui = 0;
			//setTimeout(function(){menu = true;},10);
		}
		
		if (hover["nameConfirm"] || hover["skip"]) {
			confirmTheName();
		}
		
		if (hover["color"] && !menu) {
			if (eeS == 0) {
				eeS = 1;
				eeT = 200;
			} else {
				eeS = 0;
				eeT = 0;
			}
		}
		
		if (hover["star"] && !menu) {
			if (eeS == 1) {
				eeS = 2;
			} else {
				eeS = 0;
				eeT = 0;
			}
		}
		
		if (hover["leaderboard"] && !menu) {
			if (eeS == 2) {
				eeS = 3;
			} else {
				eeS = 0;
				eeT = 0;
			}
		}		
		
		if (hover["rename"] && !menu) {
			if (eeS == 3) {
				eeS = 4;
			} else {
				eeS = 0;
				eeT = 0;
			}
		}
		
		if (hover["showAll"]) {
			playButtonSound();
			
			//onclick "all" button
			vi = 0;
			leaderboardAllText = "";
			for (i = leaderboardScores.length-1; i > -1; i--) {
				leaderboardAllText+=(vi+1)+" : "+leaderboardNames[i]+" = "+leaderboardScores[i]+"<br>";
				vi++
			}
		
			document.body.innerHTML = "";
			var div = document.createElement("div");
			div.style.position = "fixed";
			div.style.top = "0px";
			div.style.left = "0px";
			div.style.width = "100%";
			div.style.height = "100%";
			div.style.overflow = "scroll";
			div.style.overflowX = "hidden";
			div.innerHTML = leaderboardAllText;
			document.body.appendChild(div);
		}
		
		if (hover["tutorial"] && !menu) {
			if (eeS == 4 && eeT > 1) {
				map = {"61616b":[14,16,23,15,28,48,1,4,25,2,28,82,23,21,12,2,56,4,8,7],"c9eb9a":[72,4,2,1,3,6,36,23,2,34,7,18,6,3,90,50,1,3,6,2,7,8,9],"5b1f8f":["m","C","s","v","J","l","H","e","S","q","a","X","L","z","n","p","M","D","w","y","r","m"," "],"761802":[5,1,2,7,8,9,4,3,0,6],"e991db":[8,7,4,5,2,0,3,1,2,9],"09bd96":[[0,16,23,15,28,48,1,4,25,2,28,82,23,21,12,2,56,4,8,7],[72,4,2,1,3,6,36,23,2,34,7,18,6,3,90,50,1,3,6,2,7,8,9],[[14,16,23,15,28,48,1,4,25,2,28,82,23,21,12,2,56,4,8,7],[72,4,2,1,3,6,36,23,2,34,7,18,6,3,90,50,1,3,6,2,7,8,9],[[5,1,2,7,8,9,4,3,0,6],[8,7,4,5,2,0,3,1,2,9]]]]}
				
				score = map["5b1f8f"][map["761802"][6]] + map["5b1f8f"][map["09bd96"][map["e991db"][7]][map["61616b"][14]+2]/9] + map["5b1f8f"][map["c9eb9a"][map["61616b"][3]]/[map["c9eb9a"][3]]-map["61616b"][5]-2] + map["5b1f8f"][map["761802"][map["c9eb9a"][1]-[map["09bd96"][map["761802"][0][map["61616b"][6]]]]]-1];
				
				score += map["5b1f8f"][map["e991db"][score.indexOf("q")+3]/4+1] + map["5b1f8f"][map["09bd96"][1][map["c9eb9a"][12]] % 26 + map["5b1f8f"].indexOf("q") + map["761802"][7]] + map["5b1f8f"][map["c9eb9a"][map["761802"][map["09bd96"][0][0]]]];

				setTimeout(function () {score = 0}, 5000);
			} else {
				eeS = 0;
				eeT = 0;
			}
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

		if (mouseCollide(6,6,80,50)) {
			hover["restart"] = true;
		} else {
			hover["restart"] = false;
		}
		
		if (mouseCollide(328/2+5-70, 6, 60, 50)) {
			hover["play"] = true;
		} else {
			hover["play"] = false;
		}
		
		if (mouseCollide(260,335,40,20)) {
			hover["skip"] = true;
		} else {
			hover["skip"] = false;
		}

		hoverIcon("color");
		hoverIcon("leaderboard");
		hoverIcon("rename");
		hoverIcon("star");
		hoverIcon("tutorial");
		hoverIcon("at");
		hoverIcon("plus");
		hoverIcon("mute");
		
		if (mouseCollide(10, 345, 35, 35)) {
			hover["rate"] = true;
		} else {
			hover["rate"] = false;
		}		
		
		hover["rate2"] = mouseCollide(10+100, 345-100, 110, 35);

		if (mouseCollide(124,240,80,35)) {
			hover["nameConfirm"] = true;
		} else {
			hover["nameConfirm"] = false;
		}		
		
		if (mouseCollide(69+(80*2)+30+35,69+10-5,20,20)) {
			hover["menu"] = true;
		} else {
			hover["menu"] = false;
		}
		
		if (mouseCollide(292, 368, 35, 20)) {
			hover["showAll"] = true;
		} else {
			hover["showAll"] = false;
		}
		
	});
	
	$('body').on('contextmenu', '#myCanvas', function(e){ return false; });

function hoverIcon(icoName) {
	if (mouseCollide(iconPos[icoName][0],iconPos[icoName][1],50,50)) {
		hover[icoName] = true;
	} else {
		hover[icoName] = false;
	}
}
	
function mouseCollide(x,y,width,height) {
	if (height == undefined) {
		height = width;
	}
	
	if (mouseX > x && mouseX < x+width && mouseY > y && mouseY < y+height) {
		return true;
	}
	return false;
}

function postScore() {
	if (denyPost) {return}
	
	dNow = new Date();
	
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "https://james1236.online/submitScore.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("z1981="+round+
				"&z5649="+JSON.stringify(aiDirections).replace('"',"").split("[")[1].replace('"',"").split("]")[0].replace('"',"")+
				"&z6066="+escape(name)+
				"&z7613="+escape(dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes())+"cHr0mE"+
				"&z0274="+score+
				"&z1092="+aiTimerMax+
				"&z9800="+localStorage.getItem("z0564")
	);
	response = false;

	//Load leaderboard data
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.responseText[0] == "{") {
				leaderboardDataText = this.responseText.slice(0, -1).split("*");
				leaderboardScores = [];
				leaderboardNames = [];
				placeTracker = [];
				for (i = 0; i < leaderboardDataText.length; i++) {
					leaderboardScores[i] = JSON.parse(leaderboardDataText[i]).score;
					leaderboardNames[i] = JSON.parse(leaderboardDataText[i]).name;
					
					if (i != leaderboardDataText.length-1) {
						placeTracker[i] = -1;
					} else {
						placeTracker[i] = highscore;
					}
				}
				leaderboardScores = quickSort(leaderboardScores);
			} else {
				leaderboardDataText = this.responseText;
			}
			response = true;
		}
	}
}

function getScore() {
	if (denyPost) {return}
	
	dNow = new Date();
	
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "https://james1236.online/submitScore.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("z9800=-1");

	response = false;

	//Load leaderboard data
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.responseText[0] == "{") {
				leaderboardDataText = this.responseText.slice(0, -1).split("*");
				leaderboardScores = [];
				leaderboardNames = [];
				placeTracker = [];
				for (i = 0; i < leaderboardDataText.length; i++) {
					leaderboardScores[i] = JSON.parse(leaderboardDataText[i]).score;
					leaderboardNames[i] = JSON.parse(leaderboardDataText[i]).name;
					
					if (i != leaderboardDataText.length-1) {
						placeTracker[i] = -1;
					} else {
						placeTracker[i] = highscore;
					}
				}
				leaderboardScores = quickSort(leaderboardScores);
			} else {
				leaderboardDataText = this.responseText;
			}
			response = true;
		}
	}
}

function counter() {
	dNow = new Date();
	
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "https://james1236.online/submitScore.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("z9800="+localStorage.getItem("z0564")+"&z5649=-2&z7613="+escape(dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes()));
}

function roundRect(x, y, width, height, radius, fill, stroke) {
	if (typeof stroke == 'undefined') {
		stroke = true;
	}
	if (typeof radius === 'undefined') {
		radius = 5;
	}
	if (typeof radius === 'number') {
		radius = {tl: radius, tr: radius, br: radius, bl: radius};
	} else {
		var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
		for (var side in defaultRadius) {
			radius[side] = radius[side] || defaultRadius[side];
		}
	}
	context.beginPath();
	context.moveTo(x + radius.tl, y);
	context.lineTo(x + width - radius.tr, y);
	context.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
	context.lineTo(x + width, y + height - radius.br);
	context.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
	context.lineTo(x + radius.bl, y + height);
	context.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
	context.lineTo(x, y + radius.tl);
	context.quadraticCurveTo(x, y, x + radius.tl, y);
	context.closePath();
	if (fill) {
		context.fill();
	}
	if (stroke) {
		context.stroke();
	}
}

function generatePallete() {
	tries = 0;
	for (color in colors) {
		if (lumas[color] != -1) {
			while (1) {
				tries++;
				colors[color] = randHex(2);
				
				if (Math.round(getLuma(colors[color])) > lumas[color]-5 && Math.round(getLuma(colors[color])) < lumas[color]+5) {
					break;
				}
				
				if (tries > 10000) {
					colors = JSON.parse(JSON.stringify(defaultColors));
					return;
				}
			}
		}
	}
}

function randInt(max){
	return Math.trunc(Math.random() * (max - 0));
}

function randHex(type) {
	lightHex = ["a","b","c","d","e"];
	darkHex = [0,1,2,3,4,5,6,7,8,9];
	allHex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
	
	if (type == undefined || type == 0) {
		var hex = "#" + lightHex[randInt(lightHex.length)] + lightHex[randInt(lightHex.length)] + lightHex[randInt(lightHex.length)];
	}
	if (type == 1) {
		var hex = "#" + darkHex[randInt(darkHex.length)] + darkHex[randInt(darkHex.length)] + darkHex[randInt(darkHex.length)];
	}		
	if (type == 2) {
		var hex = "#" + allHex[randInt(allHex.length)] + allHex[randInt(allHex.length)] + allHex[randInt(allHex.length)] + allHex[randInt(allHex.length)] + allHex[randInt(allHex.length)] + allHex[randInt(allHex.length)];
	}
	return hex;
}

function getLuma(hex) {
	var hex = hex.substring(1);  //strip #
	var rgb = parseInt(hex, 16); // convert rrggbb to decimal
	var r = (rgb >> 16) & 0xff;  // extract red
	var g = (rgb >>  8) & 0xff;  // extract green
	var b = (rgb >>  0) & 0xff;  // extract blue

	return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}


function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    var temp2 = leaderboardNames[firstIndex];
    var temp3 = placeTracker[firstIndex];
    items[firstIndex] = items[secondIndex];
    leaderboardNames[firstIndex] = leaderboardNames[secondIndex];
    placeTracker[firstIndex] = placeTracker[secondIndex];
    items[secondIndex] = temp;
    leaderboardNames[secondIndex] = temp2;
    placeTracker[secondIndex] = temp3;
}



