"use strict";(self.webpackChunkrmg=self.webpackChunkrmg||[]).push([[1928],{25481:function(n,t,e){e.d(t,{K:function(){return u}});var r=e(1413),i=e(45987),a=e(93433),o=e(72791),c=e(56169),s=e(80184),l=["stnName","nameDirection"],u=function(n){var t=n.stnId,e=n.nameDirection,r=n.services,i=(0,c.CG)((function(n){return n.param.stn_list[t]})),o=[].concat((0,a.Z)(i.transfer.info[0]),(0,a.Z)(i.transfer.info[1]||[])),l="";l=3===i.services.length?"direct_indoor_sh":2===i.services.length?"express_indoor_sh":o.length>0?"int2_indoor_sh":"stn_indoor_sh";var u="left"===e||"right"===e?90:0;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{name:i.name,infos:i.transfer.info,nameDirection:e,services:r}),(0,s.jsx)("use",{xlinkHref:"#".concat(l),stroke:o.length>0?"black":"var(--rmg-theme-colour)",transform:"rotate(".concat(u,")")}),i.services.length>1&&(0,s.jsx)("text",{className:"rmg-name__zh",writingMode:"tb",fontSize:"60%",dy:"-12",children:"\u5927\u7ad9\u8f66".concat(i.services.length>2?" \u76f4\u8fbe\u8f66":"","\u505c\u9760")})]})};t.Z=u;var f=function(n){var t,e,r=n.name,i=n.infos,o=n.nameDirection,c=n.services,l={upward:60,downward:-30,left:0,right:0}[o],u={upward:0,downward:0,left:85,right:-85}[o],f={upward:-185,downward:150,left:-30,right:-30}[o];return(0,s.jsxs)("g",{transform:"translate(0,".concat(l,")"),children:["upward"===o||"downward"===o?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("line",{x1:-30,x2:30,y1:"upward"===o?-23:-10,y2:"upward"===o?-23:-10,stroke:"black"}),(0,s.jsx)("line",{y1:"upward"===o?-23:-10,y2:"upward"===o?-48:20,stroke:"black"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("line",{x1:"left"===o?-50:15,x2:"left"===o?-15:50,y1:0,y2:0,stroke:"black"}),(0,s.jsx)("line",{x1:"left"===o?-50:50,x2:"left"===o?-50:50,y1:-30,y2:30,stroke:"black"})]}),[].concat((0,a.Z)(i[0]),(0,a.Z)(i[1]||[])).length>0&&(0,s.jsx)(d,{intInfos:[].concat((0,a.Z)(i[0]),(0,a.Z)(i[1]||[])),arrowDirection:o,services:c}),(0,s.jsx)(h,{stnName:r,nameDirection:o,fill:"black"}),(null===(t=i[1])||void 0===t?void 0:t.length)>0&&(0,s.jsx)("g",{transform:"translate(".concat(u,",").concat(f,")"),children:(0,s.jsx)(g,{osiInfos:i[1],nameDirection:o})}),(null===(e=i[2])||void 0===e?void 0:e.length)>0&&(0,s.jsx)("g",{transform:"translate(".concat(function(n){return{upward:0,downward:0,left:n[0].length+n[1].length!==0?85:25,right:n[0].length+n[1].length!==0?-85:-25}[o]}(i),",").concat(function(n,t,e){var r,i,a,o;return{upward:null!==(r=n[1])&&void 0!==r&&r.length?-210:n[0].length?-180:-100,downward:(null!==(i=n[1])&&void 0!==i&&i.length?190:n[0].length?160:75)+(3===e.length?40:0),left:null!==(a=n[1])&&void 0!==a&&a.length?-60:n[0].length?-30:0,right:null!==(o=n[1])&&void 0!==o&&o.length?-60:n[0].length?-30:0}[t]}(i,o,c),")"),children:(0,s.jsx)(m,{osysiInfos:i[2],nameDirection:o})})]})},h=o.forwardRef((function(n,t){var e=n.stnName,c=n.nameDirection,u=(0,i.Z)(n,l),f=e[0].split("\\"),h=e[1].split("\\").length,d={upward:0,downward:0,left:-60,right:60}[c],g={upward:-2,downward:-30-12*(h-1),left:-10*(h-1),right:-10*(h-1)}[c],m={upward:"middle",downward:"middle",left:"end",right:"start"}[c];return(0,s.jsx)("g",(0,r.Z)((0,r.Z)({ref:t},u),{},{textAnchor:m,transform:"translate(".concat(d,",").concat(g,")"),children:o.useMemo((function(){return(0,s.jsxs)(s.Fragment,{children:[f.map((function(n,t,e){return(0,s.jsx)("text",{className:"rmg-name__zh",dy:"upward"===c?16*t:-16*(e.length-1-t),children:n},t)})),(0,s.jsx)("g",{fontSize:9.6,children:e[1].split("\\").map((function(n,t){return(0,s.jsx)("text",{className:"rmg-name__en",dy:12*(t+1)+("upward"===c&&f.length>1?7.5*f.length:0),children:n},t)}))})]})}),(0,a.Z)(e))}))})),d=function(n){var t=n.intInfos,e=n.arrowDirection,r=n.services,i=t.map((function(n){return n[2]})).reduce((function(n,t){return n+t}),""),a=[t.filter((function(n){return n[4].match(/^\d+.*$/)})).map((function(n){return n[4].replace(/^(\d+)(.*)$/,"$1")})).join("\uff0c").concat("\u53f7\u7ebf"),t.filter((function(n){return!n[4].match(/^\d+.*$/)})).map((function(n){return n[4]})).join("\uff0c")].filter((function(n){return n&&"\u53f7\u7ebf"!==n})).join("\uff0c"),c=["Line ".concat(t.filter((function(n){return n[5].match(/^L|line$/)})).map((function(n){return n[5].replace("Line","").replace("line","").trim()})).join(",")),t.filter((function(n){return!n[5].match(/^L|line$/)})).map((function(n){return n[5]})).join("\uff0c")].filter((function(n){return n&&"Line "!==n})).join(","),l=3===r.length?80:45,u={upward:-145,downward:125+(3===r.length?40:0),left:7,right:7}[e],f={upward:0,downward:0,left:20,right:-20}[e],h={upward:-74,downward:44,left:0,right:0}[e],d={upward:0,downward:180,left:90,right:-90}[e],g={upward:0,downward:0,left:85,right:-85}[e],m={upward:"middle",downward:"middle",left:"start",right:"end"}[e];return(0,s.jsxs)("g",{children:[(0,s.jsx)("path",{id:"int_indoor_arrow_sh",stroke:"var(--rmg-black)",strokeWidth:1,transform:"translate(".concat(f,",").concat(h,")rotate(").concat(d,")"),fill:1===t.length?t[0][2]:"url(#grad".concat(i,")"),d:"M -7.5,0 v -".concat(l," h -7.5 l 15,-15 l 15,15 h -7.5 v ").concat(l," Z")}),t.length>1&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("linearGradient",{id:"grad".concat(i),y1:"0",y2:"0",x1:"upward"===e?"25%":"75%",x2:"upward"===e?"75%":"25%",children:t.map((function(n,e){return(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)("stop",{offset:"".concat(100/t.length*(e+0),"%"),stopColor:n[2]}),(0,s.jsx)("stop",{offset:"".concat(100/t.length*(e+1),"%"),stopColor:n[2]})]},e)}))})}),(0,s.jsxs)("g",{transform:"translate(".concat(g,",").concat(u,")"),textAnchor:"".concat(m),children:[(0,s.jsx)("text",{className:"rmg-name__zh",dy:-7,children:"\u6362\u4e58".concat(a)}),(0,s.jsx)("text",{className:"rmg-name__en",dy:5,fontSize:9.6,children:"Interchange ".concat(c)})]})]})},g=function(n){var t={upward:"middle",downward:"middle",left:"start",right:"end"}[n.nameDirection];return o.useMemo((function(){return(0,s.jsxs)("g",{textAnchor:"".concat(t),fontSize:"50%",children:[(0,s.jsx)("text",{className:"rmg-name__zh",dy:-5,children:"\u6362\u4e58".concat(n.osiInfos.map((function(n){return n[4]})).join("\uff0c"))}),(0,s.jsx)("text",{className:"rmg-name__zh",dy:5,children:"\u4ec5\u9650\u516c\u5171\u4ea4\u901a\u5361"}),(0,s.jsx)("text",{className:"rmg-name__en",dy:12.5,fontSize:"75%",children:"Only for Public Transportation Card"})]})}),[n.osiInfos.toString(),n.nameDirection])},m=function(n){var t={upward:"middle",downward:"middle",left:"start",right:"end"}[n.nameDirection];return o.useMemo((function(){return(0,s.jsxs)("g",{textAnchor:"".concat(t),children:[(0,s.jsx)("text",{className:"rmg-name__zh",dy:-5,children:"\u8f6c\u4e58".concat(n.osysiInfos.map((function(n){return n[4]})).join("\uff0c"))}),(0,s.jsx)("text",{className:"rmg-name__en",dy:7.5,fontSize:9.6,children:"To ".concat(n.osysiInfos.map((function(n){return n[5]})).join(", "))})]})}),[n.osysiInfos.toString(),n.nameDirection])}},28271:function(n,t,e){var r=e(29439),i=e(93433),a=e(4942),o=e(1413),c=(e(72791),e(17250)),s=e(25481),l=e(20713),u=e(56169),f=e(68306),h=e(80184);t.Z=function(n){var t=n.bank_angle,e=(0,u.CG)((function(n){return n.helper})).branches,r=(0,u.CG)((function(n){return n.param})),c=r.current_stn_idx,s=r.svgWidth,l=r.svg_height,m=r.padding,x=r.direction,p=r.loop_info,v=p.left_and_right_factor,j=p.bottom_factor,_=e[0].filter((function(n){return!["linestart","lineend"].includes(n)})),w=(0,f.cX)(_,c,j,v),y=(0,f.Ft)(_,w),Z=y.x_shares,b=y.y_shares;_.forEach((function(n){Z[n]=(Z[n]+1)/2,b[n]=(b[n]+1)/2}));var k=t?s.railmap:s.indoor,S=[k*m/100+(t?50:0),k*(1-m/100)-(t?50:0)],N=Object.keys(Z).reduce((function(n,t){return(0,o.Z)((0,o.Z)({},n),{},(0,a.Z)({},t,S[0]+Z[t]*(S[1]-S[0])))}),{}),z=[175,l-75-(t?0:125)],I=Object.keys(Z).reduce((function(n,t){return(0,o.Z)((0,o.Z)({},n),{},(0,a.Z)({},t,z[0]+b[t]*(z[1]-z[0])))}),{}),F=t?{l:1,r:-1}[x]:0;[].concat((0,i.Z)(w.right),(0,i.Z)(w.left)).forEach((function(n){N[n]-=(I[n]-z[0])*F})),w.bottom.forEach((function(n){N[n]-=(z[1]-z[0])*F}));var E=d(w,N,I,F,z);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("g",{id:"loop",transform:"translate(".concat(150*F,",0)"),children:[(0,h.jsx)("path",{stroke:"var(--rmg-theme-colour)",strokeWidth:12,fill:"none",d:E,strokeLinejoin:"round"}),(0,h.jsx)(g,{bank_angle:t,loop_stns:w,xs:N,ys:I})]})})};var d=function(n,t,e,i,a){var o=(0,r.Z)(a,2),c=o[0],s=o[1],l=function(n,t,e,r,a){return{right:[e+(r-c)*i,t],bottom:[n-(s-t)*i,r],left:[e-(s-r)*i,t],top:[n+(t-c)*i,r]}[a]},u=[];n.top.forEach((function(n){u.push([t[n],e[n]])})),["right","bottom","left"].forEach((function(r){if(n[r].length>0)u.push(l(u.at(-1)[0],u.at(-1)[1],t[n[r][0]],e[n[r][0]],r)),n[r].forEach((function(n){u.push([t[n],e[n]])}));else{var a={right:[u.at(-1)[0]+100,u.at(-1)[1]],bottom:[u.at(-1)[0]+(s-u.at(-1)[1])*-i,u.at(-1)[1]+(s-u.at(-1)[1])],left:[u.at(-1)[0]-100,u.at(-1)[1]]};u.push(a[r])}})),u.push(l(u.at(-1)[0],u.at(-1)[1],t[n.top[0]],e[n.top[0]],"top"));var f=u.slice(1).map((function(n){var t=(0,r.Z)(n,2),e=t[0],i=t[1];return"L".concat(e,",").concat(i)})).join(" ");return"M".concat(u[0][0],",").concat(u[0][1]," ").concat(f," Z")},g=function(n){var t=n.bank_angle,e=n.loop_stns,i=n.xs,a=n.ys,o={top:0,bottom:0,left:-1,right:1},u={left:"r",right:"l",top:void 0,bottom:void 0},f=function(n,t){return{top:t%2===0?"upward":"downward",bottom:t%2===0?"upward":"downward",left:"left",right:"right"}[n]};return(0,h.jsx)("g",{id:"loop_stations",children:t?Object.entries(e).map((function(n){var t=(0,r.Z)(n,2),e=t[0];return t[1].map((function(n){return(0,h.jsx)("g",{transform:"translate(".concat(i[n],",").concat(a[n],")"),children:(0,h.jsx)(c.Z,{stnId:n,stnState:1,bank:o[e],direction:u[e]})},n)}))})):Object.entries(e).map((function(n){var t=(0,r.Z)(n,2),e=t[0];return t[1].map((function(n,t){return(0,h.jsx)("g",{transform:"translate(".concat(i[n],",").concat(a[n],")"),children:(0,h.jsx)(s.K,{stnId:n,nameDirection:f(e,t),services:[l.K9.local]})},n)}))}))})}},17250:function(n,t,e){var r=e(45987),i=e(29439),a=e(1413),o=e(93433),c=e(72791),s=e(20713),l=e(56169),u=e(80184),f=["stnName"],h=["intInfos","direction"];t.Z=function(n){var t=n.stnId,e=n.stnState,r=n.color,i=n.bank,c=n.direction,s=(0,l.CG)((function(n){return n.param})),f=s.direction,h=s.info_panel_type,g=s.stn_list[t],m=null!==c&&void 0!==c?c:f,x=([].concat((0,o.Z)(g.branch.left),(0,o.Z)(g.branch.right)).length?8+12*g.name[1].split("\\").length:0)*("r"===m?-1:1),p="",v={};"sh2020"===h?(p=3===g.services.length?"stn_sh_2020_direct":2===g.services.length?"stn_sh_2020_express":"stn_sh_2020",v.fill=-1===e?"gray":r||"var(--rmg-theme-colour)"):(p=3===g.services.length?"direct_sh":2===g.services.length?"express_sh":[].concat((0,o.Z)(g.transfer.info[0]),(0,o.Z)(g.transfer.info[1]||[])).length>0?"int2_sh":"stn_sh",v.stroke=-1===e?"gray":r||"var(--rmg-theme-colour)");var j=null!==i&&void 0!==i?i:0,_=("l"===m?6:-6)+x+30*j,w=("sh2020"===h?-20:-6)+Math.abs(j)*("sh2020"===h?25:11),y=j?0:"l"===m?-45:45;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("use",(0,a.Z)((0,a.Z)({xlinkHref:"#".concat(p)},v),{},{transform:"translate(".concat(j*("sh2020"===h?5:0),",0)")+"rotate(".concat(90*j*("sh2020"===h?1:-1),")")})),(0,u.jsx)("g",{transform:"translate(".concat(_,",").concat(w,")rotate(").concat(y,")"),children:(0,u.jsx)(d,{name:g.name,infos:g.transfer.info,stnState:e,direction:m,facility:g.facility,bank:j})})]})};var d=function(n){var t,e=n.name,r=n.infos,a=n.stnState,l=n.direction,f=n.facility,h=n.bank,d=n.name[1].split("\\").length,x=(0,c.useRef)(null),p=c.useState({width:0}),v=(0,i.Z)(p,2),_=v[0],w=v[1];c.useEffect((function(){return w(x.current.getBBox())}),(0,o.Z)(e));var y=_.width+5,Z="l"===l?1:-1,b=f!==s.mV.none?30:0,k=h?-12:0;return(0,u.jsxs)(u.Fragment,{children:[r.flat().length>0&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("line",{x1:(k+b)*Z,x2:(b+y)*Z,stroke:-1===a?"gray":"black",strokeWidth:.5}),(0,u.jsx)(m,{intInfos:r,transform:"translate(".concat((b+y)*Z,",-10.75)"),direction:l})]}),f!==s.mV.none&&(0,u.jsx)("use",{xlinkHref:"#"+f,x:10*Z,y:-30}),(0,u.jsxs)("g",{textAnchor:"l"===l?"start":"end",transform:"translate(".concat(b*Z,",").concat(-16.15625-12*(d-1),")"),children:[(0,u.jsx)(g,{ref:x,stnName:e,fill:-1===a?"gray":0===a?"red":"black"}),(null===(t=r[1])||void 0===t?void 0:t.length)>0&&(0,u.jsx)("g",{transform:"translate(".concat((y+15*r.reduce((function(n,t){return n+t.length}),0))*Z,",-30)"),children:(0,u.jsx)(j,{osiInfos:r[1]})})]})]})},g=c.forwardRef((function(n,t){var e=n.stnName,i=(0,r.Z)(n,f);return(0,u.jsx)("g",(0,a.Z)((0,a.Z)({ref:t},i),{},{children:c.useMemo((function(){return(0,u.jsxs)(u.Fragment,{children:[e[0].split("\\").map((function(n,t,e){return(0,u.jsx)("text",{className:"rmg-name__zh",dy:-15*(e.length-1-t),children:n},t)})),(0,u.jsx)("g",{fontSize:9.6,children:e[1].split("\\").map((function(n,t){return(0,u.jsx)("text",{className:"rmg-name__en",dy:12*(t+1),children:n},t)}))})]})}),(0,o.Z)(e))}))})),m=function(n){var t,e=n.intInfos,i=(n.direction,(0,r.Z)(n,h)),c=[].concat((0,o.Z)(e[0]),(0,o.Z)(e[1]||[]),(0,o.Z)((null===(t=e[2])||void 0===t?void 0:t.filter((function(n){return Boolean(n[4].match(/^\u78c1(\u60ac)*\u6d6e/))})))||[])),s=0;return(0,u.jsxs)("g",(0,a.Z)((0,a.Z)({fontSize:14,textAnchor:"middle"},i),{},{children:[c.map((function(t,e){var r=Boolean(t[4].match(/^\d.*$/)),i=Boolean(t[4].match(/^\u78c1(\u60ac)*\u6d6e/));"r"===n.direction&&(s-=(r||i?20:14*t[4].length+12+0)+(0===e?0:5));var a=(0,u.jsx)("g",{});return a=i?(0,u.jsx)("g",{transform:"translate(".concat(s,",-16)scale(0.1428571429)"),children:(0,u.jsx)(x,{info:t})},e):r?(0,u.jsx)("g",{transform:"translate(".concat(s,",0)"),children:(0,u.jsx)(p,{info:t})},e):(0,u.jsx)("g",{transform:"translate(".concat(s,",0)"),children:(0,u.jsx)(v,{info:t})},e),"l"===n.direction&&(s+=r||i?25:14*t[4].length+12+5),a})),(0,o.Z)(e[2]||[]).length>0&&(0,u.jsx)("g",{transform:"translate(".concat(s-("r"===n.direction?5:0),",0)"),children:(0,u.jsx)(_,{osysiInfos:e[2],direction:n.direction})},c.length+1)]}))},x=(0,c.memo)((function(n){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("use",{xlinkHref:"#intbox_maglev",fill:n.info[2],stroke:n.info[2]})})}),(function(n,t){return n.info.toString()===t.info.toString()})),p=(0,c.memo)((function(n){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("use",{xlinkHref:"#intbox_number",fill:n.info[2]}),(0,u.jsx)("text",{x:10,className:"rmg-name__zh",fill:n.info[3],dominantBaseline:"central",children:n.info[4].match(/(\d*)\w+/)[0]})]})}),(function(n,t){return n.info.toString()===t.info.toString()})),v=(0,c.memo)((function(n){var t=n.info[4].split("\\")[0].length;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("rect",{height:22,width:14*t+12,y:-11,fill:n.info[2]}),(0,u.jsx)("text",{x:7*t+6,className:"rmg-name__zh",fill:n.info[3],dominantBaseline:"central",children:n.info[4].split("\\")[0]})]})}),(function(n,t){return n.info.toString()===t.info.toString()})),j=function(n){var t=n.osiInfos.map((function(n){return n[4]})).join("\uff0c");return c.useMemo((function(){return(0,u.jsxs)("g",{textAnchor:"middle",fontSize:"50%",children:[(0,u.jsx)("text",{className:"rmg-name__zh",dy:-5,children:"\u6362\u4e58".concat(t)}),(0,u.jsx)("text",{className:"rmg-name__zh",dy:5,children:"\u4ec5\u9650\u516c\u5171\u4ea4\u901a\u5361"}),(0,u.jsx)("text",{className:"rmg-name__en",dy:12.5,fontSize:"75%",children:"Only for Public Transportation Card"})]})}),[t.toString()])},_=function(n){var t=n.osysiInfos.map((function(n){return n[4]})).join("\uff0c"),e=n.osysiInfos.map((function(n){return n[5]})).join(", ");return c.useMemo((function(){return(0,u.jsxs)("g",{textAnchor:"l"===n.direction?"start":"end",fontSize:"50%",children:[(0,u.jsxs)("text",{className:"rmg-name__zh",dy:3,children:["\u8f6c\u4e58",t]}),(0,u.jsxs)("text",{className:"rmg-name__en",dy:10,fontSize:"75%",children:["To ",e]})]})}),[n.osysiInfos.toString(),n.direction])}},23824:function(n,t,e){e.d(t,{Az:function(){return f},QE:function(){return h},ML:function(){return d},h6:function(){return g},LD:function(){return m},pS:function(){return x}});var r=e(29439),i=e(15671),a=e(43144),o=e(93433),c=e(37762),s=e(4942),l=e(1413),u=e(20713),f=function(n,t,e){return Object.keys(n).reduce((function(r,i){return(0,l.Z)((0,l.Z)({},r),{},(0,s.Z)({},i,n[i].children.reduce((function(r,a){return(0,l.Z)((0,l.Z)({},r),{},(0,s.Z)({},a,1+t(n,a)+e(n,i)))}),{})))}),{})},h=function n(t,e,r){if(t===e)return{len:0,nodes:[t]};var i=[],a=[];Object.keys(r[t]).forEach((function(o){var c=n(o,e,r);c.len<0||(i.push(r[t][o]+c.len),c.nodes.unshift(t),a.push(c.nodes))}));var o=Math.max.apply(Math,i);return{len:o,nodes:a[i.indexOf(o)]}},d=function(n,t,e){var r=h("linestart","lineend",t);if(r.nodes.includes(n))return h(r.nodes[1],n,t).len;for(var i=e.filter((function(t){return t.includes(n)}))[0],a=n;!r.nodes.includes(a);)a=i[i.indexOf(a)-1];for(var o=n;!r.nodes.includes(o);)o=i[i.indexOf(o)+1];var c="linestart"===a,s=[];return c||"lineend"===o?c?(s[0]=0,s[1]=h(r.nodes[1],o,t).len,s[2]=h(i[1],n,t).len,s[3]=h(n,o,t).len):(s[0]=h(r.nodes[1],a,t).len,s[1]=h(a,r.nodes.slice(-2)[0],t).len,s[2]=h(a,n,t).len,s[3]=h(n,i.slice(-2)[0],t).len):(s[0]=h(r.nodes[1],a,t).len,s[1]=h(a,o,t).len,s[2]=h(a,n,t).len,s[3]=h(n,o,t).len),s[0]+s[2]*s[1]/(s[2]+s[3])},g=function(n,t,e){var r;return console.log("computing stations' states"),(0,o.Z)(new Set((r=[]).concat.apply(r,(0,o.Z)(t)))).reduce((function(r,i){return(0,l.Z)((0,l.Z)({},r),{},(0,s.Z)({},i,i===n?0:(e===u.wA.right?function(n,t,e){var r,i=(0,c.Z)(e);try{for(i.s();!(r=i.n()).done;){var a=r.value,o=a.indexOf(n),s=a.indexOf(t);if(-1!==o&&o<s)return!0}}catch(l){i.e(l)}finally{i.f()}return!1}(n,i,t):function(n,t,e){var r,i=(0,c.Z)(e);try{for(i.s();!(r=i.n()).done;){var a=r.value,o=a.indexOf(n),s=a.indexOf(t);if(-1!==s&&s<o)return!0}}catch(l){i.e(l)}finally{i.f()}return!1}(n,i,t))?1:-1))}),{})},m=function(){function n(t){var e=this;(0,i.Z)(this,n),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(n){return 0},this.rightWideFactor=function(n){return 0},this.pathWeight=function(n,t){return e.stnList[n].children.includes(t)?1+e.rightWideFactor(n)+e.leftWideFactor(t):-1/0},this.pathTurnParams=function(n){var t=35-17.5*Math.sqrt(3),e=n-2*t;return{tr:35,dx_a:17.5,dy_a:t,dx_l:e*Math.sqrt(3),dy_l:e}},this.pathTurnSE=function(n){var t=e.pathTurnParams(n),r=t.tr,i=t.dx_a,a=t.dy_a,o=t.dx_l,c=t.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(i,",").concat(a," l ").concat(o,",").concat(c," a ").concat(r,",").concat(r," 0 0,0 ").concat(i,",").concat(a)},this.pathTurnNE=function(n){var t=e.pathTurnParams(n),r=t.tr,i=t.dx_a,a=t.dy_a,o=t.dx_l,c=t.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(i,",").concat(-a," l ").concat(o,",").concat(-c," a ").concat(r,",").concat(r," 0 0,1 ").concat(i,",").concat(-a)},this.stnList=t.stnList,this.criticalPath=t.criticalPath}return(0,a.Z)(n,[{key:"getYShare",value:function(n,t){if(n in this.yShares)return this.yShares[n];if(["linestart","lineend"].includes(n)||this.stnList[n].parents.length>1||this.stnList[n].children.length>1)return this.yShares[n]=0,0;var e=this.stnList[n].parents[0];if(e){if(1===this.stnList[e].children.length){var r=this.getYShare(e);return this.yShares[n]=r,r}var i=0===this.stnList[e].children.indexOf(n)?1:-1;return this.yShares[n]=i,i}return this.yShares[n]=0,0}},{key:"_linePath",value:function(n,t,e,i,a,o,c,s){var l=this,u=(0,r.Z)([],3),f=u[0],h=u[1],d=u[2],g=[],m=this.pathTurnParams(o),x=m.dx_a+m.dx_l/2,p=(t[1]-t[0])/c.len*2,v=((t[1]-t[0])/c.len-2*x)/2;return v+p<0&&console.warn("SVG width too small! ".concat(v+p)),n.forEach((function(t){var r=i[t],c=a[t];if(!h&&0!==h)return f=t,d=r,h=c,void(1===n.length?g.push("M ".concat(r,",").concat(c)):e[0].includes(t)?e[0].includes(n[1])?g.push("M ".concat(r,",").concat(c)):(i[n[1]]>0&&g.push("M ".concat(r,",").concat(c+s)),a[n[1]]<0&&g.push("M ".concat(r,",").concat(c-s))):g.push("M ".concat(r,",").concat(c)));c>h?(g.push("h ".concat(0===c?r-d-p*l.leftWideFactor(t)-v-2*x:p*l.rightWideFactor(f)+v)),g.push(l.pathTurnSE(o))):c<h&&(g.push("h ".concat(0===c?r-d-p*l.leftWideFactor(t)-v-2*x:p*l.rightWideFactor(f)+v)),g.push(l.pathTurnNE(o))),g.push("H ".concat(r)),f=t,d=r,h=c})),g.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(n,t){console.log("computing y shares");var e=new this({stnList:n});return Object.keys(n).forEach((function(n){["linestart","lineend"].includes(n)||n in e.yShares||e.getYShare(n,t)})),e.yShares}},{key:"drawLine",value:function(n,t,e,r,i,a,o,c){var s=this,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:9.68,u={main:[],pass:[]};return n.forEach((function(f,h){var d=(f=f.filter((function(n){return!["linestart","lineend"].includes(n)}))).filter((function(n){return t[n]>=0})),g=f.filter((function(n){return t[n]<=0}));1===d.length&&(g=f),0===d.filter((function(n){return-1!==g.indexOf(n)})).length&&d.length&&(g[0]===f[0]?g.push(d[0]):d[0]===f[0]&&d[d.length-1]===f[f.length-1]&&g.length?(g=f,d=[]):g.unshift(d[d.length-1])),u.main.push(new s({stnList:e,criticalPath:c})._linePath(d,r,n,i,a,o,c,l)),u.pass.push(new s({stnList:e,criticalPath:c})._linePath(g,r,n,i,a,o,c,l))})),u}}]),n}(),x=function(n,t){var e=(n=n.filter((function(n){return!["linestart","lineend"].includes(n)}))).filter((function(n){return t[n]>=0})),r=n.filter((function(n){return t[n]<=0}));return 1===e.length&&(r=n),0===e.filter((function(n){return-1!==r.indexOf(n)})).length&&e.length&&(r[0]===n[0]?r.push(e[0]):e[0]===n[0]&&e[e.length-1]===n[n.length-1]&&r.length?(r=n,e=[]):r.unshift(e[e.length-1])),{main:e,pass:r}}},68306:function(n,t,e){e.d(t,{cX:function(){return i},Ft:function(){return a},f2:function(){return o}});var r=e(93433),i=function(n,t,e,i){var a=n.length-2*i-e,o=n.findIndex((function(n){return n===t})),c=[].concat((0,r.Z)(n),(0,r.Z)(n),(0,r.Z)(n)),s=n.length+o-Math.floor(a/2)+(a%2===0?1:0),l=n.length+o+Math.floor(a/2);return{top:c.slice(s,l+1),left:c.slice(s-i,s),right:c.slice(l+1,l+1+i),bottom:c.slice(l+1+i,l+1+i+e)}},a=function(n,t){var e=Object.fromEntries(n.map((function(n){return[n,-1]}))),r=Object.fromEntries(n.map((function(n){return[n,-1]})));return t.top.forEach((function(n,i){e[n]=1.8/t.top.length*i-.9+.9/t.top.length,r[n]=-1})),t.right.forEach((function(n,i){e[n]=1,r[n]=1.8/t.right.length*i-.9+.9/t.right.length})),t.bottom.forEach((function(n,i){e[n]=.9-1.8/t.bottom.length*i-.9/t.bottom.length,r[n]=1})),t.left.forEach((function(n,i){e[n]=-1,r[n]=.9-1.8/t.left.length*i-.9/t.left.length})),{x_shares:e,y_shares:r}},o=function(n,t,e,i){var a=n[0].filter((function(n){return!["linestart","lineend"].includes(n)})),o=[].concat((0,r.Z)(a),(0,r.Z)(a),(0,r.Z)(a)),c="r"===t?o:o.reverse(),s=c.findIndex((function(n){return i===n}))+a.length;return c.slice(s+1).filter((function(n){return e[n].loop_pivot})).slice(void 0,2)}}}]);
//# sourceMappingURL=1928.c565ad44.chunk.js.map