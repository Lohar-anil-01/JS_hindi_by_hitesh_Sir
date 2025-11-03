// // for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}


/* Ex. of Nested For Loop */
// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} with outer loop ${i}`);
//     } 
// }


/* Nested For Loop Printing Multiplication table from 1 to 10*/
// for (let i = 1; i <= 10; i++) {
//     console.log(`Multiplications table number: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + " * " + j + " = " + i * j);
        
//     } 
// }


/* For Loop on Array */
// let myArray  = ["Flash", "Batman", "Superman", "Bhageera", "Rocky 1952"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(`${index + 1} ${element}`);
// }


/* break and continue keyword */ 

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected ${i}`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected ${i}`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}