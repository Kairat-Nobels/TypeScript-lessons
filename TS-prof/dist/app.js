"use strict";
class Person {
    constructor(name) { }
}
const max = new Person('Maxim');
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