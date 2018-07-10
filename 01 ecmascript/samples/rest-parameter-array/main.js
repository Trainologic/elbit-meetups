const arr = [1,2,3];

const [num1, ...tail] = arr;

for(const num of tail) {
    console.log(num);
}
