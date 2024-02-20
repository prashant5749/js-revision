function whatsMyname (){
    console.log("s");
    console.log("h");
    console.log("e");
    console.log("e");
    console.log("l");
    console.log("a");
}

// whatsMyname()
                    //pramameters
// function addingNums (num1, num2){
//     num1 + num2
//     console.log(num1 + num2);
// }

function addingNums (num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
    
}
                            //arguments
const result = addingNums(433, 2333)
// console.log("your result value is:", result);

function userLoggedIn(username = "computer"){
    if (!username) {
        console.log("Please enter a valid username");
    } else
    return `${username} just logged in`
}

// console.log(userLoggedIn("baadal k"))
console.log(userLoggedIn("prashant"))