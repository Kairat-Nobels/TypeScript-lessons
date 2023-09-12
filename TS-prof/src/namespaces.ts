// namespaces - это сущности которые помогают декомпозировать, делать модульный код - объединять определенные элементы в группы

// import namespace from formnamespace.ts

/// <reference path="form-namespace.ts"/>
// 
namespace FormNamespace {

    class MyForm {
        private type: FormType = 'inline'
        private state: FormState = 'active'

        constructor(public email: string) {
        }

        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state,
            }
        }
    }

    export const myForm = new MyForm('kairat@gmail.com');
}

console.log(FormNamespace.myForm);
