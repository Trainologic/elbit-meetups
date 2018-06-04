function run() {
    for(let i=0; i<10; i++) {
        task(function() {
            console.log("Task #" + i + " completed");
        });
    }
}

function task(cb) {
    setTimeout(cb, 1000);
}

run();
