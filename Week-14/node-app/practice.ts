interface User {
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    address?: {
        city: string,
        country: string,
        pincode: number
    }
}

let user: User = {
    firstName: "Dhiraj",
    lastName: "Makwana",
    email: "dhirajmakwana33912@gmail.com",
    age: 21,
    address: {
        city: "Jambusar",
        country: "India",
        pincode: 392150
    }
}

function isLegal(u: User) {
    if(u.age >= 18) {
        console.log(u.address?.pincode)
        return true
    }
    else {
        console.log(u.address)
        return false
    }
}

console.log(isLegal(user))