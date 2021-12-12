function Blob(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;

    this.show = function() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    }
}