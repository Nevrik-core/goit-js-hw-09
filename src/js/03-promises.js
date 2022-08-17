import Notiflix from 'notiflix';

const formEl = document.querySelector('form');


formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  let position = 1;
  let delay = Number(formEl.elements.delay.value);
  let step = Number(formEl.elements.step.value);
  let amount = Number(formEl.elements.amount.value);

  for (let i = 0; i < amount; i++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
    
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  position += 1;
  delay += step;
 
  }
  e.currentTarget.reset();
}


function createPromise(position, delay) {

 
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}


