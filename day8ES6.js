// // ----------------------- DAY 8 THURSDAY ------------ 
// // document.getElementById('button').addEventListener('click', loadData);

// // function loadData(){
// //     // Create an XHR Object

// //     const xhr = new XMLHttpRequest();
// //     // console.log('READYSTATE', xhr.readyState);
// //     xhr.open('GET', 'data.txt', true);

// //     xhr.onload = function(){
// //         // console.log('READYSTATE', xhr.readyState);
// //         if(this.status === 200){
// //             document.getElementById('output').innerHTML = `<h1> ${this.responseText}</h1>`;
// //             // console.log(this.responseText);
// //         }
// //     }

// // xhr.onerror =function(){
// //     console.log('Request error....');
// // }




// //     xhr.send();
// // }
// // // ReadyState Values
// // // 0: request not initialize
// // // 1: Server connection stablish
// // // 2: request received
// // // 3: processing request
// // // 4: request finished and respond is ready



// // // HTTP STATUS
// // // 200: "OK"
// // //403: "FORBIDDEN"
// // //404: "NOT FOUND"


// // // ---------------------------- JSON LESSON ------------ 
// // // ---------------------------- Customer Other way single customer ------------ 


// // document.getElementById('button1').addEventListener('click', loadCustomer);

// // // Load single Customer
// // function loadCustomer(e){
// //     const xhr = new XMLHttpRequest;

// //     xhr.open('GET', 'customer.json', true);

// //     xhr.onload = function(){
// //     if(this.status === 200){
// // // console.log(this.responseText);

// //     const customer = JSON.parse(this.responseText);
// //     console.log(customer);

// //             const output = `
// //             <ul>
// //                 <li>ID : ${customer.id}</li>
// //                 <li>Name : ${customer.name}</li>
// //                 <li>Company : ${customer.company}</li>
// //                 <li>Phone : ${customer.phone}</li>
// //             </ul>`;
// //     //  console.log(outputs);
      
// //         document.getElementById('Customer').innerHTML = output;
// //     }
    
// //     }
// //     xhr.send();

// // }








// // ---------------------------- JSON LESSON ------------ 
// // ---------------------------- Customers Button2 --------------

// document.getElementById('button2').addEventListener('click', loadCustomers);

// // Load single Customer
// function loadCustomers(e){
//     const xhr = new XMLHttpRequest;

//     xhr.open('GET', 'customer.json', true);

//     xhr.onload = function(){
//     if(this.status === 200){
// // console.log(this.responseText);

//     const customers = JSON.parse(this.responseText);
//     // console.log(customer);

    
    let output = [];
    customers.forEach(function(customers){
            output += `
            <ul>
                <li>ID : ${customers.id}</li>
                <li>Name : ${customers.name}</li>
                <li>Company : ${customers.company}</li>
                <li>Phone : ${customers.phone}</li>
            </ul>`;
    //  console.log(outputs);
        });
//         document.getElementById('Customers').innerHTML = output;
//     }
    
// }
//     xhr.send();

// }

// // --------------------------- Customer Button1 ----------------- 

// document.getElementById('button1').addEventListener('click', loadCustomer);

// // Load single Customer
// function loadCustomer(e){
//     const xhr = new XMLHttpRequest;

//     xhr.open('GET', 'customer.json', true);

//     xhr.onload = function(){
//     if(this.status === 200){
// // console.log(this.responseText);

//     const customer = JSON.parse(this.responseText);
//     // console.log(customer);

    
//     let output = [];
//     customer.forEach(function(customer){
//             output = `
//             <ul>
//                 <li>ID : ${customer.id}</li>
//                 <li>Name : ${customer.name}</li>
//                 <li>Company : ${customer.company}</li>
//                 <li>Phone : ${customer.phone}</li>
//             </ul>`;
//     //  console.log(outputs);
//         });
//         document.getElementById('Customer').innerHTML = output;
//     }
    
// }
//     xhr.send();

// }



// ----------------------- New
const posts = [{ title: 'Post One', body: 'This is post one'},{ title: 'Post Two', body: 'This is post Two'}];

// function createPost(){
//     setTimeout(function(post){
//         posts.push(post);
//     }, 5000);

// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });

//     document.body.innerHTML = output;
//     }, 2000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});
// getPosts();




// function createPost(post, callback){
//     setTimeout(function(){
//         posts.push(post);
//     callback();
//     },1000);

// // }

// // ------ ES6 -------------
// const createPost = (post, callback) => {
//     setTimeout(() => {posts.push(post); callback()}, 1000);
// };

// // function getPosts(){
// //     setTimeout(function(){
// //         let output = '';
// //         posts.forEach(function(post){
// //             output += `<li>${post.title}</li>`;
// //         });

// //     document.body.innerHTML = output;
// //     }, 1000);
// // }


// const getPosts = () => {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => { 
//         output += `<li>${post.title}</li>`;
//     }); document.body.innerHTML = output;
//     }, 1000);

// }

// createPost({title: 'Post Three', body: 'This is post three'},getPosts);

const getJokes = (e) => {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('Get', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = () => {
        if(this.status === 200){
            // const response = JSON.parse();
            console.log(this.responseText);
            let output = '';
            // if(){

            // }
        }
    };

    xhr.send();
    e.preventDefault();
};


document.querySelector('.get-jokes').addEventListener('click', getJokes);


