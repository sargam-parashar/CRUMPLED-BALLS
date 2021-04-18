class Paper{
	constructor(x,y,r){
		var options = {

            isStatic: false,
			'restitution':0.3,
			'friction':0, 
			'density':1.2
			
		}

		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-130)/2, options);
		World.add(world, this.body);
		this.image = loadImage("paper.png");
	
	}

	display(){

			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			imageMode(CENTER);
			image(this.image,0, this.r);
			pop()
	}

}