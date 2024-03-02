function setUsername(username){
    this.username = username
}

function createUser(username, mail, password){
    setUsername.call(this, username)
    this.mail = mail
    this.password = password
}

const call = new createUser('prashant', 'call@gmail.com', 2344)

console.log(call);