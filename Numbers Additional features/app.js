// Numbers Additional Features
// +=, -=, /=, *=, ++, --, %
// Modeles (%) operater returens the remainder after integer division

let firstNumber = 123;

// we can write like this or 
// firstNumber = firstNumber + 10;
//we can write like this also
firstNumber += 10;
firstNumber -= 10;
firstNumber *= 10;
firstNumber /= 10;
console.log(firstNumber);

let secondNumber = 123;

// we can write like this also
// secondNumber = secondNumber + 1;

// or  we can write like this also
secondNumber ++;
console.log(secondNumber);
secondNumber --;
console.log(secondNumber);
 
//  if we use this / symbole when we get the answer  Quotient
 
let firstNumber1  = 100;
let quotient = firstNumber1 / 2;
console.log(quotient);


// if we use this % symbloe then we get the remainder as the answer


let firstNumber2  = 100;
let remainder = firstNumber2 % 2;
console.log(remainder);

// by using the Precedence it will calculate the value which is having the highest precedence 

let firstNumber3  = 10 + 4 - 10*10;
console.log(firstNumber3);
let secondNumber1 = (10 + 4 - 10) * 10;
console.log(secondNumber1);