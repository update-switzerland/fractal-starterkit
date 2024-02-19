const inputs = document.querySelectorAll('input, textarea');
for (const input of inputs) {
    input.addEventListener('focus', function() {
        const label = getLabelFromInput(this);
        if (!label) return false;
        label.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        const label = getLabelFromInput(this);
        if (!label) return false;
        label.classList.remove('focused');
    });

    input.addEventListener('keyup', function() {
        const isFilled = this.value !== '';
        const label = getLabelFromInput(input);
        if (!label) return false;

        if (isFilled) {
            label.classList.add('filled');
        } else {
            label.classList.remove('filled');
        }
    });
}

function getLabelFromInput(input) {
    const inputId = input.getAttribute('id');
    return document.querySelector(`label[for=${inputId}]`);
}