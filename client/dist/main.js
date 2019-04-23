/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/images/arrow-down.svg":
/*!**************************************!*\
  !*** ./client/images/arrow-down.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='10px' height='7px' viewBox='0 0 10 7' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EIcons/Small/Dropdown Arrow Small%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M6.71957304,10.9816593 L3.37841082,6.65760701 C2.6710333,5.74213594 2.98492971,5 4.07358348,5 L11.9272032,5 C13.018514,5 13.326463,5.74639422 12.6223759,6.65760701 L9.28121364,10.9816593 C8.57383612,11.8971304 7.42366022,11.8928721 6.71957304,10.9816593 Z' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='4.-Upsell' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='1-Analytics' transform='translate(-804.000000, -719.000000)'%3E %3Cg id='Containers' transform='translate(777.000000, 541.000000)'%3E %3Cg id='row' transform='translate(24.000000, 171.000000)'%3E %3Cg id='Icons/Small/Dropdown-Arrow' transform='translate(8.000000, 10.000000) rotate(-360.000000) translate(-8.000000, -10.000000) translate(0.000000, 2.000000)'%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cuse id='Triangle-3-Copy-14' fill='%238D8D8D' fill-rule='evenodd' xlink:href='%23path-1'%3E%3C/use%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\\\"\"\n\n//# sourceURL=webpack:///./client/images/arrow-down.svg?");

/***/ }),

/***/ "./client/images/arrow-right.svg":
/*!***************************************!*\
  !*** ./client/images/arrow-right.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='7px' height='10px' viewBox='0 0 7 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EIcons/Small/Dropdown Arrow Small%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M6.71957304,10.9816593 L3.37841082,6.65760701 C2.6710333,5.74213594 2.98492971,5 4.07358348,5 L11.9272032,5 C13.018514,5 13.326463,5.74639422 12.6223759,6.65760701 L9.28121364,10.9816593 C8.57383612,11.8971304 7.42366022,11.8928721 6.71957304,10.9816593 Z' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='4.-Upsell' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='1-Analytics' transform='translate(-806.000000, -672.000000)'%3E %3Cg id='Containers' transform='translate(777.000000, 541.000000)'%3E %3Cg id='row' transform='translate(24.000000, 126.000000)'%3E %3Cg id='Icons/Small/Dropdown-Arrow' transform='translate(8.000000, 10.000000) rotate(-90.000000) translate(-8.000000, -10.000000) translate(0.000000, 2.000000)'%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cuse id='Triangle-3-Copy-14' fill='%238D8D8D' fill-rule='evenodd' xlink:href='%23path-1'%3E%3C/use%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\\\"\"\n\n//# sourceURL=webpack:///./client/images/arrow-right.svg?");

/***/ }),

/***/ "./client/images/check-circle.svg":
/*!****************************************!*\
  !*** ./client/images/check-circle.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EGroup 4%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M13.65425,2.33925 C10.53425,-0.77975 5.45825,-0.77975 2.33925,2.33925 C-0.77975,5.45825 -0.77975,10.53325 2.33925,13.65325 C3.89925,15.21225 5.94725,15.99125 7.99625,15.99125 C10.04525,15.99125 12.09425,15.21225 13.65425,13.65325 C16.77325,10.53325 16.77325,5.45825 13.65425,2.33925' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='3.-Mobile-and-tablet' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Mobile-containers-open' transform='translate(-64.000000, -388.000000)'%3E %3Cg id='content' transform='translate(-1.000000, 0.000000)'%3E %3Cg id='Containers' transform='translate(1.000000, 280.000000)'%3E %3Cg id='row' transform='translate(24.000000, 106.000000)'%3E %3Cg id='Icons/Small/Error' transform='translate(40.000000, 2.000000)'%3E %3Cg id='Group-4'%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cuse id='Fill-1' fill='%233E886B' xlink:href='%23path-1'%3E%3C/use%3E %3Cpolyline id='white-sm-check' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' mask='url(%23mask-2)' points='4 9.05937351 6.90171537 11.5029233 12.0735329 4.78018284'%3E%3C/polyline%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\\\"\"\n\n//# sourceURL=webpack:///./client/images/check-circle.svg?");

/***/ }),

/***/ "./client/images/error-circle.svg":
/*!****************************************!*\
  !*** ./client/images/error-circle.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EIcons/Small/Error%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M0,8 C0,3.5890588 3.58819729,0 8,0 C12.4118027,0 16,3.5890588 16,8 C16,12.4109412 12.4118027,16 8,16 C3.58819729,16 0,12.4109412 0,8 Z M8,13 C8.55102041,13 9,12.5516537 9,11.9995917 C9,11.4483463 8.55102041,11 8,11 C7.44897959,11 7,11.4483463 7,11.9995917 C7,12.5516537 7.44897959,13 8,13 Z M7,4.04139117 L7,8.95860883 C7,9.53253108 7.44888889,10 8,10 C8.55111111,10 9,9.53253108 9,8.95860883 L9,4.04139117 C9,3.46746892 8.55111111,3 8,3 C7.44888889,3 7,3.46746892 7,4.04139117 Z' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='3.-Mobile-and-tablet' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Mobile-containers-open' transform='translate(-324.000000, -346.000000)'%3E %3Cg id='content' transform='translate(-1.000000, 0.000000)'%3E %3Cg id='Containers' transform='translate(1.000000, 280.000000)'%3E %3Cg id='status' transform='translate(231.000000, 64.000000)'%3E %3Cg id='delayed' transform='translate(93.000000, 0.000000)'%3E %3Cg id='Icons/Small/Error' transform='translate(0.000000, 2.000000)'%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cuse id='shape' fill='%23DA2954' fill-rule='evenodd' xlink:href='%23path-1'%3E%3C/use%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\\\"\"\n\n//# sourceURL=webpack:///./client/images/error-circle.svg?");

/***/ }),

