const form = document.querySelector('form.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const {
        email: { name: emailName, value: emailValue },
        password: { name: passwordName, value: passwordValue }
    } = form.elements;

    if (!emailValue.length || !passwordValue.length) {
        alert('Bсі поля повинні бути заповнені.');

        return;
    }

    const formData = {
        [emailName]: emailValue,
        [passwordName]: passwordValue,
    };

    console.log(formData);
    
    form.reset();
});
