// for of
const myArray = [1, 2, 3, 4, 5];
for (const element of myArray) {
    console.log(element);
}
const greetings = "Hello world!";
for (const element of greetings) {
    if(element == " ") {
        continue;
    }
    console.log(element);
}


// Maps
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map);

// map have unique values and it is stored in order the way it is inserted
map.set('IN', "India")
map.set('IN', "India")
console.log(map);

for(const [key, value] of map) {
    console.log(key, '::', value);
}
// this won't work either, wtf is a map.?
// for (const element of map.entries()) {
//     console.log(element.keys(), element.values());
// }
// this also doesn't work, map is not iterable
// for (const key in object) {
//    console.log(key);
// }



const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// this also won't work
// for (const element of myObj) {
//     console.log(myObj[element]);  
// }
// this doesn't work, the object is not iterable. why.? and how to make it iterable then.?
// for (const [key, value] of myObj) {
//     console.log(key, "::", value);
// }