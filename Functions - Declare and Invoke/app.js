//Functions concept
// functions - Declare,Invoke

// Functions will we used when we have same code again and again we will use the function concept

// suppose if we are have the code 

// console.log("Hello how are You ?");
// console.log("Hey are you there ?");
// console.log("Hey I'm Here! ?");
//some code here

// console.log("Hello how are You ?");
// console.log("Hey are you there ?");
// console.log("Hey I'm Here! ?");
//some code here

// console.log("Hello how are You ?");
// console.log("Hey are you there ?");
// console.log("Hey I'm Here! ?");

// Now by using the function we are write the code and 
//we can use the samecode in many time instead of writing the same code again and again we can call the function when ever we need the same code 

function hello(){
    console.log("Hello how are You ?");
    console.log("Hey are you there ?");
    console.log("Hey I'm Here! ?");
}

//now we are invoke the function
hello();

// Function having the parameters and arguments 

// parameters are when we write the variables in the functions are called parameters 

function greet(name ,study) {
    console.log("Hello" + " "+name+" "+study);  
}
// Arguments are when we call the functions we will use some variables those are called arguments
greet("Jayanth","MTech");
greet("Gowthami","MCA");
greet("Babu");
    


