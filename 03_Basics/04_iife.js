// named IIFE
(function chai() {
    console.log("DB CONNECTED");
})();

// simple IIFE
(() => {
    console.log("DB CONNECTED TWO");
})();

((name) => {
    console.log(`Username : ${name}`);
})('huehue')