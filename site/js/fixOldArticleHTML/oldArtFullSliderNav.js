import { DOM } from "../DOM";
import { React } from "../React";
import { artFullSliderNav } from "../sliders";

let dom = new DOM;

export const oldArtFullSliderNav = wrap => {
  let container = dom.getContainer(wrap);
  if (!container) return;

  let body = dom.findFirst('.art-body', container);
  if (!body) return;

  let sliders = dom.findAll('.gallery', body);
  if (!sliders || !sliders.length) return;

  sliders.forEach(slider => init({ slider }));

  artFullSliderNav(body);
}



const init = ({ slider }) => {
  let big = dom.findFirst('.big_img', slider);
  if (!big) return;
  let thumb = dom.findFirst('.thumbs', slider);
  if (!thumb) return;

  let bigImages = dom.findAll('img', big);
  if (!bigImages || !bigImages.length) return;

  let thumbs = dom.findAll('img', thumb);
  if (!thumbs || !thumbs.length) return;

  let newSlider = bigSliderHTML({ bigImages, thumbs });

  slider.parentNode.replaceChild(newSlider, slider);
}





const bigSliderHTML = ({ bigImages, thumbs }) => {
  let slider = <div className="art-full-slider-nav over-container"></div>;
  let big = <div className="slider-preview full-slider"></div>;
  let thumb = <div className="slider-nav"></div>;

  bigImages.forEach(img => {
    big.appendChild(
      <div className="slick-item">
        <img src={img.src} alt={img.alt ? img.alt : 'slider image'} />
      </div>
    );
  });

  thumbs.forEach(img => {
    thumb.appendChild(
      <div className="slick-item">
        <img src={img.src} alt={img.alt ? img.alt : 'slider image'} />
      </div>
    );
  });
  slider.appendChild(big);
  slider.appendChild(thumb);
  return slider;
}