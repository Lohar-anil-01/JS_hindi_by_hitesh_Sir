// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());

// console.log(typeof myDate);  //object

// let myCreatedDate1 = new Date(2025, 1, 17);
// let myCreatedDate2 = new Date(2025, 0, 23, 5, 3);
// let myCreatedDate3 = new Date("2025-01-14");
let myCreatedDate4 = new Date("01-01-2025");
// console.log(myCreatedDate4.toDateString());
// console.log(myCreatedDate4.toLocaleDateString());

// Time
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getHours());
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());


console.log(newDate.toLocaleDateString('en-IN', {weekday: "long"}));
