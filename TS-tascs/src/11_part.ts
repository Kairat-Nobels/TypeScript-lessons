//? TypeScript: Асинхронные функции
// Promise стали самым популярным способом работы с асинхронным кодом в JavaScript.Они позволяют избежать callback hell, а также упрощают работу с асинхронными функциями.TypeScript также поддерживает привычный синтаксис для работы с Promise в виде async / await и типизацию.

// const promise = new Promise<number>((resolve, reject) => {
//     setTimeout(() => {
//         resolve(42);
//     }, 1000);
// });
// Задание #1
// Реализуйте асинхронный вариант функции map() - asyncMap().Первым аргументом asyncMap() принимает массив с Promise.Вторым — функцию, которая применяется к каждому элементу.Функция должна вернуть массив с результатами выполнения функции для каждого элемента:

const asyncMap = async <T, P>(arr: Promise<T>[], fn: (item: T, index: number) => P) => {
    const promises = arr.map(async (item, index) => {
        const result = await item;
        return fn(result, index);
    });

    return Promise.all(promises);
};

const promisedNumbers = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

asyncMap(promisedNumbers, (num, index) => num * index).then((result) => {
    console.log(result); // [0, 2, 6]
});


//? TypeScript: Дженерики на классах
// Дженерик - классы, как и дженерик функции, позволяют создавать классы, которые могут работать с разными типами данных.Например, класс Triple может хранить три значения любого типа.В этом случае вместо того, чтобы создавать классы для каждого типа, можно создать обобщенный класс, который будет работать с любым типом данных.

class Triple<T, U, V> {
    constructor(protected first: T, protected second: U, protected third: V) { }

    getFirst(): T {
        return this.first;
    }

    getSecond(): U {
        return this.second;
    }

    getThird(): V {
        return this.third;
    }
}

// Задание #2
// Реализуйте класс очереди(Queue) с методами enqueue и dequeue.Метод enqueue добавляет элемент в конец очереди, а метод dequeue удаляет элемент из начала очереди.Если очередь пуста, то при вызове метода dequeue должно быть выброшено исключение Error:

class Queue<T>{
    private items: T[] = []
    enqueue(el: T) {
        this.items.push(el)
    }
    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift()
        }
        else throw new Error('Queue is empty')
    }
}

const queue = new Queue<number>();
console.log(queue.enqueue(1));
console.log(queue.dequeue());
// console.log(queue.dequeue());


//? TypeScript: Тип object
// Иногда нам нужно ограничить входной параметр функции типом «любой объект».Например, это нужно для функции, которая проверяет наличие ключей в объекте.Существует несколько способов сделать такую проверку, но не все из них работают как ожидается.

// Задание #3
// Реализуйте функцию extract(object, keys), которая возвращает новый объект c указанными ключами.Например

// function extract(obj: { [key: string]: any }, keys: string[]) {
//     const rez: { [key: string]: any } = {}; // Явно указываем тип для rez
//     for (let key in obj) {
//         if (keys.includes(key)) rez[key] = obj[key];
//     }

//     return rez;
// }


function extract(obj: object, keys: string[]) {
    const rez = Object.entries(obj).filter(([el]) => keys.includes(el))
    return Object.fromEntries(rez)
}
const user11 = {
    name: 'Tirion',
    email: 'tirion@lanister.got',
    age: 35,
}

console.log(extract(user11, ['name', 'age']));


//? TypeScript: Динамические ключи(Index Signature)
// В JavaScript как ключи в объектах мы можем использовать строки, числа и символы.Такие же ограничения TypeScript накладывает на свои объектные типы.И нам предстоит научиться с ними работать.
// В ходе курса мы уже работали с объектными типами и с интерфейсами, в которых имена полей заданы заранее.Теперь познакомимся с синтаксисом для динамических ключей:
//? Template String Literal
// Динамические ключи полезны там, где нам неизвестны все возможные имена полей объекта, но мы все равно хотим ограничить их тип.В TypeScript тип ключа может также быть и шаблонным литералом.Например, если мы хотим объявить тип слушателя и потребовать, чтобы все его методы начинались со слова on:
// type Listeners = {
//     [key: `on${string}`]: (value: unknown) => void
// }

// const streamListeners: Listeners = {
//     onStart() { }
//   onFinished() { }
// }
// Литеральный тип on${ string } нам говорит, что мы ожидаем строку по шаблону «начинается с on и дальше любая строка». Такая техника называется Template String Literal и используется, чтобы наложить ограничения при типизации строк.

// Задание #4
// Реализуйте интерфейс EmployeeSalary, где ключом выступает имя(string), а значением — зарплата(number).Также реализуйте функцию buildSalaryStatistics(employees: EmployeeSalary): SalaryStatistics, которая должна возвращать минимальную(поле min), среднюю(поле avg) и самую высокую(поле max) зарплату.

interface SalaryStatistics {
    min: number;
    max: number;
    avg: number;
}

interface EmployeeSalary {
    [key: string]: number;
}

function buildSalaryStatistics(employees: EmployeeSalary): SalaryStatistics {
    let rez: SalaryStatistics = {
        max: 0,
        min: 0,
        avg: 0
    }
    const values: number[] = Object.values(employees)
    rez.max = Math.max(...values)
    rez.min = Math.min(...values)
    console.log(values.reduce((sum, values) => sum + values));
    rez.avg = (values.reduce((sum, values) => sum + values, 0)) / values.length;
    return rez
}

const employees: EmployeeSalary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

employees.ironMan = 1000;

console.log(buildSalaryStatistics(employees));
