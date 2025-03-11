import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, prev, next, activeClass, animate, autoplay) {
        super(container, prev, next, activeClass, animate, autoplay);
    }

    decorizeSlide() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
        })

        this.slides[0].classList.add(this.activeClass);
    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide())

        this.prev.addEventListener('click', () => {
            let active = this.slides[this.slides.length - 1];
            this.container.insertBefore(active, this.slides[0]);
            this.decorizeSlide();
        })
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
            setInterval(() => this.nextSlide(), 5000)
        }
    }
}
