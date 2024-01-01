// javascript DOM textContent vs innerText vs innerHTML

const text = document.querySelector(".par");
console.log(text);

// textContent - if we write the textContent how we write the in the html code that will print in the console if we write the sentence the with the space the space will also will print in the console 
console.log(text.textContent);

// innerText - if we write the innertext if we write the code with space the space will remove and it will print the text
console.log(text.innerText);

//innerHTML - if we write the innerHTML how we write code in the html same code will print in the console 
console.log(text.innerHTML);

// we can change the matter by using this
text.textContent = "Hello welcome";
text.innerHTML  = "<h1>Hello <span>everyone</span></h1>"
text.innerText = "Welcome";