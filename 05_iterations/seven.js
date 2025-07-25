const myNumbers = [1, 2, 3, 4, 5, 6, 7];

let newNums = myNumbers.map((num) => num + 10);
console.log(myNumbers);
console.log(newNums);

const otherNums = [];
myNumbers.forEach((num) => {
    otherNums.push(num * 10);
});
console.log(otherNums);

// chaining
newNums = myNumbers
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num) => num > 40);
console.log(newNums);
