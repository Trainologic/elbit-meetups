const arr = ["A", "B", "C"];

for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

for(let index in arr) {
    console.log(index + ": " + arr[index]);
}

arr.forEach(function(value, index) {
    console.log(index + ": " + value);
});

for(const value of arr) {
    console.log(value);
}
