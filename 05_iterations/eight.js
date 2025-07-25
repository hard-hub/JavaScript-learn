// reduce -- used in shopping carts and billings
const myNums = [1, 2, 3];
const myTotal = myNums.reduce((acc, currVal) => {
    return acc + currVal;
});
console.log(myNums);
console.log(myTotal);

// practice
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "flutter course",
        price: 5999
    },
    {
        itemName: "ds course",
        price: 12999
    }
];
const totalPrice = shoppingCart.reduce((acc, currItem) => {
    return (acc + currItem.price);
}, 0);
console.log(totalPrice);
// check this codes out
// const totalPrice = shoppingCart.reduce((acc, currItem) => {
//     return (acc + currItem.price);
// }, null);
// console.log(totalPrice);
// const totalPrice = shoppingCart.reduce((acc, currItem) => {
//     return (acc + currItem.price);
// }, undefined);
// console.log(totalPrice);