/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/showHolesForm.js":
/*!******************************!*\
  !*** ./src/showHolesForm.js ***!
  \******************************/
/***/ (() => {

var form = document.forms.myForm;
var divtPholeLT = document.getElementById("tPholeLT");
var divtPholeLB = document.getElementById("tPholeLB");
var divtPholeRT = document.getElementById("tPholeRT");
var divtPholeRB = document.getElementById("tPholeRB");
form.cbHoleLT.onchange = show;
form.cbHoleLB.onchange = show;
form.cbHoleRT.onchange = show;
form.cbHoleRB.onchange = show;

function show() {
  if (form.cbHoleLT.checked) {
    divtPholeLT.classList.remove("hide");
  } else {
    divtPholeLT.classList.add("hide");
  }

  if (form.cbHoleLB.checked) {
    divtPholeLB.classList.remove("hide");
  } else {
    divtPholeLB.classList.add("hide");
  }

  if (form.cbHoleRT.checked) {
    divtPholeRT.classList.remove("hide");
  } else {
    divtPholeRT.classList.add("hide");
  }

  if (form.cbHoleRB.checked) {
    divtPholeRB.classList.remove("hide");
  } else {
    divtPholeRB.classList.add("hide");
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 62.5%;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  /* outline: 1px solid rgba(0, 0, 0, 0.1); */\n}\n\nbody {\n  height: 100vh;\n  font-size: 2rem;\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: 10px solid pink;\n  /* overflow: hidden; */\n}\n\n.wrapper {\n  background: #dfffff;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  outline: 10px sold blue;\n  /* padding: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.171); */\n}\n\nform {\n  margin-top: 60vh;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  /* overflow: scroll; */\n}\n\n.info {\n  position: fixed;\n  font-size: 1rem;\n  top: 1rem;\n  left: 100px;\n  /* width: 100%; */\n  /* height: 50px; */\n  background: transparent;\n  z-index: 10;\n}\n\n.info span {\n  margin: 1rem;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n#canvas {\n  /* border: 2px solid black; */\n  /* border-radius: 10px; */\n  background-color: white;\n  top: 5px;\n  /* width: 102%; */\n  overflow: hidden;\n}\n\n#canvasWrapper {\n  position: fixed;\n  /* top: 4px; */\n  top: 0;\n  left: center;\n  z-index: 1;\n  width: 100%;\n}\n\n.dxfLink {\n  font-size: 1rem;\n  position: fixed;\n  top: 15px;\n  right: 30px;\n  z-index: 10;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 10px;\n  font-size: 1rem;\n}\n\n#controls {\n  position: absolute;\n  top: 40px;\n  left: 4px;\n}\n\n#xycoordinates {\n  position: fixed;\n  right: 10px;\n  top: calc(60vh - 30px);\n  padding: 10px;\n  z-index: 10;\n}\n\n.zoomButtons {\n  position: fixed;\n  top: 10px;\n  left: 10px;\n  z-index: 10;\n}\n\nbutton {\n  display: inline-block;\n  padding: 3px;\n  margin: 0;\n  cursor: pointer;\n}\n\n.zoomButtons svg {\n  width: 20px;\n  height: 20px;\n}\n\n#diceOne {\n  font-size: 18px;\n  padding: 2px;\n}\n\n#diceFour {\n  font-size: 24px;\n  padding: 2px;\n}\n\n/* ********************************************************************* */\n#alignWithSpots,\n#forceRibbon {\n  display: inline-block;\n  margin-left: 100px;\n}\n\n.styled {\n  cursor: pointer;\n  font-family: \"Roboto\", sans-serif;\n  border: 0;\n  line-height: 2;\n  padding: 0 2.5rem;\n  font-size: 1rem;\n  text-align: center;\n  color: #fff;\n  text-shadow: 1px 1px 1px #000;\n  border-radius: 5px;\n  background-color: blue;\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n}\n\n.styled:hover {\n  background-color: #0077ff;\n}\n\n.styled:active {\n  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);\n}\n\ninput,\nselect {\n  font-family: \"Roboto\", sans-serif;\n  width: 50%;\n  padding: 2px;\n  border-radius: 5px;\n  border: 1px solid black;\n  font-size: 1.2rem;\n}\n\n.field {\n  padding: 0 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\nh3 {\n  font-size: 1.2rem;\n  text-align: center;\n  margin-bottom: 0.5rem;\n}\n\n.fas,\n.far {\n  padding: 0rem 1rem;\n  z-index: 10;\n}\n\n.holeOnRT,\n.holeOnRB,\n.holeOnLT,\n.holeOnLB,\n.bottomPlt,\n.topPlt,\n.topPltOffset,\n.holesOnTopPlate,\n.weldingPattern,\n.seamPos,\n.holesOnTopPlate {\n  margin: 5px 2px 0 2px;\n  padding-top: 0.5rem;\n  padding-bottom: 0.1rem;\n  border-radius: 10px;\n  border: 2px solid black;\n}\n\n.bottomPlt {\n  border: 2px solid green;\n}\n\n.topPlt {\n  border: 2px solid orange;\n}\n\n.weldingPattern {\n  border: 2px solid blue;\n}\n\n.seamPos {\n  border: 2px solid lightgreen;\n}\n\n.holesOnTopPlate {\n  border: 2px solid orange;\n}\n\n.holesOnTP {\n  position: relative;\n  border: 2px solid orange;\n  border-radius: 2px;\n  width: 80%;\n  height: 80px;\n  margin: 0 auto 10px;\n}\n\n.hLT,\n.hRT,\n.hLB,\n.hRB {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n}\n\n.hLT {\n  top: 5px;\n  left: 5px;\n}\n\n.hLB {\n  bottom: 5px;\n  left: 5px;\n}\n\n.hRT {\n  top: 5px;\n  right: 5px;\n}\n\n.hRB {\n  bottom: 5px;\n  right: 5px;\n}\n\n.holesOnTPmiddleSign {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 1.2rem;\n  text-align: center;\n}\n\ninput[type=checkbox] {\n  position: absolute;\n  cursor: pointer;\n  padding: 15px;\n  height: 20px;\n  width: 20px;\n  border-radius: 10px;\n}\n\n.holesOnTP > input {\n  width: 100%;\n}\n\nhr {\n  margin: 1rem;\n}\n\n.hide {\n  display: none;\n}\n\n@media all and (min-width: 600px) {\n  body {\n    background-color: gray;\n  }\n}\n/* # sourceMappingURL=/style.e308ff8e.css.map */", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAEA;EACE,gBAAA;AAAF;;AAGA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;EACA,2CAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,iCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,wBAAA;EACA,sBAAA;AAAF;;AAGA;EACE,mBAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,uBAAA;EACA;8CAAA;AACF;;AAGA;EACE,gBAAA;EACA,WAAA;EACA,aAAA;EACA,4DAAA;EACA,sBAAA;AAAF;;AAGA;EACE,eAAA;EACA,eAAA;EACA,SAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;EACA,WAAA;AAAF;;AAEA;EACE,YAAA;EACA,yBAAA;AACF;;AAEA;EACE,6BAAA;EACA,yBAAA;EACA,uBAAA;EACA,QAAA;EACA,iBAAA;EACA,gBAAA;AACF;;AAEA;EACE,eAAA;EACA,cAAA;EACA,MAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AACF;;AAEA;EACE,eAAA;EACA,eAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;AACF;;AAEA;EACE,cAAA;EACA,mBAAA;EACA,eAAA;AACF;;AAEA;EACE,kBAAA;EACA,SAAA;EACA,SAAA;AACF;;AAEA;EACE,eAAA;EACA,WAAA;EACA,sBAAA;EACA,aAAA;EACA,WAAA;AACF;;AAEA;EAEE,eAAA;EACA,SAAA;EACA,UAAA;EACE,WAAA;AAAJ;;AAGA;EACE,qBAAA;EACA,YAAA;EACA,SAAA;EACA,eAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;AAAF;;AAGA;EACE,eAAA;EACA,YAAA;AAAF;;AAEA;EACE,eAAA;EACA,YAAA;AACF;;AACA,0EAAA;AAEA;;EAEE,qBAAA;EACA,kBAAA;AACF;;AAEA;EACE,eAAA;EACA,iCAAA;EACA,SAAA;EACA,cAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,WAAA;EACA,6BAAA;EACA,kBAAA;EACA,sBAAA;EACA,4GAAA;EACA,8FAAA;AACF;;AAEA;EACE,yBAAA;AACF;;AAEA;EACE,8FAAA;AACF;;AAEA;;EAEE,iCAAA;EACA,UAAA;EACA,YAAA;EACA,kBAAA;EACA,uBAAA;EACA,iBAAA;AACF;;AAEA;EACE,eAAA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;AACF;;AAEA;EACE,iBAAA;EACA,kBAAA;EACA,qBAAA;AACF;;AAEA;;EAEE,kBAAA;EACA,WAAA;AACF;;AAEA;;;;;;;;;;;EAWE,qBAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AACF;;AASA;EACE,uBAAA;AANF;;AASA;EACE,wBAAA;AANF;;AASA;EACE,sBAAA;AANF;;AASA;EACE,4BAAA;AANF;;AASA;EACE,wBAAA;AANF;;AASA;EACE,kBAAA;EACA,wBAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,mBAAA;AANF;;AASA;;;;EAIE,kBAAA;EACA,WAAA;EACA,YAAA;AANF;;AASA;EACE,QAAA;EACA,SAAA;AANF;;AASA;EACE,WAAA;EACA,SAAA;AANF;;AASA;EACE,QAAA;EACA,UAAA;AANF;;AASA;EACE,WAAA;EACA,UAAA;AANF;;AASA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,iBAAA;EACA,kBAAA;AANF;;AASA;EACE,kBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;AANF;;AASA;EACE,WAAA;AANF;;AASA;EACE,YAAA;AANF;;AASA;EACE,aAAA;AANF;;AAYA;EACE;IACE,sBAAA;EATF;AACF;AAYA,+CAAA","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\n\n:root {\n  font-size: 62.5%;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  /* outline: 1px solid rgba(0, 0, 0, 0.1); */\n}\n\nbody {\n  height: 100vh;\n  font-size: 2rem;\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: 10px solid pink;\n  /* overflow: hidden; */\n}\n\n.wrapper {\n  background: rgb(223, 255, 255);\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  outline: 10px sold blue;\n  /* padding: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.171); */\n}\n\nform {\n  margin-top: 60vh;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  /* overflow: scroll; */\n}\n\n.info {\n  position: fixed;\n  font-size: 1rem;\n  top: 1rem;\n  left: 100px;\n  /* width: 100%; */\n  /* height: 50px; */\n  background: transparent;\n  z-index: 10;\n}\n.info span {\n  margin: 1rem;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n#canvas {\n  /* border: 2px solid black; */\n  /* border-radius: 10px; */\n  background-color: rgb(255, 255, 255);\n  top: 5px;\n  /* width: 102%; */\n  overflow: hidden;\n}\n\n#canvasWrapper {\n  position: fixed;\n  /* top: 4px; */\n  top: 0;\n  left: center;\n  z-index: 1;\n  width: 100%;\n}\n\n.dxfLink {\n  font-size: 1rem;\n  position: fixed;\n  top: 15px;\n  right: 30px;\n  z-index: 10;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 10px;\n  font-size: 1rem;\n}\n\n#controls {\n  position: absolute;\n  top: 40px;\n  left: 4px;\n}\n\n#xycoordinates {\n  position: fixed;\n  right: 10px;\n  top: calc(60vh - 30px);\n  padding: 10px;\n  z-index: 10;\n}\n\n.zoomButtons {\n \n  position: fixed;\n  top: 10px;\n  left: 10px;\n    z-index: 10;\n}\n\nbutton {\n  display: inline-block;\n  padding: 3px;\n  margin: 0;\n  cursor: pointer;\n}\n\n.zoomButtons svg {\n  width: 20px;\n  height: 20px;\n}\n\n#diceOne {\n  font-size: 18px;\n  padding: 2px;\n}\n#diceFour {\n  font-size: 24px;\n  padding: 2px;\n}\n/* ********************************************************************* */\n\n#alignWithSpots,\n#forceRibbon {\n  display: inline-block;\n  margin-left: 100px;\n}\n\n.styled {\n  cursor: pointer;\n  font-family: \"Roboto\", sans-serif;\n  border: 0;\n  line-height: 2;\n  padding: 0 2.5rem;\n  font-size: 1rem;\n  text-align: center;\n  color: #fff;\n  text-shadow: 1px 1px 1px #000;\n  border-radius: 5px;\n  background-color: rgb(0, 0, 255);\n  background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));\n  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);\n}\n\n.styled:hover {\n  background-color: rgb(0, 119, 255);\n}\n\n.styled:active {\n  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);\n}\n\ninput,\nselect {\n  font-family: \"Roboto\", sans-serif;\n  width: 50%;\n  padding: 2px;\n  border-radius: 5px;\n  border: 1px solid black;\n  font-size: 1.2rem;\n}\n\n.field {\n  padding: 0 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\nh3 {\n  font-size: 1.2rem;\n  text-align: center;\n  margin-bottom: 0.5rem;\n}\n\n.fas,\n.far {\n  padding: 0rem 1rem;\n  z-index: 10;\n}\n\n.holeOnRT,\n.holeOnRB,\n.holeOnLT,\n.holeOnLB,\n.bottomPlt,\n.topPlt,\n.topPltOffset,\n.holesOnTopPlate,\n.weldingPattern,\n.seamPos,\n.holesOnTopPlate {\n  margin: 5px 2px 0 2px;\n  padding-top: 0.5rem;\n  padding-bottom: 0.1rem;\n  border-radius: 10px;\n  border: 2px solid black;\n}\n\n// .holeOnRT,\n// .holeOnRB,\n// .holeOnLT,\n// .holeOnLB{\n//   margin: 2px 2px 0 2px;\n// }\n\n.bottomPlt {\n  border: 2px solid green;\n}\n\n.topPlt {\n  border: 2px solid orange;\n}\n\n.weldingPattern {\n  border: 2px solid blue;\n}\n\n.seamPos {\n  border: 2px solid lightgreen;\n}\n\n.holesOnTopPlate {\n  border: 2px solid orange;\n}\n\n.holesOnTP {\n  position: relative;\n  border: 2px solid orange;\n  border-radius: 2px;\n  width: 80%;\n  height: 80px;\n  margin: 0 auto 10px;\n}\n\n.hLT,\n.hRT,\n.hLB,\n.hRB {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n}\n\n.hLT {\n  top: 5px;\n  left: 5px;\n}\n\n.hLB {\n  bottom: 5px;\n  left: 5px;\n}\n\n.hRT {\n  top: 5px;\n  right: 5px;\n}\n\n.hRB {\n  bottom: 5px;\n  right: 5px;\n}\n\n.holesOnTPmiddleSign {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 1.2rem;\n  text-align: center;\n}\n\ninput[type=\"checkbox\"] {\n  position: absolute;\n  cursor: pointer;\n  padding: 15px;\n  height: 20px;\n  width: 20px;\n  border-radius: 10px;\n}\n\n.holesOnTP > input {\n  width: 100%;\n}\n\nhr {\n  margin: 1rem;\n}\n\n.hide {\n  display: none;\n}\n// .holeOnRT {\n//   display: none;\n// }\n\n@media all and (min-width: 600px) {\n  body {\n    background-color: gray;\n  }\n}\n\n/* # sourceMappingURL=/style.e308ff8e.css.map */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./node_modules/dxf-writer/index.js":
/*!******************************************!*\
  !*** ./node_modules/dxf-writer/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./src/Drawing */ "./node_modules/dxf-writer/src/Drawing.js");

/***/ }),

/***/ "./node_modules/dxf-writer/src/AppId.js":
/*!**********************************************!*\
  !*** ./node_modules/dxf-writer/src/AppId.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class AppId extends DatabaseObject {
    constructor(name) {
        super(["AcDbSymbolTableRecord", "AcDbRegAppTableRecord"]);
        this.name = name;
    }

    tags() {
        const manager = new TagsManager();
        manager.addTag(0, "APPID");
        manager.addTags(super.tags());
        manager.addTag(2, this.name);
        /* No flags set */
        manager.addTag(70, 0);
        return manager.tags();
    }
}

