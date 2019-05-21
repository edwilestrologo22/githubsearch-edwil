const http = new EasyHTTP;

// // Get users


// User Data POST Method
const data = {
    name: 'yang',
    username: 'pogi',
    email: 'pogi@gmail.com'
}
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));

// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/1', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// http.delete('https://jsonplaceholder.typicode.com/users/1')
// .then(data => console.log(data))
// .catch(err => console.log(err));