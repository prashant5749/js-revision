class User {
    constructor(username){
        this.username = username 
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Student extends User{
    constructor(username, mail, password){
        super(username)
        this.mail = mail
        this.password = password
    }

    addHobby(){
        console.log(`A new hobby added by ${this.username}`);
    }
}

const annu = new Student('annu', 'annu@gmail.com', '345543')
annu.addHobby()