module.exports = AppId;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Arc.js":
/*!********************************************!*\
  !*** ./node_modules/dxf-writer/src/Arc.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Arc extends DatabaseObject {
    /**
     * @param {number} x - Center x
     * @param {number} y - Center y
     * @param {number} r - radius
     * @param {number} startAngle - degree
     * @param {number} endAngle - degree
     */
    constructor(x, y, r, startAngle, endAngle) {
        super(["AcDbEntity", "AcDbCircle"]);
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    tags() {
        const manager = new TagsManager();

        //https://www.autodesk.com/techpubs/autocad/acadr14/dxf/line_al_u05_c.htm
        manager.addTag(0, "ARC");
        manager.addTags(super.tags());
        manager.addTag(8, this.layer.name);
        manager.addPointTags(this.x, this.y);
        manager.addTag(40, this.r);
        manager.addTag(100, "AcDbArc");
        manager.addTag(50, this.startAngle);
        manager.addTag(51, this.endAngle);

        return manager.tags();
    }
}

module.exports = Arc;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Block.js":
/*!**********************************************!*\
  !*** ./node_modules/dxf-writer/src/Block.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Block extends DatabaseObject {
    constructor(name) {
        super(["AcDbEntity", "AcDbBlockBegin"]);
        this.name = name;
        this.end = new DatabaseObject(["AcDbEntity", "AcDbBlockEnd"]);
        this.recordHandle = null;
    }

    tags() {
        const manager = new TagsManager();

        manager.addTag(0, "BLOCK");
        manager.addTags(super.tags());
        manager.addTag(2, this.name);
        /* No flags set */
        manager.addTag(70, 0);
        /* Block top left corner */
        manager.addPointTags(0, 0);
        manager.addTag(3, this.name);
        /* xref path name - nothing */
        manager.addTag(1, "");

        //XXX dump content here

        manager.addTag(0, "ENDBLK");
        manager.addTags(this.end.tags());

        return manager.tags();
    }
}

module.exports = Block;


/***/ }),

/***/ "./node_modules/dxf-writer/src/BlockRecord.js":
/*!****************************************************!*\
  !*** ./node_modules/dxf-writer/src/BlockRecord.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class BlockRecord extends DatabaseObject {
    constructor(name) {
        super(["AcDbSymbolTableRecord", "AcDbBlockTableRecord"]);
        this.name = name;
    }

    tags() {
        const manager = new TagsManager();
        manager.addTag(0, "BLOCK_RECORD");
        manager.addTags(super.tags());
        manager.addTag(2, this.name);
        /* No flags set */
        manager.addTag(70, 0);
        /* Block explodability */
        manager.addTag(280, 0);
        /* Block scalability */
        manager.addTag(281, 1);
        return manager.tags();
    }
}

module.exports = BlockRecord;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Circle.js":
/*!***********************************************!*\
  !*** ./node_modules/dxf-writer/src/Circle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Circle extends DatabaseObject {
    /**
     * @param {number} x - Center x
     * @param {number} y - Center y
     * @param {number} r - radius
     */
    constructor(x, y, r) {
        super(["AcDbEntity", "AcDbCircle"]);
        this.x = x;
        this.y = y;
        this.r = r;
    }

    tags() {
        const manager = new TagsManager();

        //https://www.autodesk.com/techpubs/autocad/acadr14/dxf/circle_al_u05_c.htm
        manager.addTag(0, "CIRCLE");
        manager.addTags(super.tags());
        manager.addTag(8, this.layer.name);
        manager.addPointTags(this.x, this.y);
        manager.addTag(40, this.r);

        return manager.tags();
    }
}

module.exports = Circle;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Cylinder.js":
/*!*************************************************!*\
  !*** ./node_modules/dxf-writer/src/Cylinder.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Cylinder extends DatabaseObject {
    /**
     * @param {number} x - Center x
     * @param {number} y - Center y
     * @param {number} z - Center z
     * @param {number} r - radius
     * @param {number} thickness - thickness
     * @param {number} extrusionDirectionX - Extrusion Direction x
     * @param {number} extrusionDirectionY - Extrusion Direction y
     * @param {number} extrusionDirectionZ - Extrusion Direction z
     */
    constructor(
        x,
        y,
        z,
        r,
        thickness,
        extrusionDirectionX,
        extrusionDirectionY,
        extrusionDirectionZ
    ) {
        super(["AcDbEntity", "AcDbCircle"]);
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = r;
        this.thickness = thickness;
        this.extrusionDirectionX = extrusionDirectionX,
        this.extrusionDirectionY = extrusionDirectionY,
        this.extrusionDirectionZ = extrusionDirectionZ
    }

    tags() {
        const manager = new TagsManager();

        manager.addTag(0, "CIRCLE");
        manager.addTags(super.tags());
        manager.addTag(8, this.layer.name);
        manager.addPointTags(this.x, this.y, this.z);
        manager.addTag(40, this.r);
        manager.addTag(39, this.thickness);
        manager.addTag(210, this.extrusionDirectionX);
        manager.addTag(220, this.extrusionDirectionY);
        manager.addTag(230, this.extrusionDirectionZ);

        return manager.tags();
    }
}

module.exports = Cylinder;


/***/ }),

/***/ "./node_modules/dxf-writer/src/DatabaseObject.js":
/*!*******************************************************!*\
  !*** ./node_modules/dxf-writer/src/DatabaseObject.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Handle = __webpack_require__(/*! ./Handle */ "./node_modules/dxf-writer/src/Handle.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class DatabaseObject extends Handle {
    constructor(subclass = null) {
        super();
        this.subclassMarkers = [];
        if (subclass) {
            if (Array.isArray(subclass)) {
                this.subclassMarkers.push(...subclass);
            } else {
                this.subclassMarkers.push(subclass);
            }
        }
    }

    /**
     * Get the array of tags.
     * @returns {Tag[]}
     */
    tags() {
        const manager = new TagsManager();

        manager.addTags(this.handleTag());
        manager.addTags(this.handleToOwnerTag());
        this.subclassMarkers.forEach((subclassMarker) => {
            manager.addTag(100, subclassMarker);
        });

        return manager.tags();
    }

    /**
     * Get the dxf string
     * @returns {String}
     */
    toDxfString() {
        const manager = new TagsManager();
        manager.addTags(this.tags());
        return manager.toDxfString();
    }
}

module.exports = DatabaseObject;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Dictionary.js":
/*!***************************************************!*\
  !*** ./node_modules/dxf-writer/src/Dictionary.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Dictionary extends DatabaseObject {
    constructor() {
        super("AcDbDictionary");
        this.children = {};
    }

    /**
     *
     * @param {*} name
     * @param {DatabaseObject} dictionary
     */
    addChildDictionary(name, dictionary) {
        if (!this.handle) {
            throw new Error("Handle must be set before adding children");
        }
        dictionary.handleToOwner = this.handle;
        this.children[name] = dictionary;
    }

    tags() {
        const manager = new TagsManager();
        manager.addTag(0, "DICTIONARY");
        manager.addTags(super.tags());
        /* Duplicate record cloning flag - keep existing */
        manager.addTag(281, 1);

        Object.entries(this.children).forEach((child) => {
            const [name, item] = child;
            manager.addTag(3, name);
            manager.addTags(item.handleTag(350));
        });

        Object.values(this.children).forEach((child) => {
            manager.addTags(child.tags());
        });

        return manager.tags();
    }
}

module.exports = Dictionary;


/***/ }),

/***/ "./node_modules/dxf-writer/src/DimStyleTable.js":
/*!******************************************************!*\
  !*** ./node_modules/dxf-writer/src/DimStyleTable.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const Table = __webpack_require__(/*! ./Table */ "./node_modules/dxf-writer/src/Table.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class DimStyleTable extends Table {
    constructor(name) {
        super(name);
        this.subclassMarkers.push("AcDbDimStyleTable");
    }

    tags() {
        const manager = new TagsManager();
        manager.addTag(0, "TABLE");
        manager.addTag(2, this.name);
        manager.addTags(DatabaseObject.prototype.tags.call(this));
        manager.addTag(70, this.elements.length);
        /* DIMTOL */
        manager.addTag(71, 1);

        this.elements.forEach((element) => {
            manager.addTags(element.tags());
        });

        manager.addTag(0, "ENDTAB");
        return manager.tags();
    }
}

module.exports = DimStyleTable;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Drawing.js":
/*!************************************************!*\
  !*** ./node_modules/dxf-writer/src/Drawing.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const LineType = __webpack_require__(/*! ./LineType */ "./node_modules/dxf-writer/src/LineType.js");
