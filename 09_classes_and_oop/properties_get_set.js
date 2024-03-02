function User(mail, password){
    this._mail = mail;
    this._password = password;

    Object.defineProperty(this, 'mail',{
        get: function(){
            return this._mail.toUpperCase()
        },
        set: function(value){
            this._mail = value
        }
    })
}

const prashant = new User('prashant@gmail.com', '123342')

console.log(prashant.mail);