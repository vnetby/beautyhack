import {DOM} from './DOM/index.js';







export class JsInfoBlock extends DOM {
  constructor ( container ) {
    super();
    this.wrap = this.getContainer ( container );
    this.container = this.findFirst('.js-info-block', this.wrap);
    if ( !this.container ) return;

    this.check = true;
    this.getElements();

    if ( !this.check ) return;

    this.init();
  }


  getElements() {
    this.cards = this.findAll('.js-info-card', this.container );
    this.check = !!this.cards.length;
    if ( !this.check ) return;
  }



  init() {
    this.initCloseOnUoutClick();
    this.cards.forEach ( card => {
      this.initCard( card );
    });
  }



  initCloseOnUoutClick () {
    document.body.addEventListener('click', e => {
      if ( this.visible ) {
        this.closeCard( this.visible );
      }
    });
  }



  initCard ( card ) {
    let btn           = this.findFirst('.info-btn', card );
    let close         = this.findFirst('.close-content', card);
    let openCollapse  = this.findFirst('.open-collapse', card );
    let closeCollapse = this.findFirst('.close-collapse', card );

    if ( openCollapse ) this.initOpenCollapse( openCollapse, card );
    if ( closeCollapse ) this.initCloseCollapse( closeCollapse, card );

    if ( close ) this.initClose( close, card );
    if ( window.innerWidth > BH.tablet ) {
      this.css( card, { height: btn.offsetHeight + 'px' } );
    }
    this.preventPropagationClick( card );
    btn.addEventListener('click', e => {
      e.preventDefault();
      this.switchCard( card );
    });
  }



  initOpenCollapse ( icoBtn, card ) {
    let btn         = this.findFirst('.info-btn', card );
    let content     = this.findFirst('.js-card-content', card);
    let head        = this.findFirst('.info-card-head', card);
    let contentWrap = this.findFirst( '.card-content-wrap', card );

    icoBtn.addEventListener('click', e => {
      e.preventDefault();
      if ( !card.classList.contains('visible') ) {
        this.openCard( { btn : btn, card : card, content: content, contentWrap: contentWrap } );
      }
    });
  }


  initCloseCollapse ( icoBtn, card ) {
    let btn         = this.findFirst('.info-btn', card );
    let content     = this.findFirst('.js-card-content', card);
    let head        = this.findFirst('.info-card-head', card);
    let contentWrap = this.findFirst( '.card-content-wrap', card );

    icoBtn.addEventListener('click', e => {
      e.preventDefault();
      if ( card.classList.contains('visible') ) {
        this.closeCard( { btn : btn, card : card, content: content, contentWrap: contentWrap } );
      }
    });


  }


  preventPropagationClick ( card ) {
    card.addEventListener('click', e => {
      e.stopPropagation();
    })
  }



  initClose ( close, card ) {
    close.addEventListener('click', e => {
      e.preventDefault();
      this.closeCard(this.visible);
    });
  }



  switchCard ( card, close ) {
    let btn         = this.findFirst('.info-btn', card );
    let content     = this.findFirst('.js-card-content', card);
    let head        = this.findFirst('.info-card-head', card);
    let contentWrap = this.findFirst( '.card-content-wrap', card );

    if ( !btn || !content || !head || !contentWrap ) return;

    if ( !card.classList.contains('visible') ) {
      if ( close ) return;
      this.openCard( { btn : btn, card : card, content: content, contentWrap: contentWrap } );
    } else {
      this.closeCard( { btn : btn, card : card, content: content, contentWrap: contentWrap } );
    }
  }




  openCard ( { btn, card, content, contentWrap } ) {
    if ( this.visible ) {
      this.closeCard( this.visible );
    }
    this.addClass(card, 'visible');
    if ( window.innerWidth > BH.tablet ) {
      this.css(btn, { width: 0 });
      this.css(contentWrap, {
        position: 'absolute',
        bottom  : '0',
        left    : '0'
      });
    }
    $(content).slideDown({duration: 300});
    this.visible = { btn, card, content, contentWrap };
  }


  closeCard ( { btn, card, content, contentWrap } ) {
    this.removeClass(card, 'visible');
    $(content).slideUp({duration: 300});
    this.visible = false;
    if ( window.innerWidth > BH.tablet ) {
      btn.removeAttribute('style');
      setTimeout( () => {
        contentWrap.removeAttribute('style');
      }, 300);
    }
  }





}


