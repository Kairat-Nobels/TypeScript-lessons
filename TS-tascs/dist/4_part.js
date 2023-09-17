"use strict";
function isPresence(value) {
    if (value === null || value === undefined) {
        return false;
    }
    if (typeof value === 'string') {
        if (value === '') {
            return false;
        }
    }
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return false;
        }
    }
    if (value instanceof Object) {
        if (Object.keys(value).length === 0) {
            return false;
        }
    }
    return true;
}
isPresence('');
isPresence({});
isPresence([]);
isPresence([1, 3]);
isPresence(10);
function last(a) {
    if (typeof (a) === 'number')
        return +String(a).slice(-1);
    return String(a).slice(-1);
}
console.log(last('2345ty'));
console.log(last(2345));
function uniq(arr) {
    const rez = [];
    for (let el of arr) {
        if (!rez.includes(el))
            rez.push(el);
    }
    return rez;
}
console.log(uniq([9, 9, 3, 8, 8]));
console.log(uniq(['twinkle', 'twinkle', 'little', 'bat']));
console.log(uniq([1, 1, 3, 'oops!']));
function getField(n) {
    const row = Array(n).fill(null);
    return Array(n).fill(row);
}
const field1 = getField(1);
console.log(field1);
const field5 = getField(5);
console.log(field5);
//# sourceMappingURL=4_part.js.map