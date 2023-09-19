//? TypeScript: Пересечение(Intersections Types)
// Вместе с объединением важной операцией в теории множеств является пересечение.Для разработчиков, которые привыкли к динамике JavaScript, эта операция может показаться менее значимой.Но без нее не обойтись, например, при описании типа слияния объектов.

// Задание №1
// Реализуйте тип Admin, который является пересечением типов AdminPermission и User.Реализуйте функцию addAdmin(), которая принимает значение с типом User и возвращает значение с типом Admin.В качестве значения для свойства permission должно быть значение Permission.READ.

enum Permission {
    READ,
    WRITE,
    DELETE,
}

type UserTs = {
    login: string,
};

type AdminPermission = {
    permission: Permission,
};

type Admin = AdminPermission & UserTs
function addAdmin(user: UserTs): Admin {
    return { ...user, permission: Permission.READ }
}

const user: UserTs = { login: 'login1' };
const admin = addAdmin(user);
console.log(admin);

//? TypeScript: Присвоение значения
// В этом уроке мы разберем присвоение одного значения другому.Это одна из базовых операций с переменными в большинстве языков.Но в статически типизированных языках можно столкнуться с ошибкой Error: Type X is not assignable to type Y..Такой код не удается скомпилировать, поэтому нужно разобраться, как это исправить.

// Присвоение одного значения другому и передача аргументом в функцию называют Assignability:

// Задание №2
// Реализуйте объект по описанному типу Form.Поле name.value должно проходить валидацию, а поле age — нет.

type Form = {
    age: {
        value: number,
        validator: (val: number) => boolean
    },
    name: {
        value: string,
        validator: (val: string) => boolean
    }
};

const form: Form = {
    age: {
        value: -23,
        validator: (val: number) => {
            return val > 0 && val < 120
        }
    },
    name: {
        value: 'Kairat',
        validator: (val: string) => {
            return val.trim().length >= 2
        }
    }
};

console.log(form.name.validator(form.name.value));
console.log(form.age.validator(form.age.value));


//? Задание #3
// Реализуйте функцию getUserFriends(), которая принимает JSON с массивом пользователей и с массивом id друзей и возвращает список друзей пользователя по id.Друзья каждого пользователя хранятся в поле friends.

// Если пользователь с указанным id не найден, то функция должна вернуть пустой массив.

type User3 = {
    id: number,
    name: string,
    age: number,
};

type Friends = [number, number];

type UserResponse = {
    users: User3[],
    friends: Friends[]
};

// BEGIN (write your solution here)
const defaultUser = { id: 0, name: '', age: 0 };
const getUserFriends = (userResponseJSON: string, userId: number): User3[] => {
    const userResponse: UserResponse = JSON.parse(userResponseJSON) as UserResponse;

    return userResponse.friends
        .map(([ownerId, friendId]: Friends): User3 => {
            if (!(userId === ownerId || userId === friendId)) return defaultUser;
            const searchId = (ownerId === userId) ? friendId : ownerId;
            const friend: User3 | undefined = userResponse.users.find(({ id }) => id === searchId);

            return friend === undefined ? defaultUser : friend;
        })
        .filter((user: User3) => user.id > 0);
};
const userJson = JSON.stringify({
    users: [
        { id: 1, name: 'John', age: 20 },
        { id: 2, name: 'Mary', age: 21 },
    ],
    friends: [
        [1, 2],
    ],
});

console.log(getUserFriends(userJson, 1));
console.log(getUserFriends(userJson, 2));
console.log(getUserFriends(userJson, 3));