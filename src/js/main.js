import MainSlider from "./modules/sliders/main-slider";
import VideoPlayer from "./modules/videoPlayer";

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new MainSlider({page: '.page', btns: '.next'});
    mainSlider.render();

    // const player = new VideoPlayer('.play', '.overlay');
    // player.init();
})
