!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(s){u=!0,a=s}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./chakra-legacy-b8b156e3.js","./index-legacy-97b2b4ba.js","./param-updater-utils-legacy-78c1666e.js","./react-legacy-e9fbe36a.js"],(function(t,n){"use strict";var r,a,o,i,l,c,u,s,d,f,p,m,v,y,h,g,j,C,b;return{setters:[function(e){r=e.j,a=e.z,o=e.C,i=e.a7,l=e.J,c=e.h},function(e){u=e.b,s=e.r,d=e.E,f=e.b6,p=e.a_,m=e.o,v=e.b9,y=e.ba,h=e.aZ},function(e){g=e.P,j=e.u},function(e){C=e.u,b=e.r}],execute:function(){t("default",(function(){var t=u().t,I=e(C(),1)[0],P=I.get("parentId"),S=I.get("parentComponent"),_=e(b.useState([]),2),A=_[0],O=_[1],w=e(b.useState(),2),E=w[0],M=w[1],R=e(b.useState(!1),2),D=R[0],k=R[1],L=b.useRef();b.useEffect((function(){L.current=new BroadcastChannel(n+P),s.event(d.APP_CLIP_VIEW_OPENED,{parentComponent:S});var e=document.createElement("style");return e.textContent=".rmg-window__header{display: none;}",document.head.appendChild(e),O(f()),function(){var t;null===(t=L.current)||void 0===t||t.close(),document.head.removeChild(e)}}),[]);return r.jsxs(p,{children:[D&&r.jsxs(a,{status:"error",variant:"solid",size:"xs",pl:3,pr:1,py:1,children:[r.jsx(o,{}),t("Project selected is invalid or corrupted.")]}),r.jsxs(m,{sx:x,children:[r.jsx(g,{paramRegistry:A,selectedParam:E,onParamSelect:M}),r.jsxs(i,{children:[r.jsx(l,{variant:"ghost","aria-label":t("Manage"),title:t("Manage"),icon:r.jsx(v,{}),onClick:function(){s.openApp("rmg")}}),r.jsx(l,{variant:"ghost","aria-label":t("Reload"),title:t("Reload"),icon:r.jsx(y,{}),onClick:function(){return O(f())}}),r.jsx(c,{onClick:function(){var e;null===(e=L.current)||void 0===e||e.postMessage({event:"CLOSE"}),s.event(d.APP_CLIP_VIEW_CLOSED,{parentComponent:S}),M(void 0),k(!1)},children:t("Close")}),r.jsx(c,{colorScheme:"primary",isDisabled:!E,onClick:function(){var e=window.localStorage.getItem(h.PARAM_CONFIG_BY_ID+E),t=window.localStorage.getItem(h.PARAM_BY_ID+E);try{var n,r=t?j(JSON.parse(t)):null;null===(n=L.current)||void 0===n||n.postMessage({event:"IMPORT",meta:e?JSON.parse(e):null,data:r}),s.event(d.APP_CLIP_VIEW_IMPORT,{parentComponent:S}),M(void 0),k(!1)}catch(a){k(!0)}},children:t("Import")})]})]})]})}));var n="rmg-bridge--",x={flexDirection:"column",h:"100%",p:2,"& > div:first-of-type":{m:0,"& > div":{h:"100%"}},"& > div:last-of-type":{mt:2,"& button:nth-of-type(2)":{mr:"auto"}}}}}}))}();
