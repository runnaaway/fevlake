import setReviewContent from './import/modules/setReviewContent';

$(function () {
    $('.js-modal-open').click(function (e) {
        e.preventDefault();

        let modal = $(this).data('modal');

        setReviewContent(this);

        $('#' + modal).addClass('opened');

        $('html').addClass('ov-hidden');
    });

    $('.js-modal-close').click(function (e) {
        e.preventDefault();

        $('.modal.opened').removeClass('opened');

        $('html').removeClass('ov-hidden');
    });

    $('body').on('click', '.menu__dropdown', function (e) {
        e.preventDefault();

        $(this).closest('.menu__entry').find('.header__submenu').toggle();
    });

    $('body').on('click', '.js-header-toggle', function (e) {
        e.preventDefault();

        $(this).closest('.header').toggleClass('opened');

        $('html').toggleClass('ov-hidden');
    });
})