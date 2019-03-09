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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"html\", function() { return html; });\n/* harmony import */ var _modules_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/html */ \"./src/js/modules/html.js\");\n\n\nconst html = new _modules_html__WEBPACK_IMPORTED_MODULE_0__[\"HTML\"](),\n\tswitchToSignUp = document.querySelector('#switch-to-sign-up'),\n\tswitchToSignIn = document.querySelector('#switch-to-sign-in');\n\nconsole.log(html);\n\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/html.js":
/*!********************************!*\
  !*** ./src/js/modules/html.js ***!
  \********************************/
/*! exports provided: HTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML\", function() { return HTML; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./src/js/app.js\");\n\n\nclass HTML {\n\tnotSignedUserTemplate() {\n\t\tconst templateHTML = `\n\t\t\t<header class=\"header\"></header>\n\t\t\t<main class=\"account-area\" id=\"account-area-not-signed-up\"></main>\n\t\t\t<footer class=\"footer\"></footer>\n\t\t`;\n\t}\n\n\tsignInTemplate() {\n\t\tconst templateHTML = `\n\t\t\t<div class=\"sign-in\" id=\"sign-in\">\n\t\t\t\t<h2 class=\"heading-secondary\">Sign in</h2>\n\t\t\t\t<div class=\"sign-in__row\">\n\t\t\t\t\t<input class=\"text-field\" type=\"text\" placeholder=\"Your email...\" id=\"sign-in-email\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"sign-in__row\">\n\t\t\t\t\t<input class=\"text-field\" type=\"password\" placeholder=\"Your password...\" id=\"sign-in-password\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"sign-in__row\">\n\t\t\t\t\t<input class=\"btn btn--orange\" type=\"submit\" value=\"Sign in\" id=\"sign-in-btn\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"sign-up__row\">\n\t\t\t\t\t<span class=\"sign-up__question\">I have an account</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`;\n\t}\n\n\tsignUpTemplate() {\n\t\tconst templateHTML = `\n\t\t\t<div class=\"sign-up\" id=\"sign-up\">\n\t\t\t\t<h2 class=\"heading-secondary\">Sign up</h2>\n\n\t\t\t\t<div class=\"sign-up__row\">\n\t\t\t\t\t<input class=\"text-field\" type=\"text\" placeholder=\"Your email...\" id=\"sign-up-email\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"sign-up__row\">\n\t\t\t\t\t<input class=\"text-field\" type=\"password\" placeholder=\"Your password...\" id=\"sign-up-password\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"sign-up__row\">\n\t\t\t\t\t<input class=\"btn btn--orange\" type=\"submit\" value=\"Sign up\" id=\"sign-up-btn\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"sign-up__row\">\n\t\t\t\t\t<div class=\"sign-up__cell\">\n\t\t\t\t\t\t<hr />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"sign-up__cell\">\n\t\t\t\t\t\t<span>or</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"sign-up__cell\">\n\t\t\t\t\t\t<hr />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"sign-up__row\">\n\t\t\t\t\t<a href=\"#\" class=\"btn btn--facebook\" id=\"continue-with-facebook\">\n\t\t\t\t\t\t<i class=\"fa fa-facebook visible-xs\"></i>\n\t\t\t\t\t\t<span class=\"hidden-xs\">Continue with Facebook</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"sign-up__row\">\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btn--google\" id=\"continue-with-google\">\n\t\t\t\t\t\t\t<i class=\"fa fa-google-plus visible-xs\"></i>\n\t\t\t\t\t\t\t<span class=\"hidden-xs\">Continue with Google</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"sign-up__row\">\n\t\t\t\t\t\t<span class=\"sign-up__question\">I have an account</span>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t`;\n\t}\n\n\n\n\taddPostTemplate() {\n\t\tconst templateHTML = ``;\n\t}\n\n\twallTemplate() {\n\t\tconst templateHTML = ``;\n\t}\n\n\terrorTemplate() {\n\t\tconst templateHTML = ``;\n\t}\n\n\tsuccessTemplete() {\n\t\tconst templateHTML = ``;\n\t}\n}\n\n\n\n//# sourceURL=webpack:///./src/js/modules/html.js?");

/***/ })

/******/ });