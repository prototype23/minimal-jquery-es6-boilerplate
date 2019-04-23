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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/lib/loader.js?!./src/sass/global.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--7-2!./src/sass/global.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "*,\n*:after,\n*:before {\n  box-sizing: inherit; }\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%; }\n\nbody {\n  color: #606c76;\n  font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  font-size: 1.6em;\n  font-weight: 300;\n  letter-spacing: .01em;\n  line-height: 1.6; }\n\nblockquote {\n  border-left: 0.3rem solid #d1d1d1;\n  margin-left: 0;\n  margin-right: 0;\n  padding: 1rem 1.5rem; }\n  blockquote *:last-child {\n    margin-bottom: 0; }\n\n.button,\nbutton,\ninput[type='button'],\ninput[type='reset'],\ninput[type='submit'] {\n  background-color: #ba324f;\n  border: 0.1rem solid #ba324f;\n  border-radius: .4rem;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.1rem;\n  font-weight: 700;\n  height: 3.8rem;\n  letter-spacing: .1rem;\n  line-height: 3.8rem;\n  padding: 0 3.0rem;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap; }\n  .button:focus, .button:hover,\n  button:focus,\n  button:hover,\n  input[type='button']:focus,\n  input[type='button']:hover,\n  input[type='reset']:focus,\n  input[type='reset']:hover,\n  input[type='submit']:focus,\n  input[type='submit']:hover {\n    background-color: #606c76;\n    border-color: #606c76;\n    color: #fff;\n    outline: 0; }\n  .button[disabled],\n  button[disabled],\n  input[type='button'][disabled],\n  input[type='reset'][disabled],\n  input[type='submit'][disabled] {\n    cursor: default;\n    opacity: .5; }\n    .button[disabled]:focus, .button[disabled]:hover,\n    button[disabled]:focus,\n    button[disabled]:hover,\n    input[type='button'][disabled]:focus,\n    input[type='button'][disabled]:hover,\n    input[type='reset'][disabled]:focus,\n    input[type='reset'][disabled]:hover,\n    input[type='submit'][disabled]:focus,\n    input[type='submit'][disabled]:hover {\n      background-color: #ba324f;\n      border-color: #ba324f; }\n  .button.button-outline,\n  button.button-outline,\n  input[type='button'].button-outline,\n  input[type='reset'].button-outline,\n  input[type='submit'].button-outline {\n    background-color: transparent;\n    color: #ba324f; }\n    .button.button-outline:focus, .button.button-outline:hover,\n    button.button-outline:focus,\n    button.button-outline:hover,\n    input[type='button'].button-outline:focus,\n    input[type='button'].button-outline:hover,\n    input[type='reset'].button-outline:focus,\n    input[type='reset'].button-outline:hover,\n    input[type='submit'].button-outline:focus,\n    input[type='submit'].button-outline:hover {\n      background-color: transparent;\n      border-color: #606c76;\n      color: #606c76; }\n    .button.button-outline[disabled]:focus, .button.button-outline[disabled]:hover,\n    button.button-outline[disabled]:focus,\n    button.button-outline[disabled]:hover,\n    input[type='button'].button-outline[disabled]:focus,\n    input[type='button'].button-outline[disabled]:hover,\n    input[type='reset'].button-outline[disabled]:focus,\n    input[type='reset'].button-outline[disabled]:hover,\n    input[type='submit'].button-outline[disabled]:focus,\n    input[type='submit'].button-outline[disabled]:hover {\n      border-color: inherit;\n      color: #ba324f; }\n  .button.button-clear,\n  button.button-clear,\n  input[type='button'].button-clear,\n  input[type='reset'].button-clear,\n  input[type='submit'].button-clear {\n    background-color: transparent;\n    border-color: transparent;\n    color: #ba324f; }\n    .button.button-clear:focus, .button.button-clear:hover,\n    button.button-clear:focus,\n    button.button-clear:hover,\n    input[type='button'].button-clear:focus,\n    input[type='button'].button-clear:hover,\n    input[type='reset'].button-clear:focus,\n    input[type='reset'].button-clear:hover,\n    input[type='submit'].button-clear:focus,\n    input[type='submit'].button-clear:hover {\n      background-color: transparent;\n      border-color: transparent;\n      color: #606c76; }\n    .button.button-clear[disabled]:focus, .button.button-clear[disabled]:hover,\n    button.button-clear[disabled]:focus,\n    button.button-clear[disabled]:hover,\n    input[type='button'].button-clear[disabled]:focus,\n    input[type='button'].button-clear[disabled]:hover,\n    input[type='reset'].button-clear[disabled]:focus,\n    input[type='reset'].button-clear[disabled]:hover,\n    input[type='submit'].button-clear[disabled]:focus,\n    input[type='submit'].button-clear[disabled]:hover {\n      color: #ba324f; }\n\ncode {\n  background: #f4f5f6;\n  border-radius: .4rem;\n  font-size: 86%;\n  margin: 0 .2rem;\n  padding: .2rem .5rem;\n  white-space: nowrap; }\n\npre {\n  background: #f4f5f6;\n  border-left: 0.3rem solid #ba324f;\n  overflow-y: hidden; }\n  pre > code {\n    border-radius: 0;\n    display: block;\n    padding: 1rem 1.5rem;\n    white-space: pre; }\n\nhr {\n  border: 0;\n  border-top: 0.1rem solid #f4f5f6;\n  margin: 3.0rem 0; }\n\ninput[type='email'],\ninput[type='number'],\ninput[type='password'],\ninput[type='search'],\ninput[type='tel'],\ninput[type='text'],\ninput[type='url'],\ntextarea,\nselect {\n  appearance: none;\n  background-color: transparent;\n  border: 0.1rem solid #d1d1d1;\n  border-radius: .4rem;\n  box-shadow: none;\n  box-sizing: inherit;\n  height: 3.8rem;\n  padding: .6rem 1.0rem;\n  width: 100%; }\n  input[type='email']:focus,\n  input[type='number']:focus,\n  input[type='password']:focus,\n  input[type='search']:focus,\n  input[type='tel']:focus,\n  input[type='text']:focus,\n  input[type='url']:focus,\n  textarea:focus,\n  select:focus {\n    border-color: #ba324f;\n    outline: 0; }\n\nselect {\n  background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"14\" viewBox=\"0 0 29 14\" width=\"29\"><path fill=\"#d1d1d1\" d=\"M9.37727 3.625l5.08154 6.93523L19.54036 3.625\"/></svg>') center right no-repeat;\n  padding-right: 3.0rem; }\n  select:focus {\n    background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"14\" viewBox=\"0 0 29 14\" width=\"29\"><path fill=\"#9b4dca\" d=\"M9.37727 3.625l5.08154 6.93523L19.54036 3.625\"/></svg>'); }\n\ntextarea {\n  min-height: 6.5rem; }\n\nlabel,\nlegend {\n  display: block;\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin-bottom: .5rem; }\n\nfieldset {\n  border-width: 0;\n  padding: 0; }\n\ninput[type='checkbox'],\ninput[type='radio'] {\n  display: inline; }\n\n.label-inline {\n  display: inline-block;\n  font-weight: normal;\n  margin-left: .5rem; }\n\n.container {\n  margin: 0 auto;\n  max-width: 112.0rem;\n  padding: 0 2.0rem;\n  position: relative;\n  width: 100%; }\n\n.row {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  width: 100%; }\n  .row.row-no-padding {\n    padding: 0; }\n    .row.row-no-padding > .column {\n      padding: 0; }\n  .row.row-wrap {\n    flex-wrap: wrap; }\n  .row.row-top {\n    align-items: flex-start; }\n  .row.row-bottom {\n    align-items: flex-end; }\n  .row.row-center {\n    align-items: center; }\n  .row.row-stretch {\n    align-items: stretch; }\n  .row.row-baseline {\n    align-items: baseline; }\n  .row .column {\n    display: block;\n    flex: 1 1 auto;\n    margin-left: 0;\n    max-width: 100%;\n    width: 100%; }\n    .row .column.column-offset-10 {\n      margin-left: 10%; }\n    .row .column.column-offset-20 {\n      margin-left: 20%; }\n    .row .column.column-offset-25 {\n      margin-left: 25%; }\n    .row .column.column-offset-33, .row .column.column-offset-34 {\n      margin-left: 33.3333%; }\n    .row .column.column-offset-50 {\n      margin-left: 50%; }\n    .row .column.column-offset-66, .row .column.column-offset-67 {\n      margin-left: 66.6666%; }\n    .row .column.column-offset-75 {\n      margin-left: 75%; }\n    .row .column.column-offset-80 {\n      margin-left: 80%; }\n    .row .column.column-offset-90 {\n      margin-left: 90%; }\n    .row .column.column-10 {\n      flex: 0 0 10%;\n      max-width: 10%; }\n    .row .column.column-20 {\n      flex: 0 0 20%;\n      max-width: 20%; }\n    .row .column.column-25 {\n      flex: 0 0 25%;\n      max-width: 25%; }\n    .row .column.column-33, .row .column.column-34 {\n      flex: 0 0 33.3333%;\n      max-width: 33.3333%; }\n    .row .column.column-40 {\n      flex: 0 0 40%;\n      max-width: 40%; }\n    .row .column.column-50 {\n      flex: 0 0 50%;\n      max-width: 50%; }\n    .row .column.column-60 {\n      flex: 0 0 60%;\n      max-width: 60%; }\n    .row .column.column-66, .row .column.column-67 {\n      flex: 0 0 66.6666%;\n      max-width: 66.6666%; }\n    .row .column.column-75 {\n      flex: 0 0 75%;\n      max-width: 75%; }\n    .row .column.column-80 {\n      flex: 0 0 80%;\n      max-width: 80%; }\n    .row .column.column-90 {\n      flex: 0 0 90%;\n      max-width: 90%; }\n    .row .column .column-top {\n      align-self: flex-start; }\n    .row .column .column-bottom {\n      align-self: flex-end; }\n    .row .column .column-center {\n      align-self: center; }\n\n@media (min-width: 40rem) {\n  .row {\n    flex-direction: row;\n    margin-left: -1.0rem;\n    width: calc(100% + 2.0rem); }\n    .row .column {\n      margin-bottom: inherit;\n      padding: 0 1.0rem; } }\n\na {\n  color: #ba324f;\n  text-decoration: none; }\n  a:focus, a:hover {\n    color: #606c76; }\n\ndl,\nol,\nul {\n  list-style: none;\n  margin-top: 0;\n  padding-left: 0; }\n  dl dl,\n  dl ol,\n  dl ul,\n  ol dl,\n  ol ol,\n  ol ul,\n  ul dl,\n  ul ol,\n  ul ul {\n    font-size: 90%;\n    margin: 1.5rem 0 1.5rem 3.0rem; }\n\nol {\n  list-style: decimal inside; }\n\nul {\n  list-style: circle inside; }\n\n.button,\nbutton,\ndd,\ndt,\nli {\n  margin-bottom: 1.0rem; }\n\nfieldset,\ninput,\nselect,\ntextarea {\n  margin-bottom: 1.5rem; }\n\nblockquote,\ndl,\nfigure,\nform,\nol,\np,\npre,\ntable,\nul {\n  margin-bottom: 2.5rem; }\n\ntable {\n  border-spacing: 0;\n  width: 100%; }\n\ntd,\nth {\n  border-bottom: 0.1rem solid #e1e1e1;\n  padding: 1.2rem 1.5rem;\n  text-align: left; }\n  td:first-child,\n  th:first-child {\n    padding-left: 0; }\n  td:last-child,\n  th:last-child {\n    padding-right: 0; }\n\nb,\nstrong {\n  font-weight: bold; }\n\np {\n  margin-top: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 300;\n  letter-spacing: -.1rem;\n  margin-bottom: 2.0rem;\n  margin-top: 0; }\n\nh1 {\n  font-size: 4.6rem;\n  line-height: 1.2; }\n\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25; }\n\nh3 {\n  font-size: 2.8rem;\n  line-height: 1.3; }\n\nh4 {\n  font-size: 2.2rem;\n  letter-spacing: -.08rem;\n  line-height: 1.35; }\n\nh5 {\n  font-size: 1.8rem;\n  letter-spacing: -.05rem;\n  line-height: 1.5; }\n\nh6 {\n  font-size: 1.6rem;\n  letter-spacing: 0;\n  line-height: 1.4; }\n\nimg {\n  max-width: 100%; }\n\n.clearfix:after {\n  clear: both;\n  content: ' ';\n  display: table; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 500;\n  font-size: 16px; }\n\n.heading {\n  font-weight: 500; }\n  .heading--bold {\n    font-weight: 600; }\n  .heading--upper {\n    text-transform: uppercase; }\n\n.p {\n  font-size: 1.5em;\n  color: black; }\n  .p.p--no-margin {\n    margin-bottom: 0; }\n\n.link {\n  text-decoration: underline; }\n\n.sup {\n  font-size: small; }\n\n.height__full-h {\n  height: 100%; }\n\n.text-color__white {\n  color: white; }\n\n.text-align__center {\n  text-align: center; }\n\n.text-ellipsis {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.clearFix {\n  clear: both; }\n\n.spacer--xs {\n  padding: 15px; }\n\n.spacer--sm {\n  padding: 25px; }\n\n.spacer {\n  padding: 50px; }\n\n.spacer--md {\n  padding: 75px; }\n\n.spacer--lg {\n  padding: 100px; }\n\n.paragraph-point-out {\n  color: #175676;\n  font-size: larger;\n  font-weight: bold; }\n\n/*\n  Vertical align content:\n\n  Needs at least 2 nested div elements:\n  <div class=\"vertical-align-table\">\n    <div class=\"vertical-align-table-cell\">\n      ...\n    </div>\n  </div>\n*/\n.vertical-align-table {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  height: 100%; }\n  .vertical-align-table .vertical-align-table-cell {\n    display: table-cell;\n    vertical-align: middle; }\n\n.noScroll {\n  overflow: hidden; }\n\n.display--none {\n  display: none !important; }\n\n/*\n  Needs an html container to be present on your page (see below) and the flash-message.js helper.\n\n  <div class=\"flash-message\">\n\n  </div>\n*/\n.flash-message {\n  position: fixed;\n  padding: 20px;\n  z-index: 200;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none; }\n\n.flash-message__item {\n  display: block;\n  position: relative;\n  max-width: 300px;\n  background-color: #c5e2c5;\n  border: solid 2px #8ab38a;\n  -webkit-box-shadow: 1px 5px 3px 0 rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 1px 5px 3px 0 rgba(0, 0, 0, 0.1);\n  box-shadow: 1px 5px 3px 0 rgba(0, 0, 0, 0.1);\n  padding: 5px 20px 5px 10px;\n  margin-bottom: 10px; }\n  .flash-message__item .flash-message__p {\n    color: #068d06;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: bold; }\n  .flash-message__item .flash-message__close {\n    position: absolute;\n    padding: 10px;\n    font-size: 25px;\n    top: -18px;\n    right: 0;\n    color: #068d06;\n    pointer-events: all;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none; }\n\n/*\n  Also requires this css rule (not included here)\n\n  .noScroll {\n    overflow: hidden;\n  }\n\n  This class is toggled by javascript on the body.\n\n  ================\n  Html example #1\n  ================\n  <div id=\"myModal\" class=\"modal modal--hidden\" data-modal-close>\n    <div class=\"modal__main zoomInDown\">\n        <div class=\"modal__header\">\n            <div class=\"container\">\n                <i class=\"ion-md-close modal__close-icon\" data-modal-close></i>\n                <h3><br /><b>Header</b></h3>\n            </div>\n        </div>\n        <div class=\"modal__body\">\n            <div class=\"container\">\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<button class=\"button button-outline\" data-modal-open=\"myModal\">Show modal</button>\n\n  ================\n  Html example #2\n  ================\n\n  <div id=\"myModal2\" class=\"modal modal--hidden modal--dark modal--minimal modal--trans-mask\" data-modal-close=\"\" tabindex=\"-1\">\n    <div class=\"modal__main fadeInDown\">\n        <div class=\"modal__body\">\n            <div class=\"container\">\n\n            </div>\n        </div>\n    </div>\n  </div>\n\n  <button class=\"button button-outline\" data-modal-open=\"myModal2\">Show modal #2</button>\n*/\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.7); }\n  .modal.modal--hidden {\n    display: none; }\n\n.modal__main {\n  position: relative;\n  background-color: white;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  -o-border-radius: 5px;\n  border-radius: 5px;\n  margin: 30px auto;\n  width: 80vw; }\n\n.modal__header {\n  position: relative;\n  height: 10vh;\n  min-height: 11em;\n  border-bottom: solid thin gray; }\n\n.modal__header-shadow {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  -webkit-box-shadow: -50px 0 50px 0 rgba(0, 0, 0, 0.8);\n  -moz-box-shadow: -50px 0 50px 0 rgba(0, 0, 0, 0.8);\n  box-shadow: -50px 0 50px 0 rgba(0, 0, 0, 0.8); }\n\n.modal__close-icon {\n  font-size: 25px;\n  position: absolute;\n  top: 0;\n  right: 30px;\n  padding: 1em;\n  cursor: pointer;\n  z-index: 2; }\n\n.modal__body {\n  padding: 7vh 0 30px 0;\n  min-height: 20vh; }\n\n/* ========== */\n/* Dark modal */\n/* ========== */\n.modal--dark .modal__header {\n  border-bottom-color: rgba(255, 255, 255, 0.2); }\n\n.modal--dark .modal__main {\n  background-color: rgba(28, 37, 62, 0.92);\n  color: white; }\n\n/* ========================== */\n/* Modal with minimal header */\n/* ========================== */\n.modal--minimal-header .modal__header {\n  height: auto;\n  min-height: 0;\n  border-bottom: none 0 transparent; }\n\n/* =============== */\n/* Minimal Modaly  */\n/* =============== */\n.modal--minimal .modal__header {\n  display: none; }\n\n.modal--minimal .modal__body {\n  padding: 0;\n  min-height: 20vh; }\n\n/* =========================== */\n/* Modal with Transparent Mask */\n/* =========================== */\n.modal--trans-mask {\n  background-color: transparent; }\n\nhtml, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  position: relative; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/lib/loader.js?!./src/sass/index/index.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/lib/loader.js??ref--7-2!./src/sass/index/index.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".test-animation .icon {\n  font-size: 150px;\n  color: #175676; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?url=false!./src/css/animate/animate.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?url=false!./src/css/animate/animate.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.7.0\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2019 Daniel Eden\n */\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.animated.delay-1s {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n.animated.delay-2s {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n\n.animated.delay-3s {\n  -webkit-animation-delay: 3s;\n  animation-delay: 3s;\n}\n\n.animated.delay-4s {\n  -webkit-animation-delay: 4s;\n  animation-delay: 4s;\n}\n\n.animated.delay-5s {\n  -webkit-animation-delay: 5s;\n  animation-delay: 5s;\n}\n\n.animated.fast {\n  -webkit-animation-duration: 800ms;\n  animation-duration: 800ms;\n}\n\n.animated.faster {\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n}\n\n.animated.slow {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n.animated.slower {\n  -webkit-animation-duration: 3s;\n  animation-duration: 3s;\n}\n\n@media (prefers-reduced-motion) {\n  .animated {\n    -webkit-animation: unset !important;\n    animation: unset !important;\n    -webkit-transition: none !important;\n    transition: none !important;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/animate/animate.css":
/*!*************************************!*\
  !*** ./src/css/animate/animate.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?url=false!./animate.css */ "./node_modules/css-loader/dist/cjs.js?url=false!./src/css/animate/animate.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/flash-message.js":
/*!*********************************!*\
  !*** ./src/js/flash-message.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (text) {
  var flashMessageContainer = $('.flash-message');
  var flashMessageId = new Date().getTime();
  var flashMessageItem;
  flashMessageContainer.append('<div class="flash-message__item fadeInDown animated" data-id="' + flashMessageId + '">\
      <p class="flash-message__p">' + text + '</p>\
      <span class="flash-message__close">&times;</span>\
      </div>');
  flashMessageItem = $('.flash-message__item[data-id="' + flashMessageId + '"]');
  flashMessageItem.find('.flash-message__close').off('click.flashMessage').on('click.flashMessage', function () {
    flashMessageItem.fadeOut();
  });
  setTimeout(function () {
    flashMessageItem.fadeOut();
  }, 6000);
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_animate_animate_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/animate/animate.css */ "./src/css/animate/animate.css");
/* harmony import */ var _css_animate_animate_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_animate_animate_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/global.scss */ "./src/sass/global.scss");
/* harmony import */ var _sass_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_global_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_index_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/index/index.scss */ "./src/sass/index/index.scss");
/* harmony import */ var _sass_index_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_index_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _simple_animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-animation.js */ "./src/js/simple-animation.js");
/* harmony import */ var _simple_animation_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_simple_animation_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _flash_message_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flash-message.js */ "./src/js/flash-message.js");


 // import jquery from 'jquery';
