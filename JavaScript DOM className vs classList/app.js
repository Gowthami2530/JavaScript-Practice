// JavaScript DOM className vs classList
// className - if we write the className then it is going to replace the className
// classList - having the two functions - add() , remove() and the classList which is going to add the classname
// contains - contains method which is used to check the classname is presenent or not which is used to give the true or false value
// toggle

const list = document.querySelector("ul");
console.log(list);

// if we are not having the className then it will show the empty space
// if we are having the className then it will give the className
console.log(list.className);
list.className = "nav";
console.log(list);

// Now we will use the classList 

const list1 = document.querySelector("ul");
console.log(list1);

console.log(list1.classList);

// if we want to add the class name we will use the function add()

list1.classList.add("navlist");
list1.classList.add("normal");
list1.classList.add("navbarlist");


// if we want to remove the className we will use the remove function (remove())

list1.classList.remove("navbarlist");
list1.classList.remove("normal");

// contains

if (list1.classList.contains("nav")){
    list1.classList.add("blue");
    console.log('yes it has the nav class is present');
} else{
    list1.classList.add("orange");
    console.log('No the class name is not avabiale');
}

// toggle - if we toggle then if the class name is alredy present then it will remove the class name if the class name is not there then it will add the classname 

// there the className is already the so that why the classname is removed 
list1.classList.toggle("navlist");


// there the className is not there so that why the toggle is going to add the className
list1.classList.toggle("list");
