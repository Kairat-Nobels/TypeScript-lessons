// задачи с типами
// Задание №1
// Реализуйте перечисление ModalStatus с двумя значениями: Opened и Closed
// Реализуйте функцию buildModal().Он возвращает объект, который описывает модальное окно.Параметры функции:
// Текст, который должен быть внутри окна после инициализации
// Статус, с которым надо создать объект окна
// Функция возвращает объект с двумя полями: text(здесь хранится переданный текст) и status(здесь хранится переданный статус)

//?  enum - Это перечисление которое используется вместо строк для постоянных значений, Перечисление — это и значение, и тип. Его можно указывать как тип в параметрах функции
//? Самый распространенный пример использования перечислений — хранение разных статусов. Но есть и другие случаи. Например, с их помощью хранят различные справочные данные и избавляются от магических значений:
// Направления движения
// Стороны света
// Дни недели
// Месяцы

enum ModalStatus {
    Opened,
    Closed
}
function buildModal(text: string, status: ModalStatus): { text: string, status: ModalStatus } {
    return { text, status }
}

const modal = buildModal('hexlet forever', ModalStatus.Opened);
const modal2 = buildModal('hexlet forever', ModalStatus.Closed);
console.log('Modal1: ', modal, '\nModal2: ', modal2);

//? type - Псевдоним — это не создание нового типа данных. Это способ сокращенно записать определение типа. Поэтому следующие примеры будут работать без проблем:
//? Типы можно задавать для любых типов данных, например, для простых: type SomeType = string;

// А также для составных:
// union тип из трех возможных значений
//? type SomeType = string | number | null;
// Функция
//? type Countable = (coll: number[]) => number

//? Описание типа функции вне объекта и внутри отличается.Когда функция записывается самостоятельно, используется формат стрелочной функции:
//? type Countable = (coll: number[]) => number

// Внутри типа, который описывает объект, формат меняется на используемый для обычных свойств:

// type User = {
//     firstName: string;
//     pointsCount: number;
//     count(coll: number[]): number;
// }
// Но это не касается колбеков, которые могут быть использованы внутри:

// type User = {
//     firstName: string;
//     pointsCount: number;
// Типы взяты для примера
//     count(coll: (v: string) => string): number;
// }
// В этом уроке мы научились использовать псевдонимы типов.Также мы узнали, как задавать псевдоним для составных типов.

// Задание №2
// Реализуйте функцию getOlderUser(), которая принимает на вход двух пользователей и возвращает того, который старше.Если пользователи являются ровесниками, то возвращается null:

type User = {
    name: string,
    age: number
}
function getOlderUser(u1: User, u2: User): User | null {
    return u1.age === u2.age ? null : u1.age > u2.age ? u1 : u2
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

// тип any в typescript
const sentence = 'table cat table dog dog apple table';
const words = sentence.split(' ');
const initial: any = {}; // Указали тип как any
const result = words.reduce((acc, word) => {
    acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
    return acc;
}, initial);
console.log(result);

// Задание №3
// Реализуйте функцию getParams(), которая принимает на вход строку запроса(query string) и возвращает параметры в виде объекта:

function getParams(query: string): any {
    const arr = query.split('&')
    const rez: any = {};
    arr.forEach(el => rez[el.split('=')[0]] = el.split('=')[1]);
    return rez;
}
console.log(getParams('name=hexlet&count=3&order=asc'));

// with reduce
// function getParams(query: string) {
//     const parts = query.split('&');
//     const init: any = {};
//     const result = parts.reduce((acc, part) => {
//         const [key, value] = part.split('=');
//         acc[key] = value;
//         return acc;
//     }, init);

//     return result;
// }