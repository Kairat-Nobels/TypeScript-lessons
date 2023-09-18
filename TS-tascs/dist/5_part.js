"use strict";
function reverse(numbers) {
    let arr = [];
    for (let i of numbers) {
        arr.unshift(i);
    }
    return arr;
}
console.log(reverse([1, 2, 8]));
console.log(reverse([10, 33, 7, 0]));
function isTheSamePoint(a, b) {
    let rez = true;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
            rez = false;
    }
    return rez;
}
const p1 = [1, 3, 4];
const p2 = [1, 3, 4];
const p3 = [0, 8, 4];
console.log(isTheSamePoint(p1, p2));
console.log(isTheSamePoint(p1, p3));
console.log(isTheSamePoint(p2, p3));
function lastIndex(str, char) {
    let rez = str.indexOf(char);
    if (rez < 0)
        return null;
    for (let i = 0; i < str.length; i++) {
        if (char === str[i])
            rez = i;
    }
    return rez;
}
console.log(lastIndex('kairat', 'b'));
console.log(lastIndex('kairat', 'a'));
function formatPrice(a) {
    if (a === null || a === undefined)
        return '$0.00';
    return `$${a.toFixed(2)}`;
}
console.log(formatPrice(3.145));
console.log(formatPrice(200));
console.log(formatPrice());
console.log(formatPrice(null));
const startGame = () => {
    const state = ['turtle', null, null, null, null];
    function makeTurn(d) {
        const turtleIndex = state.indexOf('turtle');
        if (turtleIndex !== -1) {
            if ((turtleIndex !== 0 && d === 'left') || (turtleIndex !== 4 && d === 'right')) {
                const newTurtleIndex = d === 'left' ? turtleIndex - 1 : turtleIndex + 1;
                state[newTurtleIndex] = 'turtle';
                state[turtleIndex] = null;
            }
            else {
                throw new Error('Невозможный ход');
            }
        }
        else {
            throw new Error('Черепаха не найдена');
        }
    }
    return { makeTurn, state };
};
const { makeTurn, state } = startGame();
console.log(state);
makeTurn('right');
makeTurn('right');
console.log(state);
//# sourceMappingURL=5_part.js.map