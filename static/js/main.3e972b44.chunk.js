(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),i=(a(14),a(5)),m=(a(15),a(16),a(24)),o=a(25),s=a(26);function u(e){var t=e.change,a=e.click;return c.a.createElement("div",{className:"searchbar"},c.a.createElement(m.a,{className:"mb-3"},c.a.createElement(o.a,{placeholder:"Masukan nama kota","aria-label":"Recipient's username","aria-describedby":"basic-addon2",onChange:function(e){t(e)}}),c.a.createElement(m.a.Append,null,c.a.createElement(s.a,{onClick:a,variant:"outline-secondary"},"Button"))))}function d(e){var t=e.data,a=e.display,n=e.error,r=t.city,l=t.wind,i=t.temp,m=t.weather,o=t.hum,s=t.icon;return n?c.a.createElement("div",{className:"failed"},c.a.createElement("img",{src:"/Asset/fail.svg",alt:""}),c.a.createElement("h4",null,"City not found")):!0===a?c.a.createElement("div",null,c.a.createElement("div",{className:"current-container"},c.a.createElement("div",{className:"current-weather"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:"/Asset/".concat(s,".png"),alt:""})),c.a.createElement("div",{className:"current text"},c.a.createElement("h6",null,m),c.a.createElement("h5",null,r))),c.a.createElement("div",{className:"current-detail"},c.a.createElement("ul",null,c.a.createElement("li",{className:"detail-title"},"Temprature"),c.a.createElement("li",null,"".concat(Math.ceil(i)," \xb0C"))),c.a.createElement("ul",null,c.a.createElement("li",{className:"detail-title"},"Wind"),c.a.createElement("li",null,"".concat(l," m/s"))),c.a.createElement("ul",null,c.a.createElement("li",{className:"detail-title"},"Humidity"),c.a.createElement("li",null,"".concat(o,"%")))))):c.a.createElement("h1",null," ")}function h(){return c.a.createElement("div",{className:"greeting"},c.a.createElement("div",{className:"greet"},c.a.createElement("h5",null,function(){var e=(new Date).getHours();return e>5&&e<12?"Good Morning":e>=12&&e<18?"Good Afternoon":e>=18?"Good Night":void 0}())),c.a.createElement("div",{className:"date"},c.a.createElement("h6",null,function(){var e=new Date;return new Intl.DateTimeFormat("en-US",{weekday:"short",day:"numeric",month:"long"}).format(e)}())),c.a.createElement("div",null))}function E(e){var t=e.data,a=new Date(t.dt_txt),n=new Intl.DateTimeFormat("en-US",{weekday:"short"}).format(a);return c.a.createElement("div",{className:"cardel"},c.a.createElement("div",{className:"card-txt"},c.a.createElement("li",null,c.a.createElement("b",null,n)),c.a.createElement("li",null,"".concat(Math.ceil(t.main.temp)," \xb0C"))),c.a.createElement("div",{className:"card-weather"},c.a.createElement("img",{src:"/Asset/".concat(t.weather[0].icon,".png"),alt:""})))}function p(e){var t=e.data;try{return c.a.createElement("div",{className:"forecastlist "},t.map((function(e,a){if(a%8===0&&a>0)return c.a.createElement(E,{key:a,data:t[a]})})))}catch(a){return c.a.createElement("div",null)}}var v=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),m=Object(i.a)(l,2),o=m[0],s=m[1],E=Object(n.useState)([]),v=Object(i.a)(E,2),f=v[0],w=v[1],g=Object(n.useState)(!1),b=Object(i.a)(g,2),N=b[0],y=b[1],j=Object(n.useState)(!1),k=Object(i.a)(j,2),O=k[0],S=k[1],A=["https:api.openweathermap.org/data/2.5/weather?q=".concat(a,"&units=metric&appid=0e1d8596d00a9cb7562359634209c46d"),"https://api.openweathermap.org/data/2.5/forecast?q=".concat(a,"&units=metric&appid=0e1d8596d00a9cb7562359634209c46d")];return onchange=function(e){r(e.target.value)},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"App"},c.a.createElement(h,null),c.a.createElement(u,{change:onchange,click:function(){var e=A[1];fetch(A[0]).then((function(e){return e.json()})).then((function(e){s({city:e.name,temp:e.main.temp,hum:e.main.humidity,wind:e.wind.speed,weather:e.weather[0].main,icon:e.weather[0].icon},y(!0),S(!1))})).catch((function(e){return S(!0)})),fetch(e).then((function(e){return e.json()})).then((function(e){w(e.list)}))}}),c.a.createElement(d,{error:O,data:o,display:N}),c.a.createElement(p,{data:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(22)}},[[9,1,2]]]);
//# sourceMappingURL=main.3e972b44.chunk.js.map