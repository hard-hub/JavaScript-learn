function sayMyName() {
    console.log("hello");
}

sayMyName();

function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(result);
    return result
}

addTwoNumbers(1, 2);
addTwoNumbers(1, "2");
addTwoNumbers(1, null);
let result = addTwoNumbers(2, 3);
console.log("result", result);


function loginUserMessage(username = "mf") {
    if(!username)
    {
        console.log("Please enter username");
        return 
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("hard"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());


// rest operator
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCartPrice(2, 3, 4, 'hard'));

const user = {
    username: "hard",
    prices: 299
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}
handleObject(user);
handleObject({
    username: "huehue",
    price: 399
})

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
    return getArray[2];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));