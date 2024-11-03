
function generateNember() {
    const maxValue = 99999;
    const minValue = 10000;
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
const value = document.querySelector('.value');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    value.textContent = generateNember();
});
