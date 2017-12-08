let john;
let platforms = [];
let score = 0;
let bg;

function preload()
{
	bg = loadImage("https://www.metoffice.gov.uk/binaries/content/gallery/mohippo/images/migrated-image/j/cumulus_1.jpg");
}

function setup()
{
	createCanvas(1000, 800);
	john = new Hero(300, 550);
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
	john.show();
	john.move();
	john.falling(height);
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
