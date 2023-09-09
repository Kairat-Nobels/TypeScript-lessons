class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: TypeScript version ${this.version}`
    }
}

// class Car {
//     readonly model: string
//     readonly countOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) { }
}

// ===================
// модификатор

class Animal {
    protected voice: string = ''
    // По умолчанию все public
    public color: string = 'black'
    constructor() {
        this.go()
    }
    private go() {
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color);
// cat.voice

// ===============
// абстрактные классы

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render');
    }
    info(): string { return 'This is info' }
}
