interface User {
    name: string,
    age: number
}

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age
}

const result = sumOfAge({
    name: "harkirat",
    age: 21
},
{
    name: "Dhiraj",
    age: 20
})

console.log(result)