/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./hw1.js":
/*!****************!*\
  !*** ./hw1.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hw1": () => (/* binding */ hw1),
/* harmony export */   "task1": () => (/* binding */ task1),
/* harmony export */   "task2": () => (/* binding */ task2),
/* harmony export */   "task3": () => (/* binding */ task3),
/* harmony export */   "task4": () => (/* binding */ task4)
/* harmony export */ });
var hw1 = [5, 4, 1, 20, 0, -4, -8, 100, 4, -74, -5, 0, 0, 1, 2, 7];
var task1 = hw1.map(function (item) {
  return item * 5;
});
var task2 = hw1.filter(function (item) {
  return item > 0;
});
var task3 = hw1.reduce(function (item, item2) {
  return item > item2 ? item : item = item2;
});
var task4 = hw1.reduce(function (item, item2) {
  return item < item2 ? item : item = item2;
});

/***/ }),

/***/ "./hw2.js":
/*!****************!*\
  !*** ./hw2.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Anames": () => (/* binding */ Anames),
/* harmony export */   "capNames": () => (/* binding */ capNames),
/* harmony export */   "largename": () => (/* binding */ largename),
/* harmony export */   "latNames": () => (/* binding */ latNames),
/* harmony export */   "names": () => (/* binding */ names)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var names = ["алиса", "ЖЕНЯ", "артем", "ПАВЕЛ", "ЖАКШЫЛЫК", "антон", "айсулуу", "канаим"];
var capNames = names.map(function (item) {
  return item[0].toUpperCase() + item.slice(1).toLowerCase();
});
function RusToLat(str) {
  var ru = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'e',
    'ж': 'j',
    'з': 'z',
    'и': 'i',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'c',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'shch',
    'ы': 'y',
    'э': 'e',
    'ю': 'u',
    'я': 'ya',
    'ъ': 'ie',
    'ь': '',
    'й': 'i'
  };
  var newString = [];
  return _toConsumableArray(str).map(function (l) {
    var latL = ru[l.toLocaleLowerCase()];
    if (l !== l.toLocaleLowerCase()) {
      latL = latL.charAt(0).toLocaleUpperCase() + latL.slice(1);
    } else if (latL === undefined) {
      latL = l;
    }
    return latL;
  }).join('');
}
var latNames = capNames.map(function (item) {
  return RusToLat(item);
});
var Anames = capNames.filter(function (item) {
  return item[0] === 'А';
});
var largename = names.reduce(function (item, item2) {
  return item.length > item2.length ? item : item = item2;
});

/***/ }),

/***/ "./hw3.js":
/*!****************!*\
  !*** ./hw3.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Car": () => (/* binding */ Car),
/* harmony export */   "bestMotorCars": () => (/* binding */ bestMotorCars),
/* harmony export */   "bigMotor": () => (/* binding */ bigMotor),
/* harmony export */   "cars": () => (/* binding */ cars),
/* harmony export */   "carsNames": () => (/* binding */ carsNames),
/* harmony export */   "lastTask": () => (/* binding */ lastTask),
/* harmony export */   "oldCars": () => (/* binding */ oldCars)
/* harmony export */ });
function Car(brand, model, country, year, motor) {
  this.brand = brand;
  this.model = model;
  this.country = country;
  this.year = year;
  this.motor = motor;
}
var cars = [new Car('bmw', 'px2', 'Japan', 2014, 5), new Car('wold', 'px1', 'Japan', 2010, 3.5), new Car('mazda', 'px3', 'Japan', 2010, 3), new Car('kio', 'px5', 'Japan', 2003, 1), new Car('chewrolet', 'px00', 'Japan', 2005, 2)];
var carsNames = cars.map(function (item) {
  return "".concat(item.brand, ",").concat(item.model, ",").concat(item.motor, ",").concat(item.year);
});
var bigMotor = cars.filter(function (item) {
  return item.motor > 3;
});
var oldCars = cars.reduce(function (item, item2) {
  return item.year < item2.year ? item : item = item2;
});
var bestMotorCars = cars.reduce(function (item, item2) {
  return item.motor > item2.motor ? item : item = item2;
});
var lastTask = cars.filter(function (item) {
  return item.year < 2010;
}).reduce(function (item, item2) {
  return item.motor > item2.motor ? item : item = item2;
});

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
/******/ 			// no module.id needed
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************!*\
  !*** ./app.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hw1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hw1 */ "./hw1.js");
/* harmony import */ var _hw2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hw2 */ "./hw2.js");
/* harmony import */ var _hw3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hw3 */ "./hw3.js");



// console.log( hw1, task1, task2, task3, task4);
// console.log(Anames, capNames, largename, latNames)
// console.log(bestMotorCars, bigMotor, Car, cars, carsNames, lastTask, oldCars);
})();

/******/ })()
;
//# sourceMappingURL=homework.js.map