window.addEventListener('DOMContentLoaded', () => {
    const info = document.querySelector('.header__info'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        info.classList.toggle('header__info_active');
    });
});

// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         speed: 1500,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider/left-btn.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../img/slider/right-btn.svg"></button>',
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//         ]
//     });
// });

$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            items: 1,
            nav: true,
            slideTransition: '',
            autoplay: true,
            navText: [
                '<div class="owl-prev"><img src="./img/slider/left-btn.png"></div>',
                '<div class="owl-next"><img src="./img/slider/right-btn.png"></div>'
            ]
        }
    );

    $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function () {
        $(this)
            .addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
            .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
                $('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
            })
        })
    }

    toggleSlide('.catalogue-item__link');
    toggleSlide('.catalogue-item__back');
});