/***/ "./client/images/ship.svg":
/*!********************************!*\
  !*** ./client/images/ship.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='16px' height='9px' viewBox='0 0 16 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EIcons/Small/Ship%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M13.3608318,7.912 L13.1080388,8.139 C13.0333742,8.206 12.9395101,8.243 12.8435127,8.243 L0.216661397,8.243 C0.0939981172,8.243 -0.00413250664,8.356 0.000134042222,8.494 C0.0182668749,9.099 0.108931038,9.936 0.457721408,10.358 C0.903575763,10.897 1.09450382,11.502 1.16810179,11.805 C1.19583436,11.922 1.28969844,12 1.39849543,12 L12.9043111,12 C12.9971085,12 13.0792396,11.946 13.1197718,11.852 C13.327766,11.369 14.0733455,9.827 15.3490436,9.114 C15.8066309,8.858 15.9516936,8.313 15.997559,8.005 C16.0156918,7.885 15.9303609,7.779 15.8226305,7.779 L13.6978892,7.779 C13.5762925,7.779 13.4557625,7.826 13.3608318,7.912 L13.3608318,7.912 Z M6.29542689,5.151 L6.29542689,3.313 C6.29542689,3.14 6.18023007,3 6.03623404,3 L5.40691809,3 C5.2639887,3 5.14772524,3.14 5.14772524,3.313 L5.14772524,5.151 L2.02034493,5.151 C1.85181625,5.151 1.71635332,5.316 1.71635332,5.519 L1.71635332,6.995 C1.71635332,7.171 1.84434979,7.315 2.00327873,7.315 L12.3901919,7.315 C12.5672537,7.315 12.7101831,7.142 12.7101831,6.928 L12.7101831,5.472 C12.7101831,5.294 12.5832533,5.151 12.4243243,5.151 L6.29542689,5.151 Z' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='3.-Mobile-and-tablet' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Mobile-shipment' transform='translate(-52.000000, -907.000000)'%3E %3Cg id='Content' transform='translate(0.000000, 320.000000)'%3E %3Cg id='shipment-leg-2/3' transform='translate(0.000000, 557.000000)'%3E %3Cg transform='translate(32.000000, 16.000000)' id='icon'%3E %3Cg%3E %3Cg id='Icons/Small/Ship' transform='translate(20.000000, 11.000000)'%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cuse id='green-ship' fill='%233CB787' fill-rule='evenodd' xlink:href='%23path-1'%3E%3C/use%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\\\"\"\n\n//# sourceURL=webpack:///./client/images/ship.svg?");

/***/ }),

/***/ "./client/images/toggle-off.svg":
/*!**************************************!*\
  !*** ./client/images/toggle-off.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='35px' height='18px' viewBox='0 0 35 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EButton/Toggle/On%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='7.-Internal-Admin-Control' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Tracking-changes-landing-2' transform='translate(-751.000000, -1099.000000)' stroke='%23DEDEDE'%3E %3Cg id='Shipment-Tracking' transform='translate(164.000000, 738.000000)'%3E %3Cg id='row' transform='translate(1.000000, 348.000000)'%3E %3Cg id='Button/Toggle/Off' transform='translate(586.000000, 13.000000)'%3E %3Crect id='Rectangle-6' fill='%23EAEAEA' x='0.5' y='0.5' width='34' height='17' rx='8.5'%3E%3C/rect%3E %3Cellipse id='Selector' fill='%23FFFFFF' cx='8.28947368' cy='9' rx='7.78947368' ry='8.5'%3E%3C/ellipse%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\\\"\"\n\n//# sourceURL=webpack:///./client/images/toggle-off.svg?");

/***/ }),

/***/ "./client/images/toggle-on.svg":
/*!*************************************!*\
  !*** ./client/images/toggle-on.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='35px' height='18px' viewBox='0 0 35 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EButton/Toggle/On%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='7.-Internal-Admin-Control' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Tracking-changes-landing-2' transform='translate(-751.000000, -1197.000000)'%3E %3Cg id='Shipment-Tracking' transform='translate(164.000000, 738.000000)'%3E %3Cg id='row' transform='translate(1.000000, 446.000000)'%3E %3Cg id='Button/Toggle/On' transform='translate(586.000000, 13.000000)'%3E %3Crect id='Rectangle-6' fill='%233E886B' x='0' y='0' width='35' height='18' rx='9'%3E%3C/rect%3E %3Cellipse id='Selector' stroke='%23DEDEDE' stroke-width='1' fill='%23FFFFFF' cx='26.7105263' cy='9' rx='7.78947368' ry='8.5'%3E%3C/ellipse%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\\\"\"\n\n//# sourceURL=webpack:///./client/images/toggle-on.svg?");

/***/ }),

/***/ "./client/images/truck.svg":
/*!*********************************!*\
  !*** ./client/images/truck.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='16px' height='10px' viewBox='0 0 16 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3ETruck%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='3.-Mobile-and-tablet' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Mobile-shipment' transform='translate(-52.000000, -692.000000)' fill='%23727272'%3E %3Cg id='Content' transform='translate(0.000000, 320.000000)'%3E %3Cg id='shipment-leg-1/3' transform='translate(0.000000, 303.000000)'%3E %3Cg id='shipment-leg-2/3' transform='translate(52.000000, 63.000000)'%3E %3Cg id='icon' transform='translate(0.000000, 6.000000)'%3E %3Cpath d='M15.675,4.867 L14.729,4.867 L14.076,2.57 C14.047,2.426 13.946,2.325 13.833,2.325 L11.311,2.325 L11.311,3.311 L13.032,3.311 C13.189,3.311 13.325,3.418 13.363,3.57 L13.69,4.867 L11.311,4.867 L11.311,8.483 L11.823,8.483 C11.944,9.192 12.556,9.733 13.299,9.733 C14.041,9.733 14.654,9.192 14.774,8.483 L15.675,8.483 C15.854,8.483 15.999,8.309 15.999,8.093 L15.999,5.257 C15.999,5.042 15.854,4.867 15.675,4.867 M9.922,0 L0.436,0 C0.195,0 0,0.239 0,0.533 L0,8.483 L1.064,8.483 C1.172,9.19 1.778,9.733 2.515,9.733 C3.252,9.733 3.858,9.19 3.966,8.483 L6.382,8.483 C6.49,9.19 7.096,9.733 7.833,9.733 C8.571,9.733 9.176,9.19 9.285,8.483 L10.358,8.483 L10.358,0.533 C10.358,0.239 10.162,0 9.922,0' id='Truck'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\\\"\"\n\n//# sourceURL=webpack:///./client/images/truck.svg?");

/***/ }),

