function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2;
}

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    } 
    return `${username} was just logged in`;
    
    
}

console.log(loginUserMessage("Hitesh Sir"));
// console.log(loginUserMessage("")); /*returned empty space*/
// console.log(loginUserMessage());  /*returned undefined*/


/* ########## passing objects and arrays as argument in function ##########*/ 
function calculateCartPrice(price1, price2, ...prices){
    return prices
    // return price1, price2, prices /*Not getting any output*/
}

// console.log(calculateCartPrice(200, 400, 6000, 500, 800));

const user = {
    username : "Anil",
    prices: 199,
}

function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price:399
})

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));

