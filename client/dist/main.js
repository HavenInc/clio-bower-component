!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){t.exports='<div ng-if="$ctrl.evt.visibility == 1 || $ctrl.admin" class="row">\n   <div class="voyage-col col-xs-1">\n     <div class="voyage-segment" ng-class="$ctrl.segtop" >\n         <div class="circle">\n         </div>\n      </div>\n      <div class="voyage-segment" ng-class="$ctrl.segbottom">\n      </div>\n   </div>\n   <div class="col-xs-9">\n      <div>\n         <div>\n            <span class="main-text">{{ $ctrl.evt.providerStatus }}</span>\n         </div>\n         <div>\n           <span class="sub-text"><br/>{{ $ctrl.evt.providerLocation }} – {{ $ctrl.date }}</span>\n         </div>\n      <hr />\n      </div>\n   </div>\n   <div ng-if="$ctrl.admin" class="col-xs-2">\n     <div ng-if="$ctrl.evt.visibility == 1" class="toggle-on-icon" ng-click="$ctrl.handleSwitch()"></div>\n     <div ng-if="$ctrl.evt.visibility != 1" class="toggle-off-icon" ng-click="$ctrl.handleSwitch()"></div>\n   </div>\n</div>\n'},function(t,e){t.exports='<div class="col-md-6" ng-controller="TrackAndTraceCtrl as ctrl">\n  <div class="tracking-history-container" ng-if="ctrl.getAdminMode() || ctrl.getNumContainersOnTime() > 0">\n      <div class="tracking-history-header label-bold">\n         <span>CONTAINERS</span>\n         <span class="status-item-icon check-circle-icon" />\n           <span tooltip="{{ ctrl.getNumContainersOnTime() + \' containers for this shipment are on time.\' }}">\n             {{ ctrl.getNumContainersOnTime() }}\n           </span>\n         <span class="status-item-icon warning-circle-icon status-item-count-is-zero" />\n         <span>0</span>\n         <span class="status-item-icon error-circle-icon status-item-count-is-zero" />\n         <span>0</span>\n      </div>\n      <div class="row">\n         <section class="accordion">\n            <ul>\n               <li ng-repeat="container in ctrl.containers track by $index">\n                  <tracked-container-status-item \n                    container="container" \n                    commodity="ctrl.cargoCommodityType" \n                    toggle="ctrl.toggle($index)" \n                    admin="ctrl.getAdminMode()"\n                    handle-switch="ctrl.handleVisibilitySwitch(container)"          \n                    icon="ctrl.icon" />\n                  <hr />\n               </li>\n            </ul>\n         </section>\n      </div>\n   </div>\n</div>\n'},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,l=0,d=[],u=n(21);function g(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function f(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(t.insertAt.before,n);n.insertBefore(e,i)}}function C(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function h(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return m(e,t.attrs),f(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var a=l++;n=c||(c=h(e)),r=w.bind(null,n,a,!1),i=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),f(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),i=function(){C(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){C(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return g(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}t&&g(p(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var E,k=(E=[],function(t,e){return E[t]=e,E.filter(Boolean).join("\n")});function w(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=k(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e,n){n(5),n(6),n(7),n(8),t.exports=n(26)},function(t,e,n){angular.module("clio",["ui.router","clioLBServices","ngSanitize","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("tracked-container-status-item",{url:"/tracked-container-status-item/:id",template:'<section ng-controller="TrackAndTraceCtrl as ctrl" class="accordion col-md-6"><ul><li><tracked-container-status-item container="ctrl.containers[0]" commodity="\'bubble gum\'" toggle="ctrl.toggle(0)" /></li></ul></section>'}).state("tracked-event-item",{url:"/tracked-event-item/:id",template:'<div ng-controller="TrackAndTraceCtrl as ctrl"><tracked-event-item evt="ctrl.containers[0].trackedEvents[0]" date="ctrl.getDateOfInterest(evt)" /></div>',template:n(0),controller:"TrackAndTraceCtrl"}).state("tracked-event-list",{url:"/tracked-event-list/:id",template:"<tracked-event-list></tracked-event-list>"}).state("tracked-container-list",{url:"/tracked-container-list/:id",template:n(1),controller:"TrackAndTraceCtrl"}),e.otherwise("tracked-event-list")}]).run(["$rootScope","$state",function(t,e){t.$on("$locationChangeStart",function(t,e,n){})}])},function(t,e,n){t.exports===e&&(t.exports="clioLBServices"),function(t,e,n){var r=e.module("clioLBServices",["ngResource"]);r.factory("StatusCode",["LoopBackResource","$injector","$q",function(t,e,n){return t("/api/StatusCode/:id",{id:"@id"},{find:{isArray:!0,url:"/api/StatusCodes",method:"GET"}})}]),r.factory("TrackedEvent",["LoopBackResource","$injector","$q",function(t,e,n){var r=t("/api/TrackedEvents/:id",{id:"@id"},{updateAttributes:{url:"/api/TrackedEvents/:id",method:"PUT"}});return r.modelName="TrackedEvent",r}]),r.factory("TrackedOrderContainer",["LoopBackResource","$injector","$q",function(t,e,n){var r=t("/api/TrackedOrderContainer/:id",{id:"@id"},{updateAttributes:{url:"/api/TrackedOrderContainers/:id",method:"PUT"}});return r.modelName="TrackedOrderContainer",r}]),r.factory("TrackedOrder",["LoopBackResource","$injector","$q",function(t,e,n){return t("/api/TrackedOrders/:id",{id:"@id"},{exists:{url:"/api/TrackedOrders/:id/exists",method:"GET"},findById:{url:"/api/TrackedOrders/:id",method:"GET"},find:{isArray:!0,url:"/api/TrackedOrders",method:"GET"},findOne:{url:"/api/TrackedOrders/findOne",method:"GET"},count:{url:"/api/TrackedOrders/count",method:"GET"}})}]),r.provider("LoopBackResource",function(){this.$get=["$resource",function(t){return function(e,n,r){var i=t(e,n,r);return i.prototype.$save=function(t,e){var n=i.upsert.call(this,{},this,t,e);return n.$promise||n},i}}]})}(window,window.angular)},function(t,e){g_statusCodes=[],angular.module("clio").factory("TrackAndTraceSvc",["$q","TrackedOrder","StatusCode","TrackedOrderContainer","TrackedEvent",function(t,e,n,r,i){return n.find().$promise.then(function(t){g_statusCodes=t}),{_cachedOrdersToContainers:new Map,_activeOrderId:0,_listeners:new Set,_externalOrderCriteria:null,_statusCodes:[],_adminMode:!1,_proteusActions:[],fetchOrders:function(){var n=this,r=t.defer();return e.find().$promise.then(function(t){!n._activeOrderId&&t&&t.length&&t[0].havenOrderId&&(t.forEach(function(t){n._cachedOrdersToContainers.set(t.havenOrderId,null)}),n.fetchByOrderId(t[0].havenOrderId)),r.resolve(t)}),r.promise},updateEvent:function(e){var n=t.defer();if(e.hasOwnProperty("visibility"))i.updateAttributes({id:e.id},{visibility:1==e.visibility?2:1}).$promise.then(function(t){e.visibility=t.visibility,n.resolve(t)});else{var o=e.trackedOrderContainers[0];r.updateAttributes({id:o.id},{visibility:1==o.visibility?2:1}).$promise.then(function(t){console.log(t),o.visibility=t.visibility,n.resolve(t)})}return n.promise},registerListener:function(t){this._listeners.add(t)},fetchByProteusOrderData:function(t){return this._externalOrderCriteria=t.criteria,this.fetchByOrderId(t.order.id)},injectProteusData:function(t){var e=this,n=t.order,r=t.admin;this.setAdminMode(!0===r),n&&(this.fetchByProteusOrderData(n),n.actions&&(this._proteusActions=[],n.actions.map(function(t){e._proteusActions.push({providerStatus:t.comments,actual:t.timestamp,visibility:1})})))},fetchByOrderId:function(n){var r=this;this._activeOrderId=n;var i=t.defer();return e.find({filter:{include:{relation:"trackedContainers",scope:{include:["trackedEvents","trackedOrderContainers"]}},where:{havenOrderId:n}}}).$promise.then(function(t){if(t.length){var e=t[0].trackedContainers;r._cachedOrdersToContainers.set(n,e),r._listeners.forEach(function(t){return t.call(null,e)})}i.resolve(t)}),i.promise},getCargoCommodityType:function(){var t=null;return this._externalOrderCriteria&&(t=this._externalOrderCriteria.commodityType),t},getStatusCodeValue:function(t){var e=0;return t>0&&(e=g_statusCodes.length?g_statusCodes[t-1].value:t),e},getActiveOrderId:function(){return this._activeOrderId},setAdminMode:function(t){this._adminMode=t},getAdminMode:function(){return this._adminMode},getProteusActions:function(){return this._proteusActions}}}])},function(t,e,n){"use strict";n.r(e);n(9),n(22);angular.module("clio").controller("TrackAndTraceCtrl",function(t,e,n,r,i){var o=this,a=this;a.containers=[],a.cargoCommodityType=null,a.getAdminMode=function(){return i.getAdminMode()},a.fetchContainersHandler=function(t){for(var e=new Map,n=0;n<t.length;n++){var r=t[n],o=e.get(r.containerId);r&&o&&o.trackedEvents&&r.trackedEvents&&(new Date(o.trackedEvents[0].updatedAt).getTime,new Date(r.trackedEvents[0].updatedAt).getTime),e.set(r.containerId,r)}a.containers=Array.from(e.values()),a.containers.some(function(t){return t.containerId.length>3})&&(a.containers=a.containers.filter(function(t){return t.containerId.length>3})),a.containers.map(function(t){return t.open=!1});for(var s=0;s<a.containers.length;s++){for(var c=a.containers[s],l=(c.trackedEvents[0],[]),d=0;d<c.trackedEvents.length;d++){var u=c.trackedEvents[d];if(u.actual){var g=new Date(u.actual).getTime();0==l.length||g<new Date(l[0].actual).getTime()?l.push(u):l.unshift(u)}}var p=c.trackedEvents.length?c.trackedEvents[0].statusCode:1;l.length&&(p=l[0].statusCode),2==p&&l.length?c.statusValue=l[0].providerStatus:c.statusValue=i.getStatusCodeValue(p)}a.cargoCommodityType=i.getCargoCommodityType()},a.icon="check-circle-icon",a.toggle=function(t){a.containers[t].open=!a.containers[t].open},a.handleVisibilitySwitch=function(t){i.updateEvent(t)},a.getNumContainersOnTime=function(){var t=0;return o.containers&&o.containers.length&&(t=o.containers.reduce(function(t,e){return t+(1==e.trackedOrderContainers[0].visibility?1:0)},0)),t},a.getDateOfInterest=function(t){var e="TIME UNKNOWN";return t&&t.planned&&(e=new Date(t.planned).toString()),t&&t.actual&&(e=new Date(t.actual).toString()),e},a.getPrimaryEventList=function(){for(var t=[],e=0;e<a.containers.length;e++){var n=a.containers[e];1==n.trackedOrderContainers[0].visibility&&n.trackedEvents.length>t.length&&(t=n.trackedEvents)}return(t=i.getProteusActions().concat(t)).sort(function(t,e){var n=new Date(a.getDateOfInterest(t)).getTime(),r=new Date(a.getDateOfInterest(e)).getTime();return n>r?1:n<r?-1:0})},a.getDateClass=function(t){var e="planned-date";return t&&t.actual&&(e=""),e},a.getSegmentClassTop=function(t,e,n){var r=e?"segment-hidden":"";return t&&!t.actual?r="segment-future":n&&!n.actual&&(r="segment-current"),r},a.getSegmentClassBottom=function(t,e,n){var r="";return t&&!t.actual?r="segment-future":n&&!n.actual&&(r="segment-future"),r=e?"segment-hidden":r},i.registerListener(a.fetchContainersHandler),i.fetchByOrderId(i.getActiveOrderId())}).component("trackedEventList",{binding:{admin:"<"},template:n(24)}).component("trackedContainerList",{binding:{admin:"<",getNumContainersOnTime:"&"},template:n(1)}).component("trackedEventItem",{bindings:{admin:"<",handleSwitch:"&",evt:"<",date:"<",segtop:"<",segbottom:"<"},template:n(0)}).component("trackedContainerStatusItem",{bindings:{admin:"<",handleSwitch:"&",container:"<",commodity:"<",icon:"<",toggle:"&"},template:n(25)})},function(t,e,n){var r=n(10);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(2)(!1);var r=n(11),i=r(n(12)),o=r(n(13)),a=r(n(14)),s=r(n(15)),c=r(n(16)),l=r(n(17)),d=r(n(18)),u=r(n(19)),g=r(n(20));e.push([t.i,".toggle-on-icon {\n  background: url("+i+") no-repeat;\n  width: 36px;\n  height: 46px;\n  cursor: pointer;\n}\n.toggle-off-icon {\n  background: url("+o+") no-repeat;\n  width: 36px;\n  height: 46px;\n  cursor: pointer;\n}\n.check-circle-icon {\n  background: url("+a+") no-repeat;\n}\n.error-circle-icon {\n  background: url("+s+") no-repeat;\n}\n.warning-circle-icon {\n  background: url("+c+") no-repeat;\n}\n.arrow-right-icon {\n  background: url("+l+") no-repeat;\n}\n.arrow-down-icon {\n  background: url("+d+") no-repeat;\n}\n.ship-icon {\n  background: url("+u+") no-repeat;\n}\n.truck-icon {\n  background: url("+g+") no-repeat;\n}\n.status-item-icon {\n  padding-left: 1.7em;\n  margin-left: 1.7em;\n}\n.status-item-count-is-zero {\n  opacity: 0.5;\n}\nsection.accordion ul {\n  padding-left: 0;\n}\nsection.accordion ul li {\n  list-style: none;\n}\nsection.accordion i {\n  user-select: none;\n  border: solid black;\n  border-width: 0 1px 1px 0;\n  display: inline-block;\n  padding: 3px;\n  margin-right: 0.5em;\n}\n.accordion-header {\n  cursor: pointer;\n  padding-top: 1em;\n}\n.accordion-header:hover {\n  background-color: #FAFAFA;\n}\n.accordion-body .row {\n  margin-left: 2.5em;\n}\n.accordion-body hr {\n  margin: 1em 0 0 2em;\n}\nhr {\n  margin-bottom: 0;\n}\n.mt-1_5em {\n  margin-top: 1.5em;\n}\n.mt-1em {\n  margin-top: 1em;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e){t.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='35px' height='18px' viewBox='0 0 35 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EButton/Toggle/On%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='7.-Internal-Admin-Control' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Tracking-changes-landing-2' transform='translate(-751.000000, -1197.000000)'%3E %3Cg id='Shipment-Tracking' transform='translate(164.000000, 738.000000)'%3E %3Cg id='row' transform='translate(1.000000, 446.000000)'%3E %3Cg id='Button/Toggle/On' transform='translate(586.000000, 13.000000)'%3E %3Crect id='Rectangle-6' fill='%233E886B' x='0' y='0' width='35' height='18' rx='9'%3E%3C/rect%3E %3Cellipse id='Selector' stroke='%23DEDEDE' stroke-width='1' fill='%23FFFFFF' cx='26.7105263' cy='9' rx='7.78947368' ry='8.5'%3E%3C/ellipse%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\""},function(t,e){t.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='35px' height='18px' viewBox='0 0 35 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EButton/Toggle/On%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='7.-Internal-Admin-Control' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Tracking-changes-landing-2' transform='translate(-751.000000, -1099.000000)' stroke='%23DEDEDE'%3E %3Cg id='Shipment-Tracking' transform='translate(164.000000, 738.000000)'%3E %3Cg id='row' transform='translate(1.000000, 348.000000)'%3E %3Cg id='Button/Toggle/Off' transform='translate(586.000000, 13.000000)'%3E %3Crect id='Rectangle-6' fill='%23EAEAEA' x='0.5' y='0.5' width='34' height='17' rx='8.5'%3E%3C/rect%3E %3Cellipse id='Selector' fill='%23FFFFFF' cx='8.28947368' cy='9' rx='7.78947368' ry='8.5'%3E%3C/ellipse%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\""},function(t,e){t.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EGroup 4%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M13.65425,2.33925 C10.53425,-0.77975 5.45825,-0.77975 2.33925,2.33925 C-0.77975,5.45825 -0.77975,10.53325 2.33925,13.65325 C3.89925,15.21225 5.94725,15.99125 7.99625,15.99125 C10.04525,15.99125 12.09425,15.21225 13.65425,13.65325 C16.77325,10.53325 16.77325,5.45825 13.65425,2.33925' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='3.-Mobile-and-tablet' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Mobile-containers-open' transform='translate(-64.000000, -388.000000)'%3E %3Cg id='content' transform='translate(-1.000000, 0.000000)'%3E %3Cg id='Containers' transform='translate(1.000000, 280.000000)'%3E %3Cg id='row' transform='translate(24.000000, 106.000000)'%3E %3Cg id='Icons/Small/Error' transform='translate(40.000000, 2.000000)'%3E %3Cg id='Group-4'%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cuse id='Fill-1' fill='%233E886B' xlink:href='%23path-1'%3E%3C/use%3E %3Cpolyline id='white-sm-check' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' mask='url(%23mask-2)' points='4 9.05937351 6.90171537 11.5029233 12.0735329 4.78018284'%3E%3C/polyline%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\""},function(t,e){t.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EIcons/Small/Error%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M0,8 C0,3.5890588 3.58819729,0 8,0 C12.4118027,0 16,3.5890588 16,8 C16,12.4109412 12.4118027,16 8,16 C3.58819729,16 0,12.4109412 0,8 Z M8,13 C8.55102041,13 9,12.5516537 9,11.9995917 C9,11.4483463 8.55102041,11 8,11 C7.44897959,11 7,11.4483463 7,11.9995917 C7,12.5516537 7.44897959,13 8,13 Z M7,4.04139117 L7,8.95860883 C7,9.53253108 7.44888889,10 8,10 C8.55111111,10 9,9.53253108 9,8.95860883 L9,4.04139117 C9,3.46746892 8.55111111,3 8,3 C7.44888889,3 7,3.46746892 7,4.04139117 Z' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='3.-Mobile-and-tablet' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Mobile-containers-open' transform='translate(-324.000000, -346.000000)'%3E %3Cg id='content' transform='translate(-1.000000, 0.000000)'%3E %3Cg id='Containers' transform='translate(1.000000, 280.000000)'%3E %3Cg id='status' transform='translate(231.000000, 64.000000)'%3E %3Cg id='delayed' transform='translate(93.000000, 0.000000)'%3E %3Cg id='Icons/Small/Error' transform='translate(0.000000, 2.000000)'%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cuse id='shape' fill='%23DA2954' fill-rule='evenodd' xlink:href='%23path-1'%3E%3C/use%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\""},function(t,e){t.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EGroup 2%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M6.88565843,3.72530934 C7.44463297,2.75744476 8.55617181,2.759016 9.1142389,3.72530934 L12.780537,10.0735056 C13.338906,11.0403217 12.782848,12 11.6662467,12 L4.33365059,12 C3.21523509,12 2.66189555,11.038756 3.21936036,10.0735056 L6.88565843,3.72530934 Z M8,10.6153846 C8.39448911,10.6153846 8.71428571,10.3054279 8.71428571,9.92307692 C8.71428571,9.54072594 8.39448911,9.23076923 8,9.23076923 C7.60551089,9.23076923 7.28571429,9.54072594 7.28571429,9.92307692 C7.28571429,10.3054279 7.60551089,10.6153846 8,10.6153846 Z M7.619424,8.35676457 C7.63236577,8.45711304 7.73044259,8.53846154 7.82310159,8.53846154 L8.17689841,8.53846154 C8.27644467,8.53846154 8.36744629,8.45857033 8.380576,8.35676457 L8.62416349,6.46802462 C8.67393662,6.08209143 8.39723941,5.76923077 8,5.76923077 C7.60551089,5.76923077 7.32668311,6.08689675 7.37583651,6.46802462 L7.619424,8.35676457 Z' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='3.-Mobile-and-tablet' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Mobile-containers-open' transform='translate(-281.000000, -346.000000)'%3E %3Cg id='content' transform='translate(-1.000000, 0.000000)'%3E %3Cg id='Containers' transform='translate(1.000000, 280.000000)'%3E %3Cg id='status' transform='translate(231.000000, 64.000000)'%3E %3Cg id='possible-delay' transform='translate(50.000000, 0.000000)'%3E %3Cg id='Group-2' transform='translate(0.000000, 2.000000)'%3E %3Ccircle id='Oval' fill='%23FF9600' fill-rule='nonzero' cx='8' cy='8' r='8'%3E%3C/circle%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cuse id='shape-primary' fill='%23FFFFFF' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\""},function(t,e){t.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='7px' height='10px' viewBox='0 0 7 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EIcons/Small/Dropdown Arrow Small%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M6.71957304,10.9816593 L3.37841082,6.65760701 C2.6710333,5.74213594 2.98492971,5 4.07358348,5 L11.9272032,5 C13.018514,5 13.326463,5.74639422 12.6223759,6.65760701 L9.28121364,10.9816593 C8.57383612,11.8971304 7.42366022,11.8928721 6.71957304,10.9816593 Z' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='4.-Upsell' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='1-Analytics' transform='translate(-806.000000, -672.000000)'%3E %3Cg id='Containers' transform='translate(777.000000, 541.000000)'%3E %3Cg id='row' transform='translate(24.000000, 126.000000)'%3E %3Cg id='Icons/Small/Dropdown-Arrow' transform='translate(8.000000, 10.000000) rotate(-90.000000) translate(-8.000000, -10.000000) translate(0.000000, 2.000000)'%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cuse id='Triangle-3-Copy-14' fill='%238D8D8D' fill-rule='evenodd' xlink:href='%23path-1'%3E%3C/use%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\""},function(t,e){t.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='10px' height='7px' viewBox='0 0 10 7' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EIcons/Small/Dropdown Arrow Small%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M6.71957304,10.9816593 L3.37841082,6.65760701 C2.6710333,5.74213594 2.98492971,5 4.07358348,5 L11.9272032,5 C13.018514,5 13.326463,5.74639422 12.6223759,6.65760701 L9.28121364,10.9816593 C8.57383612,11.8971304 7.42366022,11.8928721 6.71957304,10.9816593 Z' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='4.-Upsell' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='1-Analytics' transform='translate(-804.000000, -719.000000)'%3E %3Cg id='Containers' transform='translate(777.000000, 541.000000)'%3E %3Cg id='row' transform='translate(24.000000, 171.000000)'%3E %3Cg id='Icons/Small/Dropdown-Arrow' transform='translate(8.000000, 10.000000) rotate(-360.000000) translate(-8.000000, -10.000000) translate(0.000000, 2.000000)'%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cuse id='Triangle-3-Copy-14' fill='%238D8D8D' fill-rule='evenodd' xlink:href='%23path-1'%3E%3C/use%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\""},function(t,e){t.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='16px' height='9px' viewBox='0 0 16 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EIcons/Small/Ship%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M13.3608318,7.912 L13.1080388,8.139 C13.0333742,8.206 12.9395101,8.243 12.8435127,8.243 L0.216661397,8.243 C0.0939981172,8.243 -0.00413250664,8.356 0.000134042222,8.494 C0.0182668749,9.099 0.108931038,9.936 0.457721408,10.358 C0.903575763,10.897 1.09450382,11.502 1.16810179,11.805 C1.19583436,11.922 1.28969844,12 1.39849543,12 L12.9043111,12 C12.9971085,12 13.0792396,11.946 13.1197718,11.852 C13.327766,11.369 14.0733455,9.827 15.3490436,9.114 C15.8066309,8.858 15.9516936,8.313 15.997559,8.005 C16.0156918,7.885 15.9303609,7.779 15.8226305,7.779 L13.6978892,7.779 C13.5762925,7.779 13.4557625,7.826 13.3608318,7.912 L13.3608318,7.912 Z M6.29542689,5.151 L6.29542689,3.313 C6.29542689,3.14 6.18023007,3 6.03623404,3 L5.40691809,3 C5.2639887,3 5.14772524,3.14 5.14772524,3.313 L5.14772524,5.151 L2.02034493,5.151 C1.85181625,5.151 1.71635332,5.316 1.71635332,5.519 L1.71635332,6.995 C1.71635332,7.171 1.84434979,7.315 2.00327873,7.315 L12.3901919,7.315 C12.5672537,7.315 12.7101831,7.142 12.7101831,6.928 L12.7101831,5.472 C12.7101831,5.294 12.5832533,5.151 12.4243243,5.151 L6.29542689,5.151 Z' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='3.-Mobile-and-tablet' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Mobile-shipment' transform='translate(-52.000000, -907.000000)'%3E %3Cg id='Content' transform='translate(0.000000, 320.000000)'%3E %3Cg id='shipment-leg-2/3' transform='translate(0.000000, 557.000000)'%3E %3Cg transform='translate(32.000000, 16.000000)' id='icon'%3E %3Cg%3E %3Cg id='Icons/Small/Ship' transform='translate(20.000000, 11.000000)'%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cuse id='green-ship' fill='%233CB787' fill-rule='evenodd' xlink:href='%23path-1'%3E%3C/use%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\""},function(t,e){t.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='16px' height='10px' viewBox='0 0 16 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3ETruck%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='3.-Mobile-and-tablet' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Mobile-shipment' transform='translate(-52.000000, -692.000000)' fill='%23727272'%3E %3Cg id='Content' transform='translate(0.000000, 320.000000)'%3E %3Cg id='shipment-leg-1/3' transform='translate(0.000000, 303.000000)'%3E %3Cg id='shipment-leg-2/3' transform='translate(52.000000, 63.000000)'%3E %3Cg id='icon' transform='translate(0.000000, 6.000000)'%3E %3Cpath d='M15.675,4.867 L14.729,4.867 L14.076,2.57 C14.047,2.426 13.946,2.325 13.833,2.325 L11.311,2.325 L11.311,3.311 L13.032,3.311 C13.189,3.311 13.325,3.418 13.363,3.57 L13.69,4.867 L11.311,4.867 L11.311,8.483 L11.823,8.483 C11.944,9.192 12.556,9.733 13.299,9.733 C14.041,9.733 14.654,9.192 14.774,8.483 L15.675,8.483 C15.854,8.483 15.999,8.309 15.999,8.093 L15.999,5.257 C15.999,5.042 15.854,4.867 15.675,4.867 M9.922,0 L0.436,0 C0.195,0 0,0.239 0,0.533 L0,8.483 L1.064,8.483 C1.172,9.19 1.778,9.733 2.515,9.733 C3.252,9.733 3.858,9.19 3.966,8.483 L6.382,8.483 C6.49,9.19 7.096,9.733 7.833,9.733 C8.571,9.733 9.176,9.19 9.285,8.483 L10.358,8.483 L10.358,0.533 C10.358,0.239 10.162,0 9.922,0' id='Truck'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\""},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){var r=n(23);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".tracking-history-container {\n  border: 1px solid #EAEAEA;\n  background-color: white;\n}\n.tracking-history-header {\n  margin-bottom: 1.5em;\n}\n.planned-date span {\n  color: #C6C6C6;\n}\n.voyage-col {\n  height: 120px;\n}\n.voyage-segment {\n  border-right: 1px solid #34594B;\n  border-left: 2px solid #34594B;\n  position: relative;\n  margin-left: 50%;\n  margin-right: 50%;\n  height: 50%;\n}\n.segment-hidden {\n  border-color: white;\n}\n.icon-circle {\n  width: 16px;\n  height: 16px;\n  left: -8px;\n  top: -8px;\n  position: absolute;\n  top: 100%;\n  bottom: -8px;\n  margin-top: -8px;\n  z-index: 99;\n  background-color: white;\n}\n.circle {\n  background: #34594B;\n  width: 12px;\n  height: 12px;\n  left: -6px;\n  top: -6px;\n  border-radius: 50%;\n  position: absolute;\n  top: 100%;\n  bottom: -6px;\n  margin-top: -6px;\n  z-index: 99;\n}\n.col-xs-11 {\n  display: grid;\n  height: 120px;\n}\n.col-xs-11 div {\n  margin: auto 0;\n}\n.text-future {\n  color: #EAEAEA;\n}\n.segment-current {\n  border-color: #3CB787;\n}\n.segment-current div.circle {\n  background-color: #3cb787;\n}\n.segment-future {\n  border-color: #EAEAEA;\n}\n.segment-future div.circle {\n  background-color: #EAEAEA;\n}\n",""])},function(t,e){t.exports='\x3c!-- this code gets pasted into proteus/client/views/TrackAndTrace.html --\x3e\n<div class="col-md-6" ng-controller="TrackAndTraceCtrl as tntCtrl">\n  <div class="tracking-history-container">\n    <div class="tracking-history-header label-bold">\n      Tracking History\n    </div>\n\x3c!-- TODO better logic to figure out which event list to use --\x3e\n      <tracked-event-item ng-repeat="evt in tntCtrl.getPrimaryEventList()" ng-class="tntCtrl.getDateClass(evt)" \n        evt="evt"\n        admin="tntCtrl.getAdminMode()"\n        date="tntCtrl.getDateOfInterest(evt)"\n        handle-switch="tntCtrl.handleVisibilitySwitch(evt)"          \n        segtop="tntCtrl.getSegmentClassTop(evt, $first, tntCtrl.containers[tntCtrl.containers.length - 1].trackedEvents[$index + 1])"\n        segbottom="tntCtrl.getSegmentClassBottom(evt, $last, tntCtrl.containers[tntCtrl.containers.length - 1].trackedEvents[$index + 1])"\n      />\n  </div>\n</div>\n'},function(t,e){t.exports='<div ng-if="$ctrl.admin || $ctrl.container.trackedOrderContainers[0].visibility == 1"\n  class="accordion-header" ng-click="$ctrl.toggle()">\n\x3c!-- <div class="accordion-header"> --\x3e\n  <div>\n    <span ng-show="!($ctrl.container.open)" class="status-item-icon arrow-right-icon" ></span>\n    <span ng-show="$ctrl.container.open" class="status-item-icon arrow-down-icon"></span>\n    <span>\n      <span class="status-item-icon {{$ctrl.icon}}" />{{ $ctrl.container.containerId }}\n    </span>\n     <span ng-if="$ctrl.admin" style="float: right;" class="col-xs-2">\n       <div ng-if="$ctrl.container.trackedOrderContainers[0].visibility == 1" class="toggle-on-icon" ng-click="$ctrl.handleSwitch()"></div>\n       <div ng-if="$ctrl.container.trackedOrderContainers[0].visibility != 1" class="toggle-off-icon" ng-click="$ctrl.handleSwitch()"></div>\n     </span>\n  </div>\n  <div class="accordion-body" ng-if="$ctrl.container.open">\n    <div class="row mt-1em">\n      <div class="col-md-6">\n        <div class="label-sm">Container</div>\n        <div class="main-text main-text-small">{{ $ctrl.container.type }}</div>\n      </div>\n      <div class="col-md-6">\n        <div class="label-sm">Commodity</div>\n        <div class="main-text main-text-small">{{ $ctrl.commodity }}</div>\n      </div>\n    </div>\n    <div class="row mt-1_5em">\n      <div class="col-md-12">\n        <div class="label-sm">Last Recorded Status</div>\n        <div class="main-text main-text-small">{{ $ctrl.container.statusValue }}</div>\n      </div>\n    </div>\n  </div>\n  <hr class="mt-1em" />\n</div>\n'},function(t,e){angular.module("clio").controller("TestHarnessCtrl",function(t,e,n,r,i,o){o.fetchOrders().then(function(e){t.items=e,t.currentHavenOrderId=o.getActiveOrderId()}).catch(function(t){return i.error(t)}),t.cbAdminModel=o.getAdminMode(),t.state=n,t.status={isopen:!1},t.toggleDropdown=function(e){e.preventDefault(),t.status.isopen=!t.status.isopen;var n=JSON.parse(e.target.text);t.state.go(t.state.current.name,{id:n.havenOrderId},{notify:!1}),o.fetchByOrderId(n.havenOrderId),t.currentHavenOrderId=o.getActiveOrderId()},t.onCBAdminChange=function(){o.setAdminMode(!o.getAdminMode())},e.$on("$locationChangeStart",function(t,e,n){console.log("There was a state change to:",e,n);var r=location.hash.split("/");o.fetchByOrderId(r[r.length-1])})})}]);