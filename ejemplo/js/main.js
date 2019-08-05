'use strict';

// const body = document.querySelector('.page__main');
// const name =  document.querySelector('.name__title');
// const job =  document.querySelector('.job__title');
const inputName =  document.querySelector('.input__name');
const inputJob =  document.querySelector('.input__job');

function writeMe (event){
  const guilty = event.currentTarget;
  const selector = guilty.getAttribute('data-target');
  const target = document.querySelector(selector);
  target.innerHTML = guilty.value;
}

inputName.addEventListener('keyup', writeMe);
inputJob.addEventListener('keyup', writeMe);
