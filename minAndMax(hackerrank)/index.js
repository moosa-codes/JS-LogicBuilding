/*
   This problem is from HackerRank 
   to find Minimum and Maximum sum.
*/



// solution # 1 
function minAndMax(arr) {
    let min = [0]; let max = [0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
        sum += arr[i];
        console.log(`Sum => ${sum} Max => ${max} Min => ${min}`);

        let maxSum = sum - min;
        let minSum = sum - max;

        console.log(minSum + " " + (maxSum - 1));
    }
}

const arr = [1, 2, 3, 4, 5];
minAndMax(arr)



// solution # 2
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    let minSum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        minSum += arr[i];
        maxSum += arr[arr.length - i - 1];
    }

    console.log(minSum + " " + maxSum);
}

miniMaxSum(arr);