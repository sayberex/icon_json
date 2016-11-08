local cjson = require("cjson");
local json  = 12;

icon_data1 = {
    icon    = 1;        					--icon number
    name    = "icon 1";						--short caption
    cap1    = "description 1 for icon 1";   --short description
    cap2    = "description 2 for icon 1";   --short description
    number1 = 10;        					--integer number1
    number2 = 20;        					--integer number2
};

icon_data2 = {
    icon    = 2;        					--icon number
    name    = "icon 2";						--short caption
    cap1    = "description 1 for icon 2";   --short description
    cap2    = "description 2 for icon 2";   --short description
    number1 = 30;        					--integer number1
    number2 = 40;        					--integer number2
};

local jdat = {
	aaa = 10
};

icon_data = {};
icon_data.icon1 = icon_data1;
icon_data.icon2 = icon_data2;

--print(cjson.encode(mydata));

--ngx.say("string++");
--print("printstr");
--print(cjson.encode(json));

ngx.header["Content-type"] = "application/json";
ngx.status = 429;
ngx.say(cjson.encode(icon_data));	
ngx.exit(ngx.OK);