// Logical opearters
// (|| - OR) , (&& - AND ), !

const userName = "Gowthami";
const age = 23;

// if we write the or (||) operter the if any one username was ther then it will print the first statement
// for this operter if only one statement correct also it will give the true value
if(userName === "Gowthami" || userName ==="jayanth"){
    console.log("Hey how are you!");
}else{
    console.log("Wrong Values");
}

// if we use the (&&) operter then it should satifiy the all the statement that has given then only it will give the true value 
const userName1 = "Babu";
const age1 = 21;

if(userName1 === "Babu" && age1 === 22 ){
    console.log("Correct values ");
}else{
    console.log("Wrong Values");
}

// if we use this !== operter the except the give value if any other value is declared the it will give the true value

const userName2 = "Babu";
const age2 = 21;

if(userName2 === "Babu" && age2 !== 22 ){
    console.log("Correct values ");
}else{
    console.log("Wrong Values");
}