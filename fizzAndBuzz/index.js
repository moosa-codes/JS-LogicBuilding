/*
   Write a function that prints numbers from 1 to 100. For multiples of 3, 
   print "Fizz", for multiples of 5, print "Buzz", and for multiples of both,
   print "FizzBuzz". 
   
   Bonus => also push values to an array.
*/


function fizzBuzz() {

    let fizzArr = [];
    let buzzArr = [];
    let fizzBuzzArr = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzArr.push(i);
        } else if (i % 3 === 0) {
            buzzArr.push(i);
        } else if (i % 5 === 0) {
            fizzBuzzArr.push(i);
        }
    }

    console.log("Fizz", fizzArr);
    console.log("Buzz", buzzArr);
    console.log("Fizz-And-Buzz", fizzBuzzArr);
};

fizzBuzz();