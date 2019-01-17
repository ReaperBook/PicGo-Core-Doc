(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{175:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),e("p",[t._v("picgo 命令行的实现来自于"),e("a",{attrs:{href:"https://github.com/tj/commander.js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("commander.js"),e("OutboundLink")],1),t._v("与"),e("a",{attrs:{href:"https://github.com/SBoudrias/Inquirer.js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("inquirer.js"),e("OutboundLink")],1),t._v("。下面将介绍各个命令以及如何配置。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),e("p",[t._v("picgo内置了如下的内容：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),e("p",[t._v("picgo内置的图床的配置项细节可以参考PicGo的配置"),e("a",{attrs:{href:"https://github.com/Molunerfinn/PicGo/wiki/%E8%AF%A6%E7%BB%86%E7%AA%97%E5%8F%A3%E7%9A%84%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("如果某个uploader或者transformer或者plugin没有可配置项，picgo也会提示配置成功，不需要担心。")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),e("p",[t._v("如果不显式指定上传的文件，picgo将会上传剪贴板里的第一张图片（由于跨平台限制，上传时将会转为png格式）。通常这在截图后上传非常有用。")]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),e("p",[t._v("你可以通过npm的官方网站查找目前所有的picgo的"),e("a",{attrs:{href:"https://www.npmjs.com/search?q=picgo-plugin-",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件"),e("OutboundLink")],1),t._v("。picgo的插件命名规则为"),e("code",[t._v("picgo-plugin-[name]")]),t._v("。然后再通过：")]),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),e("p",[t._v("类似于"),e("code",[t._v("vue-cli")]),t._v("的"),e("code",[t._v("init")]),t._v("命令，picgo也提供了官方的插件模板叫做"),e("a",{attrs:{href:"https://github.com/PicGo/picgo-template-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("picgo-template-plugin"),e("OutboundLink")],1),t._v("，不过你在"),e("code",[t._v("init")]),t._v("的时候，模板名只需要写"),e("code",[t._v("plugin")]),t._v("，内部会自动判断如果非"),e("code",[t._v("username/repo")]),t._v("形式的话，自动加上"),e("code",[t._v("PicGo/picgo-template-")]),t._v("的前缀。")]),t._v(" "),e("p",[t._v("这个命令用于方便用户快速开发一个picgo插件。关于插件开发，可以查看"),e("router-link",{attrs:{to:"/zh/dev-guide/cli.html"}},[t._v("插件开发")]),t._v("一章。")],1),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"cli命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli命令","aria-hidden":"true"}},[this._v("#")]),this._v(" CLI命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("picgo 支持命令行模式直接使用。在你全局安装了"),s("code",[this._v("picgo")]),this._v("之后，你可以通过"),s("code",[this._v("picgo -h")]),this._v("来查看所有命令：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ picgo -h\n\n  Usage: picgo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  Options:\n\n    -v, --version                 output the version number\n    -d, --debug                   debug mode\n    -s, --silent                  silent mode\n    -c, --config "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("           "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" config path\n    -h, --help                    output usage information\n\n  Commands:\n\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("add "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("             "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" picgo plugin\n    uninstall"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("            uninstall picgo plugin\n    update "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                  update picgo plugin\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("config "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("           configure config of picgo modules\n    upload"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("u "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                  upload, go go go\n    use "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                         use modules of picgo\n    init "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("project"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  create picgo plugin's development templates\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("其中，命令选项如果是用"),e("code",[t._v("<>")]),t._v("包围起来的为必须输入项，如果是用"),e("code",[t._v("[]")]),t._v("包围起来的则为可选输入项。\n有些命令支持简写，比如"),e("code",[t._v("picgo upload")]),t._v("可以写为"),e("code",[t._v("picgo u")]),t._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[this._v("#")]),this._v(" use")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("该命令用于选择picgo模块。模块主要有三种：1. transformer 2. uploader 3. plugins")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ picgo use -h\n\n  Usage: use "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n\n  use modules of picgo\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("transformer:\n"),e("ul",[e("li",[t._v("path")]),t._v(" "),e("li",[t._v("base64")])])]),t._v(" "),e("li",[t._v("uploader:\n"),e("ul",[e("li",[t._v("smms -> SM.MS")]),t._v(" "),e("li",[t._v("tcyun -> 腾讯云COS")]),t._v(" "),e("li",[t._v("upyun -> 又拍云")]),t._v(" "),e("li",[t._v("aliyun -> 阿里云OSS")]),t._v(" "),e("li",[t._v("qiniu -> 七牛云")]),t._v(" "),e("li",[t._v("imgur -> Imgur")]),t._v(" "),e("li",[t._v("weibo -> 微博图床")]),t._v(" "),e("li",[t._v("github -> GitHub")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[this._v("通常来说，在命令行模式下你只需要选择"),s("code",[this._v("path")]),this._v("作为picgo的"),s("code",[this._v("transformer")]),this._v("即可。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("具体使用可以通过"),s("code",[this._v("picgo use")]),this._v(" 或者 "),s("code",[this._v("picgo use uploader|transformer|plugins")]),this._v("来选择你需要的模块内容，这将会进入一个交互式命令行：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ picgo use\n? Use an uploader "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Use arrow keys"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  smms\n❯ tcyun\n  weibo\n  github\n  qiniu\n  imgur\n  aliyun\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Move up and down to reveal "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" choices"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("选择完后，picgo将会使用你选择的模块进行上传。在上传前有些模块可能需要配置。比如一些图床的key、token等。这个时候你就需要下面会提到的命令"),s("code",[this._v("set|config")]),this._v("来配置你选择的模块内容。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"config-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-set","aria-hidden":"true"}},[this._v("#")]),this._v(" config|set")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("该命令用于配置某些模块的一些配置项。模块主要有三种：1. transformer 2. uploader 3. plugins")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ picgo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" -h\n\n  Usage: "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("config "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  configure config of picgo modules\n\n  Options:\n\n    -h, --help  output usage information\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[this._v("通常来说，picgo默认只需要配置Uploader即可。所以你可以直接通过"),s("code",[this._v("picgo set uploader")]),this._v("或者"),s("code",[this._v("picgo set uploader weibo|tcyun|...")]),this._v("等命令直接进入交互式命令行。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ picgo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" transformer path\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PicGo SUCCESS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Configure config successfully"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"upload-u"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upload-u","aria-hidden":"true"}},[this._v("#")]),this._v(" upload|u")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("该命令用于上传图片到图床。通常是上传磁盘上已有的图片，可以同时上传多张。上传多张图片的时候用空格隔开。也可以上传剪贴板里的第一张图片。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[this._v("请确保你上传前使用了"),s("code",[this._v("use")]),this._v("以及"),s("code",[this._v("set")]),this._v("命令配置好了需要上传的图床。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ picgo u ./Test-测试.jpg ./test-qiniu.png\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PicGo INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Before transform\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PicGo INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Transforming"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PicGo INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Before upload\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PicGo INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Uploading"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PicGo SUCCESS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\nhttps://i.loli.net/2018/09/06/5b9134645b9df.jpg\nhttps://i.loli.net/2018/09/06/5b9134651af34.png\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ picgo u\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PicGo INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Before transform\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PicGo INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Transforming"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PicGo INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Before upload\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PicGo INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Uploading"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PicGo SUCCESS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\nhttps://i.loli.net/2018/09/06/5b9134645b9df.jpg\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"install-add"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-add","aria-hidden":"true"}},[this._v("#")]),this._v(" install|add")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("该命令用于安装npm上的picgo的插件。picgo的插件名都是以"),s("code",[this._v("picgo-plugin-")]),this._v("开头的。在安装、卸载或者更新的时候，你只需要输入"),s("code",[this._v("name")]),this._v("值而不需要输入"),s("code",[this._v("picgo-plugin-")]),this._v("的前缀。可以一次性安装多个插件，用空格隔开即可。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[this._v("PicGo会把插件安装在配置文件所在的目录下。默认配置文件在"),s("code",[this._v("~/.picgo/")]),this._v("下，所以插件会安装在"),s("code",[this._v("~/.picgo/node_modules/")]),this._v("下。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("picgo "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("来安装插件。你安装了之后，可以通过"),s("code",[this._v("picgo ch plugins")]),this._v("来选择开启或者禁用这个插件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"uninstall-rm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-rm","aria-hidden":"true"}},[this._v("#")]),this._v(" uninstall|rm")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("该命令用于删除你所安装的picgo插件。如果不存在将会报错。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("picgo uninstall "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[this._v("#")]),this._v(" update")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("该命令用于更新已经安装的picgo插件。如果不存在将会报错。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("picgo update "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[this._v("#")]),this._v(" init")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("该命令用于下载和生成picgo的插件开发模板")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ picgo init -h\nUsage: init "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("project"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nOptions:\n\n  --clone     use "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone\n  --offline   use cached template\n  -h, --help  output usage information\n\nExamples:\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create a new project with an official template")]),t._v("\n  $ picgo init plugin my-project\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create a new project straight from a github template")]),t._v("\n  $ picgo init username/repo my-project\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"v-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-version","aria-hidden":"true"}},[this._v("#")]),this._v(" -v, --version")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("输入"),s("code",[this._v("picgo -v")]),this._v("或者"),s("code",[this._v("picgo --version")]),this._v("将输出当前picgo的版本信息。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"d-debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#d-debug","aria-hidden":"true"}},[this._v("#")]),this._v(" -d, --debug")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在输入任何有效命令的情况下加入"),s("code",[this._v("-d")]),this._v("或者"),s("code",[this._v("--debug")]),this._v("会进入"),s("code",[this._v("debug")]),this._v("模式。将会输出更加详细的报错信息，指出错误的具体位置。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"c-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-config","aria-hidden":"true"}},[this._v("#")]),this._v(" -c, --config")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在输入任何有效命令的情况下加入"),s("code",[this._v("-c <path>")]),this._v("可以指定picgo的配置文件所在处。默认的配置文件是"),s("code",[this._v("~/.pigco/config.json")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[this._v("picgo将会读取配置文件所在目录下"),s("code",[this._v("node_modules")]),this._v("的插件。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"s-silent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s-silent","aria-hidden":"true"}},[this._v("#")]),this._v(" -s, --silent")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在输入任何有效命令的情况下加入"),s("code",[this._v("-s")]),this._v("或者"),s("code",[this._v("--silent")]),this._v("将会进入静默模式，除了报错信息之外，picgo在命令行里将不会输出任何信息。")])}],!1,null,null,null);n.options.__file="commands.md";s.default=n.exports}}]);