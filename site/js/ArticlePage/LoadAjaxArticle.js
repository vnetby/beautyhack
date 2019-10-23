import {DOM} from '../DOM/index.js';
const Promise = require('es6-promise').Promise;

export class LoadAjaxArticle extends DOM {

  constructor(sets) {

    super ();

    this.selector      = sets.selector || '.art-page';
    this.ajaxContainer = sets.ajaxContainer ? this.findFirst(sets.ajaxContainer) : this.findFirst('#artAjaxContainer');

    if ( !this.ajaxContainer ) return;

    this.replaceUrl   = sets.replaceUrl;
    this.beforeLoad   = sets.beforeLoad;
    this.afterLoad    = sets.afterLoad;
    this.setsMargin   = sets.margin;
    this.setsHeaders  = sets.headers || { ajaxLoadArt: window.location.href };
    this.margin       = this.getMargin(this.setsMargin);
    this.originUrl    = window.location.href;
    this.originTitle  = document.title;
    this.scrollTo     = sets.scrollTo;
    this.pushHistory  = sets.pushHistory;
    this.urlMargin    = this.getMargin(sets.urlMargin);
    this.preloader    = sets.preloader;
    this.preloadClass = sets.preloadClass || 'load-art-preloader';
    this.preloadUrl   = sets.preloadUrl || back_dates.SRC + 'img/ajax-load.gif';
    console.log( this.preloadUrl );
    this.current = 0;
    this.last    = -1;

    this.history = [];

    this.http = new XMLHttpRequest;

    this.onScrollEvent = this.onScroll.bind(this);

    this.containers = [];

    if ( !this.pushContainer() ) return false;

    this.init();

    this.setHistoryState();

    if ( sets.loadTop ) {
      window.onbeforeunload = function () {
        window.scrollTo(0,0);
      }
    }

    if ( this.pushHistory ) {
      this.onPopState();
    }
  }



  onPopState () {
    window.onpopstate = e => {
      if ( e.state && e.state.id ) {
        this.current = e.state.id;
        this.history.splice(this.history.legnth - 1, 1);
        // this.scrollToContainer();
      }
    };
  }


  scrollToContainer() {
    let current = this.containers[this.current];
    if ( !current ) return;
    document.body.scrollTo(0, current.el.getBoundingClientRect().top + window.pageYOffset );
  }


  pushContainer ( container ) {
    container = container ? container : this.ajaxContainer.querySelector( this.selector );

    if ( !container ) return this.throwError(`container does not exist`);

    let link = container.getAttribute('data-next');

    let title = container.getAttribute('data-page-title');

    let url = `${window.location.origin}/${link}`;

    this.containers.push({
      el    : container,
      url   : url,
      title : title
    });
    this.last++;
    return true;
  }



  getMargin ( margin ) {
    if ( !margin ) return 0;
    if ( margin.indexOf('vh') !== -1 ) return this.calcVhMargin(margin);
    return margin;
  }


  calcVhMargin ( margin ) {
    margin      = parseInt(margin);
    let windowHeight = window.innerHeight;
    return Math.round( ( margin * windowHeight ) / 100);
  }


  init() {
    this.initLoadArt();
    window.addEventListener( 'scroll', this.onScrollEvent );
  }

  onScroll () {
    this.initLoadArt();
  }


  initLoadArt() {

    let scroll   = window.pageYOffset;

    this.checkHistory( scroll );
    this.checkAjax( scroll );
  }



  checkHistory ( scroll ) {
    let currentContainer = this.containers[this.current].el;
    let urlTop    = currentContainer.getBoundingClientRect().top + scroll - this.urlMargin;
    let urlBottom = urlTop + currentContainer.offsetHeight;
    if ( scroll >= urlTop - 100 && scroll < urlBottom + 100 ) {
      return;
    }
    if ( this.changeContainer( scroll, urlTop, urlBottom ) ) {
      this.setHistoryState();
    }
  }



