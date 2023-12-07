// Local Scope
// Local variable cannot be acessed outside the code block {}
// Local variable cannot effect the original varaiable

let firstName = "Gowthami";

function calc1() {
    // console.log(firstName);
    let firstName = "GGGG";
    console.log(firstName);

    
}
calc1();

// if we do to the console log of first name in the function if we didnot define in the function then it is going to check in the global variable 
// if we  declare the in the function the it is going to print the what we define the function 





// if we console log the firstName in the function it show the error that we didnot define the variable
// lastName is define as the localscope so we cannot acess the variable in the outside the code block
// what we have done for the function and it will work as it is for the if condition also
// console.log(lastName);
// if we want to use the local scope variable in the Global scope variable we didnot to write the keyword the we can access the variable in the globle variable
function cal(){
    const firstName = "Jayanth";
    const lastName  = "Babu";
    boom = "We can use the variable in the global variable"
}
cal();
console.log(boom);

if(true) {
   const age = 23;
}
// console.log(age);
