import { DOM } from "../DOM/DOM";
let dom = new DOM;
import { React } from "../React";

// const RESULT_AJAX_URL = '/_request.php?action=js_quiz';
const RESULT_AJAX_URL = '/assets/ajax/quiz_v2_ajax.php';

export const oldArtFixQuiz = wrap => {
  let container = dom.getContainer(wrap);
  if (!container) return;

  defineFake();

  if (typeof quiz_v2_data === 'undefined') return;

  let item = dom.findFirst('#quiz_v2_content', container);
  if (!item) return;

  let art = dom.findFirst('.art-content', container);
  if (!art) return;

  item.parentNode.removeChild(item);
  dom.addClass(document.body, 'has-quiz');

  let pLeft = dom.findFirst('.p-left');
  if (pLeft) dom.removeClass(pLeft, 'p-left');

  init({ art, container });
}




const defineFake = () => {
  window.quiz_v2_data = {
    "quiz_authorization": false,
    "intro": {
      "name": "Викторина: Угадай, у кого из звезд накладная челка",
      "text": "Накладная челка - гениальнейшее изобретение современной бьюти-индустрии. Теперь не нужно жалеть о внезапном порыве в кресле стилиста: захотел изменений или нужен новый образ для выхода - просто используй ее для разового эффекта. При этом, челки настолько индивидуально подбираются, что отличить их от настоящих практически невозможно. Или возможно? А вот это давайте и проверим.",
      "image": "https://new.beautyhack.ru/assets/images/2019/09/bangs.jpg"
    }, "questions": [{ // Question 1
      "question": "Анна Хилькевич решилась на смену имиджа или просто примерила новый образ?",
      "image": "https://new.beautyhack.ru/assets/images/2019/09/bangs_khilkevich_fake.jpg",
      "answers": [
        {
          "text": "Такую челку не подделаешь! ",
          "isCorrect": false
        }, {
          "text": " Нет, это фейк",
          "isCorrect": true
        }
      ]
    }, { // Question 1
      "question": "А вот у Анастасии Решетовой, кажется, точно своя. Или нет?",
      "image": "https://new.beautyhack.ru/assets/images/2019/09/bangs_reshetova_fake.jpg",
      "answers": [
        {
          "text": "Своя, да! ",
          "isCorrect": false
        }, {
          "text": " Нуууууу, может, и не своя",
          "isCorrect": true
        }
      ]
    }, { // Question 1
      "question": "Объемная челка Белля Хадид вызывает подозрения: своя ли?",
      "image": "https://new.beautyhack.ru/assets/images/2019/09/bangs_bella_fake.jpg",
      "answers": [
        {
          "text": "Ну здесь-то точно своя ",
          "isCorrect": true
        }, {
          "text": " А вот и нет",
          "isCorrect": false
        }
      ]
    }, { // Question 1
      "question": "Эмма Уотсон на премии «Оскар» в 2018 году появилась с новой прической. Задорная модная челка - только на выход или постоянно «прописалась» в прическе?",
      "image": "https://new.beautyhack.ru/assets/images/2019/09/bangs_emma.jpg",
      "answers": [
        {
          "text": " Похоже, что накладная ",
          "isCorrect": false
        }, {
          "text": " Все же обрезала челку",
          "isCorrect": true
        }
      ]
    }, { // Question 1
      "question": "Карли Клосс неохотно меняет прическу, но каждой девушке хочется однажды перемен. Это случай Карли?",
      "image": "https://new.beautyhack.ru/assets/images/2019/09/bangs_karliekloss_fake.jpg",
      "answers": [
        {
          "text": " Да нет, разовая акция ",
          "isCorrect": true
        }, {
          "text": " Точно отрезала, так накладную не зашифруешь!",
          "isCorrect": false
        }
      ]
    }, { // Question 1
      "question": "У Саши Савельевой после рождения первенца времени на укладку волос нет совсем, а челка - отличный способ выглядеть стильно, не экспериментируя с длиной и цветом. Или нет?",
      "image": "https://new.beautyhack.ru/assets/images/2019/09/bangs_savelyeva.jpg",
      "answers": [
        {
          "text": " Решиться на челку с младенцем?! Только если на накладную ",
          "isCorrect": true
        }, {
          "text": " Точно своя!",
          "isCorrect": false
        }
      ]
    }, { // Question 1
      "question": "Лили Коллинз с челкой очень похожа на Одри Хепберн, поэтому актриса и выбрала такую прическу",
      "image": "https://new.beautyhack.ru/assets/images/2019/09/bangs_lilycollins_fake.jpg",
      "answers": [
        {
          "text": " Да, и ей правда очень идет ",
          "isCorrect": false
        }, {
          "text": " Видно ведь, что челка - ненастоящая",
          "isCorrect": true
        }
      ]
    }, { // Question 1
      "question": "Тейлор Свифт носит свою челку или накладную?",
      "image": "https://new.beautyhack.ru/assets/images/2019/09/bangs_swift.jpg",
      "answers": [
        {
          "text": " Это легкий вопрос: кто-то помнит ее без челки вообще? ",
          "isCorrect": true
        }, {
          "text": " Накладная",
          "isCorrect": false
        }
      ]
    }, { // Question 1
      "question": "Хайди Клум и идеальнейшая форма стрижки на все времена: глубокая густая челка очень идет модели",
      "image": "https://new.beautyhack.ru/assets/images/2019/09/bangs_klum.jpg",
      "answers": [
        {
          "text": " Но поддерживать ее в реальной жизни непросто, поэтому Хайди просто использовала накладную для эффектного выхода ",
          "isCorrect": false
        }, {
          "text": " Все правда!",
          "isCorrect": true
        }
      ]
    }, { // Question 1
      "question": "Кендал Дженнер использовала беспроигрышный вариант: высокий пучок и густую челку. Угадаете: своя или накладная?",
      "image": "https://new.beautyhack.ru/assets/images/2019/09/bangs_kendalljenner_fake.jpg",
      "answers": [
        {
          "text": " Ммм, точно своя! ",
          "isCorrect": false
        }, {
          "text": " Накладная",
          "isCorrect": true
        }
      ]
    }]
  };
}








