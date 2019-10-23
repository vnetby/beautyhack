import { DOM } from '../DOM/index.js';

export class Search extends DOM {
  constructor({hiddenEvent, currentMarkup}) {
    super();
    this.getElements();
    this.hiddenEvent = hiddenEvent;
    this.state = {
      visible : false
    }
    this.initSearchBtn();
    this.initCloseSearchBtn();
    this.stopPropagationClick();
  }



  getElements() {
    this.el = {};
    this.el.searchBtn = this.find('#openSearchBtn');
    this.el.searchContainer = this.find('#searchContainer');
    this.el.closeSearchBtn = this.el.searchContainer.querySelector('#closeSearchBtn');
    this.el.main = this.find('#main');
    this.el.searchInput = this.el.searchContainer.querySelector('#searchInput');
    this.el.searchResContainer = this.find('#searchResContainer');
    this.el.navContainer = this.find('#navContainer');
  }



  initSearchBtn () {
    this.on(this.el.searchBtn, 'click', (el, e) => {
      e.preventDefault();
      e.stopPropagation();
      this.switchSearchContainer();
    });
  }


  initCloseSearchBtn() {
    this.on(this.el.closeSearchBtn, 'click', (el, e) => {
      e.preventDefault();
      this.closeSearchContainer();
    });
  }


  switchSearchContainer ( compare = false ) {
    let check;
    if ( !compare ) {
      if ( !this.state.visible ) {
        check = true;
      } else {
        check = false;
      }
    } else {
      if ( !this.state.visible ) {
        check = false;
      } else {
        check = true;
      }
    }
    if ( check ) {
      this.openSearchContainer();
    } else {
      this.closeSearchContainer();
    }
  }


  openSearchContainer() {
    this.addClass(this.el.searchBtn, 'active');
    this.addClass(this.el.searchContainer, 'visible');
    this.dispath(this.el.searchContainer, this.hiddenEvent);
    if ( this.currentMarkup === 'mobile' ) {
      this.openSearchContainerMobile();
    } else {
      this.openSearchContainerDesktop();
    }
    this.state.visible = true;
    this.el.searchInput.focus();
  }

  openSearchContainerMobile() {
    document.body.style.overflow = 'hidden';
    this.el.searchResContainer.style.display = 'block';
  }

  openSearchContainerDesktop() {
    this.slideDown(this.el.searchContainer);
  }


  closeSearchContainer () {
    this.removeClass(this.el.searchBtn, 'active');
    this.removeClass(this.el.searchContainer, 'visible');
    if ( this.currentMarkup === 'mobile' ) {
      this.closeSearchContainerMobile();
    } else {
      this.closeSearchContainerDesktop();
    }
    this.state.visible = false;
  }

  closeSearchContainerMobile() {
    document.body.style.overflow = 'auto';
    this.el.searchResContainer.style.display = 'none';
  }

  closeSearchContainerDesktop() {
    this.slideUp(this.el.searchContainer);
  }


  stopPropagationClick () {
    this.on(this.el.searchContainer, 'click', (el, e ) => e.stopPropagation() );
  }



  onWindowResize(currentMarkup) {
    this.currentMarkup = currentMarkup;
    if ( this.prevMarkup && this.prevMarkup !== this.currentMarkup ) {
      if ( this.currentMarkup === 'mobile' ) {
        this.el.searchContainer.removeAttribute('style');
      } else {
        document.body.style.overflow = 'auto';
        this.el.searchResContainer.style.display = 'block';
      }
      this.switchSearchContainer( true );

      this.prevMarkup = this.currentMarkup;
    } else {
      this.prevMarkup = this.currentMarkup;
    }
  }

}
