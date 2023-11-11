// Functions - Parameters & Arguments
// Arrays, Functions and Objects
// Params - when declare/define
// Placeholders,local Variables
// Arguments - when Invoke/call/run
// use variables/values,Multiple params,undefined.

// if we write like this if we call then it will give the all the result taht is present in the console log
function hello() {
    console.log("Hello Gowthami");
    console.log("Hello Jayanth");
    console.log("Hello Babu");
};
hello();

// if we want to call only one function the we need to write like this

function helloGowthami() {
    console.log("Hello Gowthami");
};
function helloJayanth() {
    console.log("Hello Jayanth");
};
function helloBabu() {
    console.log("Hello Babu");
};
helloBabu();

// now by using the parameters we acn write the code in simplest way
// now what we are declaring the variable is call the parameter
function greet(name) {
    console.log("Hello" + name);   
};

// Now we are calling the parameter is call the argument
greet("GowthamiAkula");
greet("JayanthAkula");

// if we does not give any variable to the function then it will define as undefined
greet();
