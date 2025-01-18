/*
   HIGHER_ORDER FUNCTIONS :
   ::> A higher order function is a function that 
      takes one or more functions as arguments,
      or returns a function as its result.

      ## NOTE ##
      -> don't use it as function(callback()) x
*/



// Code-Example # 1 (Basic)
function greeting() {  // callback function
    console.log("I Am Call Back Function.");
}

function processFunction(func) { // .. higher order function
    func();
}
processFunction(greeting); // a callback function is passed as an argument here. 






// Code-Example # 2 (Intermediate)

/* 
   In this example we have passed two arguments to a [HO function]
   first parameter accepts arr and second one accepts a callback function
   so for that we have initialized an array named (movies) and then
   created a callback function ,in callback function we have done some
   looping to print all movies .In HO function we have passed arr parameter 
   to a func parameter.
*/

const movies = ["Batman", "Superman", "Spiderman"]; // array initialized

function printMovies(arr) {  // callback function
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i];
        console.log(sorted);
    }
}

function processFunctionTwo(arr, func) {   // HOF
    // console.log(arr);
    func(arr);
}
processFunctionTwo(movies, printMovies);