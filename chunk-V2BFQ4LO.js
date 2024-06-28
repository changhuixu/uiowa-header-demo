import{B as Mt,Ba as zt,C as ct,D as hn,Db as Rt,F as ut,Fb as _t,Kb as jt,L as gn,O as bn,S as L,Sa as Ft,U as yn,Ya as In,Z as kn,ia as xn,ib as Dt,la as wn,ma as An,v as Tt,w as lt,xb as Lt}from"./chunk-Y5RF6OJR.js";function Sn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Sn(Object(e),!0).forEach(function(a){y(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Sn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function At(t){"@babel/helpers - typeof";return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},At(t)}function Ce(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function On(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Ee(t,n,e){return n&&On(t.prototype,n),e&&On(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function nn(t,n){return Ne(t)||Me(t,n)||Qn(t,n)||Fe()}function ot(t){return Pe(t)||Te(t)||Qn(t)||ze()}function Pe(t){if(Array.isArray(t))return Ut(t)}function Ne(t){if(Array.isArray(t))return t}function Te(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Me(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Qn(t,n){if(t){if(typeof t=="string")return Ut(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ut(t,n)}}function Ut(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function ze(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Cn=function(){},en={},Jn={},Zn=null,te={mark:Cn,measure:Cn};try{typeof window<"u"&&(en=window),typeof document<"u"&&(Jn=document),typeof MutationObserver<"u"&&(Zn=MutationObserver),typeof performance<"u"&&(te=performance)}catch{}var De=en.navigator||{},En=De.userAgent,Pn=En===void 0?"":En,_=en,g=Jn,Nn=Zn,mt=te,gr=!!_.document,F=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",ne=~Pn.indexOf("MSIE")||~Pn.indexOf("Trident/"),dt,vt,pt,ht,gt,T="___FONT_AWESOME___",Bt=16,ee="fa",ae="svg-inline--fa",B="data-fa-i2svg",Vt="data-fa-pseudo-element",Le="data-fa-pseudo-element-pending",an="data-prefix",rn="data-icon",Tn="fontawesome-i2svg",Re="async",_e=["HTML","HEAD","STYLE","SCRIPT"],re=function(){try{return!0}catch{return!1}}(),h="classic",b="sharp",on=[h,b];function st(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[h]}})}var nt=st((dt={},y(dt,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),y(dt,b,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),dt)),et=st((vt={},y(vt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(vt,b,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),vt)),at=st((pt={},y(pt,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(pt,b,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),pt)),je=st((ht={},y(ht,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(ht,b,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ht)),$e=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ie="fa-layers-text",Ye=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,We=st((gt={},y(gt,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(gt,b,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),gt)),oe=[1,2,3,4,5,6,7,8,9,10],He=oe.concat([11,12,13,14,15,16,17,18,19,20]),Ue=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rt=new Set;Object.keys(et[h]).map(rt.add.bind(rt));Object.keys(et[b]).map(rt.add.bind(rt));var Be=[].concat(on,ot(rt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",H.GROUP,H.SWAP_OPACITY,H.PRIMARY,H.SECONDARY]).concat(oe.map(function(t){return"".concat(t,"x")})).concat(He.map(function(t){return"w-".concat(t)})),Z=_.FontAwesomeConfig||{};function Ve(t){var n=g.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Ge(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&(Mn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Mn.forEach(function(t){var n=nn(t,2),e=n[0],a=n[1],r=Ge(Ve(e));r!=null&&(Z[a]=r)}));var Mn,se={styleDefault:"solid",familyDefault:"classic",cssPrefix:ee,replacementClass:ae,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var K=c(c({},se),Z);K.autoReplaceSvg||(K.observeMutations=!1);var m={};Object.keys(se).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(e){K[t]=e,tt.forEach(function(a){return a(m)})},get:function(){return K[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){K.cssPrefix=n,tt.forEach(function(e){return e(m)})},get:function(){return K.cssPrefix}});_.FontAwesomeConfig=m;var tt=[];function Xe(t){return tt.push(t),function(){tt.splice(tt.indexOf(t),1)}}var R=Bt,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qe(t){if(!(!t||!F)){var n=g.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=g.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(n,a),t}}var Ke="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function it(){for(var t=12,n="";t-- >0;)n+=Ke[Math.random()*62|0];return n}function Q(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function sn(t){return t.classList?Q(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function fe(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Qe(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(fe(t[e]),'" ')},"").trim()}function Ot(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function fn(t){return t.size!==N.size||t.x!==N.x||t.y!==N.y||t.rotate!==N.rotate||t.flipX||t.flipY}function Je(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Ze(t){var n=t.transform,e=t.width,a=e===void 0?Bt:e,r=t.height,i=r===void 0?Bt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&ne?f+="translate(".concat(n.x/R-a/2,"em, ").concat(n.y/R-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/R,"em), calc(-50% + ").concat(n.y/R,"em)) "):f+="translate(".concat(n.x/R,"em, ").concat(n.y/R,"em) "),f+="scale(".concat(n.size/R*(n.flipX?-1:1),", ").concat(n.size/R*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var ta=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function le(){var t=ee,n=ae,e=m.cssPrefix,a=m.replacementClass,r=ta;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var zn=!1;function $t(){m.autoAddCss&&!zn&&(qe(le()),zn=!0)}var na={mixout:function(){return{dom:{css:le,insertCss:$t}}},hooks:function(){return{beforeDOMElementCreation:function(){$t()},beforeI2svg:function(){$t()}}}},M=_||{};M[T]||(M[T]={});M[T].styles||(M[T].styles={});M[T].hooks||(M[T].hooks={});M[T].shims||(M[T].shims=[]);var C=M[T],ce=[],ea=function t(){g.removeEventListener("DOMContentLoaded",t),It=1,ce.map(function(n){return n()})},It=!1;F&&(It=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),It||g.addEventListener("DOMContentLoaded",ea));function aa(t){F&&(It?setTimeout(t,0):ce.push(t))}function ft(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?fe(t):"<".concat(n," ").concat(Qe(a),">").concat(i.map(ft).join(""),"</").concat(n,">")}function Fn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var ra=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Yt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?ra(e,r):e,f,u,l;for(a===void 0?(f=1,l=n[i[0]]):(f=0,l=a);f<o;f++)u=i[f],l=s(l,n[u],u,n);return l};function ia(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Gt(t){var n=ia(t);return n.length===1?n[0].toString(16):null}function oa(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Dn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Xt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=Dn(n);typeof C.hooks.addPack=="function"&&!r?C.hooks.addPack(t,Dn(n)):C.styles[t]=c(c({},C.styles[t]||{}),i),t==="fas"&&Xt("fa",n)}var bt,yt,kt,G=C.styles,sa=C.shims,fa=(bt={},y(bt,h,Object.values(at[h])),y(bt,b,Object.values(at[b])),bt),ln=null,ue={},me={},de={},ve={},pe={},la=(yt={},y(yt,h,Object.keys(nt[h])),y(yt,b,Object.keys(nt[b])),yt);function ca(t){return~Be.indexOf(t)}function ua(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!ca(r)?r:null}var he=function(){var n=function(i){return Yt(G,function(o,s,f){return o[f]=Yt(s,i,{}),o},{})};ue=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),me=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),pe=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in G||m.autoFetchSvg,a=Yt(sa,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});de=a.names,ve=a.unicodes,ln=Ct(m.styleDefault,{family:m.familyDefault})};Xe(function(t){ln=Ct(t.styleDefault,{family:m.familyDefault})});he();function cn(t,n){return(ue[t]||{})[n]}function ma(t,n){return(me[t]||{})[n]}function U(t,n){return(pe[t]||{})[n]}function ge(t){return de[t]||{prefix:null,iconName:null}}function da(t){var n=ve[t],e=cn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function j(){return ln}var un=function(){return{prefix:null,iconName:null,rest:[]}};function Ct(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?h:e,r=nt[a][t],i=et[a][t]||et[a][r],o=t in C.styles?t:null;return i||o||null}var Ln=(kt={},y(kt,h,Object.keys(at[h])),y(kt,b,Object.keys(at[b])),kt);function Et(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},y(n,h,"".concat(m.cssPrefix,"-").concat(h)),y(n,b,"".concat(m.cssPrefix,"-").concat(b)),n),o=null,s=h;(t.includes(i[h])||t.some(function(u){return Ln[h].includes(u)}))&&(s=h),(t.includes(i[b])||t.some(function(u){return Ln[b].includes(u)}))&&(s=b);var f=t.reduce(function(u,l){var d=ua(m.cssPrefix,l);if(G[l]?(l=fa[s].includes(l)?je[s][l]:l,o=l,u.prefix=l):la[s].indexOf(l)>-1?(o=l,u.prefix=Ct(l,{family:s})):d?u.iconName=d:l!==m.replacementClass&&l!==i[h]&&l!==i[b]&&u.rest.push(l),!r&&u.prefix&&u.iconName){var v=o==="fa"?ge(u.iconName):{},p=U(u.prefix,u.iconName);v.prefix&&(o=null),u.iconName=v.iconName||p||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!G.far&&G.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},un());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===b&&(G.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=U(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=j()||"fas"),f}var va=function(){function t(){Ce(this,t),this.definitions={}}return Ee(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=c(c({},e.definitions[s]||{}),o[s]),Xt(s,o[s]);var f=at[h][s];f&&Xt(f,o[s]),he()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,l=u[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(e[s][d]=u)}),e[s][f]=u}),e}}]),t}(),Rn=[],X={},q={},pa=Object.keys(q);function ha(t,n){var e=n.mixoutsTo;return Rn=t,X={},Object.keys(q).forEach(function(a){pa.indexOf(a)===-1&&delete q[a]}),Rn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),At(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){X[o]||(X[o]=[]),X[o].push(i[o])})}a.provides&&a.provides(q)}),e}function qt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=X[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function V(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=X[t]||[];r.forEach(function(i){i.apply(null,e)})}function z(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return q[t]?q[t].apply(null,n):void 0}function Kt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||j();if(n)return n=U(e,n)||n,Fn(be.definitions,e,n)||Fn(C.styles,e,n)}var be=new va,ga=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,V("noAuto")},ba={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(V("beforeI2svg",n),z("pseudoElements2svg",n),z("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,aa(function(){ka({autoReplaceSvgRoot:e}),V("watch",n)})}},ya={icon:function(n){if(n===null)return null;if(At(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:U(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Ct(n[0]);return{prefix:a,iconName:U(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match($e))){var r=Et(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||j(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=j();return{prefix:i,iconName:U(i,n)||n}}}},I={noAuto:ga,config:m,dom:ba,parse:ya,library:be,findIconDefinition:Kt,toHtml:ft},ka=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?g:e;(Object.keys(C.styles).length>0||m.autoFetchSvg)&&F&&m.autoReplaceSvg&&I.dom.i2svg({node:a})};function Pt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return ft(a)})}}),Object.defineProperty(t,"node",{get:function(){if(F){var a=g.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function xa(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(fn(o)&&e.found&&!a.found){var s=e.width,f=e.height,u={x:s/f/2,y:.5};r.style=Ot(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function wa(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function mn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,u=t.maskId,l=t.titleId,d=t.extra,v=t.watchable,p=v===void 0?!1:v,x=a.found?a:e,S=x.width,O=x.height,E=r==="fak",k=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(D){return d.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(d.classes).join(" "),w={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(O)})},P=E&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/O*16*.0625,"em")}:{};p&&(w.attributes[B]=""),f&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(l||it())},children:[f]}),delete w.attributes.title);var A=c(c({},w),{},{prefix:r,iconName:i,main:e,mask:a,maskId:u,transform:o,symbol:s,styles:c(c({},P),d.styles)}),Y=a.found&&e.found?z("generateAbstractMask",A)||{children:[],attributes:{}}:z("generateAbstractIcon",A)||{children:[],attributes:{}},W=Y.children,Nt=Y.attributes;return A.children=W,A.attributes=Nt,s?wa(A):xa(A)}function _n(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,u=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(u[B]="");var l=c({},o.styles);fn(r)&&(l.transform=Ze({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var d=Ot(l);d.length>0&&(u.style=d);var v=[];return v.push({tag:"span",attributes:u,children:[n]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Aa(t){var n=t.content,e=t.title,a=t.extra,r=c(c(c({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Ot(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Wt=C.styles;function Qt(t){var n=t[0],e=t[1],a=t.slice(4),r=nn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(H.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(H.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(H.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var Ia={found:!1,width:512,height:512};function Sa(t,n){!re&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Jt(t,n){var e=n;return n==="fa"&&m.styleDefault!==null&&(n=j()),new Promise(function(a,r){var i={found:!1,width:512,height:512,icon:z("missingIconAbstract")||{}};if(e==="fa"){var o=ge(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&Wt[n]&&Wt[n][t]){var s=Wt[n][t];return a(Qt(s))}Sa(t,n),a(c(c({},Ia),{},{icon:m.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}var jn=function(){},Zt=m.measurePerformance&&mt&&mt.mark&&mt.measure?mt:{mark:jn,measure:jn},J='FA "6.5.1"',Oa=function(n){return Zt.mark("".concat(J," ").concat(n," begins")),function(){return ye(n)}},ye=function(n){Zt.mark("".concat(J," ").concat(n," ends")),Zt.measure("".concat(J," ").concat(n),"".concat(J," ").concat(n," begins"),"".concat(J," ").concat(n," ends"))},dn={begin:Oa,end:ye},xt=function(){};function $n(t){var n=t.getAttribute?t.getAttribute(B):null;return typeof n=="string"}function Ca(t){var n=t.getAttribute?t.getAttribute(an):null,e=t.getAttribute?t.getAttribute(rn):null;return n&&e}function Ea(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Pa(){if(m.autoReplaceSvg===!0)return wt.replace;var t=wt[m.autoReplaceSvg];return t||wt.replace}function Na(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function Ta(t){return g.createElement(t)}function ke(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Na:Ta:e;if(typeof t=="string")return g.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(ke(o,{ceFn:a}))}),r}function Ma(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var wt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(ke(r),e)}),e.getAttribute(B)===null&&m.keepOriginalSource){var a=g.createComment(Ma(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~sn(e).indexOf(m.replacementClass))return wt.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ft(s)}).join(`
`);e.setAttribute(B,""),e.innerHTML=o}};function Yn(t){t()}function xe(t,n){var e=typeof n=="function"?n:xt;if(t.length===0)e();else{var a=Yn;m.mutateApproach===Re&&(a=_.requestAnimationFrame||Yn),a(function(){var r=Pa(),i=dn.begin("mutate");t.map(r),i(),e()})}}var vn=!1;function we(){vn=!0}function tn(){vn=!1}var St=null;function Wn(t){if(Nn&&m.observeMutations){var n=t.treeCallback,e=n===void 0?xt:n,a=t.nodeCallback,r=a===void 0?xt:a,i=t.pseudoElementsCallback,o=i===void 0?xt:i,s=t.observeMutationsRoot,f=s===void 0?g:s;St=new Nn(function(u){if(!vn){var l=j();Q(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!$n(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&$n(d.target)&&~Ue.indexOf(d.attributeName))if(d.attributeName==="class"&&Ca(d.target)){var v=Et(sn(d.target)),p=v.prefix,x=v.iconName;d.target.setAttribute(an,p||l),x&&d.target.setAttribute(rn,x)}else Ea(d.target)&&r(d.target)})}}),F&&St.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function za(){St&&St.disconnect()}function Fa(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Da(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Et(sn(t));return r.prefix||(r.prefix=j()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ma(r.prefix,t.innerText)||cn(r.prefix,Gt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function La(t){var n=Q(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(e?n["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||it()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ra(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Da(t),a=e.iconName,r=e.prefix,i=e.rest,o=La(t),s=qt("parseNodeAttributes",{},t),f=n.styleParser?Fa(t):[];return c({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var _a=C.styles;function Ae(t){var n=m.autoReplaceSvg==="nest"?Hn(t,{styleParser:!1}):Hn(t);return~n.extra.classes.indexOf(ie)?z("generateLayersText",t,n):z("generateSvgReplacementMutation",t,n)}var $=new Set;on.map(function(t){$.add("fa-".concat(t))});Object.keys(nt[h]).map($.add.bind($));Object.keys(nt[b]).map($.add.bind($));$=ot($);function Un(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var e=g.documentElement.classList,a=function(d){return e.add("".concat(Tn,"-").concat(d))},r=function(d){return e.remove("".concat(Tn,"-").concat(d))},i=m.autoFetchSvg?$:on.map(function(l){return"fa-".concat(l)}).concat(Object.keys(_a));i.includes("fa")||i.push("fa");var o=[".".concat(ie,":not([").concat(B,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(B,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Q(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=dn.begin("onTree"),u=s.reduce(function(l,d){try{var v=Ae(d);v&&l.push(v)}catch(p){re||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,d){Promise.all(u).then(function(v){xe(v,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(v){f(),d(v)})})}function ja(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ae(t).then(function(e){e&&xe([e],n)})}function $a(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Kt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Kt(r||{})),t(a,c(c({},e),{},{mask:r}))}}var Ya=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?N:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,u=e.maskId,l=u===void 0?null:u,d=e.title,v=d===void 0?null:d,p=e.titleId,x=p===void 0?null:p,S=e.classes,O=S===void 0?[]:S,E=e.attributes,k=E===void 0?{}:E,w=e.styles,P=w===void 0?{}:w;if(n){var A=n.prefix,Y=n.iconName,W=n.icon;return Pt(c({type:"icon"},n),function(){return V("beforeDOMElementCreation",{iconDefinition:n,params:e}),m.autoA11y&&(v?k["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(x||it()):(k["aria-hidden"]="true",k.focusable="false")),mn({icons:{main:Qt(W),mask:f?Qt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:Y,transform:c(c({},N),r),symbol:o,title:v,maskId:l,titleId:x,extra:{attributes:k,styles:P,classes:O}})})}},Wa={mixout:function(){return{icon:$a(Ya)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Un,e.nodeCallback=ja,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?g:a,i=e.callback,o=i===void 0?function(){}:i;return Un(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,u=a.symbol,l=a.mask,d=a.maskId,v=a.extra;return new Promise(function(p,x){Promise.all([Jt(r,s),l.iconName?Jt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var O=nn(S,2),E=O[0],k=O[1];p([e,mn({icons:{main:E,mask:k},prefix:s,iconName:r,transform:f,symbol:u,maskId:d,title:i,titleId:o,extra:v,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Ot(s);f.length>0&&(r.style=f);var u;return fn(o)&&(u=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},Ha={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Pt({type:"layer"},function(){V("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(ot(i)).join(" ")},children:o}]})}}}},Ua={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,l=a.styles,d=l===void 0?{}:l;return Pt({type:"counter",content:e},function(){return V("beforeDOMElementCreation",{content:e,params:a}),Aa({content:e.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(ot(s))}})})}}}},Ba={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?N:r,o=a.title,s=o===void 0?null:o,f=a.classes,u=f===void 0?[]:f,l=a.attributes,d=l===void 0?{}:l,v=a.styles,p=v===void 0?{}:v;return Pt({type:"text",content:e},function(){return V("beforeDOMElementCreation",{content:e,params:a}),_n({content:e,transform:c(c({},N),i),title:s,extra:{attributes:d,styles:p,classes:["".concat(m.cssPrefix,"-layers-text")].concat(ot(u))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(ne){var u=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/u,f=l.height/u}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,_n({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Va=new RegExp('"',"ug"),Bn=[1105920,1112319];function Ga(t){var n=t.replace(Va,""),e=oa(n,0),a=e>=Bn[0]&&e<=Bn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Gt(r?n[0]:n),isSecondary:a||r}}function Vn(t,n){var e="".concat(Le).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=Q(t.children),o=i.filter(function(W){return W.getAttribute(Vt)===n})[0],s=_.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Ye),u=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?b:h,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?et[v][f[2].toLowerCase()]:We[v][u],x=Ga(d),S=x.value,O=x.isSecondary,E=f[0].startsWith("FontAwesome"),k=cn(p,S),w=k;if(E){var P=da(S);P.iconName&&P.prefix&&(k=P.iconName,p=P.prefix)}if(k&&!O&&(!o||o.getAttribute(an)!==p||o.getAttribute(rn)!==w)){t.setAttribute(e,w),o&&t.removeChild(o);var A=Ra(),Y=A.extra;Y.attributes[Vt]=n,Jt(k,p).then(function(W){var Nt=mn(c(c({},A),{},{icons:{main:W,mask:un()},prefix:p,iconName:w,extra:Y,watchable:!0})),D=g.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=Nt.map(function(Oe){return ft(Oe)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Xa(t){return Promise.all([Vn(t,"::before"),Vn(t,"::after")])}function qa(t){return t.parentNode!==document.head&&!~_e.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Gn(t){if(F)return new Promise(function(n,e){var a=Q(t.querySelectorAll("*")).filter(qa).map(Xa),r=dn.begin("searchPseudoElements");we(),Promise.all(a).then(function(){r(),tn(),n()}).catch(function(){r(),tn(),e()})})}var Ka={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Gn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?g:a;m.searchPseudoElements&&Gn(r)}}},Xn=!1,Qa={mixout:function(){return{dom:{unwatch:function(){we(),Xn=!0}}}},hooks:function(){return{bootstrap:function(){Wn(qt("mutationObserverCallbacks",{}))},noAuto:function(){za()},watch:function(e){var a=e.observeMutationsRoot;Xn?tn():Wn(qt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},qn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Ja={mixout:function(){return{parse:{transform:function(e){return qn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=qn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(u," ").concat(l)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:d,path:v};return{tag:"g",attributes:c({},p.outer),children:[{tag:"g",attributes:c({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),p.path)}]}]}}}},Ht={x:0,y:0,width:"100%",height:"100%"};function Kn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Za(t){return t.tag==="g"?t.children:[t]}var tr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Et(r.split(" ").map(function(o){return o.trim()})):un();return i.prefix||(i.prefix=j()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,u=i.width,l=i.icon,d=o.width,v=o.icon,p=Je({transform:f,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:c(c({},Ht),{},{fill:"white"})},S=l.children?{children:l.children.map(Kn)}:{},O={tag:"g",attributes:c({},p.inner),children:[Kn(c({tag:l.tag,attributes:c(c({},l.attributes),p.path)},S))]},E={tag:"g",attributes:c({},p.outer),children:[O]},k="mask-".concat(s||it()),w="clip-".concat(s||it()),P={tag:"mask",attributes:c(c({},Ht),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,E]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Za(v)},P]};return a.push(A,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(k,")")},Ht)}),{children:a,attributes:r}}}},nr={provides:function(n){var e=!1;_.matchMedia&&(e=_.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},er={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},ar=[na,Wa,Ha,Ua,Ba,Ka,Qa,Ja,tr,nr,er];ha(ar,{mixoutsTo:I});var br=I.noAuto,yr=I.config,kr=I.library,xr=I.dom,Ie=I.parse,wr=I.findIconDefinition,Ar=I.toHtml,Se=I.icon,Ir=I.layer,rr=I.text,ir=I.counter;var sr=["*"],fr=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},lr=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},cr=t=>{let n={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:t.rotate!==null,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(n).map(e=>n[e]?e:null).filter(e=>e)},ur=t=>t.prefix!==void 0&&t.iconName!==void 0,mr=(t,n)=>ur(t)?t:typeof t=="string"?{prefix:n,iconName:t}:{prefix:t[0],iconName:t[1]},dr=(()=>{let n=class n{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=Tt({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})(),vr=(()=>{let n=class n{constructor(){this.definitions={}}addIcons(...a){for(let r of a){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let i of r.icon[2])typeof i=="string"&&(this.definitions[r.prefix][i]=r)}}addIconPacks(...a){for(let r of a){let i=Object.keys(r).map(o=>r[o]);this.addIcons(...i)}}getIconDefinition(a,r){return a in this.definitions&&r in this.definitions[a]?this.definitions[a][r]:null}};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=Tt({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})(),pr=(()=>{let n=class n{constructor(){this.stackItemSize="1x"}ngOnChanges(a){if("size"in a)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};n.\u0275fac=function(r){return new(r||n)},n.\u0275dir=hn({type:n,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[ut]});let t=n;return t})(),hr=(()=>{let n=class n{constructor(a,r){this.renderer=a,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(a){"size"in a&&(a.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${a.size.currentValue}`),a.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${a.size.previousValue}`))}};n.\u0275fac=function(r){return new(r||n)(L(yn),L(gn))},n.\u0275cmp=Mt({type:n,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[ut,zt],ngContentSelectors:sr,decls:1,vars:0,template:function(r,i){r&1&&(wn(),An(0))},encapsulation:2});let t=n;return t})(),Tr=(()=>{let n=class n{set spin(a){this.animation=a?"spin":void 0}set pulse(a){this.animation=a?"spin-pulse":void 0}constructor(a,r,i,o,s){this.sanitizer=a,this.config=r,this.iconLibrary=i,this.stackItem=o,this.classes=[],s!=null&&o==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(a){if(this.icon==null&&this.config.fallbackIcon==null){lr();return}if(a){let r=this.icon!=null?this.icon:this.config.fallbackIcon,i=this.findIconDefinition(r);if(i!=null){let o=this.buildParams();this.renderIcon(i,o)}}}render(){this.ngOnChanges({})}findIconDefinition(a){let r=mr(a,this.config.defaultPrefix);if("icon"in r)return r;let i=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return i??(fr(r),null)}buildParams(){let a={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?Ie.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...cr(a),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(a,r){let i=Se(a,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}};n.\u0275fac=function(r){return new(r||n)(L(In),L(dr),L(vr),L(pr,8),L(hr,8))},n.\u0275cmp=Mt({type:n,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,i){r&2&&(xn("innerHTML",i.renderedIconHTML,bn),kn("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[ut,zt],decls:0,vars:0,template:function(r,i){},encapsulation:2});let t=n;return t})();var pn=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=ct({type:n}),n.\u0275inj=lt({});let t=n;return t})();var Rr=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=ct({type:n}),n.\u0275inj=lt({imports:[Ft,Dt,Lt,jt,Rt,_t,pn,Ft,Dt,Lt,jt,Rt,_t,pn]});let t=n;return t})();export{Tr as a,Rr as b};
