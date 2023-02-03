document.addEventListener('DOMContentLoaded', function() {
// слайдер специалисты
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        spaceBetween: 17,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        breakpoints: {
            1200: {
            slidesPerView: 4,
            spaceBetween: 17,
            },
            991: {
            slidesPerView: 3,
            spaceBetween: 17,
            },
            767: {
            slidesPerView: 2,
            spaceBetween: 17,
            },
            491: {
            slidesPerView: 2,
            spaceBetween: 17,
            },
            0: {
            slidesPerView: 1,
            spaceBetween: 17,
            },
        },

    });
});