"use strict";
var ModalStatus;
(function (ModalStatus) {
    ModalStatus[ModalStatus["Opened"] = 0] = "Opened";
    ModalStatus[ModalStatus["Closed"] = 1] = "Closed";
})(ModalStatus || (ModalStatus = {}));
function buildModal(text, status) {
    return { text, status };
}
const modal = buildModal('hexlet forever', ModalStatus.Opened);
const modal2 = buildModal('hexlet forever', ModalStatus.Closed);
console.log('Modal1: ', modal, '\nModal2: ', modal2);
function getOlderUser(u1, u2) {
    return u1.age === u2.age ? null : u1.age > u2.age ? u1 : u2;
}
const user1 = {
    name: 'sem',
    age: 3,
};
const user2 = {
    name: 'inna',
    age: 5,
};
const user3 = {
    name: 'mika',
    age: 5,
};
console.log(getOlderUser(user1, user2));
console.log(getOlderUser(user2, user1));
console.log(getOlderUser(user2, user3));
const sentence = 'table cat table dog dog apple table';
const words = sentence.split(' ');
const initial = {};
const result = words.reduce((acc, word) => {
    acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
    return acc;
}, initial);
console.log(result);
function getParams(query) {
    const arr = query.split('&');
    const rez = {};
    arr.forEach(el => rez[el.split('=')[0]] = el.split('=')[1]);
    return rez;
}
console.log(getParams('name=hexlet&count=3&order=asc'));
var Company;
(function (Company) {
    function isEmployeeEmail(email, domen) {
        return email.split('@')[1] === domen;
    }
    Company.isEmployeeEmail = isEmployeeEmail;
})(Company || (Company = {}));
console.log(Company.isEmployeeEmail('tirion@hexlet.io', 'hexlet.io'));
console.log(Company.isEmployeeEmail('user@example.com', 'hexlet.io'));
function filter(arr, callback) {
    return arr.filter(callback);
}
const numbers5 = [1, -5, 2, 3, 4, 133];
console.log(filter(numbers5, (n) => n > 3));
console.log(filter(numbers5, (n) => n % 2 == 0));
function map(arr, callbak) {
    const rez = [];
    arr.forEach((n, index) => rez.push(callbak(n, index)));
    return rez;
}
console.log(map([3, 9], (n) => n - 3));
console.log(map([8, 9], (n) => n + 8));
//# sourceMappingURL=2_part.js.map