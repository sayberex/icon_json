console.log("Start:");

var icon1 = {};
icon1.num  = 0;
icon1.name = document.getElementById('ID_TBL1_NAME').innerHTML;
icon1.cap1 = document.getElementById('ID_TBL1_CAP1').innerHTML;
icon1.cap2 = document.getElementById('ID_TBL1_CAP2').innerHTML;
icon1.num1 = document.getElementById('ID_TBL1_NUM1').innerHTML;
icon1.num2 = document.getElementById('ID_TBL1_NUM2').innerHTML;


function onupdate_tmr() {
    //console.log("time works");
}

setInterval(onupdate_tmr, 1000);

//console.log(name1.innerHTML);
console.log(JSON.stringify(icon1));
    