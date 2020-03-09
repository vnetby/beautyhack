import {DOM} from './DOM';
import {React} from './React';




const MSG = {
  required        : 'Заполните поле',
  requiredCheckbox: 'Выберите значение',
  mailFormat      : 'Неверный e-mail',
  comparePassword : 'Пароль не совпадает'
}




export class FormValidate extends DOM {


  constructor ( container ) {
    super();

    this.container = this.getContainer ( container );

    this.check = true;
    this.getElements();

    if ( !this.check ) return;

    this.init();
  }


  getElements() {
    this.forms = this.findAll('.form-validate', this.container);
    if ( !this.forms.length ) this.check = false;
  }


  init() {
    this.forms.forEach ( form => {
      let inputs = this.findAll('.input', form);
      let checkbox = this.findAll('input[type=checkbox]', form);
      if ( checkbox ) {
        inputs = inputs.concat( checkbox );
      }
      let submit = this.findFirst('button[type=submit]', form);
      this.removeErrorOnInputChange ( inputs );
      this.initValidate(submit, inputs, form);
    });
  }




  initValidate ( submit, inputs, form ) {
    submit.addEventListener('click', e => {
      e.preventDefault();
      if ( this.validateInputs( inputs ) ) {
        this.dispath( form, 'submit' );
      }
    });
  }


  validateInputs( inputs ) {
    let check = true;
    let passwords = [];
    inputs.forEach ( input => {
      if ( input.hasAttribute('required') ) {
        let val = this.validateRequired( input );
        check = check ? val : check;
      }
      if ( input.type === 'email' ) {
        let val = this.validateEmail( input );
        check = check ? val : check;
      }
      if ( input.hasAttribute('data-password') ) {
        passwords.push ( input );
      }
    });

    if ( passwords.length === 2 ) {
      let val = this.validatePasswords( passwords );
      check = check ? val : check;
    }
    return check;
  }



  validateRequired ( input ) {

    let type = input.type;
    if ( type === 'text' || type === 'password' || type === 'number' ) {
      if ( !input.value ) {
        this.addInputError( input, 'required' );
        return false;
      }
    }

    if ( type === 'checkbox' ) {
      if ( !input.checked ) {
        this.addInputError( input.parentNode, 'requiredCheckbox' );
        return false;
      }
    }

    return true;
  }


  validateEmail ( input ) {
    let val = input.value;
    if ( val.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === -1 ) {
      this.addInputError( input, 'mailFormat' );
      return false;
    }
    return true;
  }

  validatePasswords ( passwords ) {
    if ( passwords[0].value !== passwords[1].value ) {
      passwords.forEach ( input => {
        this.addInputError( input, 'comparePassword' );
      });
      return false;
    }
    return true;
  }


  addInputError ( input, type ) {
    let msg = MSG[type];
    let help = this.appendInputHelp( input );
    this.showHelp( help, msg, 'error' );
  }


  removeErrorOnInputChange ( inputs ) {
    inputs.forEach ( input => {
      input.addEventListener('change', e => {
        this.removeInputError( input );
      });
    });
  }


  removeInputError( input ) {
    let help = this.appendInputHelp( input );
    this.hideHelp( help );
  }


  appendInputHelp ( input ) {
    let help = input.parentNode.querySelector('.input-help');

    if ( input.type === 'checkbox' ) {
      help = input.parentNode.parentNode.querySelector('.input-help');
    }
    if ( !help ) {
      help = (<div class="input-help"></div>);
      input.parentNode.appendChild(help);
    }
    return help;
  }


  hideHelp( help ) {
    this.removeClass(help, 'visible');
    this.removeClass(help, 'success');
    this.removeClass(help, 'error');
    help.innerHTML = '';
  }

  showHelp ( help, msg, type ) {
    help.innerHTML = msg;
    this.addClass(help, type);
    this.addClass(help, 'visible');
  }
}
