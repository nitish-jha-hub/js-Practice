a = Date();   //date time localtime
let b = Date.now();  //return timestamp
let c = new Date(a);  
let d = c.toLocaleDateString('en-in');
let e = c.toLocaleTimeString();  //convert time to am/pm format

console.log(`a= ${a},b= ${b},c= ${c},d= ${d},e= ${e}`);