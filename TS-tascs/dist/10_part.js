"use strict";
class Phonebook {
    constructor() {
        this.entries = {};
    }
    get(key) {
        return key in this.entries ? this.entries[key] : null;
    }
    set(key, value) {
        this.entries[key] = value;
    }
}
const myNote = new Phonebook();
myNote.set('help', 911);
console.log(myNote.get('help'));
function last10(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : null;
}
console.log(last10([]));
console.log(last10([3, 2]));
console.log(last10(['code-basics', 'hexlet']));
const collMySet = {
    data: [1, 2, 3, 4],
    add(n) {
        this.data.push(n);
        return this.data.length;
    },
    has(i) {
        return Boolean(this.data.find(el => el === i));
    }
};
console.log(collMySet.add(21));
console.log(collMySet.add(29));
console.log(collMySet.has(21));
console.log(collMySet.has(10));
const coll = {
    items: [1, 2, 3],
    push(n) {
        this.items = [...this.items, n];
        return this.items.length;
    },
    filter(callback) {
        const newItems = this.items.filter(callback);
        return newItems;
    }
};
console.log(coll.push(21));
console.log(coll.push(99));
console.log(coll.push(10));
const newColl = coll.filter((value) => value % 2 == 0);
console.log(newColl);
function join(coll1, coll2) {
    return [].concat(coll1, coll2);
}
console.log(join([1, 2], ['one', 'two']));
const map10 = {
    values: new Map(),
    set(key, value) {
        this.values.set(key, value);
    },
    get(key) {
        return this.values.get(key);
    },
};
map10.set('one', 1234);
map10.set('two', 4321);
console.log(map10.get('one'));
console.log(map10.get('two'));
//# sourceMappingURL=10_part.js.map