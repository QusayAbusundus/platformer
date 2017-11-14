let john;
let platforms = [];

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
	for(i = 0; i < platforms.length; i++)
	{
		platforms[i].show();
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////CLASSES//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Hero
{
	constructor(x, y, width, height)
	{
		this.x = x;
		this.y = y;
		this.width = 5;
		this.height = 10;
		this.xVelocity = 0;
		this.yVelocity = 0;
	}

	move()
	{
	}

	show()
	{
		fill(255);
		ellipse(this.x, this.y, this.width, this.height);
	}
}

class Platform
{
	constructor(x, y, width)
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = 20;
	}

	move()
	{
	}

	show()
	{
		fill(125);
		rect(this.x, this.y, this.width, this.height);
	}
}