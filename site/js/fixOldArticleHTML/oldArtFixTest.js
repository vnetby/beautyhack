import { DOM } from "../DOM";
import { React } from "../React";

const JSON_VAR_NAME = 'quizJSON';

let dom = new DOM;

export const oldArtFixTest = wrap => {
  let container = dom.getContainer(wrap);
  if (!container) return;

  let quiz = dom.findFirst('.slickQuiz-wrapper', wrap);
  if (!quiz) return;

  console.log('quiz element', quiz);
  
  if (quiz) {
    setMarkup({ container });
    init({ container: quiz.parentNode });
  }
}




const init = ({ container }) => {

  let data = getQuizData({ container });
  if (!data) return;

  let localResult = getLocalResult();

  if (localResult) {
    let testContainer = dom.findFirst('.slickQuiz-wrapper', container);
    testContainer = testContainer.parentNode;
    setResHTML({ html: localResult, isString: true, testContainer: testContainer });
    return;
  }

  let html = creaeteTestHTML({ data });

  container.innerHTML = '';
  container.appendChild(html);

  data.res = {};

  let els = getElements({ container });

  initTest({ els, data });
}





const setMarkup = ({ container }) => {
  dom.addClass(container, 'test-article');

  let sticky = dom.findFirst('.socials-sticky', container);
  if (sticky) {
    dom.css(sticky, { display: 'none' });
  }

  let pLeft = dom.findFirst('.row.p-left', container);
  if (pLeft) {
    dom.removeClass(pLeft, 'p-left');
  }
}





const getElements = ({ container }) => {
  let res = {};
  res.container = container;
  res.beginBtn = dom.findFirst('#beginTestBtn', container);
  res.questFormContainer = dom.findFirst('#questFormContainer', container);
  res.controls = dom.findFirst('#controlsContainer', container);
  res.nextBtn = createNextBtn();
  res.countQuestions = dom.findFirst('#countQuestions', container);
  res.questTitle = dom.findFirst('#questionTitle', container);
  res.questContainer = dom.findFirst('#questContainer', container);
  res.testImg = dom.findFirst('.test-img', container);
  res.testContainer = dom.findFirst('.has-test', container);
  return res;
}







const initTest = ({ els, data }) => {
  els.beginBtn.addEventListener('click', e => {
    e.preventDefault();
    startTest({ els, data });
  })
}






const startTest = ({ els, data }) => {
  data.current = 0;
  data.total = data.questions.length;
  removeControls({ els });
  addQuestion({ els, data });
  initNextBtn({ els, data });
  setCountQuestion({ els, data });
}







const initNextBtn = ({ els, data }) => {
  els.nextBtn.addEventListener('click', e => {
    e.preventDefault();
    if (data.finish) return;



    setQuestResult({ els, data });

    data.current = data.current + 1;
    addQuestion({ els, data });
    hideNextBtn({ els, data });
  });
}




const setQuestResult = ({ els, data }) => {

  let inputs = dom.findAll('.answer-radio', els.questContainer);

  inputs.forEach(input => {

    if (!input.checked) return;

    let quest = parseInt(input.dataset.quest);
    let answer = parseInt(input.dataset.answer);
    let key = data.questions[quest].a[answer].answerType;

    data.res[key] = data.res[key] ? data.res[key] + 1 : 1;

  });

}








