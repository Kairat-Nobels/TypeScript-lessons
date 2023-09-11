class Person {
    constructor(name: string) { }
}

const max = new Person('Maxim')
// Demo comment
// const btn = document.querySelector('#btn1')!
// btn.addEventListener('click', () => {
//     console.log('Btn clicked!');
// })

// =============

let anyFlag
function logInfo(data: string, _?: number) {
    // const message = 'Kairat you can do it'
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
}

logInfo("You are my fire")
function multiple(a: number, b: number) {
    if (a && b) return a * b
    return
}