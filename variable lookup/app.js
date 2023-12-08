// Variable lookup/
// {} - codeblock

const global = 5;

function add(num1,num2) {
    const global = 25;
    const result = num1 + num2 + global;
    function muply() {
        // const global = 10;
        const muplyResult = result * global;
        console.log(muplyResult);
        
    }
    muply();
    return result;
   
    
}

console.log(add(5,5));