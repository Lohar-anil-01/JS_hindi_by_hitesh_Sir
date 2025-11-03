/* ############# Local Scope  and Global Scope ############# */ 
// var c = 300
let a = 300; // Global Scope

if (true) {
    let a = 10; // Local Scope
    const b = 20; // Local Scope
    // console.log("Inner/local Scope:", a);
    
}

// console.log("Outer/global Scope:", a);
// console.log(b);
// console.log(c);

// var is not to be used because its not able to maintain either local scope or global scope and it creates confusion.
// var is redeclarable and mutable. Hence avoid using var.


// continue...
function one(){
    const username = "hitesh";

    function two(){
        const website = "learncodeonline.in";
        console.log(username);
    }
    // console.log(website);

    // two();
}

// one();

if (true) {
    const username = "hitesh";
    
    if (username === "hitesh") {
        const website = " Youtube";
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);

/* ############# Interesting ############# */

console.log(addOne(5));

function addOne(num){
    return num + 1;
}


addTwo(5); /*not access because its a Function expression*/

const addTwo = function(num){
    return num + 2;
}
