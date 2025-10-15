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

// ****************************** Operations ****************************** //

let value = 3;
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1"+ 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3 + 3) * 5 % 3);

// console.log(+true); // don't use like this in real world production project
// console.log(++true);  /*  Invalid left-hand side expression in prefix operation */
// console.log(true+); /* Unexpected token ')' */

// console.log(+""); // don't use like this in real world production project

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2;
// console.log(num1);
// console.log(num2);
// console.log(num3);


gameCounter = 100
gameCounter ++
console.log(gameCounter);