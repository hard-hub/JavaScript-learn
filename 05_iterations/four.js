// for in
const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// for in works with objects
for (const key in myObj) {
    console.log(key);
    console.log(myObj[key]);
}

const programming = ['js', 'ruby', 'cpp', 'swift'];
// for in works with arrays as well
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}