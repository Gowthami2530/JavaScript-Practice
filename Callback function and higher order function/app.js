// Callback function and higher order function as first Class Objects/Citizens

// Function are First Class Objects - stored in a variable (expression), Passed as a argument to another function , return from the function (closure)


// Higher order function - accepts another function as a argument or returns another function as a result

// callback functions - passed to a another function as an argument and executed inside that function


// we can write like this we are using more function and lines of code will be more

// function greetMorning(firstName) {
//     const myName = "Gowthami";
//     console.log(`Good Morning ${firstName}, My name is ${myName}`);  
// }
// function greetAfter(firstName) {
//     const myName = "Gowthami";
//     console.log(`Good After ${firstName}, My name is ${myName}`);  
// }
// greetMorning("Emma");
// greetAfter("Harry");

// we can write the code like this by using the higher order function and callback function
// In the below code morning and afterNoon are the callback functions

function morning(firstName) {
    // console.log(`Good Morning Emma ${firstName} `);
    return `Good Morning ${firstName}`;
    
}
function afternoon(firstName){
    return `Good AfterNoon ${firstName}`
}

// Now we are creating the Higher order function when we declare the higher order function we should not change the 
// higher order function we need to using the higher order function in the below code the greet is the higher order function  

function greet(firstName,cb){ 
    const myName = "Gowthami";
    console.log(`${cb(firstName)},My name is ${myName}`);
}
// for higher order function we are passing the callback function it is call as argument
greet("Emma",morning);
greet("Harry",afternoon);