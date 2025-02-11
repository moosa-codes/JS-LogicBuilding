/*
  Write a JavaScript function that takes a string as input and reverses it using a for-of loop.
  The function should have a time complexity of O(n), where n is the length of the input string.
  The function should not use any built-in reverse methods or methods that directly manipulate strings.
*/


// Example usage: With no parameters
function reverseString() {
    let string = "Moosa";
    let reversedStr = "";
    for (let str of string) {
        reversedStr = str + reversedStr;
    }
    console.log(reversedStr); // Output: "asomaM"
}

reverseString();




// Example usage: With parameters
function reversedString(word) {
    let reversedStr = "";
    for (let str of word) {
        reversedStr = str + reversedStr;
    }
    return reversedStr;
}

console.log(reversedString("Hello")); // Output: "olleH"