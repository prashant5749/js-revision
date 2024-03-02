class User{
    constructor(username, mail){
        this.username = username
        this.mail = mail
    }

    get username(){
        return this._username.toUpperCase()
    }

    set username(name){
        this._username = name
    }

    get mail(){
        return `${this._mail}Prashant`
    }

    set mail(string){
        this._mail = string
    }
}

const newUser = new User('prashant', 'prashu@gmail.com')
console.log(newUser.mail);
console.log(newUser.username);