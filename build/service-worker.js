"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/wxpurchase/wxcenter/build/index.html","1c43efe216913a053a15ee3076ec3cf4"],["/wxpurchase/wxcenter/build/static/css/main.c44b0bb7.css","c44b0bb71e486eb1e68aae54082a7856"],["/wxpurchase/wxcenter/build/static/js/app.f90a0b19.chunk.js","0e5e20ea36c50572a2c1017495878655"],["/wxpurchase/wxcenter/build/static/js/main.fc8183dd.js","960bcc2f938a00a780f61ab9ab85c98f"],["/wxpurchase/wxcenter/build/static/media/400.0a84a820.png","0a84a820102045f4b1c0846d00411372"],["/wxpurchase/wxcenter/build/static/media/404.61fdcf1d.svg","61fdcf1d2d67c3813c3d1573aa771049"],["/wxpurchase/wxcenter/build/static/media/Bitmap@2x.fb6e0fc2.png","fb6e0fc2c85ec59bee8aa59accf07689"],["/wxpurchase/wxcenter/build/static/media/buyinfo.f35f0b62.png","f35f0b62c7ef5f85f1863114eb732e6a"],["/wxpurchase/wxcenter/build/static/media/empty@2x.693c93c9.png","693c93c9061b0c2fcfc2145467de4b8f"],["/wxpurchase/wxcenter/build/static/media/iconfont.386120f1.ttf","386120f196a532bc5cde3b52997b1772"],["/wxpurchase/wxcenter/build/static/media/iconfont.b24ec99c.svg","b24ec99c2915b567432472d3c6ee7143"],["/wxpurchase/wxcenter/build/static/media/iconfont.b2915389.woff","b2915389e5d8f4a10a5c526a907c0f0d"],["/wxpurchase/wxcenter/build/static/media/iconfont.facfb4c5.eot","facfb4c59cbf6137813e48ec8c41bc84"],["/wxpurchase/wxcenter/build/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/wxpurchase/wxcenter/build/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/wxpurchase/wxcenter/build/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/wxpurchase/wxcenter/build/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,c,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,n),t=urlsToCacheKeys.has(c));var a="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(a,self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});