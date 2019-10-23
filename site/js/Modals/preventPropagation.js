import { domToArr } from '../ie_fix.js';

export const preventPropagation = () => {
  let containers = domToArr(document.querySelectorAll('.fancybox-container'));
  containers.forEach(container => {
    container.addEventListener('click', e => {
      e.stopPropagation();
    });
  });
}
