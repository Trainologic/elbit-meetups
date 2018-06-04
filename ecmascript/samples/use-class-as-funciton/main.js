"use strict";

const Point = profile(class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    print() {
        console.log(this.x + ", " + this.y);
    }
});

function profile(cls) {
    class ProfiledClass extends cls {
        constructor(... args) {
            super(... args);

            ++ProfiledClass.objectCount;
        }
    }

    ProfiledClass.objectCount = 0;

    return ProfiledClass;
}

const pt1 = new Point(5, 10);
const pt2 = new Point(10, 20);

console.log(Point.objectCount);
