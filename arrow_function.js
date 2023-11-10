// const greet=()=>{
//     return "good morning"
// }

// //single liner doesn't required curly bracket and need not to write return
// const add = (a,b) => a*b

// // doesn't required paranthasis if we have only one arguments
// const greet_name = name => {
//     return `good morning ${name}`    //template letrals
// }

// console.log(add(2,3),greet(),greet_name("nitish"));

// let b = a => console.log(a)
// b(15)

// self invoke/ auto run function just after declaration
a = 11;
b=3;
((x,y) => {
    b=x*y;
    console.log("Hello,World",b)
})(a,b);
