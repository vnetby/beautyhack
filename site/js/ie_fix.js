const objectFitImages = require('object-fit-images');

import {DOM} from './DOM';

const dom = new DOM;

export const createNewEvent = eventName => {
  var event;
  if (typeof(Event) === 'function') {
    event = new Event(eventName);
  } else {
    event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
  }
  return event;
}



export const domToArr = (items) => {
  if ( !items.length ) return false;
  let arr = [];


  for ( let i = 0; i < items.length; i++ ) {
    arr.push(items[i]);
  }

  return arr;
}



export const objectFit = container => {
  let wrap   = dom.getContainer( container );
  let images = dom.findAll('.object-cover', wrap);
  images.forEach ( img => {
    let styles = window.getComputedStyle( img );
    if( !styles.objectFit ) {
      let parent = img.parentNode;
      let src = img.src;
      dom.css( parent, {
        'background-image' : `url('${src}')`,
        'background-size'  : 'cover',
        'background-position' : 'center center'
      });
      dom.css( img, { opacity: 0 } );
      observeChangeSrc(img, parent);
    }
  });
}



const observeChangeSrc =  ( img, parent ) => {
  let observer = new MutationObserver( mutations => {
    mutations.forEach( mutation => {
      if ( mutation.type === "attributes" ) {
        let src = img.src;
        dom.css( parent, {
          'background-image' : `url(${src})`,
          'background-size'  : 'cover',
          'background-position' : 'center center'
        });
      }
    });
  });
  observer.observe(img, {
    attributes: true
  });
}
