(this["webpackJsonpjs-weatherr"]=this["webpackJsonpjs-weatherr"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),r=c(7),n=c.n(r),i=(c(14),c(3)),d=c(9),j=c(4),l=c(8),o=c(1),h=function(e){switch(e.dir){case"N":case"NNE":return Object(o.jsxs)("div",{className:"arrow",children:[Object(o.jsx)(j.a,{}),e.speed," km/h"]});case"NE":case"ENE":return Object(o.jsxs)("div",{className:"arrow",children:[Object(o.jsx)(j.b,{}),e.speed," km/h"]});case"NW":case"NNW":return Object(o.jsxs)("div",{className:"arrow",children:[Object(o.jsx)(j.c,{}),e.speed," km/h"]});case"E":case"ESE":return Object(o.jsxs)("div",{className:"arrow",children:[Object(o.jsx)(j.d,{}),e.speed," km/h"]});case"W":case"WNW":return Object(o.jsxs)("div",{className:"arrow",children:[Object(o.jsx)(j.e,{}),e.speed," km/h"]});case"SE":case"SSE":return Object(o.jsxs)("div",{className:"arrow",children:[Object(o.jsx)(j.g,{}),e.speed," km/h"]});case"SW":case"WSW":return Object(o.jsxs)("div",{className:"arrow",children:[Object(o.jsx)(j.h,{}),e.speed," km/h"]});case"S":case"SSW":return Object(o.jsxs)("div",{className:"arrow",children:[Object(o.jsx)(j.f,{}),e.speed," km/h"]});default:return Object(o.jsxs)("div",{className:"arrow",children:[Object(o.jsx)(l.a,{}),e.speed," km/h"]})}},b=function(e){return Object(o.jsxs)("div",{className:"day widget ".concat(e.style),children:[Object(o.jsx)("div",{className:"weekDay",children:e.day}),Object(o.jsxs)("div",{className:"localTime",children:["As for ",e.weather.location.localtime," local time."]}),Object(o.jsxs)("div",{className:"city",children:[Object(o.jsx)(d.a,{}),e.weather.location.name]}),Object(o.jsx)("div",{className:"wind",children:Object(o.jsx)(h,{dir:e.weather.current.wind_dir,speed:e.weather.current.wind_kph})}),Object(o.jsxs)("div",{className:"conditions",children:[Object(o.jsx)("div",{className:"icon",children:Object(o.jsx)("img",{src:"http:".concat(e.weather.current.condition.icon),alt:e.weather.current.condition.text,className:"image"})}),Object(o.jsxs)("div",{className:"temperature",children:[e.weather.current.temp_c,"\xb0C"]}),Object(o.jsx)("div",{className:"description",children:e.weather.current.condition.text})]})]})},u=function(e){return Object(o.jsxs)("div",{className:"general widget",children:[Object(o.jsxs)("div",{className:"feelslike",children:["Feels like: ",e.weather.current.feelslike_c,"\xb0C"]}),Object(o.jsxs)("div",{className:"humidity",children:["Humidity: ",e.weather.current.humidity,"%"]}),Object(o.jsxs)("div",{className:"pressure",children:["Pressure: ",e.weather.current.pressure_mb," hPa"]}),Object(o.jsxs)("div",{className:"followingdays",children:[Object(o.jsxs)("div",{className:"dayoverview",children:[Object(o.jsx)("div",{className:"dayname",children:"Today"}),Object(o.jsx)("img",{src:"https:".concat(e.weather.forecast.forecastday[0].day.condition.icon),alt:"{props.weather.forecast.forecastday[0].day.condition.icon}"}),e.weather.forecast.forecastday[0].day.maxtemp_c," \xb0C"]}),Object(o.jsxs)("div",{className:"dayoverview",children:[Object(o.jsx)("div",{className:"dayname",children:e.days[1]}),Object(o.jsx)("img",{src:"https:".concat(e.weather.forecast.forecastday[1].day.condition.icon),alt:"{props.weather.forecast.forecastday[1].day.condition.icon}"}),e.weather.forecast.forecastday[1].day.maxtemp_c," \xb0C"]}),Object(o.jsxs)("div",{className:"dayoverview",children:[Object(o.jsx)("div",{className:"dayname",children:e.days[2]}),Object(o.jsx)("img",{src:"https:".concat(e.weather.forecast.forecastday[2].day.condition.icon),alt:"{props.weather.forecast.forecastday[2].day.condition.icon}"}),e.weather.forecast.forecastday[2].day.maxtemp_c," \xb0C"]})]})]})},O=c(5),m=function(e){var t=e.setStyle,c=e.setDay,s=e.weather,r=e.children,n=s.current.condition.code,i=Object(O.a)(new Date(s.location.localtime),"EEEE"),d=s.current.condition.icon.substr("//cdn.weatherapi.com/weather/64x64/".length);return Object(a.useEffect)((function(){if("day"===d)switch(n){case 1e3:t("clearday");break;case 1003:case 1006:t("cloudday");break;case 1009:case 1030:t("heavycloudday");break;default:t("elseday")}else switch(n){case 1e3:t("clearnight");break;case 1003:case 1006:t("cloudnight");break;case 1009:case 1030:t("heavycloudnight");break;default:t("elsenight")}c(i)}),[n,t,i,c,d]),Object(o.jsx)(o.Fragment,{children:r})},x=function(e){var t=e.weather,c=e.setForecast,s=e.children;return Object(a.useEffect)((function(){var e=new Date(t.location.localtime),a=Object(O.a)(e,"EEEE"),s=e.setDate(e.getDate()+1),r=Object(O.a)(s,"EEEE"),n=e.setDate(e.getDate()+1),i=Object(O.a)(n,"EEEE");c([a,r,i])}),[t.location.localtime,c]),Object(o.jsx)(o.Fragment,{children:s})},w=function(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),s=c[0],r=c[1],n=Object(a.useState)(""),d=Object(i.a)(n,2),j=d[0],l=d[1],h=Object(a.useState)([]),O=Object(i.a)(h,2),w=O[0],v=O[1];return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(m,{weather:e.weather,setStyle:r,setDay:l,children:Object(o.jsx)(b,{weather:e.weather,style:s,day:j})}),Object(o.jsx)(x,{weather:e.weather,setForecast:v,children:Object(o.jsx)(u,{weather:e.weather,days:w})})]})},v=function(e){var t=e.validation,c=e.weather;return c?Object(o.jsx)(w,{weather:c}):t?Object(o.jsx)(o.Fragment,{}):Object(o.jsx)("span",{children:"Please wait"})},y=function(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),s=c[0],r=c[1];return Object(o.jsx)("div",{className:"init",children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onUserInput(s),r("")},children:[Object(o.jsx)("label",{htmlFor:"city",children:"Enter the city:"}),Object(o.jsx)("input",{id:"city",value:s,onChange:function(e){r(e.target.value)}}),Object(o.jsx)("button",{children:"Enter"}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"validation",children:e.validation})]})})},f=function(e){return Object(o.jsx)(o.Fragment,{children:e.children})},p=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(null),n=Object(i.a)(r,2),d=n[0],j=n[1],l=Object(a.useState)(null),h=Object(i.a)(l,2),b=h[0],u=h[1];return Object(a.useEffect)((function(){c&&fetch("https://api.weatherapi.com/v1/forecast.json?key=".concat("b16976b473b64c6ca13200250210411","&q=").concat(c,"&days=3")).then((function(e){return e.json()})).then((function(e){e.current?(j(e),u(null),console.log(e)):u("Invalid city")}))}),[c]),Object(o.jsxs)(f,{children:[Object(o.jsx)(y,{onUserInput:s,validation:b}),c&&Object(o.jsx)(v,{weather:d,validation:b})]})};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.818b546b.chunk.js.map