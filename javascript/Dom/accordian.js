

const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(collapsible => {
    collapsible.addEventListener('click', () => {

        const btn = collapsible.querySelector('.btn');
        collapsible.classList.toggle('collapsible--expanded');

        if (
            collapsible.classList.contains('collapsible--expanded') &&
            btn.textContent === "+")

            btn.textContent = "-";
        else btn.textContent = "+";


    });
});