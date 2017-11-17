class Platform
{
	constructor(x, y, width)
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = 20;
	}
	
	contains(givenX, givenY)
	{
		return this.x > givenX && this.width < givenX && this.y > givenY && this.height < givenY;
	}

	show()
	{
		fill(125);
		rect(this.x, this.y, this.width, this.height);
	}
} 