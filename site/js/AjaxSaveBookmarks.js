import { DOM } from './DOM/index.js';




export class AjaxSaveBookmarks extends DOM {

  constructor ( container ) {
    super ();

    let wrap = this.getContainer ( container );

    let links = this.findAll('.save-bookmark-link', wrap );

    if ( !links || !links.length ) return;

    this.links = links;

    this.init();
  }



  init () {
    this.links.forEach ( link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        this.saveBookmark(link);
      });
    });
  }


  saveBookmark ( link ) {
    if ( link.classList.contains('disable') ) return;
    this.addClass( link, 'disable' );

    this.sendRequest( link )
    .then ( res => {
      let span = this.create('span', 'in-bookmark');
      span.innerHTML = 'в закладках';
      link.parentNode.replaceChild(span, link);
    });
  }



  sendRequest ( link ) {
    let url = link.href;
    let page = link.dataset.page;

    let http = new XMLHttpRequest;
    http.open('POST', url);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.send(`page=${page}`);
    return new Promise ( (resolve, reject) => {
      http.onreadystatechange = () => {
        if ( http.readyState === 4 && http.status === 200 ) {
          resolve ( http.responseText );
        }
      }
    })
  }
}
