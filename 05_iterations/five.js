// how to loop through an array -- different ways to do it
const coding = ["js", "ruby", "java", "python"];

// first way
coding.forEach( function (item) {
    console.log(item);
})

// second way -- arrow function
coding.forEach( (item) => {
    console.log(item);
})

// third way -- calling an outside function
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe); // here you have to give the reference of the function, rather than execute it

// you can pass more than one parameter in the function 
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

// objects inside an array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];
myCoding.forEach((item) => {
    console.log(item.languageFileName);
})
myCoding.forEach((item) => {
    console.log(item.languageName);
})