const user = {
    username: 'Prashant',
    isLoggedIn: true,
    loginTimes: 12,

    getuserDetails: function(){
        // console.log('Got user email from database');
        // console.log(`Username is: ${this.username}`);
        // console.log(this);
    }
    }

    // console.log(user.username);
    // console.log(user.getuserDetails());
    // console.log(this);

    function User(username, loginTimes, isLoggedIn ){
        this.username = username
        this.loginTimes = loginTimes
        this.isLoggedIn = isLoggedIn

        this.greetings = function(){
            console.log(`Welcome ${this.username}`);
        }
        return this
    }

    //Whenever we use (new) keyword it gives you empty object which is also called instance
    const userOne =  new User('annu', 12, false)
    const userTwo = new User('Navneet', 4, true)
    // console.log(userTwo.construtor);
    console.log(userOne instanceof User);