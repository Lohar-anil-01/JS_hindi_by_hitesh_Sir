const userEmail = "h@hitesh.ai";

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");   
// }

// falsy values: false, 0, -0, BigInt(0), "", null, undefined, NaN

// truthy values: everything that is not falsy 
// also consider these as truthy values: "0", "false", " ", [], {}, function(){}

/* checking array and object emptiness */
let arr = [];

if (arr.length === 0) {
    // console.log("Array is empty");
};

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    // console.log("Object is empty");
}

/* false === 0 result = false */
/* false == 0 result = true */
/* false == "" result = true */
/* 0 == "" result = true */


// Nullish Coalescing Operator (??) : null or undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15 ?? 20;

// console.log(val1);

// Ternary Operator
// Syntax - condition ? true: false;

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");
