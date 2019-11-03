// import { area } from "../json/area.js";

// window.onload = closeFullData;

area = {
    "area": [
        {
            "name": "ภาคเหนือ",
            "subname": [
                "หน่วยฯ เชียงใหม่",
                "หน่วยฯ พิษณุโลก/แพร่",
                "หน่วยฯ ตาก"
            ]
        },
        {
            "name": "ภาคตะวันออกเฉียงเหนือ",
            "subname": [
                "หน่วยฯ ขอนแก่น",
                "หน่วยฯ นครราชสีมา",
                "หน่วยฯ อุบลราชธานี",
                "หน่วยฯ อุดรธานี"
            ]
        },
        {
            "name": "ภาคกลาง",
            "subname": [
                "หน่วยฯ นครสวรรค์",
                "หน่วยฯ ลพบุรี",
                "หน่วยฯ กาญจนบุรี"
            ]
        },
        {
            "name": "ภาคตะวันออก",
            "subname": [
                "หน่วยฯ ระยอง",
                "หน่วยฯ จันทบุรี",
                "หน่วยฯ สระแก้ว"
            ]
        },
        {
            "name": "ภาคใต้",
            "subname": [
                "หน่วยฯ สุราษฎร์ธานี",
                "หน่วยฯ หัวหิน ประจวบฯ",
                "หน่วยฯ หาดใหญ่ สงขลา",
                "หน่วยฯ นครศรีธรรมราช"
            ]
        }
    ]
}

function changeReg(x, obj) {
    let mapreg = document.getElementsByClassName("map-reg");
    let sub = document.getElementsByClassName("map-sub");
    let mapdatareg = document.getElementsByClassName("map-data-reg");

    for (let i = 0; i < mapreg.length; i++) {
        mapreg[i].style.opacity = 0.7;
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

    fullData.style.transform = 'scale(1)';
    document.body.style.touchAction = 'none';
    // document.body.style.overflow = 'hidden';
    obj.style.opacity = 1;
}

function closeFullData() {
    let fullData = document.querySelector('.full-data');
    let mapreg = document.getElementsByClassName("map-reg");
    for (let i = 0; i < mapreg.length; i++) {
        mapreg[i].style.opacity = 0.7;
    }
    fullData.style.transform = 'scale(0)';
    // document.body.style.overflow = 'hidden auto';
}