const Layer = __webpack_require__(/*! ./Layer */ "./node_modules/dxf-writer/src/Layer.js");
const Table = __webpack_require__(/*! ./Table */ "./node_modules/dxf-writer/src/Table.js");
const DimStyleTable = __webpack_require__(/*! ./DimStyleTable */ "./node_modules/dxf-writer/src/DimStyleTable.js");
const TextStyle = __webpack_require__(/*! ./TextStyle */ "./node_modules/dxf-writer/src/TextStyle.js");
const Viewport = __webpack_require__(/*! ./Viewport */ "./node_modules/dxf-writer/src/Viewport.js");
const AppId = __webpack_require__(/*! ./AppId */ "./node_modules/dxf-writer/src/AppId.js");
const Block = __webpack_require__(/*! ./Block */ "./node_modules/dxf-writer/src/Block.js");
const BlockRecord = __webpack_require__(/*! ./BlockRecord */ "./node_modules/dxf-writer/src/BlockRecord.js");
const Dictionary = __webpack_require__(/*! ./Dictionary */ "./node_modules/dxf-writer/src/Dictionary.js");
const Line = __webpack_require__(/*! ./Line */ "./node_modules/dxf-writer/src/Line.js");
const Line3d = __webpack_require__(/*! ./Line3d */ "./node_modules/dxf-writer/src/Line3d.js");
const Arc = __webpack_require__(/*! ./Arc */ "./node_modules/dxf-writer/src/Arc.js");
const Circle = __webpack_require__(/*! ./Circle */ "./node_modules/dxf-writer/src/Circle.js");
const Cylinder = __webpack_require__(/*! ./Cylinder */ "./node_modules/dxf-writer/src/Cylinder.js");
const Text = __webpack_require__(/*! ./Text */ "./node_modules/dxf-writer/src/Text.js");
const Polyline = __webpack_require__(/*! ./Polyline */ "./node_modules/dxf-writer/src/Polyline.js");
const Polyline3d = __webpack_require__(/*! ./Polyline3d */ "./node_modules/dxf-writer/src/Polyline3d.js");
const Face = __webpack_require__(/*! ./Face */ "./node_modules/dxf-writer/src/Face.js");
const Point = __webpack_require__(/*! ./Point */ "./node_modules/dxf-writer/src/Point.js");
const Spline = __webpack_require__(/*! ./Spline */ "./node_modules/dxf-writer/src/Spline.js");
const Ellipse = __webpack_require__(/*! ./Ellipse */ "./node_modules/dxf-writer/src/Ellipse.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");
const Handle = __webpack_require__(/*! ./Handle */ "./node_modules/dxf-writer/src/Handle.js");

class Drawing {
    constructor() {
        this.layers = {};
        this.activeLayer = null;
        this.lineTypes = {};
        this.headers = {};
        this.tables = {};
        this.blocks = {};

        this.dictionary = new Dictionary();

        this.setUnits("Unitless");

        Drawing.LINE_TYPES.forEach((lineType) => {
            this.addLineType(
                lineType.name,
                lineType.description,
                lineType.elements
            );
        });

        Drawing.LAYERS.forEach((layer) => {
            this.addLayer(layer.name, layer.colorNumber, layer.lineTypeName);
        });

        this.setActiveLayer("0");

        // Must call this function
        this.generateAutocadExtras();
    }

    /**
     * @param {string} name
     * @param {string} description
     * @param {array} elements - if elem > 0 it is a line, if elem < 0 it is gap, if elem == 0.0 it is a
     */
    addLineType(name, description, elements) {
        this.lineTypes[name] = new LineType(name, description, elements);
        return this;
    }

    addLayer(name, colorNumber, lineTypeName) {
        this.layers[name] = new Layer(name, colorNumber, lineTypeName);
        return this;
    }

    setActiveLayer(name) {
        this.activeLayer = this.layers[name];
        return this;
    }

    addTable(name) {
        const table = new Table(name);
        this.tables[name] = table;
        return table;
    }

    /**
     *
     * @param {string} name The name of the block.
     * @returns {Block}
     */
    addBlock(name) {
        const block = new Block(name);
        this.blocks[name] = block;
        return block;
    }

    drawLine(x1, y1, x2, y2) {
        this.activeLayer.addShape(new Line(x1, y1, x2, y2));
        return this;
    }

    drawLine3d(x1, y1, z1, x2, y2, z2) {
        this.activeLayer.addShape(new Line3d(x1, y1, z1, x2, y2, z2));
        return this;
    }

    drawPoint(x, y) {
        this.activeLayer.addShape(new Point(x, y));
        return this;
    }

    drawRect(x1, y1, x2, y2, cornerLength, cornerBulge) {
        const w = x2 - x1;
        const h = y2 - y1;
        cornerBulge = cornerBulge || 0;
        let p = null;
        if (!cornerLength) {
            p = new Polyline(
                [
                    [x1, y1],
                    [x1, y1 + h],
                    [x1 + w, y1 + h],
                    [x1 + w, y1],
                ],
                true
            );
        } else {
            p = new Polyline(
                [
                    [x1 + w - cornerLength, y1, cornerBulge], // 1
                    [x1 + w, y1 + cornerLength], // 2
                    [x1 + w, y1 + h - cornerLength, cornerBulge], // 3
                    [x1 + w - cornerLength, y1 + h], // 4
                    [x1 + cornerLength, y1 + h, cornerBulge], // 5
                    [x1, y1 + h - cornerLength], // 6
                    [x1, y1 + cornerLength, cornerBulge], // 7
                    [x1 + cornerLength, y1], // 8
                ],
                true
            );
        }
        this.activeLayer.addShape(p);
        return this;
    }

    /**
     * Draw a regular convex polygon as a polyline entity.
     *
     * @see [Regular polygon | Wikipedia](https://en.wikipedia.org/wiki/Regular_polygon)
     *
     * @param {number} x - The X coordinate of the center of the polygon.
     * @param {number} y - The Y coordinate of the center of the polygon.
     * @param {number} numberOfSides - The number of sides.
     * @param {number} radius - The radius.
     * @param {number} rotation - The  rotation angle (in Degrees) of the polygon. By default 0.
     * @param {boolean} circumscribed - If `true` is a polygon in which each side is a tangent to a circle.
     * If `false` is a polygon in which all vertices lie on a circle. By default `false`.
     *
     * @returns {Drawing} - The current object of {@link Drawing}.
     */
    drawPolygon(
        x,
        y,
        numberOfSides,
        radius,
        rotation = 0,
        circumscribed = false
    ) {
        const angle = (2 * Math.PI) / numberOfSides;
        const vertices = [];
        let d = radius;
        const rotationRad = (rotation * Math.PI) / 180;
        if (circumscribed) d = radius / Math.cos(Math.PI / numberOfSides);
        for (let i = 0; i < numberOfSides; i++) {
            vertices.push([
                x + d * Math.sin(rotationRad + i * angle),
                y + d * Math.cos(rotationRad + i * angle),
            ]);
        }
        this.activeLayer.addShape(new Polyline(vertices, true));
        return this;
    }

    /**
     * @param {number} x1 - Center x
     * @param {number} y1 - Center y
     * @param {number} r - radius
     * @param {number} startAngle - degree
     * @param {number} endAngle - degree
     */
    drawArc(x1, y1, r, startAngle, endAngle) {
        this.activeLayer.addShape(new Arc(x1, y1, r, startAngle, endAngle));
        return this;
    }

    /**
     * @param {number} x1 - Center x
     * @param {number} y1 - Center y
     * @param {number} r - radius
     */
    drawCircle(x1, y1, r) {
        this.activeLayer.addShape(new Circle(x1, y1, r));
        return this;
    }

    /**
     * @param {number} x1 - Center x
     * @param {number} y1 - Center y
     * @param {number} z1 - Center z
     * @param {number} r - radius
     * @param {number} thickness - thickness
     * @param {number} extrusionDirectionX - Extrusion Direction x
     * @param {number} extrusionDirectionY - Extrusion Direction y
     * @param {number} extrusionDirectionZ - Extrusion Direction z
     */
    drawCylinder(
        x1,
        y1,
        z1,
        r,
        thickness,
        extrusionDirectionX,
        extrusionDirectionY,
        extrusionDirectionZ
    ){
        this.activeLayer.addShape(
            new Cylinder(
                x1,
                y1,
                z1,
                r,
                thickness,
                extrusionDirectionX,
                extrusionDirectionY,
                extrusionDirectionZ
            )
        );
        return this;
    }

    /**
     * @param {number} x1 - x
     * @param {number} y1 - y
     * @param {number} height - Text height
     * @param {number} rotation - Text rotation
     * @param {string} value - the string itself
     * @param {string} [horizontalAlignment="left"] left | center | right
     * @param {string} [verticalAlignment="baseline"] baseline | bottom | middle | top
     */
    drawText(
        x1,
        y1,
        height,
        rotation,
        value,
        horizontalAlignment = "left",
        verticalAlignment = "baseline"
    ) {
        this.activeLayer.addShape(
            new Text(
                x1,
                y1,
                height,
                rotation,
                value,
                horizontalAlignment,
                verticalAlignment
            )
        );
        return this;
    }

    /**
     * @param {[number, number][]} points - Array of points like [ [x1, y1], [x2, y2]... ]
     * @param {boolean} closed - Closed polyline flag
     * @param {number} startWidth - Default start width
     * @param {number} endWidth - Default end width
     */
    drawPolyline(points, closed = false, startWidth = 0, endWidth = 0) {
        this.activeLayer.addShape(
            new Polyline(points, closed, startWidth, endWidth)
        );
        return this;
    }

    /**
     * @param {[number, number, number][]} points - Array of points like [ [x1, y1, z1], [x2, y2, z1]... ]
     */
    drawPolyline3d(points) {
        points.forEach((point) => {
            if (point.length !== 3) {
                throw "Require 3D coordinates";
            }
        });
        this.activeLayer.addShape(new Polyline3d(points));
        return this;
    }

    /**
     *
     * @param {number} trueColor - Integer representing the true color, can be passed as an hexadecimal value of the form 0xRRGGBB
     */
    setTrueColor(trueColor) {
        this.activeLayer.setTrueColor(trueColor);
        return this;
    }

    /**
     * Draw a spline.
     * @param {[Array]} controlPoints - Array of control points like [ [x1, y1], [x2, y2]... ]
     * @param {number} degree - Degree of spline: 2 for quadratic, 3 for cubic. Default is 3
     * @param {[number]} knots - Knot vector array. If null, will use a uniform knot vector. Default is null
     * @param {[number]} weights - Control point weights. If provided, must be one weight for each control point. Default is null
     * @param {[Array]} fitPoints - Array of fit points like [ [x1, y1], [x2, y2]... ]
     */
    drawSpline(
        controlPoints,
        degree = 3,
        knots = null,
        weights = null,
        fitPoints = []
    ) {
        this.activeLayer.addShape(
            new Spline(controlPoints, degree, knots, weights, fitPoints)
        );
        return this;
    }

    /**
     * Draw an ellipse.
     * @param {number} x1 - Center x
     * @param {number} y1 - Center y
     * @param {number} majorAxisX - Endpoint x of major axis, relative to center
     * @param {number} majorAxisY - Endpoint y of major axis, relative to center
     * @param {number} axisRatio - Ratio of minor axis to major axis
     * @param {number} startAngle - Start angle
     * @param {number} endAngle - End angle
     */
    drawEllipse(
        x1,
        y1,
        majorAxisX,
        majorAxisY,
        axisRatio,
        startAngle = 0,
        endAngle = 2 * Math.PI
    ) {
        this.activeLayer.addShape(
            new Ellipse(
                x1,
                y1,
                majorAxisX,
                majorAxisY,
                axisRatio,
                startAngle,
                endAngle
            )
        );
        return this;
    }

    /**
     * @param {number} x1 - x
     * @param {number} y1 - y
     * @param {number} z1 - z
     * @param {number} x2 - x
     * @param {number} y2 - y
     * @param {number} z2 - z
     * @param {number} x3 - x
     * @param {number} y3 - y
     * @param {number} z3 - z
     * @param {number} x4 - x
     * @param {number} y4 - y
     * @param {number} z4 - z
     */
    drawFace(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4) {
        this.activeLayer.addShape(
            new Face(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4)
        );
        return this;
    }

    _getLtypeTableTags() {
        const t = new Table("LTYPE");
        Object.values(this.lineTypes).forEach((v) => t.add(v));
        return t.tags();
    }

    _getLayerTableTags() {
        const t = new Table("LAYER");
        Object.values(this.layers).forEach((v) => t.add(v));
        return t.tags();
    }

    /**
     * @see https://www.autodesk.com/techpubs/autocad/acadr14/dxf/header_section_al_u05_c.htm
     * @see https://www.autodesk.com/techpubs/autocad/acad2000/dxf/header_section_group_codes_dxf_02.htm
     *
     * @param {string} variable
     * @param {array} values Array of "two elements arrays". [  [value1_GroupCode, value1_value], [value2_GroupCode, value2_value]  ]
     */
    header(variable, values) {
        this.headers[variable] = values;
        return this;
    }

