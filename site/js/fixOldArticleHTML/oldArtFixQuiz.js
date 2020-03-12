import { DOM } from "../DOM/DOM";
let dom = new DOM;
import { React } from "../React";
import { dynamicScripts } from '../';


let isAjax;

// const RESULT_AJAX_URL = '/_request.php?action=js_quiz';
const RESULT_AJAX_URL = '/assets/ajax/quiz_v2_ajax.php';






export const oldArtFixQuiz = (wrap, ajaxRequest) => {

  isAjax = ajaxRequest;

  let container = dom.getContainer(wrap);
  if (!container) return;

  if (typeof quiz_v2_data === 'undefined') return;

  let userData = {
    userName: dom.findFirst('#userName', container, {}).value,
    quizID: dom.findFirst('#quizID', container, {}).value,
    modxUserId: dom.findFirst('#modxUserId', container, {}).value,
    isLogin: dom.findFirst('#is_login', container, {}).value === 'true' ? true : false
  };

  let item = dom.findFirst('#quiz_v2_content', container);
  if (!item) return;

  let art = dom.findFirst('.art-content', container);
  if (!art) return;

  item.parentNode.removeChild(item);
  dom.addClass(document.body, 'has-quiz');

  let pLeft = dom.findFirst('.p-left');
  if (pLeft) dom.removeClass(pLeft, 'p-left');

  let copyData = JSON.stringify(quiz_v2_data);

  let data = { ...JSON.parse(copyData), userData };

  init({ art, container, data });
}











const init = ({ art, container, data }) => {

  let html = createQuizHTML({ data });

  let wrap = art.querySelector('.col-lg-12');
  wrap.innerHTML = '';
  wrap.appendChild(html);


  let els = {};
  getEls({ els, container: wrap });

  loadImages({ els, data });


  checkUserLoginData({ els, data });

  data.timer = {};
  data.timer.hours = 0;
  data.timer.min = 0;
  data.timer.sec = 0;
  data.timer.inSeconds = 0;
  data.timer.el = createTimer({ data });

  data.trueAnswers = 0;

  let res = getLocalResult({ els, data });
  if (res) {
    displayResult({ els, data, html: res });
    return;
  }
  initQuiz({ els, data });
}









const checkUserLoginData = ({ els, data }) => {
  let isLogin = true;
  // data.isLogin - is value of hidden input;

  if (data.quiz_authorization) {
    isLogin = false;
  } else {
    isLogin = true;
  }

  if (data.isLogin) {
    isLogin = true;
  }

  data.isUserLogin = isLogin;
}










const loadImages = ({ els, data }) => {
  data.questions.forEach((item, i) => {
    if (!item.image) return;
    let src = item.image;
    let img = document.createElement('img');
    img.src = src;
    data.questions[i].image = img;
    console.log(data.questions[i].image);
  });
}









const createTimer = ({ data }) => {
  let hours = data.timer.hours ? createHoursSpan({ data }) : '';
  return (
    <div className="timer">
      {hours}
      <span className="min">{data.timer.min < 10 ? `0${data.timer.min}` : data.timer.min}</span>
      <span className="div">:</span>
      <span className="sec red">{data.timer.sec < 10 ? `0${data.timer.sec}` : data.timer.sec}</span>
    </div>
  );
}










const createHoursSpan = ({ data }) => {
  let el = document.createDocumentFragment();
  el.appendChild(<span className="hours">{data.timer.hours < 10 ? `0${data.timer.hours}` : data.timer.hours}</span>);
  el.appendChild(<span className="div">:</span>);
  return el;
}










const initQuiz = ({ els, data }) => {
  els.beginTest.addEventListener('click', e => {
    e.preventDefault();
    if (data.isUserLogin) {
      startQuiz({ els, data });
    } else {
      displayLoginForm({ els, data });
    }
  });
}









const displayLoginForm = ({ els, data }) => {
  let form = (
    <div class="row center-row">
      <div className="col-lg-12 quiz-login-form">
        Для продолжения вам необходимо <a href="register" class="pop_up_link" data-name="signup">зарегистрироваться</a> или <a href="login" class="pop_up_link" data-name="login">войти</a>.
      </div>
    </div>
  );
  els.testWrap.innerHTML = '';
  els.testWrap.appendChild(form);
}









const startQuiz = ({ els, data }) => {
  data.current = 0;
  data.total = data.questions.length;
  dom.css(els.questContainer, { display: 'flex' });

  initTimer({ els, data });
  removeBtn({ els, data });
  addQuestion({ els, data });
}









const removeBtn = ({ els, data }) => {
  dom.remove(els.beginTest);
}








const addQuestion = ({ els, data }) => {
  setCountQuest({ els, data });
  addQuestionTitle({ els, data });
  createAnswers({ els, data });
  addImage({ els, data });
  initAnswers({ els, data });
}








