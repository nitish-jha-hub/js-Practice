flag = 0;
console.log("outside timeout 1st");

// set timeout funtion is best example of how asynchronous function works
setTimeout(() => {
    console.log("inside timeout function 2nd")
}, 11000);

let id1 = setInterval(() => {
    console.log("inside interval");
    flag+=1;
    if (flag == 5) {
        clearInterval()  //we have to give id for which we have to perform operation clearinterval otherwise it will run in infinite times
    }
}, 100);