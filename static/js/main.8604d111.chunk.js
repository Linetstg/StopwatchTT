(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{22:function(t,e,c){},23:function(t,e,c){},25:function(t,e,c){},26:function(t,e,c){"use strict";c.r(e);var n=c(6),s=c.n(n),i=c(17),r=c.n(i),a=c(16),o=(c(22),c(23),c(2));var j=function(t){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:t.start,className:"button",children:"Start"}),Object(o.jsx)("button",{onClick:t.stop,className:"button",children:"Stop"}),Object(o.jsx)("button",{onDoubleClick:t.wait,className:"button",children:"Wait"}),Object(o.jsx)("button",{onClick:t.reset,className:"button",children:"Reset"})]})})};c(25);var l=function(t){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"timers",children:("0"+Math.floor(t.time/36e5%24)).slice(-2)}),"\xa0:\xa0",Object(o.jsx)("span",{className:"timers",children:("0"+Math.floor(t.time/6e3)).slice(-2)}),"\xa0:\xa0",Object(o.jsx)("span",{className:"timers",children:("0"+Math.floor(t.time/100%60)).slice(-2)})]})})})},b=c(31),u=c(30),d=c(29);var h=function(){var t=Object(n.useState)(0),e=Object(a.a)(t,2),c=e[0],s=e[1],i=Object(n.useState)(!1),r=Object(a.a)(i,2),h=r[0],O=r[1];return Object(n.useEffect)((function(){var t=new b.a;return Object(u.a)(10).pipe(Object(d.a)(t)).subscribe((function(){h&&s((function(t){return t+1}))})),function(){t.next(),t.complete()}}),[h]),Object(o.jsx)("div",{className:"main-section",children:Object(o.jsx)("div",{className:"stopwatch-holder",children:Object(o.jsxs)("div",{className:"timer",children:[Object(o.jsx)("p",{children:Object(o.jsx)(l,{time:c})}),Object(o.jsx)("p",{children:Object(o.jsx)(j,{start:function(){O((function(t){return!t}))},wait:function(){0!==c&&O(!1)},stop:function(){s(0),O(!1)},reset:function(){s(0),O(!1),O((function(t){return!t}))}})})]})})})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8604d111.chunk.js.map