function progressmover() {
    let progressBar = document.querySelector('.proggres-bar');
    let width = 10;
    const interval = setInterval(movercontrol, 50);
    function movercontrol() {
        if (width >= 100) {
            clearInterval(interval);

        }
        else {
            width++;
            let progressBar = document.querySelector('.proggres-bar');
            progressBar.style.width = width + "%";
            progressBar.textContent = width + "%";

            let value = document.querySelector('.value');
            value.textContent = width + "%";


        }
    }
}
document.querySelector(".btn").addEventListener('click', progressmover);