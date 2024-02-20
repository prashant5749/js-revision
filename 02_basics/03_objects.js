//singleton
//Object.create

//object literals

const mySym = Symbol("annu")
const aObject = {
    //key:   //value
    name:  "prashnt",
    age:     30,
    [mySym]: "key2",
    email: "prashant@gmail.com",
    isLoggedIn: false,
    daysPresent: ["monday", "tuesday"]

}

// console.log(typeof mySym);
// console.log(aObject.age);
// console.log(aObject["isLoggedIn"]);
// console.log(aObject[mySym]);

aObject.age = 40
// console.log(aObject);
//Object.freeze(aObject) //it locks the user to make any further changes in the object data
aObject.name = "baadal"
// console.log(aObject);


aObject.angryOne = function (){
    console.log("bhuutni k nikal");
}
aObject.angry = function (){
    console.log(`"bhuutni k nikal, ${this.name} `);
}

console.log(aObject.angry());
console.log(aObject.angryOne());
