// Function Expression
// Arrays,functions and Objects
// expressions - another way to define a function
// create a variab;le,assign to function (not value),use variable
// diff - hosting, use-arrow function and libraries.



function calculate(num1,num2){
    return num1 + num2;
}
let firstNumber = calculate(5,5);
let secondNumber = calculate(25,25);

// function expression can be written as

let add = function(num1,num2){
    return num1+num2;
}
// we can write like this
//let thirdNumber = add(100,200);
//let result = [firstNumber,secondNumber,thirdNumber];
// we can write like this
let result = [firstNumber,secondNumber,add(100,200)];
console.log(result);


