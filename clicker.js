let count = localStorage.getItem('clicks') ? parseInt(localStorage.getItem('clicks')) : 0;

const button = document.getElementById('red-button');
const display = document.getElementById('count');

display.innerText = count;

button.addEventListener('click', () => {
    count++;
    display.innerText = count;

    if (count === 100) {
        document.body.style.backgroundColor = "#4a0000";
        document.getElementById('counter-container').style.color = "#ff4d4d";
        alert("Muchos clicks eh...");
    }

    if (count === 200) {
        document.body.style.backgroundColor = "#c41d1d";
        document.getElementById('counter-container').style.color = "#ff4d4d";
        alert("Demasiados clicks!!!");
    }
});