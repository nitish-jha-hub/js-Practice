flag = 0;
console.log("outside timeout 1st");

setTimeout(() => {
    console.log("inside timeout function 2nd")
}, 11000);

let id = setInterval(() => {
    console.log("inside interval");
    flag+=1;
    if (flag == 5) {
        clearInterval(id)  //we have to give id for which we have to perform operation clearinterval
    }
}, 1000);