import{m as u,j as t}from"./vendor-dfcbff68.js";import{ar as P,u as S,S as R,as as p,D as g,F as L,at as T}from"./index-13ec54b0.js";import{S as b,a as B,c as A,g as U,b as Y}from"./share-4a3ac9b1.js";import{g as J,S as X,r as Z,l as C}from"./mtr-a99cb7b2.js";import{w as V}from"./param-selector-45ed06b7.js";const F=u.memo(function(e){return t.jsx("rect",{fill:"var(--rmg-theme-colour)",height:20,style:{width:"var(--rmg-svg-width)",["--strip-percentage"]:e.stripPc,transform:"translateY(calc(var(--strip-percentage, 95) * var(--rmg-svg-height) / 100 - 10px))"}})}),O=P.Destination;function q(){const{canvasScale:a}=S(i=>i.app),{svgWidth:e,svg_height:n,theme:s}=S(i=>i.param),r=e[O];return t.jsxs(b,{type:O,svgWidth:r,svgHeight:n,canvasScale:a,theme:s,children:[t.jsx(K,{}),t.jsx(F,{stripPc:90}),t.jsx(Q,{})]})}const K=u.memo(function(){return t.jsx("defs",{children:t.jsx("path",{id:"arrow",d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-black,#000)"})})}),Q=()=>{const a=S(l=>l.helper.routes),e=S(l=>l.param.svgWidth),n=S(l=>l.param.direction),s=S(l=>l.param.customiseMTRDest),r=S(l=>l.param.platform_num),i=S(l=>l.param.line_name),o=S(l=>l.param.current_stn_idx),h=S(l=>l.param.stn_list);let m;if(s.terminal!==!1)m=s.terminal;else{const l=[...new Set(a.filter(j=>j.includes(o)).map(j=>j.filter(E=>!["linestart","lineend"].includes(E)).slice(n===R.left?0:-1)[0]).filter(j=>j!==o))];m=[l.map(j=>h[j].name[0]).join("/"),l.map(j=>h[j].name[1]).join("/").replace("\\"," ")]}const d=u.useRef(null),[x,c]=u.useState({width:0});u.useEffect(()=>{d.current&&c(d.current.getBBox())},[m.toString(),s.isLegacy]);const f=160+150+x.width+45+50,y=(e[P.Destination]-(n===R.left?1:-1)*f)/2,v=y+(n===R.left?1:-1)*(160+50+75),N=v+(n===R.left?1:-1)*(75+45);return t.jsxs("g",{id:"dest_name",style:{transform:"translateY(calc(var(--rmg-svg-height) / 2 - 20px))"},children:[t.jsx("use",{xlinkHref:"#arrow",transform:`translate(${y},0)rotate(${n===R.left?0:180})`}),t.jsx(tt,{num:r,transform:`translate(${v},0)`}),t.jsxs("g",{ref:d,textAnchor:n===R.left?"start":"end",transform:`translate(${N},-25)`,fill:"var(--rmg-black)",children:[t.jsx("text",{className:"rmg-name__zh",fontSize:90,children:(s.isLegacy?i[0]:"")+"往"+m[0]}),t.jsx("text",{className:"rmg-name__en",fontSize:45,dy:80,children:(s.isLegacy?i[1]+" ":"")+"to "+m[1]})]})]})},tt=a=>{const{num:e,...n}=a;return t.jsx("g",{id:"platform",...n,children:u.useMemo(()=>t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:0,cy:0,r:75,fill:"var(--rmg-theme-colour)"}),t.jsx("text",{className:"rmg-name__zh",dy:0,textAnchor:"middle",fontSize:135,fill:"#fff",children:e})]}),[e])})},et=a=>{switch(a){case p.UP:return 180;case p.DOWN:return 0;case p.LEFT:return 90;case p.RIGHT:return-90}};function st(a){var x;const{interchangeInfo:e,isPassed:n,position:s,repel:r,repelOffset:i}=a,o=e.name[0].split("\\"),h=e.name[1].split("\\"),m=s===p.LEFT||r===g.left?"end":s===p.RIGHT||r===g.right?"start":"middle",d={path:{rotate:et(s)},g:{x:(s===p.LEFT?-24:s===p.RIGHT?24:0)+(r===g.left?-1:r===g.right?1:0)*(i!=null?i:3),y:s===p.UP?-37-10*(o.length-1)-7*(h.length-1):s===p.DOWN?31:6-(20+10*(o.length-1)+7*(h.length-1)-1)/2}};return t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M0,0v17",strokeLinecap:"round",stroke:n?"var(--rmg-grey)":(x=e.theme)==null?void 0:x[2],strokeWidth:8,transform:`rotate(${d.path.rotate})`}),t.jsxs("g",{textAnchor:m,transform:`translate(${d.g.x},${d.g.y})`,fill:n?"var(--rmg-grey)":"var(--rmg-black)",children:[o.map((c,f)=>t.jsx("text",{dy:10*f,className:"rmg-name__zh",fontSize:10,children:c},f)),h.map((c,f)=>t.jsx("text",{dy:o.length*10-1+7*f,className:"rmg-name__en",fontSize:7,children:c},o.length+f))]})]})}const $=u.memo(st,(a,e)=>JSON.stringify(a.interchangeInfo)===JSON.stringify(e.interchangeInfo)&&a.isPassed===e.isPassed&&a.position===e.position&&a.repel===e.repel);function I(a){const{length:e,isPassed:n,isReversed:s}=a;return t.jsx("path",{d:`M-8,0 v${e} a8,8 0 0,0 16,0 v-${e} a8,8 0 0,0 -16,0Z`,className:"rmg-stn__mtr",stroke:n?"var(--rmg-grey)":"var(--rmg-black)",transform:`scale(1,${s?-1:1})`})}function nt(a){const{interchangeInfoList:e,direction:n,isPassed:s,isReversed:r,repel:i}=a,o=e.length<=1?0:18*e.length;return t.jsxs("g",{children:[e.length===1&&t.jsx($,{interchangeInfo:e[0],isPassed:s,position:r?p.UP:p.DOWN,repel:i}),e.length>1&&e.map((h,m)=>t.jsx("g",{transform:`translate(0,${r?-18*(m+1):18*(m+1)})`,children:t.jsx($,{interchangeInfo:h,isPassed:s,position:n===g.right?p.RIGHT:p.LEFT})},m)),t.jsx(I,{length:o,isPassed:s,isReversed:r})]})}function at(a){var x,c,f,y,v;const{interchangeGroup:{name:e,lines:n},direction:s,isPassed:r,isReversed:i,isTerminal:o}=a,h=(f=(c=(x=e==null?void 0:e[1])==null?void 0:x.split("\\"))==null?void 0:c.length)!=null?f:1,m=18*(n.length-1),d={name:{x:o?0:n.length===1?s===g.left?-13:13:s===g.left?13:-13,y:o?i?19:-28:-4+(i?-9:9)*(n.length-1)-5*(h-1)}};return t.jsxs("g",{children:[n.map((N,l,j)=>t.jsx("g",{transform:`translate(0,${i?-18*l:18*l})`,children:t.jsx($,{interchangeInfo:N,isPassed:r,position:j.length===1?i?p.UP:p.DOWN:s===g.right?p.RIGHT:p.LEFT,repel:o?s:void 0,repelOffset:o&&j.length===1?-4:0})},l)),t.jsx(I,{length:m,isPassed:r,isReversed:i}),t.jsxs("g",{textAnchor:d.name.x===0?"middle":d.name.x>0?"start":"end",fill:r?"var(--rmg-grey)":"var(--rmg-black)",transform:`translate(${d.name.x},${d.name.y})`,children:[t.jsx("text",{className:"rmg-name__zh",fontSize:14,children:e==null?void 0:e[0]}),(v=(y=e==null?void 0:e[1])==null?void 0:y.split("\\"))==null?void 0:v.map((N,l)=>t.jsx("text",{className:"rmg-name__en",fontSize:9,dy:12+10*l,children:N},l))]})]})}const rt=async()=>{let a=3;for(;a--;){const n=(await document.fonts.ready).values();for(;;){const s=n.next();if(s.done)break;if(s.value.family==="GenYoMin TW")return}console.log("GenYoMin is NOT ready. Retry attempts remaining: "+a+" ..."),await V(500)}throw new Error("Failed to load GenYoMin after 3 attempts")},it=u.memo(function(e){const{stnName:n,onUpdate:s,align:r}=e,i=u.useRef(null),o=()=>{i.current&&s&&s(i.current.getBBox())};u.useEffect(()=>{o(),rt().then().catch(console.log).finally(o)},[n.toString(),r]);const h=d=>{switch(d){case g.left:return"start";case g.right:return"end";default:return"middle"}},m=d=>17+11*d;return t.jsxs("g",{ref:i,textAnchor:h(r),children:[t.jsx("text",{className:"rmg-name__zh rmg-name__mtr--station",children:n[0]}),n[1].split("\\").map((d,x)=>t.jsx("text",{className:"rmg-name__en rmg-name__mtr--station",dy:m(x),children:d},x))]})},(a,e)=>a.stnName.toString()===e.stnName.toString()&&a.align===e.align),k=-10.8125,ot=-8,ct=13.21875,lt=17,w=-k+lt+ct+ot,W=14;function ht(a){const{stationName:e,stationState:n,lower:s,align:r,facility:i,...o}=a,[h,m]=u.useState({x:0,width:0}),d=f=>{switch(f){case T.PASSED:return"var(--rmg-grey)";case T.CURRENT:return"#fff";case T.FUTURE:return"var(--rmg-black)"}},x=e[1].split("\\").length,c={g:{x:r?r===g.right?-3:3:0,y:(s?W-k:-W-k-w-11*(x-1))+(r?s?10:-10:0)},rect:{x:h.x-3+(i===L.none?0:r?r===g.right?-3-w:0:(w+5)/2-3-w),y:k-1,width:h.width+6+(i===L.none?0:w+3),height:w+2+11*(x-1)},use:{x:r?r===g.right?-(w+2)/2-h.width-3:(w+2)/2-2:-(h.width+3)/2,y:k-1+5.5*(x-1)},StationName:{x:i===L.none?0:r?r===g.right?0:w+3:(w+5)/2,y:0}};return t.jsx("g",{...o,children:t.jsxs("g",{fill:d(n),transform:`translate(${c.g.x},${c.g.y})`,children:[n===T.CURRENT&&t.jsx("rect",{x:c.rect.x,y:c.rect.y,width:c.rect.width,height:c.rect.height,fill:"var(--rmg-black)"}),i!==L.none&&t.jsx("use",{xlinkHref:`#${i}`,fill:n===T.PASSED?"var(--rmg-grey)":"var(--rmg-black)",x:c.use.x,y:c.use.y}),t.jsx("g",{transform:`translate(${c.StationName.x},${c.StationName.y})`,children:t.jsx(it,{stnName:e,onUpdate:m,align:r})})]})})}function gt(a){var N,l;const{stationId:e,stationState:n,isReversed:s}=a,{name:r,parents:i,children:o,transfer:{groups:h,tick_direc:m,paid_area:d},facility:x}=S(j=>j.param.stn_list[e]),c=h[0].lines.length?i.includes("linestart")?g.left:o.includes("lineend")?g.right:void 0:void 0,f=!!((l=(N=h[1])==null?void 0:N.lines)!=null&&l.length),y=f&&!c,v={link:{scaleX:c===g.left?-1:1,scaleY:s?-1:1},osi:{x:c?c===g.left?-41:41:0,y:c?0:s?-26:26}};return t.jsxs("g",{"data-testid":"station-icon-wrapper",children:[f&&t.jsx("path",{d:c&&h[0].lines.length?"M0,0H41":"M0,0V26",strokeWidth:2.69,strokeDasharray:d?0:2.5,stroke:n===T.PASSED?"var(--rmg-grey)":"var(--rmg-black)",transform:`scale(${v.link.scaleX},${v.link.scaleY})`}),t.jsx(nt,{interchangeInfoList:h[0].lines,direction:m===R.right?g.right:g.left,isPassed:n===T.PASSED,isReversed:y?!s:s,repel:y?m===R.right?g.right:g.left:void 0}),f&&t.jsx("g",{transform:`translate(${v.osi.x},${v.osi.y})`,children:t.jsx(at,{interchangeGroup:h[1],direction:c||(m===R.right?g.right:g.left),isPassed:n===T.PASSED,isReversed:c?!s:s,isTerminal:!!c})}),t.jsx(ht,{stationName:r,stationState:n,facility:x,lower:s,align:h[0].lines.length&&y?m===R.left?g.left:g.right:void 0})]})}const mt=(a,e,{isStagger:n,isFlip:s})=>{if(!n)return s;let r;if(e[0].includes(a))r=e[0].indexOf(a)%2;else{const i=e.filter(o=>o.includes(a))[0];r=(e[0].indexOf(i[0])+i.indexOf(a)+1)%2}return r===0?s:!s},dt=()=>{const{branches:a,routes:e,depsStr:n}=S(_=>_.helper),{svgWidth:s,svg_height:r,y_pc:i,padding:o,branchSpacingPct:h,direction:m,namePosMTR:d,current_stn_idx:x,stn_list:c}=S(_=>_.param),f=B(c,C,Z),y=u.useMemo(()=>A("linestart","lineend",f),[JSON.stringify(f)]),v=u.useMemo(()=>A(y.nodes[1],y.nodes.slice(-2)[0],f),[JSON.stringify(f)]),N=u.useMemo(()=>(console.log("computing x shares"),Object.keys(c).reduce((_,M)=>({..._,[M]:U(M,f,a)}),{})),[a.toString(),JSON.stringify(f)]),l=[s[P.RailMap]*o/100,s[P.RailMap]*(1-o/100)],j=Object.keys(N).reduce((_,M)=>({..._,[M]:l[0]+N[M]/v.len*(l[1]-l[0])}),{}),E=u.useMemo(()=>Object.keys(c).reduce((_,M)=>({..._,[M]:J(M,a,c)*h*r/200}),{}),[n,h,r]),D=u.useMemo(()=>Y(x,e,m),[x,m,e.toString()]),G=Object.keys(c).reduce((_,M)=>({..._,[M]:mt(M,a,d)}),{}),z=X.drawLine(a,D,c,l,j,E,h*r/200,y);return t.jsxs("g",{id:"main",style:{["--y-percentage"]:i,transform:"translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"},children:[t.jsx(ft,{paths:z}),t.jsx(xt,{xs:j,ys:E,stnStates:D,namePoss:G})]})},ft=u.memo(function(e){return t.jsxs("g",{fill:"none",strokeWidth:9.68,children:[t.jsxs("g",{stroke:"var(--rmg-grey)",children:[e.paths.pass.map((n,s)=>t.jsx("path",{d:n},s)),e.paths.sidingPass.map((n,s)=>{var r;return t.jsx("path",{d:n,strokeDasharray:((r=n.match(/a/g))==null?void 0:r.length)===4?"10 4":void 0},s)})]}),t.jsxs("g",{stroke:"var(--rmg-theme-colour)",children:[e.paths.main.map((n,s)=>t.jsx("path",{d:n},s)),e.paths.sidingMain.map((n,s)=>{var r;return t.jsx("path",{d:n,strokeDasharray:((r=n.match(/a/g))==null?void 0:r.length)===4?"10 4":void 0},s)})]})]})},(a,e)=>JSON.stringify(a.paths)===JSON.stringify(e.paths)),xt=a=>{const{xs:e,ys:n,stnStates:s,namePoss:r}=a,i=S(o=>o.param.stn_list);return t.jsx("g",{id:"stn_icons",children:Object.keys(i).filter(o=>!["linestart","lineend"].includes(o)).map(o=>t.jsx("g",{style:{transform:`translate(${e[o]}px,${n[o]}px)`},children:t.jsx(gt,{stationId:o,stationState:s[o],isReversed:r[o]})},o))})},H=P.RailMap;function pt(){const{canvasScale:a}=S(i=>i.app),{svgWidth:e,svg_height:n,theme:s}=S(i=>i.param),r=e[H];return t.jsxs(b,{type:H,svgWidth:r,svgHeight:n,canvasScale:a,theme:s,children:[t.jsx(ut,{}),t.jsx(F,{stripPc:90}),t.jsx(dt,{})]})}const ut=u.memo(function(){return t.jsxs("defs",{children:[t.jsxs("g",{id:"airport",transform:"scale(0.5970084519)",children:[t.jsx("rect",{x:-29.33899,height:58.67798,width:58.67798}),t.jsx("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]}),t.jsxs("g",{id:"disney",transform:"scale(0.5970084519)",children:[t.jsx("rect",{x:-29.33899,width:58.67798,height:58.67798}),t.jsx("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"})]}),t.jsx("clipPath",{id:"hsr-clip-path",transform:"translate(-0.00057 0.01643)",children:t.jsx("path",{fill:"none",d:"M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"})}),t.jsxs("g",{id:"hsr",transform:"scale(0.5970084519)",children:[t.jsx("rect",{x:-29.33899,width:58.67798,height:58.67798}),t.jsxs("g",{clipPath:"url(#hsr-clip-path)",transform:"translate(-29.33899,0)",children:[t.jsx("rect",{x:-3.25242,y:24.74141,width:61.75879,height:.98008,transform:"translate(-8.93747 17.31321) rotate(-30.16134)",fill:"white"}),t.jsx("path",{d:"M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121",transform:"translate(-0.00057 0.01643)",fill:"white"}),t.jsx("polygon",{points:"57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614",fill:"white"}),t.jsx("path",{d:"M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602",transform:"translate(-0.00057 0.01643)"}),t.jsx("path",{d:"M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065",transform:"translate(-0.00057 0.01643)",fill:"white"}),t.jsx("path",{d:"M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602",transform:"translate(-0.00057 0.01643)"}),t.jsx("path",{d:"M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),t.jsx("path",{d:"M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066",transform:"translate(-0.00057 0.01643)",fill:"white"}),t.jsx("polygon",{points:"23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311",fill:"white"}),t.jsx("path",{d:"M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),t.jsx("path",{d:"M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z",transform:"translate(-0.00057 0.01643)"}),t.jsx("path",{d:"M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962",transform:"translate(-0.00057 0.01643)"})]})]}),t.jsx("path",{id:"inttick",d:"M0,0v17",strokeLinecap:"round"})]})}),_t={destination:t.jsx(q,{}),railmap:t.jsx(pt,{})};export{_t as default};
