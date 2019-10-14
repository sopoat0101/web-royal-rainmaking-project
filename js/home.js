window.onload = start;
count = 0;
function start() {
    setTimeout(() => {
        raining = setInterval(() => {
            if (count < 50) {
                let sky = document.querySelector('.rain-area');
                let rain = document.createElement('div');
                rain.classList.add('rain');
                let position = Math.floor(Math.random() * 101);
                let long = Math.floor(Math.random() * 5) + 2;
                rain.style.left = `${position}vw`;
                rain.style.height = `${long}vh`;
                rain.style.zIndex = '-101';
                rain.classList.add('rain-drop-animation');
                sky.appendChild(rain);
                count++;
            }
        }, 150);
    }, 4000);
    setTimeout(() => {
        let flower = document.getElementsByClassName('flower');
        for (let i = 0; i < flower.length; i++) {
            flower[i].style.transform = 'scale(1)'
        }
    }, 4500);
}

function clearRianDrop() {
    clearInterval(raining);
    console.log("Stop")
}