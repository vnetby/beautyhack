import { preventPropagation } from './preventPropagation.js';


export const subscribeModal = () => {
    $('.subscribe-link').fancybox({
        touch: false,
        afterLoad: () => {
            preventPropagation();
        },
        beforeClose: () => {
            // slider.reset();
        }
    });
}


