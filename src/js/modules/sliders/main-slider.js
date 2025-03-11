import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor({container, btns}){
        super({container, btns})
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
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.changeSlide(1);

                if (this.slideIndex === 3) {
                    try {
                        this.showHanson();
                    } catch (e) {}
                }
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
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
