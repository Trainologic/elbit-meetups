const map = new Map();

const ori = {
    id: 1,
    name: "Ori",
}

map.set(ori, 1);

const likeOri = {
    id: 1,
    name: "Ori",
}

console.log(map.has(likeOri)); // false
