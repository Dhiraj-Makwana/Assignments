interface User {
    id: number,
    name: string,
    age: number,
    email: string,
}

type UserProfile = Pick<User, "name" | "email" | "age" >

const displayUserProfile = (user: UserProfile) => {
    console.log(`Name- ${user.name}, email- ${user.email}, age- ${user.age}`);
}

displayUserProfile({ name: "Dhiraj", age: 21, email: "dhirajmakwana22@gmail.com"})