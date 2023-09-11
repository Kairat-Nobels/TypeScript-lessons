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
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['Lets', 'get', 'started', 'the best', 'work']);
strings.add('Kairat');
strings.remove('work');
console.log(strings.items);
const numbers = new Collection([1, 2, 3, 4, 5]);
numbers.add(10);
numbers.remove(3);
console.log(numbers.items);
function createCar(model, year) {
    const car = {};
    if (model.length > 3)
        car.model = model;
    if (year > 2000)
        car.year = year;
    return car;
}
const cars = ['Ford', 'Ferrari', 'Camry'];
console.log(cars[2]);
const ford = {
    model: 'Ford',
    year: 2020
};
console.log('Avto ford: ', ford);
//# sourceMappingURL=generic.js.map