class Box{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h)
        World.add(world,this.body)
        this.w = w
        this.h = h
    }
    display(){
        push ()
        angleMode(RADIANS)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rect(0,0,this.w,this.h)
        pop()
    }

}