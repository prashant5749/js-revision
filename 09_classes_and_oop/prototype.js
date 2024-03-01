const myName = 'Prashant'

// console.log(myName.length);

const books =['sci-fi', 'comedy', 'fiction']

let publishedYear = {
    sci_fi: 2002,
    comedy: 2004,
    fiction: 2010,

    getComedyYear: function(){
        console.log(`This book is published in: ${this.comedy}`);
    }

}

Object.prototype.prashant = function(){
    console.log(`Prashant is present in all objects`);
}

// publishedYear.prashant()
// books.prashant()

Array.prototype.heyPrashant = function(){
    console.log(`Prashant says hiiiiii`);
}

// books.prashant()
// books.heyPrashant()
// publishedYear.heyPrashant()

// Inheritance

const user = {
    name: 'Vaasu',
    mail: 'vaasu@google.com'
}

const Student = {
    collegeGoing: true
}

const College = {
    under5Km: true
}

const Vehicle = {
    type: 'motorcycle',
    vehicleUsedDaily: false,
    __proto__: College
}

Student.__proto__ = user

//Modern syntax
Object.setPrototypeOf(Vehicle, Student)

const anotherUser = 'Muniyaa       '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

'prashant'.trueLength()
anotherUser.trueLength()
'mango'.trueLength()