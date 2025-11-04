const coding = ["js", "py", "rb", "cpp", "java", "swift"];

/* Higher order arrays means applying a function to each element */
/* not used function name in forEach loop using expression and arrow function without name */ 

/* function expression with forEach */ 
// coding.forEach(function(val){
//     console.log(val);
// })

/* arrow function with forEach */
// coding.forEach( (item) => {
//     console.log(item)
// });

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// });

 const myCoding = [
    {
        languageName: 'JavaScript',
        languageFile: 'js'
    },

    {
        languageName: 'java',
        languageFile: 'java'
    },

    {
        languageName: 'python',
        languageFile: 'py'
    },

    {
        languageName: 'ruby',
        languageFile: 'rb'
    },
 ]

/* forEach with array of objects */

// myCoding.forEach( (item) => {
//     console.log(item.languageName, "=>", item.languageFile);
// })
