"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[845],{845:function(e,t,i){i.r(t);var n=i(439),r=i(791),c=i(340),a=i(87),s=i(184);t.default=function(){var e=(0,r.useState)([]),t=(0,n.Z)(e,2),i=t[0],d=t[1];return(0,r.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=b7d3d78da112d71a39b066cbc166d0c0").then((function(e){return d(e.data.results)}))}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:"Home"}),(0,s.jsx)("ul",{children:i.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"movies/".concat(e.id),children:e.original_title})},e.id)}))})]})}}}]);
//# sourceMappingURL=845.8d1210f0.chunk.js.map