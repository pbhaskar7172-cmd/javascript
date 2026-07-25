//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

let score = 100  
console.log(score)
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')

console.log(id);

const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let arr = [12 , "hi" , 213 , "5"];

console.log(arr);

let user = {
    name: "Priyanshu",
    age: 19,
    college: "AIT Pune"
};

console.log(user);
console.log(user.age);

const add = function(a, b) {
    return a + b;
};

console.log(add(5, 7));

function add2(a,b){
    return a+b;
}

console.log(add2(5,7))

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3