const creaeteTestHTML = ({ data }) => {
  console.log(data);
  let res = (
    <div className="has-test has-preloader" id="jsTest">


      <div className="row center-row test-desc">
        <div className="col-lg-12 display-mobile">
          <div className="banner">
            <a href="#" className="dashed-shadow">
              <span className="shadow"></span>
              <div className="ajax-image" data-sm="http://beautyhack2.dev.vnetby.net//img/true_banners/banner_300_250.jpg">
                <img src="http://beautyhack2.dev.vnetby.net//img/true_banners/banner_300_250.jpg" />
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-12 test-desc"></div>
        <div className="col-lg-12 display-mobile">
          <div className="banner">
            <a href="#" className="dashed-shadow">
              <span className="shadow"></span>
              <div className="ajax-image" data-sm="http://beautyhack2.dev.vnetby.net//img/true_banners/banner_300_250.jpg">
                <img src="http://beautyhack2.dev.vnetby.net//img/true_banners/banner_300_250.jpg" />
              </div>
            </a>
          </div>
        </div>
      </div>


      <div className="row test-row center-row">
        <div className="count-quest-wrap mb-0">
          <span className="count-quest like-btn" id="countQuestions">{data.questions.length} вопросов</span>
        </div>
        <div className="col-lg-12 mb-0">
          <div className="test-img md-full-content">
          </div>
        </div>
      </div>

      <div className="row quest-row hidden" id="questContainer">
        <div className="col-lg-3 col-sm-1 mb-0"></div>
        <div className="col-lg-6 col-sm-10 mb-0 quest-container">
          <h3 className="art-title-lg question-title" id="questionTitle"></h3>
          <div className="form-container" id="questFormContainer">

          </div>
        </div>
        <div className="col-lg-3 col-sm-1 mb-0"></div>
      </div>

      <div className="row controls-row">
        <div className="col-lg-12 mb-0">
          <div className="btn-row center" id="controlsContainer">
            <button type="button" className="btn red begin-test-btn" id="beginTestBtn">Начать тест</button>
          </div>
        </div>
      </div>

    </div>
  );


  let desc = dom.findFirst('.test-desc', res);
  if (data.info.main) {
    let content = data.info.main;
    // content = content.replace(/src=\'/, "src=\'https://new.beautyhack.ru/");
    content = content.replace(/<[\s]*img[^>]+>/gsu, "");
    desc.innerHTML = content;
  }


  let img = dom.findFirst('.test-img', res);
  if (data.info.results) {
    let item = data.info.results;
    // item = item.replace(/src=\'/, "src=\'https://new.beautyhack.ru/");
    img.innerHTML = item;
  }


  return res;
}



const createNextBtn = () => {
  return (<button type="button" className="btn black next-question-btn" id="nextQuestionBtn">Дальше</button>);
}



const removeControls = ({ els }) => {
  els.controls.innerHTML = '';
}





const addQuestion = ({ els, data }) => {
  if (data.current === data.total) {
    finishTest({ els, data });
    return;
  }
  setCountQuestion({ els, data });
  let quest = data.questions[data.current];
  let answers = quest.a;
  els.questTitle.innerHTML = quest.q;
  addAnswers({ els, data, answers });
  setImage({ els, data });
}





