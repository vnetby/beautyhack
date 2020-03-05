import { DOM } from './DOM/index.js';




export class AjaxSaveBookmarks extends DOM {

  constructor ( container ) {
    super ();

    let wrap = this.getContainer ( container );

    let links = this.findAll('.save-bookmark-input', wrap );

    if ( !links || !links.length ) return;

    this.links = links;

    this.init();
  }



  init () {
    this.links.forEach ( link => {
      link.addEventListener('change', e => {
        this.saveBookmark(link);
      });
    });
  }


  saveBookmark ( link ) {
    let checked = link.checked;

    this.switchBookmarkHTML( link, checked );

    let pageId  = link.dataset.page;
    if ( !pageId ) return;

    let ajax  = link.dataset.ajax;
    if ( !ajax ) return;

    this.sendRequest( checked, pageId, ajax )
    .then ( res => {
      console.log( res );
    });
  }


  switchBookmarkHTML ( link, checked ) {
    let label    = link.parentNode.parentNode.querySelector('.label');
    let hasLabel = link.dataset.hasLabel;
    let addLabel = link.dataset.addLabel;
    let parent = link.parentNode;
    if ( checked ) {
      this.removeClass(parent, 'add-bookmark');
      setTimeout( () => {
        this.addClass(parent, 'remove-bookmark');
      }, 0);
    } else {
      this.removeClass(parent, 'remove-bookmark');
      setTimeout( () => {
        this.addClass(parent, 'add-bookmark');
      }, 0);
    }
    if ( label && hasLabel && addLabel ) {
      if ( checked ) {
        label.innerHTML = hasLabel;
      } else {
        label.innerHTML = addLabel;
      }
    }
  }



  sendRequest ( save, pageId, ajax ) {
    let url = ajax;
    let page = pageId;

    let http = new XMLHttpRequest;
    http.open('POST', url);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.send(`page=${page}&save=${save}`);
    return new Promise ( (resolve, reject) => {
      http.onreadystatechange = () => {
        if ( http.readyState === 4 && http.status === 200 ) {
          resolve ( http.responseText );
        }
      }
    })
  }
}
