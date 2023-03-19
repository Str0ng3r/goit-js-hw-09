'use strict'

const delayPromise = document.getElementsByName('delay');
const stepPromise = document.getElementsByName('step');
const amountPromise = document.getElementsByName('amount');
const form = document.querySelector('.form')



form.addEventListener('submit',(event) => {
  event.preventDefault();

  const amount = Number(amountPromise[0].value);
  const step = Number(stepPromise[0].value);
  const delay = Number(delayPromise[0].value);

  for (let i = 1; i <= amount; i++) {
    const position = i;
    const delayPromise = delay + (i-1) * step;
    createPromise(position, delayPromise)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promisFunc = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
const acceptRes = {
  position:position,
  delay:delay
}
    resolve(acceptRes)
      } else {
        // Reject
        const errRej = {
          position:position,
          delay:delay
        }
        reject(errRej)
      }
    },delay)
  })
  return promisFunc
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
