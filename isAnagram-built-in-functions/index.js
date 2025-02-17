/* 
    Create a JavaScript function that takes two
    strings as input and checks if they are anagrams.
    
    An anagram is a word or phrase formed by rearranging 
    the letters of another word or phrase.
*/


// ## Understand with break-points ##

// vars
let strOne = "cars";
let strTwo = "scars";

// lengths
let length_1 = strOne.length;
let length_2 = strTwo.length;

// conditions
let condition_1 = strOne.split("").sort().join("");
let condition_2 = strTwo.split("").sort().join("");

if (length_1 !== length_2) {
    const error = "Anagrams cannot be of different lengths";
    console.log(error);
} else {
    if (condition_1 === condition_2) {
        console.log("The strings are anagrams");
    }
}



// Try with function
function isAnagram(strOne, strTwo) {
    let length_1 = strOne.length;
    let length_2 = strTwo.length;

    let condition_1 = strOne.split("").sort().join("");
    let condition_2 = strTwo.split("").sort().join("");

    if (length_1 !== length_2) {
        const error = "Anagrams cannot be of different lengths";
        console.log(error);
    } else {
        if (condition_1 === condition_2) {
            console.log("The strings are anagrams");
        }
    }
};

isAnagram("cars", "scar"); 