"use strict";
function mergeObject(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObject({ name: 'Kairat' }, { age: 20 });
const merged2 = mergeObject({ boy: 'Kairat' }, { girl: "Munisa" });
console.log(merged.name + " and " + merged.age);
console.log(merged2.boy + " love " + merged2.girl);
function withCount(value) {
    return {
        value,
        count: `In this object ${value.length} simvols`
    };
}
console.log(withCount('Latly Ive been, Ive been loosing sleep'));
console.log(withCount([1, 2, 3, 78, "Kairat"]));
console.log(withCount({ length: 20 }));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: "Ronaldo",
    goals: 890,
    job: "football"
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'goals'));
console.log(getObjectValue(person, 'job'));
//# sourceMappingURL=generic.js.map