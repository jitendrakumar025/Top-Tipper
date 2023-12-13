let timer = document.querySelector('.timer');
let time = 59;
let interval = setInterval(() => {
    time--;
    timer.innerHTML = time;
    if (time == 0) {
        time = 60;
    }
}, 1000);