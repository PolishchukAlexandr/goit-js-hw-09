const startBtnEl = document.querySelector('button[data-start');
const stopBtnEl = document.querySelector('button[data-stop');
const docEl = document.querySelector('body');

let timerId = null;

startBtnEl.addEventListener('click', () => {
  if (timerId !== null) {
    return;
  }
  timerId = setInterval(() => {
    docEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtnEl.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
