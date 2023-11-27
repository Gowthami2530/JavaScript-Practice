// String in object concept
// String properties and methods

let i = "Gowthami"

let person = {
    name:"Gowthami Akula",
    Age:22,
    EducationDetails:"MCA",
    greeting:function(){
        console.log("Hii");
    }
}
console.log(i);
console.log(person);
console.log(person.name);
console.log(person.greeting());

// string methods
// space so will be counted in the string methods

let j = "Gowthami Akula";
console.log(j.length);
console.log(j.toLowerCase());
console.log(j.toUpperCase());
console.log(j.charAt(7));
console.log(j.charAt(j.length-1));
console.log(j.slice(2,4));
console.log(j.indexOf("A"));
console.log(j.includes("Aku"));

// trim is used to remove the whitespace from string from both ends

let k = "   GowthamiAkula   "
console.log(k);
console.log(k.trim());
console.log(k.trimStart());
console.log(k.trimEnd());
console.log(k.trimEnd().endsWith("la"));
console.log


