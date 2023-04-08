import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputTimer = document.getElementById('datetime-picker');
const btnStart = document.querySelector('button');
const daysText = document.querySelectorAll('span[data-days]');
const hoursText = document.querySelectorAll('span[data-hours]');
const minutesText = document.querySelectorAll('span[data-minutes]');
const secondsText = document.querySelectorAll('span[data-seconds]');

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < Date.now()) {
            alert("Please choose a date in the future");
            btnStart.disabled = true;
        } if (selectedDates[0] > Date.now()) {
            btnStart.disabled = false;
      };
      console.log(selectedDates[0]);
  },
};

flatpickr(inputTimer, options);


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
    
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
console.log(convertMs(2000));
console.log(convertMs(140000));
console.log(convertMs(24140000));
