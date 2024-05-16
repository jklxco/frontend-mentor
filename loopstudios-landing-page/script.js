const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', (e) => {
    nav.classList.toggle('hidden');

    if (e.target.src.includes('close')) {
        e.target.src = './images/icon-hamburger.svg';
    } else {    
        e.target.src = './images/icon-close.svg';
    }
});
