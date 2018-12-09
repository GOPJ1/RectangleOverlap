class OverlapPoints{
    
    constructor( x1, x2, y1, y2){
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }
    
    getX1(){
        return this.x1;
    }
    
    getX2(){
        return this.x2;
    }
    getY1(){
        return this.y1;
    }
    getY2(){
        return this.y2;
    }
    
    equals(otherX1, otherX2, otherY1, otherY2){
        if( this.x1 === otherX1 && this.x2 === other.x2 && this.y1 === otherY1 && this.y2 === otherY2){
            return true;
        }
        return false;
    }
}