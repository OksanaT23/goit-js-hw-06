const counterElement = document.getElementById('value');
const btnCounterDecrement = document.querySelector('[data-action="decrement"]');
const btnCounterIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

btnCounterDecrement.addEventListener('click', () => {
    counterValue -= 1;
    counterElement.innerText = counterValue;
});

btnCounterIncrement.addEventListener('click', () => {
    counterValue += 1;
    counterElement.innerText = counterValue;
});
