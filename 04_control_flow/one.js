// if
const isUserLoggedIn = true;

if(2 == "2") {
    console.log("executed");
}
if(2 === "2") {
    console.log("EXECUTED");
}

// if else
const temp = 41;
if(temp < 50)
{
    console.log("<50");
}
else
{
    console.log(">50");
    
}

const score = 200;
if(score > 100) {
    const power = "fly";
    console.log(power);    
}
//console.log(power);

const balance = 1000;
if(balance > 500) console.log("test");


// if elif ladder
if(balance < 1000) console.log("one");
else if(balance < 750) console.log("two");
else if(balance < 500) console.log("three");
else console.log("four");



const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard) {
    console.log("Allowed");
}
if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("Aava de!!");   
}


// switch case
const month = 3;
switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuaray");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Bruh");
        break;
}


// truthy and falsy values
const userEmail = "h@gmail.com";
if(userEmail) {
    console.log("yes");
}
else {
    console.log("no");   
}

/*
falsy values : 
false, 0, -0, 0n(BigInt), "", null, undefined, NaN

truthy values : 
"0", 'false', " ", [], {}, function(){}
*/

// Nullish Coalescing Operator (??): null undefined
let val1, val2, val3, val4;
val1 = 5 ?? 10;
console.log(val1);
val2 = null ?? 10;
console.log(val2);
val3 = undefined ?? 10;
console.log(val3);
val4 = null ?? 10 ?? 20;
console.log(val4);


// terniary operator
// condition ? true : false
const price = 200;
price > 500 ? console.log("price is > 500") : console.log("price is < 500");