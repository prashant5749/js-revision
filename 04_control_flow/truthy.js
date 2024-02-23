//Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//Truthy values
// "0", " ", 'false', [], {}, function(){}
const userEmail = []

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}

// Nullish coalescing operator (??) : null, undefined

// let val1;
// val1 = 5 ?? 10
// console.log(val1);


let val1;
// val1 = null ?? 10
// val1 = undefined ?? 20
val1 = null ?? 30 ?? 20
// console.log(val1);

// Terniary operator 
// condition ? true : false

const myTeaPrice = 200
myTeaPrice <= 100 ? console.log("less than 100") : console.log("more than 100");