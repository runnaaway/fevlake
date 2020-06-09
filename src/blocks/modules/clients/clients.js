import $ from "jquery";
import 'slick-carousel';
$(function () {
    $('.clients__list').slick({
        slidesToShow: 7,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        rows: 0,
        arrows: false,
        cssEase: 'linear',
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 10,
                }
            },
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
});