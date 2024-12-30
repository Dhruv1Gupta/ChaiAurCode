function sayMyName(){
    console.log("D");
    console.log("H");
    console.log("R");
    console.log("U");
    console.log("V");
}
// sayMyName() // D
            // H
            // R
            // U
            // V

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2); // 8
// }            
// const result = addTwoNumbers(3,5)
// console.log("Result: ", result); // Result:  undefined

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}            
const result = addTwoNumbers(3,5)
// console.log("Result: ", result); // Result:  8

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Dhruv")); // Dhruv just logged in
// console.log(loginUserMessage()); // undefined just logged in

// function loginUserMessage(username){
//     if (username === undefined){
//         console.log("Please enter a username"); // Please enter a username
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage()); // undefined just logged in

// function loginUserMessage(username){
//     if (username === undefined){
//         console.log("Please enter a username"); // Please enter a username
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage()); // undefined

// function loginUserMessage(username){
//     if (!username){
//         console.log("Please enter a username"); // Please enter a username
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage()); // undefined

// function loginUserMessage(username = "sam"){
//     if (!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage()); // sam just logged in

function loginUserMessage(username = "sam"){
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Dhruv")); // Dhruv just logged in



// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(100,300,500)); // 100

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(100,300,500)); // [ 100, 300, 500 ]

function calculateCartPrice(val1,val2,...num1){ // val1: 100, val2: 300, ...
    return num1
}
// console.log(calculateCartPrice(100,300,500,800,1000)); // [ 500, 800, 1000 ]

// const user = {
//     username: "dhruv",
//     price: 299
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Username is dhruv and price is 299
// }
// handleObject(user)

// const user = {
//     username: "dhruv",
//     prices: 299             // price=>prices
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Username is dhruv and price is undefined
// }
// handleObject(user)

const user = {
    username: "dhruv",
    price: 299 
}
function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Username is sam and price is 399
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 500, 700, 900]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray)); // 500 
console.log(returnSecondValue([200, 500, 700, 900])); // 500 
