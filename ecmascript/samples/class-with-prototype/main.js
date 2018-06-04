function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.print = function() {
    console.log(this.x + ", " + this.y);
}

var pt1 = new Point(5, 10);
var pt2 = new Point(10, 20);

console.log(pt1 == pt2) // false
console.log(pt1.print == pt2.print) // true

