//? TypeScript: Структурная типизация
// В структурной типизации об объектном типе можно думать, как об описании структуры, которое накладывает ограничения на присваиваемые значения.Или как о множестве объектов, которые могут быть присвоены переменной с таким типом.

// Задание #1
// Опишите тип состояния DataState и перечисление LoadingStatus.Затем реализуйте функцию handleData(), которая принимает на вход DataState и возвращает строку в зависимости от состояния: loading... при LoadingStatus.loading, error при LoadingStatus.error, строку из числового поля data при LoadingStatus.success.Если статус не входит в перечисление, функция возвращает unknown.

enum LoadingStatus {
    Loading = 'Loading',
    Success = 'Success',
    Error = 'Error'
}
type DataState =
    | { status: LoadingStatus.Loading }
    | { status: LoadingStatus.Success; data: number }
    | { status: LoadingStatus.Error; error: Error };

function handleData(dataState: DataState): string {
    if (dataState.status === LoadingStatus.Loading) return 'loading...'
    else if (dataState.status === LoadingStatus.Error) return dataState.error.message
    else if (dataState.status === LoadingStatus.Success) return String(dataState.data)
    else return 'unknown'
}

const loading: DataState = { status: LoadingStatus.Loading };
console.log(handleData(loading)); // loading...

const error: DataState = { status: LoadingStatus.Error, error: new Error('error') };
console.log(handleData(error)); // error

const success: DataState = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success)); // 42


//? TypeScript: Ковариантность и контравариантность
// Когда мы присваиваем значение или передаем аргументы в вызов функции, проверка типов TypeScript проверяет типы на совместимость.При передаче аргументов в функцию проверка выполняется и для типов параметров, и для возвращаемых типов.
// Множество значений из объединения трех литеральных типов - 1 | 0 | 1 является подмножеством number.Но из ошибки можно понять, что возвращаемый тип должен быть либо таким же, либо более узким.Такое поведение проверки типов называется ковариантностью.

// Задание #2
// Реализуйте функцию applyTransactions и типы Transaction, Wallet.applyTransactions должна принимать аргумент типа Wallet и возвращать число после применения всех транзакций к количеству денег на счету.В случае ошибки в одной из транзакций должно вернуться изначальное число, последующие транзакции не обрабатываются.

type Transaction = {
    apply: (amount: number) => number
}
type Wallet = {
    transactions: Transaction[],
    balance: number
}

function applyTransactions(wallet: Wallet): number {
    try {
        let { balance } = wallet
        wallet.transactions.forEach((tr) => {
            balance = tr.apply(balance)
        })
        return balance
    }
    catch (e) {
        return wallet.balance
    }
}

const wallet: Wallet = {
    transactions: [
        {
            apply: (amount) => amount * 4,
        },
    ],
    balance: 80
}

console.log(applyTransactions(wallet))


//? TypeScript: Классы
// Задание #3
// Реализуйте класс CustomFile, в конструктор которого передается объект с полями: name — именем файла, и size — размером в байтах.Внутри класса определите метод toString(), который должен вернуть форматированную строку в формате < file - name > (<size>bytes).

type InputData = {
    name: string,
    size: number
}
class CustomFile {
    name: string;
    size: number;
    private isCopy: boolean;
    constructor(obj: InputData) {
        this.name = obj.name
        this.size = obj.size
        this.isCopy = obj instanceof CustomFile

    }
    toString(): string {
        return `${this.isCopy ? '(copy) ' : ""}${this.name} (${this.size} bytes)`
    }

}
const file = new CustomFile({ name: 'open-world.jpeg', size: 1000 });
console.log(file.toString());

const file2 = new CustomFile(file);
console.log(file2.toString());

const file3 = new CustomFile(file2);
console.log(file2.toString());