"use strict";




















/*
// The string multipling functions
String.prototype.dup = function() {
    var val = this.valueOf();
    return val + val;
}

String.prototype.repeat = function(n) {
    if (!n || n <= 0) return "";
    if (!this.origin) this.origin = this.valueOf();
    var val = this.repeat(parseInt(n / 2));
    return ((n % 2) ? this.origin : "") + val + val;
}

// The padding functions
String.prototype.padding = function(n, c) {
    if (!c) c = " ";
    if (c.length > 1) c = c.charAt(0);
    var val = this.valueOf();
    var pad = c.repeat(Math.abs(n) - this.length);
    if (n < 0)
    return val + pad;
    return pad + val;
}

String.prototype.leftPad = function(n, c) {
    return this.padding(Math.abs(n), c);
}

String.prototype.rightPad = function(n, c) {
    return this.padding(-Math.abs(n), c);
}


console.log("123".padding(6, " "));
*/






















function sprintf( ) {   // Return a formatted string
    //
    // +   original by: Ash Searle (http://hexmen.com/blog/)
    // + namespaced by: Michael White (http://crestidg.com)
 
    var regex = /%%|%(\d+\$)?([-+#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
    var a = arguments, i = 0, format = a[i++];
 
    // pad()
    var pad = function(str, len, chr, leftJustify) {
        var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
        return leftJustify ? str + padding : padding + str;
    };
 
    // justify()
    var justify = function(value, prefix, leftJustify, minWidth, zeroPad) {
        var diff = minWidth - value.length;
        if (diff > 0) {
            if (leftJustify || !zeroPad) {
            value = pad(value, minWidth, ' ', leftJustify);
            } else {
            value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
            }
        }
        return value;
    };
 
    // formatBaseX()
    var formatBaseX = function(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
        // Note: casts negative numbers to positive ones
        var number = value >>> 0;
        prefix = prefix && number && {'2': '0b', '8': '0', '16': '0x'}[base] || '';
        value = prefix + pad(number.toString(base), precision || 0, '0', false);
        return justify(value, prefix, leftJustify, minWidth, zeroPad);
    };
 
    // formatString()
    var formatString = function(value, leftJustify, minWidth, precision, zeroPad) {
        if (precision != null) {
            value = value.slice(0, precision);
        }
        return justify(value, '', leftJustify, minWidth, zeroPad);
    };
 
    // finalFormat()
    var doFormat = function(substring, valueIndex, flags, minWidth, _, precision, type) {
        if (substring == '%%') return '%';
 
        // parse flags
        var leftJustify = false, positivePrefix = '', zeroPad = false, prefixBaseX = false;
        for (var j = 0; flags && j < flags.length; j++) switch (flags.charAt(j)) {
            case ' ': positivePrefix = ' '; break;
            case '+': positivePrefix = '+'; break;
            case '-': leftJustify = true; break;
            case '0': zeroPad = true; break;
            case '#': prefixBaseX = true; break;
        }
 
        // parameters may be null, undefined, empty-string or real valued
        // we want to ignore null, undefined and empty-string values
        if (!minWidth) {
            minWidth = 0;
        } else if (minWidth == '*') {
            minWidth = +a[i++];
        } else if (minWidth.charAt(0) == '*') {
            minWidth = +a[minWidth.slice(1, -1)];
        } else {
            minWidth = +minWidth;
        }
 
        // Note: undocumented perl feature:
        if (minWidth < 0) {
            minWidth = -minWidth;
            leftJustify = true;
        }
 
        if (!isFinite(minWidth)) {
            throw new Error('sprintf: (minimum-)width must be finite');
        }
 
        if (!precision) {
            precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : void(0);
        } else if (precision == '*') {
            precision = +a[i++];
        } else if (precision.charAt(0) == '*') {
            precision = +a[precision.slice(1, -1)];
        } else {
            precision = +precision;
        }
 
        // grab value using valueIndex if required?
        var value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];
 
        switch (type) {
            case 's': return formatString(String(value), leftJustify, minWidth, precision, zeroPad);
            case 'c': return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
            case 'b': return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'o': return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'x': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'X': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
            case 'u': return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'i':
            case 'd': {
                        var number = parseInt(+value);
                        var prefix = number < 0 ? '-' : positivePrefix;
                        value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                        return justify(value, prefix, leftJustify, minWidth, zeroPad);
                    }
            case 'e':
            case 'E':
            case 'f':
            case 'F':
            case 'g':
            case 'G':
                        {
                        var number = +value;
                        var prefix = number < 0 ? '-' : positivePrefix;
                        var method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                        var textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                        value = prefix + Math.abs(number)[method](precision);
                        return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                    }
            default: return substring;
        }
    };
 
    return format.replace(regex, doFormat);
}

//console.log(sprintf("ss %05d", 1));























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

