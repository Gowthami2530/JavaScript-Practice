// Math Object in js
// standard built-in object - always 


// floor which gives only decimal before value
const number = 25.444444555;
const result = Math.floor(number);
console.log(result);

// ceil which gives only the rounded value
const number1 = 25.444444555;
const result1 = Math.ceil(number1);
console.log(result1);

// sqrt which gives the root value
const number2 = 25;
const result2 = Math.sqrt(number2);
console.log(result2);

// min which gives the least number in the set
const result3 = Math.min(1,2,3,4,5,6,7,8,9);
console.log(result3);

// max which gives the highest number in the set

const number4 = (1,2,3,4,5,6,7,8,9,20);
const result4 = Math.max(number4);
console.log(result4);

// PI which gives the pi value in the math

const result5 = Math.PI;
console.log(result5);

// random which gives the random number

const result6 = Math.random();
console.log(result6);

// for random only we can apply the ceil and floor method 
// floor applyed for random

const result7 = Math.floor(Math.random());
console.log(result7);

// ceil applyed for random

const result8 = Math.ceil(Math.random());
console.log(result8);

const result9 = Math.ceil(Math.random()*10);
console.log(result9);

const result10 = Math.floor(Math.random()*10);
console.log(result10);

const result11 = Math.floor(Math.random()*10) +1;
console.log(result11);



