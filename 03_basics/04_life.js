/* ######### Immediately Invoked Function Expression (IIFE) ######### */ 

/* #1 Named IIFE*/ 
(function chai(){
    console.log(`DB CONNECTED`);    
})();

/*  we used IIFE to avoid polluting the global scope and to create a private scope for our variables.  */

/* #2 Unnamed IIFE*/ 
((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Anil");

/* 
    When executing multiple IIFEs in sequence, it's crucial to add a semicolon (;) 
    after each IIFE to prevent JavaScript from treating them as a single expression
*/