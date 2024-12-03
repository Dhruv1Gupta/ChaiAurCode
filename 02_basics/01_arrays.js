// +++++++++ Array ++++++++++

const myArr1 = [0,1,2,3,4,5]
const myHeroes = ["Shaktimaan","naagraj"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr1[1]); // 1
// console.log(myHeroes[1]); // naagraj
// console.log(myArr2[1]); // 2


// +++++++++ Array methods ++++++++++

// myArr1.push(6)
// console.log(myArr1); // [ 0, 1, 2, 3, 4, 5, 6 ]

// myArr1.pop()
// console.log(myArr1); // [ 0, 1, 2, 3, 4, 5 ]

// myArr1.unshift(8)
// console.log(myArr1); // [ 8, 0, 1, 2, 3, 4, 5 ]

// myArr2.shift()
// console.log(myArr2); // [ 2, 3, 4 ]

// console.log(myArr1.includes(5)); // true
// console.log(myArr2.includes(5)); // false
// console.log(myArr1.indexOf(5)); // 6
// console.log(myArr2.indexOf(5)); // -1

// const newArr = myArr1.join()
// console.log(myArr1); // [ 8, 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); // 8,0,1,2,3,4,5
// console.log(typeof newArr); // string


// +++++ Slice, Splice +++++++

console.log("A ", myArr1); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr1.slice(2,4)
console.log(myn1); // [ 2, 3 ]
console.log("B ", myArr1); // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr1.splice(2,4)
console.log("C ", myArr1); // C  [ 0, 1 ]
console.log(myn2); // [ 2, 3, 4, 5 ]