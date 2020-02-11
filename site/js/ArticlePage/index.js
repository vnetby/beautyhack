import {DOM} from '../DOM/index.js';
import {LoadAjaxArticle} from './LoadAjaxArticle.js';

const Promise = require('es6-promise').Promise;
const Sticky = require('sticky-js');

import { dynamicScripts } from '../index.js';


export class ArticlePage extends DOM {


  constructor( container ) {
    super();
    if ( !document.querySelector('.art-page') ) return;

    this.container = container ? document.querySelector(container) : document.querySelector('body');
    this.sticky    = [];

    this.mobile = window.innerWidth < BH.tablet ? true : false;

    this.initSticky();
    this.initAjax();
  }



  initSticky() {
    if ( window.innerWidth < parseInt(BH.tablet) ) {
      this.initMobileSticky();
    } else {
      let sticky = this.findFirst('.socials-sticky', this.container);
      if ( !sticky ) return;
      if ( Object.values(this.sticky).some( item => item.el === sticky ) ) {
        console.log('sticky just enabled');
      }
      this.setStickyMargin( sticky );
      let obj = new Sticky( sticky );
      this.sticky.push( { el: sticky, obj: obj } );
    }
  }


  initMobileSticky () {
    if ( document.readyState === 'complete' ) {
      this.checkStickyMobile();
    } else {
      window.addEventListener('load', e => {
        this.checkStickyMobile();
      });
    }
  }


  checkStickyMobile () {
    let sticky = this.findFirst('.socials-sticky', this.container);
    console.log(sticky);
    let endContainer = this.findFirst('.sticky-end-container', this.container );
    if ( !sticky ) return;
    if ( !endContainer ) return;
    let height = sticky.offsetHeight;
    let start   = sticky.getBoundingClientRect().y + window.scrollY + height;
    let bottom  = endContainer.getBoundingClientRect().y - window.innerHeight ;
    // endContainer.style.height = height + 'px';

    let sets = {
      sticky      : sticky,
      endContainer: endContainer,
      height      : height,
      start       : start,
      bottom      : bottom,
      isInEnd     : false,
      isFixed    : false
    };

    console.log( sets );

    this.stickyMobile( sets );

    window.addEventListener('scroll', e => {
      this.stickyMobile( sets );
    });
  }


  stickyMobile( { sticky, endContainer, isInEnd, isFixed, start, bottom, height } ) {
    start   = sticky.parentNode.getBoundingClientRect().y + window.scrollY - window.innerHeight + height;
    bottom  = endContainer.getBoundingClientRect().y - window.innerHeight ;

    let pos = window.scrollY;
    if ( pos > start  && bottom >= 0 ) {
      if ( !isFixed ) {
        this.addClass(sticky, 'is-fixed');
        this.removeClass(sticky, 'is-in-end');
        isFixed = true;
        isInEnd = false;
      }
    } else {
      this.removeClass(sticky, 'is-fixed');
      isFixed = false;
      if ( bottom < 0 ) {
        if ( !isInEnd ) {
          this.addClass(sticky, 'is-in-end');
          isInEnd = true;
        }
      }
    }
  }




  setStickyMargin( sticky ) {
    let margin = this.calcStickyMargin( sticky );
    sticky.setAttribute('data-margin-top', margin );
  }



  calcStickyMargin( sticky ) {
    let itemHeight = sticky.offsetHeight;
    let windowHeight = window.innerHeight;
    if ( !this.mobile ) {
      itemHeight   = itemHeight / 2;
      windowHeight = windowHeight / 2;
    }
    return windowHeight - itemHeight;
  }




  initAjax() {
    this.ajaxLoad = new LoadAjaxArticle({
      margin       : '250vh',
      urlMargin    : '50vh',
      selector     : '.art-page',
      ajaxContainer: '#artAjaxContainer',
      scrollTo     : false,
      replaceUrl   : true,
      pushHistory  : false,
      loadTop      : true,
      preloader    : true,
      preloadClass : 'load-art-preloader preloader',
      headers      : { ajaxLoadArt: window.location.href },
      preloadUrl   : back_dates.SRC + 'img/ajax-load.gif',
      beforeLoad: () => {
        console.log('start request');
      },
      afterLoad: ( content ) => {
        return new Promise( (resolve, reject) => {
          this.container = content;
          this.initDinamicScripts()
          .then ( () => {
            console.log('end request');
            resolve();
          });
        });
      }
    });
  }


  initDinamicScripts () {
    return new Promise( (resolve, reject) => {
      this.initSticky();
      dynamicScripts( this.container );
      window.Sharer.init( this.container );
      setTimeout( () => {
        resolve();
      }, 0);
    });
  }



}
