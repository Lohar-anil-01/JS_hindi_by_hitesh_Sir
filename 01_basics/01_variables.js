const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Pune"; 
let accountState;

// accountId = 2 // // TypeError: Can't reassign a new value to a constant variable

accountEmail = "hc@hdfc.com";
accountPassword = "2122121221"
accountCity = "Jaipur";

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);

/* 
prefer not to use var
because of issue in block scope and finctional scope
*/ 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

