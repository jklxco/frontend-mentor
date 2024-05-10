const addEventListener = () => {
    const getBtns = document.querySelectorAll('.expand-btn');
    const allPTags = document.querySelectorAll('p');

    getBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if(btn.src.includes('minus')) {
                btn.src = './assets/images/icon-plus.svg';
            } else {
                btn.src = './assets/images/icon-minus.svg';
                
                allPTags.forEach(p => {
                    if (!p.classList.contains('hidden')) {
                        p.classList.add('hidden');
                        p.previousElementSibling.lastElementChild.src = './assets/images/icon-plus.svg'
                    }
                });
            }
            btn.parentElement.nextElementSibling.classList.toggle('hidden');

        });
    });
}

addEventListener();

