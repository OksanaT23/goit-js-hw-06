function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('button.change-color');
const span = document.querySelector('span');

button.addEventListener('click', event => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  span.textContent = newColor;
});