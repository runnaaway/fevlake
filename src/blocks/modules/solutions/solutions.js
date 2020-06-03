import $ from "jquery";
import 'slick-carousel';

$(function () {
    $('.mainpage .reviews__list').slick({
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 15000,
        arrows: false,
        cssEase: 'linear',
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnFocus: true,
        rows: 0
    });
});