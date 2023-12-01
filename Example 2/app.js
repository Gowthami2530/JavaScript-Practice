// Example problem based on if , array, function, object, return .

const gas = [20,30,40,50];
const food = [30,40,50];
const dress = [50,70,80,90];

function calculatTotal(arr){
    let total = 0;
    for(let i = 0; i<arr.length; i++){
      total += arr[i];   // total = total + arr[i] 
    }
    // we can write like this
    // if(total>100){
    //     console.log(`Hey you have spending too much of money`);
    // }else{
    //     console.log(`hey you have spending less than 100 rupees`);
    // }
    
    // return total;  
    // we can write like this we will get the  same result
    if (total > 100){
        console.log(`Hey you have spending too much of money`);
        return total;
    }
    console.log(`hey you have spending less than 100 rupees`);
    return total;

}
let gasTotal = calculatTotal(gas);
let foodTotal = calculatTotal(food);
let dressTotal = calculatTotal(dress);
let randomTotal = calculatTotal([1,2,3,4,5,6,7]) 

// here we have create a object to get all the result in the form of array
console.log({
    gas:gasTotal,
    food:foodTotal,
    dress:dressTotal,
    random:randomTotal

});

// console.log(gasTotal);
// console.log(foodTotal);
// console.log(dressTotal);
// console.log(randomTotal);
