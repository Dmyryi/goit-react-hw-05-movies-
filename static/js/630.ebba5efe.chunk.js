"use strict";(self.webpackChunkgoit_react_hw_05_movies_=self.webpackChunkgoit_react_hw_05_movies_||[]).push([[630],{630:function(e,r,t){t.r(r);var i=t(861),n=t(439),s=t(757),c=t.n(s),a=t(340),o=t(87),l=t(689),d=t(791),h=t(184);r.default=function(){var e,r=(0,l.UO)().movieId,t=(0,d.useState)({}),s=(0,n.Z)(t,2),u=s[0],p=s[1];return(0,d.useEffect)((function(){var e=function(){var e=(0,i.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=b7d3d78da112d71a39b066cbc166d0c0"));case 3:t=e.sent,p(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{children:[u.poster_path&&(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(u.poster_path),alt:u.original_title}),(0,h.jsx)("h3",{children:u.original_title}),(0,h.jsxs)("p",{children:["Popularity: ",u.popularity,"%"]}),(0,h.jsx)("h4",{children:"Overview"}),(0,h.jsx)("p",{children:u.overview}),(0,h.jsx)("h4",{children:"Genres"}),(0,h.jsx)("ul",{children:null===(e=u.genres)||void 0===e?void 0:e.map((function(e){return(0,h.jsx)("li",{children:e.name},e.id)}))}),(0,h.jsx)("nav",{children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]})}),(0,h.jsx)(l.j3,{movieId:!0})]})})}}}]);
//# sourceMappingURL=630.ebba5efe.chunk.js.map