/***/ "./client/images/warning-circle.svg":
/*!******************************************!*\
  !*** ./client/images/warning-circle.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3EGroup 2%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpath d='M6.88565843,3.72530934 C7.44463297,2.75744476 8.55617181,2.759016 9.1142389,3.72530934 L12.780537,10.0735056 C13.338906,11.0403217 12.782848,12 11.6662467,12 L4.33365059,12 C3.21523509,12 2.66189555,11.038756 3.21936036,10.0735056 L6.88565843,3.72530934 Z M8,10.6153846 C8.39448911,10.6153846 8.71428571,10.3054279 8.71428571,9.92307692 C8.71428571,9.54072594 8.39448911,9.23076923 8,9.23076923 C7.60551089,9.23076923 7.28571429,9.54072594 7.28571429,9.92307692 C7.28571429,10.3054279 7.60551089,10.6153846 8,10.6153846 Z M7.619424,8.35676457 C7.63236577,8.45711304 7.73044259,8.53846154 7.82310159,8.53846154 L8.17689841,8.53846154 C8.27644467,8.53846154 8.36744629,8.45857033 8.380576,8.35676457 L8.62416349,6.46802462 C8.67393662,6.08209143 8.39723941,5.76923077 8,5.76923077 C7.60551089,5.76923077 7.32668311,6.08689675 7.37583651,6.46802462 L7.619424,8.35676457 Z' id='path-1'%3E%3C/path%3E %3C/defs%3E %3Cg id='3.-Mobile-and-tablet' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='Mobile-containers-open' transform='translate(-281.000000, -346.000000)'%3E %3Cg id='content' transform='translate(-1.000000, 0.000000)'%3E %3Cg id='Containers' transform='translate(1.000000, 280.000000)'%3E %3Cg id='status' transform='translate(231.000000, 64.000000)'%3E %3Cg id='possible-delay' transform='translate(50.000000, 0.000000)'%3E %3Cg id='Group-2' transform='translate(0.000000, 2.000000)'%3E %3Ccircle id='Oval' fill='%23FF9600' fill-rule='nonzero' cx='8' cy='8' r='8'%3E%3C/circle%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cuse id='shape-primary' fill='%23FFFFFF' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E\\\"\"\n\n//# sourceURL=webpack:///./client/images/warning-circle.svg?");

/***/ }),

/***/ "./client/js/app.js":
/*!**************************!*\
  !*** ./client/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// console.log(`Loaded Clio.\\n CLIO_NODE_ENV=${process.env.CLIO_NODE_ENV}\\n CLIO_URL_BASE=${process.env.CLIO_URL_BASE})`);\nangular.module('clio', ['ui.router', 'clioLBServices', 'ngSanitize', 'ui.bootstrap']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {\n  $stateProvider.state('tracked-container-status-item', {\n    url: '/tracked-container-status-item/:id',\n    template: '<section ng-controller=\"TrackAndTraceCtrl as ctrl\" class=\"accordion col-md-6\"><ul><li><tracked-container-status-item container=\"ctrl.containers[0]\" commodity=\"\\'bubble gum\\'\" toggle=\"ctrl.toggle(0)\" /></li></ul></section>'\n  }).state('tracked-event-item', {\n    url: '/tracked-event-item/:id',\n    template: '<div ng-controller=\"TrackAndTraceCtrl as ctrl\"><tracked-event-item evt=\"ctrl.containers[0].trackedEvents[0]\" date=\"ctrl.getDateOfInterest(evt)\" /></div>',\n    template: __webpack_require__(/*! ../views/trackedEventItem.html */ \"./client/views/trackedEventItem.html\"),\n    controller: 'TrackAndTraceCtrl'\n  }).state('tracked-event-list', {\n    url: '/tracked-event-list/:id',\n    template: '<tracked-event-list></tracked-event-list>'\n  }).state('tracked-container-list', {\n    url: '/tracked-container-list/:id',\n    template: __webpack_require__(/*! ../views/trackedContainerList.html */ \"./client/views/trackedContainerList.html\"),\n    controller: 'TrackAndTraceCtrl'\n  });\n  $urlRouterProvider.otherwise('tracked-event-list');\n}]).run(['$rootScope', '$state', 'TrackAndTraceSvc', function ($rootScope, $state, TrackAndTraceSvc) {\n  $rootScope.$on('$locationChangeStart', function (event, toState, toParams) {\n    TrackAndTraceSvc.setAdminMode(true); //   // console.log('There was a state change to:', toState, toParams);\n  });\n}]);\n\n//# sourceURL=webpack:///./client/js/app.js?");

/***/ }),

/***/ "./client/js/controllers/TestHarnessCtrl.js":
/*!**************************************************!*\
  !*** ./client/js/controllers/TestHarnessCtrl.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('clio').controller('TestHarnessCtrl', function ($scope, $rootScope, $state, $q, $log, TrackAndTraceSvc) {\n  function init() {\n    TrackAndTraceSvc.fetchOrders().then(function (orderData) {\n      $scope.items = orderData;\n      $scope.currentHavenOrderId = TrackAndTraceSvc.getActiveOrderId();\n    }).catch(function (err) {\n      return $log.error(err);\n    });\n  }\n\n  init();\n  $scope.state = $state;\n  $scope.status = {\n    isopen: false\n  };\n\n  $scope.toggleDropdown = function ($event) {\n    $event.preventDefault();\n    $scope.status.isopen = !$scope.status.isopen;\n    var selectedOrder = JSON.parse($event.target.text);\n    $scope.state.go($scope.state.current.name, {\n      id: selectedOrder.havenOrderId\n    }, {\n      notify: false\n    });\n    TrackAndTraceSvc.fetchByOrderId(selectedOrder.havenOrderId);\n    $scope.currentHavenOrderId = TrackAndTraceSvc.getActiveOrderId();\n  };\n\n  $rootScope.$on('$locationChangeStart', function (event, toState, toParams) {\n    console.log('There was a state change to:', toState, toParams);\n    var hash = location.hash.split('/');\n    TrackAndTraceSvc.fetchByOrderId(hash[hash.length - 1]);\n  });\n});\n\n//# sourceURL=webpack:///./client/js/controllers/TestHarnessCtrl.js?");

/***/ }),

