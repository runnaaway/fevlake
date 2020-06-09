import $ from "jquery";

export default function setReviewContent(item) {
    let $parent = $(item).closest('.reviews__entry');
    let logo = $parent.find('img').attr('src');
    let text = $parent.find('.entry__text').html();
    let name = $parent.find('.entry__name').text();
    let position = $parent.find('.entry__position').text();

    $('#modal-review').find('.review__logo').attr('src', logo);
    $('#modal-review').find('.review__text').html(text);
    $('#modal-review').find('.review__name').text(name);
    $('#modal-review').find('.review__position').text(position);
}