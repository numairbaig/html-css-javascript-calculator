document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('.input');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('clear-button')) {
                input.value = '';
            } else if (button.classList.contains('ans-button')) {
                input.value = eval(input.value);
            } else {
                input.value += button.textContent;
            }
        });
    });
});