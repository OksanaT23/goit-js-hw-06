function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountInput = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  let boxesHtml = '';

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const size = 30 + i * 10;

    boxesHtml += `<div style="width: ${size}px; height:${size}px; background-color:${color}"></div>`;
  }

  boxesContainer.innerHTML = boxesHtml;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', event => {
  const amount = amountInput.value;
  createBoxes(amount);
});
destroyBtn.addEventListener('click', destroyBoxes);
