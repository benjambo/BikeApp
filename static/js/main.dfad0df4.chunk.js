(this.webpackJsonpbikesapp=this.webpackJsonpbikesapp||[]).push([[0],{64:function(e,a,n){e.exports=n(80)},69:function(e,a,n){},70:function(e,a,n){},80:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(19),l=n.n(o),c=(n(69),n(59)),i=n(7),m=(n(70),n(46)),s=n(34),u=n(88),v=n(86),h=n(53),b=n(54),p=n(90),d=n(87),E=n(35);function f(){var e=Object(s.a)(["\n  form {\n    width: auto;\n  }\n  button {\n    margin: 1vh;\n  }\n  .navbar {\n    background-color: black;\n  }\n  .navbar-default,\n  .collapsed {\n    border-color: white;\n    background-color: white;\n  }\n  .navbar-default,\n  .toggle {\n    background-color: white;\n  }\n  .navbar-brand,\n  .navbar-nav .nav-link {\n    color: white;\n    margin: 2vh 2vw 2vh 2vw;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .navbar-light .navbar-nav .nav-link {\n    color: white;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .navbar-light .navbar-brand {\n    color: white;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .dropdown {\n    color: black;\n    &:hover {\n      color: #690505;\n    }\n  }\n"]);return f=function(){return e},e}var k=E.a.div(f()),g=function(){var e=Object(t.useState)([]),a=Object(m.a)(e,2),n=a[0],o=a[1],l=Object(t.useState)(""),c=Object(m.a)(l,2),i=c[0],s=c[1];Object(t.useEffect)((function(){fetch("https://api.citybik.es/v2/networks/citybikes-helsinki").then((function(e){return e.json()})).then((function(e){return o(e.network.stations)}))}),[]);var E=function(e){var a=e.bikes;return r.a.createElement("tbody",null,a.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})).map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.free_bikes),r.a.createElement("td",null,e.empty_slots))})))};return r.a.createElement(k,null,r.a.createElement(u.a,{expand:"lg",fixed:"top"},r.a.createElement(u.a.Brand,{href:"/"},"Bikes"),r.a.createElement(u.a.Toggle,{"area-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(v.a,{inline:!0},r.a.createElement(h.a,{type:"text",placeholder:"Search",className:"mr-sm-2",value:i,onChange:function(e){s(e.target.value),console.log(e.target.value)}}),r.a.createElement(b.a,{variant:"outline-dark"},"Search")),r.a.createElement(p.a,{className:"ml-auto"},r.a.createElement(p.a.Link,{href:"/"},"Home"),r.a.createElement(p.a.Link,{href:"#/bikes"},"Bikes"),r.a.createElement(d.a,{title:"Maps",id:"basic-nav-dropdown"},r.a.createElement(d.a.Item,{href:"#/maps"},"Maps"),r.a.createElement(d.a.Divider,null),r.a.createElement(d.a.Item,{href:"https://benjambo.github.io/portfolio/#/"},"Benjambo"))))),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Alepa-py\xf6r\xe4 Websivusto"),r.a.createElement("table",{className:"tables"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Py\xf6r\xe4asema: "),r.a.createElement("th",null,"Saatavilla olevat py\xf6r\xe4t: "),r.a.createElement("th",null,"Vapaita paikkoja j\xe4ljell\xe4: "))),r.a.createElement(E,{bikes:n}))))},w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Welcome to Avoimet Rajapinnat teht\xe4v\xe4 page"))},j=n(91),y=n(89),B=(n(14),function(){return r.a.createElement("div",{className:"map-container"},r.a.createElement(j.a,{center:[60.1733244,24.9410248],zoom:12},r.a.createElement(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})))});function N(){var e=Object(s.a)(["\n  form {\n    width: auto;\n  }\n  button {\n    margin: 1vh;\n  }\n  .navbar {\n    background-color: black;\n  }\n  .navbar-default,\n  .collapsed {\n    border-color: white;\n    background-color: white;\n  }\n  .navbar-default,\n  .toggle {\n    background-color: white;\n  }\n  .navbar-brand,\n  .navbar-nav .nav-link {\n    color: white;\n    margin: 2vh 2vw 2vh 2vw;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .navbar-light .navbar-nav .nav-link {\n    color: white;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .navbar-light .navbar-brand {\n    color: white;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .dropdown {\n    color: black;\n    &:hover {\n      color: #690505;\n    }\n  }\n"]);return N=function(){return e},e}var x=E.a.div(N()),O=function(){return r.a.createElement(x,null,r.a.createElement(u.a,{expand:"lg",fixed:"top"},r.a.createElement(u.a.Brand,{href:"/"},"Bikes"),r.a.createElement(u.a.Toggle,{"area-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(p.a,{className:"ml-auto"},r.a.createElement(p.a.Link,{href:"/"},"Home"),r.a.createElement(p.a.Link,{href:"#/bikes"},"Bikes"),r.a.createElement(d.a,{title:"More",id:"basic-nav-dropdown"},r.a.createElement(d.a.Item,{href:"#/maps"},"Maps"),r.a.createElement(d.a.Divider,null),r.a.createElement(d.a.Item,{href:"https://benjambo.github.io/portfolio/#/"},"Benjambo"))))))},S=(n(77),function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement("div",{className:"container"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:w}),r.a.createElement(i.a,{path:"/bikes",component:g}),r.a.createElement(i.a,{path:"/maps",component:B})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.dfad0df4.chunk.js.map