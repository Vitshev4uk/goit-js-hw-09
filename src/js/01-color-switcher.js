
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnStart = document.querySelectorAll('button[data-start]');
console.log(btnStart);
const btnStop = document.querySelectorAll('button[data-stop]');
console.log(btnStop);
const body = document.querySelector('body');

let changeBg
btnStart.forEach(button => {
    button.addEventListener('click', () => {
        button.disabled = true;
       changeBg = setInterval(() => {
            body.style.backgroundColor = getRandomHexColor()
        }, 1000);
    });
});
btnStop.forEach(button => {
    button.addEventListener('click', () => {
        btnStart.forEach(button => {
            button.disabled = false;
        })
        clearInterval(changeBg);
    })
});

