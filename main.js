let john;
let platforms = [];
let coins = [];
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
		for(j = 0; j < 3; j++)
		{
			let coinX = random(platforms[i].x, platWidth+platforms[i].x);
			let coinY = platforms[i].y-10;
			coins.push(new Coin(coinX, coinY));
		}
	}
	
}

function draw()
{
	if(gameState == 0)
	{
		background(bg);
		titleScreen();
		if(keyIsDown(32))
		{
			gameState = 1
		}
	}
	else if(gameState == 1)
	{
		background(bg);
		drawScore();
		for(i = 0; i < coins.length; i++)
		{
			coins[i].show();
		}
		for(i = 0; i < platforms.length; i++)
		{
			platforms[i].show();
		}
		john.show();
		john.move();
		john.ScreenWrap(0, width, height, 0);
		john.collectCoin();
	}
	else if(gameState == 2)
	{
		
	}		
}

function clockTimer()
{
	if(timer > 0 && gameState == 1)
	{
		timer--;
	}
}

function titleScreen()
{
	fill(255, 0, 0);
	textSize(64);
	textAlign(CENTER);
	text("Not IWBTGtm!", width/2, height/2);
	textSize(32);
	text("Press the space key to start", width/2, height/2 + 30);
}

function resetPlatform()
{
	platforms = [];
	coins = [];
	platforms[0] = new Platform(0, 600, random(100, 500))
	for(i = 1; i < 9; i++)
	{
		let x = random(platforms[i-1].x + 100, platforms[i-1].x + 300);
		let y = random(platforms[i-1].y - 125, platforms[i-1].y - 200);
		let platWidth = random(100, 500);
		platforms[i] = new Platform(x, y, platWidth);
		for(j = 0; j < 1; j++)
		{
			let coinX = random(platforms[i].x, platWidth+platforms[i].x);
			let coinY = platforms[i].y-10;
			coins.push(new Coin(coinX, coinY));
		}
	}
	
	platforms[9] = new Platform(800, 600, 300)
}

function drawScore()
{
	fill(255);
	textSize(32);
	text("Score: " + score, 68, 35)
	text("Timer: " + timer, 84, 70)
}
