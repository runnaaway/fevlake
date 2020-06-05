$(function () {
    $('.reviews__entry .entry__more').click(function (e) {
        e.preventDefault();

        $(this).closest('.reviews__entry').toggleClass('opened');
        $(this).html($(this).text() == 'Читать полностью' ? 'Скрыть' : 'Читать полностью')
    });
})