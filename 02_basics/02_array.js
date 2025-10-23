const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// let all_heroes = marvel_heros.concat(dc_heros);
// console.log(all_heroes);

const all_new_heroes = [...marvel_heros, ...dc_heros];
// console.log(all_new_heroes);

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_Array.flat(Infinity)
console.log(real_another_array);


// console.log(Array.isArray("Hitesh")); /*false*/
// console.log(Array.isArray(["H", "i", "t", "e", "s", "h"])); /*true*/
// console.log(Array.from("Hitesh")); /*MAking array*/
// console.log(Array.from({name: "Hitesh"})); /*Interesting return empty array*/

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
