// Singleton
// Object.create  /*defining of singleton js object*/

// object literals 

const mySym = Symbol("key1");
// console.log(mySym);  /* return Symbol(key1)*/
// console.log(typeof mySym); /* return symbol*/


const jsUser = {  
    name: "Anil",
    "full name": "Anil Kambar",
    [mySym]: "mykey1",
    age : 14,
    location: "Pune",
    email: "anil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Satuarday"]
} /*defining of literals js object*/

// console.log(jsUser.name);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.full name); /*when object keys define with string its not access with dot notation only through square brackect[""]*/
// console.log(jsUser["full name"]);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]); /* return mykey1*/
// console.log(typeof jsUser[mySym]); /* return string but key type is Symbol when full object is print the key is like [Symbol(key1)] and value is 'mykey1'*/

jsUser.email = "anil@chatgpt.com"

// console.log(jsUser.email);
// Object.freeze(jsUser);  /* obj.freeze() makes objjects immutable can't change values in the object like add/delete */
// jsUser.email = "anil@microsoft.com"
// console.log(jsUser.email);
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`);  /*this keyword is used to reference the same object*/
}

// console.log(jsUser.greeting);  /* returns fuction reference */
// console.log(jsUser.greeting()); /* excute the function here */
// console.log(jsUser);
console.log(jsUser.greetingtwo());






