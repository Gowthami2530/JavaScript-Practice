// Truthy and Falsy values
// Falsy Values are
// "",'',0,-0,NaN,null,undefined,false


let text = "random Text";

if(text){
    console.log("Hey it having the text it is true");
}else{
    console.log("Hey it is not having the  text it is false");
}

// if we keep the empty "" we will get the result as the falsy value

let text1 = "";

if(text1){
    console.log("Hey it having the text it is true");
}else{
    console.log("Hey it is not having the  text it is false");
}

// if we want to print the text if it truthy  value we will write the code like this by using the backticks(``)

let text2 = "Gowthami Akula";

if (text2){
    console.log(`hey it is havig the text ${text2}` );
}else{
    console.log("It is falsy value");
}



// let num1 = true;
// let num2 = (2>1);

// if(true){
//     console.log("It's true value");
// }
// if(num2){
//     console.log("Its is true");
// }