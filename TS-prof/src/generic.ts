// Дженерики
// const cars: string[] = ['Ford', 'Audi']
// const cars2: Array<string> = ["Mercedes", "Bentley", "Bugaty", "BMW"]

// const promise = new Promise<string>(resolve => {
//     setTimeout(() => {
//         resolve('Promise resolved')
//     }, 2000)
// })

// promise.then(data => {
//     console.log(data.trim().toUpperCase());
// })

// ================
// применение дженериков
function mergeObject<T1 extends object, T2 extends object>(a: T1, b: T2): T1 & T2 {
    return Object.assign({}, a, b);
}

const merged = mergeObject({ name: 'Kairat' }, { age: 20 })
const merged2 = mergeObject({ boy: 'Kairat' }, { girl: "Munisa" })

console.log(merged.name + " and " + merged.age);
console.log(merged2.boy + " love " + merged2.girl);

// проблемы с дженериками
// const merged3 = mergeObject({ a: 17 }, 'friend')
// console.log(merged3);

// ===================
// где дженерики нужны

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): { value: T, count: string } {
    return {
        value,
        count: `In this object ${value.length} simvols`
    }
}

console.log(withCount('Latly Ive been, Ive been loosing sleep'));
console.log(withCount([1, 2, 3, 78, "Kairat"]))
console.log(withCount({ length: 20 }))

// =============================
// Утилита с дженериком

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: "Ronaldo",
    goals: 890,
    job: "football"
}
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'goals'));
console.log(getObjectValue(person, 'job'));

// ==================
// Классы и дженерики

class Collection<T extends number | string | boolean>{
    constructor(private _items: T[] = []) { }

    add(item: T) {
        this._items.push(item);
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items() {
        return this._items
    }
}

// необязательно здесь указывать дженерик тип при создании коллекции
const strings = new Collection<string>(['Lets', 'get', 'started', 'the best', 'work']);

strings.add('Kairat')
strings.remove('work')
console.log(strings.items);

const numbers = new Collection<number>([1, 2, 3, 4, 5]);

numbers.add(10)
numbers.remove(3)
console.log(numbers.items);

// Проблема класса коллекций - он не может работать с объектами корректно
// для решения этой ошибки, указываем что наша коллекция работает исключительно с примитивными типами данных

// const objs = new Collection<object>([{ a: 23 }, { b: 43 }])
// objs.remove({ b: 43 })
// console.log(objs.items);

// =================================
interface Car {
    model: string
    year: number
}

function createCar(model: string, year: number): Car {
    // используем специальную утилиту Partial чтобы избавиться от ошибки
    const car: Partial<Car> = {}

    if (model.length > 3) car.model = model
    if (year > 2000) car.year = year

    return car as Car
}

// ===============================
// если сделать Readonly - то мы не можем изменять массив
const cars: Readonly<Array<string>> = ['Ford', 'Ferrari', 'Camry']
// cars.shift()
console.log(cars[2]);

// Делаем только для чтения
const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020
}

// ford.model = 'Ferrari'
console.log('Avto ford: ', ford);

