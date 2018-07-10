function Point(x, y) {
    function dump() {
        console.log(x + ", " + y);
    }

    function move(dx, dy) {
        x += dx;
        y += dy;
    }

    return {
        dump: dump,
        move: move,
    }
}

var pt1 = Point(5, 10);
var pt2 = Point(10, 20);

console.log(pt1 == pt2) // false
console.log(pt1.print == pt2.print) // false