    /**
     *
     * @param {string} unit see Drawing.UNITS
     */
    setUnits(unit) {
        let value =
            typeof Drawing.UNITS[unit] != "undefined"
                ? Drawing.UNITS[unit]
                : Drawing.UNITS["Unitless"];
        this.header("INSUNITS", [[70, Drawing.UNITS[unit]]]);
        return this;
    }

    /** Generate additional DXF metadata which are required to successfully open resulted document
     * in AutoDesk products. Call this method before serializing the drawing to get the most
     * compatible result.
     */
    generateAutocadExtras() {
        if (!this.headers["ACADVER"]) {
            /* AutoCAD 2007 version. */
            this.header("ACADVER", [[1, "AC1021"]]);
        }

        if (!this.lineTypes["ByBlock"]) {
            this.addLineType("ByBlock", "", []);
        }
        if (!this.lineTypes["ByLayer"]) {
            this.addLineType("ByLayer", "", []);
        }

        let vpTable = this.tables["VPORT"];
        if (!vpTable) {
            vpTable = this.addTable("VPORT");
        }
        let styleTable = this.tables["STYLE"];
        if (!styleTable) {
            styleTable = this.addTable("STYLE");
        }
        if (!this.tables["VIEW"]) {
            this.addTable("VIEW");
        }
        if (!this.tables["UCS"]) {
            this.addTable("UCS");
        }
        let appIdTable = this.tables["APPID"];
        if (!appIdTable) {
            appIdTable = this.addTable("APPID");
        }
        if (!this.tables["DIMSTYLE"]) {
            const t = new DimStyleTable("DIMSTYLE");
            this.tables["DIMSTYLE"] = t;
        }

        vpTable.add(new Viewport("*ACTIVE", 1000));

        /* Non-default text alignment is not applied without this entry. */
        styleTable.add(new TextStyle("standard"));

        appIdTable.add(new AppId("ACAD"));

        this.modelSpace = this.addBlock("*Model_Space");
        this.addBlock("*Paper_Space");

        const d = new Dictionary();
        this.dictionary.addChildDictionary("ACAD_GROUP", d);
    }

    tags() {
        const manager = new TagsManager();

        // Setup
        const blockRecordTable = new Table("BLOCK_RECORD");
        Object.values(this.blocks).forEach((b) => {
            const rec = new BlockRecord(b.name);
            blockRecordTable.add(rec);
        });
        const ltypeTableTags = this._getLtypeTableTags();
        const layerTableTags = this._getLayerTableTags();

        // Header section start.
        manager.addSectionBegin("HEADER");
        manager.addHeaderVariable("HANDSEED", [[5, Handle.handle()]]);
        Object.entries(this.headers).forEach((variable) => {
            const [name, values] = variable;
            manager.addHeaderVariable(name, values);
        });
        manager.addSectionEnd();
        // Header section end.

        // Classes section start.
        manager.addSectionBegin("CLASSES");
        // Empty CLASSES section for compatibility
        manager.addSectionEnd();
        // Classes section end.

        // Tables section start.
        manager.addSectionBegin("TABLES");
        manager.addTags(ltypeTableTags);
        manager.addTags(layerTableTags);
        Object.values(this.tables).forEach((table) => {
            manager.addTags(table.tags());
        });

        manager.addTags(blockRecordTable.tags());
        manager.addSectionEnd();
        // Tables section end.

        // Blocks section start.
        manager.addSectionBegin("BLOCKS");
        Object.values(this.blocks).forEach((block) => {
            manager.addTags(block.tags());
        });
        manager.addSectionEnd();
        // Blocks section end.

        // Entities section start.
        manager.addSectionBegin("ENTITIES");
        Object.values(this.layers).forEach((layer) => {
            manager.addTags(layer.shapesTags(this.modelSpace));
        });
        manager.addSectionEnd();
        // Entities section end.

        // Objects section start.
        manager.addSectionBegin("OBJECTS");
        manager.addTags(this.dictionary.tags());
        manager.addSectionEnd();
        // Objects section end.

        manager.addTag(0, "EOF");

        return manager.tags();
    }

    toDxfString() {
        return this.tags().reduce((dxfString, tag) => {
            return `${dxfString}${tag.toDxfString()}`;
        }, "");
    }
}

//AutoCAD Color Index (ACI)
//http://sub-atomic.com/~moses/acadcolors.html
Drawing.ACI = {
    LAYER: 0,
    RED: 1,
    YELLOW: 2,
    GREEN: 3,
    CYAN: 4,
    BLUE: 5,
    MAGENTA: 6,
    WHITE: 7,
};

Drawing.LINE_TYPES = [
    { name: "CONTINUOUS", description: "______", elements: [] },
    { name: "DASHED", description: "_ _ _ ", elements: [5.0, -5.0] },
    { name: "DOTTED", description: ". . . ", elements: [0.0, -5.0] },
];

Drawing.LAYERS = [
    { name: "0", colorNumber: Drawing.ACI.WHITE, lineTypeName: "CONTINUOUS" },
];

//https://www.autodesk.com/techpubs/autocad/acad2000/dxf/header_section_group_codes_dxf_02.htm
Drawing.UNITS = {
    Unitless: 0,
    Inches: 1,
    Feet: 2,
    Miles: 3,
    Millimeters: 4,
    Centimeters: 5,
    Meters: 6,
    Kilometers: 7,
    Microinches: 8,
    Mils: 9,
    Yards: 10,
    Angstroms: 11,
    Nanometers: 12,
    Microns: 13,
    Decimeters: 14,
    Decameters: 15,
    Hectometers: 16,
    Gigameters: 17,
    "Astronomical units": 18,
    "Light years": 19,
    Parsecs: 20,
};

module.exports = Drawing;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Ellipse.js":
/*!************************************************!*\
  !*** ./node_modules/dxf-writer/src/Ellipse.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Ellipse extends DatabaseObject {
    /**
     * Creates an ellipse.
     * @param {number} x - Center x
     * @param {number} y - Center y
     * @param {number} majorAxisX - Endpoint x of major axis, relative to center
     * @param {number} majorAxisY - Endpoint y of major axis, relative to center
     * @param {number} axisRatio - Ratio of minor axis to major axis
     * @param {number} startAngle - Start angle
     * @param {number} endAngle - End angle
     */
    constructor(x, y, majorAxisX, majorAxisY, axisRatio, startAngle, endAngle) {
        super(["AcDbEntity", "AcDbEllipse"]);
        this.x = x;
        this.y = y;
        this.majorAxisX = majorAxisX;
        this.majorAxisY = majorAxisY;
        this.axisRatio = axisRatio;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    tags() {
        const manager = new TagsManager();

        // https://www.autodesk.com/techpubs/autocad/acadr14/dxf/ellipse_al_u05_c.htm
        manager.addTag(0, "ELLIPSE");
        manager.addTags(super.tags());
        manager.addTag(8, this.layer.name);
        manager.addPointTags(this.x, this.y);
        manager.addTag(11, this.majorAxisX);
        manager.addTag(21, this.majorAxisY);
        manager.addTag(31, 0);

        manager.addTag(40, this.axisRatio);
        manager.addTag(41, this.startAngle);
        manager.addTag(42, this.endAngle);

        return manager.tags();
    }
}

module.exports = Ellipse;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Face.js":
/*!*********************************************!*\
  !*** ./node_modules/dxf-writer/src/Face.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Face extends DatabaseObject {
    constructor(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4) {
        super(["AcDbEntity", "AcDbFace"]);
        this.x1 = x1;
        this.y1 = y1;
        this.z1 = z1;
        this.x2 = x2;
        this.y2 = y2;
        this.z2 = z2;
        this.x3 = x3;
        this.y3 = y3;
        this.z3 = z3;
        this.x4 = x4;
        this.y4 = y4;
        this.z4 = z4;
    }

    tags() {
        const manager = new TagsManager();

        //https://www.autodesk.com/techpubs/autocad/acadr14/dxf/3dface_al_u05_c.htm
        manager.addTag(0, "3DFACE");
        manager.addTags(super.tags());
        manager.addTag(8, this.layer.name);
        manager.addPointTags(this.x1, this.y1, this.z1);
        manager.addTagsByElements([
            [11, this.x2],
            [21, this.y2],
            [31, this.z2],
        ]);
        manager.addTagsByElements([
            [12, this.x3],
            [22, this.y3],
            [32, this.z3],
        ]);
        manager.addTagsByElements([
            [13, this.x4],
            [23, this.y4],
            [33, this.z4],
        ]);

        return manager.tags();
    }
}

module.exports = Face;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Handle.js":
/*!***********************************************!*\
  !*** ./node_modules/dxf-writer/src/Handle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Tag = __webpack_require__(/*! ./Tag */ "./node_modules/dxf-writer/src/Tag.js");

class Handle {
    static seed = 0;

    static handle() {
        return (++Handle.seed).toString(16).toUpperCase();
    }

    constructor(handleToOwner = null) {
        this._handle = Handle.handle();
        this._handleToOwner = handleToOwner;
    }

    handleTag(groupCode = 5) {
        return [new Tag(groupCode, this._handle)];
    }

    handleToOwnerTag(groupCode = 330) {
        if (!this._handleToOwner) return [new Tag(groupCode, 0)];
        return [new Tag(groupCode, this._handleToOwner)];
    }

    set handleToOwner(handleToOwner) {
        this._handleToOwner = handleToOwner;
    }

    get handleToOwner() {
        return this._handleToOwner;
    }

    get handle() {
        return this._handle;
    }
}

module.exports = Handle;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Layer.js":
/*!**********************************************!*\
  !*** ./node_modules/dxf-writer/src/Layer.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Layer extends DatabaseObject {
    constructor(name, colorNumber, lineTypeName = null) {
        super(["AcDbSymbolTableRecord", "AcDbLayerTableRecord"]);
        this.name = name;
        this.colorNumber = colorNumber;
        this.lineTypeName = lineTypeName;
        this.shapes = [];
        this.trueColor = -1;
    }

    tags() {
        const manager = new TagsManager();
        manager.addTag(0, "LAYER");
        manager.addTags(super.tags());
        manager.addTag(2, this.name);
        if (this.trueColor !== -1) {
            manager.addTag(420, this.trueColor);
        } else {
            manager.addTag(62, this.colorNumber);
        }
        manager.addTag(70, 0);
        if (this.lineTypeName) {
            manager.addTag(6, this.lineTypeName);
        }
        /* Hard-pointer handle to PlotStyleName object; seems mandatory, but any value seems OK,
         * including 0.
         */
        manager.addTag(390, 1);
        return manager.tags();
    }

    setTrueColor(color) {
        this.trueColor = color;
    }

    addShape(shape) {
        this.shapes.push(shape);
        shape.layer = this;
    }

    getShapes() {
        return this.shapes;
    }

    shapesTags(space) {
        return this.shapes.reduce((tags, shape) => {
            shape.handleToOwner = space.handle;
            return [...tags, ...shape.tags()];
        }, []);
    }

    shapesToDxf() {
        return this.shapes.reduce((dxfString, shape) => {
            return `${dxfString}${shape.toDxfString()}`;
        }, "");
    }
}

module.exports = Layer;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Line.js":
/*!*********************************************!*\
  !*** ./node_modules/dxf-writer/src/Line.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Line extends DatabaseObject {
    constructor(x1, y1, x2, y2) {
        super(["AcDbEntity", "AcDbLine"]);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    tags() {
        const manager = new TagsManager();

        //https://www.autodesk.com/techpubs/autocad/acadr14/dxf/line_al_u05_c.htm
        manager.addTag(0, "LINE");
        manager.addTags(super.tags());
        manager.addTag(8, this.layer.name);
        manager.addPointTags(this.x1, this.y1);
        manager.addTagsByElements([
            [11, this.x2],
            [21, this.y2],
            [31, 0],
        ]);

        return manager.tags();
    }
}

module.exports = Line;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Line3d.js":
/*!***********************************************!*\
  !*** ./node_modules/dxf-writer/src/Line3d.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Line3d extends DatabaseObject {
    constructor(x1, y1, z1, x2, y2, z2) {
        super(["AcDbEntity", "AcDbLine"]);
        this.x1 = x1;
        this.y1 = y1;
        this.z1 = z1;
        this.x2 = x2;
        this.y2 = y2;
        this.z2 = z2;
    }

    tags() {
        const manager = new TagsManager();

        //https://www.autodesk.com/techpubs/autocad/acadr14/dxf/line_al_u05_c.htm
        manager.addTag(0, "LINE");
        manager.addTags(super.tags());
        manager.addTag(8, this.layer.name);
        manager.addPointTags(this.x1, this.y1, this.z1);
        manager.addTagsByElements([
            [11, this.x2],
            [21, this.y2],
            [31, this.z2],
        ]);

        return manager.tags();
    }
}

module.exports = Line3d;


/***/ }),

