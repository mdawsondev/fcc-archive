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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _JSON = __webpack_require__(2);

var _JSON2 = _interopRequireDefault(_JSON);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  function search(query) {
    new _JSON2.default().pull(encodeURIComponent(query), function (response) {
      document.getElementById('results').style.opacity = 0;
      document.getElementById('header').classList.remove('header--center');
      setTimeout(function () {
        document.getElementById('results').innerHTML = '';
        for (var result in response.query.search) {
          var titleOut = document.createElement('h1'),
              linkOut = document.createElement('a'),
              snippetOut = document.createElement('p'),
              wrapperOut = document.createElement('div');
          titleOut.classList.add("card__title");
          snippetOut.classList.add("card__description");
          wrapperOut.classList.add("results__card");
          linkOut.innerHTML = response.query.search[result].title;
          linkOut.href = 'https://en.wikipedia.org/wiki/' + response.query.search[result].title;
          snippetOut.innerHTML = response.query.search[result].snippet;
          titleOut.appendChild(linkOut);
          wrapperOut.appendChild(titleOut);
          wrapperOut.appendChild(snippetOut);
          document.getElementById('results').appendChild(wrapperOut);
          document.getElementById('results').style.opacity = 1;
        }
      }, 200);
    });
  }
  document.getElementById('btn-search').onclick = function () {
    search(document.getElementById('input-search').value);
  };
}

init();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoadJSON = function () {
  function LoadJSON() {
    _classCallCheck(this, LoadJSON);

    this.pull();
  }

  _createClass(LoadJSON, [{
    key: 'pull',
    value: function pull(query, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=' + query, true);
      xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200 && callback) {
          callback(JSON.parse(this.responseText));
        }
      };
      xhr.send(null);
    }
  }]);

  return LoadJSON;
}();

exports.default = LoadJSON;

/***/ })
/******/ ]);