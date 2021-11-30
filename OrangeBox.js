class OrangeBox extends Box{
    constructor(x,y){
        super(x,y,35,45);
    }

    display(){
       fill(255, 131, 0);
       super.display(); 
    }
}