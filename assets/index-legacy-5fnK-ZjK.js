System.register(["./chakra-legacy-rsWUbD51.js","./react-legacy-gc_DZOLI.js","./index-legacy-Zpv2zY0k.js","./share-legacy-Pys63k3a.js","./mtr-legacy-llZ36w9o.js"],(function(e,t){"use strict";var s,r,n,a,i,l,c,o,h,g,d,f,m,x,u,p,v;return{setters:[e=>{s=e.j},e=>{r=e.r},e=>{n=e.aT,a=e.u,i=e.S,l=e.D,c=e.aU,o=e.aV},e=>{h=e.S,g=e.a,d=e.c,f=e.g,m=e.b},e=>{x=e.g,u=e.S,p=e.r,v=e.l}],execute:function(){const t=r.memo((function(){return s.jsx("rect",{fill:"var(--rmg-theme-colour)",height:20,style:{width:"var(--rmg-svg-width)",transform:"translateY(calc(var(--rmg-svg-height) - 20px))"}})})),j=r.memo((function(e){const{num:t}=e;return s.jsxs(s.Fragment,{children:[s.jsx("circle",{cx:0,cy:0,r:60,fill:"var(--rmg-theme-colour)"}),s.jsx("text",{className:"rmg-name__zh",dy:0,textAnchor:"middle",fontSize:100,fill:"#fff",children:t})]})}),((e,t)=>e.num===t.num)),y=n.Destination;function S(){const{canvasScale:e}=a((e=>e.app)),{svgWidth:r,svg_height:n,theme:i}=a((e=>e.param)),l=r[y];return s.jsxs(h,{type:y,svgWidth:l,svgHeight:n,canvasScale:e,theme:i,children:[s.jsx(w,{}),s.jsx(t,{}),s.jsx(_,{})]})}const w=r.memo((function(){return s.jsx("defs",{children:s.jsx("path",{id:"arrow",d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-black,#000)"})})})),_=()=>{const e=a((e=>e.helper.routes)),t=a((e=>e.param.svgWidth)),l=a((e=>e.param.direction)),c=a((e=>e.param.customiseMTRDest)),o=a((e=>e.param.platform_num)),h=a((e=>e.param.line_name)),g=a((e=>e.param.current_stn_idx)),d=a((e=>e.param.stn_list));let f;if(!1!==c.terminal)f=c.terminal;else{const t=[...new Set(e.filter((e=>e.includes(g))).map((e=>e.filter((e=>!["linestart","lineend"].includes(e))).slice(l===i.left?0:-1)[0])).filter((e=>e!==g)))];f=[t.map((e=>d[e].name[0])).join("/"),t.map((e=>d[e].name[1])).join("/").replace("\\"," ")]}const m=r.useRef(null),[x,u]=r.useState({width:0});r.useEffect((()=>{m.current&&u(m.current.getBBox())}),[f.toString(),c.isLegacy]);const p=246+x.width+30+60,v=(t[n.Destination]-(l===i.left?1:-1)*p)/2,y=v+246*(l===i.left?1:-1),S=y+90*(l===i.left?1:-1);return s.jsxs("g",{style:{transform:"translateY(calc(var(--rmg-svg-height) / 2 - 5px))"},children:[s.jsx("use",{xlinkHref:"#arrow",transform:`translate(${v},0)scale(0.8)rotate(${l===i.left?0:180})`}),s.jsx("g",{transform:`translate(${y},0)`,children:s.jsx(j,{num:o})}),s.jsxs("g",{ref:m,textAnchor:l===i.left?"start":"end",transform:`translate(${S},-25)`,fill:"var(--rmg-black)",children:[s.jsx("text",{className:"rmg-name__zh",fontSize:72,letterSpacing:1.5,children:(c.isLegacy?h[0]:"")+"往"+f[0]}),s.jsx("text",{className:"rmg-name__en",fontSize:42,dy:66,children:(c.isLegacy?h[1]+" ":"")+"to "+f[1]})]})]})},k=r.memo((function(e){const{interchangeInfo:{theme:t,name:r,facility:n},isPassed:a,position:i,repel:o,repelOffset:h}=e,g=r[0].split("\\"),d=r[1].split("\\"),f=10*(g.length-1)+7*(d.length-1),m=(o===l.left?-1:o===l.right?1:0)*(null!=h?h:3),x=i===c.LEFT||o===l.left?"end":i===c.RIGHT||o===l.right||n?"start":"middle",u={[c.LEFT]:{path:{rotate:90},use:{x:-32,y:-8},g:{x:(n?-42:-24)+m,y:6-(20+f-1)/2}},[c.RIGHT]:{path:{rotate:-90},use:{x:32,y:-8},g:{x:(n?42:24)+m,y:6-(20+f-1)/2}},[c.UP]:{path:{rotate:180},use:{x:0,y:-41},g:{x:(n?o===l.left?-14:o===l.right?14:10:0)+m,y:-36-f}},[c.DOWN]:{path:{rotate:0},use:{x:0,y:26},g:{x:(n?o===l.left?-14:o===l.right?14:10:0)+m,y:31}}}[i];return s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M0,0v17",strokeLinecap:"round",stroke:a?"var(--rmg-grey)":null==t?void 0:t[2],strokeWidth:8,transform:`rotate(${u.path.rotate})`}),n&&s.jsx("use",{xlinkHref:"#"+n,fill:a?"var(--rmg-grey)":"var(--rmg-black)",transform:`translate(${u.use.x},${u.use.y})scale(0.45)`}),s.jsxs("g",{textAnchor:x,transform:`translate(${u.g.x},${u.g.y})`,fill:a?"var(--rmg-grey)":"var(--rmg-black)",children:[g.map(((e,t)=>s.jsx("text",{dy:10*t,className:"rmg-name__zh",fontSize:10,children:e},t))),d.map(((e,t)=>s.jsx("text",{dy:10*g.length-1+6*t,className:"rmg-name__en",fontSize:6,children:e},g.length+t)))]})]})}),((e,t)=>JSON.stringify(e.interchangeInfo)===JSON.stringify(t.interchangeInfo)&&e.isPassed===t.isPassed&&e.position===t.position&&e.repel===t.repel));function M(e){const{length:t,isPassed:r,isReversed:n}=e;return s.jsx("path",{d:`M-8,0 v${t} a8,8 0 0,0 16,0 v-${t} a8,8 0 0,0 -16,0Z`,className:"rmg-stn__mtr",stroke:r?"var(--rmg-grey)":"var(--rmg-black)",transform:`scale(1,${n?-1:1})`})}function O(e){const{interchangeInfoList:t,direction:r,isPassed:n,isReversed:a,repel:i}=e,o=t.length<=1?0:18*t.length;return s.jsxs("g",{children:[1===t.length&&s.jsx(k,{interchangeInfo:t[0],isPassed:n,position:a?c.UP:c.DOWN,repel:i}),t.length>1&&t.map(((e,t)=>s.jsx("g",{transform:`translate(0,${a?-18*(t+1):18*(t+1)})`,children:s.jsx(k,{interchangeInfo:e,isPassed:n,position:r===l.right?c.RIGHT:c.LEFT})},t))),s.jsx(M,{length:o,isPassed:n,isReversed:a})]})}function N(e){var t,r,n;const{interchangeGroup:{name:a,lines:i},direction:o,isPassed:h,isReversed:g,isTerminal:d}=e,f=null!==(t=null==a||null===(r=a[1])||void 0===r||null===(r=r.split("\\"))||void 0===r?void 0:r.length)&&void 0!==t?t:1,m=18*(((null==i?void 0:i.length)||0)-1),x={x:d?0:1===(null==i?void 0:i.length)?o===l.left?-13:13:o===l.left?13:-13,y:d?g?19:-28:(g?-9:9)*(((null==i?void 0:i.length)||0)-1)-4-5*(f-1)};return s.jsxs("g",{children:[null==i?void 0:i.map(((e,t,r)=>s.jsx("g",{transform:`translate(0,${g?-18*t:18*t})`,children:s.jsx(k,{interchangeInfo:e,isPassed:h,position:1===r.length?g?c.UP:c.DOWN:o===l.right?c.RIGHT:c.LEFT,repel:d?o:void 0,repelOffset:d&&1===r.length?-4:0})},t))),s.jsx(M,{length:m,isPassed:h,isReversed:g}),s.jsxs("g",{textAnchor:0===x.x?"middle":x.x>0?"start":"end",fill:h?"var(--rmg-grey)":"var(--rmg-black)",transform:`translate(${x.x},${x.y})`,children:[s.jsx("text",{className:"rmg-name__zh",fontSize:14,children:null==a?void 0:a[0]}),null==a||null===(n=a[1])||void 0===n||null===(n=n.split("\\"))||void 0===n?void 0:n.map(((e,t)=>s.jsx("text",{className:"rmg-name__en",fontSize:8.5,dy:13+10*t,children:e},t)))]})]})}const P=r.memo((function(e){const{stnName:t,onUpdate:n,align:a}=e,i=r.useRef(null),c=()=>{i.current&&n&&n(i.current.getBBox())};return r.useEffect((()=>{c(),document.fonts.load("12px Vegur, GenYoMin TW",t.join("")).then(c)}),[t.toString(),a]),s.jsxs("g",{ref:i,textAnchor:(e=>{switch(e){case l.left:return"start";case l.right:return"end";default:return"middle"}})(a),children:[s.jsx("text",{className:"rmg-name__zh",fontSize:18,transform:"scale(1,0.97)",children:t[0]}),t[1].split("\\").map(((e,t)=>{return s.jsx("text",{className:"rmg-name__en",fontSize:10,dy:(r=t,16+10*r),children:e},t);var r}))]})}),((e,t)=>e.stnName.toString()===t.stnName.toString()&&e.align===t.align)),z=-10.8125,$=16-z+13.21875-8,b=14;function R(e){const{stationName:t,stationState:n,lower:a,align:i,facility:c,...h}=e,[g,d]=r.useState({x:0,width:0}),f=t[1].split("\\").length,m={g:{x:i?i===l.right?-3:3:0,y:(a?b-z:-b-z-$-11*(f-1))+(i?a?10:-10:0)},rect:{x:g.x-3+(c?i?i===l.right?-3-$:0:($+5)/2-3-$:0),y:z-1,width:g.width+6+(c?$+3:0),height:$+2+11*(f-1)},use:{x:i?i===l.right?-($+2)/2-g.width-3:($+2)/2-2:-(g.width+3)/2,y:z-1+5.5*(f-1)},StationName:{x:c?i?i===l.right?0:$+3:($+5)/2:0,y:0}};return s.jsx("g",{...h,children:s.jsxs("g",{fill:(e=>{switch(e){case o.PASSED:return"var(--rmg-grey)";case o.CURRENT:return"#fff";case o.FUTURE:return"var(--rmg-black)"}})(n),transform:`translate(${m.g.x},${m.g.y})`,children:[n===o.CURRENT&&s.jsx("rect",{x:m.rect.x,y:m.rect.y,width:m.rect.width,height:m.rect.height,fill:"var(--rmg-black)"}),c&&s.jsx("use",{xlinkHref:`#${c}`,fill:n===o.PASSED?"var(--rmg-grey)":"var(--rmg-black)",x:m.use.x,y:m.use.y}),s.jsx("g",{transform:`translate(${m.StationName.x},${m.StationName.y})`,children:s.jsx(P,{stnName:t,onUpdate:d,align:i})})]})})}function L(e){var t,r,n,c,h;const{stationId:g,stationState:d,isReversed:f}=e,{name:m,parents:x,children:u,transfer:{groups:p,tick_direc:v,paid_area:j},facility:y}=a((e=>e.param.stn_list[g])),S=null!==(t=p[0].lines)&&void 0!==t&&t.length?x.includes("linestart")?l.left:u.includes("lineend")?l.right:void 0:void 0,w=!(null===(r=p[1])||void 0===r||null===(r=r.lines)||void 0===r||!r.length),_=w&&!S,k={scaleX:S===l.left?-1:1,scaleY:f?-1:1},M={x:S?S===l.left?-41:41:0,y:S?0:f?-26:26};return s.jsxs("g",{"data-testid":"station-icon-wrapper",children:[w&&s.jsx("path",{d:S&&null!==(n=p[0].lines)&&void 0!==n&&n.length?"M0,0H41":"M0,0V26",strokeWidth:2.69,strokeDasharray:j?0:2.5,stroke:d===o.PASSED?"var(--rmg-grey)":"var(--rmg-black)",transform:`scale(${k.scaleX},${k.scaleY})`}),s.jsx(O,{interchangeInfoList:null!==(c=p[0].lines)&&void 0!==c?c:[],direction:v===i.right?l.right:l.left,isPassed:d===o.PASSED,isReversed:_?!f:f,repel:_?v===i.right?l.right:l.left:void 0}),w&&s.jsx("g",{transform:`translate(${M.x},${M.y})`,children:s.jsx(N,{interchangeGroup:p[1],direction:S||(v===i.right?l.right:l.left),isPassed:d===o.PASSED,isReversed:S?!f:f,isTerminal:Boolean(S)})}),s.jsx(R,{stationName:m,stationState:d,facility:y,lower:f,align:null!==(h=p[0].lines)&&void 0!==h&&h.length&&_?v===i.left?l.left:l.right:void 0})]})}const T=(e,t,{isStagger:s,isFlip:r})=>{if(!s)return r;let n;if(t[0].includes(e))n=t[0].indexOf(e)%2;else{const s=t.filter((t=>t.includes(e)))[0];n=(t[0].indexOf(s[0])+s.indexOf(e)+1)%2}return 0===n?r:!r},D=()=>{const{branches:e,routes:t,depsStr:i}=a((e=>e.helper)),{svgWidth:l,svg_height:c,y_pc:o,padding:h,branchSpacingPct:j,direction:y,namePosMTR:S,current_stn_idx:w,stn_list:_}=a((e=>e.param)),k=g(_,v,p),M=r.useMemo((()=>d("linestart","lineend",k)),[JSON.stringify(k)]),O=r.useMemo((()=>d(M.nodes[1],M.nodes.slice(-2)[0],k)),[JSON.stringify(k)]),N=r.useMemo((()=>(console.log("computing x shares"),Object.keys(_).reduce(((t,s)=>({...t,[s]:f(s,k,e)})),{}))),[e.toString(),JSON.stringify(k)]),P=[l[n.RailMap]*h/100,l[n.RailMap]*(1-h/100)],z=Object.keys(N).reduce(((e,t)=>({...e,[t]:P[0]+N[t]/O.len*(P[1]-P[0])})),{}),$=r.useMemo((()=>Object.keys(_).reduce(((t,s)=>({...t,[s]:x(s,e,_)*j*c/200})),{})),[i,j,c]),b=r.useMemo((()=>m(w,t,y)),[w,y,t.toString()]),R=Object.keys(_).reduce(((t,s)=>({...t,[s]:T(s,e,S)})),{}),L=u.drawLine(e,b,_,P,z,$,j*c/200,M);return s.jsxs("g",{id:"main",style:{"--y-percentage":o,transform:"translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"},children:[s.jsx(H,{paths:L}),s.jsx(E,{xs:z,ys:$,stnStates:b,namePoss:R})]})},H=r.memo((function(e){return s.jsxs("g",{fill:"none",strokeWidth:9.68,children:[s.jsxs("g",{stroke:"var(--rmg-grey)",children:[e.paths.pass.map(((e,t)=>s.jsx("path",{d:e},t))),e.paths.sidingPass.map(((e,t)=>{var r;return s.jsx("path",{d:e,strokeDasharray:4===(null===(r=e.match(/a/g))||void 0===r?void 0:r.length)?"10 4":void 0},t)}))]}),s.jsxs("g",{stroke:"var(--rmg-theme-colour)",children:[e.paths.main.map(((e,t)=>s.jsx("path",{d:e},t))),e.paths.sidingMain.map(((e,t)=>{var r;return s.jsx("path",{d:e,strokeDasharray:4===(null===(r=e.match(/a/g))||void 0===r?void 0:r.length)?"10 4":void 0},t)}))]})]})}),((e,t)=>JSON.stringify(e.paths)===JSON.stringify(t.paths))),E=e=>{const{xs:t,ys:r,stnStates:n,namePoss:i}=e,l=a((e=>e.param.stn_list));return s.jsx("g",{id:"stn_icons",children:Object.keys(l).filter((e=>!["linestart","lineend"].includes(e))).map((e=>s.jsx("g",{style:{transform:`translate(${t[e]}px,${r[e]}px)`},children:s.jsx(L,{stationId:e,stationState:n[e],isReversed:i[e]})},e)))})};var F="#012639",I=function(){return I=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},I.apply(this,arguments)};function W(e){return s.jsxs("svg",I({xmlns:"http://www.w3.org/2000/svg",viewBox:"-29.339 0 58.678 58.678",width:50,height:50,fill:F},e,{children:[s.jsx("path",{d:"M-29.35 0h58.7v58.7h-58.7z"}),s.jsx("path",{fill:"#fff",d:"M.007 6.745c1.711.013 3.111 2.532 3.111 4.24v10.338s17.106 15.435 17.358 15.666a1.145 1.145 0 0 1 .488 1.152v2.833c0 .65-.45.61-.695.467-.334-.12-17.15-8.863-17.15-8.863-.005 1.458-.798 9.006-1.327 13.304 0 0 4.61 2.457 4.7 2.52.333.269.351.36.351.853v2c0 .478-.352.429-.51.325L.64 49.659a2.56 2.56 0 0 0-.633-.127 2.317 2.317 0 0 0-.666.127s-5.477 1.859-5.672 1.92c-.185.105-.523.154-.523-.323v-2.001c0-.493.03-.584.367-.852.086-.064 4.678-2.521 4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304 0 0-16.822 8.744-17.148 8.863-.217.143-.69.184-.69-.467V38.14a1.162 1.162 0 0 1 .473-1.152c.276-.231 17.365-15.666 17.365-15.666V10.986c0-1.71 1.403-4.228 3.141-4.241"})]}))}var A=function(){return A=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},A.apply(this,arguments)};function U(e){return s.jsxs("svg",A({xmlns:"http://www.w3.org/2000/svg",viewBox:"-29.339 0 58.678 58.678",width:50,height:50,fill:F},e,{children:[s.jsx("path",{d:"M-29.35 0h58.7v58.7h-58.7z"}),s.jsx("path",{fill:"#fff",d:"M16.646 7.984a9.802 9.802 0 0 0-9.8 9.801 9.7 9.7 0 0 0 .342 2.582c.002.026.002.055.002.093a.318.318 0 0 1-.315.318.677.677 0 0 1-.128-.02 15.715 15.715 0 0 0-13.498 0 .61.61 0 0 1-.122.02.318.318 0 0 1-.322-.318v-.067a9.626 9.626 0 0 0 .357-2.608 9.803 9.803 0 1 0-9.797 9.8 10.104 10.104 0 0 0 2.308-.27h.054a.311.311 0 0 1 .315.317.324.324 0 0 1-.02.12 15.726 15.726 0 1 0 29.704 7.216 15.837 15.837 0 0 0-1.746-7.23.184.184 0 0 1-.028-.106.316.316 0 0 1 .32-.318h.058a10.16 10.16 0 0 0 2.316.271 9.8 9.8 0 0 0 0-19.6"})]}))}var B=function(){return B=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},B.apply(this,arguments)};function G(e){return s.jsxs("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"-29.339 0 58.678 58.678",width:50,height:50,fill:F},e,{children:[s.jsx("path",{d:"M-29.339 0h58.678v58.678h-58.678z"}),s.jsx("path",{fill:"#fff",d:"M-28.657 40.339 24.74 9.309l.493.847-53.398 31.03z"}),s.jsx("path",{fill:"#fff",d:"M-23.568 48.99c-2.174-3.894 2.57-10.526 4.85-13.725l.173-.248a83.008 83.008 0 0 1 7.393-9.285A97.384 97.384 0 0 1-.07 15.774C6.981 9.73 15.762 9.898 16.377 9.88l11.785-.957.276 17.42L16.911 36.93c-.36.394-5.553 5.863-18.102 11.035-6.752 2.783-11.877 4.146-15.66 4.146-3.301 0-5.561-1.049-6.717-3.12m51.682-19.377L3.087 58.31l3.156.199 22.002-28.076-.131-.819z"}),s.jsx("path",{d:"M19.708 11.63a.943.943 0 0 0-.175-.227c-.752-.937-2.988-1.259-5.933-.793a25.984 25.984 0 0 0-9.996 3.032 98.53 98.53 0 0 0-12.22 10.072c-3.176 3.487-4.646 6.388-3.623 7.584 1.84 2.166 13.753.716 22.007-6.066 9.035-7.42 10.718-11.577 9.94-13.602"}),s.jsx("path",{fill:"#fff",d:"M5.313 13.828c5.66-2.842 11.28-2.856 12.15-1.213.883 1.652-2.998 5.303-8.656 8.128-5.648 2.837-10.947 3.805-11.82 2.15-.873-1.64 2.668-6.237 8.326-9.065"}),s.jsx("path",{d:"M28.77 25.051C11.938 45.759-11.96 51.089-11.96 51.089c11-6.73 12.769-8.111 18.968-18.01 8.364-13.351 21.778-21.549 21.912-21.63 0 0-.068 13.5-.15 13.602"}),s.jsx("path",{fill:"#fff",d:"m-2.152 26.712 9.705-2.814a6.228 6.228 0 0 1-1.994 2.759 25.573 25.573 0 0 1-6.697 3.405 11.782 11.782 0 0 1-5.5.783Zm-7.598-.719a18.377 18.377 0 0 1 3.891-3.976 6.665 6.665 0 0 0-.309 2.213l-4.39 4.83a6.182 6.182 0 0 1 .808-3.067m3.567 32.318 34.307-31.565-.067-.889-35.814 32.75 1.574-.296zm37-45.935a68.678 68.678 0 0 0-12.602 9.542c-8.15 7.745-12.11 15.26-9.855 16.091 2.248.816 10.678-4.782 18.836-12.543a94.322 94.322 0 0 0 4.926-5.024Z"}),s.jsx("path",{d:"M33.737 11.843a40.87 40.87 0 0 0-10 7.096c-5.904 5.437-9.486 11.105-7.848 11.742 1.657.631 8.289-3.955 14.188-9.401a61.766 61.766 0 0 0 4.617-4.705ZM-16.66 42.956a9.87 9.87 0 0 0-5.754-1.895c-.113.22-.223.44-.33.662a9.45 9.45 0 0 1 5.695 1.75 6.279 6.279 0 0 1 2.61 6.304 10.165 10.165 0 0 1-.598 2.228c.238-.023.481-.053.725-.087.783-2.249 1.394-6.184-2.348-8.962"})]}))}var J=function(){return J=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},J.apply(this,arguments)};function V(e){return s.jsxs("svg",J({xmlns:"http://www.w3.org/2000/svg",viewBox:"270.1 270.4 58.678 58.678",width:50,height:50,fill:F},e,{children:[s.jsx("path",{d:"M270.1 270.4h58.7v58.7h-58.7z"}),s.jsx("path",{fill:"#FFF",d:"m277.2 274.7 20.2 5.4v-1.5l-20.2-5.4zm24.2 6.5 20.3 5.4v-1.5l-20.3-5.4z"}),s.jsx("path",{fill:"#FFF",d:"M312.4 326c0 .1-.2.2-.3.2H311c-.2 0-.3-.1-.3-.3v-.1l.8-2.4h-23.9l.8 2.4v.1c0 .2-.1.3-.3.3H287c-.1 0-.3-.1-.3-.2l-3.8-13.9c-1-3.6-.3-8.2.4-10.5l4.7-14.9c.2-.8.5-.9.8-.9h1.2l-.4 1.2h8.7v-10.2c0-.2.2-.4.4-.4h1.8c.2 0 .4.2.4.4V287h8.7l-.4-1.2h1.2c.3 0 .6.1.8.9l4.7 14.9c.7 2.3 1.4 6.8.4 10.5l-3.9 13.9z"}),s.jsx("path",{d:"M288.4 289.9v19c0 .3-.2.5-.5.5h-4c-.3-3.2.4-6 1-8.3l3.5-11.2zm22.1 0v19c0 .3.2.5.5.5h4c.3-3.2-.4-6-1-8.3l-3.5-11.2zm-20.1 0h7.7c.3 0 .5.2.5.5v18.5c0 .3-.2.5-.5.5h-7.7c-.3 0-.5-.2-.5-.5v-18.5c0-.2.3-.5.5-.5m10.3 0h7.8c.3 0 .5.2.5.5v18.5c0 .3-.2.5-.5.5h-7.8c-.3 0-.5-.2-.5-.5v-18.5c0-.2.2-.5.5-.5"})]}))}const Y=n.RailMap;function C(){const{canvasScale:e}=a((e=>e.app)),{svgWidth:r,svg_height:n,theme:i}=a((e=>e.param)),l=r[Y];return s.jsxs(h,{type:Y,svgWidth:l,svgHeight:n,canvasScale:e,theme:i,children:[s.jsx(q,{}),s.jsx(t,{}),s.jsx(D,{})]})}const Z=34.03125,X={width:Z,height:Z,x:-17.015625,fill:void 0},q=r.memo((function(){return s.jsxs("defs",{children:[s.jsx(W,{id:"airport",...X}),s.jsx(U,{id:"disney",...X}),s.jsx(G,{id:"hsr",...X}),s.jsx(V,{id:"np360",...X}),s.jsx("path",{id:"inttick",d:"M0,0v17",strokeLinecap:"round"})]})}));e("default",{destination:s.jsx(S,{}),railmap:s.jsx(C,{})})}}}));
