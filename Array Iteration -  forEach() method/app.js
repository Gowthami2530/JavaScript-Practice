// ForEach()
// Does not return the new array

const people = [
    {name:"Gowthami", age:23, position:"ASE"},
    {name:"jayanth", age:21, position:"Software"},
    {name:"babu", age:21, position:"Testing"}
];

// function Showpeople(Person){
//     console.log(Person.name.toUpperCase());
// }


// people.forEach(Showpeople);

// Now we are creating the anonymous function

people.forEach(function (items) {
    console.log(items.name.length);
    
})



