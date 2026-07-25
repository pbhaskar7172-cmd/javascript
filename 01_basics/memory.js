
//there are twoo types of memories stack and heap
//stack is used for the primitives and heap is used for the non primitives

let a = 10;    // a is created in the stack memory
let b = a;      // b is createed in the stack memory but alng with that copy of a is created in the stack , that copy value is given to the b :::: therefore there are total three stack memoryaboj are created 

b = 20;

console.log(a);     //  original remains same as copy was created
console.log(b);      // changes value;


// Heap is used for non-primitive data types (Object, Array, Function)

let user1 = {
    name: "Priyanshu",
    age: 19
};      // Object is created in Heap memory
        // user1 variable is created in Stack memory
        // user1 stores the reference (address) of the object

let user2 = user1;   // user2 is created in Stack memory
                     // NO copy of the object is created
                     // user2 gets the same reference as user1

user2.age = 20;
 
console.log(user1.age);   // 20
console.log(user2.age);   // 20   

// STACK                      HEAP

// user1  -------\
//                \
//                 ---------> {
// user2  -------/             name: "Priyanshu",
//                             age: 19
//                           }



// Arrays are non-primitive
// The array is created in Heap memory

let arr1 = [10, 20, 30];   // Array is created in Heap
                           // arr1 is created in Stack and stores
                           // the reference (address) of the array

let arr2 = arr1;           // arr2 is created in Stack
                           // No copy of the array is created
                           // arr2 gets the same reference

arr2[0] = 100;

console.log(arr1);   // [100, 20, 30]
console.log(arr2);   // [100, 20, 30]