var gBird;
var gWalls = [];

var gScore;
var gHighScore;

var gBackground;

var gReadyToPlay;
var readyToBegin = false;

var GRACE_PERIOD = 5;

CANVAS_WIDTH = 960;
CANVAS_HEIGHT = 540;

var gCanvas = {
    canvas : document.createElement("canvas"),

    setup : function() {
        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIGHT;
        this.context = this.canvas.getContext("2d");

        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },

    start : function() {
        this.frameNo = 0;
        this.interval = setInterval(updateCanvas, 20);
    },

    stop : function() {
        clearInterval(this.interval);
    },

    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

document.addEventListener('DOMContentLoaded', setupGame, false);

function setupGame() {
    window.addEventListener('keydown', flapDown);
    window.addEventListener('keyup', flapUp);

    window.addEventListener('mousedown', flapDown);
    window.addEventListener('mouseup', flapUp);

    if(gReadyToPlay === undefined) {
        gReadyToPlay = new Label("30px", "Consolas", "black", 700, CANVAS_HEIGHT / 2);
    }
    //TODO Background doesn't show until gCanvas.start()
    if(gBackground === undefined) {
        gBackground = new Background(CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0, "img/background_lines_large.jpg");
    }

    readyToBegin = true;
    gCanvas.setup();

    gReadyToPlay.text = "Click or press any key to begin.";
    gBackground.update();
    gReadyToPlay.update();
}

function beginGame() {
    readyToBegin = false;

    gBird = new Bird(64, 64, 10, 240, "img/robotman_off_large.png");
    gBird.gravity = 0.05;

    gWalls = [];

    gScore = new Label("30px", "Consolas", "white", 960, 80);

    gCanvas.start();
    gCanvas.clear();
}

function flapDown() {
    if(!readyToBegin) {
        gBird.gravity = -0.2;
        gBird.image.src = "img/robotman_on_large.png";
    }
}

function flapUp() {
    if(readyToBegin) {
        beginGame();
    } else {
        gBird.gravity = 0.05;
        gBird.image.src = "img/robotman_off_large.png";
    }
}

function Background(width, height, x, y, imageSrc) {
    this.x = x;
    this.y = y;

    this.image = new Image();
    this.image.src = imageSrc;

    this.update = function() {
        // Add the second background image immediately following the first for
        // infinite scrolling
        gCanvas.context.drawImage(this.image, this.x, this.y, width, height);
        gCanvas.context.drawImage(this.image, this.x + width, this.y, width, height);
    };

    this.updatePosition = function() {
        this.x -= 4;

        if (this.x == -(width)) {
            this.x = 0;
        }
    };
}

function Label(fontHeight, font, color, x, y) {
    this.text = "";

    this.color = color;

    this.update = function() {
        var context = gCanvas.context;

        context.font = fontHeight + " " + font;
        context.fillStyle = this.color;
        context.textAlign="right";
        context.fillText(this.text, x, y);
    };
}

function Wall(width, height, x, y, imageSrc) {
    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = imageSrc;

    this.update = function() {
        var context = gCanvas.context;

        context.fillStyle = context.createPattern(this.image, "repeat");
        context.save();
        context.translate(this.x, this.y);
        context.fillRect(0, 0, this.width, this.height);
        context.restore();
    };
}

function Bird(width, height, x, y, imageSrc) {
    this.x = x;
    this.y = y;

    this.gravity = 0;
    this.gravitySpeed = 0;

    this.image = new Image();
    this.image.src = imageSrc;

    this.update = function() {
        gCanvas.context.drawImage(this.image, this.x, this.y, width, height);
    };

    this.updatePosition = function() {
        this.gravitySpeed += this.gravity;

        this.y += this.gravitySpeed;

        this.hitFloor();
        this.hitCeiling();
    };

    this.hitFloor = function() {
        var floor = gCanvas.canvas.height - height;

        if (this.y > floor) {
            this.y = floor;
            this.gravitySpeed = 0;
        }
    };

    this.hitCeiling = function() {
        if (this.y < 0) {
            this.y = 0;
            this.gravitySpeed = 0;
        }
    };

    this.collidesWith = function(wall) {
        var birdLeft = this.x;
        var birdRight = this.x + width;

        var birdTop = this.y;
        var birdBottom = this.y + height;

        var wallLeft = wall.x;
        var wallRight = wall.x + wall.width;

        var wallTop = wall.y;
        var wallBottom = wall.y + wall.height;

        if ((wallTop - birdBottom > -(GRACE_PERIOD)) ||
            (birdTop - wallBottom > -(GRACE_PERIOD)) ||
            (wallLeft - birdRight > -(GRACE_PERIOD)) ||
            (birdLeft - wallRight > -(GRACE_PERIOD))) {
            return false;
        }
        return true;
    };
}

function endGame(highScoreObj) {
    if(gHighScore === undefined) {
        gHighScore = new Label("30px", "Consolas", "red", CANVAS_WIDTH, 120);
    }

    var highScoreValue = highScoreObj['highScore'];

    if(highScoreValue === undefined) {
        highScoreValue = 0;
    }

    if(gCanvas.frameNo > highScoreValue) {
        chrome.storage.sync.set({'highScore': gCanvas.frameNo});

        gHighScore.text = "NEW HIGH SCORE: " + gCanvas.frameNo;
        gHighScore.color = "red";
    } else {
        gHighScore.text = "HIGH SCORE: " + highScoreValue;
        gHighScore.color = "white";
    }

    gBird.image.src = "img/robotman_dead_large.png";

    readyToBegin = true;
    gReadyToPlay.color = "white";

    gHighScore.update();
    gReadyToPlay.update();
    gBird.update();

    gCanvas.stop();
}

function updateCanvas() {
    for (var i = 0; i < gWalls.length; i += 1) {
        if (gBird.collidesWith(gWalls[i])) {
            chrome.storage.sync.get(['highScore'], endGame);
            return;
        }
    }

    gCanvas.clear();
    gCanvas.frameNo += 1;

    // Update the background first to make sure the rest of the components are in the front
    gBackground.updatePosition();
    gBackground.update();

    if (gCanvas.frameNo == 1 || needNewWall()) {
        var canvasWidth = gCanvas.canvas.width;
        var canvasHeight = gCanvas.canvas.height;

        var minHeight = 100;
        var maxHeight = 350;

        var height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);

        var minGap = 100;
        var maxGap = 200;

        var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

        gWalls.push(new Wall(20, height, canvasWidth, 0, "img/wall_large.png"));
        gWalls.push(new Wall(20, canvasHeight - height - gap, canvasWidth, height + gap,
            "img/wall_large.png"));
    }
    for (i = 0; i < gWalls.length; i += 1) {
        gWalls[i].x += -4;
        gWalls[i].update();
    }

    gScore.text="SCORE: " + gCanvas.frameNo;
    gScore.update();

    gBird.updatePosition();
    gBird.update();
}

function needNewWall() {
    var wallInterval;

    if(gCanvas.frameNo < 1000) {
        wallInterval = 180;
    } else if(gCanvas.frameNo < 2000) {
        wallInterval = 165;
    } else if(gCanvas.frameNo < 3000) {
        wallInterval = 140;
    } else if(gCanvas.frameNo < 4000) {
        wallInterval = 125;
    } else if(gCanvas.frameNo < 5000) {
        wallInterval = 110;
    } else if(gCanvas.frameNo < 7500) {
        wallInterval = 95;
    } else if(gCanvas.frameNo < 10000) {
        wallInterval = 80;
    } else {
        wallInterval = 65;
    }
    return (gCanvas.frameNo / wallInterval) % 1 == 0;
}
