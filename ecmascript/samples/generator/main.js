function *getData() {
    for(let i=0; i<10; i++) {
        yield i;
    }
}

for(const num of getData()) {
    console.log(num);
}
