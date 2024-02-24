//Array specific loop
// ["", "", "", ""]
//[{}, {}, {}]

//For of loop

const myArr = [1,2,3,4,5,6]

for (const num of myArr) {
    // console.log(num);
}

const name = "Prashant"

for (const onString of name) {
    // console.log(`The letter is ${onString}`);
}

//map

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("IN", "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key , ":-", value);
}

const myObj = {
    game1: "NFS",
    game2: "asphalt",
    game3: "pubg"
}
//This for of loop is not iterable for object in this way

// for (const [key, value] of myObj) {
//     console.log(key, value);
// }
