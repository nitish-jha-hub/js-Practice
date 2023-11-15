let a=[2, 3, 4, 5, 6];
b="sdsds"
console.log(a);

// access array elements
// console.log(a[0]);
// js does not suppert -ve indexing to access elements for -ve indexing we can use array.at(-1) method
// console.log(a[-1]);
// console.log(a.at(-1));


// console.log(typeof(a[0]));
console.log(typeof(a), Array.isArray(a));    //why it shows object instead of an array

// aray methods

// add value at last index
// a.push(7);
// remove last element
// a.pop();
// add at first index i.e: 0th index
// a.unshift(1);
// remove 1st element and shift all left
// a.shift();
// remove all value except filter  // error
// a.filter(6);
// replace value at all occurance //error
// a.map((2) => 9)
// get all array value as a string with join used seprator
// let x = a.join("-");
// console.log(a,a.length,x,typeof(x));
// join two added in one array and create 3rd array
// let c = a.concat([7,8,9]);
// console.log(a,a.length,c);
// merger array inside array i.e nested array in single array and return new aray
// let na = [1,2,3,[9,8,7]];
// let naf = na.flat()
// console.log(na,na.length,naf);
// copy some data from array by index value
// let sl = a.slice(1,3)
// console.log(a,sl);
// array to string
// let str = a.toString();
// console.log(str)

//convert array to string and vice versa
// let x = a.join("-");
// console.log(x,typeof(x));
// let y = x.split("-");
// console.log(y,typeof(y),y[3])