import { DOM } from './DOM/index.js';


export class AjaxTest extends DOM {

  constructor ( container ) {
    super ();

    let wrap = this.getContainer( container );

    if ( !wrap ) return;

    this.container = this.findFirst('#jsTest', wrap);

    if ( !this.container ) return;

    this.url    = this.container.dataset.ajax;

    this.testId = this.container.dataset.test;

    this.check = true;

    this.res = [];

    this.getElements();

    if ( !this.check ) return;
    this.init();

  }



  init() {
    this.beginBtn.addEventListener('click', e => {
      e.preventDefault();
      this.ajax({
        url: this.url,
        data: { testId : this.testId },
        preloader: this.container
      })
      .then ( res => {
        this.test = JSON.parse( res );

        this.startTest();
      })
    });
  }



  getElements () {
    this.beginBtn           = this.findFirst( '#beginTestBtn', this.container );
    this.questFormContainer = this.findFirst('#questFormContainer', this.container);
    this.controls           = this.findFirst('#controlsContainer', this.container);
    this.nextBtn            = this.createNextBtn();
    this.countQuestions     = this.findFirst('#countQuestions', this.container);
    this.questTitle         = this.findFirst('#questionTitle', this.container);
    this.questContainer     = this.findFirst('#questContainer', this.container);
  }


  startTest () {
    this.current = 0;
    this.total = this.test.length;
    this.removeControls();
    this.addQuestion();
    this.initNextBtn();
    this.setCountQuestion();
  }


  setCountQuestion () {
    this.countQuestions.innerHTML = `${this.current+1} / ${this.total}`;
  }


  addQuestion () {
    if ( this.current === this.total ) {
      this.finishTest();
      return;
    }
    this.setCountQuestion();
    let quest = this.test[this.current];
    let answers = quest.answers;
    this.questTitle.innerHTML = quest.question;
    this.addAnswers( answers );
  }


  addAnswers ( answers ) {
    let html = document.createDocumentFragment();
    answers.forEach ( (answer, i) => {
      html.appendChild( this.createAnswerHtml ( answer, i ) );
    });
    this.initAnswer( html );
    this.questFormContainer.innerHTML = '';
    this.questFormContainer.appendChild ( html );
    this.removeClass(this.questContainer, 'hidden');
  }


  initAnswer ( html ) {
    let inputs = this.findAll('.answer-radio', html);
    inputs.forEach ( input => {
      input.addEventListener('change', e => {
        if ( this.finish ) {
          e.preventDefault();
          return;
        }
        let quest = parseInt(input.dataset.quest);
        let answer = parseInt(input.dataset.answer);
        this.res[quest] = answer;
        this.addNextBtn();
      });
    });
  }


  createAnswerHtml ( txt, i ) {
    let str = '<div class="form-row">';
    str += `<label for="questAnswer${this.current}${i}">`;
    str += '<div class="beauty-radio">';
    str += `<input type="radio" class="answer-radio" name="questAnswer${this.current}" id="questAnswer${this.current}${i}" data-quest="${this.current}" data-answer="${i}" />`;
    str += '<span class="radio"></span>';
    str += '</div>';
    str += txt;
    str += '</label>';
    str += '</div>';
    return this.strToDom ( str );
  }


  removeControls () {
    this.controls.innerHTML = '';
  }


  addNextBtn () {
    if ( this.controls.querySelector('.next-question-btn') ) {
      this.css(this.nextBtn, {display: 'block'});
    } else {
      this.removeControls();
      this.controls.appendChild( this.nextBtn );
    }
  }

  hideNextBtn () {
    if ( this.controls.querySelector('.next-question-btn') ) {
      this.css(this.nextBtn, {display: 'none'});
    }
  }

  initNextBtn () {
    this.nextBtn.addEventListener('click', e => {
      e.preventDefault();
      if ( this.finish ) return;
      this.current = this.current + 1;
      this.addQuestion();
      this.hideNextBtn();

    });
  }


  finishTest () {
    this.finish = true;
    this.ajax({
      url: this.url,
      data: { testId: this.testId, testResult: JSON.stringify(this.res)},
      preloader: this.container
    })
    .then ( res => {
      this.container.innerHTML = res;
    })
  }


  createNextBtn () {
    let btn = this.strToDom('<button type="button" class="btn black next-question-btn" id="nextQuestionBtn">Дальше</button>');
    return btn;
  }
}
