import { DOM } from '../DOM';

const dom = new DOM;

export const dismissModal = container => {
  let wrap = dom.getContainer ( container );

  let btns = dom.findAll('.dismiss-modal', wrap );

  if ( !btns.length ) return;

  btns.forEach ( btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      $.fancybox.close();
    })
  })
}
