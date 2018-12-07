class Rectangle{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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
    
    display(pName){
        rect(this.x, this.y, this.width, this.height);
        document.getElementById(pName).innerHTML = this.color + " rectangle: x = " + this.x + " | y = " + this.y + " | width = " + this.width + " | height = " + this.height;
    }
    
}