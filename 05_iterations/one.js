// for

for (let i = 0; i < 10; i++) {    
    if(i == 5) {
        console.log(`${i} is the best number.`);
    }
    console.log(i);
}

for(let i = 0; i <= 10; i++) {
    console.log(`Outer Loop value : ${i}`);
    for(let j = 0; j <= 10; j++) {
        console.log(`Inner Loop value : ${j} and ${i}`);
    }
}


const myArray = ["flash", "batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}

// break & continue
for(let i = 0; i <= 20; i++) {
    if(i == 5) {
        console.log(`${i} is detected`);
        continue;
    }
    console.log(`Value of i is ${i}`); 
}