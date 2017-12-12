let john;
let platforms = [];
let gravity = 0.6;
let terminalVelocity = 20;
let score = 0;
let timer = 500;
let gameState = 0;
let bg;

function preload()
{
	bg = loadImage("https://cdn.glitch.com/56625ea6-0aa3-462f-b047-1dee20d77e4e%2Fcumulus_1.jpg?1513015392362");
}

function setup()
{
	createCanvas(1000, 800);
	setInterval(clockTimer, 1000);
	john = new Hero(100, 100);
	for(i = 0; i < 6; i++)
	{
		let x = i * 150 + 50;
		let y = i * 100 + 100;
		let platWidth = 200;
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

function clockTimer()
{
	if(timer > 0)
	{
		timer--;
	}
}

function resetPlatform()
{
	platforms = []; 
	platforms[0] = new Platform(0, 600, random(100, 500))
	for(i = 1; i < 9; i++)
	{
		let x = random(platforms[i-1].x + 100, platforms[i-1].x + 300);
		let y = random(platforms[i-1].y - 125, platforms[i-1].y - 200);
		let platWidth = random(100, 500);
		platforms[i] = new Platform(x, y, platWidth);
	}
	platforms[9] = new Platform(800, 600, 300)
}

function drawScore()
{
	fill(255);
	textSize(32);
	text("Score: " + score, 5, 30)
	text("Timer: " + timer, 5, 60)
}
