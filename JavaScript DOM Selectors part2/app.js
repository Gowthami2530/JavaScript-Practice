// Selectors part 1
// by using the query we will target the id and class


// if we are selecting the id by the query the we need to select like how we are selecting the id in the css
// #IdName
const selet = document.querySelector("#text-item");
console.log(selet);

// if we are selecting the classname by the query the we need to select like how we are selecting the ClassName in the css
// .ClassName
// if we are having the same className for multiple tages the it is going to print the  first tage which is have the className
const selet1 = document.querySelector(".container");
console.log(selet1);

// if we want to select the all the className having the same name then by using the querySelecterAll
const selet2 = document.querySelectorAll(".container");
console.log(selet2);


const select3 = document.querySelector(".content h5");
console.log(select3);

const select4 = document.querySelector("h1");
console.log(select4);