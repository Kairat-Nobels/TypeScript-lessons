"use strict";
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
forEach([8, 9, 11], (n, ind) => console.log(n, ind, (ind ? ind : 0) + n));
function fail(isk) {
    throw isk;
}
function isPlainObject(value) {
    return value instanceof Object && !Array.isArray(value);
}
console.log(isPlainObject(1));
console.log(isPlainObject('hexlet'));
console.log(isPlainObject({}));
console.log(isPlainObject([1, 8]));
console.log(isPlainObject({ name: 'code-basics' }));
const lessonsCount = function ({ lessons }) {
    return lessons.length;
};
const course = { lessons: ['intro', 'lala'] };
console.log(lessonsCount(course));
function max(first, ...numbers) {
    return Math.max(first, ...numbers);
}
console.log(max(1, 2, 3));
console.log(max(234));
function newYearCongratulate(data1, data2) {
    if (typeof (data1) === 'number')
        return `Hi ${data2}! Happy New Year ${data1}!`;
    return `Hi ${data1}! Happy New Year!`;
}
console.log(newYearCongratulate('Kairat'));
console.log(newYearCongratulate(2023, 'Kairat'));
//# sourceMappingURL=3_part.js.map