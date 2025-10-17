/* # JS is a Dynamic Language there is no need to specify data types when declaring variables */

/* # Primitive: 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt */
const score = 100                     // Number (type of score is number)
const scoreValue = 100.5              // Number (type of scoreValue is number)

const isLoggedIn = false;            // Boolean (type of isLoggedIn is boolean)
const outsideTemp = null;             // Null (type of outsideTemp is object {null is a primitive, but typeof null === "object"})
let userEmail;                        // Undefined (type of userEmail is undefined)

const uniqueID = Symbol('id');        // Symbol (type of uniqueID is symbol)
const uniqueID1 = Symbol('123');        // Symbol (type of uniqueID1 is symbol)
const uniqueID2 = Symbol('123');        // Symbol (type of uniqueID2 is symbol)

// console.table({uniqueID, uniqueID1, uniqueID2});
// console.log(uniqueID1 === uniqueID2); // false

// const bigIntValue = 123456789012345678901234567890n; // BigInt


/* # Reference(Non-Primitive) : Array, Objects, Functions */

const heros = ['Shaktiman', 'Naagraj', 'Doga']; // Array
// console.log(typeof heros); // object

let myObj = {
    name: "Anil",
    age: 23,
};   // Object

const myFunction = function () {
    console.log("Hello World");
}; // Variable type Function


console.log(typeof uniqueID);