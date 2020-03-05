import {DOM} from './DOM/index.js';



export class AjaxImage extends DOM {

  constructor (container) {
    super();

    this.breakPoints = {
      'lg' : 768,
      'md' : 576,
      'sm' : 0
    }

    this.init( container );
  }


  init( container ) {
    let wrap = document.querySelector('body')
    if ( container ) {
      if ( typeof container === 'object' ) {
        if ( container.tagName ) {
          wrap = container;
        }
      }
      if ( typeof container === 'string' ) {
        wrap = this.findFirst(container);
      }
    }
    this.container = wrap;
    this.getElements();
    this.initLoadImages();
    window.addEventListener('resize', e => {
      this.initLoadImages();
    });
  }

  getElements () {
    this.items = this.findAll('.ajax-image', this.container);
  }


  initLoadImages () {
    this.getBreakpoint();
    if ( !this.change ) return;
    this.change = false;
    this.items.forEach ( item => {
      let src = this.findSrc( item );
      if ( src ) {
        this.loadImage( item, src );
      }
    });
  }


  getBreakpoint () {
    let width = window.innerWidth;

    this.sortedValues = Object.values(this.breakPoints).sort( (a, b) => b - a );

    this.sortedKeys = this.sortedValues.map ( item => {
      return Object.keys(this.breakPoints).find( key => this.breakPoints[key] === item );
    });

    this.currentVal = this.sortedValues.find( val => width > val );
    this.currentKey = this.sortedKeys[this.sortedValues.indexOf(this.currentVal)];

    if ( this.prevBreakpoint !== this.currentKey ) {
      this.change = true;
      this.prevBreakpoint = this.currentKey;
      return;
    }

  }


  findSrc ( item ) {
    let dataset = item.dataset;
    let index = this.sortedKeys.indexOf(this.currentKey);

    if ( dataset[this.currentKey] ) return dataset[this.currentKey];

    for ( let i = index - 1; i >= 0; i-- ) {
      if ( dataset[this.sortedKeys[i]] ) {
        return dataset[this.sortedKeys[i]];
      }
    }

    for ( let i = index + 1; i < this.sortedKeys.length; i++ ) {
      if ( dataset[this.sortedKeys[i]] ) {
        return dataset[this.sortedKeys[i]];
      }
    }
  }


  loadImage ( item, src ) {
    let change = true;

    let exist = item.querySelector('img');

    if ( exist ) {
      if ( exist.src === src ) change = false;
    }

    if ( !change ) return;

    let img = new Image;
    img.src = src;
    if ( item.dataset.alt ) {
      img.alt = item.dataset.alt;
    }
    item.innerHTML = '';
    item.appendChild(img);
  }



}
