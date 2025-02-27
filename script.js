const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const millisecondsLabel = document.getElementById("milliseconds");

const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const pauseButton = document.getElementById("pauseBtn");
const resetButton = document.getElementById("resetBtn");

const lapList = document.getElementById("laplist");

// stopwatch counter variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

const startTimer = function () {
  interval = setInterval(updateTimer, 10);
  startButton.disabled = true;
};

function stopTimer() {
  if ((minutes, seconds, milliseconds === 0)) return;
  clearInterval(interval);
  addToLapList();
  resetTimerData();
  startButton.disabled = false;
}

function pauseTimer() {
  clearInterval(interval);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(interval);
  resetTimerData();
  startButton.disabled = false;
}

// timer count
const updateTimer = function () {
  milliseconds++;
  if (milliseconds === 100) {
    // 1000  -> 1 seconds = 1000 millseconds
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }

  displayTimer();
};

// display timer
const displayTimer = function () {
  millisecondsLabel.textContent = padTime(milliseconds);
  secondsLabel.textContent = padTime(seconds);
  minutesLabel.textContent = padTime(minutes);
};

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function resetTimerData() {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayTimer();
}

function addToLapList() {
  const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(
    milliseconds
  )}`;

  const listItem = document.createElement("li");
  listItem.innerHTML = `<span>Lap ${
    lapList.childElementCount + 1
  }: </span>${lapTime}`;
  lapList.appendChild(listItem);
}

// event listeners

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