/***/ "./client/js/controllers/TrackAndTraceCtrl.js":
/*!****************************************************!*\
  !*** ./client/js/controllers/TrackAndTraceCtrl.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _accordion_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.less */ \"./client/js/controllers/accordion.less\");\n/* harmony import */ var _accordion_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_accordion_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_list_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-list.less */ \"./client/js/controllers/event-list.less\");\n/* harmony import */ var _event_list_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_list_less__WEBPACK_IMPORTED_MODULE_1__);\n\n\nangular.module('clio').controller('TrackAndTraceCtrl', function ($q, $scope, $log, $sce, TrackAndTraceSvc) {\n  var ctrl = this; // Defaults\n\n  ctrl.containers = [];\n  ctrl.cargoCommodityType = null;\n\n  function init() {\n    TrackAndTraceSvc.registerListener(ctrl.fetchContainersHandler);\n    TrackAndTraceSvc.fetchByOrderId(TrackAndTraceSvc.getActiveOrderId());\n  }\n\n  ctrl.getAdminMode = function () {\n    return TrackAndTraceSvc.getAdminMode();\n  };\n\n  ctrl.fetchContainersHandler = function (containerData) {\n    ctrl.containers = containerData;\n\n    if (containerData.some(function (container) {\n      return container.containerId.length > 3;\n    })) {\n      ctrl.containers = containerData.filter(function (container) {\n        return container.containerId.length > 3;\n      }); //Suppress invalid containers. \n      //TODO: Determine whether there is just bad data\n    }\n\n    ctrl.containers.map(function (container) {\n      return container.open = false;\n    });\n\n    for (var i = 0; i < containerData.length; i++) {\n      var c = containerData[i];\n      var currentEvent = c.trackedEvents[0];\n      var closestTime = 0; //TODO Sorts actual events -- Make this a function\n\n      var actualEvents = [];\n\n      for (var j = 0; j < c.trackedEvents.length; j++) {\n        var evt = c.trackedEvents[j];\n\n        if (evt.actual) {\n          var t = new Date(evt.actual).getTime();\n\n          if (actualEvents.length == 0 || t < new Date(actualEvents[0].actual).getTime()) {\n            actualEvents.push(evt);\n          } else {\n            actualEvents.unshift(evt);\n          }\n        }\n      }\n\n      var statusCode = c.trackedEvents.length ? c.trackedEvents[0].statusCode : 1; // 1 == UNKNOWN\n\n      if (actualEvents.length) {\n        statusCode = actualEvents[0].statusCode;\n      }\n\n      if (statusCode == 2 && actualEvents.length) {\n        //UNKNOWN\n        //TODO: This is a stopgap until we can do a better job normalizing statuses on the backend...\n        c.statusValue = actualEvents[0].providerStatus;\n      } else {\n        c.statusValue = TrackAndTraceSvc.getStatusCodeValue(statusCode);\n      }\n    }\n\n    ctrl.cargoCommodityType = TrackAndTraceSvc.getCargoCommodityType(); // $log.info(ctrl.containers);\n  };\n\n  ctrl.icon = 'check-circle-icon';\n\n  ctrl.toggle = function (index) {\n    ctrl.containers[index].open = !ctrl.containers[index].open;\n  };\n\n  ctrl.handleVisibilitySwitch = function (evt) {\n    TrackAndTraceSvc.updateEvent(evt);\n  }; //TODO: Move to EventItem controller..?\n\n\n  ctrl.getDateOfInterest = function (evt) {\n    var result = \"TIME UNKNOWN\";\n\n    if (evt && evt.planned) {\n      result = new Date(evt.planned).toString();\n    }\n\n    if (evt && evt.actual) {\n      result = new Date(evt.actual).toString();\n    }\n\n    return result;\n  };\n\n  ctrl.getPrimaryEventList = function () {\n    var bestList = [];\n\n    for (var i = 0; i < ctrl.containers.length; i++) {\n      var c = ctrl.containers[i]; //TODO Better logic to figure out which event list to use.\n\n      bestList = c.trackedEvents.length > bestList.length ? c.trackedEvents : bestList;\n    }\n\n    bestList = TrackAndTraceSvc.getProteusActions().concat(bestList);\n    console.log(bestList);\n    return bestList.sort(function (a, b) {\n      var dateA = new Date(ctrl.getDateOfInterest(a)).getTime();\n      var dateB = new Date(ctrl.getDateOfInterest(b)).getTime();\n\n      if (dateA > dateB) {\n        return 1;\n      }\n\n      if (dateA < dateB) {\n        return -1;\n      }\n\n      return 0;\n    });\n  };\n\n  ctrl.getDateClass = function (evt) {\n    var result = 'planned-date';\n\n    if (evt && evt.actual) {\n      result = '';\n    }\n\n    return result;\n  }; //TODO: Clean this up\n\n\n  ctrl.getSegmentClassTop = function (evt, isFirst, next) {\n    var result = isFirst ? 'segment-hidden' : '';\n\n    if (evt && !evt.actual) {\n      result = 'segment-future';\n    } else if (next && !next.actual) {\n      result = 'segment-current';\n    }\n\n    return result;\n  };\n\n  ctrl.getSegmentClassBottom = function (evt, isLast, next) {\n    var result = '';\n\n    if (evt && !evt.actual) {\n      result = 'segment-future';\n    } else if (next && !next.actual) {\n      result = 'segment-future';\n    }\n\n    result = isLast ? 'segment-hidden' : result;\n    return result;\n  };\n\n  init();\n}).component('trackedEventList', {\n  binding: {\n    admin: '<'\n  },\n  template: __webpack_require__(/*! ../../views/trackedEventList.html */ \"./client/views/trackedEventList.html\")\n}).component('trackedContainerList', {\n  binding: {\n    admin: '<'\n  },\n  template: __webpack_require__(/*! ../../views/trackedContainerList.html */ \"./client/views/trackedContainerList.html\")\n}).component('trackedEventItem', {\n  bindings: {\n    admin: '<',\n    handleSwitch: '&',\n    evt: '<',\n    date: '<',\n    segtop: '<',\n    segbottom: '<'\n  },\n  template: __webpack_require__(/*! ../../views/trackedEventItem.html */ \"./client/views/trackedEventItem.html\")\n}).component('trackedContainerStatusItem', {\n  bindings: {\n    admin: '<',\n    container: '<',\n    commodity: '<',\n    icon: '<',\n    toggle: '&'\n  },\n  template: __webpack_require__(/*! ../../views/trackedContainerStatusItem.html */ \"./client/views/trackedContainerStatusItem.html\")\n});\n\n//# sourceURL=webpack:///./client/js/controllers/TrackAndTraceCtrl.js?");

