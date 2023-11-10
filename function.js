// function averagecalculation(a, b) {
//   return (a + b) / 2;
// }

// avg1 = averagecalculation(14, 10);
// avg2 = averagecalculation(44, 7);
// console.log(avg1);
// console.log(avg2);


// let a = function helloworld(){
//   console.log("hello world", 2*2+2)
// }

//call by function name follwed by paranthasis
// helloworld();
// if function is defined in a variable then it will be called by its variable name followed by paranthasis
// a();

// A self-invoking function is a function that is executed immediately after it is defined. Here is an example of a self-invoking / auto run function: it may have name or may not
// (function () {
//   console.log("hello world unNamed function", 2 * 2 +1)
// })();

// (function helloworldfname() {
//   console.log("hello world Named Function")
// })();

//call back function
function myFunction(callback) {
  console.log("first main fuction is executed !");
  callback();
}

function myCallback() {
  console.log("The work is done!");
}

myFunction(myCallback);
