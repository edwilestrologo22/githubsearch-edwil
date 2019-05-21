const http = new easyHTTP;
// // -------- GET Posts
// // http.get('https://jsonplaceholder.typicode.com/posts/', function(err, posts){
// //     if(err){
// //         console.log(err);
// //     } else {
// //         console.log(posts);
// //     }
// // });


// Create Data
const data = {
        title: 'Custom Post',
        body: 'This is a custom Post'
};

// // ----------- create POST

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


// // ----------- PUT Request / Update Post

// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


// ----------- DELETE Request 

http.delete('https://jsonplaceholder.typicode.com/posts', data, function(err, Response){
    if(err){
        console.log(err);
    } else {
        console.log(Response);
    }
});