/***/ }),

/***/ "./client/js/controllers/accordion.less":
/*!**********************************************!*\
  !*** ./client/js/controllers/accordion.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./accordion.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./client/js/controllers/accordion.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/js/controllers/accordion.less?");

/***/ }),

/***/ "./client/js/controllers/event-list.less":
/*!***********************************************!*\
  !*** ./client/js/controllers/event-list.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./event-list.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./client/js/controllers/event-list.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./client/js/controllers/event-list.less?");

/***/ }),

/***/ "./client/js/services/TrackAndTraceSvc.js":
/*!************************************************!*\
  !*** ./client/js/services/TrackAndTraceSvc.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("g_statusCodes = [];\nangular.module('clio').factory('TrackAndTraceSvc', ['$q', 'TrackedOrder', 'StatusCode', 'TrackedEvent', TrackAndTraceSvc]);\n/**\n * bridge to Clio REST API\n *\n * @param {...*} dependencies\n *\n * @returns {Object} object with public service methods\n */\n\nfunction TrackAndTraceSvc($q, TrackedOrder, StatusCode, TrackedEvent) {\n  StatusCode.find().$promise.then(function (codes) {\n    g_statusCodes = codes;\n  });\n  return {\n    _cachedOrdersToContainers: new Map(),\n    _activeOrderId: 0,\n    _listeners: new Set(),\n    _externalOrderCriteria: null,\n    _statusCodes: [],\n    _adminMode: false,\n    _proteusActions: [],\n\n    /**\n     * Returns *all* TrackedOrders\n     * NFP: The following method is *only* used to populate the test harness\n     * Eventually there will be thousands of these!\n     *\n     * @returns {Object} promise\n     */\n    fetchOrders: function fetchOrders() {\n      var _this = this;\n\n      var deferred = $q.defer();\n      TrackedOrder.find().$promise.then(function (orderData) {\n        if (!_this._activeOrderId && orderData && orderData.length && orderData[0].havenOrderId) {\n          orderData.forEach(function (orderItem) {\n            _this._cachedOrdersToContainers.set(orderItem.havenOrderId, null);\n          }); // default dropdown to first item in order list\n\n          _this.fetchByOrderId(orderData[0].havenOrderId);\n        }\n\n        deferred.resolve(orderData);\n      });\n      return deferred.promise;\n    },\n\n    /**\n    * Modify properties on a specific TrackedEvent\n    *\n    * @param {Object} tracked event \n    * @returns Loopback Resource representing the event that was modified\n    **/\n    updateEvent: function updateEvent(evt) {\n      // TODO: Would be better to use immutable evt objects... :/\n      var deferred = $q.defer();\n      TrackedEvent.updateAttributes({\n        id: evt.id\n      }, {\n        visibility: evt.visibility == 1 ? 2 : 1\n      }).$promise.then(function (result) {\n        evt.visibility = result.visibility;\n        deferred.resolve(result);\n      });\n      return deferred.promise;\n    },\n\n    /**\n     * Register callback triggered when API response returns\n     *\n     * @param {Function} callback expecting array of containers as first arg.\n     */\n    registerListener: function registerListener(callback) {\n      this._listeners.add(callback);\n    },\n\n    /**\n     * Injects order data data from Proteus to merge into the Cleo response \n     * Pass-through call to @see fetchByOrderId\n     * MVP: Only used for od.criteria.commodityType\n     *\n     * @param {Object} proteusOrderData\n     *\n     * @returns {Object} promise\n     */\n    fetchByProteusOrderData: function fetchByProteusOrderData(proteusOrderData) {\n      this._externalOrderCriteria = proteusOrderData.criteria;\n      return this.fetchByOrderId(proteusOrderData.order.id);\n    },\n    injectProteusData: function injectProteusData(data) {\n      var _this2 = this;\n\n      var order = data.order,\n          admin = data.admin;\n      console.log(admin);\n      this.setAdminMode(admin === true ? true : false);\n\n      if (order) {\n        this.fetchByProteusOrderData(order);\n\n        if (order.actions) {\n          this._proteusActions = [];\n          order.actions.map(function (action) {\n            _this2._proteusActions.push({\n              providerStatus: action.comments,\n              actual: action.timestamp,\n              visibility: 1\n            });\n          });\n          console.log('got custom actions');\n          console.log(order.actions);\n        }\n      }\n    },\n\n    /**\n     * Request container-level tracking data for a particular order\n     *\n     * @param {Number} havenOrderId \n     * @returns {Object} promise\n     */\n    fetchByOrderId: function fetchByOrderId(havenOrderId) {\n      var _this3 = this;\n\n      this._activeOrderId = havenOrderId;\n      var deferred = $q.defer();\n      TrackedOrder.find({\n        filter: {\n          include: {\n            relation: 'trackedContainers',\n            scope: {\n              include: ['trackedEvents']\n            }\n          },\n          where: {\n            havenOrderId: havenOrderId\n          }\n        }\n      }).$promise.then(function (orderData) {\n        if (orderData.length) {\n          var containers = orderData[0].trackedContainers;\n\n          _this3._cachedOrdersToContainers.set(havenOrderId, containers);\n\n          _this3._listeners.forEach(function (cb) {\n            return cb.call(null, containers);\n          });\n        }\n\n        deferred.resolve(orderData);\n      });\n      return deferred.promise;\n    },\n\n    /**\n     * @returns {String} commodity type that was inject from @link fetchProteusOrderData\n     */\n    getCargoCommodityType: function getCargoCommodityType() {\n      var commodityType = null;\n\n      if (this._externalOrderCriteria) {\n        commodityType = this._externalOrderCriteria.commodityType;\n      }\n\n      return commodityType;\n    },\n    getStatusCodeValue: function getStatusCodeValue(codeId) {\n      var result = 0;\n\n      if (codeId > 0) {\n        result = g_statusCodes.length ? g_statusCodes[codeId - 1].value : codeId;\n      }\n\n      return result;\n    },\n\n    /**\n     * TODO: Eliminate or move elsewhere \n     */\n    getActiveOrderId: function getActiveOrderId() {\n      return this._activeOrderId;\n    },\n    setAdminMode: function setAdminMode(b) {\n      this._adminMode = b;\n    },\n    getAdminMode: function getAdminMode() {\n      return this._adminMode;\n    },\n    getProteusActions: function getProteusActions() {\n      return this._proteusActions;\n    }\n  };\n}\n\n//# sourceURL=webpack:///./client/js/services/TrackAndTraceSvc.js?");

/***/ }),

/***/ "./client/js/services/clioLBServices.js":
/*!**********************************************!*\
  !*** ./client/js/services/clioLBServices.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// CommonJS package manager support\nif ( true && module.exports === exports) {\n  // Export the *name* of this Angular module\n  // Sample usage:\n  //   import clioLBServices from './lb-services';\n  //   angular.module('app', [clioLBServices]);\n  module.exports = \"clioLBServices\";\n}\n\n(function (window, angular, undefined) {\n  var urlBase = \"/api\";\n  /**\n  * @ngdoc overview\n  * @name clioLBServices\n  * @module\n  * @description\n  * The `clioLBServices` module provides services for interacting with\n  * the models exposed by the LoopBack server via the REST API.\n  */\n\n  var module = angular.module('clioLBServices', ['ngResource']);\n  module.factory(\"StatusCode\", ['LoopBackResource', '$injector', '$q', function (LoopBackResource, $injector, $q) {\n    var R = LoopBackResource(urlBase + \"/StatusCode/:id\", {\n      'id': '@id'\n    }, {\n      \"find\": {\n        isArray: true,\n        url: urlBase + \"/StatusCodes\",\n        method: \"GET\"\n      }\n    });\n    return R;\n  }]);\n  module.factory(\"TrackedEvent\", ['LoopBackResource', '$injector', '$q', function (LoopBackResource, $injector, $q) {\n    var R = LoopBackResource(urlBase + \"/TrackedEvents/:id\", {\n      'id': '@id'\n    }, {\n      \"updateAttributes\": {\n        url: urlBase + \"/TrackedEvents/:id\",\n        method: \"PUT\"\n      }\n    });\n    R.modelName = \"TrackedEvent\";\n    return R;\n  }]);\n  module.factory(\"TrackedOrder\", ['LoopBackResource', '$injector', '$q', function (LoopBackResource, $injector, $q) {\n    var R = LoopBackResource(urlBase + \"/TrackedOrders/:id\", {\n      'id': '@id'\n    }, {\n      \"exists\": {\n        url: urlBase + \"/TrackedOrders/:id/exists\",\n        method: \"GET\"\n      },\n      \"findById\": {\n        url: urlBase + \"/TrackedOrders/:id\",\n        method: \"GET\"\n      },\n      \"find\": {\n        isArray: true,\n        url: urlBase + \"/TrackedOrders\",\n        method: \"GET\"\n      },\n      \"findOne\": {\n        url: urlBase + \"/TrackedOrders/findOne\",\n        method: \"GET\"\n      },\n      \"count\": {\n        url: urlBase + \"/TrackedOrders/count\",\n        method: \"GET\"\n      }\n    });\n    return R;\n  }]);\n  module.provider('LoopBackResource', function LoopBackResourceProvider() {\n    /**\n     * @ngdoc method\n     * @name clioLBServices.LoopBackResourceProvider#setAuthHeader\n     * @methodOf clioLBServices.LoopBackResourceProvider\n     * @param {string} header The header name to use, e.g. `X-Access-Token`\n     * @description\n     * Configure the REST transport to use a different header for sending\n     * the authentication token. It is sent in the `Authorization` header\n     * by default.\n     */\n    this.$get = ['$resource', function ($resource) {\n      var LoopBackResource = function LoopBackResource(url, params, actions) {\n        var resource = $resource(url, params, actions); // Angular always calls POST on $save()\n        // This hack is based on\n        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/\n\n        resource.prototype.$save = function (success, error) {\n          // Fortunately, LoopBack provides a convenient `upsert` method\n          // that exactly fits our needs.\n          var result = resource.upsert.call(this, {}, this, success, error);\n          return result.$promise || result;\n        };\n\n        return resource;\n      };\n\n      return LoopBackResource;\n    }];\n  });\n})(window, window.angular);\n\n//# sourceURL=webpack:///./client/js/services/clioLBServices.js?");

/***/ }),

/***/ "./client/views/trackedContainerList.html":
/*!************************************************!*\
  !*** ./client/views/trackedContainerList.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"col-md-6\\\" ng-controller=\\\"TrackAndTraceCtrl as ctrl\\\">\\n   <div class=\\\"tracking-history-container\\\">\\n      <div class=\\\"tracking-history-header label-bold\\\">\\n         <span>CONTAINERS</span>\\n         <span class=\\\"status-item-icon check-circle-icon\\\" />\\n           <span tooltip=\\\"{{ ctrl.containers.length + ' containers for this shipment are on time.' }}\\\">{{ ctrl.containers.length }}</span>\\n         <span class=\\\"status-item-icon warning-circle-icon status-item-count-is-zero\\\" />\\n         <span>0</span>\\n         <span class=\\\"status-item-icon error-circle-icon status-item-count-is-zero\\\" />\\n         <span>0</span>\\n      </div>\\n      <div class=\\\"row\\\">\\n         <section class=\\\"accordion\\\">\\n            <ul>\\n               <li ng-repeat=\\\"container in ctrl.containers track by $index\\\">\\n                  <tracked-container-status-item container=\\\"container\\\" commodity=\\\"ctrl.cargoCommodityType\\\" toggle=\\\"ctrl.toggle($index)\\\" icon=\\\"ctrl.icon\\\" />\\n                  <hr />\\n               </li>\\n            </ul>\\n         </section>\\n      </div>\\n   </div>\\n</div>\\n\"\n\n//# sourceURL=webpack:///./client/views/trackedContainerList.html?");

/***/ }),

