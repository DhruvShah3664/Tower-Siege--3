class Box{
    constructor(x,y,width,height){
        var options = {
            'restitiution':0.8,
            'friction':1.5
            
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);


    }
    display(){
        //console.log(this.body.speed);
        if(this.body.speed < 3){
        var angle = this.body.angle    
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        rectMode(CENTER);
        rect(0, 0,this.width,this.height);
        pop();
        }else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            pop();
        }
        
    }

    score(){
        if(this.visiblity<0 && this.visiblity >-105){
            score++
        }
    }

    
    
}