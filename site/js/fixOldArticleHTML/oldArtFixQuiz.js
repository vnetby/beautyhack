import { DOM } from "../DOM/DOM";
let dom = new DOM;
import { React } from "../React";


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
  getEls({ els, container });

  data.timer = {};
  data.timer.hours = 0;
  data.timer.min = 0;
  data.timer.sec = 0;
  data.timer.el = createTimer({ data });

  data.trueAnswers = 0;

  initQuiz({ els, data });
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

// const createHoursSpan = ({ data }) => {
//   let el = document.createDocumentFragment();
//   el.appendChild(<span className="hours">{data.timer.hours < 10 ? `0${data.timer.hours}` : data.timer.hours}</span>);
//   el.appendChild(<span className="div">:</span>);
//   return el;
// }


const initQuiz = ({ els, data }) => {
  els.beginTest.addEventListener('click', e => {
    e.preventDefault();
    startQuiz({ els, data });
  });
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
  initAnswers({ els, data });
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
      <div class="form-row test-radio">
        <input type="radio" name={`questAnswer${data.current}`} id={`questAnswer${data.current}${i}`} />
        <label className="quest-answer-input" for={`questAnswer${data.current}${i}`} data-quest={data.current} data-answer={i}>
          {answer.text}
        </label>
        <span class="ico wrong-ico test-ico">
        </span>
        <span class="ico true-ico test-ico">
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
  }, 1000);
}





const getEls = ({ els, container }) => {
  els.beginTest = dom.findFirst('#beginTestBtn', container);
  els.countQuest = dom.findFirst('#countQuest', container);
  els.countQuestWrap = dom.findFirst('#countQuestWrap', container);
  els.questTitle = dom.findFirst('#questTitle', container);
  els.questFormContainer = dom.findFirst('#questFormContainer', container);
  els.questContainer = dom.findFirst('#questContainer', container);
}





const createQuizHTML = ({ data }) => {
  let html = (

    <div id="jsQuiz" className="has-preloader" data-ajax="/_request.php?action=js_quiz" data-quiz="quizId">

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