/***/ "./node_modules/dxf-writer/src/LineType.js":
/*!*************************************************!*\
  !*** ./node_modules/dxf-writer/src/LineType.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class LineType extends DatabaseObject {
    /**
     * @param {string} name
     * @param {string} description
     * @param {array} elements - if elem > 0 it is a line, if elem < 0 it is gap, if elem == 0.0 it is a
     */
    constructor(name, description, elements) {
        super(["AcDbSymbolTableRecord", "AcDbLinetypeTableRecord"]);
        this.name = name;
        this.description = description;
        this.elements = elements;
    }

    tags() {
        const manager = new TagsManager();

        // https://www.autodesk.com/techpubs/autocad/acadr14/dxf/ltype_al_u05_c.htm
        manager.addTag(0, "LTYPE");
        manager.addTags(super.tags());
        manager.addTag(2, this.name);
        manager.addTag(3, this.description);
        manager.addTag(70, 0);
        manager.addTag(72, 65);
        manager.addTag(73, this.elements.length);
        manager.addTag(40, this.getElementsSum());

        this.elements.forEach((element) => {
            manager.addTag(49, element);
            manager.addTag(74, 0);
        });

        return manager.tags();
    }

    getElementsSum() {
        return this.elements.reduce((sum, element) => {
            return sum + Math.abs(element);
        }, 0);
    }
}

module.exports = LineType;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Point.js":
/*!**********************************************!*\
  !*** ./node_modules/dxf-writer/src/Point.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Point extends DatabaseObject {
    constructor(x, y) {
        super(["AcDbEntity", "AcDbPoint"]);
        this.x = x;
        this.y = y;
    }

    tags() {
        const manager = new TagsManager();

        //https://www.autodesk.com/techpubs/autocad/acadr14/dxf/point_al_u05_c.htm
        manager.addTag(0, "POINT");
        manager.addTags(super.tags());
        manager.addTag(8, this.layer.name);
        manager.addPointTags(this.x, this.y);

        return manager.tags();
    }
}

module.exports = Point;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Polyline.js":
/*!*************************************************!*\
  !*** ./node_modules/dxf-writer/src/Polyline.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Polyline extends DatabaseObject {
    /**
     * @param {array} points - Array of points like [ [x1, y1], [x2, y2, bulge]... ]
     * @param {boolean} closed
     * @param {number} startWidth
     * @param {number} endWidth
     */
    constructor(points, closed = false, startWidth = 0, endWidth = 0) {
        super(["AcDbEntity", "AcDbPolyline"]);
        this.points = points;
        this.closed = closed;
        this.startWidth = startWidth;
        this.endWidth = endWidth;
    }

    tags() {
        const manager = new TagsManager();

        manager.addTag(0, "LWPOLYLINE");
        manager.addTags(super.tags());
        manager.addTag(8, this.layer.name);
        manager.addTag(6, "ByLayer");
        manager.addTag(62, 256);
        manager.addTag(370, -1);
        manager.addTag(90, this.points.length);
        manager.addTag(70, this.closed ? 1 : 0);

        this.points.forEach((point) => {
            const [x, y, z] = point;
            manager.addTag(10, x);
            manager.addTag(20, y);
            if (this.startWidth !== 0 || this.endWidth !== 0) {
                manager.addTag(40, this.startWidth);
                manager.addTag(41, this.endWidth);
            }
            if (z !== undefined) {
                manager.addTag(42, z);
            }
        });

        return manager.tags();
    }
}

module.exports = Polyline;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Polyline3d.js":
/*!***************************************************!*\
  !*** ./node_modules/dxf-writer/src/Polyline3d.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const Handle = __webpack_require__(/*! ./Handle */ "./node_modules/dxf-writer/src/Handle.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");
const Vertex = __webpack_require__(/*! ./Vertex */ "./node_modules/dxf-writer/src/Vertex.js");

class Polyline3d extends DatabaseObject {
    /**
     * @param {[number, number, number][]} points - Array of points like [ [x1, y1, z1], [x2, y2, z2]... ]
     */
    constructor(points) {
        super(["AcDbEntity", "AcDb3dPolyline"]);
        this.verticies = points.map((point) => {
            const [x, y, z] = point;
            const vertex = new Vertex(x, y, z);
            vertex.handleToOwner = this.handle;
            return vertex;
        });
        this.seqendHandle = Handle.handle();
    }

    tags() {
        const manager = new TagsManager();

        manager.addTag(0, "POLYLINE");
        manager.addTags(super.tags());
        manager.addTag(8, this.layer.name);
        manager.addTag(66, 1);
        manager.addTag(70, 0);
        manager.addPointTags(0, 0);

        this.verticies.forEach((vertex) => {
            vertex.layer = this.layer;
            manager.addTags(vertex.tags());
        });

        manager.addTag(0, "SEQEND");
        manager.addTag(5, this.seqendHandle);
        manager.addTag(100, "AcDbEntity");
        manager.addTag(8, this.layer.name);

        return manager.tags();
    }
}

module.exports = Polyline3d;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Spline.js":
/*!***********************************************!*\
  !*** ./node_modules/dxf-writer/src/Spline.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Spline extends DatabaseObject {
    /**
     * Creates a spline. See https://www.autodesk.com/techpubs/autocad/acad2000/dxf/spline_dxf_06.htm
     * @param {[Array]} controlPoints - Array of control points like [ [x1, y1], [x2, y2]... ]
     * @param {number} degree - Degree of spline: 2 for quadratic, 3 for cubic. Default is 3
     * @param {[number]} knots - Knot vector array. If null, will use a uniform knot vector. Default is null
     * @param {[number]} weights - Control point weights. If provided, must be one weight for each control point. Default is null
     * @param {[Array]} fitPoints - Array of fit points like [ [x1, y1], [x2, y2]... ]
     */
    constructor(
        controlPoints,
        degree = 3,
        knots = null,
        weights = null,
        fitPoints = []
    ) {
        super(["AcDbEntity", "AcDbSpline"]);
        if (controlPoints.length < degree + 1) {
            throw new Error(
                `For degree ${degree} spline, expected at least ${
                    degree + 1
                } control points, but received only ${controlPoints.length}`
            );
        }

        if (knots == null) {
            // Examples:
            // degree 2, 3 pts:  0 0 0 1 1 1
            // degree 2, 4 pts:  0 0 0 1 2 2 2
            // degree 2, 5 pts:  0 0 0 1 2 3 3 3
            // degree 3, 4 pts:  0 0 0 0 1 1 1 1
            // degree 3, 5 pts:  0 0 0 0 1 2 2 2 2

            knots = [];
            for (let i = 0; i < degree + 1; i++) {
                knots.push(0);
            }
            for (let i = 1; i < controlPoints.length - degree; i++) {
                knots.push(i);
            }
            for (let i = 0; i < degree + 1; i++) {
                knots.push(controlPoints.length - degree);
            }
        }

        if (knots.length !== controlPoints.length + degree + 1) {
            throw new Error(
                `Invalid knot vector length. Expected ${
                    controlPoints.length + degree + 1
                } but received ${knots.length}.`
            );
        }

        this.controlPoints = controlPoints;
        this.knots = knots;
        this.fitPoints = fitPoints;
        this.degree = degree;
        this.weights = weights;

        const closed = 0;
        const periodic = 0;
        const rational = this.weights ? 1 : 0;
        const planar = 1;
        const linear = 0;

        this.type =
            closed * 1 + periodic * 2 + rational * 4 + planar * 8 + linear * 16;

        // Not certain where the values of these flags came from so I'm going to leave them commented for now
        // const closed = 0
        // const periodic = 0
        // const rational = 1
        // const planar = 1
        // const linear = 0
        // const splineType = 1024 * closed + 128 * periodic + 8 * rational + 4 * planar + 2 * linear
    }

    tags() {
        const manager = new TagsManager();

        // https://www.autodesk.com/techpubs/autocad/acad2000/dxf/spline_dxf_06.htm
        manager.addTag(0, "SPLINE");
        manager.addTags(super.tags());
        manager.addTag(8, this.layer.name);
        manager.addTagsByElements([
            [210, 0.0],
            [220, 0.0],
            [230, 1.0],
        ]);

        manager.addTag(70, this.type);
        manager.addTag(71, this.degree);
        manager.addTag(72, this.knots.length);
        manager.addTag(73, this.controlPoints.length);
        manager.addTag(74, this.fitPoints.length);

        manager.addTagsByElements([
            [42, 1e-7],
            [43, 1e-7],
            [44, 1e-10],
        ]);

        this.knots.forEach((knot) => {
            manager.addTag(40, knot);
        });

        if (this.weights) {
            this.weights.forEach((weight) => {
                manager.addTag(41, weight);
            });
        }

        this.controlPoints.forEach((point) => {
            manager.addPointTags(point[0], point[1]);
        });

        return manager.tags();
    }
}

module.exports = Spline;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Table.js":
/*!**********************************************!*\
  !*** ./node_modules/dxf-writer/src/Table.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Table extends DatabaseObject {
    constructor(name) {
        super("AcDbSymbolTable");
        this.name = name;
        this.elements = [];
    }

    add(element) {
        element.handleToOwner = this.handle;
        this.elements.push(element);
    }

    tags() {
        const manager = new TagsManager();

        manager.addTag(0, "TABLE");
        manager.addTag(2, this.name);
        manager.addTags(super.tags());
        manager.addTag(70, this.elements.length);

        this.elements.forEach((element) => {
            manager.addTags(element.tags());
        });

        manager.addTag(0, "ENDTAB");

        return manager.tags();
    }
}

module.exports = Table;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Tag.js":
/*!********************************************!*\
  !*** ./node_modules/dxf-writer/src/Tag.js ***!
  \********************************************/
/***/ ((module) => {

class Tag {
    constructor(groupCode, value) {
        this._code = groupCode;
        this._value = value;
    }

    toDxfString() {
        return `\t${this._code}\n${this._value}\n`;
    }
}

module.exports = Tag;


/***/ }),

/***/ "./node_modules/dxf-writer/src/TagsManager.js":
/*!****************************************************!*\
  !*** ./node_modules/dxf-writer/src/TagsManager.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Tag = __webpack_require__(/*! ./Tag */ "./node_modules/dxf-writer/src/Tag.js");

class TagsManager {
    constructor() {
        this._tags = [];
    }

    /**
     *
     * @param {number} x X coordinate of the point.
     * @param {number} y Y coordinate of the point.
     * @param {number} z Z coordinate of the point.
     */
    addPointTags(x, y, z = 0) {
        this.addTag(10, x);
        this.addTag(20, y);
        this.addTag(30, z);
    }

    addSectionBegin(name) {
        this.addTag(0, "SECTION");
        this.addTag(2, name);
    }

    addSectionEnd() {
        this.addTag(0, "ENDSEC");
    }

    addHeaderVariable(name, tagsElements) {
        this.addTag(9, `$${name}`);
        tagsElements.forEach((tagElement) => {
            this.addTag(tagElement[0], tagElement[1]);
        });
    }

    /**
     *
     * @param {[number, string|number][]} tagsElements
     */
    addTagsByElements(tagsElements) {
        tagsElements.forEach((tagElement) => {
            this.addTag(tagElement[0], tagElement[1]);
        });
    }

    /**
     *  Add a tag to the array of tags.
     * @param {number} groupCode
     * @param {number|string} value
     */
    addTag(groupCode, value) {
        this._tags.push(new Tag(groupCode, value));
    }

    /**
     * Append an array of tags to the array of tags
     * @param {Tag[]} tags
     */
    addTags(tags) {
        this._tags.push(...tags);
    }

    /**
     * Get the array of tags.
     * @returns {Tag[]}
     */
    tags() {
        return this._tags;
    }

    /**
     * Get the dxf string.
     * @returns {string}
     */
    toDxfString() {
        return this._tags.reduce((dxfString, tag) => {
            return `${dxfString}${tag.toDxfString()}`;
        }, "");
    }
}

