//multiple element selecter
console.log(document.getElementsByClassName('heading'));
console.log(document.getElementsByTagName("h1"));
console.log(document.querySelectorAll('.heading'));

//single elemelt selecter
console.log(document.getElementById("heading"));
console.log(document.querySelector('.heading'));

// const h1= document.getElementById('heading');
// h1.innerHTML="hello from javascript";
// h1.innerHTML="<span>span</span>";



//  const span =document.getElementsByTagName('span');

// h1.addEventListener('click',()=>{

//     span.item

// });
const heading = document.getElementById("heading");


heading.innerHTML = `<span id="span" onClick="changeContent()">span</span>`;

function changeContent() {
    const span = document.getElementById("span");
    span.style.display = "none";
    heading.style.color = "red";
    heading.style.background = "green";
    heading.style.borderRadius = '5px';
    heading.style.padding = '.5rem 1rem';
    heading.textContent = "chenged";
}




