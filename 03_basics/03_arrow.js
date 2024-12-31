// const user = {
//     username: "Dhruv",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`); // Dhruv...   // Sam...
//         console.log(this); // { username: 'Dhruv', price: 999, welcomeMessage: [Function: welcomeMessage] }             
//     }                        // { username: 'Sam', price: 999, welcomeMessage: [Function: welcomeMessage] }
// }
// user.welcomeMessage() // Dhruv, welcome to website
// user.username = "Sam"
// user.welcomeMessage() // Sam, welcome to website

// // console.log(this);


const user = {
    username: "Dhruv",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // Dhruv...   // Sam...
        // console.log(this);
    }                        
}
// user.welcomeMessage() 
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // {}


// function chai(){
//     let username = "dhruv"
//     console.log(this.username); // undefined   
// }
// chai()

// const chai = function(){
//     let username = "dhruv"
//     console.log(this.username); // undefined 
// }
// chai()

// const chai = () => {
//     let username = "dhruv"
//     console.log(this.username); // undefined 
// }
// chai()

const chai = () => {
    let username = "dhruv"
    // console.log(this); // {} 
}
chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,6)); // 10

// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(4,6)); // 10

// const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(4,6)); // 10 

const addTwo = (num1,num2) => ({username: "dhruv"})
console.log(addTwo(4,6)); // { username: 'dhruv' } 