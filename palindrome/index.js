function isPalindrome(word) {
    /* 
    # BreakDown condition

    let splitWord = word.split('');
    let revWord = splitWord.reverse();
    let palindrome = revWord.join('');

    */

    const palindrome = word.split('').reverse().join('');

    if (word === palindrome) {
        console.log(`${word} is Palindrome.`);
    } else {
        console.log(`${word} is not Palindrome.`);
    }
}

isPalindrome("hello");  // Not Palindrome
isPalindrome("civic");  // Palindrome
isPalindrome("<>");  // not Palindrome
isPalindrome(">");  // Palindrome