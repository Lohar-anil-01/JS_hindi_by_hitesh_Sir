// for of

// ["", "", ""] -> array with group of strings
// [{}, {}, {}] -> array with group of objects

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!";

for (const greet of greetings) {
    // console.log(`Each char is: ${greet}`);
}

/* Maps */ 

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key + " -> " + value);
// }

/* objects */
const myObject = {
    game1: 'NFS',
    game2: 'Spider-Man',
    game3: 'God of War'
}

for (const [key, value] of myObject) {
    console.log(key + " -> " + value);  /* myObject is not iterable in forof loop*/
}

