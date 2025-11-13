var socket;

function setup() {
 createCanvas(400,400);
 background(100);

 socket = io.connect('http://localhost:3000')
 socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    fill(255, 0, 0);
    noStroke();
    ellipse(data.x, data.y, 60, 60);
}

function mouseDragged() {
    console.log('Sending: ' + mouseX + ',' + mouseY);

    var data = {
        x:mouseX,
        y:mouseY
    }

    socket.emit('mouse', data);

    fill(255);
    noStroke();
    ellipse(mouseX, mouseY, 60, 60);
}

function draw() {

 
}