/* 
    This Function is used to check 
    the number passed as parameter
    "%" is called 'modulus' that
    divides and matches condition.
*/


// Function without parameter
function findsEvenOdd() {
    let num = 10; 
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

findsEvenOdd();

// Function with parameter
function findEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

findEvenOdd(12); // even
findEvenOdd(99);  // odd