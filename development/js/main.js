$(document).ready(function(){
    'use strict';

    // Link page scrolls
    var $root = $('html, body');
    $('.hero-button').click(function() {
        $root.animate({
            scrollTop: $('main').offset().top
        }, 1000);
        return false;
    });

    $('.work-link').click(function() {
        $root.animate({
            scrollTop: $('.professional').offset().top
        }, 1000);
        return false;
    });

    $('.contact-link').click(function() {
        $root.animate({
            scrollTop: $('.contact').offset().top
        }, 1000);
        return false;
    });


    /* Window resize */

    var photoWidth = $('.photo').width();
    $('.photo').css('height', photoWidth );
    $(window).resize(function() {
        photoWidth = $('.photo').width();
        $('.photo').css('height', photoWidth );
    });

    /* Window scroll */
    var halfHeight;
    var eleHalfHeight;
    var scrollTop;
    var photosOffset;
    var profOffset
    var distPhotos;
    var goldenRatio;

    $(window).scroll(function() {
        halfHeight = $(window).height() / 2;
        eleHalfHeight = $('.photo').height() / 2;
        scrollTop = $(window).scrollTop();
        photosOffset = $('.photos').offset().top - halfHeight + eleHalfHeight ;
        distPhotos = (photosOffset - scrollTop);

        if(distPhotos < photosOffset && distPhotos > -photosOffset) {
            goldenRatio = distPhotos / 25;
            $('.photo-frame').css('box-shadow', '0px ' + (goldenRatio + 6) + 'px 4px 2px #AAA');
        };

    });
});
