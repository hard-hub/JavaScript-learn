const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hardhero"); 
console.log(gameName);
console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-7, 2);
console.log(anotherString);
