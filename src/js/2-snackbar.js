import iziToast from 'https://cdn.jsdelivr.net/npm/izitoast/dist/js/iziToast.min.js';

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = Number(event.target.delay.value);
  const state = event.target.state.value;

  createPromise(delay, state)
    .then((message) => {
      iziToast.success({
        title: 'Success',
        message: message,
      });
    })
    .catch((message) => {
      iziToast.error({
        title: 'Error',
        message: message,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
