class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    print() {
        console.log(this.x + ", " + this.y);
    }
}

class PointEx extends Point {
    constructor(...args) {
        super(...args);

        console.log("derived");
    }
}

const pt = new PointEx(5, 10);
pt.print();