// export class JsInfoBlock extends DOM {
//   constructor (sets) {
//     super ();
//
//     this.activeClassBtn     = 'current';
//     this.activeClassContent = 'current';
//
//     this.breakpoint = BH[BH.jsInfoBlockBreakpoint] || BH.mobile;
//
//     this.blocks             = [];
//     this.initElements(sets ? sets.container : false);
//   }
//
//
//
//   initSetMarkup () {
//     window.addEventListener('resize', e => {
//       let windowSize = window.innerWidth > this.breakpoint ? 'destop' : 'mobile';
//       if ( !this.windowSize ) {
//         this.windowSize = windowSize;
//         return;
//       }
//       if ( this.windowSize !== windowSize ) {
//         this.windowSize = windowSize;
//         this.dispath( this.body, 'js_info_block_change_size' );
//       }
//     });
//   }
//
//
//   initElements( container ) {
//     let wrap   = this.getContainer( container );
//     let blocks = this.findAll( '.js-info-block', wrap );
//     if ( !blocks || !blocks.length ) return;
//
//     blocks.forEach ( block => {
//       let obj = this.getBlockObj( block );
//       this.initBlock( obj );
//       this.blocks.push ( obj );
//     });
//   }
//
//
//
//   getBlockObj ( block ) {
//     let obj  = {};
//
//     obj.el   = block;
//     obj.btns = this.findAll( '.info-btn', block );
//
//     let contents = this.findAll( '.res-content', block );
//
//     let objContents = {};
//
//     contents.forEach ( content => {
//       let id = `#${content.getAttribute('id')}`;
//       objContents[id] = this.getContentsEl( content );
//     });
//
//     obj.contents = objContents;
//
//
//     return obj;
//   }
//
//
//   getContentsEl ( content ) {
//     let obj   = {};
//     obj.el    = content;
//     obj.title = this.findFirst( '.content-head', content );
//     obj.text  = this.findFirst( '.content-text', content );
//     obj.close = this.findFirst( '.close-content', content );
//
//     return obj;
//   }
//
//
//
//   initBlock( obj ) {
//     this.initBtns( obj );
//     this.initCloseBtns ( obj );
//     this.initCollapse( obj );
//     // this.initResize( obj );
//   }
//
//
//
//   initResize( obj ) {
//     document.body.addEventListener('js_info_block_change_size', e => {
//       if ( this.windowSize === 'mobile' ) {
//         this.checkMobileMarkup( obj );
//       } else {
//         this.checkDesktopMarkup( obj );
//       }
//     });
//   }
//
//
//   checkMobileMarkup ( obj ) {
//     console.log('mobile', obj);
//   }
//
//
//   checkDesktopMarkup ( obj ) {
//     console.log('desktop', obj);
//
//   }
//
//
//
//   initCollapse ( obj ) {
//     console.log( obj );
//     Object.keys( obj.contents ).forEach ( id => {
//       let item = obj.contents[id];
//       let btn = obj.btns.find(btn => btn.dataset.target === id );
//       this.initClickOnTitle( item, obj, btn );
//     });
//   }
//
//
//
//   initClickOnTitle ( item, obj, btn ) {
//     item.title.addEventListener( 'click', e => {
//       e.preventDefault();
//       if ( window.innerWidth > this.breakpoint ) return;
//       if ( item.el.classList.contains(this.activeClassContent) ) {
//         this.removeActiveBtns( obj.btns );
//         this.removeActiveContents( obj.contents );
//         return;
//       }
//       this.removeActiveBtns( obj.btns );
//       this.addActiveBtn( btn );
//       this.removeActiveContents( obj.contents );
//       this.addActiveContent( item.el );
//     });
//   }
//
//
//
//   initCloseBtns ( obj ) {
//     Object.keys( obj.contents ).forEach( id => {
//       let item = obj.contents[id];
//       let btn = item.close;
//       btn.addEventListener( 'click', e => {
//         e.preventDefault();
//         this.removeActiveBtns( obj.btns );
//         this.removeActiveContents( obj.contents );
//       });
//     });
//   }
//
//
//   initBtns ( obj ) {
//     obj.btns.forEach ( btn => {
//       btn.addEventListener( 'click', e => {
//         e.preventDefault();
//         this.changeContent( btn, obj );
//       });
//     });
//   }
//
//
//   changeContent( btn, obj ) {
//     this.removeActiveBtns( obj.btns );
//     this.addActiveBtn( btn );
//     let id   = btn.dataset.target;
//     let item = obj.contents[id];
//     this.removeActiveContents( obj.contents );
//     this.addActiveContent( item.el );
//     if ( !obj.active ) obj.active = {};
//   }
//
//
//   removeActiveBtns( btns ) {
//     btns.forEach ( btn => {
//       this.removeClass( btn, this.activeClassBtn );
//     });
//   }
//
//   addActiveBtn( btn ) {
//     this.addClass( btn, this.activeClassBtn );
//   }
//
//   removeActiveContents( contents ) {
//     Object.keys( contents ).forEach ( id => {
//       this.removeClass( contents[id].el , this.activeClassContent );
//     });
//   }
//
//   addActiveContent ( content ) {
//     this.addClass( content, this.activeClassContent );
//   }
//
//
// }
