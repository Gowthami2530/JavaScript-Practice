// Find() method
// return single instance- in this case of object
// If we have the same unique id then it return the first match uniqued id 
// If the unique id doeed not match the it return the unndefined
// great for getting the unique value




const people = [
    {name:"Gowthami", age:23,position:"The Leader", id:1 },
    {name:"jayanth ", age:22,position:"Hero", id:2},
    {name:"Babu",age:22,position:"The Hero",id:3},
    {name:"jjjj",age:34,position:"The Hero",id:4},
    {name:"Bbb",age:30,position:"The Leader",id:5},
    {name:"Bbb",age:32,position:"The Leader",id:6}
];

const findingUnique = people.find(function(person){
    return person.id === 5;

});
console.log(findingUnique);

// if we give the unique id number the which was not defined then it will return udefined
const findingUnique2 = people.find(function(person){
    return person.id === 10;

});
console.log(findingUnique2); 

// if we write like this then it show the error
// console.log(findingUnique2.name); if we use the ternary operater then we will get the correct result

// by using the tennary operater we can write
// console.log(findingUnique2?findingUnique2.name:findingUnique2);
//by using the string 

const newName = ["Gowthami","Jayanth","Babu","Rani","Raju"];
const newArray = newName.find(function(person){
    return person === "Gowthami";
});
console.log(newArray);

// there is the example between the filter and find method how this two will work 

// there is the find method example
// find will return if the id value is true it retuen the entery object
const findingUnique3 = people.find(function(person){
    return person.id === 5;

});
// if we want only the name we can write like this
console.log(findingUnique3.name);

// there is the filter method example
// filter method will return the array 

const findingUnique4 = people.filter(function(person){
    return person.id === 5;

});
console.log(findingUnique4);

// if we want only the name from the array the we will write like this

const findingUnique5 = people.filter(function(person){
    return person.id === 5;

});
// we need to write the index number then what we  need the particular object name we need to write
console.log(findingUnique5[0].name);





