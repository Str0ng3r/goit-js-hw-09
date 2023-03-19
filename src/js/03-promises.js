'use strict'

const delayPromise = document.getElementsByName('#delay');
const stepDelayPromise = document.getElementsByName('#step');
const amountPromise = document.getElementsByName('#amount');
const form = document.querySelector('.form')
 console.log(delayPromise)
 console.log(stepDelayPromise)
 console.log(amountPromise)

const valueStep = stepDelayPromise.value;
const valueDelay = delayPromise.value;
const valueAmount = amountPromise.value;


stepDelayPromise.addEventListener('click',()=> {
  console.log(valueStep)
})

form.addEventListener('submit',(event) => {
  event.preventDefault();
  console.log('submit')
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
