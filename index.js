const classstudent = [10, 8, 4, 3, "Nitish"]; //array
// console.log(8 + 4 + " " + classstudent[0] + " AudioDestinationNode")  //mathematical operation + space + data fatch from array + string combination print
// console.log(classstudent[4])
console.log(classstudent.length); //calculate length of an array

// object in js key value pairs

let a = {
  name: "Nitish",
  "age": "25"           //keys can be written in double quotes but not necessary
};  //this is javascript object i.e: non primitive data type
console.log(a.age);
console.log(a["name"])   // fatch data from js object also called dictionary in python.

console.log(Object.keys(a)); //will return array of all keys in objet a

console.log(typeof(a));
console.log(typeof(classstudent));
console.log(classstudent);

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
