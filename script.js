const input = document.getElementById('textInput');
const div = document.getElementById('focusedDiv');

input.addEventListener("focus", () => {
    div.style.display = 'block';
});

input.addEventListener("blur", () => {
    div.style.display = 'none';
})

