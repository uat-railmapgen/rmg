"use strict";(self.webpackChunkrmg=self.webpackChunkrmg||[]).push([[5387,2554],{65387:function(n,t,e){e.r(t);var r=e(1413),i=e(45987),s=e(93433),l=e(72791),a=e(20713),c=e(37732),o=e(36705),u=e(51401),h=e(62554),d=e(80184),m=["nextName"],g=a.Ht.RunIn;t.default=function(){var n=(0,c.Qy)((function(n){return n.app})).canvasScale,t=(0,c.Qy)((function(n){return n.helper})),e=t.branches,r=t.routes,i=t.depsStr,s=(0,c.Qy)((function(n){return n.param})),a=s.svgWidth,o=s.svg_height,u=s.current_stn_idx,m=s.direction,p=s.loop,v=s.theme,j=a[g],_=o-300,y=(0,l.useMemo)((function(){var n=r.filter((function(n){return n.includes(u)})).map((function(n){return n[n.indexOf(u)+("l"===m?1:-1)]})).reduce((function(n,t){return n.includes(t)?n:n.concat(t)}),[]);return p&&e[0].includes(u)&&1===n.length&&["linestart","lineend"].includes(n[0])&&(n="l"===m?[e[0][1]]:[e[0][e[0].length-2]]),n}),[i,u,m,p]),S=(0,l.useMemo)((function(){var n=r.filter((function(n){return n.includes(u)})).map((function(n){return n[n.indexOf(u)+("l"===m?-1:1)]})).reduce((function(n,t){return n.includes(t)?n:n.concat(t)}),[]);return p&&e[0].includes(u)&&1===n.length&&["linestart","lineend"].includes(n[0])&&(n="l"===m?[e[0][e[0].length-2]]:[e[0][1]]),n}),[i,u,m,p]);return(0,d.jsxs)(h.default,{type:g,svgWidth:j,svgHeight:o,canvasScale:n,theme:v,children:[(0,d.jsx)(f,{}),(0,d.jsx)("g",{transform:"translate(0,".concat(_,")"),children:(0,d.jsx)(x,{prevStnIds:y,nextStnIds:S})})]})};var f=(0,l.memo)((function(){return(0,d.jsxs)("defs",{children:[(0,d.jsx)("marker",{id:"slope",viewBox:"-1.5 0 3 1.5",refY:.5,children:(0,d.jsx)("path",{d:"M0,0L1,1H-1z",fill:"var(--rmg-theme-colour)"})}),(0,d.jsxs)("filter",{id:"pujiang_outline_runin",colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",x:"0",y:"-1000",width:"5000",height:"2000",children:[(0,d.jsx)("feMorphology",{operator:"erode",in:"SourceAlpha",radius:"0",result:"e1"}),(0,d.jsx)("feMorphology",{operator:"erode",in:"SourceAlpha",radius:"1",result:"e2"}),(0,d.jsx)("feComposite",{in:"e1",in2:"e2",operator:"xor",result:"outline"}),(0,d.jsx)("feComposite",{in:"outline",in2:"SourceGraphic",operator:"over",result:"output"})]})]})})),x=function(n){var t=n.prevStnIds,e=n.nextStnIds,r=(0,c.Qy)((function(n){return n.param})),i=r.info_panel_type,s=r.svgWidth,l=r.stn_list,a=s.runin/2,o=1===e.length&&["linestart","lineend"].includes(e[0]),u=1===t.length&&["linestart","lineend"].includes(t[0]),h=e.map((function(n){return l[n].name})),m=t.map((function(n){return l[n].name})),g=10+(e.length>1?-50*(h[0][0].split("\\").length-1)+-30*(h[0][1].split("\\").length-1):0),f=10+(t.length>1?-50*(m[0][0].split("\\").length-1)+-30*(m[0][1].split("\\").length-1):0);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(j,{prevStnIds:t,nextStnIds:e,nextBranchLineDy:g,prevBranchLineDy:f}),o&&"sh2020"!==i?(0,d.jsx)(p,{mode:"terminal",prevStnIds:t,nextStnIds:e}):u&&"sh2020"!==i?(0,d.jsx)(p,{mode:"original",prevStnIds:t,nextStnIds:e}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v,{prevStnIds:t,nextStnIds:e}),(0,d.jsx)("g",{transform:"translate(".concat(a,",160)"),textAnchor:"middle",children:(0,d.jsx)(_,{})})]}),(u||!o)&&(0,d.jsx)(I,{stnIds:n.nextStnIds}),(o||!u)&&(0,d.jsx)(S,{stnIds:n.prevStnIds})]})},p=function(n){var t,e=n.mode,r=n.prevStnIds,i=n.nextStnIds,s=(0,c.Qy)((function(n){return n.param})),l=s.current_stn_idx,a=s.theme,o=s.svgWidth,h=s.direction,m=s.coline,g=(0,c.Qy)((function(n){return n.helper})).branches,f={l:{original:{x:o.runin-36,anchor:"end"},terminal:{x:36,anchor:"start"}},r:{original:{x:36,anchor:"start"},terminal:{x:o.runin-36,anchor:"end"}}},x=(0,u.calculateColineStations)(Object.values(m),g),p="terminal"===e?r:i,v=i.length>1?"var(--rmg-theme-colour)":null!==(t=x.filter((function(n){return n.linePath.includes(l)&&n.linePath.includes(p[0])})).map((function(n){return n.colors[0][2]}))[0])&&void 0!==t?t:"var(--rmg-theme-colour)";return(0,d.jsxs)(d.Fragment,{children:["original"===e&&(0,d.jsx)("path",{transform:"translate(0,".concat(m.length?"198":"220",")").concat(m.length?"scale(1,2)":""),stroke:v,strokeWidth:12,d:"l"===h?"M ".concat(o.runin-24,",16 H 36"):"M24,16 H ".concat(o.runin-36),markerEnd:"url(#slope)"}),"terminal"===e&&(0,d.jsx)("g",{filter:"#999999"===a[2]?"url(#pujiang_outline_runin)":void 0,children:(0,d.jsx)("path",{transform:"translate(0,".concat(m.length?"198":"220",")").concat(m.length?"scale(1,2)":""),stroke:"var(--rmg-grey)",strokeWidth:12,d:"M24,16 H ".concat(o.runin-24)})}),(0,d.jsx)("g",{transform:"translate(".concat(f[h][e].x,",160)"),textAnchor:f[h][e].anchor,children:(0,d.jsx)(_,{})})]})},v=function(n){var t,e=n.prevStnIds,r=n.nextStnIds,i=(0,c.Qy)((function(n){return n.param})),s=i.direction,l=i.svgWidth,a=i.theme,h=i.coline,m=i.current_stn_idx,g=i.stn_list,f=(0,c.Qy)((function(n){return n.helper})).branches,x=l.runin/2,p=function(n){return n.includes("linestart")||n.includes("lineend")},v=(0,u.calculateColineStations)(Object.values(h),f),j=r.length>1?"single":p(r)?v.filter((function(n){return[m,e[0]].every((function(t){return n.linePath.includes(t)}))})).length>0?"multiple":"single":[m,r[0]].every((function(n){return f[0].includes(n)}))&&v.filter((function(n){return[m,r[0]].every((function(t){return n.linePath.includes(t)}))})).length>0?"multiple":"single",_=p(r)?e:r,y=r.length>1?"var(--rmg-theme-colour)":null!==(t=v.filter((function(n){return n.linePath.includes(m)&&n.linePath.includes(_[0])})).map((function(n){return n.colors[0][2]}))[0])&&void 0!==t?t:"var(--rmg-theme-colour)",S=Object.keys(h).length>0&&function(n,t,e,r){return n.slice(1).filter((function(n){return[t,e[0]].every((function(t){return n.includes(t)}))})).filter((function(n){return(0,o.Qo)(n,r)})).length>0}(f,m,r,g)?y:"var(--rmg-theme-colour)",I=Object.keys(h).length>0&&1===r.length&&(!(!p(e)&&!p(r))||!([m,r[0]].every((function(n){return f[0].includes(n)}))&&0!==v.filter((function(n){return n.linePath.includes(m)&&n.linePath.includes(r[0])})).length)),k=Object.keys(h).length>0&&1===e.length;return(0,d.jsxs)("g",{transform:"translate(0,220)",strokeWidth:12,children:[(0,d.jsxs)(d.Fragment,{children:["var(--rmg-theme-colour)"!==S&&(0,d.jsx)("marker",{id:"slope_".concat(S),viewBox:"-1.5 0 3 1.5",refY:.5,children:(0,d.jsx)("path",{d:"M0,0L1,1H-1z",fill:S})}),(0,d.jsx)("path",{stroke:S,d:"M ".concat(x,",16 H ").concat("l"===s?36:l.runin-36),markerEnd:"var(--rmg-theme-colour)"===S?"url(#slope)":"url(#slope_".concat(S,")"),transform:I?"translate(0,-22)scale(1,2)":void 0})]}),"multiple"===j&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("marker",{id:"slope_".concat(y),viewBox:"-1.5 0 3 1.5",refY:.5,children:(0,d.jsx)("path",{d:"M0,0L1,1H-1z",fill:y})}),(0,d.jsx)("path",{stroke:y,d:"M ".concat(x,",16 H ").concat("l"===s?48:l.runin-48),markerEnd:"url(#slope_".concat(y,")"),transform:"translate(0,-12)"})]}),(0,d.jsx)("g",{filter:"#999999"===a[2]?"url(#pujiang_outline_runin)":void 0,transform:"translate(0,".concat(k?-22:0,")scale(1,").concat(k?2:1,")"),children:(0,d.jsx)("path",{stroke:"var(--rmg-grey)",d:"M ".concat(x,",16 H ").concat("l"===s?l.runin-24:24," ")})})]})},j=function(n){var t=n.prevStnIds,e=n.nextStnIds,r=n.nextBranchLineDy,i=n.prevBranchLineDy,s=(0,c.Qy)((function(n){return n.param})),l=s.direction,a=s.svgWidth,o=s.current_stn_idx,h=s.coline,m=s.theme,g=(0,c.Qy)((function(n){return n.helper})).branches,f=a.runin/2,x=125,p=function(n){return"".concat(n[0],",").concat(n[1])},v=function(n){return"M".concat(p(n.at(0))," ")+n.slice(1).map((function(n){return"L".concat(p(n))})).join(" ")},j="l"===l?[[a.runin/3,x],[a.runin/6,r],[36,r]]:[[a.runin/3*2,x],[a.runin/6*5,r],[a.runin-36,r]],_="l"===l?[[a.runin/3*2,x],[a.runin/6*5,i],[a.runin-24,i]]:[[a.runin/3,x],[a.runin/6,i],[24,i]],y="var(--rmg-theme-colour)";if(Object.keys(h).length>0){var S=(0,u.calculateColineStations)(Object.values(h),g);e.length>1&&S.filter((function(n){return n.linePath.includes(o)&&e.some((function(t){return n.linePath.includes(t)}))}))&&(j[0][1]-=11,j.unshift([f,114]),y=S.filter((function(n){return n.linePath.includes(o)&&e.some((function(t){return n.linePath.includes(t)}))})).at(0).colors.at(0)[2]),t.length>1&&S.filter((function(n){return n.linePath.includes(o)&&t.some((function(t){return n.linePath.includes(t)}))}))&&(_[0][1]-=11,_.unshift([f,114]))}return(0,d.jsxs)("g",{transform:"translate(0,110)",strokeWidth:12,fill:"none",filter:"#999999"===m[2]?"url(#pujiang_outline_runin)":void 0,children:[(0,d.jsx)("marker",{id:"slope_branch",viewBox:"-1.5 0 3 1.5",refY:.5,children:(0,d.jsx)("path",{d:"M0,0L1,1H-1z",fill:y})}),e.length>1&&(0,d.jsx)("path",{stroke:y,d:v(j),markerEnd:"url(#slope_branch)"}),t.length>1&&(0,d.jsx)("path",{stroke:"var(--rmg-grey)",d:v(_)})]})},_=function(){var n=(0,c.Qy)((function(n){return n.param})),t=n.stn_list[n.current_stn_idx].name;return(0,l.useMemo)((function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("text",{className:"rmg-name__zh",fontSize:112,children:t[0].replace("\\","")}),(0,d.jsx)("text",{className:"rmg-name__en",fontSize:36,dy:50,children:t[1].replace("\\","")})]})}),(0,s.Z)(t))},y=function(n){var t=n.nextName,e=(0,i.Z)(n,m);return(0,d.jsx)("g",(0,r.Z)((0,r.Z)({},e),{},{children:(0,l.useMemo)((function(){return(0,d.jsxs)(d.Fragment,{children:[t[0].split("\\").map((function(n,e,r){return(0,d.jsx)("text",{className:"rmg-name__zh",fontSize:48,dy:-50*(r.length-1-e)-30*(t[1].split("\\").length-1),children:n},n)})),t[1].split("\\").map((function(n,t,e){return(0,d.jsx)("text",{className:"rmg-name__en",fontSize:24,dy:28+-30*(e.length-1-t),children:n},n)}))]})}),(0,s.Z)(t))}))},S=function(n){var t=(0,c.Qy)((function(n){return n.param})),e=n.stnIds.map((function(n){return t.stn_list[n].name})),r=(n.stnIds.length>1?15:125)+-50*e.map((function(n){return n[0].split("\\").length})).reduce((function(n,t){return n+t}),-e.length)+-30*e.map((function(n){return n[1].split("\\").length})).reduce((function(n,t){return n+t}),-e.length),i=70+(n.stnIds.length>1?-50*(e[0][0].split("\\").length-1)+-30*(e[0][1].split("\\").length-1):0);return(0,d.jsxs)("g",{fill:"gray",textAnchor:"l"===t.direction?"end":"start",transform:"translate(".concat("l"===t.direction?t.svgWidth.runin-36:36,",0)"),children:[(0,d.jsx)(y,{nextName:e[0],transform:"translate(0,183)"}),n.stnIds.length>1&&(0,d.jsx)(y,{nextName:e[1],transform:"translate(0,".concat(i,")")}),(0,d.jsxs)("g",{transform:"translate(0, ".concat(r,")"),children:[(0,d.jsx)("text",{className:"rmg-name__zh",fontSize:22,children:"\u4e0a\u4e00\u7ad9"}),(0,d.jsx)("text",{className:"rmg-name__en",fontSize:12,dx:"l"===t.direction?-70:70,children:"Past Stop"})]})]})},I=function(n){var t=(0,c.Qy)((function(n){return n.param})),e=n.stnIds.map((function(n){return t.stn_list[n].name})),r=(n.stnIds.length>1?15:125)+-50*e.map((function(n){return n[0].split("\\").length})).reduce((function(n,t){return n+t}),-e.length)+-30*e.map((function(n){return n[1].split("\\").length})).reduce((function(n,t){return n+t}),-e.length),i=70+(n.stnIds.length>1?-50*(e[0][0].split("\\").length-1)+-30*(e[0][1].split("\\").length-1):0);return(0,d.jsxs)("g",{textAnchor:"l"===t.direction?"start":"end",transform:"translate(".concat("l"===t.direction?36:t.svgWidth.runin-36,",0)"),children:[(0,d.jsx)(y,{nextName:t.stn_list[n.stnIds[0]].name,transform:"translate(0,183)"}),n.stnIds.length>1&&(0,d.jsx)(y,{nextName:t.stn_list[n.stnIds[1]].name,transform:"translate(0,".concat(i,")")}),(0,d.jsxs)("g",{transform:"translate(0, ".concat(r,")"),children:[(0,d.jsx)("text",{className:"rmg-name__zh",fontSize:22,children:"\u4e0b\u4e00\u7ad9"}),(0,d.jsx)("text",{className:"rmg-name__en",fontSize:12,dx:"l"===t.direction?70:-70,children:"Next Stop"})]})]})}},62554:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(4942),i=(e(72791),e(80184));function s(n){var t,e=n.type,s=n.svgWidth,l=n.svgHeight,a=n.canvasScale,c=n.theme,o=n.children;return(0,i.jsxs)("svg",{id:e,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",height:l*a,viewBox:"0 0 ".concat(s," ").concat(l),colorInterpolationFilters:"sRGB",style:(t={},(0,r.Z)(t,"--rmg-svg-width",s+"px"),(0,r.Z)(t,"--rmg-svg-height",l+"px"),(0,r.Z)(t,"--rmg-theme-colour",c[2]),(0,r.Z)(t,"--rmg-theme-fg",c[3]),t),children:[(0,i.jsx)("rect",{id:"canvas-bg",fill:"white",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}}),o,(0,i.jsx)("rect",{id:"canvas-border",fill:"none",strokeWidth:3,stroke:"none",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}})]})}}}]);
//# sourceMappingURL=5387.4772cea1.chunk.js.map