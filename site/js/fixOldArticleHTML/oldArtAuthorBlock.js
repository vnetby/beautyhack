import { DOM } from "../DOM";
import { React } from "../React";

let dom = new DOM;

export const oldArtAuthorBlock = wrap => {
  let container = dom.getContainer(wrap);
  if (!container) return;

  let body = dom.findFirst('.art-body', container);
  if (!body) return;

  let blocks = dom.findAll('.expert_quote', body);

  if (!blocks || !blocks.length) return;

  blocks.forEach(block => {
    init({ block });
  });
}


const init = ({ block }) => {
  let newBlock = <div className="author-block"></div>;
  let blockHead = <div className="author-head"></div>;
  let blockBody = <div className="author-content"></div>;

  let photo = dom.findFirst('.expert_quote_img', block);
  if (photo) {
    // dom.addClass(photo, 'avatar');
    photo.className = 'avatar';
    newBlock.appendChild(photo);
  }

  let name = dom.findFirst('.name', block);
  if (name) {
    blockHead.appendChild(<h4 className="art-title-md">{name.textContent}</h4>);
    name.parentNode.removeChild(name);
  }

  let subName = dom.findFirst('.post', block);
  if (subName) {
    blockHead.appendChild(<h4 className="art-sub-title">{subName.textContent}</h4>);
    subName.parentNode.removeChild(subName);
  }

  blockBody.innerHTML = block.innerHTML;

  newBlock.appendChild(blockHead);
  newBlock.appendChild(blockBody);

  block.parentNode.replaceChild(newBlock, block);
}