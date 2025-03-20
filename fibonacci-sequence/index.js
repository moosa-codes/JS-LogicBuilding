/*
    * Function to print the Fibonacci sequence up to the given number.

    * Example usage:
    * fibonacci(9); // Output: 0, 1, 1, 2, 3, 5, 8, 13, 21

    * Note: The Fibonacci sequence starts with 0 and 1.
    * The function uses a loop to calculate each subsequent term based on the previous two terms.
*/


function fibonacci(n = 2) {
    let n1 = 0, n2 = 1, nextN; // initialized the first two numbers n1 , n2 in the sequence

    // print the first two numbers in the sequence to make sequence
    console.log(n1);
    console.log(n2);

    // iteration 
    for (let i = 1; i <= n; i++) {
        nextN = n1 + n2; //  0 + 1 = 1
        n1 = n2;         // 1 = 1
        n2 = nextN;      // 1 = 1 + 1 = 2
        console.log(nextN);
    }
}

fibonacci();  
fibonacci(9); // 0 1 1 2 3 5 8 13 21 34 55
fibonacci(4); // 0 1 1 3 5 