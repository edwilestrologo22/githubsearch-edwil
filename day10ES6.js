// const sayHello = function(){
//     console.log('hello');
// }
// sayHello();

// const sayHello = () => {
//     console.log('hello');
// }
// sayHello();

// // One line function does not need braces

// const sayHello = () => console.log('no braces');
// sayHello();

// One line return

// const sayHello = () => 'hello';
// console.log(sayHello());

// ------------- same as above

// const sayHello = function(){
//    return 'hello';
// } 
// console.log(sayHello());

// // ------------------ Return object
// const sayHello = () => ({msg: 'hello'});
// console.log(sayHello());

// // -------------- Single param does not need parenthesis
// const sayHello = name => console.log(`hello ${name}`);

// (sayHello('yang'));

// // -------------- multiple param  need parenthesis
// const sayHello = (name, age) => console.log(`hello ${name}, ${age}`);

// sayHello('yang', 22);


// // -------------- multiple param  need parenthesis
const sayHello = (name, age) => console.log(`hello ${name}, ${age}`);

sayHello('yang', 22);
const users = ['nathan','john', 'William'];
// const nameLengths = users.map((name) =>{
//     return name.lenght;

// });
// console.log(name.lenght);


// -------------- multiple param  need parenthesis

const nameLenghts = users.map(name => name);
console.log(nameLenghts); 
