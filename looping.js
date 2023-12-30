arr = [121,8,88,18,98,108];
obj = {
    Name : "Nitish",
    LastName : "Jha",
    Age : 26
};
arr1 =[{name:'Nitish'},{name:'champak'},{name:'jha'}]

// for in loop
// for (let i in arr){
//     console.log(i);
// };

// for(let j in obj){
//     console.log(j);
// };

// for of loop
// console.log(arr)
// for (let data of arr){
//     console.log(data+1);
// };
// console.log(arr)

// not valid for object
// for (let data of obj){
//     console.log(data)
// };

// forEach loop 
arr.forEach(element => {
   console.log(element+1) 
});


// map() //no change in original array //return new array
// console.log(arr1)
// arr1.map((v,i)=>{
//     console.log(v.name+1,i)
// });
// console.log(arr1)

//for loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
