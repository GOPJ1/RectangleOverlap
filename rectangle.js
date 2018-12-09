class Rectangle{
    
    constructor(x, y, width, height, color){
        this.x = Math.trunc(x);
        this.y = Math.trunc(y);
        this.width = Math.trunc(width);
        this.height = Math.trunc(height);
        this.color = color;
    }
    
    getX1(){
        return this.x
    }
    
    getX2(){
        return this.x + this.width;
    }
    
    getY1(){
        return this.y;
    }
    
    getY2(){
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
        if(firstX < this.x && secondX > this.getX2() && firstY < this.y && secondY > this.getY2()){
            return true;
        }
        return false;
    }
    
    isRightOf(firstX, secondX){
        if( this.x > firstXX && this.getX2() > secondX){
            return true;
        }
        return false;
    }
    
    isAbove(firstY, secondY){
        if(this.y > firstY && this.getY2() > secondY ){
           return true;
        }
        return false;
    }
    
    display(pName){
        rect(this.x, this.y, this.width, this.height);
    
        document.getElementById(pName).innerHTML = this.color + " rectangle: X1 = " + this.x + " | Y1 = " + this.y + " | X2 = " + this.getX2() + " | Y2 = " + this.getY2() + " | width = " + this.width + " | height = " + this.height ;
    }
    
    updateRectangle(){
        
        //Generate a new height and width within the set minimum and maximum rectnalge sizes.
        var newWidth = random(50,250);
        var newHeight = random(50,250);
    
        //Create new points, ensure points are withing the canvas
        var newX = random(CANVAS_WIDTH - newWidth);
        var newY = random(CANVAS_HEIGHT - newHeight);
        
        this.setWidth(newWidth);
        this.setHeight(newHeight);
        this.setx(newX);
        this.sety(newY);
    
    }
    
}