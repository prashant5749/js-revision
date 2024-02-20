const family_men = ["baadal", "tannu", "anchal",]
const family_wom = ["divya", "munni", "chohti"]

// family_men.push(family_wom)  //this push method shows the data in existing array
// const newArr = family_men.concat(family_wom) // this needs a new variable to declare the value of new array

// console.log(family_men[3][2]);

// console.log(newArr[3]);

const all_family = [...family_men, ...family_wom]

// console.log(all_family);

const arr = [1,2,3,4,4,5,[6,5,4,3,3], ["a", "d", "b", "r",[23,34,657,8,9,556,4]]]

const mergedArray = arr.flat(Infinity)
// console.log(mergedArray);

//console.log(Array.isArray("prashant"))
//console.log(Array.from({name:"prashant"})) // here when we tried to convert object into array using Array.from method it returns the empty array because here we have to specify whether we want to convert key or value of that object

let marks1 = 123
let marks2 = 234
let marks3 = 344

console.log(Array.of(marks1, marks2, marks3));