function main() {
    task1().then(res => {
        if(res == 42) {
            return task2().then(()=> {
                console.log("COMPLETED");
            });
        }
        else {
            console.log("COMPLETED");
        }
    });
}

function plainSynchronousCode() {
    if(task1() == 42) {
        task2();
    }

    console.log("COMPLETED");
}

function waitAndReturn42() {
    return delay(1500).then(_ => 42);
}

function delay(ms) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

main();
