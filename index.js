

let timer; 
let hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0;


function start() {
    if (!timer) {
        timer = setInterval(run, 10); 
    }
}

function run() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    let display = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatMilliseconds(milliseconds)}`;
    document.getElementById("display").textContent = display;
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
function formatMilliseconds(milliseconds) {
    return milliseconds < 10 ? `0${milliseconds}` : milliseconds < 100 ? `${milliseconds}` : Math.floor(milliseconds / 10);
}
function stop() {
    clearInterval(timer);
    timer = false;
}
function reset() {
    clearInterval(timer);
    timer = false;
    hours = minutes = seconds = milliseconds = 0;
    document.getElementById("display").textContent = "00:00:00:00";
}
