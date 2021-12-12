var blob;
var blobs = [];

function setup() {
    createCanvas(600, 600);
    blob = new Blob(width/2, width/2, 64);
    for (var i = 0; i < 10; i++) {
        blobs[i] = new Blob(random(width), random(height), 16);
    }
}

function draw() {
    background(0);
    blob.show();
    for (var i = 0; i < blobs.length; i++) {
        blobs[i].show();
    }
}