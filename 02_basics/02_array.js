const marvel_heroes = ["Thor","Ironman","Spidermsn"]
const dc_heroes = ["Superman","Flash","Batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); // [ 'Thor', 'Ironman', 'Spidermsn', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heroes[3][1]); // Flash

// +++++++ Concat Operator ++++++
// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes); // [ 'Thor', 'Ironman', 'Spidermsn', 'Superman', 'Flash', 'Batman' ]

// ++++ Spread Operator +++++
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes); // [ 'Thor', 'Ironman', 'Spidermsn', 'Superman', 'Flash', 'Batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// console.log(Array.isArray("Dhruv")); // false
// console.log(Array.from("Dhruv")); // [ 'D', 'h', 'r', 'u', 'v' ]
// console.log(Array.from({name: "Dhruv"})); // []      interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ] 