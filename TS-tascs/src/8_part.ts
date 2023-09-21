//?  TypeScript: Защита свойств и методов
// public - публичный, по умолчанию - доступен всем
// private - приватный, доступен только внутри класса
// protected - защищённый, доступен внутри класса и в его наследниках
// Задание #1
// Реализуйте класс ImageCustomFile, который расширяет(extends ) класс CustomFile дополнительными приватными полями: width, height.Также переопределите метод toString().Теперь он должен дополнительно выводить < width > x<height>.

type CustomFileOptions = {
    name: string;
    size: number;
};

type CustomFileOptions3D = CustomFileOptions & {
    width: number;
    height: number;
};

class CustomFile8 {
    private name: string;

    private size: number;

    constructor(options: CustomFileOptions) {
        this.name = options.name;
        this.size = options.size;
    }

    protected toString() {
        return `${this.name} (${this.size} bytes)`;
    }
}

class ImageCustomFile extends CustomFile8 {
    private width: number;
    private height: number;

    constructor(options: CustomFileOptions3D) {
        super({ name: options.name, size: options.size })
        this.width = options.width;
        this.height = options.height;
    }

    toString() {
        return `${super.toString()} ${this.width}x${this.height}`;
    }
}

const imageCustomFile = new ImageCustomFile({
    name: 'image.png',
    size: 100,
    width: 200,
    height: 300,
});
console.log(imageCustomFile.toString());



//? TypeScript: Свойства параметров
// Заполнение свойств из параметров конструктора частая задача в работе с классами.Поэтому в TypeScript добавили специальный синтаксис, который позволяет делать это автоматически:

// class SomeClass {
//     constructor(public one: number, private two: string) { }

//     get three(): string {
//         return `${this.one} ${this.two}`;
//     }
// }

// Задание #2
// Реализуйте класс CustomFile, в конструктор которого передается имя файла и размер в байтах.Внутри класса определите метод toString(), который должен вернуть форматированную строку в формате < file - name > (<size>bytes).Используйте свойства параметров для заполнения свойств класса.

class CustomFilePro {
    constructor(private name: string, private size: number) { }
    toString(): string {
        return `${this.name} (${this.size} bytes)`
    }
}

const filePro = new CustomFilePro('open-world.jpeg', 1000);
console.log(filePro.toString());


//? TypeScript: Наследование
// В этом уроке мы разберем наследование.Это механизм, который позволяет создавать подклассы на основе уже существующих классов.Подклассы наследуют свойства и методы родительского класса и могут расширять их.
// В TypeScript наследование реализуется с помощью ключевого слова extends:
// Задание #3
// Реализуйте класс HttpError, который должен наследоваться от встроенного класса Error и принимать первым параметром код ошибки, а вторым — message.Также реализуйте классы NotFoundError, UnauthorizedError, ForbiddenError.Каждый из них должен наследоваться от класса HttpError и иметь свойство status, которое равно коду ошибки и message — сообщение, передающееся в базовый класс.Коды ошибок: 404, 401, 403.

class HttpError extends Error {
    constructor(public status: number, message: string) {
        super(message);
    }
}

class NotFoundError extends HttpError {
    constructor(message: string) {
        super(404, message);
    }
}

class UnauthorizedError extends HttpError {
    constructor(message: string) {
        super(401, message);
    }
}

class ForbiddenError extends HttpError {
    constructor(message: string) {
        super(403, message);
    }
}


const error8 = new NotFoundError('Not Found');
console.log(error8.status);
console.log(error8.message);


//? TypeScript: Статические методы и свойства
// Иногда нам требуется задать свойство или метод, который будет общим для всех экземпляров этого класса.Например, чтобы определить, является ли объект экземпляром класса.В таком случае при объявлении метода мы можем указать ключевое слово static, и он станет доступен через имя класса:
// class CustomFile {
//     private static readonly maxCustomFileSize = 1000;

//     static isCustomFile(file: CustomFile): boolean {
//         return file instanceof CustomFile;
//     }

//     protected static isCustomFileTooBig(size: number): boolean {
//         return size > CustomFile.maxCustomFileSize;
//     }

//     constructor(private name: string, private size: number) {
//         if (CustomFile.isCustomFileTooBig(size)) {
//             throw new Error('CustomFile is too big');
//         }
//     }
// }

// CustomFile.isCustomFile(new CustomFile('open-world.jpeg', 1000)); // true
//? Статическим методам и свойствам также можно назначить модификаторы доступа public, protected и private и модификатор неизменяемости readonly.Это позволяет ограничить использование свойств и методов только текущим классом или наследниками.


// Задание #4
// Другое полезное применение статических свойств и методов — создание фабричных методов.Фабричный метод — это статический метод, который возвращает новый экземпляр класса.Реализуйте класс UserResponse с полем user: string и фабричный метод fromArray, который принимает массив и возвращает массив экземпляров класса UserResponse:

class UserResponse8 {
    constructor(public user: string) { }
    static fromArray(arr: string[]) {
        return arr.map(el => new UserResponse8(el))
    }
}

const response = UserResponse8.fromArray(['user1', 'user2', 'user3']);
console.log(response[0].user); // user1
console.log(response[0] instanceof UserResponse8);