class Hero
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.heroWidth = 70;
		this.heroHeight = 50;
		this.xVelocity = 0;
		this.yVelocity = 0;
		this.gravity = 0.6;
		this.walkingAccel = 0.2;
		this.slowingAccel = 0.6;
		this.terminalVelocity = 20;
		this.maxRWalkingSpeed = 10;
		this.maxLWalkingSpeed = -this.maxRWalkingSpeed;
		this.sprite = loadImage("https://cdn.glitch.com/669b7e75-b563-4deb-8e12-503a6c6fb422%2FKid_Running_Right.png?1512671362787")
		this.spriteRight = loadImage("https://cdn.glitch.com/669b7e75-b563-4deb-8e12-503a6c6fb422%2FKid_Running_Right.png?1512671362787")
		this.spriteLeft = loadImage("https://cdn.glitch.com/669b7e75-b563-4deb-8e12-503a6c6fb422%2FKid_Running_Left.png?1512671678662")
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
		if(this.x <= edgeLeft)
		{
			this.x = edgeRight;
		}
		else if(this.x >= edgeRight)
		{
			this.x = edgeLeft;
		}
	}
	
	touchPlat()
	{
		for(let i = 0; i < platforms.length; i++)
		{
			if(platforms[i].contains(this.x, this.y + 10))
			{
				this.y = platforms[i].y - 9;
				return true;
			}
		}
		return false;
	}
	
	move()
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
		
		if(keyIsDown(LEFT_ARROW) && this.xVelocity >= this.maxLWalkingSpeed)
		{
			this.sprite = this.spriteLeft;
			if(this.xVelocity <= 0)
			{
				this.xVelocity -= this.walkingAccel;
			}
			else
			{
				this.xVelocity -= this.slowingAccel;
			}
		}
		else if(keyIsDown(RIGHT_ARROW) && this.xVelocity <= this.maxRWalkingSpeed)
		{
			this.sprite = this.spriteRight;
			if(this.xVelocity >= 0)
			{
				this.xVelocity += this.walkingAccel;
			}
			else
			{
				this.xVelocity += this.slowingAccel;
			}
		}
		else if(this.xVelocity >= 0.25)
		{
			this.xVelocity -= this.slowingAccel
		}
		else if(this.xVelocity <= -0.25)
		{
			this.xVelocity += this.slowingAccel
		}
		else
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
		image(this.sprite, this.x-45, this.y-40, this.heroWidth, this.heroHeight);
	}
}