System.register(["./chakra-legacy-rsWUbD51.js","./index-legacy-Zpv2zY0k.js","./react-legacy-gc_DZOLI.js","./param-manager-utils-legacy-KVGv0BbI.js"],(function(e,t){"use strict";var a,r,s,n,i,o,c,l,d,p,u,m,v,g,j,x,P,h,C,f;return{setters:[e=>{a=e.j,r=e.a8,s=e.a9,n=e.c,i=e.D,o=e.aB,c=e.af,l=e.O},e=>{d=e.r,p=e.E,u=e.aF,m=e.aK,v=e.aL},e=>{g=e.u,j=e.p,x=e.r},e=>{P=e.g,h=e.P,C=e.c,f=e.u}],execute:function(){e("default",(function(){const{t:e}=g(),[y]=j(),E=y.get("parentId"),_=y.get("parentComponent"),[S,L]=x.useState([]),[M,O]=x.useState(),[R,b]=x.useState(!1),k=x.useRef();return x.useEffect((()=>(k.current=new BroadcastChannel(t+E),d.event(p.APP_CLIP_VIEW_OPENED,{parentComponent:_}),L(P()),()=>{var e;null===(e=k.current)||void 0===e||e.close()})),[]),a.jsxs(u,{children:[R&&a.jsxs(r,{status:"error",variant:"solid",size:"xs",pl:3,pr:1,py:1,children:[a.jsx(s,{}),e("Project selected is invalid or corrupted.")]}),a.jsx(n.div,{sx:I,children:a.jsx(h,{paramRegistry:S,selectedParam:M,onParamSelect:O})}),a.jsx(i,{}),a.jsxs(o,{p:2,children:[a.jsx(c,{variant:"ghost",size:"sm","aria-label":e("Manage"),title:e("Manage"),icon:a.jsx(m,{}),onClick:()=>{d.openApp("rmg")}}),a.jsx(c,{variant:"ghost",size:"sm","aria-label":e("Reload"),title:e("Reload"),icon:a.jsx(v,{}),onClick:()=>L(P())}),a.jsx(l,{size:"sm",onClick:()=>{var e;null===(e=k.current)||void 0===e||e.postMessage({event:"CLOSE"}),d.event(p.APP_CLIP_VIEW_CLOSED,{parentComponent:_}),O(void 0),b(!1)},ml:"auto",children:e("Close")}),a.jsx(l,{size:"sm",colorScheme:"primary",isDisabled:!M,onClick:()=>{if(!M)return;const{config:e,param:t}=C(M);try{var a;null===(a=k.current)||void 0===a||a.postMessage({event:"IMPORT",meta:e,data:t?f(t):t}),d.event(p.APP_CLIP_VIEW_IMPORT,{parentComponent:_}),O(void 0),b(!1)}catch(r){b(!0)}},children:e("Import")})]})]})}));const t="rmg-bridge--",I={overflow:"hidden",flex:1,px:2,pb:2,"& > div":{m:0,h:"100%","& > div":{h:"100%"}}}}}}));
