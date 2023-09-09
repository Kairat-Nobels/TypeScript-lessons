// базовые типы
const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello Typescript!'

const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// дженерик тип
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 6, 7]

const words: string[] = ['Hello', 'World', 'TypeScript']
// Tuple
const contact: [string, number] = ['Kairat', 502551118]

// Any
let variable: any = 42
variable = 'New Sring'
variable = []
// : void озанчает что функция нам ничего не вернёт
function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Кайрат лох')

// Never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) { }
}

// Type
type Login = string
const login: Login = 'admin';
// const login2: Login = 123

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true

// null
type SomeType = string | null | undefined
