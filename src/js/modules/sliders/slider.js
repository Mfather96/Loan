export default class Slider {
    constructor({
        container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass,
        animate,
        autoplay
        } = {})
    {
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
