//? TypeScript: Сопоставление типов (Mapped Types)
// Чтобы при работе с объектными типами избежать дублирования полей и переиспользовать существующие, мы можем использовать механизм поиска типов — Lookup Types

// interface Person {
//   name: string;
//   age: number;
//   location?: {
//     country: string;
//     city: string;
//   };
// }

// interface PersonDetails {
//   location: Person['location'];
// }
// Конструкция Type[Key] выглядит и работает так же, как получение значения объекта по ключу в JavaScript.Но доступ через точку тут не сработает.
// Lookup Types позволяет также получить объединение типов из объекта по нескольким известным ключам, объединенным с помощью вертикальной черты |:

// type User = {
//     id: number;
//     name: string;
//     email: string;
// }

// type UserFields = User['id' | 'name' | 'email'];

// Задание #1
// Реализуйте функцию sanitize(), которая принимает на вход объект и массив ключей.Также она должна возвращать новый объект, но уже без указанных полей.

function sanitize(obj: object, keys: string[]) {
    const rez = Object.entries(obj).filter(([el]) => !keys.includes(el))
    return Object.fromEntries(rez)
}

// teachers
// const sanitize = <T extends object, K extends keyof T>(obj: T, keys: Array<K>) => {
//     const entries = Object.entries(obj).filter(([key]) => !keys.includes(key as K));

//     return Object.fromEntries(entries) as Omit<T, K>;
// };
const user12 = sanitize({
    name: 'John',
    password: '1q2w3e',
    token: 'test',
}, ['password', 'token']); // { name: string }

console.log(user12);



//? TypeScript: Записи(Record)
// Объекты с динамической структурой, когда мы добавляем в них поля во время исполнения программы, часто используются для построения контекста или хранения данных.Напишем вспомогательный тип для построения такого объекта:

// type Context<K extends string, V> = {
//     [Key in K]: V;
// }

// const runApp = <C extends Context<string, unknown>>(ctx: C) => { };
// Ключ Key примет перебором все значения из K.В свою очередь K является подмножеством string, а V может быть любым.Таким образом здесь мы создали свой тип Context со строковыми полями и неизвестным типом для значения.
// Подобная конструкция, когда мы не задаем дополнительно никаких специфичных полей с динамическими ключами, встречается довольно часто.Встроенные Utility Types предоставляют для этого готовое решение — Record<Keys, Type>.Этот обобщенный тип принимает первым аргументом тип ключа, а вторым — тип значения.Внутри все устроено схожим образом, как в нашем типе Context:

// type Rating = 0 | 1 | 2 | 3 | 4 | 5;
// type SongsRating = Record<string, Rating>;

// const songsRating: SongsRating = {
//     ratata: 4,
// }
// Таким типом SongsRating мы можем задать тип объекта с произвольным ключом(именем песни) и рейтингом — числом от нуля до пяти.

//     Record — более предпочтителен при описании объектных типов в TypeScript.Это позволяет гибко и лаконично описывать динамические структуры и использовать Record совместно с другими типами данных.

// Задание #2
// Реализуйте функцию createAccessChecker(), которая принимает на вход объект с разрешениями для ролей и возвращает функцию, проверяющую, есть ли у пользователя доступ к ресурсу.

type Property = string | number | symbol;

const createAccessChecker = (
    <Roles extends Property, Resource>(permissions: Record<Roles, Array<Resource>>) => (
        (role: Roles, resource: Resource) => permissions[role].includes(resource)
    )
);
type UserRole = 'admin' | 'user' | 'guest';
type UserResource = 'document' | 'user' | 'adminPanel';

const userRolePermissions: Record<UserRole, Array<UserResource>> = {
    admin: ['document', 'user', 'adminPanel'],
    user: ['document', 'user'],
    guest: ['document'],
};

const checkUserAccess = createAccessChecker<UserRole, UserResource>(userRolePermissions);

const isAdminAllowed = checkUserAccess('admin', 'adminPanel');
console.log(isAdminAllowed);

const isUserAllowed = checkUserAccess('user', 'adminPanel');
console.log(isUserAllowed);
