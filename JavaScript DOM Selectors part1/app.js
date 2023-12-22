// DOM Selectors

// getElementById()

console.log(document.getElementById("text-item"));

// getElementByTagName()

console.log(document.getElementsByTagName("h1"));

// if we are having tags with same name thos all will be print in the HTML collection
console.log(document.getElementsByTagName("p"));

// Now we are storeing the a  variable

const tagName = document.getElementsByTagName("p");
console.log(tagName);

// If we want to get in the array forme by using ES6 by using the spread operater[...]
// now it will convert to the array form
const newTag = [...tagName];
console.log(newTag);

// getElementsByClassName()
console.log(document.getElementsByClassName("text-par"));
// we can write like this also

const className = document.getElementsByClassName("container");
console.log(className);

// if we are having the same classNames and we want only the first className element the we will write like this
const className1 = document.getElementsByClassName("container");
console.log(className1[0]);

// if we give the id name which was not give then it will give the result as null
console.log(document.getElementById("item"));

// if we give the tag name which was not give then it will give the result as Empty HTMLCollection[]
console.log(document.getElementsByTagName("h5"));