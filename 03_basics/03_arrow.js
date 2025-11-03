const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`);
        console.log(this);
        
    }
}


// user.welcomeMessage();
// user.username = "sammy";
// user.welcomeMessage();

// console.log(this);

/*Context is the set of variables and values your code can use; "current context" means what is available right now where the code runs.*/

// function chai(){
//     let username = "chaitanya";
//     console.log(this.username);
// }

// chai();

// const chai = function(){
// //     let username = "Hitesh";
// //     console.log(this.username);
//     console.log(this);
// }


// const chai = () =>{
//     let username = "Hitesh";
//     console.log(this);
// }

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// };


// Implicit return
// const addTwo = (num1, num2) => num1 + num2; /*In a single line can write implicit return without curly braces and return keyword*/
// const addTwo = (num1, num2) => (num1 + num2);  /* or wrap with parenthesis*/
const addTwo = (num1, num2) => ({username: "hitesh"});  /* returning object literal and object wrap up with parenthesis */

// console.log(addTwo(5, 7));

