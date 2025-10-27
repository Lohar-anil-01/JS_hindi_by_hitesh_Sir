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
