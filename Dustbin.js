class dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:15
            }
        this.body= Bodies.rectangle(x,y,width,height,options)
        this.height=height
        this.width=width
        World.add(world,this.body)
        }
        display(){
        rectMode(RADIUS)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        }
        }