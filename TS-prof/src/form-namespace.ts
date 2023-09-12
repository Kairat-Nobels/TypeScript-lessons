// мы можем обозначать все сущности которые есть в этом namespace
// по умолчанию все поля в namespace приватные
// чтобы сделать поля доступными мы должны их импортировать

namespace FormNamespace {
    export type FormType = 'inline' | 'blcok'
    export type FormState = 'active' | 'disabled'

    export interface FormInfo {
        type: FormType,
        state: FormState,
    }

}

// namespace IPhone {
//     type Model = 'iphone' | 'ProMax' | 'Pro'
//     type Memory = '256gb' | '512gb' | '1TB'

//     interface IPhoneInfo {
//         model: Model,
//         memory: Memory
//     }
// }