let score = undefined;

console.log(typeof score);
console.log(score);

let valueinNum = Number(score);

console.log(typeof valueinNum);
console.log(valueinNum);

// 33 --> 33
// a string value converted to number gives NaN 33abc --> NaN
// a null value converted to number gives 0 null --> 0  
// a undefined value converted to number gives NaN

let str1 = "hello";
let str2 = " hard";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log((3 + 4) * 5 % 3);

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id == anotherId);
console.log(id);
console.log(anotherId);  