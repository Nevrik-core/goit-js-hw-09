import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const startBtn = document.querySelector('[data-start]');

const dataDays = document.querySelector(`[data-days]`);
const dataHours = document.querySelector(`[data-hours]`);
const dataMinutes = document.querySelector(`[data-minutes]`);
const dataSeconds = document.querySelector(`[data-seconds]`);


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        let checkTime = selectedDates[0].getTime() - new Date().getTime();
    
        if (checkTime < 0) {
            Notiflix.Notify.failure('Please choose a date in the future');
            startBtn.disabled = true;
        } else {
            console.log(selectedDates[0]);
            Notiflix.Notify.success('Press Start button');
            startBtn.disabled = false;
        }
   
  },
};

const flatpick = flatpickr("#datetime-picker", options);

startBtn.addEventListener('click', e => {
    timerStart();
    startBtn.disabled = true;
});




function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function timerStart() {
  let timeDiff = null;
    const intervalTimerId = setInterval(() => {
        timeDiff = flatpick.selectedDates[0].getTime() - new Date().getTime();
        const { days, hours, minutes, seconds } = convertMs(timeDiff);
        console.log(`${days}:${hours}:${minutes}:${seconds}`);
        
        if (timeDiff <= 999) {
      clearInterval(intervalTimerId);
         } 
      dataDays.innerHTML = addLeadingZero(days);
      dataHours.innerHTML = addLeadingZero(hours);
      dataMinutes.innerHTML = addLeadingZero(minutes);
      dataSeconds.innerHTML = addLeadingZero(seconds);
    
    }, 1000);

    
}