/***/ "./client/views/trackedContainerStatusItem.html":
/*!******************************************************!*\
  !*** ./client/views/trackedContainerStatusItem.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"accordion-header\\\" ng-click=\\\"$ctrl.toggle()\\\">\\n  <div>\\n      \\n    <span ng-show=\\\"!($ctrl.container.open)\\\" class=\\\"status-item-icon arrow-right-icon\\\" ></span>\\n    <span ng-show=\\\"$ctrl.container.open\\\" class=\\\"status-item-icon arrow-down-icon\\\"></span>\\n    <span>\\n      <span class=\\\"status-item-icon {{$ctrl.icon}}\\\" />{{ $ctrl.container.containerId }}</span>\\n  </div>\\n  <div class=\\\"accordion-body\\\" ng-if=\\\"$ctrl.container.open\\\">\\n    <hr />\\n    <div class=\\\"row mt-1em\\\">\\n      <div class=\\\"col-md-6\\\">\\n        <div class=\\\"label-sm\\\">Container</div>\\n        <div class=\\\"main-text main-text-small\\\">{{ $ctrl.container.type }}</div>\\n      </div>\\n      <div class=\\\"col-md-6\\\">\\n        <div class=\\\"label-sm\\\">Commodity</div>\\n        <div class=\\\"main-text main-text-small\\\">{{ $ctrl.commodity }}</div>\\n      </div>\\n    </div>\\n    <div class=\\\"row mt-1_5em\\\">\\n      <div class=\\\"col-md-12\\\">\\n        <div class=\\\"label-sm\\\">Last Recorded Status</div>\\n        <div class=\\\"main-text main-text-small\\\">{{ $ctrl.container.statusValue }}</div>\\n      </div>\\n    </div>\\n  </div>\\n  <hr class=\\\"mt-1em\\\" />\\n</div>\\n\"\n\n//# sourceURL=webpack:///./client/views/trackedContainerStatusItem.html?");

/***/ }),

