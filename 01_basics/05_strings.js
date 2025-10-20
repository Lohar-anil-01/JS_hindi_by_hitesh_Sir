const name = "Anil";
const repoCount = 50;

// console.log(name + repoCount + " value");  ////outdated structure

// String Interpolation - inserting variables/expressions directly inside a string — using template literals `inside ${}`

// console.log(`Hello my name is ${name.toUpperCase()}, and my repo count is ${repoCount}`); ////new structure

const gameName = new String("Hitesh-hc");  ////another type of string declaration

// console.log(gameName[0]);
// console.log(gameName[5]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

const newString = gameName.substring(1, 5);
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   Hello Hitesh sir  "
// console.log(newStringOne);
// console.log(newStringOne.trim()); //// str.trim() method Removing the white space

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));
/*str.includes("") returns boolean value is the value is present its true otherwise false*/
// console.log(url.includes("hitesh"));  //true
// console.log(url.includes("anil")); //false

let anotherGameName = ("Anil-kambar-11");  /*Returns array*/

console.log(anotherGameName.split("-"));
console.log(anotherGameName.bold());  /*The bold() method of String values creates a string that embeds this string in a <b> element (<b>str</b>), which causes this string to be displayed as bold.*/

