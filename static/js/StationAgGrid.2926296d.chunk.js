"use strict";(self.webpackChunkrail_map_generator=self.webpackChunkrail_map_generator||[]).push([[1985],{4523:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var t=r(1413),a=r(1677),i=r(2791),o=r(2953),l=r(6169),u=r(713),d=r(3168),c=r(8735),s=r(8539),f=r(6705),m=r(184);function p(e){var n=e.lineNumber,r=e.stationNumber,t={h:"24px",div:{display:"flex",justifyContent:"center",alignItems:"center",padding:"3px",minWidth:"24px",border:"2px solid",borderColor:e.lineColour,"&:first-of-type":{borderRadius:"12px 0 0 12px"},"&:last-of-type":{borderRadius:"0 12px 12px 0",marginLeft:"-2px"}}};return(0,m.jsxs)(c.kC,{sx:t,children:[(0,m.jsx)("div",{children:n}),(0,m.jsx)("div",{children:r})]})}function h(e){var n=e.branchIndex,r=(0,d.$)().t,h=(0,l.TL)(),g=(0,l.CG)((function(e){return e.app.sidePanelMode})),v=(0,l.CG)((function(e){return e.param})),x=v.style,R=v.theme,S=v.stn_list,N=v.line_num,b=v.coline,C=(0,l.CG)((function(e){return e.helper.branches}))[n].filter((function(e){return!["linestart","lineend"].includes(e)})),w=(0,i.useRef)(null),G=(0,i.useRef)(!1);(0,i.useEffect)((function(){G.current&&w.current&&(1===w.current.api.getSelectedRows().length&&g!==u.Sg.STATION&&w.current.api.deselectAll())}),[G.current,g]);var j=C.map((function(e){return(0,t.Z)((0,t.Z)({},S[e]),{},{id:e,rowSpan:h((0,f.z7)(e,n))})})),y=[{headerName:r("StationAgGrid.num"),field:"num",cellRenderer:function(e){var n=e.value;return(0,m.jsx)(p,{lineNumber:N,stationNumber:n,lineColour:R[2]})},pinned:"left",minWidth:110,hide:![u.RM.GZMTR].includes(x)},{headerName:r("StationAgGrid.zhName"),field:"name",valueFormatter:function(e){var n=e.value,r=e.data;return n[0]+(x===u.RM.GZMTR&&r.secondaryName&&r.secondaryName[0]?" (".concat(r.secondaryName[0],")"):"")}},{headerName:r("StationAgGrid.enName"),field:"name",cellRenderer:function(e){var n=e.value,r=e.data;return(0,m.jsx)(a.iR,{text:n[1]+(x===u.RM.GZMTR&&r.secondaryName&&r.secondaryName[1]?" (".concat(r.secondaryName[1],")"):"")})},minWidth:300},{headerName:r("StationAgGrid.interchange"),field:"transfer",cellRenderer:function(e){var n=e.value;return(0,m.jsx)(c.Ug,{children:n.info.flat().map((function(e,n){return(0,m.jsx)(a.l2,{name:[e[4],e[5]],bg:e[2],fg:e[3],showShortName:!0},n)}))})}},{headerName:r("StationAgGrid.coline"),field:"rowSpan",rowSpan:function(e){return e.data.rowSpan[0]},cellClassRules:{"rmg-ag-grid--spanned-cell":function(e){return e.value[0]>0}},cellRenderer:function(e){var n,r,t=e.value;return(0,m.jsx)(c.Ug,{children:null===(n=b[t[1]])||void 0===n||null===(r=n.colors)||void 0===r?void 0:r.map((function(e,n){return(0,m.jsx)(a.l2,{name:[e[4],e[5]],bg:e[2],fg:e[3],showShortName:!0},n)}))})},hide:![u.RM.SHMetro].includes(x)}];return(0,m.jsx)(a.A,{children:(0,m.jsx)(o.AgGridReact,{ref:w,rowData:j,defaultColDef:{resizable:!0},columnDefs:y,getRowId:function(e){return e.data.id},headerHeight:36,rowHeight:36,suppressCellFocus:!0,suppressMovableColumns:!0,suppressRowTransform:!0,rowSelection:"single",onSelectionChanged:function(e){var n,r=null===(n=e.api.getSelectedRows())||void 0===n?void 0:n.map((function(e){return e.id}));console.log("StationAgGrid.handleSelectionChanged():: Row selection changed",r),null!==r&&void 0!==r&&r.length?(h((0,s.B4)(u.Sg.STATION)),h((0,s.NQ)(r[0])),h((0,s.EH)(void 0))):(h((0,s.B4)(u.Sg.CLOSE)),h((0,s.NQ)("linestart")),h((0,s.EH)(void 0)))},onGridReady:function(){return G.current=!0},debug:!1})})}}}]);
//# sourceMappingURL=StationAgGrid.2926296d.chunk.js.map