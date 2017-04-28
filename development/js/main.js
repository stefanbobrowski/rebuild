$(document).ready(function(){
    'use strict';

    console.log('yo wautup');

    // Hero button scroll
    var $root = $('html, body');
    $('.hero-button').click(function() {
        console.log('yo');
        $root.animate({
            scrollTop: $('main').offset().top
        }, 1000);
        return false;
    });

    // Picture frame shadow change on scroll

    var halfHeight;
    var scrollTop;
    var photosOffset;
    var dist;
    var goldenRatio;


    $(window).scroll(function() {
        halfHeight = $(window).height() / 2;
        scrollTop = $(window).scrollTop();
        photosOffset = $('.photos').offset().top + 300;
        dist = (photosOffset - scrollTop);


        if(dist < photosOffset && dist > 0) {
            goldenRatio = (dist / 10);
            console.log('AYAYAYAA');
            $('.photo-frame').css('box-shadow', '0px ' + (goldenRatio - 35) + 'px 25px 3px #888');
        };

    });



});