/***/ "./client/views/trackedEventItem.html":
/*!********************************************!*\
  !*** ./client/views/trackedEventItem.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div ng-if=\\\"$ctrl.evt.visibility == 1 || $ctrl.admin\\\" class=\\\"row\\\">\\n   <div class=\\\"voyage-col col-xs-1\\\">\\n     <div class=\\\"voyage-segment\\\" ng-class=\\\"$ctrl.segtop\\\" >\\n         <div class=\\\"circle\\\">\\n         </div>\\n      </div>\\n      <div class=\\\"voyage-segment\\\" ng-class=\\\"$ctrl.segbottom\\\">\\n      </div>\\n   </div>\\n   <div class=\\\"col-xs-9\\\">\\n      <div>\\n         <div>\\n            <span class=\\\"main-text\\\">{{ $ctrl.evt.providerStatus }}</span>\\n         </div>\\n         <div>\\n           <span class=\\\"sub-text\\\"><br/>{{ $ctrl.evt.providerLocation }} – {{ $ctrl.date }}</span>\\n         </div>\\n      <hr />\\n      </div>\\n   </div>\\n   <div ng-if=\\\"$ctrl.admin\\\" class=\\\"col-xs-2\\\">\\n     <div ng-if=\\\"$ctrl.evt.visibility == 1\\\" class=\\\"toggle-on-icon\\\" ng-click=\\\"$ctrl.handleSwitch()\\\"></div>\\n     <div ng-if=\\\"$ctrl.evt.visibility != 1\\\" class=\\\"toggle-off-icon\\\" ng-click=\\\"$ctrl.handleSwitch()\\\"></div>\\n   </div>\\n</div>\\n\"\n\n//# sourceURL=webpack:///./client/views/trackedEventItem.html?");

/***/ }),

