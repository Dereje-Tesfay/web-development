// console.log('before');
// setTimeout(() => {
//     console.log('Set timeout');

// }, 1000);
// console.log('after');
// setInterval(() => {
//     console.log('hollo');

// }, 100);


function timer() {

    function counter() {
        let count = 0;
        let interval = setInterval(counter, 500);
        if (count >= 10) {

            clearInterval(interval);
            console.log("stopped");


        }
        else {
            count++;
            console.log(count);

        }
    }
}
timer();

