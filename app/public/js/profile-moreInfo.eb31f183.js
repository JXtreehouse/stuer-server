(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile-moreInfo"],{"06db":function(t,e,n){"use strict";var r=n("23c6"),o={};o[n("2b4c")("toStringTag")]="z",o+""!="[object z]"&&n("2aba")(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},3541:function(t,e,n){"use strict";var r=n("bffb"),o=n.n(r);o.a},"4be7":function(t,e,n){(function(e){
/*!
 *
 * Copyright 2009-2017 Kris Kowal under the terms of the MIT
 * license found at https://github.com/kriskowal/q/blob/v1/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function(e){"use strict";"function"===typeof bootstrap?bootstrap("promise",e):t.exports=e()})(function(){"use strict";var t=!1;try{throw new Error}catch(pt){t=!!pt.stack}var n,r=C(),o=function(){},i=function(){var t={task:void 0,next:null},n=t,r=!1,o=void 0,a=!1,u=[];function c(){var e,n;while(t.next)t=t.next,e=t.task,t.task=void 0,n=t.domain,n&&(t.domain=void 0,n.enter()),s(e,n);while(u.length)e=u.pop(),s(e);r=!1}function s(t,e){try{t()}catch(pt){if(a)throw e&&e.exit(),setTimeout(c,0),e&&e.enter(),pt;setTimeout(function(){throw pt},0)}e&&e.exit()}if(i=function(t){n=n.next={task:t,domain:a&&e.domain,next:null},r||(r=!0,o())},"object"===typeof e&&"[object process]"===e.toString()&&e.nextTick)a=!0,o=function(){e.nextTick(c)};else if("function"===typeof setImmediate)o="undefined"!==typeof window?setImmediate.bind(window,c):function(){setImmediate(c)};else if("undefined"!==typeof MessageChannel){var f=new MessageChannel;f.port1.onmessage=function(){o=p,f.port1.onmessage=c,c()};var p=function(){f.port2.postMessage(0)};o=function(){setTimeout(c,0),p()}}else o=function(){setTimeout(c,0)};return i.runAfter=function(t){u.push(t),r||(r=!0,o())},i}(),a=Function.call;function u(t){return function(){return a.apply(t,arguments)}}var c,s=u(Array.prototype.slice),f=u(Array.prototype.reduce||function(t,e){var n=0,r=this.length;if(1===arguments.length)do{if(n in this){e=this[n++];break}if(++n>=r)throw new TypeError}while(1);for(;n<r;n++)n in this&&(e=t(e,this[n],n));return e}),p=u(Array.prototype.indexOf||function(t){for(var e=0;e<this.length;e++)if(this[e]===t)return e;return-1}),l=u(Array.prototype.map||function(t,e){var n=this,r=[];return f(n,function(o,i,a){r.push(t.call(e,i,a,n))},void 0),r}),d=Object.create||function(t){function e(){}return e.prototype=t,new e},h=Object.defineProperty||function(t,e,n){return t[e]=n.value,t},m=u(Object.prototype.hasOwnProperty),y=Object.keys||function(t){var e=[];for(var n in t)m(t,n)&&e.push(n);return e},v=u(Object.prototype.toString);function b(t){return t===Object(t)}function g(t){return"[object StopIteration]"===v(t)||t instanceof c}c="undefined"!==typeof ReturnValue?ReturnValue:function(t){this.value=t};var j="From previous event:";function k(e,n){if(t&&n.stack&&"object"===typeof e&&null!==e&&e.stack){for(var r=[],o=n;o;o=o.source)o.stack&&(!e.__minimumStackCounter__||e.__minimumStackCounter__>o.stackCounter)&&(h(e,"__minimumStackCounter__",{value:o.stackCounter,configurable:!0}),r.unshift(o.stack));r.unshift(e.stack);var i=r.join("\n"+j+"\n"),a=w(i);h(e,"stack",{value:a,configurable:!0})}}function w(t){for(var e=t.split("\n"),n=[],r=0;r<e.length;++r){var o=e[r];x(o)||S(o)||!o||n.push(o)}return n.join("\n")}function S(t){return-1!==t.indexOf("(module.js:")||-1!==t.indexOf("(node.js:")}function _(t){var e=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);if(e)return[e[1],Number(e[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(t);if(n)return[n[1],Number(n[2])];var r=/.*@(.+):(\d+)$/.exec(t);return r?[r[1],Number(r[2])]:void 0}function x(t){var e=_(t);if(!e)return!1;var o=e[0],i=e[1];return o===n&&i>=r&&i<=ft}function C(){if(t)try{throw new Error}catch(pt){var e=pt.stack.split("\n"),r=e[0].indexOf("@")>0?e[1]:e[2],o=_(r);if(!o)return;return n=o[0],o[1]}}function T(t,e,n){return function(){return"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(e+" is deprecated, use "+n+" instead.",new Error("").stack),t.apply(t,arguments)}}function O(t){return t instanceof M?t:D(t)?W(t):K(t)}O.resolve=O,O.nextTick=i,O.longStackSupport=!1;var R=1;function E(){var e,n=[],r=[],o=d(E.prototype),i=d(M.prototype);if(i.promiseDispatch=function(t,o,i){var a=s(arguments);n?(n.push(a),"when"===o&&i[1]&&r.push(i[1])):O.nextTick(function(){e.promiseDispatch.apply(e,a)})},i.valueOf=function(){if(n)return i;var t=$(e);return P(t)&&(e=t),t},i.inspect=function(){return e?e.inspect():{state:"pending"}},O.longStackSupport&&t)try{throw new Error}catch(pt){i.stack=pt.stack.substring(pt.stack.indexOf("\n")+1),i.stackCounter=R++}function a(o){e=o,O.longStackSupport&&t&&(i.source=o),f(n,function(t,e){O.nextTick(function(){o.promiseDispatch.apply(o,e)})},void 0),n=void 0,r=void 0}return o.promise=i,o.resolve=function(t){e||a(O(t))},o.fulfill=function(t){e||a(K(t))},o.reject=function(t){e||a(J(t))},o.notify=function(t){e||f(r,function(e,n){O.nextTick(function(){n(t)})},void 0)},o}function L(t){if("function"!==typeof t)throw new TypeError("resolver must be a function.");var e=E();try{t(e.resolve,e.reject,e.notify)}catch(n){e.reject(n)}return e.promise}function I(t){return L(function(e,n){for(var r=0,o=t.length;r<o;r++)O(t[r]).then(e,n)})}function M(t,e,n){void 0===e&&(e=function(t){return J(new Error("Promise does not support operation: "+t))}),void 0===n&&(n=function(){return{state:"unknown"}});var r=d(M.prototype);if(r.promiseDispatch=function(n,o,i){var a;try{a=t[o]?t[o].apply(r,i):e.call(r,o,i)}catch(u){a=J(u)}n&&n(a)},r.inspect=n,n){var o=n();"rejected"===o.state&&(r.exception=o.reason),r.valueOf=function(){var t=n();return"pending"===t.state||"rejected"===t.state?r:t.value}}return r}function N(t,e,n,r){return O(t).then(e,n,r)}function $(t){if(P(t)){var e=t.inspect();if("fulfilled"===e.state)return e.value}return t}function P(t){return t instanceof M}function D(t){return b(t)&&"function"===typeof t.then}function A(t){return P(t)&&"pending"===t.inspect().state}function U(t){return!P(t)||"fulfilled"===t.inspect().state}function V(t){return P(t)&&"rejected"===t.inspect().state}"object"===typeof e&&e&&Object({NODE_ENV:"production",VUE_APP_DOMAIN:"ericwu.cn",BASE_URL:"/public/"})&&Object({NODE_ENV:"production",VUE_APP_DOMAIN:"ericwu.cn",BASE_URL:"/public/"}).Q_DEBUG&&(O.longStackSupport=!0),O.defer=E,E.prototype.makeNodeResolver=function(){var t=this;return function(e,n){e?t.reject(e):arguments.length>2?t.resolve(s(arguments,1)):t.resolve(n)}},O.Promise=L,O.promise=L,L.race=I,L.all=ot,L.reject=J,L.resolve=O,O.passByCopy=function(t){return t},M.prototype.passByCopy=function(){return this},O.join=function(t,e){return O(t).join(e)},M.prototype.join=function(t){return O([this,t]).spread(function(t,e){if(t===e)return t;throw new Error("Q can't join: not the same: "+t+" "+e)})},O.race=I,M.prototype.race=function(){return this.then(O.race)},O.makePromise=M,M.prototype.toString=function(){return"[object Promise]"},M.prototype.then=function(t,e,n){var r=this,o=E(),i=!1;function a(e){try{return"function"===typeof t?t(e):e}catch(n){return J(n)}}function u(t){if("function"===typeof e){k(t,r);try{return e(t)}catch(n){return J(n)}}return J(t)}function c(t){return"function"===typeof n?n(t):t}return O.nextTick(function(){r.promiseDispatch(function(t){i||(i=!0,o.resolve(a(t)))},"when",[function(t){i||(i=!0,o.resolve(u(t)))}])}),r.promiseDispatch(void 0,"when",[void 0,function(t){var e,n=!1;try{e=c(t)}catch(pt){if(n=!0,!O.onerror)throw pt;O.onerror(pt)}n||o.notify(e)}]),o.promise},O.tap=function(t,e){return O(t).tap(e)},M.prototype.tap=function(t){return t=O(t),this.then(function(e){return t.fcall(e).thenResolve(e)})},O.when=N,M.prototype.thenResolve=function(t){return this.then(function(){return t})},O.thenResolve=function(t,e){return O(t).thenResolve(e)},M.prototype.thenReject=function(t){return this.then(function(){throw t})},O.thenReject=function(t,e){return O(t).thenReject(e)},O.nearer=$,O.isPromise=P,O.isPromiseAlike=D,O.isPending=A,M.prototype.isPending=function(){return"pending"===this.inspect().state},O.isFulfilled=U,M.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},O.isRejected=V,M.prototype.isRejected=function(){return"rejected"===this.inspect().state};var F=[],G=[],Q=[],B=!0;function z(){F.length=0,G.length=0,B||(B=!0)}function H(t,n){B&&("object"===typeof e&&"function"===typeof e.emit&&O.nextTick.runAfter(function(){-1!==p(G,t)&&(e.emit("unhandledRejection",n,t),Q.push(t))}),G.push(t),n&&"undefined"!==typeof n.stack?F.push(n.stack):F.push("(no stack) "+n))}function q(t){if(B){var n=p(G,t);-1!==n&&("object"===typeof e&&"function"===typeof e.emit&&O.nextTick.runAfter(function(){var r=p(Q,t);-1!==r&&(e.emit("rejectionHandled",F[n],t),Q.splice(r,1))}),G.splice(n,1),F.splice(n,1))}}function J(t){var e=M({when:function(e){return e&&q(this),e?e(t):this}},function(){return this},function(){return{state:"rejected",reason:t}});return H(e,t),e}function K(t){return M({when:function(){return t},get:function(e){return t[e]},set:function(e,n){t[e]=n},delete:function(e){delete t[e]},post:function(e,n){return null===e||void 0===e?t.apply(void 0,n):t[e].apply(t,n)},apply:function(e,n){return t.apply(e,n)},keys:function(){return y(t)}},void 0,function(){return{state:"fulfilled",value:t}})}function W(t){var e=E();return O.nextTick(function(){try{t.then(e.resolve,e.reject,e.notify)}catch(n){e.reject(n)}}),e.promise}function X(t){return M({isDef:function(){}},function(e,n){return rt(t,e,n)},function(){return O(t).inspect()})}function Y(t,e,n){return O(t).spread(e,n)}function Z(t){return function(){function e(t,e){var i;if("undefined"===typeof StopIteration){try{i=n[t](e)}catch(a){return J(a)}return i.done?O(i.value):N(i.value,r,o)}try{i=n[t](e)}catch(a){return g(a)?O(a.value):J(a)}return N(i,r,o)}var n=t.apply(this,arguments),r=e.bind(e,"next"),o=e.bind(e,"throw");return r()}}function tt(t){O.done(O.async(t)())}function et(t){throw new c(t)}function nt(t){return function(){return Y([this,ot(arguments)],function(e,n){return t.apply(e,n)})}}function rt(t,e,n){return O(t).dispatch(e,n)}function ot(t){return N(t,function(t){var e=0,n=E();return f(t,function(r,o,i){var a;P(o)&&"fulfilled"===(a=o.inspect()).state?t[i]=a.value:(++e,N(o,function(r){t[i]=r,0===--e&&n.resolve(t)},n.reject,function(t){n.notify({index:i,value:t})}))},void 0),0===e&&n.resolve(t),n.promise})}function it(t){if(0===t.length)return O.resolve();var e=O.defer(),n=0;return f(t,function(r,o,i){var a=t[i];function u(t){e.resolve(t)}function c(t){if(n--,0===n){var r=t||new Error(""+t);r.message="Q can't get fulfillment value from any promise, all promises were rejected. Last error message: "+r.message,e.reject(r)}}function s(t){e.notify({index:i,value:t})}n++,N(a,u,c,s)},void 0),e.promise}function at(t){return N(t,function(t){return t=l(t,O),N(ot(l(t,function(t){return N(t,o,o)})),function(){return t})})}function ut(t){return O(t).allSettled()}function ct(t,e){return O(t).then(void 0,void 0,e)}function st(t,e){return O(t).nodeify(e)}O.resetUnhandledRejections=z,O.getUnhandledReasons=function(){return F.slice()},O.stopUnhandledRejectionTracking=function(){z(),B=!1},z(),O.reject=J,O.fulfill=K,O.master=X,O.spread=Y,M.prototype.spread=function(t,e){return this.all().then(function(e){return t.apply(void 0,e)},e)},O.async=Z,O.spawn=tt,O["return"]=et,O.promised=nt,O.dispatch=rt,M.prototype.dispatch=function(t,e){var n=this,r=E();return O.nextTick(function(){n.promiseDispatch(r.resolve,t,e)}),r.promise},O.get=function(t,e){return O(t).dispatch("get",[e])},M.prototype.get=function(t){return this.dispatch("get",[t])},O.set=function(t,e,n){return O(t).dispatch("set",[e,n])},M.prototype.set=function(t,e){return this.dispatch("set",[t,e])},O.del=O["delete"]=function(t,e){return O(t).dispatch("delete",[e])},M.prototype.del=M.prototype["delete"]=function(t){return this.dispatch("delete",[t])},O.mapply=O.post=function(t,e,n){return O(t).dispatch("post",[e,n])},M.prototype.mapply=M.prototype.post=function(t,e){return this.dispatch("post",[t,e])},O.send=O.mcall=O.invoke=function(t,e){return O(t).dispatch("post",[e,s(arguments,2)])},M.prototype.send=M.prototype.mcall=M.prototype.invoke=function(t){return this.dispatch("post",[t,s(arguments,1)])},O.fapply=function(t,e){return O(t).dispatch("apply",[void 0,e])},M.prototype.fapply=function(t){return this.dispatch("apply",[void 0,t])},O["try"]=O.fcall=function(t){return O(t).dispatch("apply",[void 0,s(arguments,1)])},M.prototype.fcall=function(){return this.dispatch("apply",[void 0,s(arguments)])},O.fbind=function(t){var e=O(t),n=s(arguments,1);return function(){return e.dispatch("apply",[this,n.concat(s(arguments))])}},M.prototype.fbind=function(){var t=this,e=s(arguments);return function(){return t.dispatch("apply",[this,e.concat(s(arguments))])}},O.keys=function(t){return O(t).dispatch("keys",[])},M.prototype.keys=function(){return this.dispatch("keys",[])},O.all=ot,M.prototype.all=function(){return ot(this)},O.any=it,M.prototype.any=function(){return it(this)},O.allResolved=T(at,"allResolved","allSettled"),M.prototype.allResolved=function(){return at(this)},O.allSettled=ut,M.prototype.allSettled=function(){return this.then(function(t){return ot(l(t,function(t){function e(){return t.inspect()}return t=O(t),t.then(e,e)}))})},O.fail=O["catch"]=function(t,e){return O(t).then(void 0,e)},M.prototype.fail=M.prototype["catch"]=function(t){return this.then(void 0,t)},O.progress=ct,M.prototype.progress=function(t){return this.then(void 0,void 0,t)},O.fin=O["finally"]=function(t,e){return O(t)["finally"](e)},M.prototype.fin=M.prototype["finally"]=function(t){if(!t||"function"!==typeof t.apply)throw new Error("Q can't apply finally callback");return t=O(t),this.then(function(e){return t.fcall().then(function(){return e})},function(e){return t.fcall().then(function(){throw e})})},O.done=function(t,e,n,r){return O(t).done(e,n,r)},M.prototype.done=function(t,n,r){var o=function(t){O.nextTick(function(){if(k(t,i),!O.onerror)throw t;O.onerror(t)})},i=t||n||r?this.then(t,n,r):this;"object"===typeof e&&e&&e.domain&&(o=e.domain.bind(o)),i.then(void 0,o)},O.timeout=function(t,e,n){return O(t).timeout(e,n)},M.prototype.timeout=function(t,e){var n=E(),r=setTimeout(function(){e&&"string"!==typeof e||(e=new Error(e||"Timed out after "+t+" ms"),e.code="ETIMEDOUT"),n.reject(e)},t);return this.then(function(t){clearTimeout(r),n.resolve(t)},function(t){clearTimeout(r),n.reject(t)},n.notify),n.promise},O.delay=function(t,e){return void 0===e&&(e=t,t=void 0),O(t).delay(e)},M.prototype.delay=function(t){return this.then(function(e){var n=E();return setTimeout(function(){n.resolve(e)},t),n.promise})},O.nfapply=function(t,e){return O(t).nfapply(e)},M.prototype.nfapply=function(t){var e=E(),n=s(t);return n.push(e.makeNodeResolver()),this.fapply(n).fail(e.reject),e.promise},O.nfcall=function(t){var e=s(arguments,1);return O(t).nfapply(e)},M.prototype.nfcall=function(){var t=s(arguments),e=E();return t.push(e.makeNodeResolver()),this.fapply(t).fail(e.reject),e.promise},O.nfbind=O.denodeify=function(t){if(void 0===t)throw new Error("Q can't wrap an undefined function");var e=s(arguments,1);return function(){var n=e.concat(s(arguments)),r=E();return n.push(r.makeNodeResolver()),O(t).fapply(n).fail(r.reject),r.promise}},M.prototype.nfbind=M.prototype.denodeify=function(){var t=s(arguments);return t.unshift(this),O.denodeify.apply(void 0,t)},O.nbind=function(t,e){var n=s(arguments,2);return function(){var r=n.concat(s(arguments)),o=E();function i(){return t.apply(e,arguments)}return r.push(o.makeNodeResolver()),O(i).fapply(r).fail(o.reject),o.promise}},M.prototype.nbind=function(){var t=s(arguments,0);return t.unshift(this),O.nbind.apply(void 0,t)},O.nmapply=O.npost=function(t,e,n){return O(t).npost(e,n)},M.prototype.nmapply=M.prototype.npost=function(t,e){var n=s(e||[]),r=E();return n.push(r.makeNodeResolver()),this.dispatch("post",[t,n]).fail(r.reject),r.promise},O.nsend=O.nmcall=O.ninvoke=function(t,e){var n=s(arguments,2),r=E();return n.push(r.makeNodeResolver()),O(t).dispatch("post",[e,n]).fail(r.reject),r.promise},M.prototype.nsend=M.prototype.nmcall=M.prototype.ninvoke=function(t){var e=s(arguments,1),n=E();return e.push(n.makeNodeResolver()),this.dispatch("post",[t,e]).fail(n.reject),n.promise},O.nodeify=st,M.prototype.nodeify=function(t){if(!t)return this;this.then(function(e){O.nextTick(function(){t(null,e)})},function(e){O.nextTick(function(){t(e)})})},O.noConflict=function(){throw new Error("Q.noConflict only works when Q is used as a global")};var ft=C();return O})}).call(this,n("4362"))},5176:function(t,e,n){t.exports=n("51b6")},"5ba4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.amI?n("div",{staticClass:"more-info"},[n("div",{staticClass:"more-info-head"},[n("div",{staticClass:"head-title"},[t._v("更多信息")]),t.amI?n("div",{staticClass:"head-opt"},[t.isEdit?n("el-button",{attrs:{size:"small"},on:{click:t.cancel}},[t._v("取消")]):t._e(),t.isEdit?n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.saveUserInfo}},[t._v("保存")]):n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.editUserInfo}},[t._v("编辑")])],1):t._e()]),n("div",{staticClass:"more-info-main"},[n("el-form",{ref:"moreInfoForm",attrs:{model:t.form,rules:t.rules,"label-width":"100px","label-position":"right","hide-required-asterisk":!0}},[t.isEdit?n("div",[n("el-form-item",{attrs:{label:"真实姓名："}},[n("el-input",{staticClass:"form-input",model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"我的年龄："}},[n("el-input",{staticClass:"form-input age-input",model:{value:t.form.age,callback:function(e){t.$set(t.form,"age",t._n(e))},expression:"form.age"}})],1),n("el-form-item",{attrs:{label:"我的专业："}},[n("el-cascader",{attrs:{options:t.majorOpts,"show-all-levels":!1},model:{value:t.selectMajor,callback:function(e){t.selectMajor=e},expression:"selectMajor"}})],1),n("el-form-item",{attrs:{label:"工作单位："}},[n("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.form.companyId,callback:function(e){t.$set(t.form,"companyId",t._n(e))},expression:"form.companyId"}},t._l(t.companyOpts,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),n("el-form-item",{attrs:{label:"税前月薪："}},[n("el-input",{staticClass:"form-input",attrs:{placeholder:"单位：元"},model:{value:t.form.mSalary,callback:function(e){t.$set(t.form,"mSalary",t._n(e))},expression:"form.mSalary"}})],1),n("el-form-item",{attrs:{label:"税前年薪："}},[n("el-input",{staticClass:"form-input",attrs:{placeholder:"单位：元"},model:{value:t.form.ySalary,callback:function(e){t.$set(t.form,"ySalary",t._n(e))},expression:"form.ySalary"}})],1),n("el-form-item",{attrs:{label:"证件类型："}},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"证件号码"},model:{value:t.form.idCard,callback:function(e){t.$set(t.form,"idCard",e)},expression:"form.idCard"}},[n("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.form.idCardType,callback:function(e){t.$set(t.form,"idCardType",t._n(e))},expression:"form.idCardType"}},t._l(t.idCardTypeList,function(t,e){return n("el-option",{key:e,attrs:{label:t,value:e+1}})}),1)],1)],1)],1):n("div",[n("el-form-item",{attrs:{label:"真实姓名："}},[n("span",{staticClass:"value-show"},[t._v(t._s(t.form.name||"-"))])]),n("el-form-item",{attrs:{label:"我的年龄："}},[n("span",{staticClass:"value-show"},[t._v(t._s(t.form.age||"-"))])]),n("el-form-item",{attrs:{label:"我的专业："}},[n("span",{staticClass:"value-show"},[t._v(t._s(t.getMajorLabel(t.form.majorId)))])]),n("el-form-item",{attrs:{label:"工作单位："}},[n("span",{staticClass:"value-show"},[t._v(t._s(t.getCompanyName(t.form.companyId)))])]),n("el-form-item",{attrs:{label:"税前月薪："}},[n("span",{staticClass:"value-show"},[t._v(t._s(t.form.mSalary))])]),n("el-form-item",{attrs:{label:"税前年薪："}},[n("span",{staticClass:"value-show"},[t._v(t._s(t.form.ySalary))])]),t.form.idCardType?n("el-form-item",{attrs:{label:t.getIdCardName(t.form.idCardType)}},[n("span",{staticClass:"value-show"},[t._v(t._s(t.form.idCard))])]):t._e()],1)])],1)]):t._e()},o=[],i=(n("7f7f"),n("ac6a"),n("06db"),n("5df3"),n("96cf"),n("3b8d")),a=n("5176"),u=n.n(a),c=n("cebc"),s=n("2f62"),f=n("365c"),p=n("4be7"),l={data:function(){return{isEdit:!1,form:{name:"",age:void 0,majorId:void 0,academyId:void 0,mSalary:void 0,ySalary:void 0,companyId:void 0,idCard:"",idCardType:void 0},rules:{name:[{max:10,message:"名字长度需小于10个字符",trigger:"blur"}]},majorOpts:[],marjorMap:{},idCardTypeList:["身份证","护照","港澳通行证","台胞证","军官证","其他"],companyOpts:[]}},computed:Object(c["a"])({},Object(s["b"])(["pageUser","amI"]),{selectMajor:{get:function(){return this.form.majorId&&this.form.academyId?[this.form.academyId,this.form.majorId]:[]},set:function(t){this.form.academyId=t[0],this.form.majorId=t[1]}}}),watch:{$route:function(t,e){"#edit"===t.hash&&(this.isEdit=!0)},pageUser:function(){this.form=u()({},this.pageUser)}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p["Promise"].all([this.getMajors(),this.getCompanies()]);case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getMajors:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["a"])();case 2:e=t.sent,0===e.code&&(this.majorOpts=e.data),n={},this.majorOpts.forEach(function(t){t.children.forEach(function(t){n[t.value]=t.label})}),this.marjorMap=n;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getCompanies:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["b"])();case 2:e=t.sent,0===e.code&&(this.companyOpts=e.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getCompanyName:function(t){var e;return this.companyOpts.forEach(function(n){n.id===t&&(e=n.name)}),e},getIdCardName:function(t){return"".concat(this.idCardTypeList[t-1],"：")||!1},getMajorLabel:function(t){return this.marjorMap[t]||"-"},editUserInfo:function(){this.isEdit=!0},saveUserInfo:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["j"])(this.form);case 2:e=t.sent,0===e.code?(this.$store.commit("setPageUser",e.data),this.$store.commit("setUser",e.data),this.isEdit=!1,this.$message.success("保存成功"),"#edit"===this.$route.hash&&this.$router.push(Object(c["a"])({},this.$route,{hash:""}))):this.$message.error("保存失败，请重试");case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),cancel:function(){this.isEdit=!1,"#edit"===this.$route.hash&&this.$router.push(Object(c["a"])({},this.$route,{hash:""}))}}},d=l,h=(n("3541"),n("2877")),m=Object(h["a"])(d,r,o,!1,null,null,null);e["default"]=m.exports},"5df3":function(t,e,n){"use strict";var r=n("02f4")(!0);n("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},"7f7f":function(t,e,n){var r=n("86cc").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,a="name";a in o||n("9e1e")&&r(o,a,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),i=n("2aba"),a=n("7726"),u=n("32e9"),c=n("84f2"),s=n("2b4c"),f=s("iterator"),p=s("toStringTag"),l=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(d),m=0;m<h.length;m++){var y,v=h[m],b=d[v],g=a[v],j=g&&g.prototype;if(j&&(j[f]||u(j,f,l),j[p]||u(j,p,v),c[v]=l,b))for(y in r)j[y]||i(j,y,r[y],!0)}},bffb:function(t,e,n){}}]);
//# sourceMappingURL=profile-moreInfo.eb31f183.js.map