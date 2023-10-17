let a = [1,2,4,5,7];
let b = [1,2,4,5,7];

x = JSON.stringify(a) == JSON.stringify(b);
console.log(a==b, x,JSON.stringify(a));
JSON.parse(x);   //Here we can see that two arrays with same value is not equal 
