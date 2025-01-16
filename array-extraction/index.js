/*
    This function consists of loop and using loop 
    it will extract and print all movies to console.
*/


// function without parameter
function printMoviesArr() {
    const movies = ["batman", "superman", "spiderman"];
    for (let i = 0; i < movies.length; i++) {
        const sorted = movies[i];
        console.log(sorted);
    }
}

printMoviesArr();

// function with parameter
function printMovieArr(arr) {
    let sorted;
    for (let i = 0; i < movies.length; i++) {
        sorted = movies[i];
        console.log(sorted);
    }
}

const movies = ["batman", "superman", "spiderman"]; // array initialized
printMovieArr(movies); 