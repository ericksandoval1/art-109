let canvas;
let xPos = 0;
let yPos = 0;
let easing = 0.05;


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index" , -6);
    background(225);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(225);

}

function draw() {
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawThing(xPos, yPos);
    drawThing(xPos + 50, yPos - 50);
}

function drawThing(_x, _y) {
    ellipse(_x, _y, 50, 50);
    ellipse(_x-5 ,_y-5, 20, 20);
    ellipse(_x+8 ,_y+10, 10, 10);
    ellipse(_x+15 ,_y, 8, 8);
}

