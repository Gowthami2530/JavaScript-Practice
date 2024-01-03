// JavaScript DOM getAttribute, setAttribute, dataset
// attributes
// getAttribute
// setAttribute
// dataset

const list = document.querySelector(".list");
console.log(list);

console.log(list.attributes);

console.log(list.getAttribute("class"));
console.log(list.getAttribute("id"));
list.setAttribute("class","newlist");
console.log(list.getAttribute("class"));

// if we are not having the attribute it will print the null

const h1 = document.querySelector("h1");
console.log(h1.getAttribute("class"));

// if we want to add the attributes we need to add like this

h1.setAttribute("class","heading");
console.log(h1.getAttribute("class"));

// now by using the dataset we can get the data name attribute in the list 

// if we write the only the dataset which gives the all the dataset name in the list

console.log(list.dataset);

// /if we write like this then we will get the particular dataset list

console.log(list.dataset.name);
