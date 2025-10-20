// # Stack (Primitive) and Heap (Non-Primitive) Memories

/*Stack examples*/ 
let myInsatName = "anilagastya_112";

let anotherName = myInsatName;
anotherName = "anilkambar_01"

console.log(myInsatName);
console.log(anotherName);

/*It give a copy not original reference so whenever change in another variable the original one not changed*/ 

/*Heap examples*/

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
};

let user2 = user1;

user2.email = "HiteshGurugi@chai.com";

console.log(user1.email);
console.log(user2.email);

/* It granted that their to access reference so whanever we change in another variable its also dynamically changed in Original*/ 

