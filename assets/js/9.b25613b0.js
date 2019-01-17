(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{174:function(t,e,i){"use strict";i.r(e);var r=i(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("p",[t._v("PicGo-Core是"),i("a",{attrs:{href:"https://github.com/Molunerfinn/PicGo",target:"_blank",rel:"noopener noreferrer"}},[t._v("PicGo"),i("OutboundLink")],1),t._v("2.0版本里将会预置的底层核心组件。它可以看做是一个简单的上传流程系统。")]),t._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[t._v("除个别特意声明外，本文档里的"),i("code",[t._v("picgo")]),t._v("与"),i("code",[t._v("PicGo-Core")]),t._v("将视为同一个东西。而"),i("code",[t._v("PicGo")]),t._v("将视为"),i("code",[t._v("picgo")]),t._v("的"),i("a",{attrs:{href:"https://github.com/Molunerfinn/PicGo",target:"_blank",rel:"noopener noreferrer"}},[t._v("electron版"),i("OutboundLink")],1),t._v("。")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),i("p",[t._v("下图是PicGo-Core的生命周期：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),i("p",[t._v("使用者可以通过CLI输入图片或者通过API调用输入图片，而后picgo将会按照上述生命周期流程实现图片上传并获取URL。")]),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 介绍")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[this._v("#")]),this._v(" 特性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("支持CLI调用")]),this._v(" "),e("li",[this._v("支持API调用")]),this._v(" "),e("li",[this._v("支持插件系统")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"它是如何工作的？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#它是如何工作的？","aria-hidden":"true"}},[this._v("#")]),this._v(" 它是如何工作的？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/picgo-core-fix.jpg",alt:"flow"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4个部件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4个部件","aria-hidden":"true"}},[this._v("#")]),this._v(" 4个部件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Input（输入）：接受来自外部的图片输入，默认是通过路径或者完整的图片base64信息")]),this._v(" "),e("li",[this._v("Transformer（转换器）：把输入转换成可以被上传器上传的图片对象（包含图片尺寸、base64、图片名等信息）")]),this._v(" "),e("li",[this._v("Uploader（上传器）：将来自转换器的输出上传到指定的地方，默认的上传器将会是SM.MS")]),this._v(" "),e("li",[this._v("Output（输出）：输出上传的结果，通常可以在输出的imgUrl里拿到结果")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3个生命周期钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3个生命周期钩子","aria-hidden":"true"}},[this._v("#")]),this._v(" 3个生命周期钩子")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("beforeTransform：可以获取input信息")]),this._v(" "),e("li",[this._v("beforeUpload：可以获取通过转换器的output信息")]),this._v(" "),e("li",[this._v("afterUpload：可以获取最终的output信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),e("p",[this._v("插件可以开发不同的Uploader、Transformer，还可以接入3个生命周期钩子实现复杂的上传需求。")])])}],!1,null,null,null);s.options.__file="README.md";e.default=s.exports}}]);