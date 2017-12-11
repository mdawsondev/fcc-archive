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


var _Logic = __webpack_require__(2);

var _Logic2 = _interopRequireDefault(_Logic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  var simon = new _Logic2.default();
  var gamebtns = document.getElementsByClassName('gamebtn');

  /* Welcome! */
  simon.playSound(6);
  setTimeout(function () {
    simon.showTitle(true);
    setTimeout(function () {
      simon.showTitle(false);
      simon.showSettings(true);
    }, 3000);
  }, 1000);

  /* Begin the game! */
  document.getElementById('start').addEventListener('click', function (e) {
    simon.generateSequence();
  });

  /* Run input logic! */
  Array.from(gamebtns).forEach(function (element) {
    element.addEventListener('click', function (e) {
      simon.getInput(e.target);
    });
  });

  /* Reset the game! */
  document.getElementById('reset').addEventListener('click', function (e) {
    simon.resetGame();
  });

  /* Toggle strict mode! */
  document.getElementById('strict').addEventListener('click', function (e) {
    simon.toggleStrict(e.target);
  });
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

var _Sound = __webpack_require__(3);

var _Sound2 = _interopRequireDefault(_Sound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Simon = function () {
  function Simon() {
    _classCallCheck(this, Simon);

    this.player = [];
    this.sequence = [];
    this.sound = new _Sound2.default();
    this.strict = false;
    this.winScore = 20;
  }

  _createClass(Simon, [{
    key: 'showTitle',
    value: function showTitle(option) {
      if (option) {
        document.getElementById('title').classList.add('title--visible');
      } else {
        document.getElementById('title').classList.remove('title--visible');
      }
    }
  }, {
    key: 'showSettings',
    value: function showSettings(option) {
      if (option) {
        document.getElementById('settings').classList.add('settings--visible');
      } else {
        document.getElementById('settings').classList.remove('settings--visible');
      }
    }
  }, {
    key: 'getInput',
    value: function getInput(el) {
      var _this = this;

      this.player.push(el.id);
      if (this.player[this.player.length - 1] != this.sequence[this.player.length - 1]) {
        this.gameOver();
        this.resetInput();
      } else {
        this.playSound(Number(el.id));
        if (this.player.length == this.sequence.length) {
          this.resetInput();
          this.checkWin();
        }
      }
      setTimeout(function () {
        _this.colorChange(el);
      }, 200);
    }
  }, {
    key: 'colorChange',
    value: function colorChange(el) {
      if (el.classList.length == 2) el.classList.add(el.classList[1] + '-active');
      setTimeout(function () {
        el.classList.remove(el.classList[1] + '-active');
      }, 300);
    }
  }, {
    key: 'checkWin',
    value: function checkWin() {
      var _this2 = this;

      if (this.sequence.length == this.winScore) {
        console.log('yay u did it buddy');
      } else {
        setTimeout(function () {
          _this2.generateSequence();
          _this2.updateCount();
        }, 1000);
      }
    }
  }, {
    key: 'playSound',
    value: function playSound(num) {
      this.sound['sound' + num].currentTime = 0;
      this.sound['sound' + num].play();
    }
  }, {
    key: 'resetInput',
    value: function resetInput() {
      this.player = [];
    }
  }, {
    key: 'resetGame',
    value: function resetGame() {
      this.player = [];
      this.sequence = [];
      this.generateSequence();
      this.updateCount();
    }
  }, {
    key: 'toggleStrict',
    value: function toggleStrict(el) {
      if (this.strict) {
        this.strict = false;
      } else {
        this.strict = true;
        el.style.color = 'red';
      }
      console.log(el);
    }
  }, {
    key: 'updateCount',
    value: function updateCount() {
      document.getElementById('count').innerHTML = this.sequence.length;
    }
  }, {
    key: 'gameOver',
    value: function gameOver() {
      var _this3 = this;

      this.playSound(5);
      setTimeout(function () {
        if (_this3.strict) {
          _this3.resetGame();
        } else {
          _this3.showSequence();
        }
      }, 2000);
    }
  }, {
    key: 'generateSequence',
    value: function generateSequence() {
      var rndNmbr = Math.floor(Math.random() * 4) + 1;
      this.sequence.push(rndNmbr);
      this.showSequence();
    }
  }, {
    key: 'showSequence',
    value: function showSequence() {
      var _this4 = this;

      var _loop = function _loop(i) {
        setTimeout(function () {
          var target = document.getElementById(_this4.sequence[i]);
          _this4.colorChange(target);
          _this4.playSound(_this4.sequence[i]);
        }, i * 1000);
      };

      for (var i = 0; i < this.sequence.length; i++) {
        _loop(i);
      }
    }
  }]);

  return Simon;
}();

exports.default = Simon;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sound = function Sound() {
  _classCallCheck(this, Sound);

  this.sound1 = new Audio('./assets/audio/1.wav');
  this.sound2 = new Audio('./assets/audio/2.wav');
  this.sound3 = new Audio('./assets/audio/3.wav');
  this.sound4 = new Audio('./assets/audio/4.wav');
  this.sound5 = new Audio('./assets/audio/buzz.wav');
  this.sound6 = new Audio('./assets/audio/intro.mp3');
};

exports.default = Sound;

/***/ })
/******/ ]);