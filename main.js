let john;
let platforms = [];
let score = 0;

function setup()
{
	createCanvas(600, 400);
	john = new Hero(300, 185);
	for(i = 0; i < 2; i++)
	{
		let x = 260;
		let y = 190;
		let width = 80;
		platforms[i] = new Platform(x, y, width);
	}
}

function draw()
{
	background(0);
	john.show();
	john.move();
	john.falling(height+4);
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
