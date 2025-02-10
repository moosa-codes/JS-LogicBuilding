/*
    Create a function called reverseString that takes a 
    string as input and returns the reversed version of the string.
*/


// Solution 1: Using For-loop (decrement)
function reverseString() {
    let str = "Hello Mars";
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    console.log(reversedStr);
}
reverseString();












// Solution 2: Using For-loop (increment)


function reversedString(str = "") {
    let reversedStr = "";
    for (let i = 0; i < str.length; i++) {
        reversedStr = str[i] + reversedStr;
    }
    console.log(reversedStr);
}
reversedString("String");












// Solution 3: Using builtIn methods
function reversesString(str) {
    return str.split("").reverse().join("");
}

let res = reverseString("Hello Mars");
console.log(res);  // Output: sraM olleH