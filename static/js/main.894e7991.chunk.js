(this.webpackJsonpbikesapp=this.webpackJsonpbikesapp||[]).push([[0],{67:function(e,a,t){e.exports=t(83)},72:function(e,a,t){},73:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),o=(t(72),t(62)),i=t(9),m=(t(73),t(19)),s=t(35),u=t(92),h=t(90),b=t(56),v=t(57),d=t(93),p=t(91),E=t(36);function f(){var e=Object(s.a)(["\n  form {\n    width: auto;\n  }\n  button {\n    margin: 1vh;\n  }\n  .navbar {\n    background-color: black;\n  }\n  .navbar-default,\n  .collapsed {\n    border-color: white;\n    background-color: white;\n  }\n  .navbar-default,\n  .toggle {\n    background-color: white;\n  }\n  .navbar-brand,\n  .navbar-nav .nav-link {\n    color: white;\n    margin: 2vh 2vw 2vh 2vw;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .navbar-light .navbar-nav .nav-link {\n    color: white;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .navbar-light .navbar-brand {\n    color: white;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .dropdown {\n    color: black;\n    &:hover {\n      color: #690505;\n    }\n  }\n"]);return f=function(){return e},e}var k=E.a.div(f()),g=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),i=o[0],s=o[1];Object(n.useEffect)((function(){fetch("https://api.citybik.es/v2/networks/citybikes-helsinki").then((function(e){return e.json()})).then((function(e){return l(e.network.stations)}))}),[]);var E=function(e){var a=e.bikes;return r.a.createElement("tbody",null,a.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})).map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.free_bikes),r.a.createElement("td",null,e.empty_slots))})))};return r.a.createElement(k,null,r.a.createElement(u.a,{expand:"lg",fixed:"top"},r.a.createElement(u.a.Brand,{href:"/"},"Bikes"),r.a.createElement(u.a.Toggle,{"area-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(h.a,{inline:!0},r.a.createElement(b.a,{type:"text",placeholder:"Search",className:"mr-sm-2",value:i,onChange:function(e){s(e.target.value),console.log(e.target.value)}}),r.a.createElement(v.a,{variant:"outline-dark"},"Search")),r.a.createElement(d.a,{className:"ml-auto"},r.a.createElement(d.a.Link,{href:"#/"},"Home"),r.a.createElement(d.a.Link,{href:"#/bikes"},"Bikes"),r.a.createElement(p.a,{title:"More",id:"basic-nav-dropdown"},r.a.createElement(p.a.Item,{href:"#/maps"},"Maps"),r.a.createElement(p.a.Item,{href:"#/weather"},"Weather"),r.a.createElement(p.a.Divider,null),r.a.createElement(p.a.Item,{target:"_blank",rel:"noopener noreferrer",href:"https://benjambo.github.io/portfolio/#/"},"Benjambo"))))),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Helsinki Citybike Webpage"),r.a.createElement("table",{className:"tables"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Bike station: "),r.a.createElement("th",null,"Bikes available: "),r.a.createElement("th",null,"Empty slots left: "))),r.a.createElement(E,{bikes:t}))))};function w(){var e=Object(s.a)(["\n  form {\n    width: auto;\n  }\n  button {\n    margin: 1vh;\n  }\n  .navbar {\n    background-color: black;\n  }\n  .navbar-default,\n  .collapsed {\n    border-color: white;\n    background-color: white;\n  }\n  .navbar-default,\n  .toggle {\n    background-color: white;\n  }\n  .navbar-brand,\n  .navbar-nav .nav-link {\n    color: white;\n    margin: 2vh 2vw 2vh 2vw;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .navbar-light .navbar-nav .nav-link {\n    color: white;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .navbar-light .navbar-brand {\n    color: white;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .dropdown {\n    color: black;\n    &:hover {\n      color: #690505;\n    }\n  }\n"]);return w=function(){return e},e}var y=E.a.div(w()),j=function(){return r.a.createElement(y,null,r.a.createElement(u.a,{expand:"lg",fixed:"top"},r.a.createElement(u.a.Brand,{href:"/"},"Bikes"),r.a.createElement(u.a.Toggle,{"area-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(d.a,{className:"ml-auto"},r.a.createElement(d.a.Link,{href:"#/"},"Home"),r.a.createElement(d.a.Link,{href:"#/bikes"},"Bikes"),r.a.createElement(p.a,{title:"More",id:"basic-nav-dropdown"},r.a.createElement(p.a.Item,{href:"#/maps"},"Maps"),r.a.createElement(p.a.Item,{href:"#/weather"},"Weather"),r.a.createElement(p.a.Divider,null),r.a.createElement(p.a.Item,{target:"_blank",rel:"noopener noreferrer",href:"https://benjambo.github.io/portfolio/#/"},"Benjambo"))))))},N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Welcome to the BikeApp")))},O=t(94),S=t(95),B=t(89),x=t(96),M="b8b339cb458fb8bc4985ef3cc4e552a3",C="https://api.openweathermap.org/data/2.5/",I=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(null),o=Object(m.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)({}),h=Object(m.a)(u,2),b=h[0],v=h[1];return Object(n.useEffect)((function(){fetch("https://api.citybik.es/v2/networks/citybikes-helsinki").then((function(e){return e.json()})).then((function(e){return l(e.network.stations)}))}),[]),Object(n.useEffect)((function(){fetch("".concat(C,"weather?q=helsinki&units=metric&APPID=").concat(M)).then((function(e){return e.json()})).then((function(e){return v(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{className:"map-container"},r.a.createElement(O.a,{center:[60.1733244,24.9410248],zoom:13},r.a.createElement(S.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),t.map((function(e){return r.a.createElement(B.a,{key:e.id,position:[e.latitude,e.longitude],onclick:function(){s(e)}})})),i&&r.a.createElement(x.a,{key:i.id,position:[i.latitude,i.longitude],onClose:function(){s(null)}},r.a.createElement("div",null,r.a.createElement("h3",null,i.name),r.a.createElement("p",null,"Bikes available: ",i.free_bikes),r.a.createElement("p",null,"Empty slots left: ",i.empty_slots),r.a.createElement("div",null,r.a.createElement("p",{className:"temp"},"Weather: ",Math.round(b.main.temp),"\xb0C"," ",b.weather[0].main)))))))},A="b8b339cb458fb8bc4985ef3cc4e552a3",D="https://api.openweathermap.org/data/2.5/",W=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)({}),o=Object(m.a)(c,2),i=o[0],s=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{className:"undefined"!=typeof i.main?i.main.temp>16?"weather warm":"weather cold":"weather"},r.a.createElement("main",null,r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return l(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(D,"weather?q=").concat(t,"&units=metric&APPID=").concat(A)).then((function(e){return e.json()})).then((function(e){s(e),l(""),console.log(e)}))}})),"undefined"!=typeof i.main?r.a.createElement("div",null,r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"},i.name,", ",i.sys.country),r.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(r)}(new Date))),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"}," ",Math.round(i.main.temp),"\xb0c"),r.a.createElement("div",{className:"weather-description"},i.weather[0].main))):r.a.createElement("div",{className:"weather-empty"},r.a.createElement("p",null,"Search for weather here")))))},F=(t(80),function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:N}),r.a.createElement(i.a,{path:"/bikes",component:g}),r.a.createElement(i.a,{path:"/maps",component:I}),r.a.createElement(i.a,{path:"/weather",component:W})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.894e7991.chunk.js.map