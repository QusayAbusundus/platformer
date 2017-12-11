let john;
let platforms = [];
let score = 0;
let bg;

function preload()
{
	bg = loadImage("https://cdn.glitch.com/56625ea6-0aa3-462f-b047-1dee20d77e4e%2Fcumulus_1.jpg?1513015392362");
}

function setup()
{
	createCanvas(1000, 800);
	john = new Hero(50, 50);
	for(i = 0; i < 10; i++)
	{
		let x = 120;
		let y = 699;
		let platWidth = 720;
		platforms[i] = new Platform(x, y, platWidth);
	}
}

function draw()
{
	background(bg);
	for(i = 0; i < platforms.length; i++)
	{
		platforms[i].show();
	}
	john.show();
	john.move();
	john.ScreenWrap(0, width, height, 0);
	drawScore();
}

function resetPlatform()
{
	platforms = []; 
	for(i = 0; i < 10; i++)
	{
		let x = random(width);
		let y = random(height);
		let platWidth = random(100, 500);
		platforms[i] = new Platform(x, y, platWidth);
	}
	
}

function drawScore()
{
	fill(255);
	textSize(32);
	text("Score: " + score, 5, 30)
}
