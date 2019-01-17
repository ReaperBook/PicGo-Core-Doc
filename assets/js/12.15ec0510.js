(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{177:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("默认上传图床为"),a("a",{attrs:{href:"https://sm.ms/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM.MS"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),a("blockquote",[a("p",[t._v("上传剪贴板里的图片的实现来自于"),a("a",{attrs:{href:"https://github.com/Spades-S/vs-picgo",target:"_blank",rel:"noopener noreferrer"}},[t._v("vs-picgo"),a("OutboundLink")],1),t._v("，感谢"),a("a",{attrs:{href:"https://github.com/Spades-S",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spades-S"),a("OutboundLink")],1),t._v("！")])]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),a("p",[t._v("创建一个js文件（例如picgo.js）：")]),t._v(" "),t._m(11),a("p",[t._v("运行js：")]),t._v(" "),t._m(12)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速上手")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),s("p",[this._v("请确保你的 Node.js 版本 >= 8。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"临时尝鲜"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#临时尝鲜","aria-hidden":"true"}},[this._v("#")]),this._v(" 临时尝鲜")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("如果你的npm>=5.2，可以使用npx尝试一下picgo，这条命令会临时安装picgo，并在使用结束后删除它。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("npx picgo upload ./xxxx.jpg\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"全局安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("使用CLI部分")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装")]),t._v("\nyarn global add picgo "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者 npm install picgo -g")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上传具体路径图片")]),t._v("\npicgo upload /xxx/xxx.jpg\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上传剪贴板里的第一张图片（上传时会将格式转成png）")]),t._v("\npicgo upload\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"现有项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现有项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 现有项目")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("使用API部分")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn add picgo -D "),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 或者 npm intall picgo -D")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" PicGo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'picgo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" picgo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PicGo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将使用默认的配置文件：~/.picgo/config.json")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上传具体路径下的图片")]),t._v("\npicgo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("upload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/xxx/xxx.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上传剪贴板里的第一张图片（上传时会将格式转为png）")]),t._v("\npicgo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("upload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("node picgo.js\n")])])])}],!1,null,null,null);n.options.__file="getting-started.md";s.default=n.exports}}]);