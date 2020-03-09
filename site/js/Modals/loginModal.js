import { preventPropagation } from './preventPropagation.js';
import { NavSlider } from '../NavSlider.js';
import { DOM } from '../DOM/index.js';

const dom = new DOM;


let slider;

export const loginModal = () => {
  $('.profile-link').fancybox({
    touch: false,
    afterLoad: (el, el2, el3, el4) => {
      slider = new NavSlider('.login-modal .nav-slider');
      preventPropagation();
    },
    beforeClose: () => {
      slider.reset();
    }
  });
}
