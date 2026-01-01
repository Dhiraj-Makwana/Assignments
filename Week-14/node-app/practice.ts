interface User {
    firstName: string,
    lastName: string,
    email: string,
    age: number
}

let user = {
    firstName: "Dhiraj",
    lastName: "Makwana",
    email: "dhirajmakwana33912@gmail.com",
    age: 16
}

function isLegal(u: User) {
    if(u.age >= 18) {
        return true
    }
    else {
        return false
    }
}

console.log(isLegal(user))