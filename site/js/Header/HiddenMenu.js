import { DOM } from '../DOM/index.js';

export class HiddenMenu extends DOM {

  constructor({hiddenEvent, currentMarkup}) {
    super();
    this.getElements();
    this.hiddenEvent = hiddenEvent;
    this.state = {
      'visibleMenu': false
    }
    this.initHiddenMenu();
    this.stopPropagationClick();
  }



  getElements() {
    this.el              = {};
    this.el.btn          = this.find('#openHiddenMenuBtn');
    this.el.hiddenMenu   = this.find('#hiddenMenu');
    this.el.navContainer = this.find('#navContainer');
    this.el.mainContent  = this.find('#mainContent');
    this.el.overlay      = this.create('div', 'mobile-menu-overlay');
    this.el.main         = this.findFirst('#main');
  }




  initHiddenMenu() {
    this.el.btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      this.switchHiddenMenu();
    });
  }

  switchHiddenMenu( compare = false ) {
    let check;
    if ( !compare ) {
      if ( !this.state.visibleMenu ) {
        check = true;
      } else {
        check = false;
      }
    } else {
      if ( !this.state.visibleMenu ) {
        check = false;
      } else {
        check = true;
      }
    }
    if ( check ) {
      this.showHiddenMenu();
    } else {
      this.closeHiddenMenu();
    }
  }



  showHiddenMenu() {
    this.dispath( this.el.hiddenMenu, this.hiddenEvent );

    this.addClass( this.el.btn, 'is-active' );
    this.addClass(this.el.hiddenMenu, 'visible');

    if ( this.currentMarkup === 'desktop' ) {
      this.showHiddenMenuDesktop();
    } else {
      this.showHiddenMenuMobile();
    }
    this.state.visibleMenu = true;
  }

  showHiddenMenuDesktop () {
    this.slideDown(this.el.hiddenMenu);
  }

  showHiddenMenuMobile () {
    document.body.style.overflow = 'hidden';
    this.addOverlay();
  }

  addOverlay () {
    if ( !this.el.mainContent.querySelector('.mobile-menu-overlay') ) {
      this.el.main.appendChild( this.el.overlay );
    }
  }

  removeOverlay() {
    let overlay = this.el.main.querySelector('.mobile-menu-overlay');
    if ( overlay ) {
      overlay.parentNode.removeChild(overlay);
    }
  }



  closeHiddenMenu() {
    this.removeClass(this.el.btn, 'is-active');
    this.removeClass(this.el.hiddenMenu, 'visible');
    if ( this.currentMarkup === 'desktop' ) {
      this.closeHiddenMenuDesktop();
    } else {
      this.closeHiddenMenuMobile();
    }
    this.state.visibleMenu = false;
  }

  closeHiddenMenuDesktop () {
    this.slideUp(this.el.hiddenMenu);
  }

  closeHiddenMenuMobile () {
    document.body.style.overflow = 'auto';
    this.removeOverlay();
  }


  stopPropagationClick () {
    this.on(this.el.hiddenMenu, 'click', (el, e ) => e.stopPropagation() );
  }



  onWindowResize  ( currentMarkup ) {
    this.currentMarkup = currentMarkup;

    if ( this.currentMarkup !== this.prevMarkup && this.prevMarkup ) {
      if ( this.currentMarkup === 'desktop' ) {
        this.removeOverlay();
      } else {
        this.el.hiddenMenu.removeAttribute('style');
      }
      this.switchHiddenMenu( true );
      this.prevMarkup = this.currentMarkup;
    } else {
      this.prevMarkup = this.currentMarkup;
    }
  }


}
