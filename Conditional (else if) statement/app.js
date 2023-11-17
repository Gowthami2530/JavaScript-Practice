// conditional (if else) statement
// comparison operators
// >,<,<=,>=,==,===,!=,!==
// else if and !

let value1 = 12;
let value2 = 2;

if(value1>value2){
    console.log("Yes value1 is greater than value2");
}
else if(value1>=value2){
    console.log("both are equall or value1 is big");
}
else{
    console.log("first value is big");

}

// if we write like this the avlue will not print
const num1 = 7;
const num2 = 70;
const value = false;
if (value){
    console.log("hey i am Comming");
}

// if we keep the ! then if symbole is used Placed in front of a boolean value it will reverse the value, returning the opposite. ! true; // Returns false. 

const num3 = 7;
const num4 = 70;
const values1 = false;
if (!values1){
    console.log("hey i am Comming");
}