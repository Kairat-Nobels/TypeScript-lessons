//? TypeScript: Сужение типа(Narrowing)
// Использование сужения типа
// В JavaScript часто встречается код, в котором в одних и тех же переменных могут быть значения разных типов.Они обрабатываются на основе логических проверок с помощью typeof и других подобных механизмов.

// Ниже пример реализации функции, которая конвертирует любое переданное значение в boolean:

function isPresence(value: unknown): boolean {
    if (value === null || value === undefined) {
        return false;
    }
    // пустая строка
    if (typeof value === 'string') {
        if (value === '') {
            return false;
        }
    }
    // пустой массив
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return false;
        }
    }
    // пустой объект
    if (value instanceof Object) {
        if (Object.keys(value).length === 0) {
            return false;
        }
    }

    return true;
}
isPresence(''); // false
isPresence({}); // false
isPresence([]); // false
isPresence([1, 3]); // true
isPresence(10); // true
// В данном случае оказывается, что TypeScript умеет выполнять часть условных конструкций статически, как проверку совместимости типов, без запуска кода.Затем внутри блока с условием компилятор считает, что тип значения совпадает с тем, что было в самой проверке.Этот процесс в TypeScript называется Type Narrowing — сужение типа.

// Задание #1
// Реализуйте функцию last(), которая извлекает последний элемент из переданного значения.Значением может быть строка или число.Функция возвращает значение того же типа, которое было передано в качестве параметра:

// function last(value: string | number): string | number {
//     if (typeof value === 'number') {
//         return value % 10;
//     }

//     return value[value.length - 1] ?? '';
// }
function last(a: number | string): number | string {
    if (typeof (a) === 'number') return +String(a).slice(-1)
    return String(a).slice(-1)
}
console.log(last('2345ty'));
console.log(last(2345));


//? TypeScript: Аннотации типов
// Использование аннотации типов
// В простых случаях тип массива определяется как название типа и квадратные скобки после него, например: string[], number[]
// type User = {
//     name: string
// }

// При определении констант и переменных
// const users: User[] = [];

// В определении функций
// function foo(users: User[]) {
//     // ...
// }
// Здесь мы определяем массив, элементами которого являются объекты типа User.В таком массиве можно хранить только объекты, которые соответствуют типу User.

// В случае составных типов, например, если мы хотим использовать объединение или описание объекта, добавляются круглые скобки — (Type)[]:

// const users: ({ name: string })[] = [];
// const users: (string | null)[] = [];
// const users: (User | null | { name: string })[] = [];
// Внутри круглых скобок стоит описание типа, а затем уже идет квадратные скобки.

// Также TypeScript дает еще один синтаксис, который описывается так: Array<Type>.Он универсальный — с его помощью можно описать любой массив.Описывается тип в такой записи между знаками меньше и больше:

// const users: Array<User> = [];
// const users: Array<number> = [];
// const users: Array<User> = [];
// Но обычно так не делают.Там, где можно использовать более короткий вариант, используют его.Форма Array нужна в первую очередь для дженериков, которые рассмотрим позже.


// Задание #2
// Реализуйте функцию uniq(), которая убирает дубликаты из массива.Функция принимает на вход массив чисел и строк.Результатом работы функции должен быть новый массив, в котором сохраняется только первое вхождение каждого элемента.Порядок значений результата определяется порядком их появления в массиве.

function uniq<T>(arr: T[]): T[] {
    const rez: T[] = []
    for (let el of arr) {
        if (!rez.includes(el)) rez.push(el)
    }
    return rez
}

console.log(uniq([9, 9, 3, 8, 8]));
console.log(uniq(['twinkle', 'twinkle', 'little', 'bat']));
console.log(uniq([1, 1, 3, 'oops!']));

// function uniq(coll: (number | string)[]): (number | string)[] {
//     const init: (number | string)[] = [];

//     return coll.reduce(
//         (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
//         init,
//     );
// }

//? TypeScript: Многомерные массивы
// Чтобы определить многомерные массивы, нужно использовать синтаксис Type[][].Дословно это означает, что перед нами массив, который содержит массивы со значениями типа Type.Несколько примеров:
// Тип number[][] выводится автоматически
// const items1 = [[3, 8], [10, 4, 8]];
// const items2: number[][] = []
// или так Array<number[]>
// Используя псевдоним
// type User = {
//     name: string;
// }
// или так Array<User[]>
// const users: User[][] = [
//     [{ name: 'Eva' }, { name: 'Adam' }],
// ];

// Также можно использовать синтаксис Array<Array<Type>>.В примере ниже массив, внутри которого находятся массивы, содержащие значения типа Type:

// const coll: Array<Array<string | number>> = [];
// coll.push(['hexlet', 5])

// Сами массивы при этом могут быть частью объекта.Технически это позволяет создавать бесконечную вложенность из объектов и массивов:

// type Course = {
//     name: string;
//     lessons: Lesson[];
// }

// type Lesson = {
//     name: string;
//     links: string[];
// }
// Здесь мы определяем тип Course, который содержит массив lessons.Каждый элемент этого массива — это объект типа Lesson, который содержит массив links.Каждый элемент этого массива — это строка.Такая структура данных может быть полезна, например, для хранения информации о курсах на сайте.

// Задание #3
// Реализуйте функцию getField(), которая генерирует игровое поле для крестиков ноликов.Функция принимает на вход размерность поля и возвращает массив массивов нужного размера, заполненный значениями null.

function getField(n: number): null[][] {
    const row = Array<null>(n).fill(null);
    return Array<null[]>(n).fill(row);
}
const field1 = getField(1);
console.log(field1);

const field5 = getField(5);
console.log(field5);