function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        let calculation = num * factorial(num - 1);
        return calculation;
    }
}

console.log(factorial(3));  // 6
console.log(factorial(5));  // 120
console.log(factorial(0)); // 1