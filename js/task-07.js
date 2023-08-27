const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');
 
fontSizeControl.addEventListener('input', event => {
    const newFontSize = event.target.value;
    text.style.fontSize = newFontSize + 'px';
});
