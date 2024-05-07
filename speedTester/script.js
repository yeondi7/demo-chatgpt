const textInput = document.getElementById('textInput');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const speedDisplay = document.getElementById('speed');

let startTime;
let typingInterval;
let typedCharacters = 0;

startBtn.addEventListener('click', startTyping);
stopBtn.addEventListener('click', stopTyping);
resetBtn.addEventListener('click', resetTyping);

function startTyping() {
  startTime = new Date().getTime();
  typingInterval = setInterval(updateTypingSpeed, 1000);
}

function stopTyping() {
  clearInterval(typingInterval);
}

function resetTyping() {
  clearInterval(typingInterval);
  typedCharacters = 0;
  updateSpeedDisplay();
}

function updateTypingSpeed() {
  const elapsedTime = (new Date().getTime() - startTime) / 1000 / 60; // in minutes
  const speed = Math.round(typedCharacters / elapsedTime);
  speedDisplay.textContent = speed;
}

textInput.addEventListener('input', () => {
  typedCharacters = textInput.value.length;
  updateSpeedDisplay();
});

function updateSpeedDisplay() {
  speedDisplay.textContent = typedCharacters;
}
