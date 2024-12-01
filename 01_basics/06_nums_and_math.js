const score = 400
// console.log(score); // 400

const balance = new Number(100)
// console.log(balance); // [Number: 100]

// console.log(balance.toString()); // 100
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // 123.9
// console.log(otherNumber.toPrecision(3)); // 124
// console.log(otherNumber.toPrecision(2)); // 1.2e+2
// console.log(otherNumber.toPrecision(5)); // 123.90
// console.log(otherNumber.toPrecision(6)); // 123.897
// console.log(otherNumber.toPrecision(7)); // 123.8966

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// ++++++++++++++ Maths ++++++++++++++++++++++++++

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // 4
// console.log(Math.abs(4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.round(4.5)); // 5
// console.log(Math.round(4.4)); // 4
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4,2,6,8)); // 2
// console.log(Math.max(4,2,6,8)); // 8


                               // always in b/w 0 & 1
// console.log(Math.random()); // 0.4706945457015226 // 0.3260816826112469
                                      // always in b/w 1 & 10
// console.log((Math.random()*10)+1); //9.600449035379764 // 7.796427266378289
// console.log((Math.random()*10)+1); //2.993906140656836 // 4.824729192585485
// console.log(Math.floor(Math.random()*10)+1); // 9 // 5

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 15 // 20

