import { DOM } from '../DOM/index.js';

export class Search extends DOM {
  constructor({ hiddenEvent, currentMarkup }) {
    super();
    if (!this.getElements()) return;


    this.hiddenEvent = hiddenEvent;
    this.state = {
      visible: false
    }
    this.initSearchBtn();
    this.initCloseSearchBtn();
    this.stopPropagationClick();
  }



  getElements() {
    this.el = {};

    this.el.searchBtn = this.find('#openSearchBtn');
    if (!this.el.searchBtn) return false;

    this.el.searchContainer = this.find('#searchContainer');
    if (!this.el.searchContainer) return false;

    this.el.closeSearchBtn = this.el.searchContainer.querySelector('#closeSearchBtn');
    if (!this.el.closeSearchBtn) return false;

    this.el.main = this.find('#main');
    if (!this.el.main) return false;

    this.el.searchInput = this.el.searchContainer.querySelector('#searchInput');
    if (!this.el.searchInput) return false;

    this.el.searchResContainer = this.find('#searchResContainer');
    if (!this.el.searchResContainer) return false;

    this.el.navContainer = this.find('#navContainer');
    if (!this.el.navContainer) return false;

    return true;
  }



  initSearchBtn() {
    if (!this.el.searchBtn) return;
    this.on(this.el.searchBtn, 'click', (el, e) => {
      e.preventDefault();
      e.stopPropagation();
      this.switchSearchContainer();
    });
  }


  initCloseSearchBtn() {
    if (!this.el.closeSearchBtn) return;
    this.on(this.el.closeSearchBtn, 'click', (el, e) => {
      e.preventDefault();
      this.closeSearchContainer();
    });
  }


  switchSearchContainer(compare = false) {

    let check;
    if (!compare) {
      if (!this.state.visible) {
        check = true;
      } else {
        check = false;
      }
    } else {
      if (!this.state.visible) {
        check = false;
      } else {
        check = true;
      }
    }
    if (check) {
      this.openSearchContainer();
    } else {
      this.closeSearchContainer();
    }
  }


  openSearchContainer() {
    this.addClass(this.el.searchBtn, 'active');
    this.addClass(this.el.searchContainer, 'visible');
    this.dispath(this.el.searchContainer, this.hiddenEvent);
    if (this.currentMarkup === 'mobile') {
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


  closeSearchContainer() {
    this.removeClass(this.el.searchBtn, 'active');
    this.removeClass(this.el.searchContainer, 'visible');
    if (this.currentMarkup === 'mobile') {
      this.closeSearchContainerMobile();
    } else {
      this.closeSearchContainerDesktop();
    }
    if (this.state) {
      this.state.visible = false;
    }
  }

  closeSearchContainerMobile() {
    document.body.style.overflow = 'auto';
    if (this.el.searchResContainer) {
      this.el.searchResContainer.style.display = 'none';
    }
  }

  closeSearchContainerDesktop() {
    this.slideUp(this.el.searchContainer);
  }


  stopPropagationClick() {
    if (!this.el.searchContainer) return;
    this.on(this.el.searchContainer, 'click', (el, e) => e.stopPropagation());
  }



  onWindowResize(currentMarkup) {
    this.currentMarkup = currentMarkup;
    if (!this.el.searchResContainer || !this.el.searchResContainer) return;
    if (this.prevMarkup && this.prevMarkup !== this.currentMarkup) {
      if (this.currentMarkup === 'mobile') {
        this.el.searchContainer.removeAttribute('style');
      } else {
        document.body.style.overflow = 'auto';
        this.el.searchResContainer.style.display = 'block';
      }
      this.switchSearchContainer(true);

      this.prevMarkup = this.currentMarkup;
    } else {
      this.prevMarkup = this.currentMarkup;
    }
  }

}
