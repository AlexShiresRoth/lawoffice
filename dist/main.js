!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n={willsTrustsAndEstatesButton:document.querySelector("#wills"),bankruptcyButton:document.querySelector("#bankruptcy"),boxesTitle:document.querySelector(".box h6"),boxes:document.querySelectorAll(".box p"),sections:document.querySelectorAll("section"),mobileNav:document.querySelector(".mobile-nav"),navAppear:document.querySelector(".main-nav"),dropDown:document.querySelector(".main-nav__dropdown"),serviceUl:document.querySelector(".main-nav__dropdown--service-list"),anchors:[{aboutAnchor:document.querySelector("#nav--about"),servicesAnchor:document.querySelector("#nav--services"),contactAnchor:document.querySelector("#nav--contact")}]};n.dropDown.addEventListener("click",e=>{e.stopPropagation(),console.log(e.target),n.serviceUl.classList.toggle("hidden"),n.serviceUl.classList.toggle("show")});document.addEventListener("click",e=>{e.stopPropagation(),console.log(e.target),n.serviceUl.classList.contains("show")&&(n.serviceUl.classList.remove("show"),n.serviceUl.classList.add("hidden"))});n.mobileNav.addEventListener("click",()=>{n.navAppear.classList.toggle("visible")});const r=()=>{(e=>{e.scrollIntoView({block:"start",behavior:"smooth"})})()};"loading"==document.readyState?(console.log(r()),document.addEventListener("DOMContentLoaded",r)):(console.log(r()),r())}]);