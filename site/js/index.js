import '@babel/polyfill';

import '../css/main.less';


window.BH = {};
window.BH.mobile = document.body.dataset.mobile || 576;
window.BH.tablet = document.body.dataset.tablet || 992;
window.BH.dektop = document.body.dataset.desktop || 1280;

window.BH.jsInfoBlockBreakpoint = 'tablet';
window.BH.headerBreakpoint = 'tablet';

$.fancybox.defaults.smallBtn = false;
$.fancybox.defaults.touch = false;


import { objectFit } from './ie_fix.js';

import { addBrowserClass } from './browserDetect.js';

addBrowserClass();

import { Header } from './Header/index.js';

import { initSliders } from './sliders.js';

import { showPassword } from './Forms/index.js';

import { loginModal, subscribeModal, dismissModal } from './Modals/index.js';

import { Tabs } from './Tabs.js';

import { ArticlePage } from './ArticlePage/index.js';

import { AjaxImage } from './AjaxImage.js';

import { JsInfoBlock } from './JsInfoBlock.js';

import { AjaxForm } from './AjaxForm.js';

import { AjaxSearch } from './AjaxSearch.js';

import { ArtFooter } from './ArtFooter.js';

import { AjaxSaveBookmarks } from './AjaxSaveBookmarks.js';

import { AjaxBattle } from './AjaxBattle.js';

import { LoadPreviewImage } from './LoadPreviewImage.js';

import { AjaxTest } from './AjaxTest.js';

import { AjaxQuiz } from './AjaxQuiz.js';

import { FormValidate } from './FormValidate.js';

import { AnimateClick } from './AnimateClick.js';

import { artLoopBanners } from "./artLoopBanners";


export const dynamicScripts = (container) => {
  objectFit(container);
  new AjaxImage(container);
  initSliders(container);
  showPassword(container);
  new JsInfoBlock(container);
  new AjaxForm(container);
  new ArtFooter(container);
  new AjaxSaveBookmarks(container);
  new AjaxBattle(container);
  new LoadPreviewImage(container);
  new AjaxTest(container);
  new AjaxQuiz(container);
  dismissModal(container);
  new FormValidate(container);
  artLoopBanners(container);
}



export const staticScripts = () => {
  new Header();
  loginModal();
  subscribeModal();
  // new Tabs('.list-articles.has-tabs');
  // new Tabs('.list-authors.has-tabs');
  new ArticlePage;
  new AjaxSearch;
  // new AnimateClick({
  //   excludeTags: [],
  //   duration: 500
  // });
}


staticScripts();

dynamicScripts();
