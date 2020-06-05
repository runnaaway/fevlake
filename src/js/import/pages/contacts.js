$(function () {
    $(document).ready(function () {
        if (typeof ymaps != 'undefined') {
            ymaps.ready(YMapsInit);
        }
    });


// Yandex Maps
    var contactsMap, contactsPlacemark;

    function YMapsInit() {
        contactsMap = new ymaps.Map('map', {
            center: [55.773155, 37.597208],
            zoom: 15,
            controls: ['zoomControl']
        });

        contactsPlacemark = new ymaps.Placemark([55.773155, 37.597208], {
            hintContent: 'Москва, Тверской-Ямской 1-й пер., д. 11, оф. 2'
        }, {
            iconImageHref: '/img/svg/pin.svg',
            iconLayout: 'default#image',
            iconImageSize: [226, 54],
            iconImageOffset: [-20, -54]
        });

        contactsMap.behaviors.disable('scrollZoom');
        contactsMap.behaviors.enable('multiTouch');
        contactsMap.geoObjects.add(contactsPlacemark);
    }
});