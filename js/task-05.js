const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', contentSpan);

function contentSpan(event) {
    const newValue = event.target.value;
    const outputValue = newValue ? newValue : 'Anonymous';

    output.textContent = outputValue;
}
