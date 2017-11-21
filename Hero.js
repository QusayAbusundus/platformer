class Hero
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = 20;
		this.xVelocity = 0;
		this.yVelocity = 0;
	}
	
	falling(floor)
	{
		if(this.y > floor)
		{
			this.y = 0;
			score--;
		}
	}

	move()
	{
		if(keyIsDown(LEFT_ARROW))
		{
			this.xVelocity = -5;
		}
		else if(keyIsDown(RIGHT_ARROW))
		{
			this.xVelocity = 5;
		}
		else
		{
			this.xVelocity = 0;
		}
		if(keyIsDown(UP_ARROW))
		{
			this.yVelocity = -5;
		}
		else
		{
			this.yVelocity = 0;
		}
		for(let i = 0; i < platforms.length; i++)
		{
			if(platforms[i].contains(this.x, this.y) == false)
			{
				this.yVelocity = 5;
			}
			else
			{
				this.yVelocity = 0;
			}
		}
		
		this.x += this.xVelocity;
		this.y += this.yVelocity;
	}

	show()
	{
		fill(255);
		ellipse(this.x, this.y, this.width, this.height);
	}
}