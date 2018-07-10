const obj = {
    [Symbol.iterator]() {
        let next = 0;

        return {
            next: function() {
                return {
                    done: next == 10,
                    value: next++,
                };
            }
        }
    }
};

for(const val of obj) {
    console.log(val);
}
