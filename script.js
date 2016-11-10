"use strict";













// The string multipling functions
String.prototype.dup = function() {
    var val = this.valueOf();
    return val + val;
};

String.prototype.repeat = function(n) {
    if (!n || n <= 0) return "";
    if (!this.origin) this.origin = this.valueOf();
    var val = this.repeat(parseInt(n / 2));
    return ((n % 2) ? this.origin : "") + val + val;
};

// The padding functions
String.prototype.padding = function(n, c)
{
    if (!c) c = " ";
    if (c.length > 1) c = c.charAt(0);
    var val = this.valueOf();
    var pad = c.repeat(Math.abs(n) - this.length);
    if (n < 0)
    return val + pad;
    return pad + val;
}

String.prototype.leftPad = function(n, c)
{
    return this.padding(Math.abs(n), c);
}

String.prototype.rightPad = function(n, c)
{
    return this.padding(-Math.abs(n), c);
}





































console.log("Start:");

var icon1 = {};
icon1.icon  = 0;
icon1.name = document.getElementById('ID_TBL1_NAME').innerHTML;
icon1.cap1 = document.getElementById('ID_TBL1_CAP1').innerHTML;
icon1.cap2 = document.getElementById('ID_TBL1_CAP2').innerHTML;
icon1.num1 = document.getElementById('ID_TBL1_NUM1').innerHTML;
icon1.num2 = document.getElementById('ID_TBL1_NUM2').innerHTML;

var icon2 = {};
icon2.icon  = 0;
icon2.name = document.getElementById('ID_TBL2_NAME').innerHTML;
icon2.cap1 = document.getElementById('ID_TBL2_CAP1').innerHTML;
icon2.cap2 = document.getElementById('ID_TBL2_CAP2').innerHTML;
icon2.num1 = document.getElementById('ID_TBL2_NUM1').innerHTML;
icon2.num2 = document.getElementById('ID_TBL2_NUM2').innerHTML;

var icon_data = {};
icon_data.icon1 = icon1;
icon_data.icon2 = icon2;


function updateJSON() {
	//icon1.icon  = 0;
	document.getElementById('ID_TBL1_NAME').innerHTML = icon_data.icon1.name;
	document.getElementById('ID_TBL1_CAP1').innerHTML = icon_data.icon1.cap1;
	document.getElementById('ID_TBL1_CAP2').innerHTML = icon_data.icon1.cap2;
	document.getElementById('ID_TBL1_NUM1').innerHTML = icon_data.icon1.num1;
	document.getElementById('ID_TBL1_NUM2').innerHTML = icon_data.icon1.num2;

	//icon2.icon  = 0;
	document.getElementById('ID_TBL2_NAME').innerHTML = icon_data.icon2.name;
	document.getElementById('ID_TBL2_CAP1').innerHTML = icon_data.icon2.cap1;
	document.getElementById('ID_TBL2_CAP2').innerHTML = icon_data.icon2.cap2;
	document.getElementById('ID_TBL2_NUM1').innerHTML = icon_data.icon2.num1.toFixed(3);
	document.getElementById('ID_TBL2_NUM2').innerHTML = icon_data.icon2.num2.toFixed(3);
	
	//var data = string.formatString("123");
	//console.log(data);
	//sprintf("");
	//"123".toFixed(	)
}


var Request = new XMLHttpRequest();

Request.onreadystatechange = function () {
	if (Request.readyState === 4) {
		if (Request.status === 200) {
			
			//console.log("Response ---------------------------------------");
			//console.log(Request.responseText);
			
			//console.log("before parsing icon data -----------------------");
			//console.log(icon_data);
			
			console.log(Request.responseText);
			icon_data = JSON.parse(Request.responseText);
			//console.log("parsed icon data -------------------------------");
			//console.log(icon_data);*/
			
			//document.getElementById('ID_TBL1_NAME').innerHTML = icon_data.icon1.name;
			
			updateJSON();
		}
	}
};

function reqv_getJSON() {
	Request.open("GET", "json", true);
	Request.setRequestHeader("Content-Type", "application/json");
	Request.send();
}

var a = 0;
function onupdate_tmr() {
    //console.log("time works");
	if (a === 0) {
		a = a + 1;
		reqv_getJSON();
	}
}

setInterval(onupdate_tmr, 1000);

//console.log(name1.innerHTML);
//console.log(JSON.stringify(icon1));
//console.log(JSON.stringify(icon_data));


//console.log(String.Format("123 %d"));

//var format = "data %d";

//sprintf("12345", 5);

var x = "123".padding(6);
console.log(x);


Number.prototype.radix = function(r, n, c)
{
    if (!c) c = '0';
    return this.toString(r).padding(n, c);
}

Number.prototype.dec = function(n, c) {
    return this.radix(0x0A, (n) ? n : 2, c);
};

var s111 = 250;

console.log( s111.dec(6,0));