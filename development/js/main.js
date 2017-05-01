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
    var scrollTop;
    var photosOffset;
    var profOffset
    var distPhotos;
    var distProf;
    var goldenRatio;
    var goldenRatio2;

    $(window).scroll(function() {
        halfHeight = $(window).height() / 2;
        scrollTop = $(window).scrollTop();
        photosOffset = $('.photos').offset().top;
        distPhotos = (photosOffset - scrollTop);
        profOffset = $('.professional').offset().top;
        distProf = (profOffset - scrollTop);

        if(distPhotos < photosOffset && distPhotos > 0) {
            goldenRatio = (distPhotos / 10);
            $('.photo-frame').css('box-shadow', '0px ' + (goldenRatio - 10) + 'px 25px 2px #BBB');
        };

    });
});
