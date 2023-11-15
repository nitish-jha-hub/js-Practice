let a = "Apple, Banana, Kiwi";
console.log(a.substring(7,-4)); 
// -ve indexing is not suppored in js substring string method. 
// Since the ending index is negative, it is treated as 0, 
// which means that the method extracts the substring from index 7 to index 0.  
// still we can use string slice method to use -ve indexing method like
console.log(a.slice(7,-4))
console.log(a)
