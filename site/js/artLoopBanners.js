import { DOM } from "./DOM";
import { React } from "./React";

export const artLoopBanners = wrap => {
  let dom = new DOM;

  let container = dom.getContainer(wrap);
  let section = dom.findFirst('.art-js-banners', container);

  if (!section) {
    return;
  }

  let banners = section.dataset.banners;

  if (!banners) {
    noBanner({ section, dom });
    return;
  }

  banners = JSON.parse(section.dataset.banners);

  if (!banners || !banners.length) {
    noBanner({ section, dom });
    return;
  }

  let cards = dom.findAll('.art-card-col', section);

  if (!cards || !cards.length) {
    noBanner({ section, dom });
    return;
  }

  hasBanner({ section, dom });

  console.log(banners, cards);

  if (banners[0] && cards[0]) {
    appendBanner({ section, index: 0, src: banners[0], card: cards[0] });
  }

  if (banners[1] && cards[4]) {
    appendBanner({ section, index: 1, src: banners[1], card: cards[4] });
  }

  if (banners[2] && cards[5]) {
    appendBanner({ section, index: 2, src: banners[2], card: cards[5] });
  }

  if (banners[3] && cards[9]) {
    appendBanner({ section, index: 3, src: banners[3], card: cards[9] });
  }

  if (banners[4] && cards[10]) {
    appendBanner({ section, index: 4, src: banners[4], card: cards[10] });
  }
}


const appendBanner = ({ section, index, src, card }) => {
  let banner = createBanner({ index, src });
  console.log(banner);
  section.insertBefore(banner, card);
}

const noBanner = ({ section, dom }) => {
  dom.removeClass(section, 'has-banner');
  dom.addClass(section, 'no-banner');
}


const hasBanner = ({ section, dom }) => {
  dom.removeClass(section, 'no-banner');
  dom.addClass(section, 'has-banner');
}


const createBanner = ({ index, src }) => {
  switch (index) {
    case 0:
      return (
        <div class="banner display-mobile col-lg-12 row-banner" data-index="0">
          <a href="#">
            <img src={src} alt="preview image" />
          </a>
        </div>
      );
      break;

    case 1:
      return (
        <div class="art-card-col display-desktop display-tablet" data-index="1">
          <div class="card banner">
            <div class="shadow-both">
              <a href="#" class="thumb mb-0 hover-overlay">
                <img src={src} alt="preview image" />
              </a>
            </div>
          </div>
        </div>
      );
      break;

    case 2:
      return (
        <div class="banner display-mobile col-lg-12 row-banner" data-index="2">
          <a href="#">
            <img src={src} alt="preview image" />
          </a>
        </div>
      );
      break;

    case 3:
      return (
        <div class="col-lg-12 banner display-desktop display-tablet row-banner" data-index="3">
          <a href="#" class="dashed-shadow">
            <span class="shadow"></span>
            <img src={src} alt="preview image" />
          </a>
        </div>
      );
      break;

    case 4:
      return (
        <div class="banner display-mobile col-lg-12 row-banner" data-index="4">
          <a href="#" class="dashed-shadow">
            <span class="shadow"></span>
            <img src={src} alt="preview image" />
          </a>
        </div>
      );
      break;
  }
} 
