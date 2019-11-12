document.querySelector('.wraper').addEventListener('scroll', checkCenterScreen);

function checkCenterScreen() {
    let warp = document.querySelector('.wraper');
    let centerScreen = warp.getBoundingClientRect().height / 2;
    let checkPointScreen = warp.scrollTop + centerScreen;
    // for show1
    let show1PosStart = document.querySelector('.content-wrap').offsetTop;
    let show1PosEnd = document.querySelector('.content-wrap').offsetTop +
        document.querySelector('.content-wrap').getBoundingClientRect().height +
        document.querySelector('.content-wrap-2').getBoundingClientRect().height;
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
    let content = document.querySelector('.content-wrap');
    if (x) {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0px)'
    }
    else {
        content.style.opacity = '0';
        content.style.transform = 'translateY(100px)'
    }
}