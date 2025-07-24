let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

console.log(new Date(2023, 0, 5).toLocaleString());
console.log(new Date(2023, 0, 5, 3, 7).toLocaleString());
let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleDateString());
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));