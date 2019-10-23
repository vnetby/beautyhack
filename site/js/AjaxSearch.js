import { DOM } from './DOM/index.js';



export class AjaxSearch extends DOM {


  constructor ( sets ) {
    super();
    sets = sets ? sets : {};


    this.timer = sets.timer || 1000;

    this.searchForm = sets.searchForm ? this.findFirst(sets.searchForm) : this.findFirst('#searchForm');
    if ( !this.searchForm ) return;

    this.searchResContainer = sets.searchResContainer ? this.findFirst(sets.searchResContainer) : this.findFirst('#searchResContainer');
    if ( !this.searchResContainer ) return;

    this.url = this.searchForm.dataset.ajax || this.searchForm.action;

    this.input = sets.input ? this.findFirst( sets.input, this.searchForm ) : this.findFirst( '#searchInput', this.searchForm );


    this.http = new XMLHttpRequest;

    this.init();
  }


  init () {
    this.input.addEventListener('keydown', e => {
      if ( this.input.value.length < 2 ) return;
      if ( this.timeoutFunction ) {
        clearTimeout(this.timeoutFunction);
      }
      this.timeoutFunction = setTimeout( this.onTimeout.bind(this), this.timer);
    } );
  }


  onTimeout() {
    if ( this.input.value === '' ) {
      this.searchResContainer.innerHTML = '';
      return;
    }
    this.addPreloader();
    this.sendRequest()
    .then( res => {
      this.searchResContainer.innerHTML = res;
      this.removePreloader();
    });
  }


  sendRequest () {
    let formData = new FormData( this.form );
    this.http.open('POST', this.url );
    this.http.send( formData );
    return new Promise( (resolve, reject) => {
      this.http.onreadystatechange = () => {
        if ( this.http.readyState === 4 && this.http.status === 200 ) {
          resolve ( this.http.responseText );
        }
      }
    })
  }


  addPreloader () {
    this.addClass(this.searchForm, 'loading');
  }

  removePreloader () {
    this.removeClass(this.searchForm, 'loading');
  }
}
