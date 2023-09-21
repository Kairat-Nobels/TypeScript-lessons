"use strict";
class CustomFile8 {
    constructor(options) {
        this.name = options.name;
        this.size = options.size;
    }
    toString() {
        return `${this.name} (${this.size} bytes)`;
    }
}
class ImageCustomFile extends CustomFile8 {
    constructor(options) {
        super({ name: options.name, size: options.size });
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
class CustomFilePro {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    toString() {
        return `${this.name} (${this.size} bytes)`;
    }
}
const filePro = new CustomFilePro('open-world.jpeg', 1000);
console.log(filePro.toString());
class HttpError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
class NotFoundError extends HttpError {
    constructor(message) {
        super(404, message);
    }
}
class UnauthorizedError extends HttpError {
    constructor(message) {
        super(401, message);
    }
}
class ForbiddenError extends HttpError {
    constructor(message) {
        super(403, message);
    }
}
const error8 = new NotFoundError('Not Found');
console.log(error8.status);
console.log(error8.message);
class UserResponse8 {
    constructor(user) {
        this.user = user;
    }
    static fromArray(arr) {
        return arr.map(el => new UserResponse8(el));
    }
}
const response = UserResponse8.fromArray(['user1', 'user2', 'user3']);
console.log(response[0].user);
console.log(response[0] instanceof UserResponse8);
//# sourceMappingURL=8_part.js.map