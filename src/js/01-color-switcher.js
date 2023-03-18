'use strict'
const buttonStart = document.querySelector('[data-start]')
const buttonStop = document.querySelector('[data-stop]')
const bodyDoc = document.querySelector('body')
let interId = null;

buttonStop.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };


buttonStart.addEventListener('click', () => {
    buttonStart.disabled = true;
    interId = setInterval(() => {
bodyDoc.style.backgroundColor = getRandomHexColor();
   },1000)
   buttonStop.disabled = false;
})

  buttonStop.addEventListener('click',() => {
clearInterval(interId)
buttonStop.disabled = true;
buttonStart.disabled = false;
  })
