"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    firstName: "Dhiraj",
    lastName: "Makwana",
    email: "dhirajmakwana33912@gmail.com",
    age: 21,
    address: {
        city: "Jambusar",
        country: "India",
        pincode: 392150
    }
};
function isLegal(u) {
    if (u.age >= 18) {
        console.log(u.address?.pincode);
        return true;
    }
    else {
        console.log(u.address);
        return false;
    }
}
console.log(isLegal(user));
//# sourceMappingURL=practice.js.map