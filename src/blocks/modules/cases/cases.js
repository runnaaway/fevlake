import $ from "jquery";
import 'slick-carousel';

$(function () {
    $('.mainpage .cases__list').slick({
        slidesToShow: 3,
        arrows: true,
        rows: 0
    });
});