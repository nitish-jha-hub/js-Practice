const Nitish = {
    'name' : "Nitish",
    "age" : 26,
    surname : "Jha"
}

// //we can access element using dot and also square bracket
// console.log(Nitish.age);  
// console.log(Nitish['age']);

// //add elements in a object
// Nitish.middlename = 'kumar'
// Nitish['favoritegame'] = "pubg"
// console.log(Nitish);

// //Checking if a properties / key exists or not in object
// if("age" in Nitish){
//     console.log("age Exits in nitish");
// }

// Object method // write function in an object as a key value pair
// let car = {
//     make : "Toyota",
//     model : "Rajdoot",
//     start : function (){
//         console.log("Engine start");
//         return 1;
//     },
//     stop : function (){
//         console.log("Engine Stop");
//     },
//     batteryLow : ()=>{
//         console.log("Battery low");
//     },
// };
// console.log(car.start());
// car.start();
// delete car.model;
// console.log(car);

// print all keys through Object.keys method and iterate though for of loop to get key and values // array method
// const keys = Object.keys(car);
// console.log(keys)
// for (let key of keys){
//     console.log(`${key} : ${car[key]}`)
// }

// access object data through for in loop // for in loop works with object// key value pairs
// for(let key in car){
//     console.log(`${key} : ${car[key]}`)
// }

// Object destructuring // easy but important and usefull concept
// let { model , make } = car;
// console.log(model,make);


let name = "Nitish1";
let email = "nitishjha@hotmail.com";
let phone = 9798305771;
let roll = 26;
let section = "D";
let gender = "Male";
let password = "89+89Wdfd#@$#";

const data = {name, email, phone, roll, section, gender, password};
console.log(data,typeof(data));

// object spread (ES6) //concat two oject //replace value with later ones if any key is same
const updatedUser = {...data,...Nitish}
console.log(updatedUser);