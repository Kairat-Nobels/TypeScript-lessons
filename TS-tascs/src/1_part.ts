console.log('Hello, World!')

// Задание #2
// По образцу примера с суммой из урока напишите функцию, которая находит произведение переданных чисел
function multiply(a: number, b: number) {
    return a * b;
}
console.log(multiply(3, 8))
console.log(multiply(1, 2))

// Задание #3
// Допишите тело функции repeat(), которая повторяет строку указанное количество раз.Функция должна возвращать полученный результат.Постарайтесь не использовать встроенные методы, для такой реализации вам понадобится цикл.


function repeat(text: string, count: number) {
    let rez: string = ''
    for (let i = 0; i < count; i++) rez += text
    return rez
}

console.log(repeat('hexlet', 2))
console.log(repeat('wo', 3))


// Задание #4
// Реализуйте функцию getHiddenCard().Она принимает на вход номер кредитки, который состоит из 16 цифр, в виде строки и возвращает его скрытую версию.Эта версия может использоваться на сайте для отображения.Например, если номер исходной карты был 2034399002125581, то скрытая версия выглядит так: **** 5581.

// Получается, функция заменяет первые 12 символов на звездочки.Количество звездочек регулируется вторым необязательным параметром.Значение по умолчанию — 4

function getHiddenCard(num: string, count?: number): string {
    let rez = num.slice(-4)
    let s = '*'.repeat((count && count > 0) ? count : 4)
    return s + rez
}

console.log(getHiddenCard('1234567812345678', 2)) // "**5678"
console.log(getHiddenCard('1234567812345678', 3))// "***5678"
console.log(getHiddenCard('1234567812345678'))    // "****5678"
console.log(getHiddenCard('2034399002121100', 1))

// Задание #5
// Напишите функцию, которая возвращает массив четных чисел из массива numbers.

const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

const getEvenNumbers = () => numbers.filter(el => el % 2 === 0)
console.log(getEvenNumbers());

// Задание #6
// Анаграммы — это слова, которые состоят из одинаковых букв.Например:

// Реализуйте функцию filterAnagrams(), которая находит все анаграммы слова.Функция принимает исходное слово и список для проверки — массив.А возвращает функция массив всех анаграмм.Если в списке нет анаграммы, то возвращается пустой массив:

function filterAnagrams(str: string, arr: string[]): string[] {
    return arr.filter(el => el.split('').sort().join('') === str.split('').sort().join(''))
}

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
console.log(filterAnagrams('laser', ['lazing', 'lazy', 'lacer']))

// Задание #7 
// Реализуйте функцию isComplete(), которая принимает на вход курс и определяет, завершен ли он.Завершенным считается курс, в который добавлено четыре или более уроков:
function isComplete(course: { name?: string, lessons: string[] }): boolean {
    return course.lessons.length >= 4
}

const course1 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions'],
}
console.log(isComplete(course1))

const course2 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions', 'loops'],
}
console.log(isComplete(course2))

