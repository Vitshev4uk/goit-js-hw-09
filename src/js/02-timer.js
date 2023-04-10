import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputTimer = document.getElementById('datetime-picker');
const btnStart = document.querySelector('button');
const daysText = document.querySelector('span[data-days]');
const hoursText = document.querySelector('span[data-hours]');
const minutesText = document.querySelector('span[data-minutes]');
const secondsText = document.querySelector('span[data-seconds]');

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
};
function onClose(selectedDates) {
  const selectedDate = selectedDates[0];
  if (selectedDate < Date.now()) {
    alert("Please choose a date in the future");
    btnStart.disabled = true;
  } if (selectedDate > Date.now()) {
    btnStart.disabled = false;
  };
  console.log(selectedDates[0]);
};


const pickerDate = flatpickr(inputTimer, options);


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
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
};

btnStart.addEventListener('click', timer);

function timer() {
  const eventDay = pickerDate.selectedDates[0];
  const interval = setInterval(() => {
    const remaining = eventDay.getTime() - Date.now();
    const remainingMs = convertMs(remaining);
    daysText.textContent = addLeadingZero(remainingMs.days);
    hoursText.textContent = addLeadingZero(remainingMs.hours);
    minutesText.textContent = addLeadingZero(remainingMs.minutes);
    secondsText.textContent = addLeadingZero(remainingMs.seconds);
       if (remaining < 0) {
    clearInterval(interval);
    daysText.textContent = '00';
    hoursText.textContent = '00';
    minutesText.textContent = '00';
    secondsText.textContent = '00';
    return
  };
  }, 1000);
};

