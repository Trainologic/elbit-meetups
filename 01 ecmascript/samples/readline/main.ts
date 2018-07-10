const readline = require('readline');
const fs = require("fs");

(<any>Symbol).asyncIterator = Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator");

main();

async function main() {
    for await(const line of getData()) {
        console.log(line);
    }
}

async function *getData() {
    await delay(1000);
    yield 1;
    await delay(2000);
    yield 2;
}

function delay(ms) {
    return new Promise(resolve=>setTimeout(resolve, ms));
}
