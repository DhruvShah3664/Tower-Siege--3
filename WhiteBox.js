class WhiteBox extends Box{
    constructor(x,y){
        super(x,y,35,45);
    }

    display(){
       fill(255, 255, 255);
       super.display(); 
    }
}