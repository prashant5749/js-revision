//if

// if (2 != 3) {
//     console.log("Yes it is true");
// } else {
//     console.log("No it is not true");
// }

// <, > , >=, <=, !=, ==, === , these all operators are used to check the conditions

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power is : ${power}`);
// }

// console.log(`User power is : ${power}`);

//Short hand notations

// const balance = 2000

// if (balance > 1000) console.log("yeah working"), console.log("again working");
// if (balance < 500) {
//     console.log("Less than 500");
// }else if (balance < 1000) {
//     console.log("Less than 1000");
// }else if (balance < 1500) {
//     console.log("Less than 1500");
// }else {
//     console.log("Less than 2500");
// }

const isUserLoggedIn = true
const hasDebitCard = true

if (isUserLoggedIn && hasDebitCard) {
    console.log("Yes you can shop with us");
}else{
    console.log("You are not eligible to shop");
}