const addImage = ({ els, data }) => {
  let img = data.questions[data.current].image
  if (!img) return;
  els.imgCol.innerHTML = '';
  els.imgCol.appendChild(img);
}









const setCountQuest = ({ els, data }) => {
  els.countQuest.innerHTML = `${data.current + 1} / ${data.total}`;
}








const addQuestionTitle = ({ els, data }) => {
  let title = data.questions[data.current]['question'];
  els.questTitle.innerHTML = title;
}









const createAnswers = ({ els, data }) => {
  let div = document.createDocumentFragment();
  data.questions[data.current]['answers'].forEach((answer, i) => {
    let str = (
      <div className="form-row test-radio">
        <input type="radio" name={`questAnswer${data.current}`} id={`questAnswer${data.current}${i}`} />
        <label className="quest-answer-input" for={`questAnswer${data.current}${i}`} data-quest={data.current} data-answer={i}>
        </label>
        <span className="ico wrong-ico test-ico">
        </span>
        <span className="ico true-ico test-ico">
        </span>
      </div>
    );
    let txtWrap = dom.findFirst('.quest-answer-input', str);
    txtWrap.innerHTML = answer.text;
    div.appendChild(str);
  });
  els.questFormContainer.innerHTML = '';
  els.questFormContainer.appendChild(div);
}










const initAnswers = ({ els, data }) => {
  let labels = dom.findAll('.quest-answer-input', els.questFormContainer);
  labels.forEach(label => {
    label.addEventListener('click', e => {
      if (data.hasAnswer) {
        e.preventDefault();
        return;
      } else {
        validate({ labels, current: label, els, data });
        changeQuestion({ els, data });
        data.hasAnswer = true;
      }
    })
  });
}










const changeQuestion = ({ els, data }) => {
  data.finish = true;
  setTimeout(() => {
    dom.css(els.questFormContainer, { opacity: 0 });
    dom.css(els.questTitle, { opacity: 0 });
    setTimeout(() => {
      if (data.current + 1 === data.total) {
        finishTest({ els, data });
        return;
      }
      data.current = data.current + 1;
      data.hasAnswer = false;
      addQuestion({ els, data });
      dom.css(els.questFormContainer, { opacity: 1 });
      dom.css(els.questTitle, { opacity: 1 });
      data.finish = false;
    }, 300);
  }, 500);
}











const finishTest = ({ els, data }) => {
  data.finish = true;
  if (!data.isUserLogin) {
    displayLoginForm({ els, data });
    return;
  } else {
    dom.addPreloader(els.testWrap);
    sendResult({ els, data })
      .then(res => {
        setLocalResult({ els, data, html: res });
        displayResult({ els, data, html: res });
        dom.removePreloader(els.testWrap);
        // window.location.search = '?userid=' + data.modxUserId;
      });
  }

}







const setLocalResult = ({ els, data, html }) => {
  let local = window.localStorage.getItem('quizResults');
  local = local ? JSON.parse(local) : {};
  local[data.quizID] = html;
  local = JSON.stringify(local);
  window.localStorage.setItem('quizResults', local);
}









const getLocalResult = ({ els, data }) => {
  let local = window.localStorage.getItem('quizResults');
  if (!local) return false;
  local = JSON.parse(local);
  return local[data.quizID];
}









const displayResult = ({ els, data, html }) => {
  let div = document.createElement('div');
  div.innerHTML = html;
  div.appendChild(createResetLocalBtn({ els, data }));
  els.questRow.parentNode.replaceChild(div, els.questRow);
  dynamicScripts(div);
  // setTimeout(() => {
  //   let scroll = div.getBoundingClientRect().top + window.pageYOffset - 100;
  //   window.scrollTo(0, scroll);
  //   console.log(scroll);
  // }, 10);
}











const deleteLocalResult = ({ els, data }) => {
  dom.addPreloader(els.testWrap);

  let local = window.localStorage.getItem('quizResults');
  local = local ? JSON.parse(local) : false;
  if (!local) return;
  if (!local[data.quizID]) return;

  delete local[data.quizID];

  if (!Object.keys(local).length) {
    window.localStorage.removeItem('quizResults');
  } else {
    local = JSON.stringify(local);
    window.localStorage.setItem('quizResults', local);
  }
}










const createResetLocalBtn = ({ els, data }) => {
  let div = dom.create('div', 'reset-local-wrap');
  let btn = dom.create('button', 'reset-local-btn btn black');
  btn.innerHTML = 'Проити еще раз';

  initResetLocalBtn({ els, data, btn });
  div.appendChild(btn);


  return div;
}










const initResetLocalBtn = ({ els, data, btn }) => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    deleteLocalResult({ els, data });
    window.location.href = window.location.href;
  });
}









