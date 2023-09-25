"use strict";
function sanitize(obj, keys) {
    const rez = Object.entries(obj).filter(([el]) => !keys.includes(el));
    return Object.fromEntries(rez);
}
const user12 = sanitize({
    name: 'John',
    password: '1q2w3e',
    token: 'test',
}, ['password', 'token']);
console.log(user12);
const createAccessChecker = ((permissions) => ((role, resource) => permissions[role].includes(resource)));
const userRolePermissions = {
    admin: ['document', 'user', 'adminPanel'],
    user: ['document', 'user'],
    guest: ['document'],
};
const checkUserAccess = createAccessChecker(userRolePermissions);
const isAdminAllowed = checkUserAccess('admin', 'adminPanel');
console.log(isAdminAllowed);
const isUserAllowed = checkUserAccess('user', 'adminPanel');
console.log(isUserAllowed);
//# sourceMappingURL=12_part.js.map