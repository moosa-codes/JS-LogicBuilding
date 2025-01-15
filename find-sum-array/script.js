/* Find sum of an array */

// function without array
function findSumNoArr() {
    let arr = [10, 20, 30, 40, 50];
    let sum = null;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(sum);
    }
}
findSumNoArr();


// function with array
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];  
        sum += arr[i];
        console.log(sum);
    }
}

let arr = [10, 20, 30, 40, 10]; // output 110
findSum(arr);

/* Find sum of an array */
