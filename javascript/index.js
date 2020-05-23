const min = document.getElementById('min-number');
const max = document.getElementById('max-number');
const result = document.getElementById('result-number');

function randomizeNumbers() {
    // Validador de números
    if (max.value < min.value) {
        const minStored = parseInt(min.value);
        min.value = max.value;
        max.value = minStored;
    }

    // Gerador dos números aleatórios
    const generated = Math.floor(Math.random() * (parseInt(max.value) - parseInt(min.value) + 1)) + parseInt(min.value);
    result.value = generated;
}