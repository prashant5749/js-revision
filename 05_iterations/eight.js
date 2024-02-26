const myNums = [1, 2, 3]

// const acc = 0
const myCalc = myNums.reduce( (acc, currVal) => acc + currVal, 0)
// console.log(myCalc);

const shoppingCart = [
    {
        itemName: "laptop",
        price: 39999
    },

    {
        itemName: "apple watch",
        price: 29999
    },

    {
        itemName: "nike air",
        price: 19999
    },

    {
        itemName: "notepad",
        price: 999
    },

    {
        itemName: "kaccha",
        price: 99
    }
]

const myPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
// console.log(myPrice);