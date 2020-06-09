import $ from "jquery";

export default function clearReviewContent(item) {
    $('#modal-review').find('.review__logo').attr('src', '');
    $('#modal-review').find('.review__text').html('');
    $('#modal-review').find('.review__name').text('');
    $('#modal-review').find('.review__position').text('');
}