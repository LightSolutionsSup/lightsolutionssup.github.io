(()=>{var e,o={519:(e,o,r)=>{"use strict";r(638),r(312),r(872),r(522),r(905),r(402),r(113),r(199);r(116),window.$=r(638),r.g.jQuery=r(638),window.Swiper=r(420),window.SmoothScroll=r(872),r(640)},640:(e,o,r)=>{!function(e){e(window).on("load",(function(){e(".loader").hide(),e("body").addClass("loaded")})),e((function(){var o=e("#header");e(window).on("scroll",(function(){e(window).scrollTop()>=80?o.addClass("navbar-fixed-top"):o.removeClass("navbar-fixed-top")}))})),e(".menu-wrap ul.nav").slicknav({prependTo:".header_section .navbar",label:"",allowParentLinks:!0,closeOnClick:!0});var o=new Swiper(".screen_carousel",{direction:"horizontal",loop:!0,zoom:!0,autoplay:{delay:5e3,disableOnInteraction:!1},effect:"coverflow",centeredSlides:!0,slidesPerView:2,spaceBetween:10,breakpoints:{480:{slidesPerView:2},640:{slidesPerView:3}},grabCursor:!0,coverflowEffect:{rotate:30,stretch:-30,depth:80,modifier:1,slideShadows:!1},pagination:{el:".screen-pagination",clickable:!0}});setTimeout((function(){o.update()}),50);new SmoothScroll('a[href*="#"]',{speed:500,offset:60,speedAsDuration:!0});e(window).on("scroll",(function(){e(this).scrollTop()>100?e("#scroll-to-top").fadeIn():e("#scroll-to-top").fadeOut()}))}(r(638))},116:(e,o,r)=>{"use strict";r.r(o)}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e].call(i.exports,i,i.exports,n),i.exports}n.m=o,e=[],n.O=(o,r,t,i)=>{if(!r){var l=1/0;for(d=0;d<e.length;d++){for(var[r,t,i]=e[d],a=!0,s=0;s<r.length;s++)(!1&i||l>=i)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(a=!1,i<l&&(l=i));a&&(e.splice(d--,1),o=t())}return o}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,t,i]},n.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return n.d(o,{a:o}),o},n.d=(e,o)=>{for(var r in o)n.o(o,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=o=>0===e[o];var o=(o,r)=>{var t,i,[l,a,s]=r,d=0;for(t in a)n.o(a,t)&&(n.m[t]=a[t]);for(s&&s(n),o&&o(r);d<l.length;d++)i=l[d],n.o(e,i)&&e[i]&&e[i][0](),e[l[d]]=0;n.O()},r=self.webpackChunk=self.webpackChunk||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))})();var t=n.O(void 0,[543],(()=>n(519)));t=n.O(t)})();
//# sourceMappingURL=main.4616201e4227a4bbf776.js.map