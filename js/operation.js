window.addEventListener('scroll', scroll);
currentIndex = 0;


function scroll(){
	let scroll = window.scrollY;
	let scrollable = document.documentElement.scrollHeight - window.innerHeight;
	let contentStart = content.offsetTop;
	let contentEnd = content.getBoundingClientRect().height;

	if(scroll >= 0 && scroll < contentEnd){
		showContent1(true);
	}
	else{
		showContent1(false);
	}

	let content2Start = contentEnd;

	if(scroll >= content2Start && scroll <= scrollable){
		showContent2(true);
	}
	else{
		showContent2(false);
	}
}

function showContent1(x){
	if(x){
		content.style.opacity = '1';
		content.style.transform = 'translateY(0vw)';
	}
	else{
		content.style.opacity = '0';
		content.style.transform = 'translateY(100px)';
	}
}

function showContent2(x){
	let flowerLeft = document.querySelector('#flower-left');
	let flowerRight = document.querySelector('#flower-right');
	let innercontent = document.querySelectorAll('.content-slider');
	let image = document.querySelectorAll('.image-slider');
	if(x){
		headSlider.style.opacity = '1';
		headSlider.style.transform = 'translateY(0vw)';
		cloud1.style.left = '-150px';
		cloud2.style.right = '-150px';
		for(i = 0; i < innercontent.length; i++){
			innercontent[i].style.opacity = '1';
			innercontent[i].style.transform = 'translateY(0vw)';
			image[i].style.opacity = '1';
			image[i].style.transform = 'translateY(0vw)';
		}
		
		flowerLeft.style.transform = 'translateY(0vw)';
		flowerRight.style.transform = 'translateY(0vw)';
	}
	else{
		headSlider.style.opacity = '0';
		headSlider.style.transform = 'translateY(100px)';
		cloud1.style.left = '-1500px';
		cloud2.style.right = '-1500px';
		for(i = 0; i < innercontent.length; i++){
			innercontent[i].style.opacity = '0';
			innercontent[i].style.transform = 'translateY(100vw)';
			image[i].style.opacity = '0';
			image[i].style.transform = 'translateY(100vw)';
		}
		flowerLeft.style.transform = 'translateY(100vw)';
		flowerRight.style.transform = 'translateY(100vw)';

	}
}


function slide(value, index){
	let slider = document.getElementById("slider");
	slider.style.transform = `translateX(${value}vw)`;
	if(currentIndex != index){
		cloud_selector.src = "assets/operation/svg/เตรียมตัว-ใส-01N.svg";
		tear1_selector.src = "assets/operation/svg/หยดน้ำ1ใส-01N.svg";
		tear2_selector.src = "assets/operation/svg/หยดน้ำ2ใส-01N.svg";
		tear3_selector.src = "assets/operation/svg/หยดน้ำ3ใส-01N.svg";
		currentIndex = index;
		if(currentIndex == 0){
			cloud_selector.src = "assets/operation/svg/เตรียมตัว-ทึบ-01N.svg";
		}
		else if(currentIndex == 1){
			tear1_selector.src = "assets/operation/svg/หยดน้ำ1ทึบ-01-01N.svg"
		}
		else if(currentIndex == 2){
			tear2_selector.src = "assets/operation/svg/หยดน้ำ2ทึบ-01-01N.svg"
		}
		else if(currentIndex == 3){
			tear3_selector.src = "assets/operation/svg/หยดน้ำ3ทึบ-01N.svg"
		}
	}
}