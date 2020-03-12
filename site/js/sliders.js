import { DOM } from './DOM/index.js';

const dom = new DOM;


const findSliders = (container, selector) => {
  let wrap = dom.getContainer(container);
  let sliders = dom.findAll(selector, wrap);
  if (!sliders || !sliders.length) return false;
  return sliders;
}



export const initSliders = container => {
  bigSlider(container);
  underBigSlider(container);
  testSlider(container);
  artBigSlider(container);
  artFullSliderNav(container);
}


export const bigSlider = (container) => {
  let sliders = findSliders(container, '.big-slider');
  if (!sliders) return;



  sliders.forEach(slider => {
    let arrows = slider.parentNode.querySelector('.slick-arrows-container');
    let dots = slider.parentNode.querySelector('.slick-dots-container');

    let items = dom.findAll('.slick-item', slider);
    let sets = {
      appendArrows: arrows,
      appendDots: dots,
      dots: true
    };

    if (items && items.length) {
      if (items.length <= 8) {
        sets.prevArrow = '<button class="slick-arrow prev-arrow ico"></button>';
        sets.nextArrow = '<button class="slick-arrow next-arrow ico"></button>';
      } else {
        sets.arrows = false;
      }
    }

    $(slider).slick(sets);
  });

}




export const underBigSlider = (container) => {
  let sliders = findSliders(container, '.under-big-slider');
  if (!sliders) return;
  sliders.forEach(slider => {
    $(slider).slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: BH.tablet,
          settings: {
            slidesToShow: 2,
            centerMode: true
          }
        },
        {
          breakpoint: BH.mobile,
          settings: {
            slidesToShow: 1,
            centerMode: true
          }
        }
      ]
    });
  });
}




export const testSlider = (container) => {
  let sliders = findSliders(container, '#testResult');
  if (!sliders) return;
  sliders.forEach(slider => {
    $(slider).slick({
      dots: true,
      arrows: false
    });
  });
}



export const artBigSlider = container => {
  let sliders = findSliders(container, '.art-big-slider');
  if (!sliders) return;
  sliders.forEach(slider => {
    $(slider).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      infinite: true,
      prevArrow: '<button class="slick-arrow prev-arrow"></button>',
      nextArrow: '<button class="slick-arrow next-arrow"></button>',
      dots: true
    });
  });
}



export const artFullSliderNav = container => {
  let sliders = findSliders(container, '.art-full-slider-nav');
  if (!sliders) return;
  sliders.forEach(slider => {
    let preview = slider.querySelector('.slider-preview');
    let nav = slider.querySelector('.slider-nav');

    if (nav) {
      $(nav).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: $(preview),
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        vertical: true,
        prevArrow: '<button class="slick-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-arrow next-arrow"></button>',
        draggable: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              vertical: false,
              draggable: true
            }
          }
        ]
      });
    }

    if (preview) {
      $(preview).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: $(nav)
      });
    }
  });
}
