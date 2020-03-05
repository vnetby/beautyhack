import {domToArr} from '../ie_fix.js';

export const showPassword = () => {
    let containers = document.querySelectorAll('.view-pass-input');
    if (!containers.length) return;
    containers = domToArr(containers);
    
    containers.forEach(container => {
        let viewBtn = container.querySelector('.view-btn');
        let hideBtn = container.querySelector('.no_view-btn');
        let input = container.querySelector('input');
        viewBtn.addEventListener('click', e => {
            e.preventDefault();
            viewBtn.style.display = 'none';
            hideBtn.style.display = 'block';
            input.type = 'password';
        });
        hideBtn.addEventListener('click', e => {
            e.preventDefault();
            hideBtn.style.display = 'none';
            viewBtn.style.display = 'block';
            input.type = 'text';
        });
    });
}
