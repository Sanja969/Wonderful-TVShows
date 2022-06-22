/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: 'Permanent Marker', cursive;\n}\n\n.navbar {\n  background-color: rgb(30, 29, 31);\n  box-shadow: 0 0 20px white;\n  z-index: 5;\n}\n\nmain {\n  padding: 200px 10px;\n  background: rgb(31, 29, 29);\n  background-size: contain;\n}\n\nfooter > div {\n  transform: translateY(100%);\n}\n\n.bottom {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.tv-card {\n  background-color: rgb(9, 9, 9);\n  text-align: center;\n  width: 250px;\n  margin: 20px;\n  box-shadow: 0 0 10px 10px black;\n  padding: 10px 25px;\n}\n\n.tv-card:hover {\n  background-color: #ffc107;\n  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.593);\n}\n\n.card-img {\n  width: 200px;\n}\n\n.card-title {\n  white-space: normal;\n  width: 80%;\n  color: white;\n  height: 50px;\n}\n\n.like {\n  cursor: pointer;\n  font-size: 25px;\n  color: red;\n}\n\n.like:hover {\n  text-shadow: 0 0 5px rgb(165, 32, 32);\n}\n\n.popup {\n  position: fixed;\n  top: 30px;\n  background-color: rgb(9, 9, 9);\n  width: 90%;\n  height: 95%;\n  padding: 10px;\n  left: 5%;\n  text-align: center;\n  color: rgb(158, 155, 155);\n  box-shadow: 0 0 20px white;\n  z-index: 6;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.popup::-webkit-scrollbar {\n  width: 8px;\n}\n\n.popup::-webkit-scrollbar-track {\n  background: rgba(255, 166, 0, 0);\n}\n\n.popup::-webkit-scrollbar-thumb {\n  background-color: #ffc107;\n  border-radius: 20px;\n}\n\n.popup-title {\n  margin-top: 20px;\n}\n\n.popup > li {\n  width: 90%;\n  list-style: none;\n}\n\n.close {\n  width: 30px;\n  margin-left: 99%;\n  transform: translateX(-100%);\n  cursor: pointer;\n}\n\n.add-comment {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n}\n\nform {\n  width: 90%;\n  padding: 0;\n}\n\ninput {\n  margin: 10px;\n  background: #ffc107;\n  border: none;\n  box-shadow: 0 0 5px 5px #ffc107;\n  width: 100%;\n}\n\n.commentMsg {\n  height: 200px;\n}\n\n.comment-box {\n  clear: left;\n  margin: 20px;\n  width: 95%;\n}\n\n.comment-box > div {\n  padding: 5px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 200px;\n  box-shadow: 0 0 10px white;\n}\n\n.comment-box > div::-webkit-scrollbar {\n  width: 8px;\n}\n\n.comment-box > div::-webkit-scrollbar-track {\n  background: rgba(255, 166, 0, 0);\n}\n\n.comment-box > div::-webkit-scrollbar-thumb {\n  background-color: #ffc107;\n  border-radius: 20px;\n}\n\n@media (min-width: 768px) {\n  .tv-container {\n    display: grid;\n    grid-template-columns: repeat(2, auto);\n  }\n\n  .navbar {\n    height: 150px;\n  }\n\n  .popup {\n    text-align: left;\n    font-size: larger;\n  }\n\n  .popup > img {\n    float: left;\n    width: 400px;\n    margin: 20px;\n  }\n\n  .add-comment {\n    align-items: flex-start;\n  }\n\n  form {\n    width: 400px;\n    padding: 0;\n    align-items: flex-start !important;\n  }\n}\n\n@media (min-width: 910px) {\n  .tv-container {\n    display: grid;\n    grid-template-columns: repeat(3, auto);\n  }\n}\n\n@media (min-width: 1200px) {\n  .tv-container {\n    display: grid;\n    grid-template-columns: repeat(4, auto);\n  }\n}\n\n@media (min-width: 1500px) {\n  .tv-container {\n    display: grid;\n    grid-template-columns: repeat(5, auto);\n  }\n}\n\n@media (min-width: 1800px) {\n  .tv-container {\n    display: grid;\n    grid-template-columns: repeat(6, auto);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wCAAwC;AAC1C;;AAEA;EACE,iCAAiC;EACjC,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,8CAA8C;AAChD;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,eAAe;EACf,SAAS;EACT,8BAA8B;EAC9B,UAAU;EACV,WAAW;EACX,aAAa;EACb,QAAQ;EACR,kBAAkB;EAClB,yBAAyB;EACzB,0BAA0B;EAC1B,UAAU;EACV,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,+BAA+B;EAC/B,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE;IACE,aAAa;IACb,sCAAsC;EACxC;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,YAAY;IACZ,UAAU;IACV,kCAAkC;EACpC;AACF;;AAEA;EACE;IACE,aAAa;IACb,sCAAsC;EACxC;AACF;;AAEA;EACE;IACE,aAAa;IACb,sCAAsC;EACxC;AACF;;AAEA;EACE;IACE,aAAa;IACb,sCAAsC;EACxC;AACF;;AAEA;EACE;IACE,aAAa;IACb,sCAAsC;EACxC;AACF","sourcesContent":["* {\n  font-family: 'Permanent Marker', cursive;\n}\n\n.navbar {\n  background-color: rgb(30, 29, 31);\n  box-shadow: 0 0 20px white;\n  z-index: 5;\n}\n\nmain {\n  padding: 200px 10px;\n  background: rgb(31, 29, 29);\n  background-size: contain;\n}\n\nfooter > div {\n  transform: translateY(100%);\n}\n\n.bottom {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.tv-card {\n  background-color: rgb(9, 9, 9);\n  text-align: center;\n  width: 250px;\n  margin: 20px;\n  box-shadow: 0 0 10px 10px black;\n  padding: 10px 25px;\n}\n\n.tv-card:hover {\n  background-color: #ffc107;\n  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.593);\n}\n\n.card-img {\n  width: 200px;\n}\n\n.card-title {\n  white-space: normal;\n  width: 80%;\n  color: white;\n  height: 50px;\n}\n\n.like {\n  cursor: pointer;\n  font-size: 25px;\n  color: red;\n}\n\n.like:hover {\n  text-shadow: 0 0 5px rgb(165, 32, 32);\n}\n\n.popup {\n  position: fixed;\n  top: 30px;\n  background-color: rgb(9, 9, 9);\n  width: 90%;\n  height: 95%;\n  padding: 10px;\n  left: 5%;\n  text-align: center;\n  color: rgb(158, 155, 155);\n  box-shadow: 0 0 20px white;\n  z-index: 6;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.popup::-webkit-scrollbar {\n  width: 8px;\n}\n\n.popup::-webkit-scrollbar-track {\n  background: rgba(255, 166, 0, 0);\n}\n\n.popup::-webkit-scrollbar-thumb {\n  background-color: #ffc107;\n  border-radius: 20px;\n}\n\n.popup-title {\n  margin-top: 20px;\n}\n\n.popup > li {\n  width: 90%;\n  list-style: none;\n}\n\n.close {\n  width: 30px;\n  margin-left: 99%;\n  transform: translateX(-100%);\n  cursor: pointer;\n}\n\n.add-comment {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n}\n\nform {\n  width: 90%;\n  padding: 0;\n}\n\ninput {\n  margin: 10px;\n  background: #ffc107;\n  border: none;\n  box-shadow: 0 0 5px 5px #ffc107;\n  width: 100%;\n}\n\n.commentMsg {\n  height: 200px;\n}\n\n.comment-box {\n  clear: left;\n  margin: 20px;\n  width: 95%;\n}\n\n.comment-box > div {\n  padding: 5px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 200px;\n  box-shadow: 0 0 10px white;\n}\n\n.comment-box > div::-webkit-scrollbar {\n  width: 8px;\n}\n\n.comment-box > div::-webkit-scrollbar-track {\n  background: rgba(255, 166, 0, 0);\n}\n\n.comment-box > div::-webkit-scrollbar-thumb {\n  background-color: #ffc107;\n  border-radius: 20px;\n}\n\n@media (min-width: 768px) {\n  .tv-container {\n    display: grid;\n    grid-template-columns: repeat(2, auto);\n  }\n\n  .navbar {\n    height: 150px;\n  }\n\n  .popup {\n    text-align: left;\n    font-size: larger;\n  }\n\n  .popup > img {\n    float: left;\n    width: 400px;\n    margin: 20px;\n  }\n\n  .add-comment {\n    align-items: flex-start;\n  }\n\n  form {\n    width: 400px;\n    padding: 0;\n    align-items: flex-start !important;\n  }\n}\n\n@media (min-width: 910px) {\n  .tv-container {\n    display: grid;\n    grid-template-columns: repeat(3, auto);\n  }\n}\n\n@media (min-width: 1200px) {\n  .tv-container {\n    display: grid;\n    grid-template-columns: repeat(4, auto);\n  }\n}\n\n@media (min-width: 1500px) {\n  .tv-container {\n    display: grid;\n    grid-template-columns: repeat(5, auto);\n  }\n}\n\n@media (min-width: 1800px) {\n  .tv-container {\n    display: grid;\n    grid-template-columns: repeat(6, auto);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/popup.js");
/* harmony import */ var _likeAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likeAPI.js */ "./src/likeAPI.js");



const tvContainer = document.querySelector('.tv-container');

const createTvCard = (title, img, id, summary, rating, genres, premiered, ended) => {
  const tvCard = document.createElement('div');
  tvCard.className = 'tv-card';
  tvContainer.appendChild(tvCard);
  tvCard.innerHTML = `<img src="${img}" class="card-img">
  <div class="pt-3 d-flex justify-content-between">
    <h6 class="card-title">${title}</h6>
    <p class="like m-0 p-0">♡</p>
  </div>
  <p><span class="like-num">0</span> Likes</p>
  <button class="btn btn-outline-warning m-2">Comments</button>`;
  const likeNum = tvCard.children[2].children[0];
  (0,_likeAPI_js__WEBPACK_IMPORTED_MODULE_1__.findItemsLike)(id, likeNum);
  tvCard.addEventListener('mouseover', () => {
    tvCard.children[3].classList.remove('btn-outline-warning');
    tvCard.children[3].classList.add('btn-outline-dark');
  });
  tvCard.addEventListener('mouseout', () => {
    tvCard.children[3].classList.remove('btn-outline-dark');
    tvCard.children[3].classList.add('btn-outline-warning');
  });
  tvCard.children[1].children[1].addEventListener('click', () => {
    tvCard.children[1].children[1].textContent = '❤';
    (0,_likeAPI_js__WEBPACK_IMPORTED_MODULE_1__.createLike)(id).then(() => {
      (0,_likeAPI_js__WEBPACK_IMPORTED_MODULE_1__.findItemsLike)(id, likeNum);
    });
  });
  tvCard.children[3].addEventListener('click', () => {
    (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tvCard, id, title, img, summary, rating, genres, premiered, ended);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTvCard);

/***/ }),

/***/ "./src/commentAPI.js":
/*!***************************!*\
  !*** ./src/commentAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createComment": () => (/* binding */ createComment),
