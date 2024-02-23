//For
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("Hey this is 5 number");
    }
    // console.log(element);
    
}

for (let i = 3; i <= 10; i++) {

    // console.log(`multiplication table of  : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop : ${j} and the value of ${i}`);
        // console.log(i + "*" + j + " = " + i*j );
        
    }
    
}


// let myArray = ["prashant", "badal", "aaditya", "vaasu"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//Break and Continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("Number 5 Detected");
//         break
//     }
//     console.log(`Value of : ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log("Number 5 Detected");
        continue
    }
    // console.log(`Value of : ${index}`);
    
}