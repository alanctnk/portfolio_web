(function(e){function t(t){for(var l,i,a=t[0],s=t[1],c=t[2],f=0,p=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],l=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(l=!1)}l&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var l={},r={app:0},o=[];function i(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=l,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(n,l,function(t){return e[t]}.bind(null,l));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var l=n("85ec"),r=n.n(l);r.a},"0474":function(e,t,n){},4791:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var l=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Form",{on:{onChange:e.updateStyle}}),n("Container",{attrs:{styles:e.containerStyles}})],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form"},[n("div",{staticClass:"form-wrapper form-container"},[n("FlexDirection",{model:{value:e.flexDirection,callback:function(t){e.flexDirection=t},expression:"flexDirection"}}),n("JustifyContent",{model:{value:e.justifyContent,callback:function(t){e.justifyContent=t},expression:"justifyContent"}}),n("AlignItems",{model:{value:e.alignItems,callback:function(t){e.alignItems=t},expression:"alignItems"}}),n("FlexWrap",{model:{value:e.flexWrap,callback:function(t){e.flexWrap=t},expression:"flexWrap"}}),n("AlignContent",{model:{value:e.alignContent,callback:function(t){e.alignContent=t},expression:"alignContent"}})],1),n("div",{staticClass:"form-wrapper form-item-1"},[n("Activate",{model:{value:e.useForm1,callback:function(t){e.useForm1=t},expression:"useForm1"}}),n("FlexGrow",{model:{value:e.flexGrow1,callback:function(t){e.flexGrow1=t},expression:"flexGrow1"}}),n("AlignSelf",{model:{value:e.alignSelf1,callback:function(t){e.alignSelf1=t},expression:"alignSelf1"}})],1),n("div",{staticClass:"form-wrapper form-item-2"},[n("Activate",{model:{value:e.useForm2,callback:function(t){e.useForm2=t},expression:"useForm2"}}),n("FlexGrow",{model:{value:e.flexGrow2,callback:function(t){e.flexGrow2=t},expression:"flexGrow2"}}),n("AlignSelf",{model:{value:e.alignSelf2,callback:function(t){e.alignSelf2=t},expression:"alignSelf2"}})],1),n("div",{staticClass:"form-wrapper form-item-3"},[n("Activate",{model:{value:e.useForm3,callback:function(t){e.useForm3=t},expression:"useForm3"}}),n("FlexGrow",{model:{value:e.flexGrow3,callback:function(t){e.flexGrow3=t},expression:"flexGrow3"}}),n("AlignSelf",{model:{value:e.alignSelf3,callback:function(t){e.alignSelf3=t},expression:"alignSelf3"}})],1)])},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("flex-direction:")]),n("select",{ref:"select",domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},[n("option",[e._v("row")]),n("option",[e._v("column")]),n("option",[e._v("row-reverse")]),n("option",[e._v("column-reverse")])])])},c=[],u={props:["value"]},f=u,p=n("2877"),v=Object(p["a"])(f,s,c,!1,null,null,null),m=v.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("flex-wrap:")]),n("select",{ref:"select",domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},[n("option",[e._v("nowrap")]),n("option",[e._v("wrap")]),n("option",[e._v("wrap-reverse")])])])},x=[],b={props:["value"]},h=b,g=Object(p["a"])(h,d,x,!1,null,null,null),_=g.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("justify-content:")]),n("select",{ref:"select",domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},[n("option",[e._v("flex-start")]),n("option",[e._v("flex-end")]),n("option",[e._v("space-between")]),n("option",[e._v("space-around")]),n("option",[e._v("center")])])])},w=[],O={props:["value"]},j=O,S=Object(p["a"])(j,y,w,!1,null,null,null),k=S.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("align-items:")]),n("select",{ref:"select",domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},[n("option",[e._v("flex-start")]),n("option",[e._v("flex-end")]),n("option",[e._v("center")]),n("option",[e._v("stretch")]),n("option",[e._v("baseline")])])])},F=[],P={props:["value"]},G=P,$=Object(p["a"])(G,C,F,!1,null,null,null),A=$.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("align-content:")]),n("select",{ref:"select",domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},[n("option",[e._v("flex-start")]),n("option",[e._v("flex-end")]),n("option",[e._v("center")]),n("option",[e._v("space-between")]),n("option",[e._v("space-around")]),n("option",[e._v("stretch")])])])},D=[],I={props:["value"]},W=I,J=Object(p["a"])(W,E,D,!1,null,null,null),M=J.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("Ativar:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{value:e.value,checked:Array.isArray(e.checked)?e._i(e.checked,e.value)>-1:e.checked},on:{change:function(t){var n=e.checked,l=t.target,r=!!l.checked;if(Array.isArray(n)){var o=e.value,i=e._i(n,o);l.checked?i<0&&(e.checked=n.concat([o])):i>-1&&(e.checked=n.slice(0,i).concat(n.slice(i+1)))}else e.checked=r}}})])},L=[],N={props:["value"],data:function(){return{checked:!1}},watch:{checked:function(e){this.$emit("input",e)}}},q=N,z=Object(p["a"])(q,T,L,!1,null,null,null),B=z.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("flex-grow:")]),n("input",{attrs:{type:"number"},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])},K=[],Q={props:["value"]},R=Q,U=Object(p["a"])(R,H,K,!1,null,null,null),V=U.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("align-self:")]),n("select",{ref:"select",domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},[n("option",[e._v("flex-start")]),n("option",[e._v("flex-end")]),n("option",[e._v("center")]),n("option",[e._v("stretch")])])])},Y=[],Z={props:["value"]},ee=Z,te=Object(p["a"])(ee,X,Y,!1,null,null,null),ne=te.exports,le={components:{FlexDirection:m,FlexWrap:_,JustifyContent:k,AlignItems:A,AlignContent:M,Activate:B,FlexGrow:V,AlignSelf:ne},data:function(){return{flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"flex-start",alignContent:"flex-start",useForm1:!1,flexGrow1:0,alignSelf1:"flex-start",useForm2:!1,flexGrow2:0,alignSelf2:"flex-start",useForm3:!1,flexGrow3:0,alignSelf3:"flex-start"}},methods:{emitChange:function(){this.$emit("onChange",{container:{flexDirection:this.flexDirection,flexWrap:this.flexWrap,justifyContent:this.justifyContent,alignItems:this.alignItems,alignContent:this.alignContent},item1:this.useForm1?{flexGrow:this.flexGrow1,alignSelf:this.alignSelf1}:{},item2:this.useForm2?{flexGrow:this.flexGrow2,alignSelf:this.alignSelf2}:{},item3:this.useForm3?{flexGrow:this.flexGrow3,alignSelf:this.alignSelf3}:{}})}},updated:function(){this.emitChange()},created:function(){this.emitChange()}},re=le,oe=(n("db83"),Object(p["a"])(re,i,a,!1,null,null,null)),ie=oe.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",style:e.styles.container},[n("Item",{attrs:{label:"1",padding:"20",styles:this.styles.item1}}),n("Item",{attrs:{label:"2",padding:"30",styles:this.styles.item2}}),n("Item",{attrs:{label:"3",padding:"40",styles:this.styles.item3}}),n("div",{class:e.axisClass})],1)},se=[],ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item",style:e.allStyles},[e._v(e._s(e.label))])},ue=[],fe=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3"));function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){Object(fe["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me={props:["label","padding","styles"],computed:{allStyles:function(){return ve({padding:"".concat(this.padding,"px")||!1},this.styles)}}},de=me,xe=(n("ef53"),Object(p["a"])(de,ce,ue,!1,null,null,null)),be=xe.exports,he={props:["styles"],components:{Item:be},computed:{axisClass:function(){var e=this.styles.container||{},t=e.flexDirection;switch(t.toLowerCase()){case"column":return"main-axis-column";case"column-reverse":return"main-axis-column reverse";case"row":return"main-axis";case"row-reverse":return"main-axis reverse";default:return"main-axis"}}}},ge=he,_e=(n("ad29"),Object(p["a"])(ge,ae,se,!1,null,null,null)),ye=_e.exports,we={name:"app",data:function(){return{containerStyles:{}}},components:{Form:ie,Container:ye},methods:{updateStyle:function(e){this.containerStyles=e}}},Oe=we,je=(n("034f"),Object(p["a"])(Oe,r,o,!1,null,null,null)),Se=je.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(e){return e(Se)}}).$mount("#app")},"85ec":function(e,t,n){},ad29:function(e,t,n){"use strict";var l=n("4791"),r=n.n(l);r.a},db83:function(e,t,n){"use strict";var l=n("ee37"),r=n.n(l);r.a},ee37:function(e,t,n){},ef53:function(e,t,n){"use strict";var l=n("0474"),r=n.n(l);r.a}});
//# sourceMappingURL=app.eac6be55.js.map