let score = "anil";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

/* Type conversion to number */
// "33" => 33 type number, "33abc" => NaN type number
// true => 1 type number, and false => 0 type number
// null => 0 type number, and undefined => NaN type number

// To Boolean

let isLoggedIn = "Anil";
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true and 0 => false
// "" => false and "Hitesh Sir" => true

/* 
In Boolean logic, all numbers are true except 0.
All strings are true in  Boolean logic, except for the empty stringg "".
*/ 

let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);
