

const values = document.querySelector(".values");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
let seconds = 0;
let minutes = 0;
let hours = 0;


let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHOurs = 0;

function stopwach() {
    seconds++;
    if (seconds / 60 === 1) {
        minutes++;
        seconds = 0;


        if (minutes / 60 === 1) {
            hours++;
            minutes = 0;

        }
    }

    if (seconds < 10) leadingSeconds = "0" + seconds.toString();
    else leadingSeconds = seconds;


    if (minutes < 10) leadingMinutes = "0" + minutes.toString();
    else leadingMinutes = minutes;

    if (hours < 10) leadingHOurs = "0" + hours.toString();
    else leadingHOurs = hours;

    values.textContent = `${leadingHOurs}:${leadingMinutes}:${leadingSeconds}`;
}

let isRunning = false;
let interval = null;
start.addEventListener("click", () => {
    if (!isRunning) {
        setInterval(stopwach, 1);
        isRunning = true;
    }
    else {
        clearInterval(interval);
        isRunning = false;
    }
    reset.addEventListener("click", () => {
        clearInterval(interval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        values.textContent = "00:00:00";

    });

});



