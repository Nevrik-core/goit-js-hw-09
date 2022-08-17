import throttle from 'lodash.throttle';
import Notiflix from 'notiflix';

const submitBnt = document.querySelector('button');
const form = document.querySelector('form');
// console.log(form);

// const STORAGE_KEY = 'form-data';
let formData = {};
// SON.parse(localStorage.getItem(STORAGE_KEY)) || {};
// 
// console.log(formData);

form.addEventListener('input', throttle(onInputChange, 500));


function onInputChange(e) {

  formData[e.target.name] = e.target.value;
  
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
    
}

submitBnt.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(formData);
  let delayValue = Number(formData.delay);


for (let i = 1; i <= formData.amount; i++) {
  const promise = createPromise(i, delayValue);
  // console.log(promise);
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
    
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

  delayValue += Number(formData.step);
 
}
}

function createPromise(position, delay) {

  // localStorage.removeItem(STORAGE_KEY);
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

let delayValue = Number(formData.delay);


for (let i = 1; i <= formData.amount; i++) {
  const promise = createPromise(i, delayValue);
  // console.log(promise);
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
    
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

  delayValue += Number(formData.step);
 
}

