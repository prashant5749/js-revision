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
console.log(mergedArray);