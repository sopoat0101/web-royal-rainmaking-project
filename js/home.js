window.onload = start;
count = 0;
document.querySelector('.warp-parallax').addEventListener('scroll', checkCenterScreen);
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
}
function checkCenterScreen() {
    let warp = document.querySelector('.warp-parallax');
    let centerScreen = warp.getBoundingClientRect().height / 2;
    let checkPointScreen = warp.scrollTop + centerScreen;
    // for show1
    let show1PosStart = document.querySelector('.title-picture').offsetTop;
    let show1PosEnd = document.querySelector('.title-picture').offsetTop +
        document.querySelector('.title-picture').getBoundingClientRect().height +
        document.querySelector('#content1').getBoundingClientRect().height;
    if (checkPointScreen > show1PosStart && checkPointScreen <= show1PosEnd) {
        showContent1(true);
    }
    else {
        showContent1(false);
    }

    //for show2
    let show2PosStart = document.querySelector('.background-image1').offsetTop;
    let show2PosEnd = show2PosStart +
        document.querySelector('.background-image1').getBoundingClientRect().height;
    if (checkPointScreen > show2PosStart && checkPointScreen <= show2PosEnd) {
        showContent2(true);
    }
    else {
        showContent2(false);
    }

}

function showContent1(x) {
    let flower = document.querySelector('.flower');
    if (x) {
        flower.style.transform = 'scale(1)';
        // 
        content1.style.opacity = '1';
        content1.style.transform = 'translateY(0px)'
    }
    else {
        flower.style.transform = 'scale(0)';
        // 
        content1.style.opacity = '0';
        content1.style.transform = 'translateY(100px)'
    }
}
function showContent2(x) {
    if (x) {
        // 
        content2.style.opacity = '1';
        content2.style.transform = 'translateY(0px)';
    }
    else {
        // 
        content2.style.opacity = '0';
        content2.style.transform = 'translateY(100px)';
    }
}

function clearRianDrop() {
    clearInterval(raining);
    console.log("Stop")
}