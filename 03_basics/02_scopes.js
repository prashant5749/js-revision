//whatever we declare outside scope {} it is known as Global Scope and can be use inside the any other scope
//but whenever we want to use the value outside from the inside scope {} it should not be reachable as it is known as block scope

let a  =300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    
    // console.log("Inner :", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Prashant"

    function two(){
        const mail = "prashu@gmail.com"
        // console.log(username);
    }
    // console.log(mail);
    two()
}

// one()

if (true) {
    const myName = "Prashant"

    if (myName === "Prashant") {
        const love = " loves to_talk"
        // console.log(myName + love);
    }
    // console.log(love);
}

// console.log(myName);

// ++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++

addOne(3)
function addOne(num1){
    return num1 + 2
}

// addTwo(5)

const addTwo = function(val1){
    return val1 + 2
}
