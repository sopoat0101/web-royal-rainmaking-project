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
        slider.style.transform = `translateX(${-100 * nowContent}vw)`
    }, 200);

}