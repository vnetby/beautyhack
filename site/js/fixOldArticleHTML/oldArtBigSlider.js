import { DOM } from "../DOM";
import { React } from "../React";
import { artBigSlider, bigSlider } from "../sliders";

let dom = new DOM;

export const oldArtBigSlider = wrap => {
  let container = dom.getContainer(wrap);
  if (!container) return;
  let body = dom.findFirst('.art-body', container);
  if (!body) return;

  let sliders = dom.findAll('.gal-in-content', body);
  if (!sliders || !sliders.length) return;


  sliders.forEach(slider => {
    let figures = dom.findAll('figure', slider);
    if (figures && figures.length) {
      initSliderWithCaption({ figures, slider });
    } else {
      initBigSlider({ slider });
    }
  });

  artBigSlider(body);
  bigSlider(body);
}



const initSliderWithCaption = ({ figures, slider }) => {
  // console.log(figures);
  let sliderHTML = bigSliderFigureHTMLv2({ figures });
  slider.parentNode.replaceChild(sliderHTML, slider);
}



const initBigSlider = ({ slider }) => {
  let images = dom.findAll('img', slider);
  let newSlider = bigSliderHTML({ images });
  slider.parentNode.replaceChild(newSlider, slider);
}




const bigSliderHTML = ({ images }) => {
  let slider = <div className="art-big-slider full-slider slick over-container"></div>;

  images.forEach(img => {
    slider.appendChild(
      <div className="slick-item">
        <img src={img.src} alt={img.alt ? img.alt : 'big slider image'} />
      </div>
    );
  });

  return slider;
}


const bigSliderFigureHTMLv2 = ({ figures }) => {
  let slider = <div className="art-big-slider full-slider slick over-container big-slider-caption"></div>;

  figures.forEach(figure => {
    let img = dom.findFirst('img', figure);
    let caption = dom.findFirst('figcaption', figure);
    caption = caption ? caption.innerHTML : '';
    if (!img) return;
    slider.appendChild((
      <div className="slick-item">
        <img src={img.src} alt={img.alt ? img.alt : 'big slider image'} />
        <div className="slider-caption">{caption}</div>
      </div>
    ));
  });

  return slider;
}

const bigSliderFigureHTML = ({ figures }) => {
  let newSlider = <div className="big-slider-col"></div>;

  let slides = <div className="big-slider slick over-container"></div>;

  figures.forEach(figure => {
    let img = dom.findFirst('img', figure);
    let caption = dom.findFirst('figcaption', figure);
    caption = caption ? caption.innerHTML : '';

    slides.appendChild((
      <div className="slick-item overlay-bottom">
        <img className="object-cover" src={img.src} alt={img.alt ? img.alt : 'slider'} />
        <div className="slick-content">
          <div className="slick-title fs-lg">
            {caption}
          </div>
        </div>
      </div>
    ));
  });

  newSlider.appendChild(slides);
  newSlider.appendChild((
    <div className="slick-arrows-container">
    </div>
  ));
  newSlider.appendChild((
    <div className="slick-dots-container">
    </div>
  ));

  return newSlider;
}