const init = ({ art, container }) => {
  let data = quiz_v2_data;
  let html = createQuizHTML({ data });

  let wrap = art.querySelector('.col-lg-12');
  wrap.innerHTML = '';
  wrap.appendChild(html);


  let els = {};
  getEls({ els, container: wrap });

  loadImages({ els, data });

  data.userName = 'someName';
  data.quizID = 'someQuizInd';
  data.modxUserId = 'modxUserId';

  checkUserLoginData({ els, data });

  data.timer = {};
  data.timer.hours = 0;
  data.timer.min = 0;
  data.timer.sec = 0;
  data.timer.inSeconds = 0;
  data.timer.el = createTimer({ data });

  data.trueAnswers = 0;

  initQuiz({ els, data });
}




const checkUserLoginData = ({ els, data }) => {
  let isLogin;

  if (data.quiz_authorization) {
    isLogin = false;
  } else {
    isLogin = true;
  }

  // if ($('.top_nav .welc').length > 0) {
  //   isLogin = true;
  //   data.userName = $('.top_nav .welc span').html().split(' ');
  //   data.userName = userName[1];
  // } else {
  //   data.userName = 'Гость';
  // }

  data.isUserLogin = true;
}




const loadImages = ({ els, data }) => {
  data.questions = data.questions.map(item => { item.image = item.image ? <img src={item.image} alt="preview" /> : null; return item; });
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
    <div class="row">
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
          {answer.text}
        </label>
        <span className="ico wrong-ico test-ico">
        </span>
        <span className="ico true-ico test-ico">
        </span>
      </div>
    );
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
  console.log(data);

  if (!data.isUserLogin) {
    displayLoginForm({ els, data });
    return;
  } else {
    dom.addPreloader(els.testWrap);
    sendResult({ els, data })
      .then(res => {
        console.log(res);
        // window.location.search = '?userid=' + data.modxUserId;
      });

    // let fakeRespone = { status: '{"status": [{"name":"Гость","score":"9","seconds":"43"},{"name":"Гость","score":"9","seconds":"52"},{"name":"Гость","score":"9","seconds":"61"},{"name":"Гость","score":"9","seconds":"63"},{"name":"Гость","score":"9","seconds":"63"}]}' };
    // let status = JSON.parse(fakeRespone.status);
    // let resHTML = createResultHTML({ els, data, status });
  }

}




const sendResult = ({ els, data }) => {
  return new Promise((resolve, reject) => {

    let http = new XMLHttpRequest();

    let requesturl = RESULT_AJAX_URL + '?name=' + encodeURIComponent(data.userName) + '&quizID=' + encodeURIComponent(data.quizID) + '&modxuserid=' + encodeURIComponent(data.modxUserId) + '&score=' + encodeURIComponent(data.trueAnswers) + '&seconds=' + encodeURIComponent(data.timer.inSeconds) + '&totalscore=' + encodeURIComponent(data.total) + '&method=update&special=ofjshfsgufdirhfewgwe37gefhurqv3';

    http.open('GET', requesturl);

    console.log(requesturl);

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







const createResultHTML = ({ res, data, status }) => {
  let html = (
    <div className="has-test mb-5">
      <div className="row test-result-row center-row">
        <div className="col-lg-12 test-result-col">

          <div className="border-red">
            <div className="test-result-slider slick black-dots" id="testResult">


              <div className="slick-item test-res-container">
                <h3 className="fs-l red res-title">Поздравляем!</h3>
                <h4 className="fs-xl mb-0">Результаты викторины</h4>
                <div className="quiz-res-text" id="testTextResult">Wow!  Вот это интуиция! От вас ничего не утаишь.<br /> “Битва Экстрасенсов” просто отдыхает</div>
                <div className="test-res-review">
                  <div>
                    <span className="review-title">Результат</span>
                    <span className="review-val" id="resCount">8/10</span>
                  </div>
                  <div>
                    <span className="review-title">Время</span>
                    <span className="review-val" id="resTime">00:37</span>
                  </div>
                </div>
              </div>




              <div className="slick-item test-res-container">
                <h3 className="fs-l red res-title">Рейтинг</h3>
                <table className="rate-table">
                  <thead>
                    <tr>
                      <th>Имя</th>
                      <th>Результат</th>
                      <th>Время</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.Александра</td>
                      <td>10/10</td>
                      <td>01:13</td>
                    </tr>
                    <tr>
                      <td>2.Екатерина</td>
                      <td>10/10</td>
                      <td>01:13</td>
                    </tr>
                    <tr>
                      <td>3.Светлана</td>
                      <td>10/10</td>
                      <td>01:13</td>
                    </tr>
                    <tr>
                      <td>4.Анастасия</td>
                      <td>10/10</td>
                      <td>01:13</td>
                    </tr>
                    <tr>
                      <td>5.Гость</td>
                      <td>10/10</td>
                      <td>01:13</td>
                    </tr>
                  </tbody>
                </table>
              </div>



            </div>
          </div>

        </div>
      </div>
    </div>
  );
}