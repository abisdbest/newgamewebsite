$(document).ready(function() {
var Level = 1;
var Playing = false;
var LHeight = 1;
var change = false;



  Player = Player = true;
  Level = Level = 1;

  var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
  var img = document.getElementById('christmas')
  var pat = ctx.createPattern(img, 'repeat-x');

  const HEIGHT = canvas.height;
  const WIDTH = canvas.width;
  const leftArrow = 37;
  const rightArrow = 39;
  var up = true;
  var up2 = false;
  var speed = 2;

  var keyPressed = null;

  var player1 = {
    x: WIDTH/10,
    y: HEIGHT/1.5,
    width: 10,
    height: 20,
    draw: function() {
      ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
    }
  };

  var obstacle1 = {
    x: WIDTH/1.5,
    y: HEIGHT/1.5,
    width: 30,
    height: 20,
    draw: function() {
      ctx.fillRect(obstacle1.x, obstacle1.y, obstacle1.width, obstacle1.height);
    }
  };

  var obstacle2 = {
    x: WIDTH/5,
    y: HEIGHT/2.5,
    width: 30,
    height: 20,
    draw: function() {
      ctx.fillRect(obstacle2.x, obstacle2.y, obstacle2.width, obstacle2.height);
    }
  };

  var goal1 = {
    x: WIDTH/1,
    y: 0,
    width: -30,
    height: HEIGHT,
    draw: function() {
      ctx.fillRect(goal1.x, goal1.y, goal1.width, goal1.height);
    }
  };

  var teleport1 = {
    x: WIDTH/1,
    y: 0,
    width: -30,
    height: HEIGHT,
    draw: function() {
      ctx.fillRect(teleport1.x, teleport1.y, teleport1.width, teleport1.height);
    }
  };

  var random1 = {
    x: WIDTH/1,
    y: 0,
    width: -30,
    height: HEIGHT,
    draw: function() {
      ctx.fillRect(random1.x, random1.y, random1.width, random1.height);
    }
  };

  var timer1 = {
    x: WIDTH/1,
    y: HEIGHT,
    width: 0,
    height: 0,
    draw: function() {
      ctx.fillRect(timer1.x, timer1.y, timer1.width, timer1.height)
    }
  };

  var boss1 = {
    x: 0,
    y: 0,
    height: 0,
    width: 0,
    draw: function() {
      ctx.fillRect(boss1.x, boss1.y, boss1.width, boss1.height);
    }
  };

  function draw() {
    ctx.fillRect(0, 0, WIDTH, HEIGHT); // Fill the background black

		ctx.save(); // Save current settings of drawing

    if (Level != "8a" && Level != 11 && Level != "Winner") {
      ctx.fillStyle = "yellow";
      goal1.draw();
    }
		// Drawing the game objects in white
    if (Level == "Winner") {
      ctx.fillStyle = "yellow";
    }
    else if (selection == 1) {
      ctx.fillStyle = "red";
    }
    else if (selection == 2) {
      ctx.fillStyle = "aqua";
    }
    else if (selection == 3) {
      ctx.fillStyle = "#0080FF";
    }
    else if (selection == 4) {
      ctx.fillStyle = "#32CD32";
    }
    else if (selection == 5) {
      ctx.fillStyle = "black";
    }
    else if (selection == 7) {
      ctx.fillStyle = pat;
    }
    else {
      ctx.fillStyle = "white";
    }
    player1.draw();

    if (Level == 1) {
      ctx.fillStyle = "red";
      obstacle1.draw();
      obstacle2.draw();
    }
    else if (Level == 2) {
      ctx.fillStyle = "red";
      obstacle1.draw();
      obstacle2.draw();
    }
    else if (Level == 3) {
      ctx.fillStyle = "red";
      obstacle2.draw();
      obstacle1.draw();
    }
    else if (Level == 4) {
      ctx.fillStyle = "red";
      obstacle2.draw();
      obstacle1.draw();
    }
    else if (Level == 5) {
      ctx.fillStyle = "red";
      obstacle2.draw();
      obstacle1.draw();
    }
    else if (Level == 6) {
      ctx.fillStyle = "red";
      obstacle2.draw();
      obstacle1.draw();
      ctx.fillStyle = "#0080FF";
      teleport1.draw();
    }
    else if (Level == 7) {
      ctx.fillStyle = "red";
      obstacle2.draw();
      //obstacle1.draw();
      ctx.fillStyle = "#0080FF";
      teleport1.draw();
      ctx.fillStyle = "#32CD32";
      random1.draw();
    }
    else if (Level == "8a") {
      ctx.fillStyle = "red";
      //obstacle2.draw();
      obstacle1.draw();
      ctx.fillStyle = "#0080FF";
      teleport1.draw();
      ctx.fillStyle = "#32CD32";
      random1.draw();
    }
    else if (Level == "8b") {
      ctx.fillStyle = "red";
      obstacle2.draw();
      obstacle1.draw();
      ctx.fillStyle = "#0080FF";
      //teleport1.draw();
      ctx.fillStyle = "#32CD32";
      random1.draw();
    }
    else if (Level == 9) {
      ctx.fillStyle = "red";
      obstacle2.draw();
      obstacle1.draw();
      timer1.draw();
      ctx.fillStyle = "#0080FF";
      //teleport1.draw();
      ctx.fillStyle = "#32CD32";
      //random1.draw();
    }
    else if (Level == 10) {
      ctx.fillStyle = "red";
      obstacle2.draw();
      obstacle1.draw();
      timer1.draw();
      ctx.fillStyle = "#0080FF";
      //teleport1.draw();
      ctx.fillStyle = "#32CD32";
      random1.draw();
      ctx.fillStyle = "#7851a9";
      boss1.draw();
    }
    else if (Level == 11) {
      coins = Number(coins) + 75;
      Level = Level = "Winner";
      document.getElementById("title").innerHTML = "You Win... Now go away"
    }


    ctx.restore();
  }

  function update() {
    speed = speed = 2;

    if (Level == 5 || Level == 9) {
      speed = speed = 1;
    }
    else if (Level == 8) {
      speed = speed = 6;
    }

    if (Level == "8a" || Level == "8b") {
      document.getElementById('title2').innerHTML = "Level: " + 8;
    }
    else {
      document.getElementById('title2').innerHTML = "Level: " + Level;
    }

    if (Level == "8a" || Level == "8b" || Level == 10) {
      if (keyUpDown == true && player1.y > 0){
        player1.y -= speed;
      }
      if (keyDownDown == true && player1.y < HEIGHT) {
        player1.y += speed;
      }
      if (keyLeftDown == true && player1.x >= 0) player1.x -= speed;
      if (keyRightDown == true && player1.x <= WIDTH) player1.x += speed;
    }
    else {
      if (keyUpDown ==  true && Level != 6 && Level != 7){
          player1.y = HEIGHT/2.5;
      }
      if (keyDownDown == true && Level != 6 && Level != 7) {
        player1.y = HEIGHT/1.5;
      }
      if (keyRightDown == true && player1.x <= WIDTH) player1.x += speed;
      if (keyLeftDown == true && player1.x >= 0) player1.x -= speed;
    }


    let collided1b = checkCollision(player1, obstacle1);

    if (collided1b) {
      /*if (Level == 1) {
        coins = Number(coins) + 0;
      }
      else if (Level == 2) {
        coins = Number(coins) + 2;
      }
      else if (Level == 3) {
        coins = Number(coins) + 5;
      }
      else if (Level == 4) {
        coins = Number(coins) + 10;
      }
      else if (Level == 5) {
        coins = Number(coins) + 15;
      }
      else if (Level == 6) {
        coins = Number(coins) + 25;
      }
      else if (Level == 7) {
        coins = Number(coins) + 35;
      }
      else if (Level == 8) {
        coins = Number(coins) + 40;
      }
      else if (Level == 9) {
        coins = Number(coins) + 45;
      }
      else if (Level == 10) {
        coins = Number(coins) + 50;
      }*/
      Level = 1;
      init();
    }

    let collided2 = checkCollision(player1, obstacle2);

    if (collided2 && Level != "8a") {
      /*if (Level == 1) {
        coins = Number(coins) + 0;
      }
      else if (Level == 2) {
        coins = Number(coins) + 2;
      }
      else if (Level == 3) {
        coins = Number(coins) + 5;
      }
      else if (Level == 4) {
        coins = Number(coins) + 10;
      }
      else if (Level == 5) {
        coins = Number(coins) + 15;
      }
      else if (Level == 6) {
        coins = Number(coins) + 25;
      }
      else if (Level == 7) {
        coins = Number(coins) + 35;
      }
      else if (Level == 8) {
        coins = Number(coins) + 40;
      }
      else if (Level == 9) {
        coins = Number(coins) + 45;
      }
      else if (Level == 10) {
        coins = Number(coins) + 50;
      }*/
      Level = 1;
      init();
    }

    let collided3 = checkCollision(player1, teleport1);

    if (collided3) {
      if (Level == 6) {
        player1.y = HEIGHT/2.5;
        player1.x = WIDTH/10;
      }
      if (Level == 7) {
        player1.y -= 20;
        player1.x = WIDTH/10;
      }
      if (Level == "8a") {
        Level = Level = "8b";
        init();
        player1.y -= 20;
        player1.x = WIDTH/10;
      }
    }

    let collided4 = checkCollision(player1, random1);

    if (collided4) {
      if (Level == 7 || Level == "8a" || Level == "8b" || Level == 10) {
        player1.x = WIDTH/10;
        player1.y = HEIGHT/1.15;
      }
    }

    let collided5 = checkCollision(player1, timer1);

    if (collided5 && Level != "8a" && Level != "8b") {
      /*if (Level == 1) {
        coins = Number(coins) + 0;
      }
      else if (Level == 2) {
        coins = Number(coins) + 2;
      }
      else if (Level == 3) {
        coins = Number(coins) + 5;
      }
      else if (Level == 4) {
        coins = Number(coins) + 10;
      }
      else if (Level == 5) {
        coins = Number(coins) + 15;
      }
      else if (Level == 6) {
        coins = Number(coins) + 25;
      }
      else if (Level == 7) {
        coins = Number(coins) + 35;
      }
      else if (Level == 8) {
        coins = Number(coins) + 40;
      }
      else if (Level == 9) {
        coins = Number(coins) + 45;
      }
      else if (Level == 10) {
        coins = Number(coins) + 50;
      }*/
      Level = 1;
      init();
    }

    let collided6 = checkCollision(player1, boss1);

    if (collided6 && Level != "8a" && Level != "8b") {
      /*if (Level == 1) {
        coins = Number(coins) + 0;
      }
      else if (Level == 2) {
        coins = Number(coins) + 2;
      }
      else if (Level == 3) {
        coins = Number(coins) + 5;
      }
      else if (Level == 4) {
        coins = Number(coins) + 10;
      }
      else if (Level == 5) {
        coins = Number(coins) + 15;
      }
      else if (Level == 6) {
        coins = Number(coins) + 25;
      }
      else if (Level == 7) {
        coins = Number(coins) + 35;
      }
      else if (Level == 8) {
        coins = Number(coins) + 40;
      }
      else if (Level == 9) {
        coins = Number(coins) + 45;
      }
      else if (Level == 10) {
        coins = Number(coins) + 50;
      }*/
      Level = 1;
      init();
    }

    if (Level == 2) {
      if (obstacle1.y < 1) {
        up = true;
      }
      if (obstacle1.y > HEIGHT) {
        up = false;
      }

      if (up == true) {
        obstacle1.y += 5;
        obstacle1.height += 5;
      } else if (up == false) {
        obstacle1.y -= 5;
        obstacle1.height -= 5;
      }
    }
    if (Level == 3) {
      if (obstacle2.x < 1) {
        up = true;
      }
      if (obstacle2.x > WIDTH - 100 || obstacle2.width > WIDTH - 100) {
        up = false;
      }

      if (up == true) {
        obstacle2.x += 3;
        obstacle2.width += 1.5;
      } else if (up == false) {
        obstacle2.x -= 3;
        obstacle2.width -= 1.5;
      }
    }
    if (Level == 4) {
      let speed = 1;

      if (obstacle2.x < 1) {
        up = true;
      }
      if (obstacle2.x > WIDTH - 100 || obstacle2.width > WIDTH - 100) {
        up = false;
      }

      if (up == true) {
        obstacle2.x += speed;
        obstacle2.width = obstacle2.x + 10;
      } else if (up == false) {
        obstacle2.x -= speed;
        obstacle2.width = obstacle2.x + 10;
      }



      if (obstacle1.x < 1) {
        up2 = true;
      }
      if (obstacle1.x > WIDTH - 100 || obstacle1.width > WIDTH - 100) {
        up2 = false;
      }

      if (up2 == true) {
        obstacle1.x += speed;
        obstacle1.width = obstacle1.x + 10;
      } else if (up2 == false) {
        obstacle1.x -= speed;
        obstacle1.width = obstacle1.x + 10;
      }
    }

    if (Level == 5) {
      if (obstacle1.y < 1) {
        up = true;
      }
      if (obstacle1.y > HEIGHT) {
        up = false;
      }

      if (up == true) {
        obstacle1.y += 5;
      } else if (up == false) {
        obstacle1.y -= 10;
      }



      if (obstacle2.height < 1) {
        up2 = true;
      }
      if (obstacle2.height > HEIGHT) {
        up2 = false;
      }

      if (up2 == true) {
        obstacle2.height += 10;
      } else if (up2 == false) {
        obstacle2.height -= 5;
      }
    }

    if (Level == 6) {
      if (obstacle1.y < -10) {
        up = true;
      }
      if (obstacle1.y > HEIGHT) {
        up = false;
      }

      if (up == true) {
        obstacle1.y += 5;
        obstacle1.height += 5;
      } else if (up == false) {
        obstacle1.y -= 5;
        obstacle1.height -= 5;
      }



      if (obstacle2.height < -10) {
        up2 = true;
      }
      if (obstacle2.height > HEIGHT) {
        up2 = false;
      }

      if (up2 == true) {
        obstacle2.height += 5;
        obstacle2.y += 5;
      } else if (up2 == false) {
        obstacle2.height -= 5;
        obstacle2.y -= 5;
      }
    }
    if (Level == 7) {
      if (obstacle2.x < player1.x) {
        obstacle2.x += 1;
        if (obstacle2.height > 1) {
          obstacle2.height -= 1;
        }
      }
      if (obstacle2.x > player1.x) {
        obstacle2.x -= 1;
        if (obstacle2.height > 1) {
          obstacle2.height -= 1;
        }
      }

      if (obstacle2.x == player1.x) {
        if (obstacle2.height < 1) {
          up2 = true;
        }
        if (obstacle2.height > HEIGHT) {
          up2 = false;
        }

        if (up2 == true) {
          obstacle2.height += 4;
        } else if (up2 == false) {
          obstacle2.height -= 2;
        }
      }


      if (random1.height < 1) {
        up = true;
      }
      if (random1.height > HEIGHT) {
        up = false;
      }

      if (up == true) {
        random1.height += 7;
      } else if (up == false) {
        random1.height -= 2;
      }
    }
    else if (Level == "8a") {
      if (random1.x < player1.x) {
        random1.x += 0.75;
      }
      if (random1.x > player1.x) {
        random1.x -= 0.75;
      }
      if (random1.y > player1.y) {
        random1.y -= 0.75;
      }
      if (random1.y < player1.y) {
        random1.y += 0.75;
      }

      if (obstacle1.x < player1.x) {
        obstacle1.x += 0.5;
      }
      if (obstacle1.x > player1.x) {
        obstacle1.x -= 0.5;
      }
      if (obstacle1.y > player1.y) {
        obstacle1.y -= 0.5;
      }
      if (obstacle1.y < player1.y) {
        obstacle1.y += 0.5;
      }
    }
    else if (Level == "8b") {
      if (random1.x < player1.x) {
        random1.x += 1;
      }
      if (random1.x > player1.x) {
        random1.x -= 1;
      }
      if (random1.y > player1.y) {
        random1.y -= 1;
      }
      if (random1.y < player1.y) {
        random1.y += 1;
      }

      if (obstacle1.x < player1.x) {
        obstacle1.x += 0.5;
      }
      if (obstacle1.x > player1.x) {
        obstacle1.x -= 0.5;
      }
      if (obstacle1.y > player1.y) {
        obstacle1.y -= 0.5;
      }
      if (obstacle1.y < player1.y) {
        obstacle1.y += 0.5;
      }

      if (obstacle2.x < player1.x) {
        obstacle2.x += 0.5;
      }
      if (obstacle2.x > player1.x) {
        obstacle2.x -= 0.5;
      }
      if (obstacle2.y > player1.y) {
        obstacle2.y -= 0.5;
      }
      if (obstacle2.y < player1.y) {
        obstacle2.y += 0.5;
      }
    }
    else if (Level == 9) {
      timer1.width += 0.3;

      if (obstacle1.y < 1) {
        up = true;
      }
      if (obstacle1.y > HEIGHT) {
        up = false;
      }

      if (up == true) {
        obstacle1.y += 5;
      } else if (up == false) {
        obstacle1.y -= 10;
      }



      if (obstacle2.height < 1) {
        up2 = true;
      }
      if (obstacle2.height > HEIGHT) {
        up2 = false;
      }

      if (up2 == true) {
        obstacle2.height += 10;
      } else if (up2 == false) {
        obstacle2.height -= 5;
      }
    }
    else if (Level == 10) {
      if (random1.x < player1.x) {
        random1.x += 0.5;
      }
      if (random1.x > player1.x) {
        random1.x -= 0.5;
      }
      if (random1.y > player1.y) {
        random1.y -= 0.5;
      }
      if (random1.y < player1.y) {
        random1.y += 0.5;
      }

      if (obstacle1.x < player1.x) {
        obstacle1.x += 0.5;
      }
      if (obstacle1.x > player1.x) {
        obstacle1.x -= 0.5;
      }
      if (obstacle1.y > player1.y) {
        obstacle1.y -= 0.5;
      }
      if (obstacle1.y < player1.y) {
        obstacle1.y += 0.5;
      }

      if (obstacle2.x < player1.x) {
        obstacle2.x += 0.5;
      }
      if (obstacle2.x > player1.x) {
        obstacle2.x -= 0.5;
      }
      if (obstacle2.y > player1.y) {
        obstacle2.y -= 0.5;
      }
      if (obstacle2.y < player1.y) {
        obstacle2.y += 0.5;
      }

      if (boss1.y > player1.y) {
        boss1.y -= 0.5;
      }
      if (boss1.y < player1.y) {
        boss1.y += 0.5;
      }
      if (boss1.x < player1.x) {
        boss1.x += 1.5;
      }
      if (boss1.x > player1.x) {
        boss1.x -= 0.25;
      }
    }

    if (player1.x >= WIDTH-30 && Level != "8a" && Level != "Winner") {
      if (Level == "8b") {
        Level = 8;
        coins = Number(coins) + 35;
      }
      Level += 1;
      if (Level == 2) {
        coins = Number(coins) + 2;
      }
      else if (Level == 3) {
        coins = Number(coins) + 5;
      }
      else if (Level == 4) {
        coins = Number(coins) + 7;
      }
      else if (Level == 5) {
        coins = Number(coins) + 10;
      }
      else if (Level == 6) {
        coins = Number(coins) + 15;
      }
      else if (Level == 7) {
        coins = Number(coins) + 20;
      }
      else if (Level == 9) {
        coins = Number(coins) + 25;
      }
      else if (Level == 10) {
        coins = Number(coins) + 30;
      }
      if (Level == 8) {
        Level = "8a";
      }
      init();
    }
  }
  function checkCollision(a, b) {
    // Return true if ball collides with others
    return (a.x < b.x + b.width
      && a.y < b.y + b.height
      && b.x < a.x + a.width
      && b.y < a.y + a.height
      && b.x < a.x + a.height
      && b.y < a.y + a.width
    )
  }


  function main() {
		// Initialize the game
		init();

		var loop = function() {

			update();
			draw();

			window.requestAnimationFrame(loop, canvas);
		}
		window.requestAnimationFrame(loop, canvas);
	}

  function init() {
    keyPressed = null;

    timer1.x = 0;
    timer1.y = 0;
    timer1.width = 0;
    timer1.height = 0;

    player1.x = WIDTH/10;
    player1.y = HEIGHT/1.5;
    player1.width = 7;
    player1.height = 20;

    if (Level == 1) {
      obstacle1.x = WIDTH/1.5;
      obstacle1.y = HEIGHT/1.5;
      obstacle1.width = 30;
      obstacle1.height = 20;

      obstacle2.x = WIDTH/5;
      obstacle2.y = HEIGHT/2.5;
      obstacle2.width = 30;
      obstacle2.height = 20;

      random1C();
      boss1C();
      teleport1C();
      timer1C();
    }
    else if (Level == 2) {
      obstacle1.x = WIDTH/2;
      obstacle1.y = HEIGHT/2;
      obstacle1.width = 20;
      obstacle1.height = HEIGHT;

      obstacle2.x = WIDTH/5;
      obstacle2.y = HEIGHT/2.5;
      obstacle2.width = 30;
      obstacle2.height = 20;

      random1C();
      boss1C();
      teleport1C();
      timer1C();
    }
    else if (Level == 3) {
      obstacle1.x = WIDTH/1.5;
      obstacle1.y = HEIGHT/1.5;
      obstacle1.width = 30;
      obstacle1.height = 20;

      obstacle2.x = WIDTH/5;
      obstacle2.y = HEIGHT/2.5;
      obstacle2.width = 30;
      obstacle2.height = 20;

      random1C();
      boss1C();
      teleport1C();
      timer1C();
    }
    else if (Level == 4) {
      obstacle1.x = WIDTH/1.5;
      obstacle1.y = HEIGHT/1.5;
      obstacle1.width = 30;
      obstacle1.height = 20;

      obstacle2.x = WIDTH/5;
      obstacle2.y = HEIGHT/2.5;
      obstacle2.width = 30;
      obstacle2.height = 20;

      random1C();
      boss1C();
      teleport1C();
      timer1C();
    }
    else if (Level == 5) {
      obstacle1.x = WIDTH/2;
      obstacle1.y = HEIGHT/1.25;
      obstacle1.width = 20;
      obstacle1.height = HEIGHT;

      obstacle2.x = WIDTH/4;
      obstacle2.y = 0;
      obstacle2.width = 20;
      obstacle2.height = HEIGHT/2.25;

      random1C();
      boss1C();
      teleport1C();
      timer1C();
    }
    else if (Level == 6) {
      obstacle1.x = WIDTH/2;
      obstacle1.y = HEIGHT/1.25;
      obstacle1.width = 20;
      obstacle1.height = HEIGHT;

      obstacle2.x = WIDTH/4;
      obstacle2.y = 0;
      obstacle2.width = 20;
      obstacle2.height = HEIGHT/2.25;

      teleport1.x = WIDTH/1.5;
      teleport1.y = HEIGHT/2;
      teleport1.width = 20;
      teleport1.height = HEIGHT

      random1C();
      boss1C();
      timer1C();
    }
    else if (Level == 7) {
      obstacle1.x = 0;
      obstacle1.y = 0;
      obstacle1.width = 0;
      obstacle1.height = 0;

      obstacle2.x = WIDTH/4;
      obstacle2.y = 0;
      obstacle2.width = 20;
      obstacle2.height = 0;

      random1.x = WIDTH/2;
      random1.y = 0;
      random1.width = 20;
      random1.height = HEIGHT/2.25;

      teleport1.x = WIDTH/1.5;
      teleport1.y = HEIGHT/1.75;
      teleport1.width = 20;
      teleport1.height = HEIGHT

      player1.y = HEIGHT/1.15;

      boss1C();
      timer1C();
    }
    else if (Level == "8a") {
      obstacle1.x = WIDTH/1.5;
      obstacle1.y = HEIGHT/1.2;
      obstacle1.width = 20;
      obstacle1.height = 30;

      random1.x = WIDTH/2;
      random1.y = 0;
      random1.width = 20;
      random1.height = HEIGHT/6;

      teleport1.x = WIDTH - 40;
      teleport1.y = 0;
      teleport1.width = WIDTH;
      teleport1.height = 40;

      player1.y = HEIGHT/1.15;

      boss1C();
      obstacle2C();
      timer1C();
    }
    else if (Level == "8b") {
      obstacle1.x = WIDTH/1.5;
      obstacle1.y = HEIGHT/1.2;
      obstacle1.width = 20;
      obstacle1.height = 30;

      obstacle2.x = WIDTH/1.2;
      obstacle2.y = HEIGHT/1.2;
      obstacle2.width = 20;
      obstacle2.height = 30;

      random1.x = WIDTH/2;
      random1.y = 0;
      random1.width = 20;
      random1.height = HEIGHT/6;

      teleport1.x = WIDTH - 40;
      teleport1.y = 0;
      teleport1.width = WIDTH;
      teleport1.height = 40;

      player1.y = HEIGHT/1.15;

      boss1C();
      timer1C();
    }
    else if (Level == 9) {
      timer1.x = 0;
      timer1.y = 0;
      timer1.width = 0;
      timer1.height = HEIGHT;

      obstacle1.x = WIDTH/2;
      obstacle1.y = HEIGHT/1.25;
      obstacle1.width = 20;
      obstacle1.height = HEIGHT;

      obstacle2.x = WIDTH/4;
      obstacle2.y = 0;
      obstacle2.width = 20;
      obstacle2.height = HEIGHT/2.25;

      random1C();
      boss1C();
      teleport1C();
    }
    else if (Level == 10) {
      obstacle1.x = WIDTH/1.5;
      obstacle1.y = HEIGHT/1.2;
      obstacle1.width = 20;
      obstacle1.height = 30;

      obstacle2.x = WIDTH/4;
      obstacle2.y = 0;
      obstacle2.width = 20;
      obstacle2.height = 20;

      random1.x = WIDTH/2;
      random1.y = 0;
      random1.width = 20;
      random1.height = HEIGHT/6;

      boss1.x = WIDTH/2;
      boss1.y = WIDTH/2;
      boss1.width = 60;
      boss1.height = 60;

      timer1C();
      teleport1C();
    }
    else if (Level == "Winner") {
      obstacle1C();

      obstacle2C();

      random1C();

      boss1C();

      timer1C();

      teleport1C();

      goal1C();
    }
    else {
      obstacle1C();

      obstacle2C();

      random1C();

      boss1C();

      timer1C();

      teleport1C();

      goal1C();
    }
  }

  function obstacle1C() {
    obstacle1.x = 0;
    obstacle1.y = 0;
    obstacle1.width = 0;
    obstacle1.height = 0;
  }

  function obstacle2C() {
    obstacle2.x = 0;
    obstacle2.y = 0;
    obstacle2.width = 0;
    obstacle2.height = 0;
  }

  function random1C() {
    random1.x = 0;
    random1.y = 0;
    random1.width = 0;
    random1.height = 0;
  }

  function boss1C() {
    boss1.x = 0;
    boss1.y = 0;
    boss1.width = 0;
    boss1.height = 0;
  }

  function timer1C() {
    timer1.x = 0;
    timer1.y = 0;
    timer1.width = 0;
    timer1.height = 0;
  }

  function teleport1C() {
    teleport1.x = 0;
    teleport1.y = 0;
    teleport1.width = 0;
    teleport1.height = 0;
  }

  function goal1C() {
    goal1.x = 0;
    goal1.y = 0;
    goal1.width = 0;
    goal1.height = 0;
  }




  // controls for the game
  var keyRightDown = false;
	var keyLeftDown = false;
  var keyUpDown = false;
  var keyDownDown = false;
		document.onkeydown = function(e) {
			if (e.keyCode == 37 || e.keyCode == 65) {
				keyLeftDown = true;
			}
			if (e.keyCode == 39 || e.keyCode == 68) {
				keyRightDown = true;
			}
      if (e.keyCode == 38 || e.keyCode == 87) {
        keyUpDown = true;
      }
      if (e.keyCode == 40 || e.keyCode == 83) {
        keyDownDown = true;
      }
		}
		document.onkeyup = function(e) {
			if (e.keyCode == 37 || e.keyCode == 65) {
				keyLeftDown = false;
			}
			if (e.keyCode == 39 || e.keyCode == 68) {
				keyRightDown = false;
			}
      if (e.keyCode == 38 || e.keyCode == 87) {
        keyUpDown = false;
      }
      if (e.keyCode == 40 || e.keyCode == 83) {
        keyDownDown = false;
      }
		}

  // End of Controls


  function clear() {
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  main();
});
