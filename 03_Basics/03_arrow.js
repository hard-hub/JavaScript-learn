const user = {
    username: "huehue",
    price: 299,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }
}
user.welcomeMessage();
user.username = "hard";
user.welcomeMessage();

console.log(this);

function chai() {
    let username = "huehuehue";
    console.log(this);  
    console.log(this.username); // why is this undefined here.?
}
chai();

const chaiOne = function() {
    let username = "huehuehue";
    console.log(this);  
    console.log(this.username); 
}
chaiOne();

const chaiTwo = () => {
    let username = "huehuehue";
    console.log(this);  
    console.log(this.username); 
}
chaiTwo();

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(2, 2));

const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(2, 2, 2));
