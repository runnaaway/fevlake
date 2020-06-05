import $ from "jquery";
import 'slick-carousel';

$(function () {
    $('.cases__list').slick({
        slidesToShow: 3,
        arrows: true,
        rows: 0,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    swipe: true
                }
            }
        ]
    });
});