const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerID = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', e => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerID = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor(); 
   }, 1000);
    
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerID);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});