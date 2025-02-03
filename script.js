let timerDuration = 25 * 60; // 25 minutes in seconds
let remainingTime = timerDuration;
let timerInterval = null;

const timerDisplay = document.getElementById("timer-display");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");

// Format seconds to MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

// Update Timer Display
function updateTimerDisplay() {
  timerDisplay.textContent = formatTime(remainingTime);
}

// Start Timer
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        alert("Time's up! Take a break, meow! 🐾");
      }
    }, 1000);
  }
}

// Pause Timer
function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// Reset Timer
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  remainingTime = timerDuration;
  updateTimerDisplay();
}

// Event Listeners
playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

// Initialize Display
updateTimerDisplay();
