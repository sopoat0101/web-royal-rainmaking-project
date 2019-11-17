// import { area } from "../json/area.js";

// window.onload = closeFullData;

window.addEventListener('scroll', checkScreen);

document.querySelector('.map-reg').style.opacity = 1;

area = {
    "area": [
        {
            "name": "ภาคเหนือ",
            "subname": [
                "1.ภูมิพล (ตาก)",
                "2.สิริกิติ์ (อุตรดิตถ์)",
                "3.แม่กวงอุดมธารา (เชียงใหม่)",
                "4.แม่งัดสมบูรณ์ชล (เชียงใหม่)",
                "5.กิ่วลม (ลำปาง)",
                "6.กิ่วคอหมา (ลำปาง)",
                "7.แควน้อยบำรุงแดน (พิษณุโลก)"
            ]
        },
        {
            "name": "ภาคตะวันออกเฉียงเหนือ",
            "subname": [
                "1.อุบลรัตน์ (ขอนแก่น)",
                "2.จุฬาภรณ์ (ชัยภูมิ)",
                "3.ลำปาว (กาฬสินธุ์)",
                "4.ลำตะคอง (นครราชสีมา)",
                "5.ลำพระเพลิง (นครราชสีมา)",
                "6.ลำแซะ (นครราชสีมา)",
                "7.ห้วยหลวง (อุดรธานี)",
                "8.ลำนางรอง (บุรีรัมย์)",
                "9.ลำมูลบน (นครราชสีมา)",
                "10.ลำปลายมาศ (นครราชสีมา)",
                "11.น้ำอูน (สกลนคร)",
                "12.น้ำพุง (สกลนคร)",
                "13.เขื่อนสิรินธร (อุบลราชธานี)",
            ]
        },
        {
            "name": "ภาคกลาง",
            "subname": [
                "1.ทับเสลา (อุทัยธานี)",
                "2.ป่าสักชลสิทธิ์ (ลพบุรี)",
                "3.ศรีนครินทร์ (กาญจนบุรี)",
                "4.กระเสียว(สุพรรณบุรี)",
                "5.วชิราลงกรณ์ (กาญจนบุรี)"
            ]
        },
        {
            "name": "ภาคตะวันออก",
            "subname": [
                "1.ขุนด่านปราการชล (นครนายก)",
                "2.พระปรง (สระแก้ว)",
                "3.สียัด (ฉะเชิงเทรา)",
                "4.บางพระ (ชลบุรี)",
                "5.ดอกกราย (ระยอง)",
                "6.หนองปลาไหล (ระยอง)",
                "7.ประแสร์ (ระยอง)",
                "8.คลองพระพุทธ (จันทบุรี)",
                "9.นฤบดินทรจินดา (ปราจีนบุรี)",
                "10.คลองหลวง รัชโลธร (ชลบุรี)"
            ]
        },
        {
            "name": "ภาคใต้",
            "subname": [
                "1.แก่งกระจาน (เพชรบุรี)",
                "2.ปราณบุรี (ประจวบคีรีขันธ์)",
                "3.รัชชประภา (สุราษฎร์ธานี)",
                "4.บางลาง (ยะลา)",
            ]
        }
    ]
}

function changeReg(x, obj) {
    let mapreg = document.getElementsByClassName("map-reg");
    let sub = document.getElementsByClassName("map-sub");
    let mapdatareg = document.getElementsByClassName("map-data-reg");

    for (let i = 0; i < mapreg.length; i++) {
        mapreg[i].style.opacity = "";
    }

    for (let j = 0; j < sub.length; j++) {
        sub[j].innerHTML = "";
        mapdatareg[j].innerHTML = area.area[x].name;
        for (let k = 0; k < area.area[x].subname.length; k++) {
            let li = document.createElement("li");
            li.innerHTML = area.area[x].subname[k];
            sub[j].appendChild(li);
        }
    }

    let fullData = document.querySelector('.full-data');
    let mapdata = document.getElementsByClassName('map-data');
    // for (let i = 0; i < mapdata.length; i++) {
    //     mapdata[i].style.touchAction = 'none';
    // }
    fullData.style.transform = 'scale(1)';
    fullData.style.touchAction = 'none';
    obj.style.opacity = 1;
}

function closeFullData() {
    let fullData = document.querySelector('.full-data');
    let mapreg = document.getElementsByClassName("map-reg");
    let mapdata = document.getElementsByClassName('map-data');
    // for (let i = 0; i < mapdata.length; i++) {
    //     mapdata[i].style.touchAction = '';
    // }
    for (let i = 0; i < mapreg.length; i++) {
        mapreg[i].style.opacity = 0.7;
    }
    fullData.style.transform = 'scale(0)';
    fullData.style.touchAction = '';
}

function checkScreen() {

    let centerScreen = window.scrollY + innerHeight / 2;

    let box = document.querySelector('.size-box-content');

    let show = document.getElementsByClassName('slideShow');

    for (let i = 0; i < show.length; i++) {
        fadeIn(show[i], centerScreen);
    }

    fadeIn(show[0], centerScreen);

    //fadeIn(box, centerScreen);
}

function getPosY(offset) {
    let posY = 0;
    posY = offset.offsetTop;
    if (offset.offsetTop != 0) {
        return posY + getPosY(offset.offsetParent);
    }
    return posY;
}

function fadeIn(obj, centerScreen) {
    obj.style.transition = '0.5s';
    if (centerScreen > getPosY(obj) && centerScreen < getPosY(obj) + obj.offsetHeight) {
        obj.style.opacity = 1;
        obj.style.transform = `translateY(0px)`;
    }
    // else {
    //     obj.style.opacity = 0;
    //     obj.style.transform = `translateY(100px)`;
    // }
}