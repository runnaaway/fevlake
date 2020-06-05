import $ from "jquery";
import 'slick-carousel';

$(function () {
    $('.reviews__list').slick({
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 15000,
        arrows: false,
        cssEase: 'linear',
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnFocus: true,
        rows: 0,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1420,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});



