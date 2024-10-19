window.addEventListener('DOMContentLoaded', () => {
    const info = document.querySelector('.info'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        info.classList.toggle('info_active');
    });
});