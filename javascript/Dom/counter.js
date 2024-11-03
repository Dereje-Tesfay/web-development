
let count = 0;
const value = document.querySelector(".value");

const decreaseBtn = document.querySelector(".decrease");

decreaseBtn.addEventListener("click", () => {
    value.textContent = --count;
    value.style.color = "red";

});
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
    value.textContent = count = 0;
    value.style.color = "black";

});
const increaseBtn = document.querySelector(".increase");

increaseBtn.addEventListener("click", () => {
    value.textContent = ++count;
    value.style.color = "green";
});



