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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliders_main_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliders/main-slider */ "./src/js/modules/sliders/main-slider.js");
/* harmony import */ var _modules_sliders_mini_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders/mini-slider */ "./src/js/modules/sliders/mini-slider.js");
/* harmony import */ var _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/videoPlayer */ "./src/js/modules/videoPlayer.js");



window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new _modules_sliders_main_slider__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.page',
    btns: '.next'
  });
  mainSlider.render();
  const showUpMiniSlider = new _modules_sliders_mini_slider__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  });
  showUpMiniSlider.init();
  const modulesMiniSlider = new _modules_sliders_mini_slider__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next'
  });
  modulesMiniSlider.init();
  const feedMiniSlider = new _modules_sliders_mini_slider__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next'
  });
  feedMiniSlider.init();

  // const player = new VideoPlayer('.play', '.overlay');
  // player.init();
});

/***/ }),

/***/ "./src/js/modules/sliders/main-slider.js":
/*!***********************************************!*\
  !*** ./src/js/modules/sliders/main-slider.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/sliders/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    container,
    btns
  }) {
    super({
      container,
      btns
    });
  }
  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    this.slides.forEach(slide => {
      slide.classList.remove('customFadeIn');
      slide.style.display = 'none';
    });
    this.slides[this.slideIndex - 1].style.display = 'block';
    this.slides[this.slideIndex - 1].classList.add('customFadeIn');
  }
  changeSlide(n) {
    this.showSlides(this.slideIndex += n);
  }
  render() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        this.changeSlide(1);
        if (this.slideIndex === 3) {
          try {
            this.showHanson();
          } catch (e) {}
        }
      });
      btn.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    this.showSlides(this.slideIndex);
  }
  showHanson() {
    const hanson = document.querySelector('.hanson');
    hanson.style.cssText = `
            bottom: -164px;
            transition: all ease-in 0.3s;
        `;
    setTimeout(() => {
      hanson.style.bottom = '0px';
    }, 3000);
  }
}

/***/ }),

/***/ "./src/js/modules/sliders/mini-slider.js":
/*!***********************************************!*\
  !*** ./src/js/modules/sliders/mini-slider.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/sliders/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(container, prev, next, activeClass, animate, autoplay) {
    super(container, prev, next, activeClass, animate, autoplay);
  }
  decorizeSlide() {
    console.log(this.slides);
    this.slides.forEach(slide => {

      // slide.classList.remove(this.activeClass);
    });
    this.slides[0].classList.add(this.activeClass);
  }
  bindTriggers() {
    this.next.addEventListener('click', () => {
      this.container.appendChild(this.slides[0]);
    });
    this.prev.addEventListener('click', () => {
      let active = this.slides[this.slides.length - 1];
      this.container.insertBefore(active, this.slides[0]);
    });
  }
  init() {
    this.container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;
        `;

    // this.decorizeSlide();
    this.bindTriggers();
  }
}

/***/ }),

/***/ "./src/js/modules/sliders/slider.js":
/*!******************************************!*\
  !*** ./src/js/modules/sliders/slider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    activeClass = '',
    animate,
    autoplay
  } = {}) {
    this.container = document.querySelector(container);
    this.slides = Array.from(this.container.children);
    this.btns = document.querySelectorAll(btns);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}

/***/ }),

/***/ "./src/js/modules/videoPlayer.js":
/*!***************************************!*\
  !*** ./src/js/modules/videoPlayer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
  }
  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          this.overlay.style.display = 'flex';
        } else {
          const url = btn.getAttribute('data-url');
          this.createPlayer(url);
        }
      });
    });
  }
  bindClose() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
  }
  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: url,
      playerVars: {
        'playsinline': 1
      }
    });
    this.overlay.style.display = 'flex';
  }
  init() {
    try {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.bindTriggers();
      this.bindClose();
    } catch (e) {}
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map