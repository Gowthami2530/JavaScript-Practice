// Array Iteration -  map() method
// Map method will return the new array
// It does not change the orginal size of the array
// use values from original array when making the new array

const people = [
    {name:"Gowthami",age:23,position:"ASE"},
    {name:"jayanth",age:22,position:"software"},
    {name:"Babu",age:22,position:"Developer"},
];

const ages = people.map(function (person) {
    return person.age;
    
});

const newArray = people.map(function(person){
    return{
        firstName:person.name,
        actualAge:person.age,

    };

});

console.log(newArray);