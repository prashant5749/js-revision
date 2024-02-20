//Singleton objects using constructors
const fbUser = new Object()

fbUser.Id = 23333
fbUser.name = "prasaaa"
fbUser.mail = "google.prashant.com"

const newUser = {
    fullname : {
        firstname: "prashant",
        lastname: "kumar"
    }
}

const obj1 = {1: "aa", 2: "bb"}
const obj2 = {3: "cc", 4: "dd"}
const obj3 = {5: "ee", 6: "ff"}

// const obj4 = {...obj1, ...obj2, ...obj3}
const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const users = [
    {
        id: 222,
    },

    {
        name: "bbbadal",
    },

    {
        mail: "gmail.commmm",
    }
]

// console.log(users[2])

// console.log(fbUser);
// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));
// console.log(Object.entries(fbUser));
console.log(fbUser.hasOwnProperty("Id"));




