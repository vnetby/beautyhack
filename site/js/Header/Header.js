import { loginModal } from '../Modals/index.js';
import { FixedNav } from '../FixedNav.js';


import { DOM } from '../DOM/DOM.js';
import { HiddenMenu } from './HiddenMenu.js';
import { Search } from './Search.js';


export class Header extends DOM {
  constructor(sets) {
    super();
    this.hiddenEvent = 'closeHiddenElemets';

    this.mobilePoint = BH[BH.headerBreakpoint] || BH.mobile;

    this.currentMarkup = 'desktop';

    this.getElements();

    this.addHeaderMinHeight();

    this.fixedNav = new FixedNav({
      nav: '#fixedOnScrollMenu',
      replace: false,
      fixedClass: 'is-fixed'
    });



    this.hiddenMenu = new HiddenMenu({ hiddenEvent: this.hiddenEvent, currentMarkup: this.currentMarkup });
    this.search = new Search({ hiddenEvent: this.hiddenEvent, currentMarkup: this.currentMarkup });

    this.initHideOnEvent();

    this.initHideOnEscPress();

    this.initHideOnOutClick();

    this.initMobileMarkup();

    this.initOpenTagsMenu();

    this.initCloseTagsMenu();
  }



  getElements() {
    this.el = {};

    this.el.header = this.findFirst('.header');

    this.el.navContainer = this.findFirst('#navContainer');

    this.el.hiddenMenuContainer = this.findFirst('#hiddenMenuContainer');

    this.el.topMenu = this.findFirst('#topMenu');

    this.el.tagsMenu = this.findFirst('#tagsMenu');


    this.el.topNavCol = this.findFirst('#topNavCol');

    this.el.logo = this.findFirst('#topLogo');
    this.el.logoCol = this.findFirst('#topLogoCol');

    this.el.searchBtn = this.findFirst('#openSearchBtn');
    this.el.searchCol = this.findFirst('#searchCol');

    this.el.profileControls = this.findFirst('#profileControls');
    this.el.profileCol = this.findFirst('#profileCol');

    this.el.socialLinks = this.findFirst('#socialLinks');
    this.el.socialCol = this.findFirst('#socialCol');

    this.el.openTagsBtns = this.find('.open-tags-btn');
    this.el.closeTagsBtns = this.find('.close-tags-btn');

    this.el.hiddenTopMenuContainer = this.findFirst('#hiddenTopMenuContainer');

    this.el.subscribeContainer = this.findFirst('#subscribeContainer');
  }



  addHeaderMinHeight() {
    let height = this.el.navContainer.offsetHeight + 'px';
    this.el.header.style.minHeight = height;
    window.addEventListener('resize', e => {
      let height = this.el.navContainer.offsetHeight + 'px';
      this.el.header.style.minHeight = height;
    });
  }



  initHideOnEvent() {

    this.on(this.search.el.searchContainer, this.hiddenEvent, () => {
      this.hiddenMenu.closeHiddenMenu();
    });

    this.on(this.hiddenMenu.el.hiddenMenu, this.hiddenEvent, () => {
      this.search.closeSearchContainer();
    });

  }


  closeAllElements() {
    if (this.hiddenMenu.state && this.hiddenMenu.state.visibleMenu) {
      this.hiddenMenu.closeHiddenMenu();
    }
    if (this.search.state && this.search.state.visible) {
      this.search.closeSearchContainer();
    }

  }

  initHideOnEscPress() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.closeAllElements();
      }
    });
  }


  initHideOnOutClick() {
    document.body.addEventListener('click', e => {
      this.closeAllElements();
    });
  }


  initMobileMarkup() {
    if (window.innerWidth <= this.mobilePoint) {
      this.addMobileMarkup();
    }
    this.hiddenMenu.onWindowResize(this.currentMarkup);
    this.search.onWindowResize(this.currentMarkup);
    window.addEventListener('resize', e => {
      if (window.innerWidth <= this.mobilePoint) {
        this.addMobileMarkup();
      } else {
        this.addDesktopMarkup();
      }
      this.hiddenMenu.onWindowResize(this.currentMarkup);
      this.search.onWindowResize(this.currentMarkup);
    });
  }


  addMobileMarkup() {
    if (this.currentMarkup === 'desktop') {
      this.append(this.el.logo, this.el.topNavCol);
      if (this.el.subscribeContainer) {
        this.el.subscribeContainer.parentNode.insertBefore(this.el.topMenu, this.el.subscribeContainer);
      }
      if (this.el.subscribeContainer) {
        this.el.subscribeContainer.parentNode.insertBefore(this.el.socialLinks, this.el.subscribeContainer)
      }
      this.currentMarkup = 'mobile';
    }
  }


  addDesktopMarkup() {
    if (this.currentMarkup === 'mobile') {
      this.append(this.el.logo, this.el.logoCol);
      this.append(this.el.topMenu, this.el.topNavCol);
      this.append(this.el.socialLinks, this.el.socialCol);
      this.currentMarkup = 'desktop';
    }
  }


  initCloseTagsMenu() {
    this.el.closeTagsBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        if (this.currentMarkup === 'mobile') {
          this.closeTagsMenu();
        }
      })
    });
  }



  initOpenTagsMenu() {
    this.el.openTagsBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        if (this.currentMarkup === 'mobile') {
          this.openTagsMenu();
        }
      })
    });
  }


  closeTagsMenu() {
    this.removeClass(this.el.tagsMenu, 'visible-menu');
    this.removeClass(this.el.hiddenTopMenuContainer, 'hidden-menu');
    this.removeClass(this.el.socialLinks, 'hidden-menu');
  }


  openTagsMenu() {
    this.addClass(this.el.tagsMenu, 'visible-menu');
    this.addClass(this.el.hiddenTopMenuContainer, 'hidden-menu');
    this.addClass(this.el.socialLinks, 'hidden-menu');
  }

}
