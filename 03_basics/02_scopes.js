// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(a); // ReferenceError: a is not defined
// console.log(b);   //  ReferenceError: b is not defined
// console.log(c);     // 30

// var c = 300
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(c); // 30

let a = 444
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ",a); // Inner:  10
    
}
// console.log("Outer: ",a); // Outer:  444



// function one(){
//     const username = "dhruv"

//     function two(){
//         const website = "youtube"
//         console.log(username);        
//     }
//     console.log(website); // ReferenceError: website is not defined
//     two()
// }
// one()

function one(){
    const username = "dhruv"

    function two(){
        const website = "youtube"
        // console.log(username); // dhruv       
    }
    // console.log(website);
    two()
}
one()

if (true){
    const username = "dhruv"
    if (username === "dhruv"){
        const website = " youtube"
        // console.log(username + website); // dhruv youtube        
    }
    // console.log(website); // ReferenceError: website is not defined   
}
// console.log(username); // ReferenceError: username is not defined


// +++++++++++ interesting +++++++++++

// function addOne(num) {
//     return num + 1
// }
// console.log(addOne(5)); // 6

// const addTwo = function(num){
//     return num + 2
// }
// console.log(addTwo(7)); // 9


console.log(addOne(5)); // 6
function addOne(num) {
    return num + 1
}

console.log(addTwo(7)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}