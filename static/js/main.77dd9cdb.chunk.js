(this.webpackJsonpbikesapp=this.webpackJsonpbikesapp||[]).push([[0],{56:function(e,t,a){e.exports=a.p+"static/media/biking.1b1a6cfc.mp4"},67:function(e,t,a){e.exports=a(84)},72:function(e,t,a){},73:function(e,t,a){},77:function(e,t,a){e.exports=a.p+"static/media/cover.091e603e.png"},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(72),a(62)),i=a(9),s=(a(73),a(14)),m=a(54),u=a(30),p=a(93),h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),i=o[0],h=o[1];Object(n.useEffect)((function(){fetch("https://api.citybik.es/v2/networks/citybikes-helsinki").then((function(e){return e.json()})).then((function(e){return c(e.network.stations)}))}),[]);var f=function(e){var t=e.bikes;return r.a.createElement(m.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Bike stations by name: "),r.a.createElement("th",null,"Bikes available: "),r.a.createElement("th",null,"Empty slots: "))),r.a.createElement("tbody",null,t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})).map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.free_bikes),r.a.createElement("td",null,e.empty_slots))}))))};return r.a.createElement("div",{className:"searcher"},r.a.createElement("h1",null,"Helsinki Citybikes"),r.a.createElement("div",{className:"search-box",style:{display:"flex",justifyContent:"center"}},r.a.createElement(p.a,{type:"text",placeholder:"Search",onChange:function(e){h(e.target.value),console.log(e.target.value)},className:" mr-sm-2"}),r.a.createElement(u.a,{type:"submit",variant:"dark",className:"search-bar-button"},"Search")),r.a.createElement(f,{bikes:a}))},f=h,d=a(55),b=a.n(d),E=a(56),v=a.n(E),y=(a(77),function(){return r.a.createElement("div",{className:"home"},r.a.createElement("section",{className:"showcase"},r.a.createElement("div",{className:"video-container"},r.a.createElement("video",{autoPlay:"autoplay",muted:!0,loop:"loop",className:"myVideo"},r.a.createElement("source",{className:"myVideo",src:v.a,type:"video/mp4"}))),r.a.createElement("div",{className:"video-content"},r.a.createElement("h1",null,"Welcome to Bikester"),r.a.createElement("p",null,"This is a website created for you to stay updated on where all the Alepa bikes are located and how many there are.",r.a.createElement("br",null),"Our goal is to let everyone access this info from anywhere, anytime for free."),r.a.createElement(b.a,{className:"btn",style:{textDecoration:"none",color:"black",fontSize:"smaller"},offset:function(){return 90},href:"#news"},"Start Here"))),r.a.createElement("section",{id:"news"},r.a.createElement(f,null),r.a.createElement("br",null)),r.a.createElement("section",{id:"about"},r.a.createElement("h1",{id:"about"},"About"),r.a.createElement("p",null,"This is a website created for you to stay updated on what's happening around the world. Our goal is to let everyone access news from anywhere anytime for free. Hope you enjoy your experience."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"Follow Me On Social Media"),r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://github.com/benjambo",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github fa-3x"})),r.a.createElement("a",{href:"https://linkedin.com/in/benschelling",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin fa-3x"})),r.a.createElement("a",{target:"_blank",href:"https://instagram.com/benjaminjoshin",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-instagram fa-3x","aria-hidden":"true"})),r.a.createElement("a",{target:"_blank",href:"https://facebook.com/beni.schelling",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-square fa-3x","aria-hidden":"true"})))))}),k=a(94),g=a(95),w=a(89),j=a(96),N="b8b339cb458fb8bc4985ef3cc4e552a3",O="https://api.openweathermap.org/data/2.5/",x=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(s.a)(l,2),i=o[0],m=o[1],u=Object(n.useState)({}),p=Object(s.a)(u,2),h=p[0],f=p[1];return Object(n.useEffect)((function(){fetch("https://api.citybik.es/v2/networks/citybikes-helsinki").then((function(e){return e.json()})).then((function(e){return c(e.network.stations)})),fetch("".concat(O,"weather?q=helsinki&units=metric&APPID=").concat(N)).then((function(e){return e.json()})).then((function(e){return f(e)}))}),[]),r.a.createElement("div",{className:"pages"},r.a.createElement("div",{className:"map-container"},r.a.createElement(k.a,{center:[60.1733244,24.9410248],zoom:13},r.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),a.map((function(e){return r.a.createElement(w.a,{key:e.id,position:[e.latitude,e.longitude],onclick:function(){m(e)}})})),i&&r.a.createElement(j.a,{key:i.id,position:[i.latitude,i.longitude],onClose:function(){m(null)}},r.a.createElement("div",null,r.a.createElement("h3",null,i.name),r.a.createElement("p",null,"Bikes available: ",i.free_bikes),r.a.createElement("p",null,"Empty slots left: ",i.empty_slots),r.a.createElement("div",null,r.a.createElement("p",{className:"temp"},"Weather: ",Math.round(h.main.temp),"\xb0C"," ",h.weather[0].main)))))))},S="b8b339cb458fb8bc4985ef3cc4e552a3",C="https://api.openweathermap.org/data/2.5/",M=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),o=Object(s.a)(l,2),i=o[0],m=o[1];return r.a.createElement("div",{className:"undefined"!=typeof i.main?i.main.temp>16?"weather warm":"weather cold":"weather"},r.a.createElement("main",null,r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){c(e.target.value),console.log(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(C,"weather?q=").concat(a,"&units=metric&APPID=").concat(S)).then((function(e){return e.json()})).then((function(e){m(e),c(""),console.log(e)}))}})),"undefined"!=typeof i.main?r.a.createElement("div",null,r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"},i.name,", ",i.sys.country),r.a.createElement("div",{className:"date"},new Intl.DateTimeFormat("en-GB",{weekday:"long",year:"numeric",month:"long",day:"2-digit",hour:"numeric",minute:"numeric"}).format())),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"}," ",Math.round(i.main.temp),"\xb0c"),r.a.createElement("div",{className:"weather-description"},i.weather[0].main))):r.a.createElement("div",{className:"weather-empty"},r.a.createElement("p",null,"Search for Weather by City"))))},B=a(91),_=a(92),I=a(90),L=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(B.a,{expand:"lg",fixed:"top",variant:"dark",expanded:a},r.a.createElement(B.a.Brand,{href:"#/"},"Bikester"),r.a.createElement(B.a.Toggle,{"area-controls":"basic-navbar-nav",onClick:function(){return c(!a&&"expanded")}}),r.a.createElement(B.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(_.a,{className:"ml-auto"},r.a.createElement(_.a.Link,{href:"#/",onClick:function(){return c(!1)}},"Home"),r.a.createElement(_.a.Link,{href:"#/maps",onClick:function(){return c(!1)}},"Maps"),r.a.createElement(_.a.Link,{href:"#/weather",onClick:function(){return c(!1)}},"Weather"),r.a.createElement(I.a,{title:"About Me",id:"basic-nav-dropdown"},r.a.createElement(I.a.Item,{target:"_blank",rel:"noopener noreferrer",href:"https://benjambo.github.io/portfolio/#/",onClick:function(){return c(!1)}},"Benjamin J. S."))))))},P=(a(80),a(39)),z=a(40),A=a(42),W=a(41),T=a(43),D=a(10),H=a.n(D),q=(a(81),a(16)),J=function(e){Object(A.a)(a,e);var t=Object(W.a)(a);function a(){return Object(P.a)(this,a),t.apply(this,arguments)}return Object(z.a)(a,[{key:"createLeafletElement",value:function(){var e=this.props.map;return H.a.Routing.control({waypoints:[H.a.latLng(60.176123,24.946),H.a.latLng(60.174325,24.952123)]}).addTo(e.leafletElement).getPlan()}}]),a}(T.a),F=Object(q.b)(J),V=function(e){Object(A.a)(a,e);var t=Object(W.a)(a);function a(){var e;return Object(P.a)(this,a),(e=t.call(this)).saveMap=function(t){e.map=t,e.setState({isMapInit:!0})},e.state={isMapInit:!1},e}return Object(z.a)(a,[{key:"render",value:function(){var e=this.state,t=e.lat,a=e.lng,n=e.zoom,c=[t,a];return r.a.createElement("div",{className:"pages"},r.a.createElement("div",{className:"map-container"},r.a.createElement(k.a,{center:c,zoom:n,ref:this.saveMap},r.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),this.state.isMapInit&&r.a.createElement(F,{map:this.map}))))}}]),a}(r.a.Component),G=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:y}),r.a.createElement(i.a,{path:"/bikes",component:h}),r.a.createElement(i.a,{path:"/maps",component:x}),r.a.createElement(i.a,{path:"/weather",component:M}),r.a.createElement(i.a,{path:"/leaflet",component:V})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.77dd9cdb.chunk.js.map