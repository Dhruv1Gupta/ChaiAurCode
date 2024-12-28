const tinderUser = new Object()    // singleton
const tinderUser2 = {}    // non-singleton

// console.log(tinderUser); // {}
// console.log(tinderUser2); // {}

tinderUser.id = "123abc"
tinderUser.name = "Dhruv"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "dhruv@gmail.com",
    fullname: {
        userfullname: {
            firstname: "dhruv",
            lastname: "gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // dhruv

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1,obj2}
// console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj3 = {...obj1,...obj2}
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "d@gmail.com"
    },
    {
        id: 1,
        email: "d@gmail.com"
    },
]

// console.log(users[1].email); // d@gmail.com

// console.log(tinderUser); // { id: '123abc', name: 'Dhruv', isLoggedIn: false }
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Dhruv', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Dhruv' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLogged')); // false
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true