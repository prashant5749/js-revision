const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'Adrak vaali chai',
    price: 20,
    isAvailable: true,

    orderChai: function(){
        console.log('Chai not prepared');
    }
}

 const prop = Object.getOwnPropertyDescriptor(chai, 'price', 'name', 'isAvailable')

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true 
})
// const prop = Object.getOwnPropertyDescriptor(chai, 'name')
// chai.name = 'cold tea'
// console.log(prop);
// console.log(chai.name);

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        
        console.log(`${key} : ${value}`);
    }
}