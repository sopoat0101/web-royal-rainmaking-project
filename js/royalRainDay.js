window.addEventListener('scroll', checkCenterScreen);

function checkCenterScreen() {
    let warp = document.querySelector('body');
    let centerScreen = warp.getBoundingClientRect().height / 2;
    let checkPointScreen = warp.scrollTop + centerScreen;
    // for show1
    let show1PosStart = document.querySelector('.header-image').offsetTop;
    let show1PosEnd = document.querySelector('.header-image').offsetTop 
    + document.querySelector('.header-image').getBoundingClientRect().height 
    + document.querySelector('#content1').getBoundingClientRect().height;
    if (window.scrollY > show1PosStart && window.scrollY <= show1PosEnd) {
        showContent1(true);
        console.log('YEET TRUE');
    }
    else {
        showContent1(false);
        console.log('YEET FALSE');
    }


    //for show2
    let show2PosStart = document.querySelector('.main-image').offsetTop;
    let show2PosEnd = show2PosStart +
        document.querySelector('#content2').getBoundingClientRect().height;
    if (window.scrollY/4 > show2PosStart && window.scrollY/4 <= show2PosEnd) {
        showContent2(true);
        console.log(show2PosStart);
        console.log(show2PosEnd);
        console.log(window.scrollY/4);
        console.log('YEET TRUE');
    }
    else {
        showContent2(false);
        console.log(show2PosStart);
        console.log(show2PosEnd);
        console.log(window.scrollY/4);
        console.log('YEET FALSE');
    }

}

function showContent1(x) {
    if (x) {
        content1.style.opacity = '1';
        // 
        content1.style.transform = 'translateY(0px)'
    }
    else {
        content1.style.opacity = '0';
        content1.style.transform = 'translateY(50px)'
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
        content2.style.transform = 'translateY(50px)';
    }
}
