(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{454:function(s,n,a){"use strict";a.r(n);var t=a(54),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"手撕代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手撕代码"}},[s._v("#")]),s._v(" 手撕代码")]),s._v(" "),a("h2",{attrs:{id:"_1-判断一个字符串出现最多的字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-判断一个字符串出现最多的字符"}},[s._v("#")]),s._v(" 1.判断一个字符串出现最多的字符")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\tfunction max_char(str){\n\t\tvar obj = {};\n\t\tfor(var i =0;i<str.length;i++){\n\t\t\tif(!obj[str.charAt(i)]){\n\t\t\t\tobj[str.charAt(i)]=1;\n\t\t\t}else{\n\t\t\t\tobj[str.charAt(i)]++;\n\t\t\t}\n\t\t}\n\t\tvar num = 0;\n\t\tvar ch ='';\n\t\tfor(var key in obj){\n\t\t\tif(obj[key]>num){\n\t\t\t\tch = key;\n\t\t\t\tnum = obj[key];\n\t\t\t}\n\t\t}\n\t\treturn ch;\n\t}\n\n\tconsole.log(max_char('how are you?'));\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h2",{attrs:{id:"_2-解析url-将-号分割为对象的形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解析url-将-号分割为对象的形式"}},[s._v("#")]),s._v(" 2.解析URL，将=号分割为对象的形式")]),s._v(" "),a("p",[s._v('"?"号后面是参数，键值对是按"&"分隔的，键和值在"="两边')]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function queryString(url){\n\tlet arr = [];\n\tlet res ={};\n\tarr=url.split("?")[1].split(\'&\');\n\tfor(let i=0;i<arr.length;i++){\n\t\tif(arr[i].indexOf("=")!=-1){\n\t\t\tlet str=arr[i].split("=");\n\t\t\tres[str[0]]=str[1];\n\t\t}else{\n\t\t\tres[arr[i]]="";\n\t\t}\n\t}\n\tres=JSON.stringify(res);\n\treturn res;\n}\n console.log(queryString(\'www.baidu.com?a=1&b=2&c=test&d\'));\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("方法二：正则表达式")]),s._v(" "),a("h2",{attrs:{id:"_3-多维数组转化为一维数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-多维数组转化为一维数组"}},[s._v("#")]),s._v(" 3.多维数组转化为一维数组")]),s._v(" "),a("ol",[a("li",[s._v("字符串方法")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var arr = [1,[2,3],[4,5,6]];\nnewArr = arr.toString().split(',');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("递归")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var tmp = [];\nfunction sortArr (arr) {\n\n    for(var i = 0;i<arr.length;i++){\n\n        if(arr[i] instanceof Array){\n\n        sortArr(arr[i]);\n\n        }else{\n\n            tmp.push(arr[i]);\n\n        }\n\n    }\n\n    return tmp;\n\n} \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/u010705091/article/details/75369710",target:"_blank",rel:"noopener noreferrer"}},[s._v("js多维数组转一维"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_4-jquery-实现复选框的全选和反选效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-jquery-实现复选框的全选和反选效果"}},[s._v("#")]),s._v(" 4.jQuery 实现复选框的全选和反选效果")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://qiniu.hackslog.cn/18-11-9/66378542.jpg",alt:"checkbox"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <title></title>\n    </head>\n    <body>\n        <div id="box1">\n            <button>全选</button>\n            <button>不选</button>\n            <button>反选</button>\n        </div>\n        <div id="box2">\n            <ul>\n                <li>选项1：<input type="checkbox"></li>\n                <li>选项2：<input type="checkbox"></li>\n                <li>选项3：<input type="checkbox"></li>\n                <li>选项4：<input type="checkbox"></li>\n                <li>选项5：<input type="checkbox"></li>\n                <li>选项6：<input type="checkbox"></li>\n                <li>选项7：<input type="checkbox"></li>\n                <li>选项8：<input type="checkbox"></li>\n                <li>选项9：<input type="checkbox"></li>\n\n            </ul>\n        </div>\n       <script>\n            window.onload = function(){\n                // 获取所有的按钮\n                var btns = document.getElementsByTagName("button");\n                // 获取所有的选项input\n                var inputs = document.getElementsByTagName("input");\n\n                // 全选或者不选的时候 调用此函数\n                function fun(flag){\n                    for (var i=0; i<inputs.length;i++) {\n                        inputs[i].checked = flag;\n                    }\n                }\n\n                //获取第一个按钮  “全选”\n                btns[0].onclick = function(){\n                    fun(true);\n                }\n\n                // 获取第二个按钮 "不选"\n                btns[1].onclick = function(){\n                    fun(false);\n                }\n                // 获取第三个按钮 “反选”\n                btns[2].onclick = function(){\n                    // 遍历所有的选项，判断每一个选项是否被选中\n                    for (var i=0;i<inputs.length;i++) {\n                        inputs[i].checked == true ? inputs[i].checked = false : inputs[i].checked = true;\n                    }\n                }\n\n            }\n        <\/script>\n    </body>\n</html>\n\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br")])]),a("p",[s._v("jQuery实现：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://qiniu.hackslog.cn/18-11-9/9904814.jpg",alt:"check"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <title></title>\n\n        <link rel="stylesheet" type="text/css" href="http://www.sucaihuo.com/jquery/css/common.css" />\n        <style type="text/css">\n            ul li{line-height:30px; padding:4px 0; font-size:14px}\n        </style>\n\n    </head>\n   <body>\n        <div class="container">\n            <h2 class="title">jQuery全选、反选与获取选中值</h2>\n            <div class="demo">\n                <ul id="list">   \n                    <li><label><input type="checkbox" value="1"> 1.老男孩</label></li> \n                    <li><label><input type="checkbox" value="2"> 2.我最亲爱的</label></li> \n                    <li><label><input type="checkbox" value="3"> 3.邂逅</label></li> \n                    <li><label><input type="checkbox" value="4"> 4.心痛2013</label></li> \n                    <li><label><input type="checkbox" value="5"> 5.要爱爱</label></li> \n                    <li><label><input type="checkbox" value="6"> 6.怎么说我不爱你</label></li> \n                </ul> \n                <input type="checkbox" id="all"/> \n                <input type="button" value="全选" class="btn" id="selectAll"/>   \n                <input type="button" value="全不选" class="btn" id="unSelect"/>   \n                <input type="button" value="反选" class="btn" id="reverse"/>   \n                <input type="button" value="获得选中值" class="btn" id="getValue"/> \n            </div>  \n        </div>\n        \n        <script type="text/javascript" src="http://code.jquery.com/jquery-1.4.1.min.js"><\/script>\n        <script type="text/javascript">\n            $(function() {\n                //全选或全不选\n                $("#all").click(function() {\n                    if (this.checked) {\n                        $("#list :checkbox").attr("checked", true);\n                    } else {\n                        $("#list :checkbox").attr("checked", false);\n                    }\n                });\n                //全选  \n                $("#selectAll").click(function() {\n                    $("#list :checkbox,#all").attr("checked", true);\n                });\n                //全不选\n                $("#unSelect").click(function() {\n                    $("#list :checkbox,#all").attr("checked", false);\n                });\n                //反选 \n                $("#reverse").click(function() {\n                    $("#list :checkbox").each(function() {\n                        $(this).attr("checked", !$(this).attr("checked"));\n                    });\n                    allCheck();\n                });\n \n                //设置全选复选框\n                $("#list :checkbox").click(function() {\n                    allCheck();\n                });\n \n                //获取选中选项的值\n                $("#getValue").click(function() {\n                    var valArr = new Array;\n                    $("#list :checkbox[checked]").each(function(i) {\n                        valArr[i] = $(this).val();\n                    });\n                    var vals = valArr.join(\',\');\n                    alert(vals);\n                });\n            });\n            function allCheck() {\n                var num_all = $("#list :checkbox").size(); //选项总个数\n                var num_checked = $("#list :checkbox:checked").size(); //选中个数\n                if (num_all == num_checked) { //若选项总个数等于选中个数 \n                    $("#all").attr("checked", true); //全选选中\n                } else {\n                    $("#all").attr("checked", false);\n                }\n            }\n        <\/script> \n \n    </body>\n\n</html>\n\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/diligentkong/article/details/54709694",target:"_blank",rel:"noopener noreferrer"}},[s._v("js实现全选、不选和反选效果"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/0201zcr/p/4704468.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("jQuery checkbox的相关操作——全选、反选、获得所有选中的checkbox"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_5-实现数组去重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-实现数组去重"}},[s._v("#")]),s._v(" 5.实现数组去重")]),s._v(" "),a("p",[s._v("基本的操作：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function unique(arr){\n    var result =[],isRepeat;\n    for(var i=0,len = arr.length;i<len;i++){\n        isRepeat = false;\n        for(var j=0,len=result.length; j<len;j++){\n            if(arr[i] == result[j]){\n                isRepeat = true;\n                break;\n            }\n        }\n        if(!isRepeat){\n            result.push(arr[i]);\n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("使用对象的方式去重：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\t\tvar arr = [5,'5', 5, 2,\"2\",2,1,3];\n\n\t\tfunction unique(arr){\n\t  \t\tvar brr =[],obj={};\n  \t\t\tfor(var i=0;i<arr.length; i++){\n  \t\t\t\tif(!obj[arr[i]]){\n  \t\t\t\t\tobj[arr[i]] = true;\n  \t\t\t\t\tbrr.push(arr[i]);\n  \t\t\t\t}\n  \t\t\t}\t\n  \t\t\treturn brr;\t\t\n\t\t}\n\t\tvar result = (unique(arr));\n\t\tconsole.log(result);  //5 2 1 3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651550928&idx=1&sn=0912e56c7ccbb68cf36562e723e29da0&scene=1&srcid=0612ekFt6xkwpwwFhCDSPKnM#rd",target:"_blank",rel:"noopener noreferrer"}},[s._v("面试必问：数组去重"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"斐波那契数列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#斐波那契数列"}},[s._v("#")]),s._v(" 斐波那契数列")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function fibonacci(n){\n    if(n==0 || n == 1 ) return n;\n    else return fibonacci(n-1) + fibonacci(n-2);\n }\n\nconsole.log(fibonacci(10));\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);