interface User {
	firstName: string;
	lastName: string;
	age: number;
}

interface Legaluser {
    firstName: string,
    age: number
}

let user: User[] = [
    {
        firstName: "Dhiraj",
        lastName: "Makwana",
        age: 21
    },
    {
        firstName: "Bharvi",
        lastName: "Patel",
        age: 14
    },
    {
        firstName: "Rishi",
        lastName: "Patel",
        age: 17
    },
    {
        firstName: "Bhavya",
        lastName: "Mishra",
        age: 22
    },
    {
        firstName: "Gayatri",
        lastName: "Kharva",
        age: 23
    }]

function getLegal(people: User[]): Legaluser[] {
    return people.filter(u => u.age > 18).map(u => ({firstName: u.firstName, age: u.age}));
}

console.log(getLegal(user))