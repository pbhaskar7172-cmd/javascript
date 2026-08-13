// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

//  myArr.push(6)
//  myArr.push(7)
//  myArr.pop()
//  console.log(myArr);

//  myArr.unshift(9)    // push el at the front
//  myArr.unshift(91)   
//  myArr.shift()      //pop elem at the front

//   console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()    // convert array inot the string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)   //part of array like substring

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)    //it effects the org array , and givve the subtring type but includes the last
console.log("C ", myArr);
console.log(myn2);