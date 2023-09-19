"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["READ"] = 0] = "READ";
    Permission[Permission["WRITE"] = 1] = "WRITE";
    Permission[Permission["DELETE"] = 2] = "DELETE";
})(Permission || (Permission = {}));
function addAdmin(user) {
    return Object.assign(Object.assign({}, user), { permission: Permission.READ });
}
const user = { login: 'login1' };
const admin = addAdmin(user);
console.log(admin);
const form = {
    age: {
        value: -23,
        validator: (val) => {
            return val > 0 && val < 120;
        }
    },
    name: {
        value: 'Kairat',
        validator: (val) => {
            return val.trim().length >= 2;
        }
    }
};
console.log(form.name.validator(form.name.value));
console.log(form.age.validator(form.age.value));
const defaultUser = { id: 0, name: '', age: 0 };
const getUserFriends = (userResponseJSON, userId) => {
    const userResponse = JSON.parse(userResponseJSON);
    return userResponse.friends
        .map(([ownerId, friendId]) => {
        if (!(userId === ownerId || userId === friendId))
            return defaultUser;
        const searchId = (ownerId === userId) ? friendId : ownerId;
        const friend = userResponse.users.find(({ id }) => id === searchId);
        return friend === undefined ? defaultUser : friend;
    })
        .filter((user) => user.id > 0);
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
//# sourceMappingURL=6_part.js.map