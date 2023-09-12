// декораторы это просто одни из паттернов в проектировании
// в тайпскрипт декораторы используем просто как синтаксический сахар
// декораторы сами по себе это функции

// function Log(constructor: Function) {
//     console.log(constructor);

// }
// function Log2(target: any, propName: string | Symbol) {
//     console.log('target: ', target, '\npropName:', propName);
// }
// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//     console.log('Log3\ntarget: ', target, '\npropName:', propName, '\ndescriptor: ', descriptor);
// }
// @Log
// class Component {
//     @Log2
//     name: string;

//     @Log3
//     get componentName() {
//         return this.name;
//     }

//     constructor(name: string) {
//         this.name = name;
//     }
//     @Log3
//     logName(): void {
//         console.log('Conponent Name: ', this.name);
//     }
// }

// теперь не просто логи, а чтото поинтереснее - как ангуляр
interface ComponentDecorator {
    selector: string
    template: string
}

function ComponentF(config: ComponentDecorator) {
    return function <T extends { new(...args: any[]): object }>(Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args)
                const el = document.querySelector(config.selector)!
                el.innerHTML = config.template
            }
        }
    }
}

function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
    const original = descriptor.value
    return {
        configurable: true,
        enumerable: false,
        get() {
            return original.bind(this)
        }
    }
}

@ComponentF({
    selector: '#card',
    template: `
        <div class="card">
            <div class="card-content">
                <h4 class="card-title">Card Component</h4>
            </div>
        </div>
    `
})
class CardComponent {
    constructor(public name: string) { }

    @Bind
    logName(): void {
        console.log('Conponent Name: ', this.name);
    }
}

const card = new CardComponent('My Card Component')

const btn = document.querySelector('#btn1')!

btn.addEventListener('click', card.logName)

// =======================
// Еще одно применение декораторов
type ValidatorType = 'required' | 'email'
interface ValidatorConfig {
    [prop: string]: {
        [validateProp: string]: ValidatorType
    }
}
const validators: ValidatorConfig = {}
function Required(target: any, propName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: `required`
    }
}
function validate(obj: any): boolean {
    const objConfig = validators[obj.constructor.name]
    if (!objConfig) return true
    let isValid = true
    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === 'required') {
            isValid = isValid && !!obj[key]
        }
    })
    return isValid
}
class Form {
    @Required
    public email: string | void
    constructor(email?: string) {
        this.email = email
    }
}

const form = new Form('')
console.log(form);

if (validate(form)) console.log('Valid: ', form);
else console.log('validation error');

