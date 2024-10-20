window.addEventListener('DOMContentLoaded', () => {
    const info = document.querySelector('.header__info'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        info.classList.toggle('header__info_active');
    });
});