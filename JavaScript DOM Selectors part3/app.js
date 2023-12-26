// Selector part 3

// if write like the the entery ul list will be selected
const ul = document.querySelector("ul");
console.log(ul);

// if we write like this then it will select the first name that is present in the list the reminig will not we selected
const li = document.querySelector("li");
console.log(li);

// if we want the particular  li form the list then we used to write like this

const li3 = document.querySelector("ul li:nth-child(3)");
console.log(li3);

// if we want to select more class names at single time then we used to write like this

const allPar = document.querySelectorAll(".text-par1,.text-par2,.text-par3");
console.log(allPar);