class Rectangle{
    constructor(x, y, width, height, color){
        this.x = Math.trunc(x);
        this.y = Math.trunc(y);
        this.width = Math.trunc(width);
        this.height = Math.trunc(height);
        this.color = color;
    }
    
    getx1(){
        return this.x
    }
    
    getx2(){
        return this.x + this.width;
    }
    
    gety1(){
        return this.y;
    }
    
    gety2(){
        return this.y + this.height;
    }
    
    getColor(){
        return this.color;
    }
    
    setx(newx){
        this.x = Math.trunc(newx);
    }
    
    sety(newy){
        this.y = Math.trunc(newy);
    }
    
    setWidth(newWidth){
        this.width = Math.trunc(newWidth);
    }
    
    setHeight(newHeight){
        this.height = Math.trunc(newHeight);
    }
    
    isEncased(firstX, secondX, firstY, secondY){
        if(firstX < this.x && secondX > this.getx2() && firstY < this.y && secondY > this.gety2()){
            return true;
        }
        return false;
    }
    
    display(pName){
        rect(this.x, this.y, this.width, this.height);
    
        document.getElementById(pName).innerHTML = this.color + " rectangle: X1 = " + this.x + " | Y1 = " + this.y + " | X2 = " + this.getx2() + " | Y2 = " + this.gety2() + " | width = " + this.width + " | height = " + this.height ;
    }
    
}