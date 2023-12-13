// filter() method
// does return the new array
// Its maniplutes the size of the new array 
// return based on the condition

const people = [
    {name:"Gowthami", age:23,position:"The Leader" },
    {name:"jayanth ", age:22,position:"Hero"},
    {name:"Babu",age:22,position:"The Hero"},
    {name:"jjjj ", age:34,position:"The Hero"},
    {name:"Bbb",age:30,position:"The Leader"},
    {name:"Bbb",age:32,position:"The Leader"}
];

const arrayAge = people.filter(function(person){
    return person.age <=30;
});
console.log(arrayAge);

const newArray = people.filter(function(person){
    return person.position === "The Leader";

});
console.log(newArray);