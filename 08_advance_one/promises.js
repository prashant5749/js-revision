//*****************************Promise one***********************************

// const promiseOne = new Promise(function (resolve, reject) {
//     //Do an async task
//     //DB calls, cryptography, networks
//     setTimeout(function () {
//         // console.log('Async task is complete');
//         resolve()
//     }, 1000)
// })

// //Consuming promise
// promiseOne.then(function () { //here.then directly connected to resolve
//     // console.log('Promise Consumed');
// })

// //*****************************Promise two***********************************

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         // console.log('Async task 2');
//         resolve()
//     }, 1000)
// }).then(function () {
//     // console.log('Async 2 resolved (consumed)');
// })

// //*****************************Promise three***********************************

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ name: 'Prashant', email: 'prashant@gmail.com', number: 8006449393 })
//     }, 1000)
// })

// promiseThree.then(function (user) {
//     // console.log(user);
// })

// //*****************************Promise fourth***********************************

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({ name: 'Prashant', email: 'prashant@gmail.com', number: 8006449393 })
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour
//     .then((user) => {
//         // console.log(user);
//         return user.name
//     })
//     .then((name) => {
//         // console.log(name);
//     })
//     .catch((error) => {
//         console.log(error);
//         }).finally(() => 
//         console.log('The promise is either resolved or rejected'))

//         //*****************************Promise five***********************************

//         const promiseFive = new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 let error = true
//                 if (!error) {
//                     resolve({ username: "javascript", password: "123" })
//                 } else {
//                     reject('ERROR: JS went wrong')
//                 }
//             }, 1000)
//         });

//         async function consumePromiseFive() {
//             try {
//                 const response = await promiseFive
//                 console.log(response);
//             } catch (error) {
//                 console.log(error);
//             }
//         }

        // consumePromiseFive()


        // async function getAllUsers(){
        //     try {
        //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //         const data = await response.json()
        //         console.log(data);
                
        //     } catch (error) {
        //         console.log('E:', error);
        //     }
        // }

        // getAllUsers()

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log('ERRORRR: Please check again'))