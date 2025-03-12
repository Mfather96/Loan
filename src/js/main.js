import MainSlider from "./modules/sliders/main-slider";
import MiniSlider from "./modules/sliders/mini-slider";
import VideoPlayer from "./modules/videoPlayer";
import Difference from "./modules/difference";
import FormModule from "./modules/form";

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new MainSlider({
        container: '.page',
        btns: '.next'
    });
    mainSlider.render();

    const showUpMiniSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true,
    });
    showUpMiniSlider.init();

    const modulesMiniSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        autoplay: true,
    });
    modulesMiniSlider.init();

    const feedMiniSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedMiniSlider.init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    new FormModule().init();
    // const player = new VideoPlayer('.play', '.overlay');
    // player.init();
})
