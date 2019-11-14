window.addEventListener('scroll', scroll);

function scroll(){
    let scroll = window.scrollY;
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    let bannerStart = 0;
    let bannerEnd = document.querySelector('#banner').getBoundingClientRect().height / 2;

    if(scroll > bannerStart && scroll <= bannerEnd){
        showContent1(true);
    }
    else{
        showContent1(false);
    }

    let content1Start = bannerEnd;
    let content1End = document.querySelector('#content1').offsetTop + document.querySelector('#content1').getBoundingClientRect().height;
    console.clear();
    console.log(content1Start);
    console.log(scroll);
    console.log(content1End);

    if(scroll >= content1Start && scroll <= content1End){
        showMainContent1(true);
    }
    else{
        showMainContent1(false);
    }

}

function showContent1(x){
    if(x){
        banner_flower_left.style.transform = 'translateX(0vw) translateY(0vw) scale(1)';
        banner_flower_right.style.transform = 'translateX(0vw) translateY(0vw) scale(1)';
        banner_leaf_left.style.transform = 'translateX(0vw) translateY(0vw) scale(1)';
        banner_leaf_right.style.transform = 'translateX(0vw) translateY(0vw) scale(1)';
    }
    else{
        banner_flower_left.style.transform = 'translateX(-15vw) translateY(5vw) scale(1)';
        banner_flower_right.style.transform = 'translateX(15vw) translateY(5vw) scale(1)';
        banner_leaf_left.style.transform = 'translateX(10vw) translateY(5vw) scale(0)';
        banner_leaf_right.style.transform = 'translateX(-10vw) translateY(5vw) scale(0)';
    }
}

function showMainContent1(x){
    let content1_main_left  = document.querySelectorAll('.content1_main_left');
    let content1_main_right = document.querySelectorAll('.content1_main_right');
    if(x){
        content_background.style.transform = 'scale(1)';
        content_background.style.opacity = '1';
        for(i = 0; i < content1_main_left.length; i++){
            content1_main_left[i].style.opacity = '1';
            content1_main_left[i].style.transform = 'translateX(0vw)';
            content1_main_right[i].style.opacity = '1';
            content1_main_right[i].style.transform = 'translateX(0vw)';
        }
    }
    else{
        content_background.style.transform = 'scale(3)';
        content_background.style.opacity = '0';
        for(i = 0; i < content1_main_left.length; i++){
            content1_main_left[i].style.opacity = '0';
            content1_main_left[i].style.transform = 'translateX(-10vw)';
            content1_main_right[i].style.opacity = '0';
            content1_main_right[i].style.transform = 'translateX(10vw)';
        }
    }
}