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
            responsive: [

            ],
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

    // Modal Window

    // $('[data-modal=consultation]').on('click', function () {
    //     $('.overlay, #consultation').fadeIn('slow');
    // });

    // $('.modal__close').on('click', function () {
    //     $('.overlay, #consultation, #order, #order-complete').fadeOut('slow');
    // });

    // // $('.button_mini').on('click', function () {
    // //     $('.overlay, #order').fadeIn('slow');
    // // });

    // $('.button_mini').on('click', function () {
    //     // Находим родительский элемент `.catalogue-item` для текущей кнопки
    //     const itemSubtitle = $(this).closest('.catalogue-item').find('.catalogue-item__subtitle').text();

    //     // Устанавливаем текст в элемент модального окна с классом `.modal__subtitle`
    //     $('.modal__subtitle').text(itemSubtitle);

    //     // Показываем модальное окно
    //     $('.overlay, #order').fadeIn('slow');
    // });

    // Открытие модального окна для консультации
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });

    // Закрытие всех модальных окон
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #order-complete').fadeOut('slow');
    });

    // Обработчик для кнопки .button_mini (только для #order)
    $('.button_mini').on('click', function () {
        // Находим родительский элемент `.catalogue-item` для текущей кнопки
        const itemSubtitle = $(this).closest('.catalogue-item').find('.catalogue-item__subtitle').text();

        // Устанавливаем текст в элемент модального окна #order
        $('#order .modal__subtitle').text(itemSubtitle);

        // Показываем модальное окно #order
        $('.overlay, #order').fadeIn('slow');
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone_number: 'required',
                email: {
                    required: true,
                    email: true,
                }
            },
            messages: {
                name: {
                    required: 'Пожалуйста укажите ваше имя',
                    minlength: jQuery.validator.format('Пожалуйста введите не менее {0} символов')
                },
                phone_number: 'Пожалуйста укажите ваш мобильный телефон',
                email: {
                    required: 'Пожалуйста укажите вашу электронную почту',
                    email: 'Укажите вашу почту в правильном формате!'
                }
            }
        })
    }

    validateForms('#consultation form');
    validateForms('#order form');
    validateForms('#consultation-form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function (e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        };
        $.ajax({
            type: 'POST',
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function () {
            $(this).find('input').val('');
            $('#consultation, #order').fadeOut();
            $('.overlay, #order-complete').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    // smooth scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.up-arrow').fadeIn();
        } else {
            $('.up-arrow').fadeOut();
        }
    });

    $(".up-arrow").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 100, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    new WOW().init();
});
