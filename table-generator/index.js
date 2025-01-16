/*
    This function consists of loop and using loop 
    it will generate table and print to console.
*/


// function withno parameter
function tablesGenerator() {
    const num = 2;
    for (let i = 1; i <= 10; i++) {
        let table = num * i;
        const organized = `${num} x ${i} = ${table}`;
        console.log(organized);
    }
}

tablesGenerator() // prints table of 2



// function with parameter
function tableGenerator(num) {
    for (let i = 1; i <= 10; i++) {
        let table = num * i;
        const organized = `${num} x ${i} = ${table} \n`;
        console.log(organized);
    }
}

tableGenerator(2); // prints table of 2
tableGenerator(3); // prints table of 3
tableGenerator(4); // prints table of 4