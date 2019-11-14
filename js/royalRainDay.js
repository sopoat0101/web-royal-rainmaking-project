window.addEventListener('scroll', checkCenterScreen);

function checkCenterScreen() {
    let warp = document.querySelector('body');
    let centerScreen = warp.getBoundingClientRect().height / 2;
    // for show1
    let show1PosEnd = document.querySelector('.header-image').offsetTop;
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    + (document.querySelector('#container1').getBoundingClientRect().height / 3);

    if (window.scrollY >= 0 && window.scrollY <= show1PosEnd) {
        showContent1(true);
    }
    else {
        showContent1(false);
    }


    //for show2
    let show2PosStart = show1PosEnd;
    console.clear();
    console.log(show2PosStart);
    console.log(window.scrollY);
    console.log(scrollable);

    if (window.scrollY > show2PosStart && window.scrollY <= scrollable) {
        showContent2(true);
    }
    else {
        showContent2(false);
    }

}

function showContent1(x) {
    if (x) {
        flower.style.transform = 'scale(1)';
        banner.style.transform = 'scale(1)';
        document.querySelector('#header-banner').style.opacity = '1';
        document.querySelector('#header-banner').style.transform = content1.style.transform = 'translateY(0px)';
        content1.style.opacity = '1';
        content1.style.transform = 'translateY(0px)';
    }
    else {
        flower.style.transform = 'scale(0)';
        banner.style.transform = 'scale(0)';
        document.querySelector('#header-banner').style.opacity = '0';
        document.querySelector('#header-banner').style.transform = content1.style.transform = 'translateY(50px)';
        content1.style.opacity = '0';
        content1.style.transform = 'translateY(50px)'
    }
}

function showContent2(x) {
    if (x) {
        // 
        content2.style.opacity = '1';
        content2.style.transform = 'translateY(0px)';
        cloud1.style.left = '-1%';
        cloud2.style.left = '58%';
        cloud3.style.left = '10%';
        cloud4.style.left = '60%';
    }
    else {
        // 
        content2.style.opacity = '0';
        content2.style.transform = 'translateY(50px)';
        cloud1.style.left = '-80%';
        cloud2.style.left = '150%';
        cloud3.style.left = '-100%';
        cloud4.style.left = '150%';
    }
}
