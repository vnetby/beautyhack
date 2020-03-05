import { DOM } from "../DOM/DOM";
let dom = new DOM;

export const oldArtFixBanner = wrap => {
  let container = dom.getContainer(wrap);
  if (!container) return;

  let art = dom.findFirst('.art-content', container);
  if (!art) return;


  let banner = dom.findFirst('.banner.right', art);
  if (!banner) return;

  let div = dom.create('div', 'clear-both mb-15');

  let next = banner.nextSibling;

  let allowTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

  while (typeof next !== 'object' || !next.tagName || allowTags.indexOf(next.tagName) > -1) {
    next = next.nextSibling;
    if (!next) return;
  }
  banner.parentNode.insertBefore(div, next);
}