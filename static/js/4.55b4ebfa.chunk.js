(this["webpackJsonpreact-proj"]=this["webpackJsonpreact-proj"]||[]).push([[4],{169:function(t,a,e){t.exports={graph:"UserStatsGraphs_graph__2B_bJ",graphItem:"UserStatsGraphs_graphItem__1-xTn",total:"UserStatsGraphs_total__282Pc"}},296:function(t,a,e){"use strict";e.r(a);var s=e(4),r=e(1),c=e.n(r),n=e(169),i=e.n(n),o=e(300),l=e(298),p=e(301),h=e(0);a.default=function(t){var a=t.data,e=c.a.useState([]),r=Object(s.a)(e,2),n=r[0],u=r[1],j=c.a.useState(0),d=Object(s.a)(j,2),f=d[0],b=d[1];return c.a.useEffect((function(){var t=a.map((function(t){return{x:t.title,y:Number(t.acessos)}}));0!==a.length&&b(a.map((function(t){var a=t.acessos;return Number(a)})).reduce((function(t,a){return t+a}))),u(t)}),[a]),Object(h.jsxs)("section",{className:"".concat(i.a.graph," animeLeft"),children:[Object(h.jsx)("div",{className:"".concat(i.a.total," ").concat(i.a.graphItem),children:Object(h.jsxs)("p",{children:["Acessos: ",f]})}),Object(h.jsx)("div",{className:i.a.graphItem,children:Object(h.jsx)(o.a,{data:n,innerRadius:50,padding:{top:20,bottom:20,left:80,right:80},style:{data:{fillOpacity:.9,stroke:"#fff",strokeWidth:2},labels:{fontSize:14,fill:"#333"}}})}),Object(h.jsx)("div",{className:i.a.graphItem,children:Object(h.jsx)(l.a,{children:Object(h.jsx)(p.a,{alignment:"start",data:n})})})]})}}}]);
//# sourceMappingURL=4.55b4ebfa.chunk.js.map