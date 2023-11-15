// Object Concept
// Arrays, Functions and Objects
// objects-key/value pairs,Methods
// dot notation

let person = {
    firstName : "Gowthami",
    lastName : "Akula",
    age:23,
    eductionDetails : "Post-gradution",
    email: "Yes",
    married: false,
    friends:["supriya","Vashu","Mounika"],
    greeting:function(){
        console.log("Heyyy Gowthami!!!");
    }
    
}
console.log(person);
// if we want to access only one object 
// by using the dot notation we can access only one object

console.log(person.eductionDetails);
console.log(person.email);
person.greeting();