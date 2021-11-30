class GreenBox extends Box{
    constructor(x,y){
        super(x,y,35,45);
    }

    display(){
       fill(101, 206, 162);
       super.display(); 
    }
}