// Functions return concept

// let wallValue = 80;

// function calculate(value) {
//     console.log("This value in cm is :"+value*2.54+" "+"cm");
    
// }
// let width = calculate(100);
// let height = calculate(wallValue);

// let dimension = [width,height];
// console.log(dimension);

//In the above code it dont return the value because we didnot mention the return keyword

//Now we are using the return keyword

let heightValue = 80;
 
function calculate(number){
    let newValue = number*2.54;
    return newValue; 
}
// we can directly write the code like the also without giving the another variable
// function calutate(number){
    // return number*2.54;
// }
let width = calculate(100);
let height = calculate(heightValue);

let values = [width,height];
console.log(values);