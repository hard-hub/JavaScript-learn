let a = 100;
const b = 200;
var c = 300;

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log(a, b, c);
    var c = 30;
}

console.log(a);
console.log(b);
console.log(c);


function one() {
    const username = "huehuehue";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    //console.log(website); -- cannot be accessed as out of scope
    
    two();
}
one();


// interesting
// hoisting
console.log(addOne(5)); // can be used here before declaring the function
function addOne(num) {
    return num + 1;
}

//console.log(addTwo(5)); -- can't be used here before declaring the function
const addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(5));
