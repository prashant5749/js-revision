const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((nums) =>  nums + (10 *2)) //First method
// const newNums = myNumbers.map((nums) =>  {return nums + (10 *2)})  //Second method


//*****************Chaining in JS****************

const myNums = myNumbers
                .map((num) => num *5)
                .map((num) => {return num +2})
                .filter((num) => num > 30)

console.log(myNums);
