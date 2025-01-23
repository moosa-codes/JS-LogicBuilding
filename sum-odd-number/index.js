/*
    function will figure whether the  
    number is odd or even.
*/
function findOddInt(num) {
    let odd = 0;

    if (num % 2 !== 0) {
        odd = num;
        console.log(`This is an odd number: ${odd}`);
    } else {
        console.log(`${num} is not an odd integer`);
    }
}
findOddInt(10); // Output: 10 is not an odd integer
findOddInt(17); // Output: This is an odd number: 17




/*
    function will find the  
    sum of odd numbers in an array.
*/
function sumOddInts(array) {
    let odd = 0;
    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 !== 0) {
            // console.log(arr[i])
            odd = odd + array[i];
            console.log("SUM OF ODD INTEGERS", odd);
        } else {
            console.log("The array does not contain any odd numbers.");  // this else may run because of iteration
        }
    }
}
const arr = [1, 2, 3, 4, 5];

sumOddInts(arr); // Ouput : 9