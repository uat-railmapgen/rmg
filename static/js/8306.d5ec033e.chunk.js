"use strict";(self.webpackChunkrmg=self.webpackChunkrmg||[]).push([[8306],{68306:function(n,t,e){e.r(t),e.d(t,{split_loop_stns:function(){return o},split_loop_stns_with_branch:function(){return c},split_loop_stns_with_branches:function(){return l},get_xshares_yshares_of_loop:function(){return u},get_pivot_stations:function(){return f}});var r=e(29439),i=e(93433),o=function(n,t,e,r){var o=n.length-2*r-e,c=n.findIndex((function(n){return n===t})),l=[].concat((0,i.Z)(n),(0,i.Z)(n),(0,i.Z)(n)),u=n.length+c-Math.floor(o/2)+(o%2===0?1:0),f=n.length+c+Math.floor(o/2);return{top:l.slice(u,f+1),left:l.slice(u-r,u),right:l.slice(f+1,f+1+r),bottom:l.slice(f+1+r,f+1+r+e)}},c=function(n,t,e,r){var o=n.length-2*r-e,c=[].concat((0,i.Z)(n),(0,i.Z)(n),(0,i.Z)(n)),l=n.length+n.findIndex((function(n){return n===t})),u=c[l+o-1],f=n.length+n.findIndex((function(n){return n===u}))+(l+o>2*n.length?n.length:0);return{top:c.slice(l,f+1),left:c.slice(l-r,l),right:c.slice(f+1,f+1+r),bottom:c.slice(f+1+r,f+1+r+e)}},l=function(n,t,e,i){var o=n.findIndex((function(n){return n===t[0]})),l=n.findIndex((function(n){return n===t[1]})),u=o>l?[l,o,t[1],t[0]]:[o,l,t[0],t[1]],f=(0,r.Z)(u,4);o=f[0],l=f[1],t[0]=f[2],t[1]=f[3];var h=n.slice(o,l+1),s=n.filter((function(n){return!h.filter((function(n){return!t.includes(n)})).includes(n)})),a=n.length-("major"===i?Math.max:Math.min)(h.length,s.length)-2*e,g="major"===i?h.length>s.length?t[0]:t[1]:h.length>s.length?t[1]:t[0];return c(n,g,a,e)},u=function(n,t){var e=Object.fromEntries(n.map((function(n){return[n,-1]}))),r=Object.fromEntries(n.map((function(n){return[n,-1]})));return t.top.forEach((function(n,i){e[n]=0+1/(t.top.length+1)*(i+1),r[n]=0})),t.right.forEach((function(n,i){e[n]=1,r[n]=0+1/(t.right.length+1)*(i+1)})),t.bottom.forEach((function(n,i){e[n]=1-1/(t.bottom.length+1)*(i+1),r[n]=1})),t.left.forEach((function(n,i){e[n]=0,r[n]=1-1/(t.left.length+1)*(i+1)})),{x_shares:e,y_shares:r}},f=function(n,t,e,r){var o=n[0].filter((function(n){return!["linestart","lineend"].includes(n)})),c=[].concat((0,i.Z)(o),(0,i.Z)(o),(0,i.Z)(o)),l="r"===t?c:c.reverse(),u=l.findIndex((function(n){return r===n}))+o.length;return l.slice(u+1).filter((function(n){return e[n].loop_pivot})).slice(void 0,2)}}}]);
//# sourceMappingURL=8306.d5ec033e.chunk.js.map