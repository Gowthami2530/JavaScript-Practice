//  String Concatination  - combine String Values
// '' - backticks (template strings) easier option.

const firstName ="Gowthami";
const lastName = "Akula";
let fullName = firstName + " " + lastName;

console.log("My full name is:" + firstName + lastName);
// if we want the space between the words we need to keep the (" ") 
console.log("My full name is:" + firstName +" " + lastName);
console.log("My full name is:" + fullName);

let website = "google";
let url = "https://www." + website + ".com";
console.log(url);
