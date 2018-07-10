async function main() {
    try {
        await task();
    }
    catch(err) {
        console.log("ERROR: " + err.message);
    }
}

async function task() {
    await delay(1500);
    throw new Error("Ooops");
}

function delay(ms) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

main();
