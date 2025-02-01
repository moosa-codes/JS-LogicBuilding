function timeTo24Hour(time) {
    let date = new Date(`01/02/2025 ${time}`);
    // console.log(date);

    let formattedTime = date.toLocaleTimeString('en-US', { hour12: false });

    return formattedTime;
}

// timeTo24Hour()



// displays the time in 24 hour format
let time = '4:56 PM';
let res = timeTo24Hour(time);
console.log("TIME IN 24-Hour Format",res); // 16:56:00


// displays the time in 12 hour format
let time_two = '4:56 AM';
let res_2 = timeTo24Hour(time_two);
console.log("TIME IN 12-Hour Format",res_2); // 04:56:00 

