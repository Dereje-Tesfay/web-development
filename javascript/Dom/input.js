const btn = document.querySelector("[type=button]");
console.log(btn);
btn.addEventListener("click", calculateTotalPrice);

function calculateTotalPrice() {
    const quantity = Number(document.querySelector("#quantity").value);

    const price = Number(document.querySelector("#price").value);

    let total = document.querySelector("#total");
    total.value = price * quantity;

}