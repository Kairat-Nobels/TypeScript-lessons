"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const asyncMap = (arr, fn) => __awaiter(void 0, void 0, void 0, function* () {
    const promises = arr.map((item, index) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield item;
        return fn(result, index);
    }));
    return Promise.all(promises);
});
const promisedNumbers = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
asyncMap(promisedNumbers, (num, index) => num * index).then((result) => {
    console.log(result);
});
class Triple {
    constructor(first, second, third) {
        this.first = first;
        this.second = second;
        this.third = third;
    }
    getFirst() {
        return this.first;
    }
    getSecond() {
        return this.second;
    }
    getThird() {
        return this.third;
    }
}
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(el) {
        this.items.push(el);
    }
    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift();
        }
        else
            throw new Error('Queue is empty');
    }
}
const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.dequeue());
function extract(obj, keys) {
    const rez = Object.entries(obj).filter(([el]) => keys.includes(el));
    return Object.fromEntries(rez);
}
const user11 = {
    name: 'Tirion',
    email: 'tirion@lanister.got',
    age: 35,
};
console.log(extract(user11, ['name', 'age']));
function buildSalaryStatistics(employees) {
    let rez = {
        max: 0,
        min: 0,
        avg: 0
    };
    const values = Object.values(employees);
    rez.max = Math.max(...values);
    rez.min = Math.min(...values);
    rez.avg = (values.reduce((sum, values) => sum + values, 0)) / values.length;
    return rez;
}
const employees = {
    mango: 100,
    poly: 50,
    ajax: 150,
};
employees.ironMan = 1000;
console.log(buildSalaryStatistics(employees));
//# sourceMappingURL=11_part.js.map