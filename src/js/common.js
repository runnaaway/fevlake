import setReviewContent from './import/modules/setReviewContent';
import clearReviewContent from './import/modules/clearReviewContent';
import Inputmask from "inputmask";

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

        if($('.modal').attr('id') === 'modal-review') {
            clearReviewContent();
        }
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


    Inputmask({"mask": "+ 7(999) 999-9999"}).mask($("input[type=tel]"));


    let match = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    $('input[type=email]').blur(function () {
        let val = $(this).val();

        if(!match.test(val)) {
            $(this).closest('label').addClass('error');
            $(this).closest('form').find('.form__error').html('Введите корректный E-mail адрес').show();
        } else {
            $(this).closest('label').removeClass('error');
            $(this).closest('form').find('.form__error').html('').hide();
        }

        $('label.error input[type=email]').keyup(function () {
            let val = $(this).val();

            if(match.test(val)) {
                $(this).closest('label').removeClass('error');
                $(this).closest('form').find('.form__error').html('').hide();
            }
        })
    })

})