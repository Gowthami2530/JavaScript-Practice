// Array Properties and Methods

let fruitName = ["Apple","Mango","Banana","PineApple"];

console.log(fruitName);
// length

console.log(fruitName.length);
console.log(fruitName[1]);
console.log(fruitName[fruitName.length-1]);

// concat
// This method is used to combain the two array as a single array and used to create a new array

let firstName = ["Emma","Ron","Cat"];
let allNames = fruitName.concat(firstName);
console.log(allNames);

// reverse
// This method is used to reverse the array elements 
console.log(allNames.reverse());

// push 
// This method is used to add the elements from the  backside  of the array

allNames.push("Goat","Tree");
console.log(allNames);

// pop 
// This method is used to remove the elements from the backside of the array

allNames.pop();
console.log(allNames);

// unshift
// This method is used to add the  elements from frontside of the array 

allNames.unshift(1,2,3);
console.log(allNames);

// shift
// This mentod is used to remove the elements from frontside of the array

allNames.shift();
allNames.shift();
console.log(allNames);

