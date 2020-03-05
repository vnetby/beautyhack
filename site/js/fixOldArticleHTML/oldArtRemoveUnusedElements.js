import { DOM } from "../DOM/DOM";

const dom = new DOM;

export const oldArtRemoveUnusedElements = wrap => {
  let container = dom.getContainer(wrap);
  if (!container) return;

  // removeContainerImage({ container });
}




const removeContainerImage = ({ container }) => {
  let items = dom.findAll('.container-image', container);
  if (items && items.length) {
    items.forEach(item => item.parentNode.removeChild(item));
  }
}