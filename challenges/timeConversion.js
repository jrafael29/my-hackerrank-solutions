// function timeConversion(s) {
//     // Write your code here
//     const [hour, minutes, secondsString] = s.split(":");
//     const seconds = secondsString.slice(0, 2)
//     let hourIs = ''
//     if(s.includes("PM")){
//         const newHour = (+hour + 12)
//         console.log("newHour", newHour)
//         hourIs = `${newHour == 24 ? "00" : newHour}:${minutes}:${seconds}`
//     }else{
//         hourIs = `${hour}:${minutes}:${seconds}`
//         console.log(hourIs)
//     }
//     return hourIs
// }

// timeConversion("12:05:45AM")


function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }
console.log(tConvert ('18:00:00'));
