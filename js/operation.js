currentIndex = 0;

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