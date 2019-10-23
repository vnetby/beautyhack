import { DOM } from './DOM/index.js';





export class LoadPreviewImage extends DOM {


  constructor ( container ) {
    super ();
    this.container = this.getContainer ( container );
    this.defaultAllowed = ['jpg', 'JPEG', 'gif', 'PNG', 'png'];
    this.getElements();
    if ( !this.inputs || !this.inputs.length ) return;
    this.init();
  }



  getElements ( wrap ) {
    this.inputs = this.findAll( '.preview-image-input', this.container );
  }



  init () {
    this.inputs.forEach ( input => {
      input.addEventListener( 'change', e => {
        let previewId = input.getAttribute('data-preview');
        if ( !previewId ) return;
        let preview = this.findFirst(previewId, this.container);
        if ( !preview ) return;
        let allowed = this.getAllowed( input ) || this.defaultAllowed;

        if ( !this.checkAllowed(allowed, input.files) ) return;

        this.changePreview(preview, input);
      })
    });
  }



  changePreview ( preview, input ) {
    this.addPreloader(preview.parentNode);
    let filesSelected = input.files;
    if ( filesSelected.length > 0 ) {
      let fileToLoad = filesSelected[0];
      let fileReader = new FileReader();
      fileReader.onload = this.insertPreviewThumbnail.bind(this, preview, fileReader );
      fileReader.readAsDataURL(fileToLoad);
    } else {
      this.removePreloader(preview.parentNode);
    }
  }


  insertPreviewThumbnail ( preview, fileReader ) {
    let srcData  = fileReader.result;
    preview.setAttribute('src', srcData );
    this.removePreloader(preview.parentNode);
  }


  getAllowed ( input ) {
    let allowed = input.getAttribute('data-allow');
    if ( !allowed ) return false;
    allowed = allowed.trim();
    allowed = allowed.split('|');
    if ( !allowed.length ) return false;
    let res = allowed.map( item => item.trim() );
    return res;
  }


  checkAllowed ( allowed, files ) {
    let check = true;
    Object.keys( files ).forEach ( key => {
      let file = files[key];
      let name = file.name;
      name = name.split('.');
      if ( name.length ) {
        let ex = name[name.length-1];
        if ( allowed.indexOf ( ex ) === -1 ) check = false;
      }
    });
    return check;
  }
}
