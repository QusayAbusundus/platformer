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
		this.gravity = 0.2;
		this.walkingAccel = 0.2;
		this.terminalVelocity = 20;
		this.maxRWalkingSpeed = 5;
		this.maxLWalkingSpeed = -5;
	}
	
	falling(floor)
	{
		if(this.y > floor)
		{
			this.y = 0;
			score--;
		}
	}
	
	horizScreenWrap(edgeLeft, edgeRight)
	{
		if(this.x == edgeLeft)
		{
			this.x = edgeRight;
		}
		else if(this.x == edgeRight)
		{
			this.x = edgeLeft;
		}
	}
	
	touchPlat()
	{
		for(let i = 0; i < platforms.length; i++)
		{
			if(platforms[i].contains(this.x, this.y + 10))
				return true;
		}
		return false;
	}

	move()
	{	
		for(let i = 0; i < platforms.length; i++)
		{
			if(this.touchPlat()) //On Platform
			{
				//Nothing happening
				this.yVelocity = 0;
				
				//Jumping
				if(keyIsDown(UP_ARROW))
				{
					this.yVelocity = -10;
				}
			}
			else if(this.touchPlat() == false) //Not on Platform
			{
				//Falling
				if(this.yVelocity <= this.terminalVelocity)
				{
					this.yVelocity += this.gravity;					
				}
			}
		}
		
		if(keyIsDown(LEFT_ARROW) && this.xVelocity >= this.maxLWalkingSpeed)
		{
			this.xVelocity -= this.walkingAccel;
		}
		else if(keyIsDown(RIGHT_ARROW) && this.xVelocity <= this.maxRWalkingSpeed)
		{
			this.xVelocity += this.walkingAccel;
		}
		else if(this.xVelocity >= 0)
		{
			this.xVelocity -= this.walkingAccel;
		}
		else if(this.xVelocity <= 0)
		{
			this.xVelocity += this.walkingAccel;
		}
		else if(keyPressed() == false)
		{
			this.xVelocity = 0;
		}
		
		this.x += this.xVelocity;
		this.y += this.yVelocity;
	}

	show()
	{
		fill(255);
		stroke(0);
		ellipse(this.x, this.y, this.width, this.height);
	}
}