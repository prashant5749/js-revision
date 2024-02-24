const newObject = {
    person1: "Prashant",
    person2: "Baadal",
    person3: "Vaasu",
    person4: "Aditya",
}

for (const key in newObject) {
    
        //console.log(`${key} name is : ${newObject[key]}`);
}

const members = ["annu", "munni", "chohti", "divya", "meethi"]
for (const key in members) {
    console.log(members[key]);
}

//We can not use for in loop on maps as Map is not iterable in this loop