(this["webpackJsonpjs-weather"]=this["webpackJsonpjs-weather"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"apiKey":"b16976b473b64c6ca13200250210411"}')},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),r=c(7),n=c.n(r),i=(c(15),c(3)),d=c(9),j=c(4),o=c(8),l=c(1),h=function(e){switch(e.dir){case"N":case"NNE":return Object(l.jsxs)("div",{className:"arrow",children:[Object(l.jsx)(j.a,{}),e.speed," km/h"]});case"NE":case"ENE":return Object(l.jsxs)("div",{className:"arrow",children:[Object(l.jsx)(j.b,{}),e.speed," km/h"]});case"NW":case"NNW":return Object(l.jsxs)("div",{className:"arrow",children:[Object(l.jsx)(j.c,{}),e.speed," km/h"]});case"E":case"ESE":return Object(l.jsxs)("div",{className:"arrow",children:[Object(l.jsx)(j.d,{}),e.speed," km/h"]});case"W":case"WNW":return Object(l.jsxs)("div",{className:"arrow",children:[Object(l.jsx)(j.e,{}),e.speed," km/h"]});case"SE":case"SSE":return Object(l.jsxs)("div",{className:"arrow",children:[Object(l.jsx)(j.g,{}),e.speed," km/h"]});case"SW":case"WSW":return Object(l.jsxs)("div",{className:"arrow",children:[Object(l.jsx)(j.h,{}),e.speed," km/h"]});case"S":case"SSW":return Object(l.jsxs)("div",{className:"arrow",children:[Object(l.jsx)(j.f,{}),e.speed," km/h"]});default:return Object(l.jsxs)("div",{className:"arrow",children:[Object(l.jsx)(o.a,{}),e.speed," km/h"]})}},b=function(e){return Object(l.jsxs)("div",{className:"day widget ".concat(e.style),children:[Object(l.jsx)("div",{className:"weekDay",children:e.day}),Object(l.jsxs)("div",{className:"localTime",children:["As for ",e.weather.location.localtime," local time."]}),Object(l.jsxs)("div",{className:"city",children:[Object(l.jsx)(d.a,{}),e.weather.location.name]}),Object(l.jsx)("div",{className:"wind",children:Object(l.jsx)(h,{dir:e.weather.current.wind_dir,speed:e.weather.current.wind_kph})}),Object(l.jsxs)("div",{className:"conditions",children:[Object(l.jsx)("div",{className:"icon",children:Object(l.jsx)("img",{src:"http:".concat(e.weather.current.condition.icon),alt:e.weather.current.condition.text,className:"image"})}),Object(l.jsxs)("div",{className:"temperature",children:[e.weather.current.temp_c,"\xb0C"]}),Object(l.jsx)("div",{className:"description",children:e.weather.current.condition.text})]})]})},u=function(e){return Object(l.jsxs)("div",{className:"general widget",children:[Object(l.jsxs)("div",{className:"feelslike",children:["Feels like: ",e.weather.current.feelslike_c,"\xb0C"]}),Object(l.jsxs)("div",{className:"humidity",children:["Humidity: ",e.weather.current.humidity,"%"]}),Object(l.jsxs)("div",{className:"pressure",children:["Pressure: ",e.weather.current.pressure_mb," hPa"]}),Object(l.jsxs)("div",{className:"followingdays",children:[Object(l.jsxs)("div",{className:"dayoverview",children:[Object(l.jsx)("div",{className:"dayname",children:"Today"}),Object(l.jsx)("img",{src:"https:".concat(e.weather.forecast.forecastday[0].day.condition.icon),alt:"{props.weather.forecast.forecastday[0].day.condition.icon}"}),e.weather.forecast.forecastday[0].day.maxtemp_c," \xb0C"]}),Object(l.jsxs)("div",{className:"dayoverview",children:[Object(l.jsx)("div",{className:"dayname",children:e.days[1]}),Object(l.jsx)("img",{src:"https:".concat(e.weather.forecast.forecastday[1].day.condition.icon),alt:"{props.weather.forecast.forecastday[1].day.condition.icon}"}),e.weather.forecast.forecastday[1].day.maxtemp_c," \xb0C"]}),Object(l.jsxs)("div",{className:"dayoverview",children:[Object(l.jsx)("div",{className:"dayname",children:e.days[2]}),Object(l.jsx)("img",{src:"https:".concat(e.weather.forecast.forecastday[2].day.condition.icon),alt:"{props.weather.forecast.forecastday[2].day.condition.icon}"}),e.weather.forecast.forecastday[2].day.maxtemp_c," \xb0C"]})]})]})},O=c(5),m=function(e){var t=e.setStyle,c=e.setDay,s=e.weather,r=e.children,n=s.current.condition.code,i=Object(O.a)(new Date(s.location.localtime),"EEEE"),d=s.current.condition.icon.substr("//cdn.weatherapi.com/weather/64x64/".length);return Object(a.useEffect)((function(){if("day"===d)switch(n){case 1e3:t("clearday");break;case 1003:case 1006:t("cloudday");break;case 1009:case 1030:t("heavycloudday");break;default:t("elseday")}else switch(n){case 1e3:t("clearnight");break;case 1003:case 1006:t("cloudnight");break;case 1009:case 1030:t("heavycloudnight");break;default:t("elsenight")}c(i)}),[n,t,i,c,d]),Object(l.jsx)(l.Fragment,{children:r})},x=function(e){var t=e.weather,c=e.setForecast,s=e.children;return Object(a.useEffect)((function(){var e=new Date(t.location.localtime),a=Object(O.a)(e,"EEEE"),s=e.setDate(e.getDate()+1),r=Object(O.a)(s,"EEEE"),n=e.setDate(e.getDate()+1),i=Object(O.a)(n,"EEEE");c([a,r,i])}),[t.location.localtime,c]),Object(l.jsx)(l.Fragment,{children:s})},w=function(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),s=c[0],r=c[1],n=Object(a.useState)(""),d=Object(i.a)(n,2),j=d[0],o=d[1],h=Object(a.useState)([]),O=Object(i.a)(h,2),w=O[0],y=O[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(m,{weather:e.weather,setStyle:r,setDay:o,children:Object(l.jsx)(b,{weather:e.weather,style:s,day:j})}),Object(l.jsx)(x,{weather:e.weather,setForecast:y,children:Object(l.jsx)(u,{weather:e.weather,days:w})})]})},y=function(e){var t=e.validation,c=e.weather;return c?Object(l.jsx)(w,{weather:c}):t?Object(l.jsx)(l.Fragment,{}):Object(l.jsx)("span",{children:"Please wait"})},v=function(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),s=c[0],r=c[1];return Object(l.jsx)("div",{className:"init",children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onUserInput(s),r("")},children:[Object(l.jsx)("label",{htmlFor:"city",children:"Enter the city:"}),Object(l.jsx)("input",{id:"city",value:s,onChange:function(e){r(e.target.value)}}),Object(l.jsx)("button",{children:"Enter"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"validation",children:e.validation})]})})},f=function(e){return Object(l.jsx)(l.Fragment,{children:e.children})},p=c(10),N=function(){var e=p.apiKey,t=Object(a.useState)(""),c=Object(i.a)(t,2),s=c[0],r=c[1],n=Object(a.useState)(null),d=Object(i.a)(n,2),j=d[0],o=d[1],h=Object(a.useState)(null),b=Object(i.a)(h,2),u=b[0],O=b[1];return Object(a.useEffect)((function(){s&&fetch("https://api.weatherapi.com/v1/forecast.json?key=".concat(e,"&q=").concat(s,"&days=3")).then((function(e){return e.json()})).then((function(e){e.current?(o(e),O(null),console.log(e)):O("Invalid city")}))}),[s,e]),Object(l.jsxs)(f,{children:[Object(l.jsx)(v,{onUserInput:r,validation:u}),s&&Object(l.jsx)(y,{weather:j,validation:u})]})};n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3490d6d0.chunk.js.map