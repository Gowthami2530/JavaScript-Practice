// Reduce() method
// iterate to callback function
// Its reduce to the single value - string, object, number
// 1 parameter ('acc') - total of all calactions
// 2 parameter ('curr') - current iterative/values





const people = [
    {name:"Gowthami",age:23,position:"The Leader", id:1 , salary:500 },
    {name:"jayanth",age:22,position:"Hero", id:2, salary:500},
    {name:"Babu",age:22,position:"The Hero",id:3, salary:200},
    {name:"jjjj",age:34,position:"The Hero",id:4, salary:200},
    {name:"Bbb",age:30,position:"The Leader",id:5, salary:400},
    {name:"Bbb",age:32,position:"The Leader",id:6, salary:400}
];

// if we want to calculate the total in number the syntax is
// const newArray = people.reduce(function(acc,curr){},0);

// if we want to calculate the total in string the syntax is
// const newArray = people.reduce(function(acc,curr){},{});

// if we want to calculate the total in object the syntax is
// const newArray = people.reduce(function(acc,curr){},[]);

const newArray = people.reduce(function(acc,curr){
    console.log(`the accuary is:${acc}`);
    console.log(`the current is:${curr.salary}`);
    acc += curr.salary;
    return acc;

},0);
console.log(newArray);