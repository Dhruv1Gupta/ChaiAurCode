const name = "dhruv"
const repoCount = 50

// console.log(name + repoCount + " Value"); //dhruv50 Value

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // Hello my name is dhruv and my repo count is 50

const gameName = new String('dhruv-gpt')

// console.log(gameName[0]); // d
// console.log(gameName.__proto__); // {}

// console.log(gameName.length); // 8
// console.log(gameName.toUpperCase()); // DHRUVGPT

// console.log(gameName.charAt(2)); // r
// console.log(gameName.indexOf('g')); // 6

const newString = gameName.substring(0,4)
// console.log(newString); // dhru

const anotherString = gameName.slice(-8,4)
// console.log(anotherString); // hru

const newStringOne = "   dhruv   "
// console.log(newStringOne); //    dhruv   
// console.log(newStringOne.trim()); // dhruv  

const url = "https://dhruv.com/dhruvg753gupta"

console.log(url.replace('g753', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));