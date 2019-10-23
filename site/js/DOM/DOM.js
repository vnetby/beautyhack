import { createNewEvent } from '../ie_fix.js';

export class DOM {


  constructor () {
    this.body = document.body;
    this.preloader = this.createPreloader();
  }


  removeClass(el, className ) {
    let allClassNames = this.getClassName( className );
    allClassNames.forEach ( name => {
      if ( el.classList.contains(name)) el.classList.remove(name);
    });
  }



  addClass (el,className ) {
    let allClassNames = this.getClassName( className );
    allClassNames.forEach ( name => {
      if ( !el.classList.contains(name)) el.classList.add(name);
    });
  }



  getClassName ( className ) {
    let arr = [];
    let ex = className.split(' ');
    ex.forEach ( item => {
      arr.push(item.trim());
    });
    return arr;
  }



  switchClass(el, className) {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  }




  create(el, className = '') {
    let div = document.createElement(el);
    div.className = className;
    return div;
  }



  slideDown (el, display = 'block', transition = 300 ) {
    el.setAttribute('style','opacity: 0; position: absolute; display: block');
    setTimeout(() => {
      let height = el.offsetHeight + 'px';
      el.setAttribute('style','opacity: 0; height: 0; display: '+display+'; transition: .3s;');
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.height = height;
        setTimeout( () => {
          el.style.height = 'auto';
        }, transition);
      }, 0);
    }, 0);
    return this;
  }



  slideUp (el, display = 'none', transition = 300 ) {
    el.style.height = el.offsetHeight + 'px';
    setTimeout( () => {
      el.style.opacity = '0';
      el.style.height = '0px';
      setTimeout(() => {
        el.style.display = display;
        el.style.height = 'auto';
      }, 300);
    });
    return this;
  }




  insertAfter (el, after) {
    after.parentNode.insertBefore(el, after.nextSibling);
    return this;
  }



  remove(el) {
    if ( el.parentNode ) {
      el.parentNode.removeChild(el);
    }
  }


  append(el, parent) {
    parent.appendChild(el);
  }



  find( selector, where ) {
    let searchIn = this.__getWhere(where);
    let all = searchIn.querySelectorAll(selector);
    if ( !all.length ) return false;
    if ( all.length === 1 ) return all[0];
    let arr = [];
    for ( let i = 0; i < all.length; i++ ) {
      arr.push ( all[i] );
    }
    return arr;
  }



  findAll ( selector, where ) {
    let searchIn = this.__getWhere(where);
    let all = searchIn.querySelectorAll(selector);
    let arr = [];
    for ( let i = 0; i < all.length; i++ ) {
      arr.push ( all[i] );
    }
    return arr;
  }



  findFirst (selector, where) {
    let searchIn = this.__getWhere(where);
    let obj = searchIn.querySelector(selector);
    // this.extendDomObject( obj );
    return obj
  }


  extendDomObject ( obj ) {
    // if ( obj ) {
    //   obj.__proto__.findFirst = this.__findFirst.bind(this, obj);
    //   obj.__proto__.findAll   = this.__findAll.bind(this, obj);
    //   obj.__proto__.css       = this.__css.bind(this, obj);
    // }
  }

  __findFirst ( obj, selector ) {
    return this.findFirst(selector, obj);
  }
  __findAll ( obj, selector ) {
    return this.findAll(selector, obj);
  }
  __css( obj, cssValues ) {
    return this.css( obj, cssValues );
  }




  css (el, obj = {}) {
    let keys   = Object.keys(obj);
    let values = Object.values(obj);

    let str = '';

    keys.forEach ( (key, i) => {
      str += `${key}: ${values[i]}; `;
    });

    el.setAttribute('style', str);
    return el;
  }



  getContainer ( container ) {
    let wrap = false;
    if ( container ) {
      if ( typeof container === 'object' ) {
        if ( container.tagName ) {
          wrap = container;
        }
      }
    }
    if ( wrap ) return wrap;
    try {
      wrap = this.findFirst( container );
    } catch ( e ) {
      console.error ( e );
    }
    return wrap ? wrap : this.body;
  }




  __getWhere (where) {
    let searchIn;
    if (where) {
      if (typeof where === 'string') {
        searchIn = document.querySelector(where);
      } else {
        searchIn = where;
      }
    }
    return searchIn ? searchIn : document;
  }




  on (el, e, callback) {
    el.addEventListener(e, callback.bind(this, el));
  }



  dispath(el, e) {
    let ev = createNewEvent(e);
    // let ev = new Event(e);
    el.dispatchEvent(ev);
    return this;
  }



  addPreloader ( container ) {
    let preloader;
    if ( !this.findFirst( '.ajax-preloader', container ) ) {
      this.addClass(this.preloader, 'visible');
      container.appendChild( this.preloader );
    }
  }


  createPreloader () {
    let preloader = this.create('div', 'ajax-preloader');
    let img = new Image;
    img.src = back_dates.SRC + 'img/ajax-load.gif';
    preloader.appendChild( img );
    return preloader;
  }


  removePreloader ( container ) {
    if ( !this.findFirst('.ajax-preloader', container ) ) return;
    this.removeClass(this.preloader, 'visible');
    setTimeout( () => {
      if ( this.preloader.parentNode ) {
        this.preloader.parentNode.removeChild( this.preloader );
      }
    }, 300);
  }




  strToDom ( str ) {
    let div = document.createElement('div');
    div.innerHTML = str;
    return div.firstChild;
  }






  ajax ({url, data, preloader}) {
    let type = data ? 'post' : 'get';
    let http = new XMLHttpRequest;

    http.open( type, url );

    let requestData;

    if ( typeof data === 'object' ) {
      if ( data instanceof FormData ) {
        requestData = data;
      } else {
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        requestData = this.createRequestDataString( data );
      }
    }

    http.send( requestData );
    if ( preloader ) {
      this.addPreloader ( preloader );
    }
    return new Promise( (resolve, reject) => {
      http.onreadystatechange = () => {
        if ( http.readyState === 4 && http.status === 200 ) {
          if ( preloader ) {
            this.removePreloader ( preloader );
          }
          resolve( http.responseText );
        }
      }
    })
  }


  createRequestDataString ( data ) {
    if ( !data ) return null;
    let str = '';
    Object.keys(data).forEach( (key, i) => {
      let val = data[key];
      if ( !i ) {
        str += `${key}=${val}`;
      } else {
        str += `&${key}=${val}`;
      }
    });
    return str;
  }





}
