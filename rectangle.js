class Rectangle{
    
    /**
    * Create a new rectangle
    * 
    * @param {number} x - The x coordinate of this rectangle
    * @param {number} y - The y coordinate of this rectangle
    * @param {number} width - The width of this rectangle
    * @param {number} height - The width of this rectangle
    * @param {String} color = The color of this rectangle
    **/
    constructor(x, y, width, height, color){
        this.x = Math.trunc(x);
        this.y = Math.trunc(y);
        this.width = Math.trunc(width);
        this.height = Math.trunc(height);
        this.color = color;
    }
    
    /**
    * Get the first coordinate of this rectangle
    * @return {number}
    **/
    getX1(){
        return this.x
    }
    
    /**
    * Get the second x coordinate of this rectangle
    * @return {number}
    **/
    getX2(){
        return this.x + this.width;
    }
     
    /**
    * Get the first y coordinate of this rectangle
    * @return {number}
    **/
    getY1(){
        return this.y;
    }
       
    /**
    * Get the second y coordinate of this rectangle
    * @return {number}
    **/
    getY2(){
        return this.y + this.height;
    }
    
    /**
    * Get the color of this rectangle
    * @return {String}
    **/
    getColor(){
        return this.color;
    }
    
    /**
    * Set the x coordinate of this rectangle
    **/
    setx(newx){
        this.x = Math.trunc(newx);
    }
    
    /**
    * Set the y coordinate of this rectangle
    **/
    sety(newy){
        this.y = Math.trunc(newy);
    }
    
    /**
    * Set the width of this rectangle
    **/
    setWidth(newWidth){
        this.width = Math.trunc(newWidth);
    }
    
    /**
    * Set the height of this rectangle
    **/
    setHeight(newHeight){
        this.height = Math.trunc(newHeight);
    }
    
    /**
    * Check if this rectangle is to the right of the given x coordinates of a rectangle.
    * 
    * @param {number} firstX - The first x coordinte to check
    * @param {number} secondX - The second x coordinate to check
    * 
    * @return {boolean}
    **/
    isRightOf(firstX){
        if( this.x > firstX){
            return true;
        }
        return false;
    }
    
    /**
    * Check if this rectangle is above the given y coordinates of a rectangle.
    * 
    * @param {number} firstY - The first y coordinate to check
    * @param {number} secondY - The second y coodinate to check
    *
    * @return {boolean}
    **/
    isAbove(firstY){
        if(this.y < firstY){
           return true;
        }
        return false;
    }
    
    overExtendsHorizontally(firstX, secondX){
        if( this.x < firstX && this.getX2() > secondX){
            return true;
        }
        return false;
    }
    
    overExtendsVertically(firstY, secondY){
        if( this.y < firstY && this.getY2() > secondY){
            return true;
        }
        return false;
    }
    
    /**
    * Check if this rectangle is contained vertically by another rectangle.
    * 
    * @param {number} firstY - The first y coordinate to check
    * @param {number} secondY - The second y coordinate to check
    *
    * @return (boolean)
    **/
    isContainedVertically(firstY, secondY){
        if( this.y >= firstY && this.getY2() <= secondY ){
            return true;
        }
        return false;
    }
    
    /**
    * Check if this rectangle is contained horizontally by another rectangle.
    * 
    * @param {number} firstX - The first x coordinate to check
    * @param {number} secondX - The second x coordinate to check
    *
    * @return (boolean)
    **/
    isContainedHorizontally(firstX, secondX){
        if( this.x >= firstX && this.getX2() <= secondX ){
            return true;
        }
        return false;
    }
    
    
    /**
    * Check if this rectangle is encase by another rectangle.
    * 
    * @param {number} firstX - The first x coordinate of the given rectangle
    * @param {number} secondX - The second x coordinate of the given rectangle
    * @param {number} firstY - The first y coordinate of the given rectangle
    * @param {number} secondY - The second y coordinate of the given rectangle
    *
    * @return (boolean)
    **/
    isEncased(firstX, secondX, firstY, secondY){
        if(this.isContainedHorizontally(firstX, secondX) && this.isContainedVertically(firstY, secondY)){
            return true;
        }
        return false;
    }
    
    /**
    * Draws the rectangle using the class variables. Updates the rectangles coordinate text on the
    * page.
    *
    * @param {String} pName - The paragraph id associated with this rectangle
    **/
    display(pName){
        rect(this.x, this.y, this.width, this.height);
    
        document.getElementById(pName).innerHTML = this.color + " rectangle: X1 = " + this.x + " | Y1 = " + this.y + " | X2 = " + this.getX2() + " | Y2 = " + this.getY2() + " | width = " + this.width + " | height = " + this.height ;
    }
    
    /**
    * Create a new width, height, x coordinate, and y coordinate all within the constraints of the
    * canvas. Set the rectangles values to these values.
    **/
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