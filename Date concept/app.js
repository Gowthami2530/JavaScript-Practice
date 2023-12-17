// Date concept

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weeks  =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const date = new Date();
console.log(date);

// if we write like this then it will print the month index number

const month = date.getMonth();
console.log(month);

// if we write like this then it gives the month name

const month1 = date.getMonth();
console.log(months[month]);

// if we write like this then it will print the week index number

const weekDay = date.getDay();
console.log(weekDay); 

// if we write like this then it gives the week name

console.log(weeks[weekDay]);

// if we want the date the we can wwrite like this

console.log(date.getDate());

// if we want the fullyear the we can wwrite like this
console.log(date.getFullYear());

// if we want  to print the all for example (Wednesday, 25 October 2023)

const todayDate = `${weeks[weekDay]}, ${date.getDate()} ${months[month]} ${date.getFullYear()} `;
console.log(todayDate);

// if we write like this then it will give the print on the userInterface
document.body.innerHTML = todayDate;