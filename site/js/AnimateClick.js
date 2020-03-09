import {DOM} from './DOM';



export class AnimateClick extends DOM {


  constructor ( sets = {} ) {
    super();
    this.excludeTags = sets.excludeTags || ['A', 'BUTTON'];
    this.duration    = sets.duration || 500;
    this.init();
  }


  init() {
    this.body.addEventListener('click', e => {
      if ( e.target.tagName ) {
        if ( e.path ) {
          if ( e.path.some( item => this.excludeTags.indexOf( item.tagName ) > -1 ) ) return false;
        }
      }
      this.animateClick( e );
    });
  }



  animateClick( e ) {
    let el   = this.create('span', 'animate-click');
    let el2  = this.create('span', 'animate-click');
    let y    = e.clientY || e.layerY;
    let x    = e.clientX || e.layerX;
    let top  = `${y - 5 / 2}px`;
    let left = `${x - 5 / 2}px`;
    this.css( el, {
      top : top,
      left: left
    });
    this.css( el2, {
      top : top,
      left: left
    });
    document.body.appendChild(el);
    this.addClass(el, 'visible');
    setTimeout( () => {
      el.parentNode.removeChild( el );
    }, this.duration);

    setTimeout( () => {
      document.body.appendChild(el2);
      this.addClass(el2, 'visible');
      setTimeout( () => {
        el2.parentNode.removeChild(el2);
      }, this.duration);
    }, 100);
  }

  appendEl() {
    this.body.appendChild( this.el );
  }

  removeEl () {
    if ( !this.el.parentNode ) return;
    this.el.parentNode.removeChild( this.el );
  }


}
