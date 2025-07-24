const myArr = [0, 1, 2, true, "hhh"];
const myHeros = ["ironman", "batman", "spiderman"];
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[2]);
console.log(myHeros[0]);

myArr.push(6);
myArr.push(6);
myArr.pop();
console.log(myArr);

myArr.unshift(10);
myArr.shift();
myArr.shift();
console.log(myArr);
console.log(myArr.includes(3));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf('hhh'));

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


console.log("A ", myArr);
const mynewArr1 = myArr.slice(1, 3);
console.log(mynewArr1);
console.log("B ", myArr);

const mynewArr2 = myArr.splice(1, 3);
console.log(mynewArr2);
console.log("C ", myArr);


const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

marvelHeros.push(dcHeros);
console.log(marvelHeros);
console.log(marvelHeros[3][1]);

const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);
console.log(allHeros[3][1]);

const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros);


const anotherArr = [1, 2, 3, 4, [4, 5], 6, 7, [1, [2, 3]]];
const usableArr = anotherArr.flat(Infinity);
console.log(anotherArr);
console.log(usableArr);


console.log(Array.isArray("hard"));
console.log(Array.from("hard"));
console.log(Array.from({name: "hard"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));