const setImage = ({ els, data }) => {
  let img = data.questions[data.current].img;
  let src = img.match(/src[\s]*=[\s]*(?:'|")([^']+)(?:'|")/);
  if (!src || !src[1]) return;
  els.testImg.innerHTML = '';
  els.testImg.innerHTML = img;
}





const getImgSrc = (img) => {
  let src = img.match(/src[\s]*=[\s]*(?:'|")([^']+)(?:'|")/);
  if (!src || !src[1]) return '';
  return src[1];
}






const setCountQuestion = ({ els, data }) => {
  els.countQuestions.innerHTML = `${data.current + 1} / ${data.total}`;
}





const hideNextBtn = ({ els, data }) => {
  if (els.controls.querySelector('.next-question-btn')) {
    dom.css(els.nextBtn, { display: 'none' });
  }
}



const addAnswers = ({ els, data, answers }) => {
  let html = document.createDocumentFragment();
  answers.forEach((answer, i) => {
    html.appendChild(createAnswerHtml({ els, data, txt: answer.option, i }));
  });
  initAnswer({ els, data, html });
  els.questFormContainer.innerHTML = '';
  els.questFormContainer.appendChild(html);
  dom.removeClass(els.questContainer, 'hidden');
}






const initAnswer = ({ els, data, html }) => {
  let inputs = dom.findAll('.answer-radio', html);
  inputs.forEach(input => {
    input.addEventListener('change', e => {
      if (data.finish) {
        e.preventDefault();
        return;
      }

      addNextBtn({ els, data });
    });
  });
}





const addNextBtn = ({ els, data }) => {
  if (els.controls.querySelector('.next-question-btn')) {
    dom.css(els.nextBtn, { display: 'block' });
  } else {
    removeControls({ els });
    els.controls.appendChild(els.nextBtn);
  }
}






const createAnswerHtml = ({ els, data, txt, i }) => {
  let str = '<div class="form-row">';
  str += `<label for="questAnswer${data.current}${i}">`;
  str += '<div class="beauty-radio">';
  str += `<input type="radio" class="answer-radio" name="questAnswer${data.current}" id="questAnswer${data.current}${i}" data-quest="${data.current}" data-answer="${i}" />`;
  str += '<span class="radio"></span>';
  str += '</div>';
  str += txt;
  str += '</label>';
  str += '</div>';
  return dom.strToDom(str);
}





const finishTest = ({ els, data }) => {
  data.finish = true;
  let a, b, c, d, e;

  a = data.res.a ? data.res.a : 0;
  b = data.res.b ? data.res.b : 0;
  c = data.res.c ? data.res.c : 0;
  d = data.res.d ? data.res.d : 0;
  e = data.res.e ? data.res.e : 0;

  let level = calculateLevel(a, b, c, d, e);

  if (level === -1) return;

  let levelImages = [
    data.info.result_level1,
    data.info.result_level2,
    data.info.result_level3,
    data.info.result_level4,
    data.info.result_level5
  ];

  let levelTexts = [
    data.info.level1,
    data.info.level2,
    data.info.level3,
    data.info.level4,
    data.info.level5
  ];

  let resText = levelTexts[level];
  let resImg = levelImages[level];

  let resHTML = createTestResultHtml({ img: resImg, text: resText });
  setResHTML({ html: resHTML, testContainer: els.container, data });
  setLocalResult(resHTML);
}







const setResHTML = ({ testContainer, data, html, isString }) => {

  if (isString) {
    testContainer.innerHTML = html;
  } else {
    testContainer.innerHTML = '';
    testContainer.appendChild(html);
  }

  let btn = dom.findFirst('.repeat-test-btn', testContainer);
  btn.addEventListener('click', e => {
    e.preventDefault();
    rmLocalResult();
    window.location.href = window.location.href;
  });
}





const getLocalResult = () => {
  let data = window.localStorage.getItem('beautyTest');
  if (!data) return false;

  data = JSON.parse(data);

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === window.location.href) {
      return data[i][1];
    }
  }

  return false;
}





const setLocalResult = (html) => {
  let data = window.localStorage.getItem('beautyTest');
  data = data ? data : [];

  data.push([window.location.href, html.innerHTML]);

  data = JSON.stringify(data);

  window.localStorage.setItem('beautyTest', data);
}





const rmLocalResult = () => {
  let data = window.localStorage.getItem('beautyTest');
  if (!data) return;

  data = JSON.parse(data);

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === window.location.href) {
      data.splice(i, 1);
      break;
    }
  }
  if (!data.length) {
    window.localStorage.removeItem('beautyTest');
    return;
  }

  data = JSON.stringify(data);
  window.localStorage.setItem('beautyTest', data);
}





const calculateLevel = (a, b, c, d, e) => {
  var answers = [];
  answers.push(a, b, c, d, e);

  if (answers.length === 0) {
    return -1;
  }

  var max = answers[0];
  var level = 0;

  for (var i = 1; i < answers.length; i++) {
    if (answers[i] > max) {
      level = i;
      max = answers[i];
    }
  }
  if ((answers[0] == answers[1]) && (level == 0)) level = 1;
  return level;
}





const getQuizData = ({ container }) => {
  return quizJSON;
}






const createTestResultHtml = ({ img, text }) => {
  let content = (
    <div className="test-result-container mb-5">

      <div className="row center-row">
        <div className="col-lg-12 content-container">
        </div>
      </div>



      <div className="row center-row-lg">
        <div className="col-lg-12">
          <div className="sm-full-content image-container">

          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-lg-12 btn-row center">
          <a href="" className="btn red repeat-test-btn" id="repeatTestBtn">Пройти еще раз</a>
        </div>
      </div>
    </div>
  );

  let src = getImgSrc(img);

  if (src) {
    let imgContainer = dom.findFirst('.image-container', content);
    imgContainer.appendChild((
      <a href={src} data-fancybox="">
        <img src={src} alt="test image" className="full-width" />
      </a>
    ));
  }

  if (text) {
    let textContainer = dom.findFirst('.content-container', content);
    textContainer.innerHTML = text;
  }

  return content;
}