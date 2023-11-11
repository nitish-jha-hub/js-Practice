// Here’s an example of restructuring an object using destructuring:
// const person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
// const {firstName, lastName} = person;
// const newPerson = {name: `${firstName} ${lastName}`, age: person.age, eyeColor: person.eyeColor};

// Here’s another example of restructuring an object using object spreading:
const person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
const newPerson = {...person, name: `${person.firstName} ${person.lastName}`};
delete newPerson.firstName;
delete newPerson.lastName;
console.log(person,newPerson)
