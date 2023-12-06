// Global Scope 
// Global variables are used outside of the code block {}
// Global variable are used any where in the program
// If we chanage the variable name it will change the original value of the variable
// Gotchas - are name Collision , modify my mistake

let firstName = "Gowthami";
console.log(firstName);
firstName = "Akula"
console.log(firstName);

function calu(){
    console.log(firstName);
    firstName = "grape";
}
calu();

if(true){
    console.log(firstName);
    firstName = "BlueBarry"
}

console.log(`hey it is fruit name  is ${firstName}`);