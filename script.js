
document.addEventListener('DOMContentLoaded', () => {
    // Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoHeight: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        autoplay: { delay: 5000 },
        breakpoints: {
            1024: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            480: { slidesPerView: 1, spaceBetween: 10 }
        }
    });

    // Menu responsivo
    const menuBtn = document.querySelector('.menuBurguer');
    const navUl = document.querySelector('nav ul');

    menuBtn.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });
});
