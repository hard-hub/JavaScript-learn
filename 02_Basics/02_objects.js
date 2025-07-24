// singleton

// symbol
const mySymbol = Symbol("key1");

// literal way of creating an object
const user = {
    name: "Hard",
    "full name": "hard tilwani", // this is th reason that the . operator is not a good way
    [mySymbol]: "key2",
    age: 18,
    location: "Jaipur",
    email: "h@gmail.com",
    isLoggedIn: false,
    lastLognDays: ["Monday", "Saturday"]
}

console.log(user.email); // bad way to access 
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mySymbol]);

user.email = "a@gmail.com";
// Object.freeze(user);
user.age = 22;

console.log(user["email"]);
console.log(user["age"]);

user.greeting = function() {
    console.log("Hello there!");
}
user.greetingTwo = function() {
    console.log(`Hello ${this.name}`);
}

console.log(user.greeting);
console.log(user.greeting());
console.log(user.greetingTwo());

// objects created using constructor
const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Samay";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Samay",
            lastName: "Raina"
        }
    }
};

// console.log(regularUser[fullName[userFullName[firstName]]]);
// objects inside an object can be accessed with . operator only
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1: "a",
    2: "b"
};
const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = {obj1, obj2};
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

const obj5 = {...obj1, ...obj2};
console.log(obj5);

console.log(Object.keys(tinderUser)); // used a lot 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "angular js",
    price: "999",
    courseInstructor: "ajay sir"
}

const {courseInstructor: instructor} = course;
// console.log(courseInstructor);
console.log(instructor);


// {
//     "name": "hard",
//     "coursename": "js react",
//     "price": "free"
// }
