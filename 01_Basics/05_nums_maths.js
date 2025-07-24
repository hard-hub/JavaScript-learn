const score = 400;
const balance = new Number(100);

console.log(score);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNum = 123.8966;
console.log(otherNum.toPrecision(4));
console.log(otherNum.toPrecision(5));
console.log(otherNum.toPrecision(3));
console.log(otherNum.toPrecision(2));

const hundreds = 100000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));

console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.6));


console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10)) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);