/* harmony export */   "getComments": () => (/* binding */ getComments)
/* harmony export */ });
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2wJIndvNC11I75HcrW5Y/comments';

const createComment = async (id, username, comment) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ item_id: id, username, comment }),
    headers: {
      'Content-Type': 'application/json',
    },

  });
  return response.status;
};

const getComments = async (id) => {
  const response = await fetch(`${url}?item_id=${id}`, { mode: 'cors' });
  if (!response.ok) {
    throw new Error(`Error to get API: ${response.status}`);
  }
  const data = await response.json();
  return data;
};



/***/ }),

/***/ "./src/counter.js":
/*!************************!*\
  !*** ./src/counter.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commentCounter": () => (/* binding */ commentCounter),
/* harmony export */   "itemCounter": () => (/* binding */ itemCounter)
/* harmony export */ });
const commentCounter = (list) => list.length;

const itemCounter = (list) => list.length;



/***/ }),

/***/ "./src/displayAPI.js":
/*!***************************!*\
  !*** ./src/displayAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ "./src/counter.js");



const itemCount = document.querySelector('.item-count');
const TVurl = 'https://api.tvmaze.com/shows/';
let count = 1;

const getTvData = async (id) => {
  const response = await fetch(TVurl + id, { mode: 'cors' });
  if (!response.ok) {
    throw new Error(`Error to get API: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

const showTvCards = () => {
  while (count < 100) {
    getTvData(count).then((data) => {
      const list = [data.name,
        data.image.medium,
        data.id, data.summary,
        data.rating.average,
        data.genres,
        data.premiered,
        data.ended];
      (0,_UI_js__WEBPACK_IMPORTED_MODULE_0__["default"])(...list);
      itemCount.textContent = (0,_counter_js__WEBPACK_IMPORTED_MODULE_1__.itemCounter)(document.querySelectorAll('.tv-card'));
    });
    count += 1;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTvCards);

/***/ }),

