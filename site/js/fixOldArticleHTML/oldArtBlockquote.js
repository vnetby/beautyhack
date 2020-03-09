import { DOM } from "../DOM/DOM";
import { React } from "../React";

const dom = new DOM;

export const oldArtBlockquote = wrap => {
  let container = dom.getContainer(wrap);
  if (!container) return;


  let quotes = dom.findAll('.main-quote', container);

  if (!quotes || !quotes.length) return;

  quotes.forEach(item => {
    setBlockQuote({ item });
  });
}





const setBlockQuote = ({ item }) => {
  let content = dom.findFirst('.main-quote-content', item);
  if (!content) return;

  content = content.innerHTML;

  let blockQuote = createBlockquote({ content });

  item.parentNode.replaceChild(blockQuote, item);
}





const createBlockquote = ({ content }) => {
  return (
    <div className="citation-wrap">
      <div className="dashed-border citation pt-4 pb-4 mb-4 center">
        <h3 className="fs-l mb-4">{content}</h3>
      </div>
    </div>

  );
}