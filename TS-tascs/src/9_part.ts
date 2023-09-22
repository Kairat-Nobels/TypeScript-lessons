//? TypeScript: Абстрактные классы
// Когда нам нужно определить общее поведение для нескольких классов, удобно использовать абстрактные классы, которые мы разберем в этом уроке.

// Абстрактные классы хоть и не могут быть созданы напрямую, однако они могут быть наследованы.Еще они могут указать явно, какой метод должен быть реализован в наследниках

// Задание #1
// Создайте абстрактный класс Clock, который будет содержать общую логику для классов часов с разными форматами вывода времени: 12 - часовой и 24 - часовой.

// В общей логике должно быть хранение данных: часы hours, минуты minutes и секунды seconds.Так же в общую логику входит метод tick(), который при каждом вызове увеличивает секунду на единицу.Если секунда увеличивается до значения 60, то увеличивается минута на 1, а секунда сбрасывается до 0. То же самое с минутами и часами: если значение минут увеличивается до 60, то увеличивается значение текущего часа, а минуты сбрасываются до 0. Если значение часа увеличивается до 24, то происходит сброс этого значения до 0.

// Начальное значение времени задается при создании объекта.Первым параметром в конструктор передается текущий час, вторым минуты, третьим секунды.

// Абстрактный класс Clock должен требовать от своих наследников реализацию метода render().

abstract class Clock {
    constructor(protected hours: number, protected minutes: number, protected seconds: number) { }

    tick(): void {
        this.seconds++
        if (this.seconds > 59) {
            this.seconds = 0
            this.minutes++
        }
        if (this.minutes > 59) {
            this.minutes = 0
            this.hours++
        }
        if (this.hours > 23) {
            this.hours = 0
        }
    }

    abstract render(): string
}

class Clock24 extends Clock {
    render(): string {
        const currentHour = this.hours % 24;
        const hours = currentHour.toString().padStart(2, '0');
        const minutes = this.minutes.toString().padStart(2, '0');

        return `${hours} : ${minutes}`;
    }
}

const clock24 = new Clock24(23, 59, 59);
console.log(clock24.render()); // => '23 : 59'
clock24.tick();
console.log(clock24.render()); // => '00 : 00'

// 12-часовой формат
class Clock12 extends Clock {
    render(): string {
        const timeType = this.hours >= 12 ? 'PM' : 'AM';
        const currentHour = this.hours % 12;

        const hours = currentHour.toString().padStart(2, '0');
        const minutes = this.minutes.toString().padStart(2, '0');
        return `${hours} : ${minutes} ${timeType}`;
    }
}

const clock12 = new Clock12(23, 59, 59);
console.log(clock12.render()); // => '11 : 59 PM'
clock12.tick();
console.log(clock12.render()); // => '00 : 00 AM'


//? TypeScript: Об интерфейсах
// В этом уроке мы поговорим об интерфейсе.Это конструкция языка TypeScript, которая используется, чтобы описывать объекты и функции.

// Задание #2
// Вам дан интерфейс IVehicle.Задача состоит в том, чтобы на основе этого интерфейса реализовать класс Car, который будет иметь метод calcFuelNeeded, принимающий расстояние в километрах и возвращающий расход топлива на указанную дистанцию.Также у класса Car должна быть функция - конструктор, которая принимает и реализует свойства, указанные в интерфейсе.

interface IVehicle {
    seats: number;
    colour: string;
    canHavePassengers: boolean;
    fuelPer100Kilometers: number;
    calcFuelNeeded(distance: number): number;
}

class Car implements IVehicle {
    constructor(
        public seats: number,
        public colour: string,
        public canHavePassengers: boolean,
        public fuelPer100Kilometers: number,
    ) { }

    calcFuelNeeded(distance: number) {
        return (this.fuelPer100Kilometers / 100) * distance
    }
}

const porche = new Car(4, 'red', true, 20);
console.log(porche.calcFuelNeeded(200));


//? TypeScript: Использование интерфейсов

// Задание
// Вам даны несколько интерфейсов.На их основе создайте интерфейс ISuperman.ISuperMan должен иметь метод guessWho, принимающий и возвращающий строку.

// На основе интерфейса ISuperMan создайте объект superMan.Метод guessWho должен работать следующим образом: если в качестве строки в аргументе приходит любое значение кроме superman(в любом регистре), то следует вернуть предположение "It's a ${value}?", иначе "It's a ${value}!".

interface IFlying {
    canFly: true;
}

interface IBird extends IFlying {
    isLiving: true;
}

interface IPlane extends IFlying {
    canCarryPeople: true;
}

// BEGIN (write your solution here)
interface ISuperman extends IBird, IPlane {
    guessWho: (guess: string) => string
}

const superMan: ISuperman = {
    canFly: true,
    isLiving: true,
    canCarryPeople: true,
    guessWho: (guess) => (guess.toLowerCase() !== 'superman' ? `It's a ${guess}?` : `It's a ${guess}!`),
};

console.log(superMan.guessWho('bird')); // "It's a bird?";
console.log(superMan.guessWho('plane')); "It's a plane?";
console.log(superMan.guessWho('superman')); "It's a superman!";