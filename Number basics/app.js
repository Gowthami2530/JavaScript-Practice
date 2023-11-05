// Numbers Basics
// Loosely Typed = Does not depended on the datatype

const firstNumber = 123;
let secondNumber = 2.55;
// secondNumber = "Gowthami"; 
console.log(firstNumber);
console.log(secondNumber);

// if we write the number in the double quotation ("") then it will take the compailer as string
let thirdNumber = "12345";
console.log( thirdNumber);

// we can use the operater also

let add = firstNumber + secondNumber;
let sum = firstNumber - secondNumber;
let multi = firstNumber * secondNumber;
let div = firstNumber / secondNumber;
console.log(add);
console.log(sum);
console.log(multi);
console.log(div);

// if we use the operater with the string and  number then it will give the result with combine of the number and string but it will not give the calculated value

let stringAdd = firstNumber + thirdNumber;
console.log(stringAdd);