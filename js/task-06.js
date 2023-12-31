const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', event => {
    const input = event.target;
    const validLength = input.dataset.length;

    input.className = input.value.trim().length == validLength ? 'valid' : 'invalid';
});
