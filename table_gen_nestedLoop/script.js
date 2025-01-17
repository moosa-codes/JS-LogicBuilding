/*
   The funciton , generates table for required number
   it takes two parameters (initial,end) like 
   (1,10) the one is starting and it will print till
   10.
*/

function generateMultiplicationTable(start, end) {
    for (let i = start; i <= end; i++) {
        let format = `Table of ${i} : \n`;
        console.log("\n", format);
        for (let j = 1; j <= 10; j++) {
            format = `${i} x ${j} = ${i * j}`
            console.log(format);
        }
    }
}
generateMultiplicationTable(1, 5); // prints table of 1 till 5
generateMultiplicationTable(6, 10); // prints table of 6 till 10