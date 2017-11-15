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
	john.move();
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
	constructor(x, y)
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
		if(keyIsDown(LEFT_ARROW))
		{
			this.x -= 5;
		}
		else if(keyIsDown(RIGHT_ARROW))
		{
			this.x += 5;
		}
		if(keyIsDown(UP_ARROW))
		{
			this.y -= 5;
		}
		else if(keyIsDown(DOWN_ARROW))
		{
			this.y += 5;
		}
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

	show()
	{
		fill(125);
		rect(this.x, this.y, this.width, this.height);
	}
}