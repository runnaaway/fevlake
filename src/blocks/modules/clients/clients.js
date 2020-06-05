import $ from "jquery";
import 'slick-carousel';
$(function () {
    $('.clients__list').slick({
        slidesToShow: 7,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        arrows: false,
        cssEase: 'linear',
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
});