module.exports = TagsManager;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Text.js":
/*!*********************************************!*\
  !*** ./node_modules/dxf-writer/src/Text.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

const H_ALIGN_CODES = ["left", "center", "right"];
const V_ALIGN_CODES = ["baseline", "bottom", "middle", "top"];

class Text extends DatabaseObject {
    /**
     * @param {number} x - x
     * @param {number} y - y
     * @param {number} height - Text height
     * @param {number} rotation - Text rotation
     * @param {string} value - the string itself
     * @param {string} [horizontalAlignment="left"] left | center | right
     * @param {string} [verticalAlignment="baseline"] baseline | bottom | middle | top
     */
    constructor(
        x,
        y,
        height,
        rotation,
        value,
        horizontalAlignment = "left",
        verticalAlignment = "baseline"
    ) {
        super(["AcDbEntity", "AcDbText"]);
        this.x = x;
        this.y = y;
        this.height = height;
        this.rotation = rotation;
        this.value = value;
        this.hAlign = horizontalAlignment;
        this.vAlign = verticalAlignment;
    }

    tags() {
        const manager = new TagsManager();

        //https://www.autodesk.com/techpubs/autocad/acadr14/dxf/text_al_u05_c.htm
        manager.addTag(0, "TEXT");
        manager.addTags(super.tags());
        manager.addTag(8, this.layer.name);
        manager.addPointTags(this.x, this.y);
        manager.addTag(40, this.height);
        manager.addTag(1, this.value);
        manager.addTag(50, this.rotation);

        if (
            H_ALIGN_CODES.includes(this.hAlign, 1) ||
            V_ALIGN_CODES.includes(this.vAlign, 1)
        ) {
            manager.addTag(72, Math.max(H_ALIGN_CODES.indexOf(this.hAlign), 0));
            manager.addTagsByElements([
                [11, this.x],
                [21, this.y],
                [31, 0],
            ]);
            /* AutoCAD needs this one more time, yes, exactly here. */
            manager.addTag(100, "AcDbText");
            manager.addTag(73, Math.max(V_ALIGN_CODES.indexOf(this.vAlign), 0));
        } else {
            /* AutoCAD needs this one more time. */
            manager.addTag(100, "AcDbText");
        }

        return manager.tags();
    }
}

module.exports = Text;


/***/ }),

/***/ "./node_modules/dxf-writer/src/TextStyle.js":
/*!**************************************************!*\
  !*** ./node_modules/dxf-writer/src/TextStyle.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class TextStyle extends DatabaseObject {
    constructor(name) {
        super(["AcDbSymbolTableRecord", "AcDbTextStyleTableRecord"]);
        this.name = name;
    }

    tags() {
        const manager = new TagsManager();

        manager.addTag(0, "STYLE");
        manager.addTags(super.tags());
        manager.addTag(2, this.name);
        /* No flags set */
        manager.addTag(70, 0);
        manager.addTag(40, 0);
        manager.addTag(41, 1);
        manager.addTag(50, 0);
        manager.addTag(71, 0);
        manager.addTag(42, 1);
        manager.addTag(3, this.name);
        manager.addTag(4, "");

        return manager.tags();
    }
}

module.exports = TextStyle;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Vertex.js":
/*!***********************************************!*\
  !*** ./node_modules/dxf-writer/src/Vertex.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Vertex extends DatabaseObject {
    /**
     *
     * @param {number} x The X coordinate
     * @param {number} y The Y coordinate
     * @param {number} z The Z coordinate
     */
    constructor(x, y, z) {
        super(["AcDbEntity", "AcDbVertex", "AcDb3dPolylineVertex"]);
        this.x = x;
        this.y = y;
        this.z = z;
    }

    tags() {
        const manager = new TagsManager();

        manager.addTag(0, "VERTEX");
        manager.addTags(super.tags());
        manager.addTag(8, this.layer.name);
        manager.addPointTags(this.x, this.y, this.z);
        manager.addTag(70, 32);
        return manager.tags();
    }
}

module.exports = Vertex;


/***/ }),

/***/ "./node_modules/dxf-writer/src/Viewport.js":
/*!*************************************************!*\
  !*** ./node_modules/dxf-writer/src/Viewport.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const DatabaseObject = __webpack_require__(/*! ./DatabaseObject */ "./node_modules/dxf-writer/src/DatabaseObject.js");
const TagsManager = __webpack_require__(/*! ./TagsManager */ "./node_modules/dxf-writer/src/TagsManager.js");

class Viewport extends DatabaseObject {
    constructor(name, height) {
        super(["AcDbSymbolTableRecord", "AcDbViewportTableRecord"]);
        this.name = name;
        this.height = height;
    }

    tags() {
        const manager = new TagsManager();

        manager.addTag(0, "VPORT");
        manager.addTags(super.tags());
        manager.addTag(2, this.name);
        manager.addTag(40, this.height);
        /* No flags set */
        manager.addTag(70, 0);

        return manager.tags();
    }
}

module.exports = Viewport;


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _showHolesForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showHolesForm.js */ "./src/showHolesForm.js");
/* harmony import */ var _showHolesForm_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_showHolesForm_js__WEBPACK_IMPORTED_MODULE_1__);
var Drawing = __webpack_require__(/*! dxf-writer */ "./node_modules/dxf-writer/index.js");



