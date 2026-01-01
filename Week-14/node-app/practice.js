"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    firstName: "Dhiraj",
    lastName: "Makwana",
    email: "dhirajmakwana33912@gmail.com",
    age: 16
};
function isLegal(u) {
    if (u.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(user));
//# sourceMappingURL=practice.js.map