// Expose jQuery globally so other plugins using global var can work!
// window.$ = window.jQuery = jquery;


 // import carousel from './carousel.js';

$(document).ready(function () {
  setTimeout(function () {
    return Object(_flash_message_js__WEBPACK_IMPORTED_MODULE_4__["default"])('js works!');
  }, 1500); // carousel.init();

  $('.test-animation:eq(0)').animateCss('zoomIn', function () {// Do something after animation
  });
});

/***/ }),

/***/ "./src/js/simple-animation.js":
/*!************************************!*\
  !*** ./src/js/simple-animation.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$.fn.extend({
  animateCss: function animateCss(animationName, callback) {
    var animationEnd = function (el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    }(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName);
      if (typeof callback === 'function') callback();
    });
    return this;
  }
});

/***/ }),

/***/ "./src/sass/global.scss":
/*!******************************!*\
  !*** ./src/sass/global.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js?url=false!../../node_modules/sass-loader/lib/loader.js??ref--7-2!./global.scss */ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/lib/loader.js?!./src/sass/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/sass/index/index.scss":
/*!***********************************!*\
  !*** ./src/sass/index/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?url=false!../../../node_modules/sass-loader/lib/loader.js??ref--7-2!./index.scss */ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/lib/loader.js?!./src/sass/index/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });