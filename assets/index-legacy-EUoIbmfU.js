System.register(["./chakra-legacy-rsWUbD51.js","./react-legacy-gc_DZOLI.js","./index-legacy-Zpv2zY0k.js","./share-legacy-Pys63k3a.js","./param-manager-utils-legacy-KVGv0BbI.js"],(function(e,t){"use strict";var n,r,s,a,i,l,c,o,d,m,h,x,u,g,f;return{setters:[e=>{n=e.j},e=>{r=e.r},e=>{s=e.g,a=e.aV,i=e.u,l=e.m,c=e.S,o=e.aT,d=e.P},e=>{m=e.a,h=e.c,x=e.b,u=e.d,g=e.S},e=>{f=e.i}],execute:function(){function t(e){const{num:t,inStrip:r,...a}=e;return n.jsxs("g",{textAnchor:"middle",fill:r?s.black:"var(--rmg-theme-fg)",...a,children:[n.jsx("rect",{height:40,width:40,rx:4,x:-20,fill:r?"#fff":"var(--rmg-theme-colour)"}),n.jsx("text",{className:"rmg-name__en",fontSize:20,dy:12,children:t}),n.jsx("text",{className:"rmg-name__zh",fontSize:12,dy:26,children:"屏蔽门"}),n.jsx("text",{className:"rmg-name__en",fontSize:6.5,dy:36,children:"Screen Door"})]})}const p=e=>{const t=(e=>{switch(e){case"gz28":case"gz2otis":case"gz6":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz4":case"gz5":case"gz1421":return 20;default:return 0}})(e.variant),s=r.useMemo((()=>{switch(e.variant){case"gz1":return n.jsx("circle",{cy:-58,r:16,fill:"red"});case"gz28":case"gz2otis":return n.jsx("ellipse",{cy:-30,rx:24,ry:12,fill:"orange"});case"gz3":return n.jsx("rect",{x:-15,y:-55,height:30,width:30,fill:"red"});case"gz6":return n.jsx("ellipse",{cy:-30,rx:24,ry:12,fill:"white"});case"gz1421":return n.jsx("ellipse",{cy:-38,rx:24,ry:12,fill:"orange"});case"gz5":return n.jsx("rect",{x:-30,y:-70,height:30,width:60,fill:"orange"});case"gz4":return n.jsx("rect",{x:-50,y:-50,height:25,width:100,fill:"whitesmoke"});case"gzgf":return n.jsx("rect",{x:-30,y:-58,height:30,width:60,fill:"orange"});default:return n.jsx(n.Fragment,{})}}),[e.variant]);return n.jsxs("g",{transform:`translate(0,${"gz4"===e.variant?-20:0})`,children:[n.jsx("rect",{id:"strip_gz",style:{"--height":`${t}px`}}),n.jsx("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),var(--rmg-svg-height))"},children:e.isShowLight&&s}),!1!==e.isShowPSD&&n.jsx(j,{...e})]})},j=r.memo((function(e){const r=["gz28","gz2otis","gz6","gzgf"].includes(e.variant),s=(e=>{switch(e){case"gz1":case"gz3":return"82px";case"gz4":return"65px";case"gz5":return"80px";case"gz1421":return"62px";default:return"58px"}})(e.variant);return n.jsx(t,{num:e.isShowPSD,inStrip:r,style:{"--psd-dy":s,transform:"translate(var(--translate-x), var(--translate-y))","--translate-x":"calc(var(--rmg-svg-width) / 2 + 80px)","--translate-y":"calc(var(--rmg-svg-height) - var(--psd-dy, 58px))"}})}),((e,t)=>e.variant===t.variant&&e.isShowPSD===t.isShowPSD));var y=45,v=y-3,_=function(e,t){var n=[e,t].map((function(e){return e.match(/^(\w+).+$/)}));if(n[0]&&n[1]&&n[0][1]===n[1][1])return n[0][1]},S=function(e){var t=e.match(/^(\d+)\D+$/);return null==t?void 0:t[1]},z=function(){return z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},z.apply(this,arguments)},N=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};function w(e){var t=e.customWidth,r=N(e,["customWidth"]),s=(null!=t?t:y)-y;return n.jsx("rect",z({x:-22.5-s/2,height:24,width:null!=t?t:y,rx:4.5},r,{"data-testid":"intBox"}))}var b=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,s,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(l){s={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(s)throw s.error}}return i};function B(e){var t=e.zhName,a=e.enName,i=e.foregroundColour,l=e.backgroundColour,c=e.zhClassName,o=e.enClassName,d=e.passed,m=function(e,t){var n=S(e);if(n)return{isDigit:!0,spanningPart:n};var r=_(e,t);return r?{isDigit:!1,spanningPart:r}:{isDigit:!1,spanningPart:""}}(t,a),h=m.isDigit,x=m.spanningPart,u=r.useRef(null),g=b(r.useState({x:0,height:0,width:0}),2),f=g[0],p=g[1];r.useEffect((function(){u.current&&p(u.current.getBBox())}),[t,a]);var j=v/Math.max(v,f.width),y=(-f.x-f.width/2)*j,z=f.height*(1-j)/2;return n.jsxs("g",{textAnchor:"middle",fill:d?s.white:i,children:[n.jsx(w,{fill:d?"#aaa":l}),n.jsx("g",{ref:u,transform:"translate(".concat(y,",").concat(z,")scale(").concat(j,")"),children:n.jsxs("text",{className:c,fontSize:21,x:-1,y:12,textAnchor:"end",dominantBaseline:"central",children:[x,n.jsx("tspan",{className:c,fontSize:10,x:0,dy:-4,textAnchor:"start",dominantBaseline:"central",children:t.slice(x.length).trim()}),n.jsx("tspan",{className:o,fontSize:6.5,letterSpacing:-.1,x:0,dy:10,textAnchor:"start",dominantBaseline:"middle",children:h?a:a.slice(x.length).trim()})]})})]})}var k=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,s,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(l){s={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(s)throw s.error}}return i};function O(e){var t,a=e.zhName,i=e.enName,l=e.foregroundColour,c=e.backgroundColour,o=e.zhClassName,d=e.enClassName,m=e.passed,h=null!==(t=S(a))&&void 0!==t?t:"",x=r.useRef(null),u=r.useRef(null),g=k(r.useState({width:0}),2),f=g[0],p=g[1],j=k(r.useState({width:0}),2),y=j[0],_=j[1];r.useEffect((function(){x.current&&p(x.current.getBBox()),u.current&&_(u.current.getBBox())}),[a,i]);var z=v/Math.max(v,f.width),N=v/Math.max(v,y.width),b={nameZh:{y:7.3+13.5*(1-z)*z/2},nameEn:{y:19.5-9*(1-N)*N/2}};return n.jsxs("g",{textAnchor:"middle",fill:m?s.white:l,children:[n.jsx(w,{fill:m?"#aaa":c}),n.jsxs("text",{ref:x,className:o,fontSize:12,transform:"translate(0,".concat(b.nameZh.y,")scale(").concat(z,")"),dominantBaseline:"central",children:[n.jsx("tspan",{fontSize:16,dy:.7,dominantBaseline:"central",children:h}),n.jsx("tspan",{dy:-.7,dominantBaseline:"central",children:a.slice(h.length)})]}),n.jsx("text",{ref:u,className:d,fontSize:8,transform:"translate(0,".concat(b.nameEn.y,")scale(").concat(N,")"),dominantBaseline:"middle",children:i})]})}var R=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,s,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(l){s={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(s)throw s.error}}return i};function $(e){var t=e.zhName,a=e.enName,i=e.foregroundColour,l=e.backgroundColour,c=e.zhClassName,o=e.enClassName,d=e.passed,m=r.useRef(null),h=R(r.useState({width:0}),2),x=h[0],u=h[1];r.useEffect((function(){m.current&&u(m.current.getBBox())}),[t,a]);var g=Math.max(45,x.width+4);return n.jsxs("g",{textAnchor:"middle",fill:d?s.white:i,children:[n.jsx(w,{customWidth:g,fill:d?"#aaa":l}),n.jsxs("g",{ref:m,children:[n.jsx("text",{className:c,fontSize:8.5,y:8,dominantBaseline:"central",children:t}),n.jsx("text",{className:o,fontSize:5.5,y:18,dominantBaseline:"middle",children:a})]})]})}var A=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,s,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(l){s={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(s)throw s.error}}return i};function C(e){var t=e.zhName,a=e.enName,i=e.foregroundColour,l=e.backgroundColour,c=e.zhClassName,o=e.enClassName,d=e.passed,m=r.useRef(null),h=r.useRef(null),x=A(r.useState({width:0}),2),u=x[0],g=x[1],f=A(r.useState({width:0}),2),p=f[0],j=f[1];r.useEffect((function(){m.current&&g(m.current.getBBox()),h.current&&j(h.current.getBBox())}),[t,a]);var y=v/Math.max(v,u.width),_=v/Math.max(v,p.width),S={nameZh:{y:7.3+13.5*(1-y)*y/2},nameEn:{y:19.5-9*(1-_)*_/2}};return n.jsxs("g",{textAnchor:"middle",fill:d?s.white:i,children:[n.jsx(w,{fill:d?"#aaa":l}),n.jsx("text",{ref:m,className:c,fontSize:12,transform:"translate(0,".concat(S.nameZh.y,")scale(").concat(y,")"),dominantBaseline:"central",children:t}),n.jsx("text",{ref:h,className:o,fontSize:8,transform:"translate(0,".concat(S.nameEn.y,")scale(").concat(_,")"),dominantBaseline:"middle",children:a})]})}var I=function(){return I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},I.apply(this,arguments)};const M=r.memo((function(e){var t=e.zhName,r=e.enName,s=e.spanDigits;switch(E(t,r)){case 1:return s?n.jsx(B,I({},e)):n.jsx(O,I({},e));case 2:return n.jsx(B,I({},e));default:return t.length>=5?n.jsx($,I({},e)):n.jsx(C,I({},e))}}));var E=function(e,t){return void 0!==S(e)?1:void 0!==_(e,t)?2:3};const P=r.memo((function(e){var t=e.stroke,r=e.filled;return n.jsx("path",{d:"M0,9.25 V-9.25 H-9.25 a9.25,9.25 0 0,0 0,18.5 h18.5 a9.25,9.25 0 0,0 0,-18.5 H0",fill:r?t:"#fff",strokeWidth:1.3,stroke:t})}));var D=function(){return D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},D.apply(this,arguments)},W=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n},H=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,s,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(l){s={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(s)throw s.error}}return i},F=15;function L(e){var t=e.Icon,s=e.lineNum,a=e.stnNum,i=e.strokeColour,l=e.passed,c=e.size,o=e.textClassName,d=W(e,["Icon","lineNum","stnNum","strokeColour","passed","size","textClassName"]),m=r.useRef(null),h=r.useRef(null),x=H(r.useState({width:0}),2),u=x[0],g=x[1],f=H(r.useState({width:0}),2),p=f[0],j=f[1];r.useEffect((function(){m.current&&g(m.current.getBBox()),h.current&&j(h.current.getBBox())}),[s,a]);var y=F/Math.max(F,u.width),v=2===(null==s?void 0:s.length)&&2===(null==a?void 0:a.length)?y:F/Math.max(F,p.width),_="sm"===c?"0.7":"lg"===c?"1.4":1;return n.jsx("g",D({},d,{children:n.jsxs("g",{transform:"scale(".concat(_,")"),children:[n.jsx(t,{stroke:l?"#aaa":i,filled:!s&&!a}),(s||a)&&n.jsxs("g",{textAnchor:"middle",fontSize:13.5,fill:l?"#aaa":"#000",children:[n.jsx("g",{transform:"translate(-9.25,0)scale(".concat(y,")"),children:n.jsx("text",{ref:m,className:o,dominantBaseline:"central",x:.5,children:s})}),n.jsx("g",{transform:"translate(9.25,0)scale(".concat(v,")"),children:n.jsx("text",{ref:h,className:o,dominantBaseline:"central",children:a})})]})]})}))}var T=function(){return T=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},T.apply(this,arguments)};function U(e){return n.jsx(L,T({Icon:P},e))}const V=r.memo((function(e){const{stnName:t,onUpdate:s}=e,a=r.useRef(null);return r.useEffect((()=>{a.current&&s&&s(a.current.getBBox())}),[t.toString()]),n.jsxs("g",{ref:a,children:[n.jsx("text",{className:"rmg-name__zh",fontSize:18,children:t[0]}),n.jsx("g",{fontSize:10.5,children:t[1].split("\\").map(((e,t)=>n.jsx("text",{className:"rmg-name__en",dy:16+11*t,children:e},t)))})]})}),((e,t)=>e.stnName.toString()===t.stnName.toString()));function Z(e){const{stnName:t,onUpdate:s,passed:a,...i}=e,l=r.useRef(null),[c,o]=r.useState({x:0,width:0});return r.useEffect((()=>{if(l.current){const e=l.current.getBBox();o(e),s&&s(e)}}),[t.toString()]),t[0]||t[1]?n.jsxs("g",{fill:a?"#aaa":"#000",...i,children:[n.jsxs("g",{transform:"translate(0,3)",fontSize:18,children:[n.jsx("text",{textAnchor:"end",x:c.x-3,className:"rmg-name__zh",children:"("}),n.jsx("text",{textAnchor:"start",x:c.width+c.x+3,className:"rmg-name__zh",children:")"})]}),n.jsxs("g",{ref:l,textAnchor:"middle",children:[n.jsx("text",{className:"rmg-name__zh",fontSize:13,children:t[0]}),n.jsx("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:t[1]})]})]}):n.jsx(n.Fragment,{})}function J(e){const{passed:t,...r}=e;return n.jsxs("g",{textAnchor:"middle",fill:t?"#aaa":"var(--rmg-theme-colour)",...r,children:[n.jsx("text",{className:"rmg-name__zh",fontSize:13,children:"快车停靠站"}),n.jsx("text",{dy:10,className:"rmg-name__en",fontSize:6.5,children:"Express Station"})]})}function Y(e){const{primaryName:t,secondaryName:s,stationState:i,flipped:l,express:c}=e,[o,d]=r.useState({width:0}),[m,h]=r.useState({x:0,width:-20}),x=t[1].split("\\").length,u={x:0,y:l?17.5:-20-14*x*Math.cos(-45)},g={x:(o.width+m.width/2+10)*(l?-1:1),y:2+5*(x-1)},f={x:(o.width+m.width+20+35)*(l?-1:1),y:2+5*(x-1)};return n.jsxs("g",{textAnchor:l?"end":"start",fill:(e=>{switch(e){case a.PASSED:return"#aaa";case a.CURRENT:return"#f00";case a.FUTURE:return"#000"}})(i),transform:`translate(${u.x},${u.y})rotate(-45)`,children:[n.jsx(V,{stnName:t,onUpdate:d}),s&&n.jsx(Z,{stnName:s,onUpdate:h,passed:i===a.PASSED,transform:`translate(${g.x},${g.y})`}),c&&n.jsx(J,{passed:i===a.PASSED,transform:`translate(${f.x},${f.y})`})]})}function q(e){var t,r,s,a;const{stnId:c,stnState:o,stnY:d}=e,{theme:m,line_name:h,line_num:x,spanLineNum:u,stn_list:g}=i((e=>e.param)),f=g[c],p=2===f.parents.length||2===f.children.length,j=d>0||1===f.parents.indexOf((null===(t=f.branch)||void 0===t||null===(t=t.left)||void 0===t?void 0:t[1])||"")||1===f.children.indexOf((null===(r=f.branch)||void 0===r||null===(r=r.right)||void 0===r?void 0:r[1])||"")?180:0,y=f.name[1].split("\\").length,v=p?180===j?16+12*(y-1)*Math.cos(-45):-9:180===j?-6:(25+15*(y-1))*Math.cos(-45);return n.jsxs(n.Fragment,{children:[n.jsx(G,{intInfos:p?[{theme:[m[0],m[1],"var(--rmg-theme-colour)","var(--rmg-theme-fg)"],name:h},...null!==(s=f.transfer.groups[0].lines)&&void 0!==s?s:[]]:null!==(a=f.transfer.groups[0].lines)&&void 0!==a?a:[],stnState:o,tickRotation:j,spanDigits:u}),n.jsx(U,{lineNum:x,stnNum:f.num,strokeColour:m[2],textClassName:"rmg-name__zh",passed:-1===o}),n.jsx("g",{transform:`translate(${-v},0)`,children:n.jsx(Y,{primaryName:f.name,secondaryName:f.secondaryName||void 0,stationState:o,flipped:180===j,express:f.services.includes(l.express)})})]})}const G=e=>n.jsxs(n.Fragment,{children:[n.jsx(K,{strokeWidth:4,...e}),n.jsx(Q,{transform:`translate(0,${180===e.tickRotation?-47:23})`,...e})]}),K=e=>{const{intInfos:t,stnState:r,tickRotation:s,spanDigits:a,...i}=e;return n.jsx("g",{...i,children:t.map(((e,a)=>{var i;return n.jsx("use",{xlinkHref:"#inttick",stroke:-1===r?"#aaa":null===(i=e.theme)||void 0===i?void 0:i[2],transform:`translate(${-2*(t.length-1)+4*a},0)rotate(${180===s?180:0})`},a)}))})},Q=e=>{const{intInfos:t,tickRotation:r,stnState:a,spanDigits:i,...l}=e;return n.jsx("g",{...l,children:t.map(((e,t)=>{var l,c,o,d;return n.jsx("g",{transform:`translate(0,${28*t*(180===r?-1:1)})`,children:n.jsx(M,{zhName:e.name[0],enName:e.name[1],foregroundColour:null!==(l=null===(c=e.theme)||void 0===c?void 0:c[3])&&void 0!==l?l:s.white,backgroundColour:null!==(o=null===(d=e.theme)||void 0===d?void 0:d[2])&&void 0!==o?o:"#aaaaaa",zhClassName:"rmg-name__zh",enClassName:"rmg-name__en",passed:-1===a,spanDigits:i})},t)}))})},X=(e,t)=>2===e[t].parents.length||2===e[t].children.length?.25:0,ee=(e,t,n)=>{const r=h("linestart","lineend",t);if(r.nodes.includes(e))return h(r.nodes[1],e,t).len;{const s=n.filter((t=>t.includes(e)))[0];let a=e;for(;!r.nodes.includes(a);)a=s[s.indexOf(a)-1];let i=e;for(;!r.nodes.includes(i);)i=s[s.indexOf(i)+1];const l="linestart"===a,c="lineend"===i;if(s.toString()===n[0].toString()){const n=[];return l||c?l?(n[0]=0,n[1]=h(r.nodes[1],i,t).len,n[2]=h(s[1],e,t).len,n[3]=h(e,i,t).len):(n[0]=h(r.nodes[1],a,t).len,n[1]=h(a,r.nodes.slice(-2)[0],t).len,n[2]=h(a,e,t).len,n[3]=h(e,s.slice(-2)[0],t).len):(n[0]=h(r.nodes[1],a,t).len,n[1]=h(a,i,t).len,n[2]=h(a,e,t).len,n[3]=h(e,i,t).len),n[0]+n[2]*n[1]/(n[2]+n[3])}if(l||c)return l?h(r.nodes[1],i,t).len-h(e,i,t).len:h(r.nodes[1],a,t).len+h(a,e,t).len;{const n=[];return n[0]=h(r.nodes[1],a,t).len,n[1]=h(a,i,t).len,n[2]=h(a,e,t).len,n[3]=h(e,i,t).len,n[0]+n[2]*n[1]/(n[2]+n[3])}}},te=()=>{const{branches:e,routes:t,depsStr:s}=i((e=>e.helper)),{svgWidth:a,svg_height:l,y_pc:d,padding:g,branchSpacingPct:f,direction:p,line_name:j,spanLineNum:y,current_stn_idx:v,stn_list:_}=i((e=>e.param)),S=m(_,X,X),z=r.useMemo((()=>(console.log("computing x shares"),Object.keys(_).reduce(((t,n)=>({...t,[n]:ee(n,S,e)})),{}))),[e.toString(),JSON.stringify(S)]),N=h("linestart","lineend",S),w=h(N.nodes[1],N.nodes.slice(-2)[0],S),b=p===c.right?[a[o.RailMap]*g/100+65,a[o.RailMap]*(1-g/100)-20]:[a[o.RailMap]*g/100,a[o.RailMap]*(1-g/100)-65],B=Object.keys(z).reduce(((e,t)=>({...e,[t]:b[0]+z[t]/w.len*(b[1]-b[0])})),{}),k=r.useMemo((()=>(console.log("computing y shares"),Object.keys(_).reduce(((t,n)=>{if(e[0].includes(n))return{...t,[n]:0};{const r=e.slice(1).filter((e=>e.includes(n)))[0];return{...t,[n]:_[r[0]].children.indexOf(r[1])?-2:2}}}),{}))),[s]),O=Object.keys(k).reduce(((e,t)=>({...e,[t]:-k[t]*f*l/200})),{}),R=r.useMemo((()=>x(v,t,p)),[v,p,t.toString()]),$=e.map((e=>u(e,R))).reduce(((e,t)=>(e.main.push(t.main),e.pass.push(t.pass),e)),{main:[],pass:[]}),A=Object.keys($).reduce(((e,t)=>({...e,[t]:$[t].map((e=>re(e,B,O)))})),{});return n.jsxs("g",{id:"main",style:{"--y-percentage":d,transform:"translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"},children:[n.jsx(ne,{paths:A}),n.jsx(se,{xs:B,ys:O,stnStates:R}),n.jsx("g",{id:"line_name",style:{"--translate-x":p===c.right?b[0]-65+"px":`${b[1]+65}px`},children:n.jsx(M,{zhName:j[0],enName:j[1],foregroundColour:"var(--rmg-theme-fg)",backgroundColour:"var(--rmg-theme-colour)",zhClassName:"rmg-name__zh",enClassName:"rmg-name__en",spanDigits:y})})]})},ne=r.memo((function(e){return n.jsxs("g",{fill:"none",strokeWidth:4,children:[n.jsx("g",{stroke:"#aaa",strokeDasharray:4,children:e.paths.pass.map(((e,t)=>n.jsx("path",{d:e},t)))}),n.jsx("g",{stroke:"var(--rmg-theme-colour)",children:e.paths.main.map(((e,t)=>n.jsx("path",{d:e},t)))})]})}),((e,t)=>JSON.stringify(e.paths)===JSON.stringify(t.paths))),re=(e,t,n)=>{let r;const s=[];return e.forEach((e=>{const a=t[e],i=n[e];if(!r&&0!==r)return r=i,void s.push(`M ${a},${i}`);0===i?(i<r&&s.push("H "+(a-40),"a 40,40 0 0,0 40,-40",`V ${i}`),i>r&&s.push("H "+(a-40),"a 40,40 0 0,1 40,40",`V ${i}`)):(i<r&&s.push(`V ${i+40}`,"a 40,40 0 0,1 40,-40",`H ${a}`),i>r&&s.push("V "+(i-40),"a 40,40 0 0,0 40,40",`H ${a}`)),s.push(`H ${a}`),r=i})),s.join(" ").replace(/( H ([\d.]+))+/g," H $2")},se=e=>{const{xs:t,ys:r,stnStates:s}=e,a=i((e=>e.param.stn_list));return n.jsx("g",{id:"stn_icons",children:Object.keys(a).filter((e=>!["linestart","lineend"].includes(e))).map((e=>n.jsx("g",{style:{transform:`translate(${t[e]}px,${r[e]}px)`},children:n.jsx(q,{stnId:e,stnState:s[e],stnY:r[e]})},e)))})};function ae(e){return n.jsx("path",{d:"M60,60 L0,0 L60,-60 H90 L40,-10 H150 V10 H40 L90,60z",fill:"black",...e})}function ie(e){const{destIds:t,textAnchor:s,...a}=e,l=i((e=>e.param.direction)),o=i((e=>e.param.stn_list)),d=t.map((e=>o[e].name[0].length)),m=Math.min(...d),h=m>1&&d[0]!==d[1]?Math.abs(d[0]-d[1])/(m-1):0;return n.jsxs("g",{textAnchor:s,...a,children:[t.map(((e,t)=>{const a=d[t]>d[1-t],i=!f()&&"end"===s&&!a;return n.jsxs(r.Fragment,{children:[n.jsx("text",{className:"rmg-name__zh",fontSize:25,x:l===c.left?0:-75,y:42*t-21,letterSpacing:a?"0em":`${h}em`,dx:i?`${h}em`:"0em",children:o[e].name[0]}),n.jsx("text",{className:"rmg-name__en",fontSize:11.5,x:l===c.left?0:-75,y:42*t-1,children:"Towards "+o[e].name[1].replace("\\"," ")})]},e)})),n.jsx("text",{className:"rmg-name__zh",fontSize:28,x:l===c.left?25*(Math.max(...d)+1):0,y:5,children:"方向"})]})}const le=o.RailMap,ce=()=>{const{canvasScale:e}=i((e=>e.app)),{svgWidth:t,svg_height:r,direction:s,psd_num:a,info_panel_type:l,notesGZMTR:o,current_stn_idx:m,stn_list:h,theme:x}=i((e=>e.param)),u=t[le],f=h[m];return n.jsxs(g,{type:le,svgWidth:u,svgHeight:r,canvasScale:e,theme:x,children:[n.jsx(oe,{}),n.jsx(p,{variant:l,isShowLight:l===d.gz2otis,isShowPSD:l===d.gz2otis&&a}),s===c.left&&f.parents.includes("linestart")||s===c.right&&f.children.includes("lineend")?n.jsx(he,{}):n.jsxs(n.Fragment,{children:[n.jsx(te,{}),n.jsx(de,{}),null==o?void 0:o.map(((e,t)=>n.jsx(xe,{note:e},t)))]}),l===d.gz2otis&&n.jsx("line",{x2:u,transform:"translate(0,90)",strokeWidth:3,stroke:"black"})]})},oe=r.memo((function(){return n.jsx("defs",{children:n.jsx("path",{id:"inttick",d:"M 0,0 v 18",strokeLinecap:"square"})})})),de=()=>{const{routes:e}=i((e=>e.helper)),{direction:t,direction_gz_x:s,direction_gz_y:a,current_stn_idx:l}=i((e=>e.param)),o=r.useMemo((()=>[...new Set(e.reduce(((e,n)=>n.includes(l)?e.concat(n.filter((e=>!["linestart","lineend"].includes(e))).slice(t===c.left?0:-1)[0]):e),[]).filter((e=>e!==l)))]),[l,t,e.toString()]),d={textAnchor:t===c.left?"start":"end",transform:`translate(${t===c.left?65:-65},-5)`,destIds:o};return n.jsxs("g",{id:"direction_gz",style:{"--x-percentage":s,"--y-percentage":a},children:[n.jsx(ae,{transform:`scale(0.35)rotate(${t===c.left?0:180})`}),2!==o.length?n.jsx(me,{...d}):n.jsx(ie,{...d})]})},me=e=>{const{destIds:t,...r}=e,s=i((e=>e.param.stn_list));return n.jsxs("g",{...r,children:[n.jsx("text",{className:"rmg-name__zh",fontSize:28,children:t.map((e=>s[e].name[0])).join("/")+"方向"}),n.jsx("text",{className:"rmg-name__en",fontSize:14,dy:22,children:"Towards "+t.map((e=>s[e].name[1].replace("\\"," "))).join("/")})]})},he=r.memo((function(){return n.jsxs("g",{id:"terminus_gz",textAnchor:"middle",children:[n.jsx("text",{className:"rmg-name__zh",fontSize:90,children:"终 点 站"}),n.jsx("text",{dy:70,className:"rmg-name__en",fontSize:36,children:"Terminal"}),n.jsxs("g",{strokeWidth:8,stroke:"#000",children:[n.jsx("path",{d:"M -160,68 h -160"}),n.jsx("path",{d:"M 160,68 h 160"})]})]})})),xe=r.memo((function(e){const t=r.useRef(null),[s,a]=r.useState({width:0,height:0,y:0});return r.useEffect((()=>{t.current&&a(t.current.getBBox())}),[e.note[0],e.note[1]]),n.jsxs("g",{className:"note-box",style:{"--x-percentage":e.note[2],"--y-percentage":e.note[3]},children:[e.note[4]&&n.jsx("rect",{height:s.height+4,width:s.width+4,x:-2,y:s.y-2,fill:"none",stroke:"black",strokeWidth:.5}),n.jsxs("g",{ref:t,children:[n.jsx("g",{fontSize:16,letterSpacing:1.2,children:e.note[0].split("\n").map(((e,t)=>n.jsx("text",{className:"rmg-name__zh",y:18*t,children:e},t)))}),n.jsx("g",{fontSize:10,letterSpacing:.33,transform:`translate(0,${18*e.note[0].split("\n").length})`,children:e.note[1].split("\n").map(((t,r)=>{var a;return n.jsx("text",{className:"rmg-name__en",y:11*r,textLength:r<((null===(a=e.note[1].match(/\n/g))||void 0===a?void 0:a.length)||0)?s.width:navigator.userAgent.includes("Firefox")?-1:0,lengthAdjust:"spacing",children:t},r)}))})]})]})}),((e,t)=>e.note.toString()===t.note.toString())),ue=r.memo((function(e){const{stnName:t,onUpdate:s}=e,a=r.useRef(null);return r.useEffect((()=>{a.current&&s&&s(a.current.getBBox())}),[t.toString()]),n.jsxs("g",{ref:a,children:[n.jsx("text",{className:"rmg-name__zh",fontSize:90,children:t[0]}),n.jsx("g",{fontSize:36,children:t[1].split("\\").map(((e,t)=>n.jsx("text",{className:"rmg-name__en",dy:70+36*t,children:e},t)))})]})}),((e,t)=>e.stnName.toString()===t.stnName.toString())),ge=e=>{const{secondaryName:t,transform:s}=e,a=r.useRef(null),[i,l]=r.useState({x:0,width:0});return r.useEffect((()=>{a.current&&l(a.current.getBBox())}),[t.toString()]),n.jsxs("g",{transform:s,children:[n.jsxs("g",{transform:"translate(0,4.5)",fontSize:36,children:[n.jsx("text",{textAnchor:"end",x:i.x-3,className:"rmg-name__zh",children:"("}),n.jsx("text",{textAnchor:"start",x:i.width+i.x+3,className:"rmg-name__zh",children:")"})]}),n.jsxs("g",{ref:a,textAnchor:"middle",children:[n.jsx("text",{className:"rmg-name__zh",fontSize:26,children:t[0]}),n.jsx("text",{dy:22,className:"rmg-name__en",fontSize:14,children:t[1]})]})]})},fe=()=>{const{svg_height:e,svgWidth:t,theme:s,direction:a,info_panel_type:l,line_num:m,current_stn_idx:h,stn_list:x}=i((e=>e.param)),u=x[h],[g,f]=r.useState({width:0}),p=u[a===c.left?"parents":"children"],j={name:`translate(${(a===c.left?1:-1)*t[o.RunIn]/4},45)`,next:`translate(${(a===c.left?1:-1)*t[o.RunIn]/10},45)`},y={x:t.runin/2,y:.5*e-50-18*(u.name[1].split("\\").length-1)-(u.secondaryName?29:0)},v={x:0,y:70+36*u.name[1].split("\\").length};return n.jsxs("g",{children:[n.jsxs("g",{transform:l===d.gz2otis?j.name:"",children:[n.jsxs("g",{textAnchor:"middle",transform:`translate(${y.x},${y.y})`,children:[n.jsx(ue,{stnName:u.name,onUpdate:f}),u.secondaryName&&n.jsx(ge,{secondaryName:u.secondaryName,transform:`translate(${v.x},${v.y})`})]}),n.jsx(U,{lineNum:m,stnNum:u.num,strokeColour:s[2],textClassName:"rmg-name__zh",style:{"--translate-x":(t[o.RunIn]+g.width)/2+55+"px","--translate-y":.5*e-30-18*(u.name[1].split("\\").length-1)-(u.secondaryName?29:0)+"px",transform:"translate(var(--translate-x, 800px), var(--translate-y, 145px))"},size:"lg"})]}),n.jsx("g",{transform:l===d.gz2otis?j.next:"",children:!p||p.includes("linestart")||p.includes("lineend")?n.jsx(n.Fragment,{}):1===p.length?n.jsx(pe,{nextId:p[0],nameBBox:g}):n.jsx(ye,{nextIds:p,nameBBox:g})})]})},pe=e=>{const{nextId:t,nameBBox:s}=e,a=i((e=>e.param.svgWidth)),l=i((e=>e.param.direction)),d=i((e=>e.param.stn_list[t])),{name:m,secondaryName:h}=d,[x,u]=r.useState({width:0}),g=r.useRef(null);r.useEffect((()=>{g.current&&u(g.current.getBBox())}),[m.toString()]);const f=m[0].length,p=(a[o.RunIn]-s.width)/2;return n.jsxs(n.Fragment,{children:[n.jsxs("g",{id:"big_next",children:[n.jsxs("g",{textAnchor:"middle",style:{"--translate-x":l===c.left?"80px":f<=2?a[o.RunIn]-45-x.width-70+"px":a[o.RunIn]-45-x.width-52.5+"px"},children:[n.jsx("text",{className:"rmg-name__zh",fontSize:35,children:"下站"}),n.jsx("text",{className:"rmg-name__en",fontSize:17,dy:30,children:"Next"})]}),n.jsxs("g",{textAnchor:"start",ref:g,style:{"--translate-x":l===c.left?f<=2?"150px":"132.5px":a[o.RunIn]-45-x.width+"px"},children:[n.jsx("text",{className:"rmg-name__zh",fontSize:35,children:m[0]}),n.jsx("g",{fontSize:17,children:m[1].split("\\").map(((e,t)=>n.jsx("text",{className:"rmg-name__en",dy:30+17*t,children:e},t)))})]}),h&&n.jsx("g",{textAnchor:"middle",style:{"--translate-x":l===c.left?f<=2?"150px":"132.5px":a[o.RunIn]-45-x.width+"px"},children:n.jsx(je,{secName:h,transform:`translate(${x.width/2},${30+17*m[1].split("\\").length+5})`})})]}),n.jsx(ae,{id:"arrow",style:{"--translate-x":l===c.left?(115+35*((f<=2?1:.5)+f)+p)/2-20+"px":(a[o.RunIn]-45-x.width-(f<=2?105:87.5)+p+e.nameBBox.width+55+25.9)/2+20+"px","--rotate":l===c.left?"0deg":"180deg"}})]})},je=e=>{const{secName:t,...s}=e,a=r.useRef(null),[i,l]=r.useState({x:0,width:0});return r.useEffect((()=>{a.current&&l(a.current.getBBox())}),[e.secName.toString()]),n.jsxs("g",{...s,children:[n.jsxs("g",{transform:"translate(0,2.5)",fontSize:25,children:[n.jsx("text",{textAnchor:"end",x:i.x-3,className:"rmg-name__zh",children:"("}),n.jsx("text",{textAnchor:"start",x:i.width+i.x+3,className:"rmg-name__zh",children:")"})]}),n.jsxs("g",{ref:a,children:[n.jsx("text",{className:"rmg-name__zh",fontSize:18,children:t[0]}),n.jsx("text",{className:"rmg-name__en",fontSize:10,dy:15,children:t[1]})]})]})},ye=e=>{const{nextIds:t,nameBBox:s}=e,{routes:a}=i((e=>e.helper)),l=i((e=>e.param.svgWidth)),d=i((e=>e.param.direction)),m=i((e=>e.param.stn_list)),h=t.map((e=>m[e].name)),[x,u]=r.useState({width:0}),g=r.useRef([]);r.useEffect((()=>{u((e=>({...e,width:0}))),g.current.forEach((e=>{const t=null==e?void 0:e.getBBox();u((e=>t?e.width>t.width?e:t:e))}))}),[h.toString()]);const f=e.nextIds.map((e=>a.reduce(((t,n)=>n.includes(e)?t.concat(n.filter((e=>!["linestart","lineend"].includes(e))).slice(d===c.left?0:-1)[0]):t),[]))),p=Math.max(...h.map((e=>e[0].length))),j=(l[o.RunIn]-s.width)/2;return n.jsxs(n.Fragment,{children:[n.jsx("g",{id:"big_next_2",children:h.map(((e,t)=>n.jsxs(r.Fragment,{children:[n.jsxs("g",{textAnchor:"middle",style:{"--translate-x":d===c.left?"72px":l[o.RunIn]-45-x.width-41+"px"},children:[n.jsx("text",{className:"rmg-name__zh",children:"下站"}),n.jsx("text",{className:"rmg-name__en",y:22,children:"Next"})]}),n.jsxs("g",{ref:e=>g.current[t]=e,textAnchor:"start",style:{"--translate-x":d===c.left?"113px":l[o.RunIn]-45-x.width+"px"},children:[n.jsx("text",{className:"rmg-name__zh",children:e[0]}),e[1].split("\\").map(((e,t)=>n.jsx("text",{className:"rmg-name__en",y:22+13*t,children:e},t))),n.jsx("text",{className:"rmg-name__zh",y:-35,children:f[t].map((e=>m[e].name[0])).join("/")+"方向"}),n.jsx("text",{className:"rmg-name__en rmg-name__gzmtr--next2-dest",y:-20,children:"Towards "+f[t].map((e=>m[e].name[1])).join("/").replace("\\"," ")})]})]},t)))}),n.jsx(ae,{id:"arrow",style:{"--translate-x":d===c.left?(99+27*(1+p)+j)/2-20+"px":(l[o.RunIn]-45-x.width-41-27+j+e.nameBBox.width+55+25.9)/2+20+"px","--rotate":d===c.left?"0deg":"180deg"}})]})};function ve(e){const{num:t,...r}=e;return n.jsxs("g",{textAnchor:"middle",fill:"var(--rmg-theme-fg)",...r,children:[n.jsx("circle",{cx:0,cy:0,r:30,fill:"var(--rmg-theme-colour)"}),n.jsx("text",{className:"rmg-name__en",fontSize:38,dy:-9.5,children:t}),n.jsx("text",{className:"rmg-name__zh",fontSize:13,dy:10,children:"站台"}),n.jsx("text",{className:"rmg-name__en",fontSize:9,dy:21,children:"Platform"})]})}function _e(e){const{canvasType:t}=e,{svgWidth:r,svg_height:s}=i((e=>e.param));return n.jsxs("g",{id:"otis_frame",strokeWidth:3,stroke:"black",children:[n.jsx("line",{y2:s,transform:`translate(${r[t]/2},0)`}),n.jsx("line",{x2:r[t],transform:"translate(0,90)"})]})}const Se=o.RunIn;function ze(){const{canvasScale:e}=i((e=>e.app)),{svgWidth:t,svg_height:r,direction:s,info_panel_type:a,platform_num:l,psd_num:o,theme:m}=i((e=>e.param)),h=t[Se],x={platform:`translate(${s===c.left?50:-50},45)`};return n.jsxs(g,{type:Se,svgWidth:h,svgHeight:r,canvasScale:e,theme:m,children:[n.jsx(p,{variant:a,isShowLight:a!==d.gz2otis,isShowPSD:a!==d.gz2otis&&o}),n.jsx("g",{transform:a===d.gz2otis?x.platform:"",children:n.jsx(ve,{num:l,style:{"--translate-x":(s===c.left?h-100:100)+"px","--translate-y":"calc(var(--rmg-svg-height) / 2 - 30px)",transform:"translate(var(--translate-x, 100px), var(--translate-y))"}})}),n.jsx(fe,{}),a===d.gz2otis&&n.jsx(_e,{canvasType:Se})]})}e("default",{runin:n.jsx(ze,{}),railmap:n.jsx(ce,{})})}}}));
