const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    cpp: 'C++',
    java: 'Java',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    console.log(`${key} Shortcut is for ${myObject[key]}`);
}


const programmingLanguages = ["JS", "PY", "RB", "CPP", "JAVA", "SWIFT"];
for (const key in programmingLanguages) {
   // console.log(key);  /* output: 0, 1, 2, 3, 4, 5 */
//    console.log(programmingLanguages[key]); /* output: JS, PY, RB, CPP, JAVA, SWIFT */
}

const map = new Map();
map.set('js', 'JavaScript');
map.set('py', 'Python');
map.set('rb', 'Ruby');
map.set('cpp', 'C++');
map.set('java', 'java');
map.set('swift', 'Swift by apple');

/* map is not iterable thing in forin loop*/
// for (const [key] in map) {
//       console.log(key);
// }
