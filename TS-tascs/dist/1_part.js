"use strict";
console.log('Hello, World!');
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 8));
console.log(multiply(1, 2));
function repeat(text, count) {
    let rez = '';
    for (let i = 0; i < count; i++)
        rez += text;
    return rez;
}
console.log(repeat('hexlet', 2));
console.log(repeat('wo', 3));
function getHiddenCard(num, count) {
    let rez = num.slice(-4);
    let s = '*'.repeat((count && count > 0) ? count : 4);
    return s + rez;
}
console.log(getHiddenCard('1234567812345678', 2));
console.log(getHiddenCard('1234567812345678', 3));
console.log(getHiddenCard('1234567812345678'));
console.log(getHiddenCard('2034399002121100', 1));
const numbers = [1, 3, 8, 9, 100, 23, 55, 34];
const getEvenNumbers = () => numbers.filter(el => el % 2 === 0);
console.log(getEvenNumbers());
function filterAnagrams(str, arr) {
    return arr.filter(el => el.split('').sort().join('') === str.split('').sort().join(''));
}
console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(filterAnagrams('laser', ['lazing', 'lazy', 'lacer']));
function isComplete(course) {
    return course.lessons.length >= 4;
}
const course1 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions'],
};
console.log(isComplete(course1));
const course2 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions', 'loops'],
};
console.log(isComplete(course2));
//# sourceMappingURL=1_part.js.map