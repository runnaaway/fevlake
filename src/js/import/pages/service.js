import 'slick-carousel';
import '%modules%/clients/clients'
import '%modules%/cases/cases'
import '%modules%/reviews/reviews'

$(function () {
    $('.techs__dots').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        focusOnSelect: true,
        rows: 0
    })
})