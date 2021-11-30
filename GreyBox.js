class GreyBox extends Box{
    constructor(x,y){
        super(x,y,35,45);
    }

    display(){
       fill(124, 126, 130);
       super.display(); 
    }
}