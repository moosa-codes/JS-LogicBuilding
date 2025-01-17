/*
  Q) What is Default parameter/argument in js ?
     
  ** A default parameter in JavaScript is a value 
    you set for a function's parameter, it runs when no
    value is provided when the function is called.
    The following are examples :
*/



// simple example 
function simpleCalculation(x, y = 2) {
    const result = x + y;
    return result;
}

console.log("Default :", simpleCalculation(10)); // output : 12 => 10 + 2;
console.log("With Parameters :", simpleCalculation(10, 20)); // output : 30 => 10 + 20; 
console.log(" ");


// complex example 
function calculateTotalCost(price, tax = (5 / 100), discount = 0, shipping = 10) {
    let taxAmount = price * (tax / 100);
    console.log("Tax", taxAmount);

    let discountAmount = price * (discount / 100);
    console.log("Discounted", discountAmount);

    let finalCost = price + taxAmount - discountAmount;
    console.log("Final Cost", finalCost + shipping + "$");
}

calculateTotalCost(100); // 110.05$
console.log(" ");
calculateTotalCost(1000, 10, 60, 30); // 530$