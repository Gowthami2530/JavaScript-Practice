// Navagation concept

// if we want to know the particular element child or parent then we need to use this properties
// childNodes
// children
// parentNode
// parentElement
// nextSibling
// nextElementSibiling
// previousSibling
// previousElementSibling
// firstChild
// firstElementChild
// lastChild
// lastElementChild


// childNodes - if we write the childNodes which counts the whitespace as the listitem and it give the result 

const list = document.querySelector("ul");
console.log(list.childNodes);

// children if we write the children which doesnot counts the whitespace and it gives the only the list items that is present in the ul 

const list1 = document.querySelector("ul");
console.log(list1.children);

// parentNode - if we write the parentNode which give the parent of the particular element  which includes the whitespace in it

const list2 = document.querySelector("ul");
console.log(list2.parentNode);

// parentElement - if we write the parentElement which gives the parent of the particular element which doesnot incules the whitespace in it 

const list3 = document.querySelector("ul li:nth-child(3)");
console.log(list3.parentElement);

//  nextSibling - if we write the nextSibiling which gives the nextsibling of the particular child which includes the whitespace as a child and it will print

const list4 = document.querySelector("ul li:nth-child(3)");
console.log(list4.nextSibling);

// nextElementSibiling - if we write the nextElementSibiling which  gives the nextElementSibiling of the particular child which doesnot include the whitespace and it give the nextchild as the output

const list5 = document.querySelector("ul li:nth-child(3)");
console.log(list5.nextElementSibiling);


// previousSibling - if we write the previousSibling which gives the previousSibling of the particular child which includes the whitespace and it gives the output

const list6 = document.querySelector("ul li:nth-child(3)");
console.log(list6.previousSibling);

// previousElementSibling -if we write the previousElementSibling which  gives the previousElementSibling of the particular child which doesnot include the whitespace and it give the previousSiblingchild as the output

const list7 = document.querySelector("ul li:nth-child(3)");
console.log(list7.previousElementSibling);

// firstChild- if we write the firstChild it includes the whitespace and it gives the whitespace as the output

const list8 = document.querySelector("ul");
console.log(list8.firstChild);

// firstElementChild - if we write the firstElementChild it doesnot includes the whitespace and it give the child as the output

const list9 = document.querySelector("ul");
console.log(list9.firstElementChild);

// lastChild - if we write the lastChild it includes the whitespace and it gives the whitespace as the output

const list10 = document.querySelector("ul");
console.log(list10.lastChild);

// lastElementChild - if we write the lastElementChild it includes the whitespace and it gives the whitespace as the output

const list11 = document.querySelector("ul");
console.log(list11.lastElementChild);