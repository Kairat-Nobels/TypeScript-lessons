// TypeScript: Тип Void
// Использование типа Void void автоматически выводится, когда внутри функции нет инструкции return или она пустая:
// В JavaScript подобные функции возвращают undefined, но в TypeScript void и undefined — это разные вещи.Они различаются по контекстной типизации.А происходит это из - за особенностей работы самого JavaScript.Самый яркий пример — метод forEach().
// В этом уроке мы рассмотрим тип void.Он указывается как возврат для функций, которые ничего не возвращают.

// Задание #1
// Попробуйте самостоятельно определить функцию forEach() для чисел:
function forEach(arr: number[], callback: (n: number, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}
forEach([8, 9, 11], (n, ind) => console.log(n, ind, (ind ? ind : 0) + n));


// Использование типа never
// Тип never используется, когда функция гарантированно ничего не возвращает.Например, если внутри функции есть бесконечный цикл:
// невер для того когда функция завершает программу, Еще тип never используется, если функция выбрасывает исключение:

// Задание №2
// Реализуйте функцию fail(), которая выбрасывает любое исключение.Пропишете ее возвращаемый тип явно.
function fail(isk: any): never {
    throw isk
}

// пример как надо в идеале
// function fail(): never {
//     throw new Error('wow');
// }

//? TypeScript: Тип unknown
// Использование типа unknown -
// Использование типа any в TypeScript отключает проверки типов, что не желательно.Также в наиболее строгом режиме с помощью "strict": true в tsconfig.json использование any невозможно.А это значительно повышает безопасность кода.
// При этом бывают ситуации, когда тип неизвестен, но работа с ним должна быть безопасна с точки зрения типов.Для этого в TypeScript существует дополнение к any — unknown
//? Главное отличие unknown от any связано с проверкой типов. unknown запрещает выполнять любые операции:
// let value: unknown = 'code-basics';

// value.toUpperCase(); // Error!
// value.trim()

// Задание №3
// Реализуйте функцию isPlainObject(), которая проверяет, является ли переданное значение объектом.Эта функция считает, что массив не объект:

function isPlainObject(value: unknown): boolean {
    return value instanceof Object && !Array.isArray(value)
}

console.log(isPlainObject(1))
console.log(isPlainObject('hexlet'))
console.log(isPlainObject({}))
console.log(isPlainObject([1, 8]));
console.log(isPlainObject({ name: 'code-basics' }));


// TypeScript: Деструктуризация
// Деструктуризация — это механизм, с помощью которого переданный как аргумент объект распаковывается, а его части присваиваются локальным переменным функции

// Деструктурированный объект визуально похож на параметры функции.При этом он все равно остается объектом, поэтому в TypeScript его тип описывается после закрывающей фигурной скобки:
// Обычное определение
// function f(user: { firstName: string, age: number }) {
//     console.log(user.firstName, user.age);
// }

// Деструктурированный объект
// function f({ firstName, age }: { firstName: string, age: number }) {
//     console.log(firstName, age);
// }

// Задание №4
// Реализуйте функцию lessonsCount(), которая принимает на вход курс и возвращает количество лекций внутри него:
const lessonsCount = function ({ lessons }: { lessons: string[] }): number {
    return lessons.length
}
const course = { lessons: ['intro', 'lala'] };
console.log(lessonsCount(course));

//? TypeScript: Rest и Spread
// Rest - оператор позволяет создавать функции с переменным числом параметров, при этом сворачивать их в массив:
// function max(...numbers: number[]): number {
//     return Math.max(...numbers);
// }

//? В этом смысле rest - оператор в TypeScript ничем не отличается от rest - оператора в JavaScript.А вот со spread - оператором есть одна особенность.
// Spread - оператор в функциях — это как rest - оператор наоборот.Он позволяет раскладывать массив на отдельные параметры:
// const numbers = [1, 2, 3];
// Math.max(...numbers);
// Если функция принимает на вход любое количество аргументов, как в примере выше, то такой код работает без проблем.Но если функция принимает на вход определенное число аргументов, то TypeScript выдаст ошибку компиляции

// Задание №5
// Определите функцию max(), которая отличается от примера из урока только тем, что у нее первый параметр обязательный.

function max(first: number, ...numbers: number[]): number {
    return Math.max(first, ...numbers)
}
console.log(max(1, 2, 3))
console.log(max(234));

//? TypeScript: Перегрузка функций (Function Overloads)
//? Перегрузка функций — это возможность определить несколько версий одной функции, каждая из которых принимает свой набор параметров.