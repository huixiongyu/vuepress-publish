(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{450:function(_,v,e){"use strict";e.r(v);var t=e(54),s=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"前端相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端相关"}},[_._v("#")]),_._v(" 前端相关")]),_._v(" "),e("h2",{attrs:{id:"_1-状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-状态码"}},[_._v("#")]),_._v(" 1.状态码")]),_._v(" "),e("ul",[e("li",[_._v("200 请求成功")]),_._v(" "),e("li",[_._v("3xx\n"),e("ul",[e("li",[_._v("301 永久重定向")]),_._v(" "),e("li",[_._v("302 临时重定向")]),_._v(" "),e("li",[_._v("304 未修改，资源找到但不符合请求条件")])])]),_._v(" "),e("li",[_._v("4xx\n"),e("ul",[e("li",[_._v("400 错误请求")]),_._v(" "),e("li",[_._v("401 要求用户身份认证")]),_._v(" "),e("li",[_._v("403 拒绝请求")]),_._v(" "),e("li",[_._v("404 没有找到")])])]),_._v(" "),e("li",[_._v("5xx\n"),e("ul",[e("li",[_._v("502 服务器内部错误")]),_._v(" "),e("li",[_._v("503 超载或系统维护")])])])]),_._v(" "),e("h2",{attrs:{id:"_2-输入网址到页面选择的整个过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-输入网址到页面选择的整个过程"}},[_._v("#")]),_._v(" 2.输入网址到页面选择的整个过程")]),_._v(" "),e("ul",[e("li",[_._v("浏览器根据 DNS 服务器得到域名的 IP 地址")]),_._v(" "),e("li",[_._v("向这个 IP 的机器发送 HTTP 请求 (TCP连接)")]),_._v(" "),e("li",[_._v("服务器收到、处理并返回 HTTP 请求")]),_._v(" "),e("li",[_._v("浏览器得到返回内容")]),_._v(" "),e("li",[_._v("根据 HTML 结构生成 DOM 树")]),_._v(" "),e("li",[_._v("根据 CSS 生成 CSSOM")]),_._v(" "),e("li",[_._v("将 DOM 和 CSSOM 整合形成 RenderTree")]),_._v(" "),e("li",[_._v("根据 RenderTree 开始渲染和展示")]),_._v(" "),e("li",[_._v("遇到"),e("code",[_._v("<script>")]),_._v("时，会执行并阻塞渲染")])]),_._v(" "),e("p",[e("a",{attrs:{href:"http://fex.baidu.com/blog/2014/05/what-happen/",target:"_blank",rel:"noopener noreferrer"}},[_._v("参考链接"),e("OutboundLink")],1)]),_._v(" "),e("h2",{attrs:{id:"_3-性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-性能优化"}},[_._v("#")]),_._v(" 3.性能优化")]),_._v(" "),e("p",[_._v("两个方向： 减少页面体积、提升网络加载，优化页面渲染")]),_._v(" "),e("ul",[e("li",[_._v("减少页面体积\n"),e("ul",[e("li",[_._v("静态资源压缩(Gzip)、合并(合并JS、CSS、小图片)")]),_._v(" "),e("li",[_._v("静态资源缓存(开启KeepAlive)")]),_._v(" "),e("li",[_._v("使用CDN加载静态资源")]),_._v(" "),e("li",[_._v("按需加载")])])]),_._v(" "),e("li",[_._v("优化页面渲染\n"),e("ul",[e("li",[_._v("CSS在前，JS在后")]),_._v(" "),e("li",[_._v("懒加载")]),_._v(" "),e("li",[_._v("减少DOM操作")]),_._v(" "),e("li",[_._v("事件节流和防抖")]),_._v(" "),e("li",[_._v("后端渲染")]),_._v(" "),e("li",[_._v("尽量使用CSS3动画")])])])]),_._v(" "),e("p",[e("a",{attrs:{href:"https://www.zhihu.com/question/40505685/answer/86898655",target:"_blank",rel:"noopener noreferrer"}},[_._v("常见的前端性能优化手段都有哪些？都有多大收益"),e("OutboundLink")],1),_._v(" "),e("a",{attrs:{href:"https://www.zhihu.com/question/20474326",target:"_blank",rel:"noopener noreferrer"}},[_._v("浏览器允许的并发请求资源数是什么意思？"),e("OutboundLink")],1)]),_._v(" "),e("h2",{attrs:{id:"_4-web安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-web安全"}},[_._v("#")]),_._v(" 4.Web安全")]),_._v(" "),e("p",[e("strong",[_._v("SQL注入")])]),_._v(" "),e("ul",[e("li",[_._v("预防：表单验证")])]),_._v(" "),e("p",[e("strong",[_._v("XSS：跨站脚本攻击")]),_._v("\n它允许用户将恶意代码植入到提供给其他用户使用的页面中，可以简单的理解为一种javascript代码注入。\nXSS的防御措施：")]),_._v(" "),e("ol",[e("li",[_._v("过滤转义输入输出")]),_._v(" "),e("li",[_._v("避免使用"),e("code",[_._v("eval")]),_._v("、"),e("code",[_._v("new Function")]),_._v("等执行字符串的方法，除非确定字符串和用户输入无关")]),_._v(" "),e("li",[_._v("使用cookie的httpOnly属性，加上了这个属性的cookie字段，js是无法进行读写的")]),_._v(" "),e("li",[_._v("使用innerHTML、document.write的时候，如果数据是用户输入的，那么需要对象关键字符进行过滤与转义")])]),_._v(" "),e("p",[e("strong",[_._v("CSRF：跨站请求伪造")]),_._v("\n其实就是网站中的一些提交行为，被黑客利用，在你访问黑客的网站的时候进行操作，会被操作到其他网站上.借用操作的某个操作获取登录验证\nCSRF防御措施：")]),_._v(" "),e("ol",[e("li",[_._v("检测http referer是否是同域名")]),_._v(" "),e("li",[_._v("避免登录的session长时间存储在客户端中")]),_._v(" "),e("li",[_._v("关键请求使用验证码或者token机制")])]),_._v(" "),e("p",[_._v("其他的一些攻击方法还有HTTP劫持、界面操作劫持")]),_._v(" "),e("h2",{attrs:{id:"_5-前端模块化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-前端模块化"}},[_._v("#")]),_._v(" 5.前端模块化")]),_._v(" "),e("ul",[e("li",[_._v("CommonJS：服务器端模块规范，同步加载模块，只有加载完才能执行后面的操作  module.exports或者exports")]),_._v(" "),e("li",[_._v("AMD：非同步加载模块，允许指定回调函数 。module transport规范接口")])]),_._v(" "),e("h2",{attrs:{id:"_6-tcp传输的三次握手、四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-tcp传输的三次握手、四次挥手"}},[_._v("#")]),_._v(" 6.TCP传输的三次握手、四次挥手")]),_._v(" "),e("p",[e("em",[_._v("三次握手：")])]),_._v(" "),e("ul",[e("li",[_._v("客户端发送SYN标志的数据包")]),_._v(" "),e("li",[_._v("服务端回传一个带有SYN/ACK的数据包表示正确传达，并确认信息。")]),_._v(" "),e("li",[_._v("回传一个ACK标志代表握手结束")])]),_._v(" "),e("p",[e("em",[_._v("四次挥手 :")])]),_._v(" "),e("ul",[e("li",[_._v("主动方发送一个FIN")]),_._v(" "),e("li",[_._v("被动方收到后发送ACK")]),_._v(" "),e("li",[_._v("被动方发送FIN")]),_._v(" "),e("li",[_._v("主动方收到后发送ACK")])]),_._v(" "),e("p",[_._v("[TCP为什么是三次握手，而不是两次或四次？](TCP 为什么是三次握手，而不是两次或四次？ - 知乎\nhttps://www.zhihu.com/question/24853633)")]),_._v(" "),e("h2",{attrs:{id:"_7-重排和重绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-重排和重绘"}},[_._v("#")]),_._v(" 7.重排和重绘")]),_._v(" "),e("p",[e("strong",[_._v("重排：")]),_._v(" 渲染树需要重新分析计算节点的尺寸\n"),e("strong",[_._v("重绘：")]),_._v(" 几何属性和样式的改变")]),_._v(" "),e("h2",{attrs:{id:"_8-描述cookie、sessionstorage和localstorage的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-描述cookie、sessionstorage和localstorage的区别"}},[_._v("#")]),_._v(" 8.描述cookie、sessionStorage和localStorage的区别")]),_._v(" "),e("p",[_._v("sessionStorage用于在本地存储一个会话（session）中的数据，这些数据只有 在同一个会话中的页面才能访问并且当会话结束后数据页随之销毁。因此sessionStorage不是一种持久化的 本地存储，仅仅是会话级别的存储。")]),_._v(" "),e("p",[_._v("localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。")]),_._v(" "),e("p",[_._v("cookie是一小块数据服务器发送到用户的浏览器。浏览器会保存它与下一个请求并将其发送回相同的服务器。通常,用来判断两个请求来自同一个浏览器,让用户登录时,例如。它是记得有状态信息的无状态的HTTP协议。需要指定作用域，不可以跨域调用。")]),_._v(" "),e("p",[_._v("好处：")]),_._v(" "),e("ul",[e("li",[_._v("离线浏览")]),_._v(" "),e("li",[_._v("速度——已缓存资源加载得更快")]),_._v(" "),e("li",[_._v("减少服务器负载")])]),_._v(" "),e("h2",{attrs:{id:"_9-浏览器渲染原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-浏览器渲染原理"}},[_._v("#")]),_._v(" 9.浏览器渲染原理")]),_._v(" "),e("p",[e("img",{attrs:{src:"http://qiniu.hackslog.cn/18-11-14/80719668.jpg",alt:"tree"}})]),_._v(" "),e("h2",{attrs:{id:"_10-websocket和ajax的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-websocket和ajax的区别"}},[_._v("#")]),_._v(" 10.websocket和ajax的区别")]),_._v(" "),e("p",[e("a",{attrs:{href:"http://www.woshipm.com/ucd/1051915.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("关于Ajax和websocket，你应该知道的事儿"),e("OutboundLink")],1)]),_._v(" "),e("p",[_._v("Ajax 的优点在于它在浏览器与web服务器之间使用异步数据传输（HTTP请求），不阻塞用户，核心对象是XMLHTTPRequest。通过这个对象，"),e("strong",[_._v("js可在不重新加载页面的情况下与web服务器交换数据")]),_._v("。")]),_._v(" "),e("p",[e("strong",[_._v("websocket是HTML5一种新的协议，实现了浏览器与服务器全双工通信")]),_._v("。其本质是：先通过HTTP/HTTPS协议进行握手后创建一个用于交换数据的TCP连接，服务端与客户端通过此TCP连接进行实时通信。")]),_._v(" "),e("p",[_._v("Ajax与websocket最大的不同在于："),e("strong",[_._v("Ajax需要客户端发起请求，websocket服务器和客户端可以互相实时推送消息。")])]),_._v(" "),e("h2",{attrs:{id:"_11-跨域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-跨域"}},[_._v("#")]),_._v(" 11.跨域")]),_._v(" "),e("p",[_._v("协议、域名、端口\n防止跨站请求伪造")]),_._v(" "),e("ul",[e("li",[_._v("JSONP")]),_._v(" "),e("li",[_._v("document.domain + iframe(仅限于主域相同，子域不同)")]),_._v(" "),e("li",[_._v("lcoation.hash + iframe")]),_._v(" "),e("li",[_._v("window.name + iframe")]),_._v(" "),e("li",[_._v("postMessage跨域")]),_._v(" "),e("li",[_._v("nginx反向代理")]),_._v(" "),e("li",[_._v("nodejs中间件代理")]),_._v(" "),e("li",[_._v("Websocket协议")])]),_._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('response.setHeader("Access-Control-Allow-Origin", "http://m.juejin.com/");  // 第二个参数填写允许跨域的域名称，不建议直接写 "*"\nresponse.setHeader("Access-Control-Allow-Headers", "X-Requested-With");\nresponse.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");\n\n// 接收跨域的cookie\nresponse.setHeader("Access-Control-Allow-Credentials", "true");\n')])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br"),e("span",{staticClass:"line-number"},[_._v("2")]),e("br"),e("span",{staticClass:"line-number"},[_._v("3")]),e("br"),e("span",{staticClass:"line-number"},[_._v("4")]),e("br"),e("span",{staticClass:"line-number"},[_._v("5")]),e("br"),e("span",{staticClass:"line-number"},[_._v("6")]),e("br")])]),e("h2",{attrs:{id:"_12-http请求头和响应头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-http请求头和响应头"}},[_._v("#")]),_._v(" 12.HTTP请求头和响应头")]),_._v(" "),e("ul",[e("li",[_._v("请求头\n"),e("ul",[e("li",[_._v("请求行")]),_._v(" "),e("li",[_._v("请求头")]),_._v(" "),e("li",[_._v("请求体")])])])])])}),[],!1,null,null,null);v.default=s.exports}}]);