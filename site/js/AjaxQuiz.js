import { DOM } from './DOM/index.js';
import { React } from './React';

import { dynamicScripts } from './';


export class AjaxQuiz extends DOM {


  constructor ( container ) {
    super();

    let wrap = this.getContainer ( container );
    if ( !wrap ) return;
    this.container = this.findFirst('#jsQuiz', wrap );
    if ( !this.container ) return;

    this.check = true;
    this.getElements();

    if ( !this.check ) return;

    this.url         = this.container.dataset.ajax;
    this.quizId      = this.container.dataset.quiz;
    this.hours       = 0;
    this.min         = 0;
    this.sec         = 0;
    this.timer       = this.createTimer();
    this.trueAnswers = 0;

    this.init();
  }


  getElements() {
    this.beginTest          = this.findFirst( '#beginTestBtn', this.container );
    this.countQuest         = this.findFirst( '#countQuest', this.container );
    this.countQuestWrap     = this.findFirst( '#countQuestWrap', this.container );
    this.questTitle         = this.findFirst('#questTitle', this.container);
    this.questFormContainer = this.findFirst('#questFormContainer', this.container);
    this.questContainer     = this.findFirst('#questContainer', this.container);
  }



  init () {
    this.beginTest.addEventListener('click', e => {
      e.preventDefault();
      this.startQuiz();
    });
  }


  startQuiz() {
    this.ajax({
      url: this.url,
      data: { quizId: this.quizId }
    })
    .then ( res => {
      this.quiz = JSON.parse( res );
      this.current = 0;
      this.total = this.quiz.length;
      this.css(this.questContainer, {display: 'flex'});

      this.initTimer();
      this.removeBtn();
      this.addQuestion();
    });
  }


  addQuestion() {
    this.setCountQuest();
    this.addQuestionTitle();
    this.createAnswers();
    this.initAnswers();
  }


  addQuestionTitle () {
    let title = this.quiz[this.current]['question'];
    this.questTitle.innerHTML = title;
  }


  setCountQuest () {
    this.countQuest.innerHTML = `${this.current + 1} / ${this.total}`;
  }


  createAnswers () {
    let div = document.createDocumentFragment();
    this.quiz[this.current]['answers'].forEach ( (answer, i) => {
      let str = (
        <div class="form-row test-radio">
          <input type="radio" name={`questAnswer${this.current}`} id={`questAnswer${this.current}${i}`} />
          <label className="quest-answer-input" for={`questAnswer${this.current}${i}`} data-quest= {this.current} data-answer={i}>
            {answer[0]}
          </label>
          <span class="ico wrong-ico test-ico">
          </span>
          <span class="ico true-ico test-ico">
          </span>
        </div>
      );
      div.appendChild( str );
    });
    this.questFormContainer.innerHTML = '';
    this.questFormContainer.appendChild( div );
  }


  initAnswers () {
    let labels = this.findAll('.quest-answer-input', this.questFormContainer);
    labels.forEach ( label => {
      label.addEventListener('click', e => {
        if ( this.hasAnswer ) {
          e.preventDefault();
          return;
        } else {
          this.validate( labels, label );
          this.changeQuestion();
          this.hasAnswer = true;
        }
      })
    });
  }



  changeQuestion() {
    this.finish = true;
    setTimeout( () => {
      this.css(this.questFormContainer, {opacity: 0});
      this.css(this.questTitle, {opacity: 0});
      setTimeout( () => {
        if ( this.current + 1 === this.total ) {
          this.finishTest();
          return;
        }
        this.current = this.current + 1;
        this.hasAnswer = false;
        this.addQuestion();
        this.css(this.questFormContainer, {opacity: 1});
        this.css(this.questTitle, {opacity: 1});
        this.finish = false;
      }, 300);
    }, 500);
  }



  finishTest () {
    this.finish = true;
    this.addPreloader( this.container );
    this.ajax({
      url: this.url,
      data: { quizId: this.quizId, quizResult: this.trueAnswers, time: this.getTimeResult()}
    })
    .then ( res => {
      let content = this.strToDom( res );
      this.container.innerHTML = '';
      this.container.appendChild( content );
      dynamicScripts ( content );
      setTimeout( () => {
        this.removePreloader( this.container );
      }, 10);
    });
  }


  getTimeResult () {
    let hours = this.hours < 10 ? `0${this.hours}` : this.hours;
    let min = this.min < 10 ? `0${this.min}` : this.min;
    let sec = this.sec < 10 ? `0${this.sec}` : this.sec;
    return `${hours}:${min}:${sec}`;
  }


  validate( labels, current ) {
    labels.forEach ( label => {
      let answer = parseInt(label.dataset.answer);
      if ( !this.quiz[this.current]['answers'][answer][1] ) {
        if ( label === current ) {
          this.addClass(label.parentNode, 'wrong');
        }
      } else {
        if ( label === current ) {
          this.trueAnswers++;
        }
        this.addClass(label.parentNode, 'true');
      }
    });
  }




  removeBtn () {
    this.remove(this.beginTest);
  }



  createTimer () {
    const hours = this.hours ? this.createHoursSpan() : '';
    return (
      <div className="timer">
        {hours}
        <span className="min">{this.min < 10 ? `0${this.min}` : this.min}</span>
        <span className="div">:</span>
        <span className="sec red">{this.sec < 10 ? `0${this.sec}` : this.sec}</span>
      </div>
    );
  }


  createHoursSpan () {
    return <><span className="hours">{this.hours < 10 ? `0${this.hours}` : this.hours}</span><span className="div">:</span></>;
}


initTimer () {
  if ( !this.countQuestWrap.querySelector('.timer') ) {
    this.countQuestWrap.insertBefore(this.timer, this.countQuest);
  }
  setInterval(() => {
    if ( this.finish ) return;
    let sec   = this.findFirst('.sec', this.timer);
    let min   = this.findFirst('.min', this.timer);
    let hours = this.findFirst('.hours', this.timer);
    if ( this.sec + 1 === 60 ) {
      this.min = this.min + 1;
      this.sec = 0;
    } else {
      this.sec = this.sec + 1;
    }
    if ( this.min === 60 ) {
      this.hours = this.hours + 1;
      this.min = 0;
      this.sec = 0;
    }
    if ( this.hours ) {
      if ( hours ) {
        hours.innerHTML = this.hours < 10 ? `0${this.hours}` : this.hours;
      } else {
        hours = this.createHoursSpan();
        min.parentNode.insertBefore(hours, min);
      }
    }
    sec.innerHTML = this.sec < 10 ? `0${this.sec}` : this.sec;
    min.innerHTML = this.min < 10 ? `0${this.min}` : this.min;
  }, 1000);
}



}
