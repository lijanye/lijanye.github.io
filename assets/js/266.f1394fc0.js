(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{613:function(_,v,l){"use strict";l.r(v);var e=l(42),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h3",{attrs:{id:"webpack基础"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#webpack基础"}},[_._v("#")]),_._v(" webpack基础")]),_._v(" "),l("h4",{attrs:{id:"entry入口文件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#entry入口文件"}},[_._v("#")]),_._v(" entry入口文件")]),_._v(" "),l("ul",[l("li",[l("p",[_._v("path.join 方法是将多个参数字符串合并成一个路径字符串")])]),_._v(" "),l("li",[l("ul",[l("li",[_._v("path.join(_dirname, ‘/a’, ‘/b’)   当前路径/a/b")])])]),_._v(" "),l("li",[l("ul",[l("li",[_._v("path.join(_dirname, ‘/a’, ‘/b’, ‘..’)   当前路径/a")])])]),_._v(" "),l("li",[l("p",[_._v("Path.resolve 使用程序为根目录 作为起点 根据参数解析出一个绝对路径以应用程序为根目录 普通字符串代表子目录  / 代表绝对路径根目录")])]),_._v(" "),l("li",[l("ul",[l("li",[_._v("path.resolve('a','/c')  E:/c  要小心使用斜杠")])])]),_._v(" "),l("li",[l("ul",[l("li",[_._v("path.resolve(__dirname,'img/so')  当前路径/img/so")])])])]),_._v(" "),l("h4",{attrs:{id:"loader-常用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#loader-常用"}},[_._v("#")]),_._v(" loader 常用")]),_._v(" "),l("ul",[l("li",[l("p",[_._v("样式 从右往左  style-loader  css-loader  less-loader sass-loader")])]),_._v(" "),l("li",[l("p",[_._v("文件 file-loader  url-loader")])]),_._v(" "),l("li",[l("p",[_._v("编译 babel-loader ts-loader")])]),_._v(" "),l("li",[l("p",[_._v("校验 jslint-loader eslint-loader")])]),_._v(" "),l("li",[l("p",[_._v("Less-loader 将less转换成css文件")])]),_._v(" "),l("li",[l("p",[_._v("style-loader 创建一个style标签将css嵌入到HTML里面")])]),_._v(" "),l("li",[l("p",[_._v("css-loader 处理import和url()")])]),_._v(" "),l("li",[l("p",[_._v("postcss-loader 解决兼容性的问题")])]),_._v(" "),l("li",[l("p",[_._v("File-loader 用来复制和放置资源位置  并可以指定文件名模板  用hash命名有利于缓存")])]),_._v(" "),l("li",[l("p",[_._v("Url-loader 可以将小于配置limit大小的文件转换成内敛Data Url的方式  减少请求")])])]),_._v(" "),l("h4",{attrs:{id:"plugins-常用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#plugins-常用"}},[_._v("#")]),_._v(" plugins 常用")]),_._v(" "),l("ul",[l("li",[l("p",[_._v("UglifyJsPlugins  压缩和混淆代码")])]),_._v(" "),l("li",[l("p",[_._v("CommonsChunkPlugin 提高打包效率  将第三方库和业务代码分开打包")])]),_._v(" "),l("li",[l("p",[_._v("html-webpack-plugin 可以根据模板自动生成html代码  并自动引入css和js文件")])]),_._v(" "),l("li",[l("p",[_._v("Extract-text-webpack-plugin 将js文件引用的样式单独抽离成css文件  暂时只支持3.x版本  对4版本支持不太好")])]),_._v(" "),l("li",[l("p",[_._v("HotModuleReplacementPlugin 热更新")])]),_._v(" "),l("li",[l("p",[_._v("DllPlugin和DLLReferencePlugin 相互配合  前置第三方包的构建  只构建业务代码，同时能够解决Externals多次引用的问题。")])]),_._v(" "),l("li",[l("p",[_._v("DLLReferencePlugin引用DllPlugin配置生成的manifest.json文件， manifest.json包含了依赖模块和module id 的映射关系")])]),_._v(" "),l("li",[l("p",[_._v("clean-webpack-plugin 清除文件  避免重复生成")])]),_._v(" "),l("li",[l("p",[_._v("Mini-css-extract-plugin  单独打包css文件  推荐使用")])]),_._v(" "),l("li",[l("p",[_._v("add-asset-html-webpack-plugin  将给定的js或者css文件添加到webpack文件中 并将其放入资源列表中 注入生成的html中")])])]),_._v(" "),l("p",[_._v("生产环境")]),_._v(" "),l("p",[_._v("1.压缩js代码")]),_._v(" "),l("p",[_._v("plugins: [")]),_._v(" "),l("p",[_._v("​        new webpack.optimize.UglifyJsPlugin({")]),_._v(" "),l("p",[_._v("​            compress: {")]),_._v(" "),l("p",[_._v("​                warnings: false")]),_._v(" "),l("p",[_._v("​            }")]),_._v(" "),l("p",[_._v("​        })")]),_._v(" "),l("p",[_._v("​    ]")]),_._v(" "),l("p",[_._v("2.拆分css")]),_._v(" "),l("p",[_._v("{")]),_._v(" "),l("p",[_._v("​        test: /.css$/,")]),_._v(" "),l("p",[_._v("​        use: [")]),_._v(" "),l("p",[_._v("​          'style-loader',")]),_._v(" "),l("p",[_._v("​          MiniCssExtractPlugin.loader,")]),_._v(" "),l("p",[_._v("​          'css-loader',")]),_._v(" "),l("p",[_._v("​          {")]),_._v(" "),l("p",[_._v("​            loader: 'px2rem-loader',")]),_._v(" "),l("p",[_._v("​            options: {")]),_._v(" "),l("p",[_._v("​              remUnit: 40,")]),_._v(" "),l("p",[_._v("​              remPrecision: 8")]),_._v(" "),l("p",[_._v("​            }")]),_._v(" "),l("p",[_._v("​          }")]),_._v(" "),l("p",[_._v("​        ],")]),_._v(" "),l("p",[_._v("​        exclude: /node_modules/")]),_._v(" "),l("p",[_._v("}")]),_._v(" "),l("p",[_._v("3.图片处理")]),_._v(" "),l("p",[_._v("{")]),_._v(" "),l("p",[_._v("​    test: /.(png|jpg)$/,")]),_._v(" "),l("p",[_._v("​    loader: 'url?limit=8192&name=images/[hash:8].[name].[ext]'")]),_._v(" "),l("p",[_._v("}")]),_._v(" "),l("p",[_._v("limit 设置一个阈值，小于这个值得图片就会自动启用 base64 编码的图片，大于这个值的图片会打包到name 这参数对应的路径，图片名称就会包括8位md5编码 name 对应文件本来名称，ext 对应扩展名")]),_._v(" "),l("h4",{attrs:{id:"区分生产环境和开发环境"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#区分生产环境和开发环境"}},[_._v("#")]),_._v(" 区分生产环境和开发环境")]),_._v(" "),l("p",[_._v("webpack-merge")]),_._v(" "),l("h5",{attrs:{id:"开发环境"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[_._v("#")]),_._v(" 开发环境")]),_._v(" "),l("ul",[l("li",[l("p",[_._v("模块热更新")])]),_._v(" "),l("li",[l("p",[_._v("sourceMap")])]),_._v(" "),l("li",[l("p",[_._v("接口代理")])]),_._v(" "),l("li",[l("p",[_._v("代码规范检查")])])]),_._v(" "),l("h5",{attrs:{id:"生产环境"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#生产环境"}},[_._v("#")]),_._v(" 生产环境")]),_._v(" "),l("ul",[l("li",[l("p",[_._v("提取公共代码")])]),_._v(" "),l("li",[l("p",[_._v("压缩混淆")])]),_._v(" "),l("li",[l("p",[_._v("文件压缩")])]),_._v(" "),l("li",[l("p",[_._v("去除无用代码")])])]),_._v(" "),l("h5",{attrs:{id:"公共环境"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#公共环境"}},[_._v("#")]),_._v(" 公共环境")]),_._v(" "),l("ul",[l("li",[l("p",[_._v("入口")])]),_._v(" "),l("li",[l("p",[_._v("代码处理")])]),_._v(" "),l("li",[l("p",[_._v("解析配置")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);