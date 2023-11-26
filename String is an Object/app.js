// string in an object
// Wrapper string object,Donot memorize method

let text = "Gowthami";

const person = {
    name:"Gowthami akula",
    greeting:function () {
        console.log("Hey how are you");
        return "";
    }
}
console.log(person);
console.log(person.name);
console.log(person.greeting());
