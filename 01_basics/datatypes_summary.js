// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
 
const score = 100
// console.log(typeof score); // number

const scoreValue = 100.3
// console.log(typeof scoreValue); // number

const isLoggedIn = false
// console.log(typeof isLoggedIn); // boolean

const outsideTemp = null
// console.log(typeof outsideTemp); // object

let userEmail;
// console.log(typeof userEmail); // undefined

const id = Symbol('123')
// console.log(typeof id); // symbol

const anotherId = Symbol('123')
// console.log(typeof anotherId); // symbol


console.log(id === anotherId);

const bigNumber = 34565435766445n
// console.log(typeof bigNumber); // bigint


// Reference (Non-primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "dhruv",
    age: 20,
}
// console.log(typeof heroes); // object
// console.log(typeof myObj); // object


const myFunction = function(){
    console.log("Hello Dosto!");
}
console.log(typeof myFunction); // function
console.log(typeof heroes); // object
console.log(typeof anotherId); // symbol
