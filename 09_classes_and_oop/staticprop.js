class User{
    constructor(username){
        this.username = username
    }

    readME(){
        console.log(`Reader is ${this.username}`);
    }

    static idGenerate(){
        return `111`
    }
}

const muniya = new User('munni')
// console.log(muniya.idGenerate());

class student extends User{
    constructor(username, mail){
        super(username)
        this.mail = mail
    }
}

const cup = new student('cup', 'cup@gmail.com')
console.log(cup.idGenerate());