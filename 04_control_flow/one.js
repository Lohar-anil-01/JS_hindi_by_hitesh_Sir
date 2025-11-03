// if
//     /* if condition true */
// if(condition) {
//     /* the code to be executed */
// }

//     /* if condition false */
// if(condition) {
//     /* the code never executed */
// }

/* comparisons > greater than, < lesser than, >= greater than or equal to <= lesser than or equal to, == equal to, != equal to, === type checker with equality (strict equality), !== strict not equal */

// const temperature = 41;

// if( temperature === 40){
//     console.log(`Temperature is less than 50`);
// } else {
//     console.log(`Temperature is greater than 50`);
// }

// console.log("Executed");

// const score = 200;

// if (score > 100) {
//     const power = "fly";
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);  /*Unexpected identifier 'power' cause out of scope*/


/*Implicit scope of if statement in one line*/ 
// const balance = 1000;

// if (balance > 500) console.log(`Balance is greater than 500`);
/*if (balance > 500) console.log(`Balance is greater than 500`), console.log(`Balance is less than 1000`); not a good practice*/ 

// const balance = 1000;

// if (balance < 500){
//     console.log("Less than 500");
// } else if(balance < 750){
//     console.log("Less than 750");
// } else if (balance < 900){
//     console.log("Less than 900");
// } else {
//     // console.log("Balance is less than 1200");
//     console.log("Balance is greater than 900");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


if (userLoggedIn && debitCard && 2 == 3) {
    console.log("You can make a purchase");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}