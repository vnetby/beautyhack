import { DOM } from "./DOM";

export const testAdriver = (id, sets) => {
  let dom = new DOM;

  let wrap = dom.findFirst(id);
  if (!wrap) return;

  wrap.innerHTML = '<img src="/img/true_banners/banner_320_250.jpg">';
}