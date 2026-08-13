// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

 console.log(JsUser.email)
 console.log(JsUser["email"])
 console.log(JsUser["full name"])  
// console.log(JsUser.full name)   // y glt h 

 console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
 console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   // 'this' refers to the object that calls the method.
// Use 'this' inside an object's method to access that object's properties.

}

JsUser.greeting()
console.log(JsUser.greetingTwo());

    console.log(JsUser);
    

