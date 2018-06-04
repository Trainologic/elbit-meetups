class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    print() {
        console.log(this.x + ", " + this.y);
    }
}

const pt1 = new Point(5, 10);
const pt2 = new Point(10, 20);

console.log(pt1.print == pt2.print) // true
