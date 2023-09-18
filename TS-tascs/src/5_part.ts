//? TypeScript: Массивы только для чтения
// В разработке на JavaScript, где активно применяются функции высшего порядка, такие как map, filter и reduce, массивы меняются редко.Обычно вместо этого создаются новые.
// В TypeScript работа с неизменяемыми массивами встроена в систему типов. Чтобы гарантировать неизменяемость, массив помечается модификатором readonly:

// Задание #1
// Реализуйте функцию reverse(), которая переворачивает массив.Технически она должна возвращать новый массив, в котором элементы расположены в обратном порядке.Используйте модификатор readonly для входящего массива.Не используйте встроенный метод reverse().

function reverse(numbers: readonly number[]): number[] {
    let arr: number[] = []
    for (let i of numbers) {
        arr.unshift(i)
    }
    return arr
}
console.log(reverse([1, 2, 8]));
console.log(reverse([10, 33, 7, 0]));

// код из видео
// function reverse(coll: readonly number[]): number[] {
//     return coll.map((_, index) => coll[coll.length - 1 - index]);
// }

//? TypeScript: Кортежи (Tuples)
// Обычно массивы могут менять свой размер и содержать от нуля значений.Поэтому пустой массив как значение[] является валидным для массивов любого типа.

// При этом иногда массивы выступают в качестве упрощенной версии объекта, где количество значений и их порядок строго определены.Например, с помощью такого массива можно представить точку на плоскости: [x, y].

// Такие массивы нужны для экономии символов, когда приходится создавать много одинаковых данных, например, для тестирования.

// Задание №2
// Создайте и экспортируйте тип Point, который описывает точку в пространстве, состоящую из трех координат: x, y, z.
// Реализуйте функцию isTheSamePoint(), которая проверяет две точки на их одинаковое расположение.Две точки совпадают, если совпадают все их координаты:

type Point = [number, number, number]
function isTheSamePoint(a: Point, b: Point): boolean {
    let rez = true
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) rez = false
    }
    return rez
}

const p1: Point = [1, 3, 4];
const p2: Point = [1, 3, 4];
const p3: Point = [0, 8, 4];

console.log(isTheSamePoint(p1, p2))
console.log(isTheSamePoint(p1, p3));
console.log(isTheSamePoint(p2, p3));

// function isTheSamePoint(p1: Point, p2: Point): boolean {
//     return p1.every((el, i) => el === p2[i]);
// }

//? TypeScript: Типы как множества
// Взгляд на типы как на множества играет важную роль.Это связано с тем, что система типов языка TypeScript позволяет комбинировать типы так, как это делается в обычных множествах.Например, мы можем объединить два множества типов и получить новый тип, в который входят все элементы первого множества и второго множества.Так появляется Union Type:
// type SomeType = number | string;
// const v1: SomeType = 1;
// const v2: SomeType = 'hexlet';

// Задание #3
// Определите тип CustomType, который может принимать следующие значения:

// null
// undefined
// числа
type CustomType = null | undefined | number


// Задание #4
// Реализуйте функцию lastIndex(str, char), которая возвращает индекс последнего вхождения символа в строку или null, если такого символа нет.
function lastIndex(str: string, char: string): number | null {
    let rez = str.indexOf(char)

    if (rez < 0) return null
    for (let i = 0; i < str.length; i++) {
        if (char === str[i]) rez = i
    }
    return rez
}

console.log(lastIndex('kairat', 'b'))
console.log(lastIndex('kairat', 'a'))

// function lastIndex(str: string, char: string): number | null {
//     const index = str.lastIndexOf(char);
//     return index === -1 ? null : index;
// }

//? TypeScript: Null и Undefined
// В TypeScript null и undefined не просто значения.Это два типа, которые состоят из одного значения.Представим, если бы TypeScript работал так же, как JavaScript.Тогда эти значения можно было бы передавать в любом месте.И неважно, что там ожидается: строка, массив и тому подобное.Это бы привело к двум результатам.

// Задание #5
// Реализуйте функцию formatPrice(), которая принимает число и возвращает строку с округлением до второго числа после запятой.Если пришел null или undefined должна вернуться '$0.00'.

function formatPrice(a?: number | null): string {
    if (a === null || a === undefined) return '$0.00'
    return `$${a.toFixed(2)}`
}

console.log(formatPrice(3.145)) // '$3.15'
console.log(formatPrice(200)); // '$200.00'
console.log(formatPrice()); // '$0.00'
console.log(formatPrice(null))



// Задание #6
// Реализуйте функцию makeTurn(), которая принимает строку left или right и перемещает черепашку вперед - назад по одномерной карте длиной пять.Если ход невозможен, должно выброситься исключение.

type Turtle = 'turtle' | null;

type Game = {
    makeTurn: (direction: 'left' | 'right') => void;
    state: Array<Turtle>;
};

const startGame = (): Game => {
    const state: Array<Turtle> = ['turtle', null, null, null, null];

    // BEGIN (write your solution here)
    function makeTurn(d: 'left' | 'right') {
        // Найдем индекс черепахи в массиве состояния
        const turtleIndex = state.indexOf('turtle');

        if (turtleIndex !== -1) {
            // Если черепаха найдена
            if ((turtleIndex !== 0 && d === 'left') || (turtleIndex !== 4 && d === 'right')) {
                // Выполняем ход в соответствии с направлением
                const newTurtleIndex = d === 'left' ? turtleIndex - 1 : turtleIndex + 1;
                state[newTurtleIndex] = 'turtle';
                state[turtleIndex] = null;
            } else {
                // Если попытка сделать невозможный ход, выбрасываем ошибку
                throw new Error('Невозможный ход');
            }
        } else {
            // Если черепаха не найдена, выбрасываем ошибку
            throw new Error('Черепаха не найдена');
        }
    }
    // END

    return { makeTurn, state };
};

const { makeTurn, state } = startGame();
console.log(state); // ['turtle', null, null, null, null]

// makeTurn('left') // ERROR

makeTurn('right');
makeTurn('right');
console.log(state)
