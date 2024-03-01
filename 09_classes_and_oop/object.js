function multiplyby5(num){
    return num*5
}

multiplyby5.power = 2
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is:  ${this.score}`);
}

const playerOne = new createUser('Annu', 250)
const playerTwo = createUser('Vaasu', 150)

playerOne.increment()

/*Here What happens behind the scenes when new keyword is used:

A new object is created : The new keyword initiates the creation of a new javascript object

A prototype is linked : The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.


The constructor is called : the constructor is called with the specified arguments and this is bound to the newly created object. if no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value.

The new object is return : after the constructor function has been called , if it doesn't return a non-primitive value(object,array,function etc...) , the newly created object is returned*/