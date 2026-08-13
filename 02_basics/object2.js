// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

Object.assign(obj1 , obj2);      // assign obj2 in obj1
console.log(obj1);

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)    // assign obj1 , obj2 , obj 4 in {} as object 3

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [      // the data returned by the data base is in the form of the array of objects // jyst to make aware 
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const user = {      //destructing 
    id: 1,
    name: "Priyanshu",
    age: 19,
    email: "abc@gmail.com",
    city: "Pune",
    phone: "1234567890",
    
};

// course.courseInstructor

const {id, name , age , email} = user
  

console.log(name);   //nop need to write user.name , it make tii write shortly
console.log(id);
console.log(age);



// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
