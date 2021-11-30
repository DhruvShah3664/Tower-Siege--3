class BlueBox extends Box{
    constructor(x,y){
        super(x,y,35,45);
    }

    display(){
       fill(82, 190, 255);
       super.display(); 
    }
}