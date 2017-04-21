/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=431)})({0:function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var d=u.computed||(u.computed={});Object.keys(r).forEach((function(e){var t=r[e];d[e]=function(){return t}}))}return{esModule:i,exports:o,options:u}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},102:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){e.component("md-speed-dial",s.default),e.material.styles.push(d.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=n(320),s=r(o),u=n(260),d=r(u);e.exports=t.default},164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=(function(e){return e&&e.__esModule?e:{default:e}})(r);t.default={props:{mdOpen:{type:String,default:"click"},mdMode:{type:String,default:"fling"},mdDirection:{type:String,default:"top"}},mixins:[i.default],data:function(){return{fabTrigger:null,active:!1}},computed:{classes:function(){var e={"md-active":this.active};return e["md-mode-"+this.mdMode]=!0,e["md-direction-"+this.mdDirection]=!0,e}},methods:{closeSpeedDial:function(e){!e.target!==this.fabTrigger&&this.fabTrigger.contains(e.target)||(this.active=!1,document.body.removeEventListener("click",this.closeSpeedDial))},toggleSpeedDial:function(){var e=this;this.active=!this.active,window.setTimeout((function(){document.body.addEventListener("click",e.closeSpeedDial)}),50)}},mounted:function(){var e=this;this.$nextTick((function(){e.fabTrigger=e.$el.querySelector("[md-fab-trigger]"),"click"===e.mdOpen?e.fabTrigger.addEventListener("click",e.toggleSpeedDial):(e.$el.addEventListener("mouseenter",e.toggleSpeedDial),e.$el.addEventListener("mouseleave",e.toggleSpeedDial))}))},beforeDestroy:function(){this.fabTrigger.removeEventListener("click",this.toggleSpeedDial),document.body.removeEventListener("click",this.closeSpeedDial)}},e.exports=t.default},224:function(e,t){},260:function(e,t){e.exports=""},320:function(e,t,n){n(224);var r=n(0)(n(164),n(377),null,null);e.exports=r.exports},377:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-speed-dial",class:[e.themeClass,e.classes]},[e._t("default")],2)},staticRenderFns:[]}},431:function(e,t,n){e.exports=n(102)}})}));