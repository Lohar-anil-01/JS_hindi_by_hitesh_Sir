// array

const myArr = [1, 2, 3, 4, 5];

const myHeros = ["Shaktiman", "Naagraj"];

const myArr2 = new Array(1, 2, 3, 4, 5);  /* Another type of defining array */

// console.log(myArr2[0]);

/* Array methods */ 
// myArr.push(6); /*push(): Adding array element at last */
// myArr.push(7); 
// myArr.pop() /*pop(): Removing array element from last*/

// myArr.unshift(9); /*unshift(): Adding arrays element to the starting */
// myArr.shift(); /*shift(): removing arrays element to the starting */

// console.log(myArr.includes(0));
// console.log(myArr.includes(1));
// console.log(myArr.indexOf(1));

// let newArr = myArr.join();

// console.log(typeof newArr);

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);

console.log("B ", myArr);

let myn2 = myArr.splice(1, 3)
console.log(myn2);

console.log("C ", myArr);

