const expandable = document.querySelector('.expandable');
const maxChars = 100;
let text = expandable.textContent;
let isExpanded = false;
const btn = document.querySelector('.btn');

expandable.textContent = text.length <= maxChars ? `${text}...` : `${text.substring(0, maxChars)}...`;

btn.addEventListener('click', () => {

    isExpanded = !isExpanded;

    expandable.textContent = isExpanded
        ? `${text}...`

        : `${text.substring(0, maxChars)}...`;

    btn.textContent = isExpanded ? "less" : "more";


});

