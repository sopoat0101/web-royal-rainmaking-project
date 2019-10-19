nowContent = 0;

window.onload = slide(0);

function slide(x) {
    nowContent += x;

    if (nowContent > 4)
        nowContent = 4;
    if (nowContent < 0)
        nowContent = 0

    let button = document.getElementsByClassName('botton');
    let content = document.getElementsByClassName('content');

    for (let i = 0; i < content.length; i++) {
        content[i].scrollTop = 0;
    }

    setTimeout(() => {

        if (nowContent == 0) {
            button[0].style.display = 'none';
            button[1].style.display = 'none';
        } else {
            button[0].style.display = 'block';
            button[1].style.display = 'block';
        }

        let slider = document.querySelector('.slider');
        slider.style.transform = `translateX(${-100 * nowContent}vw)`
    }, 200);
}