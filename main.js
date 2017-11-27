let john;
let platforms = [];
let score = 0;
let bg;

function setup()
{
	bg = loadImage("https://cdn.glitch.com/454cac07-3967-4615-ad84-39f4e0a1e10c%2Fplatformerbg.jpg?1511807719259");
	createCanvas(1000, 800);
	john = new Hero(300, 150);
	for(i = 0; i < 2; i++)
	{
		let x = 260;
		let y = 190;
		let width = 200;
		platforms[i] = new Platform(x, y, width);
	}
}

function draw()
{
	background(bg);
	john.show();
	john.move();
	john.falling(height+4);
	john.horizScreenWrap(0, width);
	for(i = 0; i < platforms.length; i++)
	{
		platforms[i].show();
	}
	if(john.y > height)
		score--;
	drawScore();
}

function drawScore()
{
	fill(255);
	textSize(32);
	text("Score: " + score, 5, 30)
}