/***/ "./src/likeAPI.js":
/*!************************!*\
  !*** ./src/likeAPI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLike": () => (/* binding */ createLike),
/* harmony export */   "findItemsLike": () => (/* binding */ findItemsLike)
/* harmony export */ });
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2wJIndvNC11I75HcrW5Y/likes';

const createLike = async (id) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-Type': 'application/json',
    },

  });
  return response.status;
};

const getLike = async () => {
  const response = await fetch(url, { mode: 'cors' });
  if (!response.ok) {
    throw new Error(`Error to get API: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

const findItemsLike = (id, likeNum) => {
  getLike().then((data) => {
    data.forEach((element) => {
      if (element.item_id === id) {
        likeNum.textContent = element.likes;
      }
    });
  });
};



/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentAPI.js */ "./src/commentAPI.js");
/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ "./src/counter.js");



const popup = (container, id, title, img, summary, rating, genres, premiered, ended) => {
  const popup = document.createElement('div');
  popup.className = 'popup';
  container.appendChild(popup);
  popup.innerHTML = `<div class="py-2 h3 cursor-pointer close">X</div>
  <img src="${img}"/>
  <h3 class="popup-title text-warning">${title}</h3>
  <h4 class="text-warning">${premiered.substring(0, 4)} - ${ended ? ended.substring(0, 4) : ''}</h4>
  <h6>Genre: ${genres}</h6>
  <p>Rating: ${rating}</p>
  <h4>Summary:</h4>
  <p>${summary}</p>`;

  const commentsBox = document.createElement('div');
  commentsBox.className = 'comment-box';
  popup.appendChild(commentsBox);
  commentsBox.innerHTML = '<h4>Comments (<span>0</span>)</h4><div></div>';

  (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id).then((data) => {
    data.forEach((element) => {
      const p = document.createElement('p');
      p.className = `comment-${id}`;
      p.textContent = `${element.creation_date} ${element.username}: ${element.comment}`;
      commentsBox.children[1].appendChild(p);
    });
    commentsBox.children[0].children[0].textContent = (0,_counter_js__WEBPACK_IMPORTED_MODULE_1__.commentCounter)(document.querySelectorAll(`.comment-${id}`));
  });

  const addComment = document.createElement('div');
  addComment.className = 'add-comment';
  popup.appendChild(addComment);
  addComment.innerHTML = `<h4>Add a comment</h4>
  <form class="d-flex flex-column align-items-center">
    <input type="text" placeholder="Your name">
    <input class="commentMsg" type="text" placeholder="Your insights">
    <button type="submit" class="btn btn-outline-warning my-3">Comment</button>
  </form>`;
  popup.children[0].addEventListener('click', () => {
    popup.remove();
  });

  addComment.children[1].addEventListener('submit', (e) => {
    e.preventDefault();
    (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_0__.createComment)(id, e.target.children[0].value, e.target.children[1].value).then(() => {
      (0,_commentAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id).then((data) => {
        const element = data[data.length - 1];
        const p = document.createElement('p');
        p.textContent = `${element.creation_date} ${element.username}: ${element.comment}`;
        commentsBox.children[1].appendChild(p);
      });
    });
    e.target.children[0].value = '';
    e.target.children[1].value = '';
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _displayAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayAPI.js */ "./src/displayAPI.js");



(0,_displayAPI_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNxQjs7QUFFMUMsMERBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvbmRlcmZ1bC1UVlNob3dzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93b25kZXJmdWwtVFZTaG93cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd29uZGVyZnVsLVRWU2hvd3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93b25kZXJmdWwtVFZTaG93cy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93b25kZXJmdWwtVFZTaG93cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93b25kZXJmdWwtVFZTaG93cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd29uZGVyZnVsLVRWU2hvd3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd29uZGVyZnVsLVRWU2hvd3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd29uZGVyZnVsLVRWU2hvd3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93b25kZXJmdWwtVFZTaG93cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dvbmRlcmZ1bC1UVlNob3dzLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3dvbmRlcmZ1bC1UVlNob3dzLy4vc3JjL2NvbW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vd29uZGVyZnVsLVRWU2hvd3MvLi9zcmMvY291bnRlci5qcyIsIndlYnBhY2s6Ly93b25kZXJmdWwtVFZTaG93cy8uL3NyYy9kaXNwbGF5QVBJLmpzIiwid2VicGFjazovL3dvbmRlcmZ1bC1UVlNob3dzLy4vc3JjL2xpa2VBUEkuanMiLCJ3ZWJwYWNrOi8vd29uZGVyZnVsLVRWU2hvd3MvLi9zcmMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vd29uZGVyZnVsLVRWU2hvd3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29uZGVyZnVsLVRWU2hvd3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd29uZGVyZnVsLVRWU2hvd3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dvbmRlcmZ1bC1UVlNob3dzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd29uZGVyZnVsLVRWU2hvd3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b25kZXJmdWwtVFZTaG93cy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd29uZGVyZnVsLVRWU2hvd3MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcicsIGN1cnNpdmU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyOSwgMzEpO1xcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggd2hpdGU7XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDIwMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDI5LCAyOSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbmZvb3RlciA+IGRpdiB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG59XFxuXFxuLnR2LWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDksIDkpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMTBweCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcXG59XFxuXFxuLnR2LWNhcmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjU5Myk7XFxufVxcblxcbi5jYXJkLWltZyB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB3aWR0aDogODAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubGlrZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubGlrZTpob3ZlciB7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2IoMTY1LCAzMiwgMzIpO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDksIDksIDkpO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTUlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGxlZnQ6IDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYigxNTgsIDE1NSwgMTU1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHdoaXRlO1xcbiAgei1pbmRleDogNjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogOHB4O1xcbn1cXG5cXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNjYsIDAsIDApO1xcbn1cXG5cXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4ucG9wdXAtdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnBvcHVwID4gbGkge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5jbG9zZSB7XFxuICB3aWR0aDogMzBweDtcXG4gIG1hcmdpbi1sZWZ0OiA5OSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmlucHV0IHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmMxMDc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDVweCAjZmZjMTA3O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb21tZW50TXNnIHtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcblxcbi5jb21tZW50LWJveCB7XFxuICBjbGVhcjogbGVmdDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbi5jb21tZW50LWJveCA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggd2hpdGU7XFxufVxcblxcbi5jb21tZW50LWJveCA+IGRpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDhweDtcXG59XFxuXFxuLmNvbW1lbnQtYm94ID4gZGl2Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTY2LCAwLCAwKTtcXG59XFxuXFxuLmNvbW1lbnQtYm94ID4gZGl2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAudHYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5wb3B1cCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgfVxcblxcbiAgLnBvcHVwID4gaW1nIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgfVxcblxcbiAgLmFkZC1jb21tZW50IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuXFxuICBmb3JtIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTEwcHgpIHtcXG4gIC50di1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLnR2LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XFxuICAudHYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgYXV0byk7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHtcXG4gIC50di1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCBhdXRvKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGtDQUFrQztFQUNwQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0NBQXNDO0VBQ3hDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQ0FBc0M7RUFDeEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNDQUFzQztFQUN4QztBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0NBQXNDO0VBQ3hDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMjksIDMxKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHdoaXRlO1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiAyMDBweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDMxLCAyOSwgMjkpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG5mb290ZXIgPiBkaXYge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcblxcbi50di1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCA5LCA5KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDEwcHggYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxufVxcblxcbi50di1jYXJkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41OTMpO1xcbn1cXG5cXG4uY2FyZC1pbWcge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmxpa2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmxpa2U6aG92ZXIge1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiKDE2NSwgMzIsIDMyKTtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCA5LCA5KTtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBsZWZ0OiA1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoMTU4LCAxNTUsIDE1NSk7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCB3aGl0ZTtcXG4gIHotaW5kZXg6IDY7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDhweDtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTY2LCAwLCAwKTtcXG59XFxuXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnBvcHVwLXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5wb3B1cCA+IGxpIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBtYXJnaW4tbGVmdDogOTklO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCA1cHggI2ZmYzEwNztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29tbWVudE1zZyB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4uY29tbWVudC1ib3gge1xcbiAgY2xlYXI6IGxlZnQ7XFxuICBtYXJnaW46IDIwcHg7XFxuICB3aWR0aDogOTUlO1xcbn1cXG5cXG4uY29tbWVudC1ib3ggPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHdoaXRlO1xcbn1cXG5cXG4uY29tbWVudC1ib3ggPiBkaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA4cHg7XFxufVxcblxcbi5jb21tZW50LWJveCA+IGRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE2NiwgMCwgMCk7XFxufVxcblxcbi5jb21tZW50LWJveCA+IGRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnR2LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcbiAgfVxcblxcbiAgLm5hdmJhciB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICB9XFxuXFxuICAucG9wdXAge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gIH1cXG5cXG4gIC5wb3B1cCA+IGltZyB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gIH1cXG5cXG4gIC5hZGQtY29tbWVudCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgZm9ybSB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDkxMHB4KSB7XFxuICAudHYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC50di1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBhdXRvKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xcbiAgLnR2LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIGF1dG8pO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XFxuICAudHYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgYXV0byk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHBvcHVwIGZyb20gJy4vcG9wdXAuanMnO1xuaW1wb3J0IHsgY3JlYXRlTGlrZSwgZmluZEl0ZW1zTGlrZSB9IGZyb20gJy4vbGlrZUFQSS5qcyc7XG5cbmNvbnN0IHR2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR2LWNvbnRhaW5lcicpO1xuXG5jb25zdCBjcmVhdGVUdkNhcmQgPSAodGl0bGUsIGltZywgaWQsIHN1bW1hcnksIHJhdGluZywgZ2VucmVzLCBwcmVtaWVyZWQsIGVuZGVkKSA9PiB7XG4gIGNvbnN0IHR2Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0dkNhcmQuY2xhc3NOYW1lID0gJ3R2LWNhcmQnO1xuICB0dkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0dkNhcmQpO1xuICB0dkNhcmQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtpbWd9XCIgY2xhc3M9XCJjYXJkLWltZ1wiPlxuICA8ZGl2IGNsYXNzPVwicHQtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICA8aDYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHt0aXRsZX08L2g2PlxuICAgIDxwIGNsYXNzPVwibGlrZSBtLTAgcC0wXCI+4pmhPC9wPlxuICA8L2Rpdj5cbiAgPHA+PHNwYW4gY2xhc3M9XCJsaWtlLW51bVwiPjA8L3NwYW4+IExpa2VzPC9wPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmcgbS0yXCI+Q29tbWVudHM8L2J1dHRvbj5gO1xuICBjb25zdCBsaWtlTnVtID0gdHZDYXJkLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdO1xuICBmaW5kSXRlbXNMaWtlKGlkLCBsaWtlTnVtKTtcbiAgdHZDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICB0dkNhcmQuY2hpbGRyZW5bM10uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLW91dGxpbmUtd2FybmluZycpO1xuICAgIHR2Q2FyZC5jaGlsZHJlblszXS5jbGFzc0xpc3QuYWRkKCdidG4tb3V0bGluZS1kYXJrJyk7XG4gIH0pO1xuICB0dkNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgdHZDYXJkLmNoaWxkcmVuWzNdLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1vdXRsaW5lLWRhcmsnKTtcbiAgICB0dkNhcmQuY2hpbGRyZW5bM10uY2xhc3NMaXN0LmFkZCgnYnRuLW91dGxpbmUtd2FybmluZycpO1xuICB9KTtcbiAgdHZDYXJkLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHR2Q2FyZC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9ICfinaQnO1xuICAgIGNyZWF0ZUxpa2UoaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgZmluZEl0ZW1zTGlrZShpZCwgbGlrZU51bSk7XG4gICAgfSk7XG4gIH0pO1xuICB0dkNhcmQuY2hpbGRyZW5bM10uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wdXAodHZDYXJkLCBpZCwgdGl0bGUsIGltZywgc3VtbWFyeSwgcmF0aW5nLCBnZW5yZXMsIHByZW1pZXJlZCwgZW5kZWQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVR2Q2FyZDsiLCJjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMndKSW5kdk5DMTFJNzVIY3JXNVkvY29tbWVudHMnO1xuXG5jb25zdCBjcmVhdGVDb21tZW50ID0gYXN5bmMgKGlkLCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaWQsIHVzZXJuYW1lLCBjb21tZW50IH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcblxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cztcbn07XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfT9pdGVtX2lkPSR7aWR9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHRvIGdldCBBUEk6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29tbWVudCwgZ2V0Q29tbWVudHMgfTsiLCJjb25zdCBjb21tZW50Q291bnRlciA9IChsaXN0KSA9PiBsaXN0Lmxlbmd0aDtcblxuY29uc3QgaXRlbUNvdW50ZXIgPSAobGlzdCkgPT4gbGlzdC5sZW5ndGg7XG5cbmV4cG9ydCB7IGNvbW1lbnRDb3VudGVyLCBpdGVtQ291bnRlciB9OyIsImltcG9ydCBjcmVhdGVUdkNhcmQgZnJvbSAnLi9VSS5qcyc7XG5pbXBvcnQgeyBpdGVtQ291bnRlciB9IGZyb20gJy4vY291bnRlci5qcyc7XG5cbmNvbnN0IGl0ZW1Db3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWNvdW50Jyk7XG5jb25zdCBUVnVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyc7XG5sZXQgY291bnQgPSAxO1xuXG5jb25zdCBnZXRUdkRhdGEgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChUVnVybCArIGlkLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgdG8gZ2V0IEFQSTogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBzaG93VHZDYXJkcyA9ICgpID0+IHtcbiAgd2hpbGUgKGNvdW50IDwgMTAwKSB7XG4gICAgZ2V0VHZEYXRhKGNvdW50KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsaXN0ID0gW2RhdGEubmFtZSxcbiAgICAgICAgZGF0YS5pbWFnZS5tZWRpdW0sXG4gICAgICAgIGRhdGEuaWQsIGRhdGEuc3VtbWFyeSxcbiAgICAgICAgZGF0YS5yYXRpbmcuYXZlcmFnZSxcbiAgICAgICAgZGF0YS5nZW5yZXMsXG4gICAgICAgIGRhdGEucHJlbWllcmVkLFxuICAgICAgICBkYXRhLmVuZGVkXTtcbiAgICAgIGNyZWF0ZVR2Q2FyZCguLi5saXN0KTtcbiAgICAgIGl0ZW1Db3VudC50ZXh0Q29udGVudCA9IGl0ZW1Db3VudGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50di1jYXJkJykpO1xuICAgIH0pO1xuICAgIGNvdW50ICs9IDE7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dUdkNhcmRzOyIsImNvbnN0IHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8yd0pJbmR2TkMxMUk3NUhjclc1WS9saWtlcyc7XG5cbmNvbnN0IGNyZWF0ZUxpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcblxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cztcbn07XG5cbmNvbnN0IGdldExpa2UgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgdG8gZ2V0IEFQSTogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBmaW5kSXRlbXNMaWtlID0gKGlkLCBsaWtlTnVtKSA9PiB7XG4gIGdldExpa2UoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5pdGVtX2lkID09PSBpZCkge1xuICAgICAgICBsaWtlTnVtLnRleHRDb250ZW50ID0gZWxlbWVudC5saWtlcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMaWtlLCBmaW5kSXRlbXNMaWtlIH07IiwiaW1wb3J0IHsgY3JlYXRlQ29tbWVudCwgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2NvbW1lbnRBUEkuanMnO1xuaW1wb3J0IHsgY29tbWVudENvdW50ZXIgfSBmcm9tICcuL2NvdW50ZXIuanMnO1xuXG5jb25zdCBwb3B1cCA9IChjb250YWluZXIsIGlkLCB0aXRsZSwgaW1nLCBzdW1tYXJ5LCByYXRpbmcsIGdlbnJlcywgcHJlbWllcmVkLCBlbmRlZCkgPT4ge1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3B1cC5jbGFzc05hbWUgPSAncG9wdXAnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXApO1xuICBwb3B1cC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInB5LTIgaDMgY3Vyc29yLXBvaW50ZXIgY2xvc2VcIj5YPC9kaXY+XG4gIDxpbWcgc3JjPVwiJHtpbWd9XCIvPlxuICA8aDMgY2xhc3M9XCJwb3B1cC10aXRsZSB0ZXh0LXdhcm5pbmdcIj4ke3RpdGxlfTwvaDM+XG4gIDxoNCBjbGFzcz1cInRleHQtd2FybmluZ1wiPiR7cHJlbWllcmVkLnN1YnN0cmluZygwLCA0KX0gLSAke2VuZGVkID8gZW5kZWQuc3Vic3RyaW5nKDAsIDQpIDogJyd9PC9oND5cbiAgPGg2PkdlbnJlOiAke2dlbnJlc308L2g2PlxuICA8cD5SYXRpbmc6ICR7cmF0aW5nfTwvcD5cbiAgPGg0PlN1bW1hcnk6PC9oND5cbiAgPHA+JHtzdW1tYXJ5fTwvcD5gO1xuXG4gIGNvbnN0IGNvbW1lbnRzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbW1lbnRzQm94LmNsYXNzTmFtZSA9ICdjb21tZW50LWJveCc7XG4gIHBvcHVwLmFwcGVuZENoaWxkKGNvbW1lbnRzQm94KTtcbiAgY29tbWVudHNCb3guaW5uZXJIVE1MID0gJzxoND5Db21tZW50cyAoPHNwYW4+MDwvc3Bhbj4pPC9oND48ZGl2PjwvZGl2Pic7XG5cbiAgZ2V0Q29tbWVudHMoaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwLmNsYXNzTmFtZSA9IGBjb21tZW50LSR7aWR9YDtcbiAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9ICR7ZWxlbWVudC51c2VybmFtZX06ICR7ZWxlbWVudC5jb21tZW50fWA7XG4gICAgICBjb21tZW50c0JveC5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChwKTtcbiAgICB9KTtcbiAgICBjb21tZW50c0JveC5jaGlsZHJlblswXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGNvbW1lbnRDb3VudGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jb21tZW50LSR7aWR9YCkpO1xuICB9KTtcblxuICBjb25zdCBhZGRDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZENvbW1lbnQuY2xhc3NOYW1lID0gJ2FkZC1jb21tZW50JztcbiAgcG9wdXAuYXBwZW5kQ2hpbGQoYWRkQ29tbWVudCk7XG4gIGFkZENvbW1lbnQuaW5uZXJIVE1MID0gYDxoND5BZGQgYSBjb21tZW50PC9oND5cbiAgPGZvcm0gY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJjb21tZW50TXNnXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nIG15LTNcIj5Db21tZW50PC9idXR0b24+XG4gIDwvZm9ybT5gO1xuICBwb3B1cC5jaGlsZHJlblswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3B1cC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgYWRkQ29tbWVudC5jaGlsZHJlblsxXS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjcmVhdGVDb21tZW50KGlkLCBlLnRhcmdldC5jaGlsZHJlblswXS52YWx1ZSwgZS50YXJnZXQuY2hpbGRyZW5bMV0udmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgZ2V0Q29tbWVudHMoaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFbZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtlbGVtZW50LnVzZXJuYW1lfTogJHtlbGVtZW50LmNvbW1lbnR9YDtcbiAgICAgICAgY29tbWVudHNCb3guY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQocCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBlLnRhcmdldC5jaGlsZHJlblswXS52YWx1ZSA9ICcnO1xuICAgIGUudGFyZ2V0LmNoaWxkcmVuWzFdLnZhbHVlID0gJyc7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9wdXA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgc2hvd1R2Q2FyZHMgZnJvbSAnLi9kaXNwbGF5QVBJLmpzJztcblxuc2hvd1R2Q2FyZHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=