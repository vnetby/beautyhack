import { DOM } from './DOM/index.js';

export const initAjaxBattle = wrap => {
  let dom = new DOM;
  let container = dom.getContainer(wrap);

  let items = dom.findAll('.ajax-battle-item', container);

  if (!items || !items.length) {
    new AjaxBattle(wrap);
  } else {
    items.forEach(item => {
      new AjaxBattle(item);
    });
  }
}


export class AjaxBattle extends DOM {
  constructor(container) {
    super();

    let wrap = this.getContainer(container);

    if (!wrap) return;

    this.container = this.findFirst('.js-battle', wrap);

    if (!this.container) return;

    this.url = this.container.dataset.ajax;

    this.getElements();

    this.getSelected();

    this.timerVoteRequest = 1000;

    if (this.voteBtn) {
      this.initVoteBtn();
    }


    if (this.votedBtn) {
      this.vote(true);
    }

    this.initSelectComp();

    this.checkLocalStorage();
  }




  checkLocalStorage() {
    let id = this.container.dataset.id;
    if (!id) return;
    id = parseInt(id);

    let local = window.localStorage.getItem('battleVote');
    local = local ? JSON.parse(local) : {};

    for (let key in local) {
      if (parseInt(key) === id) {
        this.setVoteFromLocal(local[key]);
        return;
      }
    }
    return;
  }




  setLocalStorage(vote) {
    let id = this.container.dataset.id;
    if (!id) return;

    let local = window.localStorage.getItem('battleVote');
    local = local ? JSON.parse(local) : {};

    local[id] = vote;

    local = JSON.stringify(local);

    window.localStorage.setItem('battleVote', local);
  }



  setVoteFromLocal(vote) {
    if (vote === 1) {
      this.dispath(this.firstComp, 'click');
    } else {
      this.dispath(this.secondComp, 'click');
    }
    this.vote();
  }



  getElements() {
    this.firstComp = this.findFirst('#firstCompVote', this.container);
    this.secondComp = this.findFirst('#secondCompVote', this.container);

    this.voteBtn = this.findFirst('#voteBattleBtn', this.container);
    this.votedBtn = this.findFirst('#votedBattleBtn', this.container);

    this.battleProgressContainer = this.findFirst('#battleProgressContainer', this.container);
  }


  getSelected() {
    this.selected = false;
    if (this.firstComp.classList.contains('selected')) {
      this.selected = 1;
      return;
    }
    if (this.secondComp.classList.contains('selected')) {
      this.selected = 2;
      return;
    }
  }



  initVoteBtn() {
    this.voteBtn.addEventListener('click', e => {
      e.preventDefault();
      if (!this.selected) {
        $.fancybox.open('<div class="fancy-alert">Сделайте свой выбор</div>', { touch: false });
      } else {
        this.vote();
      }
    });
  }


  initSelectComp() {
    this.firstComp.addEventListener('click', this.selectComp.bind(this, 1));
    this.secondComp.addEventListener('click', this.selectComp.bind(this, 2));
  }


  selectComp(number, e) {
    e.preventDefault();
    if (this.monitoring) return;
    this.removeClass(this.firstComp, 'selected');
    this.removeClass(this.secondComp, 'selected');
    this.addClass(e.target, 'selected');
    this.selected = number;
  }



  vote(start) {
    if (!start) {
      this.replaceVoteBtn();
    }
    this.addPreloader(this.container);
    this.sendVote()
      .then(res => {
        if (!res) {
          this.removePreloader(this.container);
          return;
        }
        let obj = JSON.parse(res);
        this.percent = obj.firstPercent;
        this.addProgress();
        this.setProgress();
        this.removePreloader(this.container);
        this.setLocalStorage(this.selected);
        if (this.tryFinish(obj)) {
          return;
        }
        // this.initMonitoringVote();
      });
  }



  initMonitoringVote() {
    this.monitoring = true;
    this.monitoringVote();
  }

  monitoringVote() {
    if (this.finish) return;
    this.sendVote()
      .then(res => {
        if (res) {
          let obj = JSON.parse(res);
          this.percent = obj.firstPercent;
          this.setProgress();
          if (this.tryFinish(obj)) {
            return;
          }
        }
        setTimeout(() => {
          this.monitoringVote();
        }, this.timerVoteRequest);
      });
  }



  tryFinish(obj) {
    if (obj.finish) {
      this.finish = true;
    }
  }



  setProgress() {
    this.firstProgress.line.style.width = `${this.percent}%`;
    this.firstProgress.text.innerHTML = `${this.percent}%`;

    this.secondProgress.text.innerHTML = `${100 - this.percent}%`;
  }


  addProgress() {
    let str = '<div class="battle-progress">';

    str += '<div class="comp-1" style="width: 15%;" id="progressFirstComp">';
    str += '<span class="percent" id="percentFirstComp"></span>';
    str += '</div>';

    str += '<div class="comp-2" id="progressSecondComp">';
    str += '<span class="percent" id="percentSecondComp"></span>';
    str += '</div>';

    str += '</div>';

    let wrap = this.strToDom(str);
    this.battleProgressContainer.innerHTML = '';
    this.battleProgressContainer.appendChild(wrap);
    this.progressWrap = wrap;
    this.createProgressObject();
  }


  createProgressObject() {
    this.firstProgress = {};
    this.secondProgress = {};

    this.firstProgress.line = this.progressWrap.querySelector('#progressFirstComp');
    this.firstProgress.text = this.progressWrap.querySelector('#percentFirstComp');

    this.secondProgress.line = this.progressWrap.querySelector('#progressSecondComp');
    this.secondProgress.text = this.progressWrap.querySelector('#percentSecondComp');
  }


  sendVote() {
    let http = new XMLHttpRequest;
    let type = this.monitoring ? 'GET' : 'POST';

    http.open(type, this.url);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    let dates = this.monitoring ? null : `vote=${this.selected}`;
    http.send(dates);
    return new Promise((resolve, reject) => {
      http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {
          resolve(http.responseText);
        }
      }
    });
  }


  replaceVoteBtn() {
    let btn = this.create('button', 'btn border-black voted-battle-btn');
    btn.type = 'button';
    btn.id = 'votedBattleBtn';
    btn.innerHTML = 'Вы проголосовали';
    this.voteBtn.parentNode.replaceChild(btn, this.voteBtn);
  }
}
