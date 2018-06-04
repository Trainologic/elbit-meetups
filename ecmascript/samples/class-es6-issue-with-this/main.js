let nextTimerId = 1

class Timer {
    constructor(ms) {
        this.id = nextTimerId++;
        this.ms = ms;
    }

    start() {
        this.intervalId = setInterval(this.onTick, this.ms);
    }

    onTick() {
        console.log(this);
        console.log(this.id);
    }
}

const timer = new Timer(1000);
timer.start();
