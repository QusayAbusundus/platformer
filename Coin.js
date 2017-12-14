class Coin
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.radius = 40;
	}
	contains(givenX, givenY)
	{
		let d = dist(givenX, givenY, this.x, this.y);
		return d < this.radius;
	}
	
	show()
	{
		fill ("Yellow");
		noStroke();
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
	}
}