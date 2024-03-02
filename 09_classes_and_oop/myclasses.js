// ES 6

// class User{
//     constructor(username, mail, password){
//         this.username = username;
//         this.mail = mail;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}xyz`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const prashu = new User('Vaasu', 'prashu@gmail.com', '12345')
// console.log(prashu.changeUsername());
// console.log(prashu.encryptPassword());





//*************************Behind the Scene***********************


function User(username, mail, password){
        this.username = username;
        this.mail = mail;
        this.password = password;
    }
User.prototype.encryptPassword = function(){
    return `${this.password}xyz`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const annu = new User('annu', 'annu@gmail.com', '12345')
console.log(annu.changeUsername());
console.log(annu.encryptPassword());