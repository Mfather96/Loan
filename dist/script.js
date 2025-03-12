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
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");





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
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    autoplay: true
  });
  modulesMiniSlider.init();
  const feedMiniSlider = new _modules_sliders_mini_slider__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active'
  });
  feedMiniSlider.init();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officerold', '.officernew', '.officer__card-item').init();
  new _modules_form__WEBPACK_IMPORTED_MODULE_4__["default"]().init();
  // const player = new VideoPlayer('.play', '.overlay');
  // player.init();
});

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difference; });
class Difference {
  constructor(oldSelector, newSelector, itemsSelector) {
    this.oldContainer = document.querySelector(oldSelector);
    this.newContainer = document.querySelector(newSelector);
    this.itemsSelector = itemsSelector;
  }
  hideItems(container) {
    container.querySelectorAll(this.itemsSelector).forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none';
      }
    });
  }
  bindTriggers() {
    this.bindTrigger(this.oldContainer);
    this.bindTrigger(this.newContainer);
  }
  bindTrigger(container) {
    const btn = container.querySelector('.card__click .plus');
    const items = container.querySelectorAll(this.itemsSelector);
    let activeIndex = 0;
    btn.addEventListener('click', () => {
      if (activeIndex !== items.length - 2) {
        items[activeIndex++].style.display = '';
      } else {
        items[activeIndex++].style.display = '';
        items[items.length - 1].remove();
      }
    });
  }
  init() {
    this.hideItems(this.oldContainer);
    this.hideItems(this.newContainer);
    this.bindTriggers();
  }
}

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormModule; });
/* harmony import */ var _services_dataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/dataService */ "./src/js/services/dataService.js");

class FormModule {
  constructor() {
    this.forms = document.querySelectorAll('form');
    this.message = {
      pending: 'Loading...',
      success: 'Done!',
      failed: 'Oops! Something went wrong. Please, try later'
    };
    this.dataService = new _services_dataService__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  bindSubmits() {
    this.forms.forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(form);
        form.appendChild(this.getMessage(this.message.pending));
        this.dataService.postData('./assets/question.php', formData).then(data => {
          console.log(data);
        });
        setTimeout(() => {
          form.querySelector('.message').remove();
          form.appendChild(this.getMessage(this.message.success));
          setTimeout(() => {
            form.querySelector('.message').remove();
          }, 1500);
        }, 1500);
      });
    });
  }
  getMessage(msg) {
    const div = document.createElement('div');
    div.classList.add('message', `message__${msg}`);
    div.style.cssText = `
            text-align: center;
            color: #fff;
        `;
    div.innerHTML = `
            <span>
                ${msg}
            </span>
        `;
    return div;
  }
  init() {
    this.bindSubmits();
  }
}

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
    this.slides.forEach(slide => {
      slide.classList.remove(this.activeClass);
    });
    this.slides[0].classList.add(this.activeClass);
  }
  bindTriggers() {
    this.next.addEventListener('click', () => this.nextSlide());
    this.prev.addEventListener('click', () => {
      let active = this.slides[this.slides.length - 1];
      this.container.insertBefore(active, this.slides[0]);
      this.decorizeSlide();
    });
  }
  nextSlide() {
    this.container.appendChild(this.slides[0]);
    this.decorizeSlide();
  }
  init() {
    this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;
    this.decorizeSlide();
    this.bindTriggers();
    if (this.autoplay) {
      setInterval(() => this.nextSlide(), 5000);
    }
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
    activeClass,
    animate,
    autoplay
  } = {}) {
    this.container = document.querySelector(container);
    this._slides = this.container.children;
    this.btns = document.querySelectorAll(btns);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 4;
  }
  get slides() {
    return Array.from(this._slides).filter(slide => slide.type !== 'button');
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

/***/ }),

/***/ "./src/js/services/dataService.js":
/*!****************************************!*\
  !*** ./src/js/services/dataService.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataService; });
class DataService {
  constructor() {}
  async postData(url, body) {
    return await fetch(url, {
      method: 'POST',
      body: body
    });
  }
  async getData(url) {
    const res = await fetch(url);
    return await res.json();
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map