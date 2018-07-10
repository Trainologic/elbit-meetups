const map = new WeakMap();

class Contact {
    constructor(name) {
        this.name = name;
    }
}

let ori = new Contact("Ori");
let roni = new Contact("Roni");
map.set(ori, roni);

setTimeout(function() {
    ori = null;
    console.log("Ori can now be GC'ed");
}, 1000);
