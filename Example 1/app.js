// Array and for loop
// In this example we need to combain the firstname and lastname of the person in array 

let firstName = ["Emma","Ran","Danail","Gowthami"];
let lastName = ["Akula"];
let newArray = [];

// Now we are using the for loop
// for(intilization,condition,increment/decrement)
for(let i=0; i<firstName.length; i++){
    // console.log(i);
    // console.log(firstName[i]);
// we can write like this by creating the new variable and push into newarray 
   let fullName = `${firstName[i]} ${lastName}`;
   newArray.push(fullName);
// or we can write like this 
//   newArray.push(`${firstName[i]} ${lastName}`);
}
console.log(firstName);
console.log(newArray);