const sendResult = ({ els, data }) => {
  return new Promise((resolve, reject) => {
    let http = new XMLHttpRequest();

    let requesturl = RESULT_AJAX_URL + '?name=' + encodeURIComponent(data.userName) + '&quizID=' + encodeURIComponent(data.quizID) + '&modxuserid=' + encodeURIComponent(data.modxUserId) + '&score=' + encodeURIComponent(data.trueAnswers) + '&seconds=' + encodeURIComponent(data.timer.inSeconds) + '&totalscore=' + encodeURIComponent(data.total) + '&method=update&special=ofjshfsgufdirhfewgwe37gefhurqv3';

    http.open('GET', requesturl);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.send();

    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        resolve(http.responseText);
      }
    }
  });
}











const validate = ({ labels, current, els, data }) => {
  labels.forEach(label => {
    let answer = parseInt(label.dataset.answer);
    if (!data.questions[data.current]['answers'][answer].isCorrect) {
      if (label === current) {
        dom.addClass(label.parentNode, 'wrong');
      }
    } else {
      if (label === current) {
        data.trueAnswers++;
      }
      dom.addClass(label.parentNode, 'true');
    }
  });
}










const initTimer = ({ els, data }) => {

  if (!els.countQuestWrap.querySelector('.timer')) {
    els.countQuestWrap.insertBefore(data.timer.el, els.countQuest);
  }

  setInterval(() => {
    if (data.finish) return;
    let sec = dom.findFirst('.sec', data.timer.el);
    let min = dom.findFirst('.min', data.timer.el);
    let hours = dom.findFirst('.hours', data.timer.el);
    if (data.timer.sec + 1 === 60) {
      data.timer.min = data.timer.min + 1;
      data.timer.sec = 0;
    } else {
      data.timer.sec = data.timer.sec + 1;
    }
    if (data.timer.min === 60) {
      data.timer.hours = data.timer.hours + 1;
      data.timer.min = 0;
      data.timer.sec = 0;
    }
    if (data.timer.hours) {
      if (hours) {
        hours.innerHTML = data.timer.hours < 10 ? `0${data.timer.hours}` : data.timer.hours;
      } else {
        hours = createHoursSpan({ data });
        min.parentNode.insertBefore(hours, min);
      }
    }
    sec.innerHTML = data.timer.sec < 10 ? `0${data.timer.sec}` : data.timer.sec;
    min.innerHTML = data.timer.min < 10 ? `0${data.timer.min}` : data.timer.min;

    data.timer.inSeconds++;
  }, 1000);
}










const getEls = ({ els, container }) => {
  els.beginTest = dom.findFirst('#beginTestBtn', container);
  els.countQuest = dom.findFirst('#countQuest', container);
  els.countQuestWrap = dom.findFirst('#countQuestWrap', container);
  els.questTitle = dom.findFirst('#questTitle', container);
  els.questFormContainer = dom.findFirst('#questFormContainer', container);
  els.questContainer = dom.findFirst('#questContainer', container);
  els.imgCol = dom.findFirst('.img-col', container);
  els.testWrap = dom.findFirst('.has-test', container);
  els.questRow = container.parentNode;
}











const createQuizHTML = ({ data }) => {
  let html = (

    <div id="jsQuiz" className="has-preloader">

      <div className="row clearfix center-row">
        <div className="col-lg-12 desc-col">
        </div>
      </div>


      <div className="has-test">
        <div className="row test-row">
          <div className="count-quest-wrap mb-0">
            <div className="count-quest like-btn" id="countQuestWrap">
              <span id="countQuest">{data.questions.length} вопросов</span>
            </div>
          </div>
          <div className="col-lg-2 mb-0"></div>
          <div className="col-lg-8 mb-0 ">
            <div className="test-img md-full-content img-col">
              <img src={data.intro.image} alt="test" />
            </div>
          </div>
          <div className="col-lg-2 mb-0"></div>
        </div>


        <div className="row quest-row hidden has-preloader" id="questContainer">
          <div className="col-lg-3 col-sm-1 mb-0"></div>
          <div className="col-lg-6 col-sm-10 mb-0 quest-container">
            <h3 className="art-title-lg question-title" id="questTitle"></h3>
            <div className="form-container" id="questFormContainer">

            </div>
          </div>
          <div className="col-lg-3 col-sm-1 mb-0"></div>
        </div>

        <div className="row controls-row">
          <div className="col-lg-12 mb-0">
            <div className="btn-row center">
              <button type="button" className="btn red begin-test-btn" id="beginTestBtn">Участвовать в викторине</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );


  if (data.intro.text) {
    dom.findFirst('.desc-col', html).innerHTML = data.intro.text;
  }
  if (data.intro.image) {
    let img = data.intro.image;
    dom.findFirst('.img-col', html).innerHTML = `<img src="${img}" alt="quiz">`;
  }

  return html;
}






