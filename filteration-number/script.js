/*
   This is function filters the number greater than 50.
*/

// function with no arguments
function filterNumbers() {
    let arr = [12, 23, 34, 45, 56, 67, 78, 89, 90];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 50) {
            let greaterNum = arr[i]
            console.log("Without Argument", greaterNum); // output : 56,67,78,89,90
        }
    }
}

filterNumbers();


// function with arguments
function filterNumber(arr) {
    let greaterNumArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 50) {
            greaterNumArr = arr[i]
            console.log("With Argument", greaterNumArr);
        }
    }
}

let arr = [12, 23, 34, 45, 56, 67, 78, 89, 90];
filterNumber(arr); // output : 56,67,78,89,90