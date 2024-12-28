// Singleton
// Object.create
 
// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Dhruv",
    "full name": "Dhruv Gupta",
    [mySym]: "mykey1",
    age: 20,
    location: "Jaipur",
    email: "dhruv@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]    
}
// console.log(JsUser.email); // dhruv@google.com
// console.log(JsUser["email"]); // dhruv@google.com
// console.log(JsUser["full name"]); // Dhruv Gupta
// console.log(JsUser[mySym]); // mykey1

JsUser.email = "dhruv@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "dhruv@microsoft.com"
// console.log(JsUser); // {    // If ((Object.freeze(JsUser))) is on...
                     //   name: 'Dhruv',
                     //   'full name': 'Dhruv Gupta',
                     //   age: 20,
                     //   location: 'Jaipur',
                     //   email: 'dhruv@chatgpt.com',
                     //   isLoggedIn: false,
                     //   lastLoginDays: [ 'Monday', 'Saturday' ],
                     //   [Symbol(key1)]: 'mykey1'
                     // }

JsUser.greeting = function(){
    console.log("Hello JS user"); // GreetingFunction => // Hello JS user
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // GreetingTwoFunction => // Hello JS user, Dhruv
}

console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting()); // undefined
console.log(JsUser.greetingTwo()); // undefined
