// javaScript DOM playing with Nodes

// createElement()
// createTextNode()
// appendChild()
// insertBefore()
// replaceChild()
// prepend() - This method is  used  for and it directliy print at the first palce
// remove() - This method is used to remove the entriy list 
// removeChild() - this method is used to remove the only what were want to remove


const list = document.querySelector(".navbar");
console.log(list);

const first = document.querySelector(".first");

const listItems = document.createElement("li");
const text = document.createTextNode("Dynamic services");
listItems.appendChild(text);
listItems.classList.add("nav-item");
list.appendChild(listItems);
console.log(listItems);

// insertBefore - which is used to  insert the before the element

const listItems1 = document.createElement("li");
const text1 = document.createTextNode("Message");
listItems1.appendChild(text1);
listItems1.classList.add("nav-item");
listItems1.classList.add("first");
list.insertBefore(listItems1,first);
console.log(listItems1);

// replace - which will replace the with another text

const listItems2 = document.createElement("li");
const text2 = document.createTextNode("Home page");
listItems2.appendChild(text2);
listItems2.classList.add("nav-item");
list.replaceChild(listItems2,first);
console.log(listItems2);

// prepend() is method is used for print the element at the first palce

const listItems3 = document.createElement("li");
const text3 = document.createTextNode("Contact us");
listItems3.appendChild(text3);
listItems3.classList.add("nav-item");
list.prepend(listItems3);

// list.remove();
const last = document.querySelector(".last");
list.removeChild(last);


// we can do the same  code in the easy way
// beforebegin
const list1 = document.querySelector(".navbar");
// for classname we should not keep the (" ") doubale quatation and we should keep the single quatation (' ')
const listItem4 = "<li class='nav-item'>Nav Item</li>";
list1.insertAdjacentHTML("beforebegin",listItem4);
console.log(listItem4);

// afterbegin
const list2 = document.querySelector(".navbar");
const listItem5 = "<li class='nav-item'>Nav Items</li>";
list1.insertAdjacentHTML("afterbegin",listItem5);
console.log(listItem5);

// beforeend
const list3 = document.querySelector(".navbar");
const listItem6 = "<li class='nav-item'>About</li>";
list1.insertAdjacentHTML("beforeend",listItem6);
console.log(listItem6);

// afterend
const list4 = document.querySelector(".navbar");
const listItem7 = "<li class='nav-item'>About</li>";
list1.insertAdjacentHTML("afterend",listItem7);
console.log(listItem7);