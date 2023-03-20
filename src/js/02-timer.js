'use strict'
import flatpickr from "flatpickr" 

const inputData = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]')
buttonStart.disabled = true;
const dataRight = new Date;

const daysScore = document.querySelector('[data-days]');
const hoursScore = document.querySelector('[data-hours]');
const minutesScore = document.querySelector('[data-minutes]');
const secondsScore = document.querySelector('[data-seconds]');

let msData = null;
const rightData = new Date;
const msRight = rightData.getTime();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0] < dataRight){
        alert('Please choose a date in the future')
        buttonStart.disabled = true;
      }else {
        buttonStart.disabled = false;
        msData = selectedDates[0].getTime();
        msData -= msRight;
      };
    },
  };

flatpickr(inputData,options);


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

  function addLeadingZero(value) {
    for (const key in value) {
      if(String(value[key]).length < 2) {
        value[key] = value[key].toString().padStart(2, '0');
      }
    }
    return value;
  };


buttonStart.addEventListener('click',() => {

  const intervalId =
setInterval(() => {
    msData -= 1000;
    const scoresTimes = convertMs(msData);
    addLeadingZero(scoresTimes);
 daysScore.textContent = scoresTimes.days;
 hoursScore.textContent = scoresTimes.hours;
 minutesScore.textContent = scoresTimes.minutes;
secondsScore.textContent = scoresTimes.seconds;
if(daysScore.textContent === '00' & hoursScore.textContent === '00' & minutesScore.textContent  === '00' & secondsScore.textContent === '00'){
  clearInterval(intervalId);
      }
    },1000)
});



