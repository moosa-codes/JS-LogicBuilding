/* Find the largest value in the array. */


 // Function with no parameter
function findLargestValue() {
    let numArr = [100, 300, 2000, 45, 190];
    let largest = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] > largest) {
            largest = numArr[i];
        }
        console.log("The largest value is: " + largest);
    }
}

findLargestValue();

 // Function with parameter (arr)

function findLargestNum(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        console.log("The largest value is: " + largest);
    }
}

let numArr = [100, 300, 200, 45, 190];
findLargestNum(numArr);




/* Find the largest value in the array. */

