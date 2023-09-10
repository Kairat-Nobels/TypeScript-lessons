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
// Классы