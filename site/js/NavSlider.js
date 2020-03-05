import { DOM } from './DOM/index.js';
import { domToArr } from './ie_fix.js';



export class NavSlider extends DOM {

    constructor(selector) {
        super();
        this.getElements(selector);
        this.init();
        this.initResetBtn();
        this.initRecalcOnResize();
    }




    getElements(selector) {
        let slider = document.querySelector(selector);
        let width = slider.offsetWidth;
        let track = slider.querySelector('.nav-slider-track');
        let sliders = domToArr(track.querySelectorAll('.nav-slider-item'));
        let items = {};
        let links = domToArr(track.querySelectorAll('.nav-slider-link'));

        sliders.forEach((slide, i) => {
            let id = slide.getAttribute('id');
            let href = `#${id}`;
            if (!items[href]) {
                items[href] = { i: i, item: slide }
            }
        });

        this.resetBtn = domToArr(slider.querySelectorAll('.nav-slider-reset'));
        this.initial = { i: 0, item: sliders[0] };
        this.width = width;
        this.slider = slider;
        this.track = track;
        this.links = links;
        this.items = items;
    }


    init() {
        this.links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                this.initLink(link);
            });
        });
    }

    initLink(link) {
        let href = link.getAttribute('href');
        this.moveTrack(this.items[href]);
    }


    moveTrack(item) {
        let translate = item.i * this.width;
        this.removeAllCurrent();
        this.addClass(item.item, 'current');
        this.track.setAttribute('style', `transform: translateX(-${translate}px)`);
    }

    removeAllCurrent() {
        for (let key in this.items) {
            let item = this.items[key];
            this.removeClass(item.item, 'current');
        }
    }


    initResetBtn() {
        if (!this.resetBtn.length) return;

        this.resetBtn.forEach(btn => {
            this.on(btn, 'click', (el,e) => {
                e.preventDefault();
                this.reset();
            });
        });
    }


    initRecalcOnResize() {
        window.addEventListener('resize', e => {
            let width = this.slider.offsetWidth;
            if (width !== this.width) this.width = width;
        })
    }

    slideTo(id) {
        if (this.items[`#${id}`]) {
            this.moveTrack(this.items[`#${id}`]);
        }
    }


    reset() {
        this.moveTrack(this.initial);
    }
}
