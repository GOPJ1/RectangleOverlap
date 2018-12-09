//Canvas width and height constants
let CANVAS_HEIGHT = 500;
let CANVAS_WIDTH = 500;

//Rectangle color constants
let BLUE_COLOR = "Blue";
let RED_COLOR = "Red";

//Rectangle display constants
let BLUE_DISPLAY = "blueP";
let RED_DISPLAY = "redP";

//Create global variables for the blue and red rectangles, and the canvas respectively
var blue;
var red;
var cnv;

/**
* Some inital stuff to do before starting the program. We
* need a canvas, a blue rectangle, and a red rectangle. So
* create and use them to intialize our global vairbales.
**/
function setup() {
    
    cnv = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    centerCanvas();
    
    blue = new Rectangle(25, 25, 50, 50, BLUE_COLOR);
    
    red = new Rectangle(35, 35, 15, 15, RED_COLOR);
}

/**
* Continuous loop that draws the red and
* blue rectangles on the page.
**/
function draw() { 
    //Clear the background so that rectangles aren't redrawn
    clear();
    
    //Set background color
    background(51);
    
    //Draw the blue rectangle with the correct color
    fill( blue.getColor() );
    blue.display(BLUE_DISPLAY);
    
    //Draw the red rectangle with the correct color
    fill( red.getColor() );
    red.display(RED_DISPLAY);
}

/**
* Check if an a or n key was pressed. Display an alert or
* make new rectangles accordingly.
**/
function keyPressed(){
    
    //If an a was pressed check for an overlap
    if( key == "a" ||key == "A"){
        overlap();
    }
    
    //If the n key was pressed, update our rectangles
    if( key == "n" || key == "N"){
        blue.updateRectangle();
        red.updateRectangle();
    }
}

/**
* Keep the canvas centerd when the window is * resized;
**/
function windowResized(){
    centerCanvas();
}

/**
* Create a new x and y coordinate so that
* the canvas is centered
**/
function centerCanvas(){
    
    //Calculate the horizontal center of the page
    var cnvx = (windowWidth - CANVAS_WIDTH)/2;
    
    //Calculate the vertical center of the page
    var cnvy = (windowHeight = CANVAS_HEIGHT)/2;
    
    //Set the position of the canvas to the newly centered coordinates
    cnv.position(cnvx,cnvy);
}

/**
* Checks if an overlap of the blue and red rectangles occurs.
**/
function overlap(){
    
    //Get the blue rectangles coordinates
    blueX1 = blue.getX1();
    blueX2 = blue.getX2();
    blueY1 = blue.getY1();
    blueY2 = blue.getY2();
    
    //Get the red rectangles coordinates
    redX1 = red.getX1();
    redX2 = red.getX2();
    redY1 = red.getY1();
    redY2 = red.getY2();
    
    //If any opposing side of two rectangles, e.g. right vs left, is out of reach then an intersection is impossible.
    if( redX2 < blueX1 || redX1 > blueX2 || redY2 < blueY1 || redY1 > blueY2 ){
        
        alert("No overlap occurs.");
        return;
    }
    else{
        foundOverlap = findOverlap();
        overlapAlert(foundOverlap.getX1(), foundOverlap.getX2(), foundOverlap.getY1(), foundOverlap.getY2());
    }
    
}

function findOverlap(){
    
    if( red.isEncased(blueX1, blueX2, blueY1, blueY2) ){
        return new OverlapPoints(redX1, redX2, redY1, redY2);
    }

    if( blue.isEncased(redX1, redX2, redY1, redY2) ){
        return new OverlapPoints(blueX1, blueX2, blueY1, blueY2);
    }

    if( blue.isRightOf(redX1) ){

        if( blue.isContainedVertically(redY1, redY2) ){
            return new OverlapPoints(blueX1, redX2, blueY1, blueY2);
        }

        else if( blue.isAbove(redY1) ){

            if( blue.isContainedHorizontally(redX1, redX2) ){
                return new OverlapPoints(blueX1, blueX2, redY1, blueY2);
            }

            return new OverlapPoints(blueX1, redX2, redY1, blueY2);
        }
        else{

            if( blue.isContainedHorizontally(redX1, redX2) ){
                return new OverlapPoints(blueX1, blueX2, blueY1, redY2);
            }
            else{
                return new OverlapPoints(blueX1, redX2, blueY1, redY2);
            }
        }
    }
        
    else{

        if( red.isContainedVertically(blueY1, blueY2) ){
            return new OverlapPoints(redX1, blueX2, redY1, redY2);
        }

        else if( red.isAbove(blueY1) ){

            if( red.isContainedHorizontally(blueX1, blueX2) ){
                return new OverlapPoints(redX1, redX2, blueY1, blueY2);
            }

            return new OverlapPoints(redX1, blueX2, blueY1, redY2);
        }
        else{

            if( red.isContainedHorizontally(blueX1, blueX2) ){
                return new OverlapPoints(redX1, redX2, redY1, blueY2);
            }
                return new OverlapPoints(redX1, blueX2, redY1, blueY2);
        }
    }
}

/**
* Displays an alert that an overlap occured
* 
* @param {number} fromX Starting x coordinate of the overlap
* @param {number} toX Ending x coording of the overlap
* @param {number} fromY Starting y coordinate of the overlap
* @param {number} toY Ending y coording of the overlap
**/
function overlapAlert(fromX, toX, fromY, toY){
    alert("Overlap occurs: \nX values: " + fromX + " , " + toX + "\nY values: " + fromY + " , " + toY);
}