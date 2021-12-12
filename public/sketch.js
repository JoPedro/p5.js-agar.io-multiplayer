var blob;
var blobs = [];
var zoom = 1;

function setup() {
    createCanvas(600, 600);
    blob = new Blob(0, 0, 32);
    for (var i = 0; i < 512; i++) {
        var x = random(-width*4, width*4);
        var y = random(-height*4, height*4);
        blobs[i] = new Blob(x, y, 16);
    }
}

function draw() {
    background(0);
    
    translate(width/2, height/2);
    var newzoom = 32 / blob.r;
    zoom = lerp(zoom, newzoom, 0.1);
    scale(zoom);
    translate(-blob.pos.x, -blob.pos.y);
    
    blob.show();
    blob.update();
    for (var i = blobs.length-1; i >= 0; i--) {
        blobs[i].show();
        if (blob.eats(blobs[i])) {
            blobs.splice(i, 1);
        }
    }
}