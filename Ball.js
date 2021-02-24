class Ball
{
    constructor(x,y,r)
    {
        var options=
        {
            //'restitution':0.8,
            'frictionAir':0.005,
            'density':3,
        
            
        }

        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r=r;
        this.image=loadImage("ball.png")
    }

    display()
    {
        push();
        //fill("yellow");
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }

}