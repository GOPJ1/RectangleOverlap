var rect1 = new Rectangle(25, 25, 30, 40, "blue");
var rect2 = new Rectangle(45, 35, 50, 30, "red");
var cnv;

//Canvas width and height constants
let CANVAS_HEIGHT = 500;
let CANVAS_WIDTH = 500;

function setup() { 
    cnv = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    centerCanvas();
}

function draw() { 
    background(51);
    
    fill( rect1.getColor() );
    rect1.display("rect1P");
    
    fill( rect2.getColor() );
    rect2.display("rect2P");
}

function keyPressed(){
    if( key == "a" ){
        overlap();
    }
    if( key == "n"){
        var newWidth1 = random(250);
        var newX1 = random(CANVAS_WIDTH - newWidth1);
        var newHeight1 = random(250);
        var newY1 = random(CANVAS_HEIGHT - newHeight1);
        rect1.setx(newX1);
        rect1.sety(newY1);
        rect1.setHeight(newHeight1);
        rect1.setWidth(newWidth1);
        
        
        var newWidth2 = random(250);
        var newX2 = random(CANVAS_WIDTH - newWidth2);
        var newHeight2 = random(250);
        var newY2 = random(CANVAS_HEIGHT - newHeight2);
        rect2.setx(newX2);
        rect2.sety(newY2);
        rect2.setHeight(newHeight2);
        rect2.setWidth(newWidth2);
    }
}

function windowResized(){
    centerCanvas();
}

function centerCanvas(){
    var cnvx = (windowWidth - CANVAS_WIDTH)/2;
    var cnvy = (windowHeight = CANVAS_HEIGHT)/2;
    cnv.position(cnvx,cnvy);
}


function overlap(){
    rect1x1 = rect1.getx1();
    rect1x2 = rect1.getx2();
    rect1y1 = rect1.gety1();
    rect1y2 = rect1.gety2();
    
    rect2x1 = rect2.getx1();
    rect2x2 = rect2.getx2();
    rect2y1 = rect2.gety1();
    rect2y2 = rect2.gety2();
    
    if( rect2x1 > rect1x1 && rect2x1 < rect1x2 ){
        
        if( rect2y2 < rect1y2){ 
            alert("The rectangles overlap from (" + rect2x1 + "," + rectqy1 + ") and (" + rect1x2 + "," + rect2y2 + ").");
        }
        else{
            alert("The rectangles overlap from (" + rect2x1 + "," + rect2y1 + ") and (" + rect1x2 + "," + rect1y2 + ").");
        }
        
    }
    
    else if (rect1x1 > rect2x1 && rect1x1 < rect2x2){
        
        if( rect1y2 < rect2y2){ 
            alert("The rectangles overlap from (" + rect1x1 + "," + rect2y1 + ") and (" + rect2x2 + "," + rect1y2 + ").");
        }else{ 
            alert("The rectangles overlap from (" + rect1x1 + "," + rect2y1 + ") and (" + rect2x2 + "," + rect2y2 + ").");
        }
    }
    else{
        alert("No overlap occurs.");
    }
}