const getHashCode = (function() {
    let nextHash = 1;
    const MAGIC_FIELD = "##magic_field##";

    function getHashCode(obj) {
        let hash = obj[MAGIC_FIELD];
        if(!hash) {
            hash = obj[MAGIC_FIELD] = nextHash++;
        }

        return hash;
    }

    return getHashCode;
})();

const ori = {
    id: 1,
    name: "Ori"
};

const roni = {
    id: 2,
    name: "Roni"
};

const map = {};
map[getHashCode(ori)] = true;

console.log(map[getHashCode(roni)]);
