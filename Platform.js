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
		return givenX > this.x && givenX < this.x + this.width && givenY > this.y && givenY < this.y + this.height;
	}

	show()
	{
		fill(125);
		rect(this.x, this.y, this.width, this.height);
	}
}