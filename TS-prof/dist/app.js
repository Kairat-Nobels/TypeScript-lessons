"use strict";
class Person {
    constructor(name) { }
}
const max = new Person('Maxim');
const btn = document.querySelector('#btn1');
btn.addEventListener('click', () => {
    console.log('Btn clicked!');
});
let anyFlag;
function logInfo(data, _) {
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
}
logInfo("You are my fire");
function multiple(a, b) {
    if (a && b)
        return a * b;
    return;
}
//# sourceMappingURL=app.js.map