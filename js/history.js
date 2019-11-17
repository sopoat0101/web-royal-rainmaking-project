nowContent = 0;

window.onload = slide(0);

function slide(x) {
    nowContent += x;

    if (nowContent > 4)
        nowContent = 4;
    if (nowContent < 0)
        nowContent = 0

    let start = document.querySelector('.start');
    let button = document.getElementsByClassName('botton');
    let content = document.getElementsByClassName('content');
    let backgound = document.querySelector('.background-history');
    let contentImg = document.getElementsByClassName('content-img');

    if (nowContent != 0) {
        for (let i = 0; i < contentImg.length; i++) {
            contentImg[i].style.transform = `translateY(100px)`;
            contentImg[i].style.opacity = `0`
        }
        contentImg[nowContent - 1].style.transform = `translateY(0)`;
        contentImg[nowContent - 1].style.opacity = `1`
    }
    else {
        for (let i = 0; i < contentImg.length; i++) {
            contentImg[i].style.transform = `translateY(100px)`;
            contentImg[i].style.opacity = `0`
        }
    }

    for (let i = 0; i < content.length; i++) {
        content[i].scrollTop = 0;
    }

    setTimeout(() => {

        if (nowContent == 0) {
            start.style.transform = 'scale(1)';
            button[0].style.transform = 'scale(0)';
            button[1].style.transform = 'scale(0)';
        }
        else {
            start.style.transform = 'scale(0)';
            button[0].style.transform = 'scale(1)';
            button[1].style.transform = 'scale(1)';
        }

        if (nowContent == 4) {
            button[1].style.transform = 'scale(0)';
        }

        let slider = document.querySelector('.slider');
        // let ap = document.querySelector('#ap');
        let apimg = document.querySelector('.imgap');

        slider.style.transform = `translateX(${-100 * nowContent}vw)`;
        backgound.style.marginLeft = `${50 * nowContent}vw`;

        // if (nowContent == 0) {
        //     ap.style.transform = `translateX(${50 - 15}vw)`
        // } else {
        //     ap.style.transform = `translateX(${157 * nowContent}vw)`
        // }

        // apimg.style.transform = `scaleX(${x})`
    }, 200);

}