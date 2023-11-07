let array = [5,10,15,25,15,27,28,35,40];
// let element = parseInt(prompt("enter value"));  //prompt function only work in browser not for node js
let element = 15;
let flag = 0;
for (let index = 0; index < array.length; index++) {
    if (element == array[index]) {
        console.log(`element found at ${index}`);
        flag +=1;
        break;
    }   
}
if (!flag) {
    console.log(flag)
    console.log("no value fount in this array");
}