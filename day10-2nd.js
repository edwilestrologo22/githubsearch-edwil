
// function getText(){
//     fetch('test.txt')
//     .then(function(res){
//         // console.log(res.text());
//         return res.text();
//     })
//     .then(function(data){
//         // console.log(data);
//         document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(err){
//         console.log(err);
//     });
// }


// ----------------- ES6

 const getText = () => {
    fetch('test.txt')
    .then(res => res.text())
    .then(data => document.getElementById('output').innerHTML = data)
    .catch(err => console.log(err));
    // e.preventDefault();
}


// // ------------------------ JSON Other way

// function getJSON(){
//     fetch('posts.json')
//     .then(function(res){
//         // console.log(res.text());
//         return res.text();
//     })
//     .then(function(data){
//         // console.log(data);
//         const post = JSON.parse(data);
//  // console.log(data);
// let output = [];
//     post.forEach(function(posts){
//             output += `
//             <ul>
//                 <li>Title : ${posts.title}</li>
//                 <li>Body : ${posts.body}</li>
//             </ul>`;
//     //  console.log(outputs);
//         });

//         document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//         console.log(err);
//     });
// }


// // ------------------------ JSON 

// function getJSON(){
//     fetch('posts.json')
//     .then(function(res){
//         // console.log(res.text());
//         return res.json();
//     })
//     .then(function(data){
//         // console.log(data);
//         // const post = JSON.parse(data);
//  // console.log(data);
// let output = [];
//     data.forEach(function(posts){
//             output += `
//             <ul>
//                 <li>Title : ${posts.title}</li>
//                 <li>Body : ${posts.body}</li>
//             </ul>`;
//     //  console.log(outputs);
//         });

//         document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//         console.log(err);
//     });
// }



// ------------------------ JSON ES6

const getJSON = () => {
    fetch('posts.json')
    .then(res => res.json())
    .then(data => { let output = [];
    data.forEach(posts =>
            output += `
                <li>Title : ${posts.title}</li>
                <li>Body : ${posts.body}</li>`);
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}



// // ------------------------ API
// function getAPI(){
//     fetch('http://api.github.com/users')
//     .then(function(res){ // Promises yung tawag sa .then
//         // console.log(res.text());
//         return res.text();
//     })
//     .then(function(data){
//         // console.log(data);
//         const post = JSON.parse(data);
//  // console.log(customer);
// let output = [];
//     post.forEach(function(user){
//             output += `
//             <ul>
//                 <li>Title : ${user.id}</li>
//                 <li>Body : ${user.login}</li>
//             </ul>`;
//     //  console.log(outputs);
//         });

//         document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//         console.log(err);
//     });
// }



// ------------------------ API ES6
const getAPI = () => {
    fetch('http://api.github.com/users')
    .then(res => res.json())
    .then(data => { let output = [];
    post.forEach(user => output += `
                <li>Title : ${user.id}</li>
                <li>Body : ${user.login}</li>`);
        document.getElementById('output').innerHTML = output; 
    })
    .catch(err => console.log(err))
}


document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);

