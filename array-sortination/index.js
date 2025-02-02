// console.log("Hello world");

function sortArray() {
    let even = [2, 4, 6];
    let odd = [1, 3, 5];
    let finalArr = [];

    for (let i = 0; i < even.length; i++) {
        finalArr[finalArr.length] = even[i];
    }

    for (let i = 0; i < odd.length; i++) {
        finalArr[finalArr.length] = odd[i];
    }

    let sort = finalArr.sort((a, b) => a - b);
    console.log("I AM SORTED NOW ->", sort);

}

sortArray();