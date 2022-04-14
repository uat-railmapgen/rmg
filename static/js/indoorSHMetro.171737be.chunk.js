"use strict";(self.webpackChunkrmg=self.webpackChunkrmg||[]).push([[4880],{1552:function(n,t,e){e.r(t),e.d(t,{DefsSHMetro:function(){return f}});var r=e(4942),s=e(1413),i=e(2791),a=e(3824),c=e(5481),o=e(8359),l=e(713),d=e(6169),u=e(8271),h=e(184);t.default=(0,i.memo)((function(){var n=(0,d.CG)((function(n){return n.param})).loop;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{}),n?(0,h.jsx)(u.Z,{bank_angle:!1}):(0,h.jsx)(x,{}),(0,h.jsx)(j,{})]})}));var f=i.memo((function(){return(0,h.jsxs)("defs",{children:[(0,h.jsx)("circle",{id:"stn_indoor_sh",fill:"var(--rmg-white)",strokeWidth:5,stroke:"var(--rmg-theme-colour)",r:8,transform:"scale(1.5)"}),(0,h.jsx)("path",{id:"int2_indoor_sh",fill:"var(--rmg-white)",transform:"translate(0, -10)scale(2)",strokeWidth:4,d:"M -5,0 a 5,5 0 1 1 10,0 V10 a 5,5 0 1 1 -10,0Z"}),(0,h.jsx)("path",{id:"express_indoor_sh",fill:"var(--rmg-white)",transform:"translate(0, -10)scale(2)",strokeWidth:4,d:"M -5,0 a 5,5 0 1 1 10,0 V25 a 5,5 0 1 1 -10,0Z"}),(0,h.jsx)("path",{id:"direct_indoor_sh",fill:"var(--rmg-white)",transform:"translate(0, -10)scale(2)",strokeWidth:4,d:"M -5,0 a 5,5 0 1 1 10,0 V40 a 5,5 0 1 1 -10,0Z"})]})})),m=function(n,t){var e=0;return 2===n[t].parents.length&&(e+=1),2===n[n[t].parents[0]].children.length&&(e+=1),e},g=function(n,t){var e=0;return 2===n[t].children.length&&(e+=1),2===n[n[t].children[0]].parents.length&&(e+=1),e},x=function(){var n=(0,d.CG)((function(n){return n.helper})),t=n.routes,e=n.branches,c=n.depsStr,u=(0,d.CG)((function(n){return n.param})),f=(0,a.Az)(u.stn_list,m,g),x=(0,a.QE)("linestart","lineend",f),j=(0,a.QE)(x.nodes[1],x.nodes.slice(-2)[0],f),v=i.useMemo((function(){return console.log("computing x shares"),Object.keys(u.stn_list).reduce((function(n,t){return(0,s.Z)((0,s.Z)({},n),{},(0,r.Z)({},t,(0,a.ML)(t,f,e)))}),{})}),[e.toString(),JSON.stringify(f)]),k=[u.svgWidth.indoor*u.padding/100,u.svgWidth.indoor*(1-u.padding/100)],y=Object.keys(v).reduce((function(n,t){return(0,s.Z)((0,s.Z)({},n),{},(0,r.Z)({},t,k[0]+v[t]/j.len*(k[1]-k[0])))}),{}),Z=(0,i.useMemo)((function(){return o.Z.getYShares(u.stn_list,e)}),[c]),S=Object.keys(Z).reduce((function(n,t){return(0,s.Z)((0,s.Z)({},n),{},(0,r.Z)({},t,Z[t]*u.branch_spacing*2))}),{}),b=i.useMemo((function(){return(0,a.h6)(u.current_stn_idx,t,u.direction)}),[u.current_stn_idx,u.direction,t.toString()]),z=Object.values(l.K9),L=Object.values(u.stn_list).map((function(n){return n.services})).flat().reduce((function(n,t){return n[z.indexOf(t)]=!0,n}),[!1,!1,!1]).map((function(n,t){return[z[t],n]})).filter((function(n){return n[1]})).map((function(n){return n[0]})),w=o.Z.drawLine(e,b,u.stn_list,k,y,S,2*u.branch_spacing,x,0);return(0,h.jsxs)("g",{id:"main",transform:"translate(0,".concat(u.svg_height/2,")"),children:[(0,h.jsx)(_,{paths:w,services:L}),(0,h.jsx)(p,{xs:y,ys:S,services:L})]})},_=function(n){return(0,h.jsx)("g",{fill:"none",strokeWidth:12,stroke:"var(--rmg-theme-colour)",children:n.services.map((function(t,e){return(0,h.jsxs)("g",{transform:"translate(0, ".concat(30*e,")"),children:[n.paths.main.map((function(n,t){return(0,h.jsx)("path",{d:n},t)})),n.paths.pass.map((function(n,t){return(0,h.jsx)("path",{d:n},t)}))]},"indoor_line_".concat(e))}))})},p=function(n){var t=(0,d.CG)((function(n){return n.helper})).branches,e=(0,d.CG)((function(n){return n.param})),r=n.xs,s=n.ys,i=n.services;return(0,h.jsx)("g",{children:Object.keys(e.stn_list).filter((function(n){return!["linestart","lineend"].includes(n)})).filter((function(n){return 0!==e.stn_list[n].services.length})).map((function(n){return(0,h.jsx)("g",{transform:"translate(".concat(r[n],",").concat(s[n],")"),children:(0,h.jsx)(c.Z,{stnId:n,nameDirection:t.filter((function(t){return t.includes(n)})).map((function(t){return t.indexOf(n)%2===0||i.length>1?"downward":"upward"}))[0],services:i})},n)}))})},j=function(){var n=(0,d.CG)((function(n){return n.param}));return i.useMemo((function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("g",{transform:"translate(".concat(n.svgWidth.indoor/2,",50)"),children:(0,h.jsxs)("text",{textAnchor:"middle",fontSize:"30",className:"rmg-name__zh",children:["\u8f68\u9053\u4ea4\u901a",n.line_name[0],"\u8fd0\u8425\u7ebf\u8def\u793a\u610f\u56fe"]})}),(0,h.jsxs)("g",{transform:"translate(".concat(n.svgWidth.indoor/2,",").concat(n.svg_height-270,")"),children:[(0,h.jsx)("text",{textAnchor:"middle",fontSize:"18",className:"rmg-name__zh",dx:"-30",dy:"230",children:"\u53cb\u60c5\u63d0\u793a\uff1a\u8bf7\u7559\u610f\u60a8\u9700\u8981\u6362\u4e58\u7ebf\u8def\u7684\u9996\u672b\u73ed\u65f6\u95f4\uff0c\u4ee5\u514d\u803d\u8bef\u60a8\u7684\u51fa\u884c\uff0c\u672b\u73ed\u8f66\u8fdb\u7ad9\u524d\u4e09\u5206\u949f\u505c\u552e\u8be5\u672b\u73ed\u8f66\u8f66\u7968\u3002"}),(0,h.jsx)("text",{textAnchor:"middle",fontSize:"12",className:"rmg-name__en",dx:"10",dy:"250",children:"Please pay attention to the interchange schedule if you want to transfer to other lines. Stop selling tickets 3 minutes before the last train services."}),(0,h.jsxs)("g",{transform:"translate(-600,215)",children:[(0,h.jsx)("rect",{x:"-5",y:"-25",width:"100",height:"70",fill:"none",stroke:"black",rx:"5"}),(0,h.jsx)("line",{x1:"28",x2:"28",y1:"-20",y2:"40",stroke:"black"}),(0,h.jsx)("text",{className:"rmg-name__zh",dx:"3",fontSize:"18",children:"\u56fe"}),(0,h.jsx)("text",{className:"rmg-name__zh",dx:"3",dy:"18",fontSize:"18",children:"\u4f8b"}),(0,h.jsx)("text",{className:"rmg-name__en",dy:"35",fontSize:"8",children:"legend"}),(0,h.jsx)("use",{transform:"translate(45,10)",xlinkHref:"#int2_indoor_sh",stroke:"var(--rmg-theme-colour)"}),(0,h.jsx)("text",{className:"rmg-name__zh",dx:"60",dy:"10",fontSize:"10",children:"\u6362\u4e58\u7ad9"}),(0,h.jsx)("text",{className:"rmg-name__en",dx:"60",dy:"20",fontSize:"6",children:"Interchange"}),(0,h.jsx)("text",{className:"rmg-name__en",dx:"60",dy:"30",fontSize:"6",children:"Station"})]})]})]})}),[n.svgWidth.indoor,n.svg_height,n.line_name])}},8359:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(3144),s=e(5671),i=e(136),a=e(4062),c=function(n){(0,i.Z)(e,n);var t=(0,a.Z)(e);function e(){var n;(0,s.Z)(this,e);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(n=t.call.apply(t,[this].concat(i))).leftWideFactor=function(t){var e=0,r=n.stnList[t].transfer,s=r.info.map((function(n){return n.length}));return"l"===r.tick_direc&&(!s[1]&&s[0]>1&&(e+=.8),!s[1]||1===s[0]&&2===s[1]||(e+=.8)),1===s[0]&&2===s[1]&&"linestart"!==n.stnList[t].parents[0]&&"lineend"!==n.stnList[t].children[0]&&(e+=.8),2===n.stnList[t].parents.length&&(e+=.4),2===n.stnList[n.stnList[t].parents[0]].children.length&&(e+=.4),e},n.rightWideFactor=function(t){var e=0,r=n.stnList[t].transfer,s=r.info.map((function(n){return n.length}));return"r"===r.tick_direc&&(!s[1]&&s[0]>1&&(e+=.8),!s[1]||1===s[0]&&2===s[1]||(e+=.8)),1===s[0]&&2===s[1]&&"linestart"!==n.stnList[t].parents[0]&&"lineend"!==n.stnList[t].children[0]&&(e+=.8),2===n.stnList[t].children.length&&(e+=.4),2===n.stnList[n.stnList[t].children[0]].parents.length&&(e+=.4),e},n}return(0,r.Z)(e)}(e(3824).LD)}}]);
//# sourceMappingURL=indoorSHMetro.171737be.chunk.js.map