  checkAjax ( scroll ) {
    let lastContainer = this.containers[this.last].el;
    let ajaxTop       = lastContainer.getBoundingClientRect().top + scroll - this.margin;
    let ajaxBottom    = ajaxTop + lastContainer.offsetHeight;

    if ( scroll >= ajaxBottom && !this.load && this.containers[this.last].url ) {
      this.loadArt ();
    }
  }




  changeContainer ( scroll, top, bottom ) {

    if ( scroll >= bottom + 100 ) {
      return this.setNextContainer();
    }
    if ( scroll < top - 100 ) {
      return this.setPrevContainer();
    }
  }

  setNextContainer () {
    let next = this.current + 1;
    if ( !this.containers[next] ) return false;
    this.current = next;
    return true;
  }

  setPrevContainer () {
    let prev = this.current - 1;
    if ( prev < 0 ) return false;
    this.current = prev;
    return true;
  }


  setHistoryState () {

    let lastIndex = this.history.length - 1;
    lastIndex = lastIndex > -1 ? lastIndex : 0;

    let lastHistory = this.history[lastIndex];
    if ( lastHistory && lastHistory.id === this.current ) return;


    if ( !this.replaceUrl ) return;

    let prev  = this.current - 1;
    let title = this.containers[this.current].title;
    let newUrl;
    if ( prev < 0 ) {
      newUrl = this.originUrl;
      title  = this.originTitle;
    } else {
      newUrl = this.containers[prev].url;
      title  = this.containers[this.current].title;
    }

    let obj = { 'url' : newUrl, 'title' : title, 'id' : this.current };
    if(this.pushHistory) {
      this.history.push( obj );
      window.history.pushState( obj, '' , newUrl );
    } else {
      window.history.replaceState( obj, '' , newUrl );
    }
    document.title = title;
  }



  loadArt ( container ) {
    if ( !this.containers[this.current].el.dataset.next ) return;
    this.load = true;
    if ( this.preloader ) this.addPreloader();
    if ( this.beforeLoad ) this.beforeLoad();
    this.sendRequest()
    .then( response => {

      let newContent = this.getResponseContainer( response );

      if ( !newContent ) return this.throwError(`can't find element ${this.selector} in response text`);

      if ( this.hasPreload ) this.removePreloader();

      this.appendContainer( newContent );

      if ( this.afterLoad ) {

        this.afterLoad( newContent )
        .then( () => {
          this.displayResponseContainer( newContent );
        });

      } else {
        this.displayResponseContainer( newContent );
      }

    });
  }


  displayResponseContainer ( newContent ) {
    this.pushContainer( newContent );
    if ( this.scrollTo ) {
      document.body.scrollTo(0, this.containers[this.current].el.getBoundingClientRect().top + window.pageYOffset);
    }
    this.load = false;
  }


  addPreloader () {
    this.preload = this.preload ? this.preload : this.createPreload();
    if ( !this.hasPreload ) {
      this.containers[this.last].el.parentNode.appendChild(this.preload);
      this.hasPreload = true;
    }
  }


  removePreloader () {
    this.preload.parentNode.removeChild(this.preload);
    this.hasPreload = false;
  }

  createPreload () {
    let div = this.create('div', this.preloadClass);
    let img = new Image;
    img.src = this.preloadUrl;
    div.appendChild(img);
    return div;
  }



  sendRequest () {
    this.http.open('GET', this.containers[this.last].url );
    this.setHeaders();
    this.http.send();
    return new Promise(this.getLoadArtResponse.bind(this));
  }


  getLoadArtResponse ( resolve, reject ) {
    this.http.onreadystatechange = () => {
      if ( this.http.status === 200 && this.http.readyState === 4 ) {
        resolve(this.http.responseText);
      }
    }
  }

  setHeaders() {
    for ( let key in this.setsHeaders ) {
      this.http.setRequestHeader(key, this.setsHeaders[key]);
    }
  }


  getResponseContainer ( response ) {
    let div = this.create('div');
    div.innerHTML = response;
    return div.querySelector( this.selector );
  }


  appendContainer ( newContent ) {
    this.ajaxContainer.appendChild( newContent );
  }



  throwError( msg ) {
    console.error( msg );
    return false;
  }

}
