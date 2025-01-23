function birthdayCakeCandles() {
    let candlesArr = [1, 2, 3, 4, 3];
    let commonCandles = 0;

    for (let i = 0; i < candlesArr.length; i++) {
        candlesArr.sort((a, b) => a - b);
        // console.log(arr);

        if (candlesArr[i] !== commonCandles &&
            candlesArr.indexOf(candlesArr[i]) !== candlesArr.lastIndexOf(candlesArr[i])) {
            // console.log("Last Index", arr.lastIndexOf(arr[i]));
            // console.log("IndexOf", arr.indexOf(arr[i]));

            let count = candlesArr.lastIndexOf(candlesArr[i]) - candlesArr.indexOf(candlesArr[i]) + 1;
            // console.log(count,"COUNT");

            console.log(`${candlesArr[i]} is ${count} times in the array`);
            commonCandles += candlesArr[i];
        }
    }
}

birthdayCakeCandles();