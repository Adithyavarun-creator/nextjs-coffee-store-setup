(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(8510)}])},8510:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=(t(906),t(960));function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}n.default=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsx)(o.ZP,{children:(0,r.jsx)(n,c({},t))})}},960:function(e,n,t){"use strict";t.d(n,{xf:function(){return f},Lp:function(){return i},oj:function(){return a}});var r=t(5893),o=t(7294);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}var f=(0,o.createContext)(),i="SET_LAT_LONG",a="SET_COFFEE_STORES",l=function(e,n){return n.type===i?c({},e,{latLong:n.payload.latLong}):n.type===a?c({},e,{coffeeStores:n.payload.coffeeStores}):e};n.ZP=function(e){var n=e.children,t=(0,o.useReducer)(l,{latLong:"",coffeeStores:[]}),u=t[0],c=t[1];return(0,r.jsx)(f.Provider,{value:{state:u,dispatch:c},children:n})}},906:function(){}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(387)}));var t=e.O();_N_E=t}]);