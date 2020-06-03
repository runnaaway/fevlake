import $ from "jquery";
import 'slick-carousel';

$(function () {
    $('.mainpage .clients__list').slick({
        slidesToShow: 7,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        arrows: false,
        cssEase: 'linear',
        slidesToScroll: 1
    });
});