window.addEventListener("load", function (e) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.6;
  var h6 = document.getElementById("status");
  var scale = 1.0;
  var startDragOffset = {};
  var translatePos = {
    x: 50,
    y: 100
  };
  var mouseDown = false;
  var form = document.forms.myForm;
  var obj = {}; // let validate = true;

  function getInputs() {
    document.querySelectorAll("input").forEach(function (v) {
      obj[v.name] = parseFloat(v.value);
    });
  }

  function draw(scale, translatePos) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    getInputs();
    ctx.save();
    ctx.translate(translatePos.x, translatePos.y);
    ctx.scale(scale, scale);
    drawBP();
    drawTP();
    drawSeam();
    drawSpots();
    weightTPBP();
    var transform = ctx.getTransform();
    ctx.restore();
    return transform;
  }

  function drawBP() {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.strokeRect(0, 0, obj.bPLength, obj.bPWidth);
    ctx.stroke();
    ctx.restore();
  }

  function drawTP() {
    ctx.save();
    ctx.strokeStyle = "orangered";
    ctx.lineWidth = 1;
    ctx.scale(1, -1);
    ctx.strokeRect(obj.tPOffsetX, obj.tPOffsetY - obj.bPWidth, obj.tPLength, obj.tPWidth);
    ctx.stroke();
    ctx.restore();
  }

  function drawSeam() {
    ctx.save();
    ctx.strokeStyle = "YellowGreen";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.scale(1, -1);
    ctx.moveTo(obj.tPOffsetX + obj.sPLeft, obj.tPOffsetY - obj.bPWidth + obj.sPBottom);
    ctx.lineTo(obj.tPLength + obj.tPOffsetX - obj.sPRight, obj.tPOffsetY - obj.bPWidth + obj.sPBottom);
    ctx.lineTo(obj.tPLength + obj.tPOffsetX - obj.sPRight, obj.tPOffsetY - obj.bPWidth + obj.tPWidth - obj.sPTop);
    ctx.lineTo(obj.tPOffsetX + obj.sPLeft, obj.tPOffsetY - obj.bPWidth + obj.tPWidth - obj.sPTop);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(obj.tPOffsetX + obj.sPLeft + 5, obj.tPOffsetY - obj.bPWidth + obj.sPBottom + 5);
    ctx.lineTo(obj.tPLength + obj.tPOffsetX - obj.sPRight - 5, obj.tPOffsetY - obj.bPWidth + obj.sPBottom + 5);
    ctx.lineTo(obj.tPLength + obj.tPOffsetX - obj.sPRight - 5, obj.tPOffsetY - obj.bPWidth + obj.tPWidth - obj.sPTop - 5);
    ctx.lineTo(obj.tPOffsetX + obj.sPLeft + 5, obj.tPOffsetY - obj.bPWidth + obj.tPWidth - obj.sPTop - 5);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  var pressed = false;
  var diceOne = document.getElementById("diceOne");
  var diceFour = document.getElementById("diceFour");
  var btnspotsInCorners = document.getElementById("spotsInCorners");
  btnspotsInCorners.addEventListener("click", function () {
    pressed = !pressed;
    draw(scale, translatePos);

    if (pressed) {
      diceOne.style.fontSize = "24px";
      diceFour.style.fontSize = "18px";
    } else {
      diceOne.style.fontSize = "18px";
      diceFour.style.fontSize = "24px";
    }
  });

  function drawSpots() {
    //spots
    obj.tPOffsetY = obj.tPOffsetY - obj.bPWidth; // bo scale(1,-1) i liczymy od zera

    var spotsLineX = obj.tPLength - obj.sPLeft - 2.5 - obj.sPRight - 2.5;
    var spotsLineY = obj.tPWidth - obj.sPBottom - 2.5 - obj.sPTop - 2.5;
    var liczbaSpotowOsX = Math.floor(spotsLineX / obj.wPX) + 1;
    var korektaSpotX = spotsLineX - Math.floor(spotsLineX / obj.wPX) * obj.wPX;
    var liczbaSpotowOsY = Math.floor(spotsLineY / obj.wPY) + 1;
    var korektaSpotY = spotsLineY - Math.floor(spotsLineY / obj.wPY) * obj.wPY;
    var spotX0 = obj.tPOffsetX + korektaSpotX / 2 + obj.sPLeft + 2.5;
    var spotY0 = obj.tPOffsetY + korektaSpotY / 2 + obj.sPBottom + 2.5;
    var spotsXYNr = 0;
    ctx.lineWidth = 1;
    ctx.scale(1, -1);

    if (pressed) {
      spotsXYNr = 0;
      ctx.strokeStyle = "blue";

      if (liczbaSpotowOsX % 2) {
        liczbaSpotowOsX--;
        korektaSpotX += obj.wPX;
        spotX0 += obj.wPX / 2;
      }

      if (liczbaSpotowOsY % 2) {
        liczbaSpotowOsY--;
        korektaSpotY += obj.wPY;
        spotY0 += obj.wPY / 2;
      }

      for (var j = 0; j < liczbaSpotowOsY; j++) {
        for (var i = 0; i < liczbaSpotowOsX; i++) {
          ctx.beginPath();
          ctx.arc(spotX0 + i * obj.wPX, spotY0 + j * obj.wPY, obj.wPfi / 2, 0, 2 * Math.PI);
          ctx.stroke();
        }
      }

      spotsXYNr = liczbaSpotowOsX * liczbaSpotowOsY; //blue spots
      // console.log(`ilość spotów blue: ${spotsXYNr}`);
      // // --------------------------------orange -----------------------

      if (korektaSpotX > obj.wPX) {
        spotX0 -= obj.wPX;
        liczbaSpotowOsX += 2;
      }

      if (korektaSpotY > obj.wPY) {
        spotY0 -= obj.wPY;
        liczbaSpotowOsY += 2;
      }

      ctx.strokeStyle = "darkblue"; // if (!form.forceRibbon.checked) {

      for (var _j = 0; _j < liczbaSpotowOsY - 1; _j++) {
        for (var _i = 0; _i < liczbaSpotowOsX - 1; _i++) {
          ctx.beginPath();
          ctx.arc(spotX0 + obj.wPX / 2 + _i * obj.wPX, spotY0 + obj.wPY / 2 + _j * obj.wPY, obj.wPfi / 2, 0, 2 * Math.PI);
          ctx.stroke();
        }
      }

      spotsXYNr = spotsXYNr + (liczbaSpotowOsY - 1) * (liczbaSpotowOsX - 1);
      spotsInfo.textContent = "Nr of spots: ".concat(spotsXYNr);
    } else if (!pressed) {
      spotsXYNr = 0;
      ctx.strokeStyle = "darkblue";

      if (liczbaSpotowOsX % 2) {
        liczbaSpotowOsX--;
        korektaSpotX += obj.wPX;
        spotX0 += obj.wPX / 2;
      }

      if (liczbaSpotowOsY % 2) {
        liczbaSpotowOsY--;
        korektaSpotY += obj.wPY;
        spotY0 += obj.wPY / 2;
      }

      spotX0 += obj.wPX / 2;

      if (liczbaSpotowOsY % 2) {
        liczbaSpotowOsY--;
        korektaSpotY += obj.wPY;
        spotY0 += obj.wPY / 2;
      }

      if (korektaSpotX > obj.wPX) {
        spotX0 -= obj.wPX;
        liczbaSpotowOsX += 2;
      }

      for (var _j2 = 0; _j2 < liczbaSpotowOsY; _j2++) {
        for (var _i2 = 0; _i2 < liczbaSpotowOsX - 1; _i2++) {
          ctx.beginPath();
          ctx.arc(spotX0 + _i2 * obj.wPX, spotY0 + _j2 * obj.wPY, obj.wPfi / 2, 0, 2 * Math.PI);
          ctx.stroke();
        }
      }

      spotsXYNr = (liczbaSpotowOsX - 1) * liczbaSpotowOsY;

      if (liczbaSpotowOsX % 2) {
        liczbaSpotowOsX--;
        korektaSpotX += obj.wPX;
        spotX0 += obj.wPX / 2;
      }

      if (korektaSpotY > obj.wPY) {
        spotY0 -= obj.wPY;
        liczbaSpotowOsY += 2;
      }

      if (korektaSpotX > obj.wPX) {
        spotX0 -= obj.wPX;
        liczbaSpotowOsX -= 2;
      }

      ctx.strokeStyle = "blue";
      spotX0 = obj.tPOffsetX + korektaSpotX / 2 + obj.sPLeft + 2.5;

      for (var _j3 = 0; _j3 < liczbaSpotowOsY - 1; _j3++) {
        for (var _i3 = 0; _i3 < liczbaSpotowOsX; _i3++) {
          ctx.beginPath();
          ctx.arc(spotX0 + _i3 * obj.wPX, spotY0 + obj.wPY / 2 + _j3 * obj.wPY, obj.wPfi / 2, 0, 2 * Math.PI);
          ctx.stroke();
        }
      }

      spotsXYNr += liczbaSpotowOsX * (liczbaSpotowOsY - 1); //blue spots

      spotsInfo.textContent = "Nr of spots: ".concat(spotsXYNr);
    }

    var wTime = document.getElementById("weldT"); // const wT = ((obj.tPLength / 1000) * 204 + (obj.tPWidth / 1000) * 170 + spotsXYNr * 2.25 + (obj.bPLength / 1000) * 330) / 60;

    var wT = obj.tPLength / 1000 * 8.167 + obj.tPWidth / 1000 * 2.5 + spotsXYNr * 2.22 / 60 + obj.tPLength / 1000 / 12 * (obj.tPWidth / 1000) * 7.5; // const wT2 = (0.495 * ((obj.tPLength / 1000) * 204 + (obj.tPWidth / 1000) * 170 + spotsXYNr * 2.25 + (obj.bPLength / 1000) * 330)) / 60;

    var wT2 = obj.tPWidth < 400 ? wT : wT * 0.495;
    wTime.textContent = "Welding time: ".concat(wT.toFixed(1), " min");
  }

  var scaleMultiplier = 0.9;
  document.getElementById("plus").addEventListener("click", function () {
    scale /= scaleMultiplier;
    draw(scale, translatePos);
  });
  document.getElementById("minus").addEventListener("click", function () {
    scale *= scaleMultiplier;
    draw(scale, translatePos);
  });

  function showAll() {
    // const frameWidth = widthInput.valueAsNumber;
    // const frameHeight = heightInput.valueAsNumber;
    // obj.bPLength = form.bPLength.valueAsNumber;
    // obj.bPWidth = form.bPWidth.valueAsNumber;
    var wr = window.innerWidth / obj.bPLength;
    var hr = window.innerHeight * 0.6 / obj.bPWidth;
    scale = Math.min(wr, hr) * 0.9;
    var frameOnScreenWidth = obj.bPLength * scale;
    var frameOnScreenHeight = obj.bPWidth * scale;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    translatePos.x = Math.round(window.innerWidth / 2 - frameOnScreenWidth / 2);
    translatePos.y = Math.round(0.6 * window.innerHeight / 2 - frameOnScreenHeight / 2);
    draw(scale, translatePos); //0.6 ->> canvas.height
  } //buttton showAll


  document.getElementById("showAll").addEventListener("click", function () {
    draw(scale, translatePos);
    showAll();
  }); //sprawdzanie danych w inputach

  function validateLength() {
    if (obj.tPLength + obj.tPOffsetX > obj.bPLength) {
      //   bPLength.value = obj.tPLength + obj.tPOffsetX;
      bPLength.style.color = "red";
      tPLength.style.color = "red";
      tPOffsetX.style.color = "red"; //   validate = false;
      // draw(scale, translatePos);
      // validate = false;
    } else {
      bPLength.style.color = "black";
      tPLength.style.color = "black";
      tPOffsetX.style.color = "black"; //   validate = true;
      // validate = true;

      draw(scale, translatePos);
      showAll();
    }
  }

  function validateWidth() {
    if (obj.tPWidth + obj.tPOffsetY > obj.bPWidth) {
      //   bPWidth.value = obj.tPWidth + obj.tPOffsetY;
      bPWidth.style.color = "red";
      tPWidth.style.color = "red";
      tPOffsetY.style.color = "red"; //   validate = false;
      // draw(scale, translatePos);
      // validate = false;
    } else {
      bPWidth.style.color = "black";
      tPWidth.style.color = "black";
      tPOffsetY.style.color = "black"; //   validate = true;
      // validate = true;

      draw(scale, translatePos);
      showAll();
    }
  }

  function validateSpotPattern() {
    if (obj.wPX < 30 || obj.wPY < 30) {
      //   bPWidth.value = obj.tPWidth + obj.tPOffsetY;
      wPX.style.color = "red";
      wPY.style.color = "red"; //   validate = false;
      // draw(scale, translatePos);
      // validate = false;
    } else {
      wPX.style.color = "black";
      wPY.style.color = "black"; //   validate = true;
      // validate = true;

      draw(scale, translatePos);
    }
  }

  function validateSpotDiam() {
    if (obj.wPfi < 6 || obj.wPfi > 20) {
      wPfi.style.color = "red";
    } else {
      wPfi.style.color = "black";
      draw(scale, translatePos);
    }
  }

  var bPThickness = document.getElementById("bPThickness");
  var tPThickness = document.getElementById("tPThickness");
  bPThickness.addEventListener("input", function () {
    weightTPBP();
  });
  tPThickness.addEventListener("input", function () {
    weightTPBP();
  });

  function weightTPBP() {
    var bPTw = document.getElementById("bPweight");
    var tPTw = document.getElementById("tPweight");
    var bPInkg = (8 * bPThickness.value * obj.bPLength / 1000 * obj.bPWidth / 1000).toFixed(1);
    var tPInkg = (8 * tPThickness.value * obj.tPLength / 1000 * obj.tPWidth / 1000).toFixed(1);
    bPTw.textContent = "BP: ".concat(bPInkg, " kg");
    tPTw.textContent = "TP: ".concat(tPInkg, " kg");
  } //   bottom plate


  var bPLength = document.getElementById("bPLength");
  var bPWidth = document.getElementById("bPWidth");
  var tPLength = document.getElementById("tPLength");
  var tPWidth = document.getElementById("tPWidth");
  var tPOffsetX = document.getElementById("tPOffsetX");
  var tPOffsetY = document.getElementById("tPOffsetY");
  var wPX = document.getElementById("wPX");
  var wPY = document.getElementById("wPY");
  var wPfi = document.getElementById("wPfi");
  bPLength.addEventListener("input", function () {
    getInputs();
    validateLength();
  });
  bPWidth.addEventListener("input", function () {
    getInputs();
    validateWidth();
  }); // top plate

  tPLength.addEventListener("input", function () {
    getInputs();
    validateLength();
  });
  tPWidth.addEventListener("input", function () {
    getInputs();
    validateWidth();
  }); // offset x,y

  tPOffsetX.addEventListener("input", function () {
    getInputs();
    validateLength();
  });
  tPOffsetY.addEventListener("input", function () {
    getInputs();
    validateWidth();
  }); // wPfi,wPX,wPY

  wPX.addEventListener("input", function () {
    getInputs();
    validateSpotPattern();
  });
  wPY.addEventListener("input", function () {
    getInputs();
    validateSpotPattern();
  });
  wPfi.addEventListener("input", function () {
    getInputs();
    validateSpotDiam(); // showAll();
  }); // add event listeners to handle screen drag

  canvas.addEventListener("mousedown", function (evt) {
    mouseDown = true;
    startDragOffset.x = evt.clientX - translatePos.x;
    startDragOffset.y = evt.clientY - translatePos.y;
  });
  canvas.addEventListener("mouseup", function (evt) {
    mouseDown = false;
    document.body.style.cursor = "";
  });
  canvas.addEventListener("mouseover", function (evt) {
    mouseDown = false;
    var transform = ctx.getTransform();
  });
  canvas.addEventListener("mouseout", function (evt) {
    mouseDown = false;
  });
  canvas.addEventListener("mousemove", function (evt) {
    //  currentTransformedCursor = getTransformedPoint(evt.offsetX, evt.offsetY);
    var transform = draw(scale, translatePos);

    if (mouseDown) {
      document.body.style.cursor = "move";
      translatePos.x = evt.clientX - startDragOffset.x;
      translatePos.y = evt.clientY - startDragOffset.y;
    } else {
      var inverseZoomX = 1 / transform.a;
      var inverseZoomY = 1 / transform.d;
      h6.innerHTML = "x: ".concat((inverseZoomX * evt.offsetX - inverseZoomX * transform.e).toFixed(1), ", y: ").concat((inverseZoomY * evt.offsetY - inverseZoomY * transform.f + obj.bPWidth).toFixed(1));
    } // } else {
    //   const inverseZoomX = 1 / transform.a;
    //   const inverseZoomY = 1 / transform.d;
    //   h6.innerHTML = `${(inverseZoomX * evt.offsetX - inverseZoomX * transform.e).toFixed(1)}, ${(-(inverseZoomY * evt.offsetY - inverseZoomY * transform.f - obj.bPWidth)).toFixed(1)}`;
    // }

  }); //skrolowanie rolkaaaaaaaaaaaaaaaaaaa
  // let currentTransformedCursor;
  // function onWheel(event) {
  //   const zoom = event.deltaY < 0 ? 1.1 : 0.9;
  //   ctx.translate(currentTransformedCursor.x, currentTransformedCursor.y);
  //   ctx.scale(zoom, zoom);
  //   ctx.translate(-currentTransformedCursor.x, -currentTransformedCursor.y);
  //   draw(scale, translatePos);
  //   event.preventDefault();
  // }
  // function fullGetTransformedPoint(x, y) {
  //   const inverseTransform = ctx.getTransform().invertSelf();
  //   const transformedX = inverseTransform.a * x + inverseTransform.c * y + inverseTransform.e;
  //   const transformedY = inverseTransform.b * x + inverseTransform.d * y + inverseTransform.f;
  //   return { x: transformedX, y: transformedY };
  // }
  // canvas.addEventListener("wheel", onWheel);
  //skrolowanie rolkaaaaaaaaaaaaaaaaaaa

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.6;
    draw(scale, translatePos);
    showAll();
  });
  draw(scale, translatePos);
  var btnLink = document.querySelector(".drawDXF");
  btnLink.addEventListener("click", function () {
    document.querySelectorAll("input").forEach(function (v) {
      obj[v.name] = parseFloat(v.value);
    }); // getInputs();

    drawDXF(obj);
  });

  function drawDXF(obj) {
    var d = new Drawing(); //*************************** reference lines ***************************/

    d.setUnits("Millimeters").addLayer("ReferenceLine", Drawing.ACI.RED, "CONTINUOUS");
    d.setActiveLayer("ReferenceLine");
    d.drawLine(0, 0, obj.bPLength, 0);
    d.drawLine(0, 0, 0, obj.bPWidth); //*************************** TPL ***************************/

    d.setUnits("Millimeters").addLayer("TopPlateLength", Drawing.ACI.YELLOW, "CONTINUOUS");
    d.setActiveLayer("TopPlateLength");
    d.drawLine(obj.tPOffsetX + obj.sPLeft - 17.5 + 2.5, -0.5 + obj.tPOffsetY, obj.tPOffsetX + obj.tPLength - obj.sPRight + 17.5 - 2.5, -0.5 + obj.tPOffsetY); //*************************** BP ***************************/

    d.setUnits("Millimeters").addLayer("BottomPlate", Drawing.ACI.CYAN, "CONTINUOUS");
    d.setActiveLayer("BottomPlate");
    d.drawLine(0, 0, obj.bPLength, 0);
    d.drawLine(obj.bPLength, 0, obj.bPLength, obj.bPWidth);
    d.drawLine(obj.bPLength, obj.bPWidth, 0, obj.bPWidth);
    d.drawLine(0, obj.bPWidth, 0, 0); //*************************** TP ***************************/

    d.setUnits("Millimeters").addLayer("TopPlate", Drawing.ACI.RED, "CONTINUOUS");
    d.setActiveLayer("TopPlate");
    d.drawLine(obj.tPOffsetX, obj.tPOffsetY, obj.tPOffsetX + obj.tPLength, obj.tPOffsetY);
    d.drawLine(obj.tPOffsetX + obj.tPLength, obj.tPOffsetY, obj.tPOffsetX + obj.tPLength, obj.tPOffsetY + obj.tPWidth);
    d.drawLine(obj.tPOffsetX + obj.tPLength, obj.tPOffsetY + obj.tPWidth, obj.tPOffsetX, obj.tPOffsetY + obj.tPWidth);
    d.drawLine(obj.tPOffsetX, obj.tPOffsetY + obj.tPWidth, obj.tPOffsetX, obj.tPOffsetY); //*************************** SEAM ***************************/

    d.setUnits("Millimeters").addLayer("Seam", Drawing.ACI.GREEN, "CONTINUOUS");
    d.setActiveLayer("Seam"); //external

    d.drawArc(obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.sPBottom + 15, 15, 180, 270);
    d.drawLine(obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.sPBottom, obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.sPBottom);
    d.drawArc(obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.sPBottom + 15, 15, 270, 360);
    d.drawLine(obj.tPOffsetX + obj.tPLength - obj.sPRight, obj.tPOffsetY + obj.sPBottom + 15, obj.tPOffsetX + obj.tPLength - obj.sPRight, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15);
    d.drawArc(obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15, 15, 0, 90);
    d.drawLine(obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop, obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop);
    d.drawArc(obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15, 15, 90, 180);
    d.drawLine(obj.tPOffsetX + obj.sPLeft, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15, obj.tPOffsetX + obj.sPLeft, obj.tPOffsetY + obj.sPBottom + 15); //internal

    d.drawArc(obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.sPBottom + 15, 10, 180, 270);
    d.drawLine(obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.sPBottom + 5, obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.sPBottom + 5);
    d.drawArc(obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.sPBottom + 15, 10, 270, 360);
    d.drawLine(obj.tPOffsetX + obj.tPLength - obj.sPRight - 5, obj.tPOffsetY + obj.sPBottom + 15, obj.tPOffsetX + obj.tPLength - obj.sPRight - 5, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15);
    d.drawArc(obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15, 10, 0, 90);
    d.drawLine(obj.tPOffsetX + obj.tPLength - obj.sPRight - 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 5, obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 5);
    d.drawArc(obj.tPOffsetX + obj.sPLeft + 15, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15, 10, 90, 180);
    d.drawLine(obj.tPOffsetX + obj.sPLeft + 5, obj.tPOffsetY + obj.tPWidth - obj.sPTop - 15, obj.tPOffsetX + obj.sPLeft + 5, obj.tPOffsetY + obj.sPBottom + 15);
    /*************************** engraving ***************************/

    d.addLayer("Text", Drawing.ACI.YELLOW, "CONTINUOUS");
    d.setActiveLayer("Text");
    d.drawText(obj.tPOffsetX + 30, obj.tPOffsetY + 5, 5, 0, "2022 - PILLOW PLATE");
    var bPInkg = (8 * bPThickness.value * obj.bPLength / 1000 * obj.bPWidth / 1000).toFixed(1);
    var tPInkg = (8 * tPThickness.value * obj.tPLength / 1000 * obj.tPWidth / 1000).toFixed(1);
    d.setActiveLayer("BottomPlate");
    d.drawText(5, -50, 15, 0, "Bottom Plate: ".concat(bPThickness.value, "x").concat(obj.bPLength, "x").concat(obj.bPWidth, " - ").concat(bPInkg, "kg"));
    d.setActiveLayer("TopPlate");
    d.drawText(5, -70, 15, 0, "Top Plate: ".concat(tPThickness.value, "x").concat(obj.tPLength, "x").concat(obj.tPWidth, " - ").concat(tPInkg, "kg"));
    var wT = obj.tPLength / 1000 * 8.167 + obj.tPWidth / 1000 * 2.5 + spotsXYNr * 2.22 / 60 + obj.tPLength / 1000 / 12 * (obj.tPWidth / 1000) * 7.5;
    d.setActiveLayer("0");
    d.drawText(5, -110, 15, 0, "Welding time: ".concat(wT.toFixed(1), "min"));
    /*************************** SPOTS ***************************/

    d.setUnits("Millimeters").addLayer("Spot", Drawing.ACI.BLUE, "CONTINUOUS");
    d.setActiveLayer("Spot");
    d.drawText(5, -90, 15, 0, "Pattern: ".concat(obj.wPX.toFixed(1), "x").concat(obj.wPY.toFixed(1), " %%c").concat(obj.wPfi, "mm"));
    var spotsLineX = obj.tPLength - obj.sPLeft - 2.5 - obj.sPRight - 2.5;
    var spotsLineY = obj.tPWidth - obj.sPBottom - 2.5 - obj.sPTop - 2.5;
    var liczbaSpotowOsX = Math.floor(spotsLineX / obj.wPX) + 1;
    var korektaSpotX = spotsLineX - Math.floor(spotsLineX / obj.wPX) * obj.wPX;
    var liczbaSpotowOsY = Math.floor(spotsLineY / obj.wPY) + 1;
    var korektaSpotY = spotsLineY - Math.floor(spotsLineY / obj.wPY) * obj.wPY;
    var spotX0 = obj.tPOffsetX + korektaSpotX / 2 + obj.sPLeft + 2.5;
    var spotY0 = obj.tPOffsetY + korektaSpotY / 2 + obj.sPBottom + 2.5;
    var spotsXYNr = 0;

    if (pressed) {
      if (liczbaSpotowOsX % 2) {
        liczbaSpotowOsX--;
        korektaSpotX += obj.wPX;
        spotX0 += obj.wPX / 2;
      }

      if (liczbaSpotowOsY % 2) {
        liczbaSpotowOsY--;
        korektaSpotY += obj.wPY;
        spotY0 += obj.wPY / 2;
      }

      for (var j = 0; j < liczbaSpotowOsY; j++) {
        for (var i = 0; i < liczbaSpotowOsX; i++) {
          d.drawCircle(spotX0 + i * obj.wPX, spotY0 + j * obj.wPY, obj.wPfi / 2);
        }
      }

      if (korektaSpotX > obj.wPX) {
        spotX0 -= obj.wPX;
        liczbaSpotowOsX += 2;
      }

      if (korektaSpotY > obj.wPY) {
        spotY0 -= obj.wPY;
        liczbaSpotowOsY += 2;
      }

      for (var _j4 = 0; _j4 < liczbaSpotowOsY - 1; _j4++) {
        for (var _i4 = 0; _i4 < liczbaSpotowOsX - 1; _i4++) {
          d.drawCircle(spotX0 + obj.wPX / 2 + _i4 * obj.wPX, spotY0 + obj.wPY / 2 + _j4 * obj.wPY, obj.wPfi / 2);
        }
      }
    } else if (!pressed) {
      if (liczbaSpotowOsX % 2) {
        liczbaSpotowOsX--;
        korektaSpotX += obj.wPX;
        spotX0 += obj.wPX / 2;
      }

      if (liczbaSpotowOsY % 2) {
        liczbaSpotowOsY--;
        korektaSpotY += obj.wPY;
        spotY0 += obj.wPY / 2;
      }

      spotX0 += obj.wPX / 2;

      if (liczbaSpotowOsY % 2) {
        liczbaSpotowOsY--;
        korektaSpotY += obj.wPY;
        spotY0 += obj.wPY / 2;
      }

      if (korektaSpotX > obj.wPX) {
        spotX0 -= obj.wPX;
        liczbaSpotowOsX += 2;
      }

      for (var _j5 = 0; _j5 < liczbaSpotowOsY; _j5++) {
        for (var _i5 = 0; _i5 < liczbaSpotowOsX - 1; _i5++) {
          d.drawCircle(spotX0 + _i5 * obj.wPX, spotY0 + _j5 * obj.wPY, obj.wPfi / 2);
        }
      }

      if (liczbaSpotowOsX % 2) {
        liczbaSpotowOsX--;
        korektaSpotX += obj.wPX;
        spotX0 += obj.wPX / 2;
      }

      if (korektaSpotY > obj.wPY) {
        spotY0 -= obj.wPY;
        liczbaSpotowOsY += 2;
      }

      if (korektaSpotX > obj.wPX) {
        spotX0 -= obj.wPX;
        liczbaSpotowOsX -= 2;
      }

      spotX0 = obj.tPOffsetX + korektaSpotX / 2 + obj.sPLeft + 2.5;

      for (var _j6 = 0; _j6 < liczbaSpotowOsY - 1; _j6++) {
        for (var _i6 = 0; _i6 < liczbaSpotowOsX; _i6++) {
          d.drawCircle(spotX0 + _i6 * obj.wPX, spotY0 + obj.wPY / 2 + _j6 * obj.wPY, obj.wPfi / 2);
        }
      }
    } // /*************************** holes on TP                  tPholeLT  ***************************/
    // if (form.cbHoleLT.checked) {
    //   d.setActiveLayer('TopPlate');
    //   d.drawCircle(obj.tPholeLTposX + obj.tPOffsetX, obj.tPWidth - obj.tPholeLTposY + obj.tPOffsetY, obj.tPholeLTdiam / 2);
    // }
    // if (form.cbHoleLB.checked) {
    //   d.setActiveLayer('TopPlate');
    //   d.drawCircle(obj.tPholeLBposX + obj.tPOffsetX, obj.tPholeLBposY + obj.tPOffsetY, obj.tPholeLBdiam / 2);
    // }
    // if (form.cbHoleRT.checked) {
    //   d.setActiveLayer('TopPlate');
    //   d.drawCircle(obj.tPLength + obj.tPOffsetX - obj.tPholeRTposX, obj.tPWidth - obj.tPholeRTposY + obj.tPOffsetY, obj.tPholeRTdiam / 2);
    // }
    // if (form.cbHoleRB.checked) {
    //   d.setActiveLayer('TopPlate');
    //   d.drawCircle(obj.tPLength + obj.tPOffsetX - obj.tPholeRBposX, obj.tPholeRBposY + obj.tPOffsetY, obj.tPholeRBdiam / 2);
    // }
    // //------------------------------------------------------------------------------
    // form.alignWithSpots.onclick = align;
    // function align() {
    //   if ((form.cbHoleRB.checked && form.cbHoleRT.checked) || (form.cbHoleLB.checked && form.cbHoleLT.checked)) {
    //     let dlY = obj.tPWidth - obj.tPholeLTposY - obj.tPholeLBposY;
    //     let arrY = [];
    //     arrY[0] = dlY;
    //     for (let i = 1; arrY[i - 1] > obj.wPY / 2; i++) {
    //       arrY[i] = dlY / i;
    //     }
    //     let goalY = obj.wPY;
    //     let closestY = arrY.reduce(function (prev, curr) {
    //       return Math.abs(curr - goalY) < Math.abs(prev - goalY) ? curr : prev;
    //     });
    //     form.wPY.value = closestY.toFixed(2);
    //     let dlX = obj.tPLength - obj.tPholeRBposX - obj.tPholeLBposX;
    //     let arrX = [];
    //     arrX[0] = dlX;
    //     for (let i = 1; arrX[i - 1] > obj.wPX / 2; i++) {
    //       arrX[i] = dlX / i;
    //     }
    //     let goalX = obj.wPX;
    //     let closestX = arrX.reduce(function (prev, curr) {
    //       return Math.abs(curr - goalX) < Math.abs(prev - goalX) ? curr : prev;
    //     });
    //     form.wPX.value = closestX.toFixed(2);
    //   }
    // }
    // /*************************** force ribbon ***************************/
    // if (form.forceRibbon.checked) {
    //   !pressed ? (spotX0 = spotX0 - obj.wPX / 2) : (spotX0 = spotX0);
    //   d.setUnits('Millimeters').addLayer('Seamr', Drawing.ACI.GREEN, 'CONTINUOUS');
    //   d.setActiveLayer('Seam');
    //   d.drawLine(obj.tPOffsetX + obj.sPLeft + 5, obj.tPOffsetY + spotsLineY / 2 + obj.sPBottom + 5, spotX0 + (Math.floor(spotsLineX / obj.wPX) - Math.floor(spotsLineY / obj.wPY) / 2) * obj.wPX, obj.tPOffsetY + spotsLineY / 2 + obj.sPBottom + 5);
    //   d.drawLine(obj.tPOffsetX + obj.sPLeft + 5, obj.tPOffsetY + spotsLineY / 2 + obj.sPBottom, spotX0 + (Math.floor(spotsLineX / obj.wPX) - Math.floor(spotsLineY / obj.wPY) / 2) * obj.wPX, obj.tPOffsetY + spotsLineY / 2 + obj.sPBottom);
    //   d.setUnits('Millimeters').addLayer('Serpentine', Drawing.ACI.MAGENTA, 'CONTINUOUS');
    //   d.setActiveLayer('Serpentine');
    //   d.drawArc(obj.tPOffsetX + 20 + obj.sPRight, obj.tPOffsetY + (obj.tPWidth + 5) / 2 + 15, 15, 180, 270);
    //   d.drawArc(obj.tPOffsetX + 20 + obj.sPRight, obj.tPOffsetY + (obj.tPWidth + 5) / 2 - 20, 15, 90, 180);
    // }


    var b = new Blob([d.toDxfString()], {
      type: "application/dxf"
    });
    document.getElementById("dxf").href = URL.createObjectURL(b);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle2b18ce.js.map