// Declaring 4 variables to hold the values for MilliSeconds, Seconds, Minutes and Hours respectively
let [mil_sec, sec, min, hr] = [0, 0, 0, 0];

// Selecting the HTML element with the class name "timer"
let time_stamp = document.querySelector('.timer');

//Initializing a variable to keep track of the timer
let count = null;

// Attaching an even listener for Id 'Start'
document.getElementById('start').addEventListener('click', () => {
  if (count !== null) {
    clearInterval(count);
  }
  count = setInterval(watch, 10);
});

// Attaching an even listener for Id 'Stop'
document.getElementById('stop').addEventListener('click', () => {
  clearInterval(count);
});

// Attaching an even listener for Id 'Reset'
document.getElementById('reset').addEventListener('click', () => {
  clearInterval(count);
  [mil_sec, sec, min, hr] = [0, 0, 0, 0];
  time_stamp.innerHTML = '00:00:00:000';
});


//Calling function 'watch', responsible for displaying & updating the time on stopwatch
function watch() {

  // Increment the value of milli_seconds by 10
  mil_sec += 10;

  // Checking if milli_seconds equals 1000(1000 ms = 1 sec), if so then set milli_seconds to 0 & increment the seconds variable by 1
  if (mil_sec === 1000) {  
    mil_sec = 0;
    sec++;

    // Checking if seconds equals 60(60 sec = 1 min), if so then set seconds to 0 & increment the minutes variable by 1
    if (sec === 60) {
      sec = 0;
      min++;

      // Checking if minutes equals 60(60 min = 1 hour), if so then set minutes to 0 & increment the hours variable by 1
      if (min === 60) {
        min = 0;
        hr++;
      }
    }
  }

  // Creating 4 variables H, M, S, MS

  // Checking if hours value is less than 10, add a leading '0', else use the hour value 
  let H = hr < 10 ? '0' + hr : hr;

  // Checking if minutes value is less than 10, add a leading '0', else use the minutes value
  let M = min < 10 ? '0' + min : min;

  // Checking if seconds value is less than 10, add a leading '0', else use the seconds value
  let S = sec < 10 ? '0' + sec : sec;

  // Checking if milli_seconds value is less than 10, add '00'. If it's less than 100, add '0', else use the milli_seconds value
  let MS = mil_sec < 10 ? '00' + mil_sec : mil_sec < 100 ? '0' + mil_sec : mil_sec;
  
  // Updating the value of 'time_stamp' with the formatted time values
  time_stamp.innerHTML = `${H}:${M}:${S}:${MS}`;
}
