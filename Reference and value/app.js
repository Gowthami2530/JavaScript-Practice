// Reference vs Value
// primitive data type are
// string,Number,Boolean,Undefined,Null,Symbol.
// non primitive data type are 
// object,functions,array

// when we assigine the value to primitive data type the value  to  a variable any changes are made to the value ,
// and it doesnot effect the original value.

let number1 = 25;
let number2 = number1;
number2 = 30;
console.log(number1);
console.log(number2);

// when we assigine the value to the non-primitive data type the value to the variable any changes are made to the value, 
// and it  effect the original value.

let name1 = {name:"Gowthami"};
let name2 = name1;
// let name2 = {...name1}; if we keep the 3 dots that means it will take as a reference in ES6 e take as 3 dots 
name2.name="Akula"
console.log(`hey this is ${name1.name}`);
console.log(`hey this is ${name2.name}`);