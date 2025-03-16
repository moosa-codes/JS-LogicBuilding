/*
   The task is to create a function that converts Tempreture
   for the given input 
*/


// Function to convert Celsius to Fahrenheit
function cToF(temp = 27) {
    const convertedTemp = (temp * 9 / 5) + 32;
    console.log(`${convertedTemp}°F`);
}

cToF(); // Outputs: 80.6°F
cToF(33); // Outputs: 91.4°F




// Function to convert Celsius to Kelvin
function cToK(temp = 27) {
    const convertedTemp = temp + 273;
    console.log(`${convertedTemp}K`);
}

cToK(); // Outputs: 300K
cToK(33); // Outputs: 306K



// Function to convert Fahrenheit to Celsius
function fToC(temp = 27) {
    const convertedTemp = ((32 - temp) * 5) / 9;
    console.log(`${convertedTemp.toFixed(1)}°C`);
}

fToC(); // Outputs: -2.8°C
fToC(33); // Outputs: 0.6°C