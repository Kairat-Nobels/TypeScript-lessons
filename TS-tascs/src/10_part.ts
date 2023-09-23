//? TypeScript: Реализация интерфейсов классами
// В TypeScript классы могут тесно взаимодействовать с интерфейсами.В прошлом уроке мы увидели, как интерфейсы могут расширять другие интерфейсы и комбинировать их.Аналогичным образом интерфейсы могут быть расширены классами
// Задание #1
// С помощью предоставленного интерфейса IPhonebook и типа Entry реализуйте класс Phonebook, который представляет телефонный справочник со следующими свойствами:

// entries — база данных, объект, записи в котором представляют собой имена в качестве ключей и телефоны в качестве значений.Свойство должно быть неизменяемым и доступным только для чтения
// get — метод, возвращающий телефон по имени
// set — метод, записывающий имя и телефон в справочник

type Entry = {
    [key: string]: number
};

interface IPhonebook {
    get(key: string): number | null
    set(key: string, value: number): void
}

// BEGIN (write your solution here)
class Phonebook implements IPhonebook {
    private readonly entries: Entry = {};

    get(key: string): number | null {
        return key in this.entries ? this.entries[key] : null;
    }

    set(key: string, value: number): void {
        this.entries[key] = value;
    }
}

const myNote = new Phonebook();
myNote.set('help', 911);
console.log(myNote.get('help'));


//? TypeScript: Введение в дженерики
//? Дженерики в применении к функциям — это механизм, позволяющий создать такие функции, которые имеют одинаковую логику обработки для разных типов данных.Иногда такие функции называют обобщенными функциями.
// Задание №2
// Реализуйте дженерик last(), который извлекает последний элемент из массива если он есть или null — если его нет:

function last10<T>(arr: T[]): T | null {
    return arr.length > 0 ? arr[arr.length - 1] : null
}

console.log(last10([]));
console.log(last10([3, 2]));
console.log(last10(['code-basics', 'hexlet']));


//? TypeScript: Дженерики(Типы)
// type MyColl = {
//     data: Array<number>;
//     forEach(callback: (value: number, index: number, array: Array<number>) => void): void;
//     at(index: number): number | undefined;
// }

// Ограничения дженериков
// Дженерики могут иметь ограничения.Например, мы можем сказать, что тип, который передается в дженерик, должен реализовывать какой - то интерфейс.Для этого используется ключевое слово extends.Допустим, мы можем сделать так, чтобы наш тип MyColl работал только с типами, которые реализуют интерфейс HasId:

// Задание #3
// Реализуйте описание обобщенного типа MySet, который представляет из себя аналог множества Set из JavaScript.Пример использования объекта этого типа:

type MySet<T> = {
    data: Array<T>;
    add(n: T): number;
    has(i: T): boolean;
}

const collMySet: MySet<number> = {
    data: [1, 2, 3, 4],
    add(n: number) {
        this.data.push(n);
        return this.data.length
    },
    has(i: number) {
        return Boolean(this.data.find(el => el === i))
    }
}

console.log(collMySet.add(21));
console.log(collMySet.add(29));
console.log(collMySet.has(21));
console.log(collMySet.has(10));


//? TypeScript: Дженерики(Функции)
// Задание #4
// Реализуйте описание обощенного типа MyArray, который представляет аналог массива из JavaScript.Пример использования объекта этого типа:

type MyArray<T> = {
    items: T[];
    push(n: T): number;
    filter(callback: (item: T, index: number, array: T[]) => boolean): T[]
}

const coll: MyArray<number> = {
    items: [1, 2, 3],
    push(n: number) {
        this.items = [...this.items, n]
        return this.items.length
    },
    filter(callback) {
        const newItems = this.items.filter(callback);
        return newItems;
    }
}

console.log(coll.push(21));
console.log(coll.push(99));
console.log(coll.push(10));

const newColl = coll.filter((value) => value % 2 == 0);
console.log(newColl);



//? TypeScript: Дженерики с несколькими параметрами
// Дженерики, как и обычные функции, могут иметь несколько параметров типа.В этом уроке мы разберем такие дженерики.   Принцип работы дженериков от количества параметров не меняется.Единственное, за чем нужно следить, это имена:
// type Double<T, U> = {
//     first: T;
//     second: U;
// }

// const value: Double<string, number> = {
//     first: 'code-basics',
//     second: 1,
// }

// Например, функция join() может быть описана следующим образом:
function join<T, U>(coll1: T[], coll2: U[]): (T | U)[] {
    return ([] as (T | U)[]).concat(coll1, coll2);
}
console.log(join<number, string>([1, 2], ['one', 'two']));

// TypeScript сам выведет типы для параметров функции.Это называется выводом типа из аргументов функции.В данном случае TypeScript выведет типы number и string для параметров T и U соответственно.

// Задание #5
// Реализуйте описание обобщенного типа MyMap, который представляет из себя аналог массива из JavaScript.Пример использования объекта этого типа:

type MyMap<K, V> = {
    values: Map<K, V>;
    set(key: K, value: V): void;
    get(key: K): V | undefined;
}

const map10: MyMap<string, number> = {
    values: new Map(),
    set(key, value) {
        this.values.set(key, value);
    },
    get(key) {
        return this.values.get(key);
    },
};

map10.set('one', 1234);
map10.set('two', 4321);

console.log(map10.get('one'));
console.log(map10.get('two'));