/***/ "./client/views/trackedEventList.html":
/*!********************************************!*\
  !*** ./client/views/trackedEventList.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!-- this code gets pasted into proteus/client/views/TrackAndTrace.html -->\\n<div class=\\\"col-md-6\\\" ng-controller=\\\"TrackAndTraceCtrl as tntCtrl\\\">\\n  <div class=\\\"tracking-history-container\\\">\\n    <div class=\\\"tracking-history-header label-bold\\\">\\n      Tracking History\\n    </div>\\n<!-- TODO better logic to figure out which event list to use -->\\n      <tracked-event-item ng-repeat=\\\"evt in tntCtrl.getPrimaryEventList()\\\" ng-class=\\\"tntCtrl.getDateClass(evt)\\\" \\n        evt=\\\"evt\\\"\\n        admin=\\\"tntCtrl.getAdminMode()\\\"\\n        date=\\\"tntCtrl.getDateOfInterest(evt)\\\"\\n        handle-switch=\\\"tntCtrl.handleVisibilitySwitch(evt)\\\"          \\n        segtop=\\\"tntCtrl.getSegmentClassTop(evt, $first, tntCtrl.containers[tntCtrl.containers.length - 1].trackedEvents[$index + 1])\\\"\\n        segbottom=\\\"tntCtrl.getSegmentClassBottom(evt, $last, tntCtrl.containers[tntCtrl.containers.length - 1].trackedEvents[$index + 1])\\\"\\n      />\\n  </div>\\n</div>\\n\"\n\n//# sourceURL=webpack:///./client/views/trackedEventList.html?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./client/js/controllers/accordion.less":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./client/js/controllers/accordion.less ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../images/toggle-on.svg */ \"./client/images/toggle-on.svg\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../images/toggle-off.svg */ \"./client/images/toggle-off.svg\"));\nvar ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../../images/check-circle.svg */ \"./client/images/check-circle.svg\"));\nvar ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../../images/error-circle.svg */ \"./client/images/error-circle.svg\"));\nvar ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../../images/warning-circle.svg */ \"./client/images/warning-circle.svg\"));\nvar ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../../images/arrow-right.svg */ \"./client/images/arrow-right.svg\"));\nvar ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ../../images/arrow-down.svg */ \"./client/images/arrow-down.svg\"));\nvar ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ../../images/ship.svg */ \"./client/images/ship.svg\"));\nvar ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ../../images/truck.svg */ \"./client/images/truck.svg\"));\n\n// Module\nexports.push([module.i, \".toggle-on-icon {\\n  background: url(\" + ___CSS_LOADER_URL___0___ + \") no-repeat;\\n  width: 36px;\\n  height: 46px;\\n  cursor: pointer;\\n}\\n.toggle-off-icon {\\n  background: url(\" + ___CSS_LOADER_URL___1___ + \") no-repeat;\\n  width: 36px;\\n  height: 46px;\\n  cursor: pointer;\\n}\\n.check-circle-icon {\\n  background: url(\" + ___CSS_LOADER_URL___2___ + \") no-repeat;\\n}\\n.error-circle-icon {\\n  background: url(\" + ___CSS_LOADER_URL___3___ + \") no-repeat;\\n}\\n.warning-circle-icon {\\n  background: url(\" + ___CSS_LOADER_URL___4___ + \") no-repeat;\\n}\\n.arrow-right-icon {\\n  background: url(\" + ___CSS_LOADER_URL___5___ + \") no-repeat;\\n}\\n.arrow-down-icon {\\n  background: url(\" + ___CSS_LOADER_URL___6___ + \") no-repeat;\\n}\\n.ship-icon {\\n  background: url(\" + ___CSS_LOADER_URL___7___ + \") no-repeat;\\n}\\n.truck-icon {\\n  background: url(\" + ___CSS_LOADER_URL___8___ + \") no-repeat;\\n}\\n.status-item-icon {\\n  padding-left: 1.7em;\\n  margin-left: 1.7em;\\n}\\n.status-item-count-is-zero {\\n  opacity: 0.5;\\n}\\nsection.accordion ul {\\n  padding-left: 0;\\n}\\nsection.accordion ul li {\\n  list-style: none;\\n}\\nsection.accordion i {\\n  user-select: none;\\n  border: solid black;\\n  border-width: 0 1px 1px 0;\\n  display: inline-block;\\n  padding: 3px;\\n  margin-right: 0.5em;\\n}\\n.accordion-header {\\n  cursor: pointer;\\n  padding-top: 1em;\\n}\\n.accordion-header:hover {\\n  background-color: #FAFAFA;\\n}\\n.accordion-body .row {\\n  margin-left: 2.5em;\\n}\\n.accordion-body hr {\\n  margin: 1em 0 0 2em;\\n}\\nhr {\\n  margin-bottom: 0;\\n}\\n.mt-1_5em {\\n  margin-top: 1.5em;\\n}\\n.mt-1em {\\n  margin-top: 1em;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/js/controllers/accordion.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./client/js/controllers/event-list.less":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./client/js/controllers/event-list.less ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".tracking-history-container {\\n  border: 1px solid #EAEAEA;\\n  background-color: white;\\n}\\n.tracking-history-header {\\n  margin-bottom: 1.5em;\\n}\\n.planned-date span {\\n  color: #C6C6C6;\\n}\\n.voyage-col {\\n  height: 120px;\\n}\\n.voyage-segment {\\n  border-right: 1px solid #34594B;\\n  border-left: 2px solid #34594B;\\n  position: relative;\\n  margin-left: 50%;\\n  margin-right: 50%;\\n  height: 50%;\\n}\\n.segment-hidden {\\n  border-color: white;\\n}\\n.icon-circle {\\n  width: 16px;\\n  height: 16px;\\n  left: -8px;\\n  top: -8px;\\n  position: absolute;\\n  top: 100%;\\n  bottom: -8px;\\n  margin-top: -8px;\\n  z-index: 99;\\n  background-color: white;\\n}\\n.circle {\\n  background: #34594B;\\n  width: 12px;\\n  height: 12px;\\n  left: -6px;\\n  top: -6px;\\n  border-radius: 50%;\\n  position: absolute;\\n  top: 100%;\\n  bottom: -6px;\\n  margin-top: -6px;\\n  z-index: 99;\\n}\\n.col-xs-11 {\\n  display: grid;\\n  height: 120px;\\n}\\n.col-xs-11 div {\\n  margin: auto 0;\\n}\\n.text-future {\\n  color: #EAEAEA;\\n}\\n.segment-current {\\n  border-color: #3CB787;\\n}\\n.segment-current div.circle {\\n  background-color: #3cb787;\\n}\\n.segment-future {\\n  border-color: #EAEAEA;\\n}\\n.segment-future div.circle {\\n  background-color: #EAEAEA;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/js/controllers/event-list.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************************************************************************!*\
  !*** multi ./client/js/app.js ./client/js/services/clioLBServices.js ./client/js/services/TrackAndTraceSvc.js ./client/js/controllers/TrackAndTraceCtrl.js ./client/js/controllers/TestHarnessCtrl.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./client/js/app.js */\"./client/js/app.js\");\n__webpack_require__(/*! ./client/js/services/clioLBServices.js */\"./client/js/services/clioLBServices.js\");\n__webpack_require__(/*! ./client/js/services/TrackAndTraceSvc.js */\"./client/js/services/TrackAndTraceSvc.js\");\n__webpack_require__(/*! ./client/js/controllers/TrackAndTraceCtrl.js */\"./client/js/controllers/TrackAndTraceCtrl.js\");\nmodule.exports = __webpack_require__(/*! ./client/js/controllers/TestHarnessCtrl.js */\"./client/js/controllers/TestHarnessCtrl.js\");\n\n\n//# sourceURL=webpack:///multi_./client/js/app.js_./client/js/services/clioLBServices.js_./client/js/services/TrackAndTraceSvc.js_./client/js/controllers/TrackAndTraceCtrl.js_./client/js/controllers/TestHarnessCtrl.js?");

/***/ })

/******/ });