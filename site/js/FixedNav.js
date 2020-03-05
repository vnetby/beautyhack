import {DOM} from './DOM/index.js';




export class FixedNav extends DOM {


  constructor (sets) {
    super();
    this.nav = sets.nav ? this.findFirst ( sets.nav ) : this.findFirst('#fixedOnScrollMenu');

    if ( !this.nav ) return false;

    this.margin       = sets.margin || 0;
    this.replace      = sets.replace;
    this.replaceClass = sets.replaceClass || 'replaced-nav';
    this.fixedClass   = sets.fixedClass;

    this.onResizeEvent = this.onResize.bind(this);
    this.onScrollEvent = this.onScroll.bind(this);

    this.getSizes();
    this.init();
  }


  getSizes () {
    this.height = this.nav.offsetHeight;
    this.width  = this.nav.offsetWidth;
    this.top    = this.nav.getBoundingClientRect().top + window.pageYOffset;
    this.left   = this.nav.getBoundingClientRect().left;
  }




  init () {
    this.initSwitchNav();
    window.addEventListener( 'scroll', this.onScrollEvent );
    window.addEventListener( 'resize', this.onResizeEvent );
  }


  onResize () {
    if ( this.fixed ) {
      this.unfixNavBar();
    }
    this.getSizes();
    this.initSwitchNav();
  }

  onScroll () {
    this.initSwitchNav();
  }



  initSwitchNav () {
    if ( window.pageYOffset >= this.top - this.margin && !this.fixed ) {
      this.fixNavBar();
      return;
    }
    if ( window.pageYOffset < this.top - this.margin && this.fixed ) {
      this.unfixNavBar();
      return;
    }
  }



  fixNavBar () {
    this.fixed = true;
    if ( this.replace ) this.replaceNav();
    this.css(this.nav, {
      'position' : 'fixed',
      'left'     : `${this.left}px`,
      'top'      : `${this.margin}px`,
      'width'    : `${this.width}px`
    });
    if ( this.fixedClass ) this.addClass(this.nav, this.fixedClass );
  }


  unfixNavBar () {
    this.fixed = false;
    if ( this.replace ) this.removeReplaceNav();
    this.nav.removeAttribute('style');
    if ( this.fixedClass ) this.removeClass(this.nav, this.fixedClass );
  }


  replaceNav () {
    if ( this.replaceEl ) return;
    this.replaceEl = this.createReplaceItem();
    this.nav.parentNode.insertBefore ( this.replaceEl, this.nav );
  }

  removeReplaceNav () {
    if ( !this.replaceEl ) return;
    this.replaceEl.parentNode.removeChild( this.replaceEl );
    this.replaceEl = false;
  }


  createReplaceItem () {
    let div = this.create('div', this.replaceClass);
    this.css(div,{
      'height': this.height,
      'width' : this.width
    });
    return div;
  }



  destroy () {
    if ( this.fixed ) this.unfixNavBar();
    window.removeEventListener('scroll', this.onScrollEvent );
    window.removeEventListener('resize', this.onResizeEvent );
  }


}
