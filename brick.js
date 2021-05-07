class Brick{
    constructor(x,y,width,height){
        var options ={
            "density":0.2,
            "friction":0.005,
            "restitution":0.9,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world , this.body);
    }
    display(){
    var angle = this.body.angle;
    var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        stroke("black")
        strokeWeight(2)
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();
    }
}