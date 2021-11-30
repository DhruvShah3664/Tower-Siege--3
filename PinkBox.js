class PinkBox extends Box{
    constructor(x,y){
        super(x,y,35,45);
    }

    display(){
       fill(255, 192, 203);
       super.display(); 
    }
}