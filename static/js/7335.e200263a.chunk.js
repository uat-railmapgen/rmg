"use strict";(self.webpackChunkrmg=self.webpackChunkrmg||[]).push([[7335,127],{13203:function(e,t,n){n.d(t,{MM:function(){return a},Yg:function(){return f}});var r=n(1413),i=n(85884),o=n(20713),s=n(37732),u=n(8785),a=(0,i.Z)((0,u.Bx)()),c=s.ZP.getState(),f=function(e){return a((0,r.Z)((0,r.Z)({},c),{},{param:(0,r.Z)((0,r.Z)({},c.param),{},{stn_list:e})}))};o.H_.through,o.H_.through},57335:function(e,t,n){n.r(t);n(72791);var r=n(30127),i=n(37722),o=n(80184),s=jest.fn();SVGElement.prototype.getBBox=s;var u=jest.fn(),a={width:70,height:30};describe("GZMTRStationName",(function(){beforeEach((function(){s.mockReturnValueOnce(a)})),it("Can invoke onChange event when name passed through props is updated",(function(){(0,i.s)((0,o.jsx)("svg",{children:(0,o.jsx)(r.default,{stnName:["\u4f53\u80b2\u897f\u8def","Tiyu Xilu"],onUpdate:u})})),expect(u).toBeCalledTimes(1),expect(u).toBeCalledWith(a)}))}))},30127:function(e,t,n){n.r(t);var r=n(72791),i=n(80184);t.default=(0,r.memo)((function(e){var t=e.stnName,n=e.onUpdate,o=(0,r.useRef)(null);return(0,r.useEffect)((function(){n&&n(o.current.getBBox())}),[t.toString()]),(0,i.jsxs)("g",{ref:o,children:[(0,i.jsx)("text",{className:"rmg-name__zh",fontSize:18,children:t[0]}),(0,i.jsx)("g",{fontSize:10.5,children:t[1].split("\\").map((function(e,t){return(0,i.jsx)("text",{className:"rmg-name__en",dy:16+11*t,children:e},t)}))})]})}),(function(e,t){return e.stnName.toString()===t.stnName.toString()}))},37722:function(e,t,n){n.d(t,{s:function(){return p}});var r=n(45987),i=n(1413),o=(n(24089),n(72791),n(99607)),s=n(83533),u=n(46726),a=n(59434),c=n(37732),f=n(13203),h=n(16871),l=n(80184),d=["store"],m={store:(0,f.MM)((0,i.Z)({},c.ZP.getState()))},g=function(e){var t=e.children,n=e.store;return(0,l.jsx)(s.a,{i18n:u.Z,children:(0,l.jsx)(a.zt,{store:n,children:(0,l.jsx)(h.VA,{children:t})})})},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=t.store,s=(0,r.Z)(t,d);return(0,o.sY)(e,(0,i.Z)({wrapper:function(e){return(0,l.jsx)(g,(0,i.Z)({store:n},e))}},s))}}}]);
//# sourceMappingURL=7335.e200263a.chunk.js.map