import{j as e,x as R,y as S,c as _,ab as b,a8 as M,G as g,d as h}from"./chakra-ba5f36b3.js";import{b as y,r as o,E as d,aX as A,b0 as k,b1 as L}from"./index-469b7548.js";import{u as z,r as t}from"./react-4978cfa7.js";import{g as x,P as O,c as D,u as V}from"./param-manager-utils-d771dba9.js";const w="rmg-bridge--",B={overflow:"hidden",flex:1,px:2,pb:2,"& > div":{m:0,h:"100%","& > div":{h:"100%"}}};function F(){const{t:s}=y(),[p]=z(),f=p.get("parentId"),i=p.get("parentComponent"),[v,u]=t.useState([]),[r,c]=t.useState(),[j,l]=t.useState(!1),n=t.useRef();t.useEffect(()=>(n.current=new BroadcastChannel(w+f),o.event(d.APP_CLIP_VIEW_OPENED,{parentComponent:i}),u(x()),()=>{var a;(a=n.current)==null||a.close()}),[]);const C=()=>{var P;if(!r)return;const{config:a,param:m}=D(r);try{(P=n.current)==null||P.postMessage({event:"IMPORT",meta:a,data:m&&V(m)}),o.event(d.APP_CLIP_VIEW_IMPORT,{parentComponent:i}),c(void 0),l(!1)}catch(N){l(!0)}},E=()=>{var a;(a=n.current)==null||a.postMessage({event:"CLOSE"}),o.event(d.APP_CLIP_VIEW_CLOSED,{parentComponent:i}),c(void 0),l(!1)},I=()=>{o.openApp("rmg")};return e.jsxs(A,{children:[j&&e.jsxs(R,{status:"error",variant:"solid",size:"xs",pl:3,pr:1,py:1,children:[e.jsx(S,{}),s("Project selected is invalid or corrupted.")]}),e.jsx(_.div,{sx:B,children:e.jsx(O,{paramRegistry:v,selectedParam:r,onParamSelect:c})}),e.jsx(b,{}),e.jsxs(M,{p:2,children:[e.jsx(g,{variant:"ghost",size:"sm","aria-label":s("Manage"),title:s("Manage"),icon:e.jsx(k,{}),onClick:I}),e.jsx(g,{variant:"ghost",size:"sm","aria-label":s("Reload"),title:s("Reload"),icon:e.jsx(L,{}),onClick:()=>u(x())}),e.jsx(h,{size:"sm",onClick:E,ml:"auto",children:s("Close")}),e.jsx(h,{size:"sm",colorScheme:"primary",isDisabled:!r,onClick:C,children:s("Import")})]})]})}export{F as default};