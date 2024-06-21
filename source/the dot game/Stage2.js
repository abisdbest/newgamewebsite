var Level = 1;
var Playing = false;
var LHeight = 1;



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
  var speed = 1;

  var keyPressed = null;

  var player1 = {
    x: WIDTH/10,
    y: HEIGHT/1.5,
    width: 5,
    height: 10,
    draw: function() {
      ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
    }
  };

  var obstacle1 = {
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    width: 0,
    height: 0,
    draw: function() {
      ctx.fillRect(obstacle1.x, obstacle1.y, obstacle1.width, obstacle1.height);
    }
  };

  var obstacle1G = {
    draw: function() {
      ctx.fillRect(obstacle1.fx, obstacle1.fy, obstacle1.width, obstacle1.height);
    }
  }

  var obstacle2G = {
    draw: function() {
      ctx.fillRect(obstacle2.fx, obstacle2.fy, obstacle2.width, obstacle2.height);
    }
  }

  var obstacle3G = {
    draw: function() {
      ctx.fillRect(obstacle3.fx, obstacle3.fy, obstacle3.width, obstacle3.height);
    }
  }


  var obstacle2 = {
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    width: 0,
    height: 0,
    draw: function() {
      ctx.fillRect(obstacle2.x, obstacle2.y, obstacle2.width, obstacle2.height);
    }
  };

  var obstacle3 = {
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    width: 0,
    height: 0,
    draw: function() {
      ctx.fillRect(obstacle3.x, obstacle3.y, obstacle3.width, obstacle3.height)
    }
  }

  var goal1 = {
    x: WIDTH,
    y: 0,
    width: -10,
    height: HEIGHT,
    draw: function() {
      ctx.fillRect(goal1.x, goal1.y, goal1.width, goal1.height);
    }
  };

  var teleport1 = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    draw: function() {
      ctx.fillRect(teleport1.x, teleport1.y, teleport1.width, teleport1.height);
    }
  };

  var random1 = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    draw: function() {
      ctx.fillRect(random1.x, random1.y, random1.width, random1.height);
    }
  };

  var timer1 = {
    x: 0,
    y: 0,
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
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT); // Fill the background black

		ctx.save(); // Save current settings of drawing
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
      obstacle3.draw();
    }
    else if (Level == 3) {
      ctx.fillStyle = "#ff0000";
      obstacle1.draw();
      obstacle2.draw();
      ctx.fillStyle = "#8B0000"
      obstacle3.draw();
    }
    else if (Level == 4) {
      ctx.fillStyle = "aqua";
      obstacle1.draw();
      obstacle2.draw();
      ctx.fillStyle = "#000033";
      obstacle1G.draw();
      obstacle2G.draw();
    }
    else if (Level == 5) {
      ctx.fillStyle = "#000033";
      obstacle3G.draw();
      ctx.fillStyle = "red";
      obstacle2.draw();
      obstacle1.draw();
      ctx.fillStyle = "blue";
      //teleport1.draw();
      ctx.fillStyle = "aqua";
      obstacle3.draw();
    }

    if (Level != "Winner") {
      ctx.fillStyle = "yellow";
      goal1.draw();
    }

    ctx.restore();
  }

  function update() {
    if (Level == 6) {
      coins = Number(coins) + 200;
      Level = "Winner";
      document.getElementById('title').innerHTML = "You Win... Now Go Away";
      init();
    }

    if (Level == 1) {
      speed = speed = 1.6;
    }
    else {
      speed = speed = 1.4;
    }

    if (Level == 1 || Level == 2 || Level == 3 || Level == 4 || Level == 5) {
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
    if (keyDownDown == 38 && Level != 6 && Level != 7){
        player1.y = HEIGHT/2.5;
    }
    if (keyUpDown == true && Level != 6 && Level != 7) {
      player1.y = HEIGHT/1.5;
    }
    if (keyLeftDown == true && player1.x >= 0) player1.x -= speed;
    if (keyRightDown == true && player1.x <= WIDTH) player1.x += speed;
  }



    let collided1b = checkCollision(player1, obstacle1);

    if (collided1b) {
      /*if (Level == 1) {
        coins = Number(coins) + 1;
      }
      else if (Level == 2) {
        coins = Number(coins) + 10;
      }
      else if (Level == 3) {
        coins = Number(coins) + 25;
      }
      else if (Level == 4) {
        coins = Number(coins) + 50;
      }
      else if (Level == 5) {
        coins = Number(coins) + 75;
      }*/
      Level = 1;
      init();
    }

    let collided2 = checkCollision(player1, obstacle2);

    if (collided2) {
      /*if (Level == 1) {
        coins = Number(coins) + 1;
      }
      else if (Level == 2) {
        coins = Number(coins) + 10;
      }
      else if (Level == 3) {
        coins = Number(coins) + 25;
      }
      else if (Level == 4) {
        coins = Number(coins) + 50;
      }
      else if (Level == 5) {
        coins = Number(coins) + 75;
      }*/
      Level = 1;
      init();
    }

    let collided3 = checkCollision(player1, teleport1);

    if (collided3) {
      if (Level == 5) {
        player1.y = HEIGHT/2.5;
        player1.x = WIDTH/10;
      }
    }

    let collided4 = checkCollision(player1, random1);

    if (collided4) {

    }

    let collided5 = checkCollision(player1, timer1);

    if (collided5) {
      /*if (Level == 1) {
        coins = Number(coins) + 1;
      }
      else if (Level == 2) {
        coins = Number(coins) + 10;
      }
      else if (Level == 3) {
        coins = Number(coins) + 25;
      }
      else if (Level == 4) {
        coins = Number(coins) + 50;
      }
      else if (Level == 5) {
        coins = Number(coins) + 75;
      }*/
      Level = 1;
      init();
    }

    let collided6 = checkCollision(player1, obstacle3);

    if (collided6) {
      /*if (Level == 1) {
        coins = Number(coins) + 1;
      }
      else if (Level == 2) {
        coins = Number(coins) + 10;
      }
      else if (Level == 3) {
        coins = Number(coins) + 25;
      }
      else if (Level == 4) {
        coins = Number(coins) + 50;
      }
      else if (Level == 5) {
        coins = Number(coins) + 75;
      }*/
      Level = 1;
      init();
    }


    if (Level == 1) {
      if (obstacle1.x > player1.x) {
        obstacle1.x -= 1.3;
      }
      if (obstacle1.x < player1.x) {
        obstacle1.x += 1.3;
      }

      if (obstacle2.y > player1.y) {
        obstacle2.y -= 1.3;
      }
      if (obstacle2.y < player1.y) {
        obstacle2.y += 1.3;
      }
    }
    else if (Level == 2) {
      if (obstacle1.x > player1.x) {
        obstacle1.x -= 1;
      }
      if (obstacle1.x < player1.x) {
        obstacle1.x += 1;
      }

      if (obstacle1.y > player1.y) {
        obstacle1.y -= 1;
      }
      if (obstacle1.y < player1.y) {
        obstacle1.y += 1;
      }


      if (obstacle2.x > player1.x) {
        obstacle2.x -= 1.25;
      }
      if (obstacle2.x < player1.x) {
        obstacle2.x += 1.25;
      }

      if (obstacle2.y > player1.y) {
        obstacle2.y -= 1.25;
      }
      if (obstacle2.y < player1.y) {
        obstacle2.y += 1.25;
      }

      if (obstacle3.x > player1.x) {
        obstacle3.x -= 1.25;
      }
      if (obstacle3.x < player1.x) {
        obstacle3.x += 1.25;
      }

      if (obstacle3.y > player1.y) {
        obstacle3.y -= 1.25;
      }
      if (obstacle3.y < player1.y) {
        obstacle3.y += 1.25;
      }
    }
    else if (Level == 3) {
      if (obstacle1.x > player1.x) {
        obstacle1.x -= 0.5;
      }
      if (obstacle1.x < player1.x) {
        obstacle1.x += 0.5;
      }

      if (obstacle1.y > player1.y) {
        obstacle1.y -= 0.5;
      }
      if (obstacle1.y < player1.y) {
        obstacle1.y += 0.5;
      }


      if (obstacle2.x > player1.x) {
        obstacle2.x -= 0.5;
      }
      if (obstacle2.x < player1.x) {
        obstacle2.x += 0.5;
      }

      if (obstacle2.y > player1.y) {
        obstacle2.y -= 0.5;
      }
      if (obstacle2.y < player1.y) {
        obstacle2.y += 0.5;
      }

      if (obstacle3.x > player1.x) {
        obstacle3.x -= 0.5;
      }
      if (obstacle3.x < player1.x) {
        obstacle3.x += 1;
      }

      if (obstacle3.y > player1.y) {
        obstacle3.y -= 1;
      }
      if (obstacle3.y < player1.y) {
        obstacle3.y += 0.5;
      }
    }
    else if (Level == 4) {
      if (obstacle1.fx > obstacle1.x + 50 || obstacle1.fx < obstacle1.x - 50 || obstacle1.fy > obstacle1.y + 50 || obstacle1.fy < obstacle1.y - 50) {
        obstacle1.x = obstacle1.fx;
        obstacle1.y = obstacle1.fy;

        obstacle1.fx = obstacle1.x;
        obstacle1.fy = obstacle1.y;
      }

      let collided1f = checkCollisionb(player1, obstacle1);

      if (collided1f) {
        obstacle1.x = obstacle1.fx;
        obstacle1.y = obstacle1.fy;

        obstacle1.fx = obstacle1.x;
        obstacle1.fy = obstacle1.y;
      }

      if (obstacle1.fx > player1.x) {
        obstacle1.fx -= 1;
      }
      if (obstacle1.fx < player1.x) {
        obstacle1.fx += 1;
      }

      if (obstacle1.fy > player1.y) {
        obstacle1.fy -= 1;
      }
      if (obstacle1.fy < player1.y) {
        obstacle1.fy += 1;
      }



      if (obstacle2.fx > obstacle2.x + 50 || obstacle2.fx < obstacle2.x - 50 || obstacle2.fy > obstacle2.y + 50 || obstacle2.fy < obstacle2.y - 50) {
        obstacle2.x = obstacle2.fx;
        obstacle2.y = obstacle2.fy;

        obstacle2.fx = obstacle2.x;
        obstacle2.fy = obstacle2.y;
      }

      let collided2f = checkCollisionb(player1, obstacle2);

      if (collided2f) {
        obstacle2.x = obstacle2.fx;
        obstacle2.y = obstacle2.fy;

        obstacle2.fx = obstacle2.x;
        obstacle2.fy = obstacle2.y;
      }

      if (obstacle2.fx > player1.x) {
        obstacle2.fx -= 1;
      }
      if (obstacle2.fx < player1.x) {
        obstacle2.fx += 1;
      }

      if (obstacle2.fy > player1.y) {
        obstacle2.fy -= 1;
      }
      if (obstacle2.fy < player1.y) {
        obstacle2.fy += 1;
      }

      let collided3f = checkCollision(obstacle1, obstacle2)
      if (collided3f) {
        obstacle1.height += 0.1;
        obstacle1.width += 0.1;
        obstacle2.height += 0.1;
        obstacle2.width += 0.1;
      }
    }
      if (Level == 5) {
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


        if (obstacle3.fx > obstacle3.x + 50 || obstacle3.fx < obstacle3.x - 50 || obstacle3.fy > obstacle3.y + 50 || obstacle3.fy < obstacle3.y - 50) {
          obstacle3.x = obstacle3.fx;
          obstacle3.y = obstacle3.fy;

          obstacle3.fx = obstacle3.x;
          obstacle3.fy = obstacle3.y;
        }

        let collided3f = checkCollisionb(player1, obstacle3);

        if (collided3f) {
          obstacle3.x = obstacle3.fx;
          obstacle3.y = obstacle3.fy;

          obstacle3.fx = obstacle3.x;
          obstacle3.fy = obstacle3.y;
        }

        if (obstacle3.fx > player1.x) {
          obstacle3.fx -= 1;
        }
        if (obstacle3.fx < player1.x) {
          obstacle3.fx += 1;
        }

        if (obstacle3.fy > player1.y) {
          obstacle3.fy -= 1;
        }
        if (obstacle3.fy < player1.y) {
          obstacle3.fy += 1;
        }
    }

    if (player1.x >= WIDTH-10 && Level != "Winner") {
      Level += 1;

      if (Level == 2) {
        coins = Number(coins) + 10;
      }
      else if (Level == 3) {
        coins = Number(coins) + 25;
      }
      else if (Level == 4) {
        coins = Number(coins) + 30;
      }
      else if (Level == 5) {
        coins = Number(coins) + 40;
      }

      init();
    }

    document.getElementById('title2').innerHTML = "Level: " + Level;
  }

  function checkCollisionb(a, b) {
    // Return true if ball collides with others
    return (a.x < b.fx + b.width
      && a.y < b.fy + b.height
      && b.fx < a.x + a.width
      && b.fy < a.y + a.height
      && b.fx < a.x + a.height
      && b.fy < a.y + a.width
    )
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

    player1.x = WIDTH/10;
    player1.y = HEIGHT/1.5;
    player1.width = 5;
    player1.height = 10;



    if (Level == 1) {
      obstacle1.x = WIDTH/2;
      obstacle1.y = HEIGHT/2;
      obstacle1.width = 20;
      obstacle1.height = 20;

      obstacle2.x = WIDTH/2;
      obstacle2.y = HEIGHT/2;
      obstacle2.width = 20;
      obstacle2.height = 20;

      obstacle3C();
      teleport1C();
      timer1C();
      random1C();
    }
    else if (Level == 2) {
      obstacle1.x = WIDTH/1.25;
      obstacle1.y = HEIGHT/10;
      obstacle1.width = 5;
      obstacle1.height = 10;

      obstacle2.x = WIDTH/10;
      obstacle2.y = HEIGHT/1.25;
      obstacle2.width = 5;
      obstacle2.height = 10;

      obstacle3.x = WIDTH/1.5;
      obstacle3.y = HEIGHT/1.5;
      obstacle3.width = 5;
      obstacle3.height = 10;

      teleport1C();
      timer1C();
      random1C();
    }
    else if (Level == 3) {
      obstacle1.x = WIDTH/1.25;
      obstacle1.y = HEIGHT/10;
      obstacle1.width = 50;
      obstacle1.height = 80;

      obstacle2.x = WIDTH/10;
      obstacle2.y = HEIGHT/1.25;
      obstacle2.width = 50;
      obstacle2.height = 80;

      obstacle3.x = WIDTH/1.5;
      obstacle3.y = HEIGHT/1.5;
      obstacle3.width = 50;
      obstacle3.height = 80;

      teleport1C();
      timer1C();
      random1C();
    }
    else if (Level == 4) {
      obstacle1.x = WIDTH/1.25;
      obstacle1.y = HEIGHT/10;
      obstacle1.width = 10;
      obstacle1.height = 20;

      obstacle1.fx = WIDTH/1.25;
      obstacle1.fy = HEIGHT/10;

      obstacle2.x = WIDTH/10;
      obstacle2.y = HEIGHT/1.25;
      obstacle2.width = 10;
      obstacle2.height = 20;

      obstacle2.fx = WIDTH/10;
      obstacle2.fy = HEIGHT/1.25;

      obstacle3.x = WIDTH/1.5;
      obstacle3.y = HEIGHT/1.5;
      obstacle3.width = 10;
      obstacle3.height = 20;

      obstacle1.fx = obstacle1.x;
      obstacle1.fy = obstacle1.y;

      teleport1C();
      timer1C();
      random1C();
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

      obstacle3.x = WIDTH/1.5;
      obstacle3.y = HEIGHT/1.5;
      obstacle3.width = 10;
      obstacle3.height = 20;
      obstacle3.fx = WIDTH/1.5;
      obstacle3.fy = HEIGHT/1.5;

      timer1C();
      random1C();
    }
    else if (Level == "Winner") {
      obstacle1C();
      obstacle2C();
      obstacle3C();
      teleport1C();
      timer1C();
      random1C();
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

  function obstacle3C() {
    obstacle3.x = 0;
    obstacle3.y = 0;
    obstacle3.width = 0;
    obstacle3.height = 0;
  }

  function teleport1C() {
    teleport1.x = 0;
    teleport1.y = 0;
    teleport1.height = 0;
    teleport1.width = 0;
  }

  function timer1C() {
    timer1.x = 0;
    timer1.y = 0;
    timer1.height = 0;
    timer1.width = 0;
  }

  function random1C() {
    random1.x = 0;
    random1.y = 0;
    random1.width = 0;
    random1.height = 0;
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
