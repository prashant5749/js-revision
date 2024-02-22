const user = {
    name: "prashant",
    mailId: "prashu@google.com",
    uniqueId: 234323,
    welcomeMessage: function(){
        console.log(`${this.name} , Welcome to website`);
    }
}

// user.welcomeMessage()

// user.name = "baadal"
// user.welcomeMessage()
// console.log(this);

// function annu(){
//     let username = "prashant"
//     console.log(this.username);
// }

// annu()

// const annu = function (){
//     let username = "prashant"
//     console.log(this.username);
// }

// annu()

const annu = () => {
    let username = "prashant"
    console.log(this);
}

// annu()

//Basic arrow function explicit (return)
const addNum = (num1, num2) => {
    return num1 + num2
}
// console.log(addNum(4, 8))


//Implicit (return) type of arrow function
// const addVal = (num1, num2) =>  num1 + num2
//const addVal = (num1, num2) =>  (num1 + num2)  //Another method is to use parenthesis()
const addVal = (num1, num2) =>  ({username: "Prashant"}) //if we need to make object inside arrow function we have to use {} inside parenthesis()
console.log(addVal(3, 6));

const myArray = [3,4,5,6,6,8]
myArray.forEach(function () {})
myArray.forEach(() => {})




