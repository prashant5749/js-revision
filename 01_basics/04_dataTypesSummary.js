// Primitive datatypes, they are seven types
//1- String, 2- Number, 3- Boolean, 4- Null, 5- Undefined, 6- BigInt, 7- Symbol

//Non-Primitive datatypes(reference), they are of mainly 3 types
//1- Obejects, 2- Array, 3- Function

let uniqueNumber = Symbol(33)
let changeInSymbol = Symbol(33)

// console.log(typeof changeInSymbol);

let heros = ["spiderman", "batman", "ironman"]

let myObjects = {
    userName: "prashant",
    userMobile: 80006449393,
    userCity: "nagina"


}

// console.table(myObjects);

let myFun = function () {
    // console.log("myFun");
}

//***********************Stack memory and Heap memory***********************/

//Stack memory used in Primitive datatypes
let myName = "Prashant"
let changeName = myName
myName = "Baadal"

// console.log(myName);
// console.log(changeName);

//Heap meomory used in Non-Primitive datatypes

let details = {
    userId: 345344,
    userName: "pannoti",
    userColor: "fair"
}
let detailOne = details
detailOne.userName = "Aaaditya"

console.log(details.userName);


