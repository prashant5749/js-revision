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
// console.log(userLoggedIn("prashant"))

function shoppingCart(val2,...val1){
    return val1
}

// console.log(shoppingCart(100,200,500));

//*********************How to pass object into functions*************************
const person = {
    wakup: 7,
    sleep: "four_hours",
    meditate: "daily"
}

function passingobject(anyObject){
    console.log(`This person wakeup at ${anyObject.wakup} and sleep for ${anyObject.sleep}`);
}

// passingobject(person)

const recentArray = [313, 2232, 4342, 123]

function passingArray(getMyArray){
    return getMyArray[1]
}

console.log(passingArray(recentArray));

