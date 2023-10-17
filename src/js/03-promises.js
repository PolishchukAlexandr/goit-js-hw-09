

import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const firstDelay = form.children[0].firstElementChild;
const delayStep = form.children[1].firstElementChild;
const amountEl = form.children[2].firstElementChild;

const onSumbit = event => {
  event.preventDefault();
  let delay = +firstDelay.value;
  let step = +delayStep.value;
  let amount = +amountEl.value;

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(success => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(error => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
  event.currentTarget.reset();
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve('success');
      } else {
        reject('error');
      }
    }, delay);
  });
}

form.addEventListener('submit', onSumbit);