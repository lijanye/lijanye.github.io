(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{437:function(r,a,t){"use strict";t.r(a);var e=t(42),n=Object(e.a)({},(function(){var r=this,a=r.$createElement,t=r._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h3",{attrs:{id:"深拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝"}},[r._v("#")]),r._v(" 深拷贝")]),r._v(" "),t("h5",{attrs:{id:"_1一般方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1一般方法"}},[r._v("#")]),r._v(" 1一般方法")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[r._v("    使用JSON.parse（）与JSON.stringify（）对对象进行拷贝\n    return JSON.parse(JSON.stringify(obj)); \n    //这种方法只适用于纯数据json对象的深度克隆，因为有些时候，这种方法也有缺陷\n")])])]),t("h5",{attrs:{id:"_2-展开运算符进行深拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-展开运算符进行深拷贝"}},[r._v("#")]),r._v(" 2.展开运算符进行深拷贝")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[r._v("    var arr1=[1,2,5,6,4];\n    var arr2=[...arr1];\n    arr1 == arr2            // false;\n")])])]),t("h5",{attrs:{id:"_3-目前没有发现bug的对象深拷贝方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-目前没有发现bug的对象深拷贝方法"}},[r._v("#")]),r._v(" 3.目前没有发现bug的对象深拷贝方法")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[r._v("     var clone = function (obj) {\n        if(obj === null) return null\n        if(typeof obj !== 'object') return obj;\n        if(obj.constructor===Date) return new Date(obj);\n        if(obj.constructor === RegExp) return new RegExp(obj);\n        var newObj = new obj.constructor ();    //保持继承链\n        for (var key in obj) {\n          if (obj.hasOwnProperty(key)) {    //不遍历其原型链上的属性\n                var val = obj[key];\n                newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合\n          }\n        }   \n      return newObj;   \n     };\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);