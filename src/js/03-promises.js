const form = document.querySelector('.form');
console.log(form)
const btn = document.querySelector('button');
const amount = document.querySelector('[name="amount"]');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');

function createPromise(position, delay) {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       const shouldResolve = Math.random() > 0.3;
       if (shouldResolve) {
         resolve({position, delay})
       } else {
         reject({position, delay})
       }
    }, delay)
   })
  };

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const amountValue = parseInt(amount.value);
  const delayValue = parseInt(delay.value);
  const stepValue = parseInt(step.value);
  
  let nextDelay = delayValue;
  for (let i = 1; i <= amountValue; i ++) {
    const position = i;
     createPromise(position, nextDelay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    nextDelay += stepValue;
  };
});




