
$(document).ready(function() {
var Level = 1;
var Playing = false;
var LHeight = 1;



  Player = Player = true;
  Level = Level = 1;

  var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

  const HEIGHT = canvas.height;
  const WIDTH = canvas.width;
  const leftArrow = 37;
  const rightArrow = 39;
  var up = true;
  var up2 = false;
  var speed = 2;
  var shoot = false;

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

  var bullet1 = {
    x: 0,
    y: 0,
    height: 0,
    width: 0,
    draw: function() {
      ctx.fillRect(bullet1.x, bullet1.y, bullet1.width, bullet1.height);
    }
  }

  function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT); // Fill the background black

		ctx.save(); // Save current settings of drawing
    if (Level == "Winner") {
      ctx.fillStyle = "gold";
    }
    else {
      ctx.fillStyle = "white";
    }
    player1.draw();

    if (Level == 1) {
      ctx.fillStyle = "red";
      obstacle1.draw();;
      ctx.fillRect = "grey";
    }

    ctx.restore();
  }

  function update() {
    if (Level == 2) {
      Level == "Winner";
    }

    speed = speed = 2;

    if (Level == 1) {
      if (keyPressed == 38 && player1.y > 0){
        player1.y -= speed;
      }
      if (keyPressed == 40 && player1.y < HEIGHT) {
        player1.y += speed;
      }
      if (keyPressed == 37 && player1.x >= 0) player1.x -= speed;
      if (keyPressed == 39 && player1.x <= WIDTH) player1.x += speed;
    }
    else {
    if (keyPressed == 38 && Level != 6 && Level != 7){
        player1.y = HEIGHT/2.5;
    }
    if (keyPressed == 40 && Level != 6 && Level != 7) {
      player1.y = HEIGHT/1.5;
    }
    if (keyPressed == 37 && player1.x >= 0) player1.x -= speed;
    if (keyPressed == 39 && player1.x <= WIDTH) player1.x += speed;
  }

  let collided1b = checkCollision(player1, obstacle1);

  if (collided1b) {
    Level = 1;
    init();
  }

  let collided2 = checkCollision(player1, obstacle2);

  if (collided2) {
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
    Level = 1;
    init();
  }

  let collided6 = checkCollision(player1, obstacle3);

  if (collided6) {
    Level = 1;
    init();
  }

  if (Level == 1) {
    if (shoot == true) {

    }
  }

  if (player1.x >= WIDTH-10 && Level != "Winner") {
    Level += 1;
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
    player1.width = 10;
    player1.height = 20;


    if (Level == 1) {
      obstacle1.x = WIDTH/2;
      obstacle1.y = HEIGHT/2;
      obstacle1.width = 20;
      obstacle1.height = 10;
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
  document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowUp') {
      keyPressed = 38;
    }
  });
  document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowDown') {
      keyPressed = 40;
    }
  });
  document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowRight') {
      keyPressed = 39;
    }
  });
  document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowLeft') {
      keyPressed = 37;
    }
  });

  document.addEventListener('keyup', function(event) {
    if (keyPressed == 37) {
      keyPressed = null;
    }
  });

  document.addEventListener('keyup', function(event) {
    if (keyPressed == 39) {
      keyPressed = null;
    }
  });
  document.addEventListener('keyup', function(event) {
    if (keyPressed === 40) {
      keyPressed = null;
    }
  });
  document.addEventListener('keyup', function(event) {
    if (keyPressed == 38) {
      keyPressed = null;
    }
  });


  // End of Controls


  function clear() {
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

    main();

    console.log(test);
});
