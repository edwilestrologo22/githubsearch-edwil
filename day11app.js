// const http = new EasyHTTP;

// // // Get users


// // User Data POST Method
// const data = {
//     name: 'yang',
//     username: 'pogi',
//     email: 'pogi@gmail.com'
// }
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// // http.post('https://jsonplaceholder.typicode.com/users', data)
// // .then(data => console.log(data))
// // .catch(err => console.log(err));

// // http.put('https://jsonplaceholder.typicode.com/users/1', data)
// // .then(data => console.log(data))
// // .catch(err => console.log(err));

// // http.delete('https://jsonplaceholder.typicode.com/users/1')
// // .then(data => console.log(data))
// // .catch(err => console.log(err));


// -------------------- DAY 11 MONDAY --------
// // ------------- Async

// async function myFunction(){
//     return 'Hello';
// }
// console.log(myFunction());


// // ----------------------- 
// async function myFunction(){
//         return 'Hello';
//     }
//     myFunction().then(res => console.log(res));

// async function myFunction(){
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 2000);
//     });
//     const error = false;
//     if(!error){
//         const res = await promise; // --------- Wait until promise is resolve
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }

// }
//     myFunction()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// // --------------------------- 

// async function getUsers(){
//     // ---------- awit response of the fetch call
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     const data = await response.json();

//     // only proceed once second promise is resolve

//     return data;
// }

// getUsers()
// .then(users => console.log(users))
// .catch(err => console.log(err));


// ---------------- VERSION 3 ASYNC AWAIT / PROMISE


// const http = new EasyHTTP;
// const url = 'https://jsonplaceholder.typicode.com/users';
// // // Get users


// // User Data POST Method
// const data = {
//     name: 'yang',
//     username: 'pogi',
//     email: 'pogi@gmail.com'
// }
//     // http.get('https://jsonplaceholder.typicode.com/users')
//     http.get(`${url}`)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//     // http.post('https://jsonplaceholder.typicode.com/users', data)
//     http.post(`${url}`, data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//     http.put('https://jsonplaceholder.typicode.com/users/1', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//     http.delete('https://jsonplaceholder.typicode.com/users/1')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));



//--------------------

// ------------ Init Github
const gitHub = new Github();

// -------- UI
const ui = new UI();

// --------------------- Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup',(e) => {

    const userText = e.target.value;

    if(userText !== ''){
        // console.log(userText);
        gitHub.getUser(userText)
        .then(data => {
            // console.log(data);
            if(data.profile.message === 'Not Found'){
                // show alert
                ui.showAlert('User not Found', 'alert alert-danger');
                ui.clearProfile();
            } else {
                // show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        // clear profile
        ui.clearProfile();
    }

});

