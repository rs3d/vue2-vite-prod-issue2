import{V as e,n as t}from"./index.2b2550a5.js";
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function c(e,t){i(e,t),Object.getOwnPropertyNames(t.prototype).forEach((function(r){i(e.prototype,t.prototype,r)})),Object.getOwnPropertyNames(t).forEach((function(r){i(e,t,r)}))}function i(e,t,r){(r?Reflect.getOwnMetadataKeys(t,r):Reflect.getOwnMetadataKeys(t)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,t,r):Reflect.getOwnMetadata(n,t);r?Reflect.defineMetadata(n,o,e,r):Reflect.defineMetadata(n,o,e)}))}var f={__proto__:[]}instanceof Array;function u(e,t){var r=t.prototype._init;t.prototype._init=function(){var t=this,r=Object.getOwnPropertyNames(e);if(e.$options.props)for(var n in e.$options.props)e.hasOwnProperty(n)||r.push(n);r.forEach((function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){e[r]=t},configurable:!0})}))};var n=new t;t.prototype._init=r;var o={};return Object.keys(n).forEach((function(e){void 0!==n[e]&&(o[e]=n[e])})),o}var s=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function p(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r.name=r.name||t._componentTag||t.name;var o=t.prototype;Object.getOwnPropertyNames(o).forEach((function(e){if("constructor"!==e)if(s.indexOf(e)>-1)r[e]=o[e];else{var t=Object.getOwnPropertyDescriptor(o,e);void 0!==t.value?"function"==typeof t.value?(r.methods||(r.methods={}))[e]=t.value:(r.mixins||(r.mixins=[])).push({data:function(){return n({},e,t.value)}}):(t.get||t.set)&&((r.computed||(r.computed={}))[e]={get:t.get,set:t.set})}})),(r.mixins||(r.mixins=[])).push({data:function(){return u(this,t)}});var i=t.__decorators__;i&&(i.forEach((function(e){return e(r)})),delete t.__decorators__);var f=Object.getPrototypeOf(t.prototype),p=f instanceof e?f.constructor:e,l=p.extend(r);return y(l,t,p),a()&&c(l,t),l}var l={prototype:!0,arguments:!0,callee:!0,caller:!0};function y(e,t,n){Object.getOwnPropertyNames(t).forEach((function(o){if(!l[o]){var a=Object.getOwnPropertyDescriptor(e,o);if(!a||a.configurable){var c,i,u=Object.getOwnPropertyDescriptor(t,o);if(!f){if("cid"===o)return;var s=Object.getOwnPropertyDescriptor(n,o);if(c=u.value,i=r(c),null!=c&&("object"===i||"function"===i)&&s&&s.value===u.value)return}Object.defineProperty(e,o,u)}}}))}function d(e){return"function"==typeof e?p(e):function(t){return p(t,e)}}d.registerHooks=function(e){s.push.apply(s,o(e))},globalThis&&globalThis.__spreadArrays;var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor;let m=class extends e{mounted(){console.log("Test.vue")}};m=((e,t,r,n)=>{for(var o,a=n>1?void 0:n?b(t,r):t,c=e.length-1;c>=0;c--)(o=e[c])&&(a=(n?o(t,r,a):o(a))||a);return n&&a&&v(t,r,a),a})([d],m);const O={};var g=t(m,(function(){var e=this;e.$createElement;return e._self._c,e._m(0)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"example"},[r("h3",[e._v("Test.vue")]),r("p",[e._v("See file comments in "),r("code",[e._v("src/components/Test.vue")])])])}],!1,h,"4df3213a",null,null);function h(e){for(let t in O)this[t]=O[t]}const _=function(){return g.exports}();export{_ as default};
