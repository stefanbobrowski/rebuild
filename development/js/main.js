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
            scrollTop: $('.professional').offset().top - 20
        }, 1300);
        return false;
    });

    $('.contact-link').click(function() {
        $root.animate({
            scrollTop: $('.contact').offset().top - 20
        }, 1500);
        return false;
    });

    /* Window scroll */
    var wH = $(window).height(),
        sO = 105, // shadowOffset (px); 50 => from -25 to +25
        tO = 2,   // topOffset (px)  0 => vertical symmetry,
        lO = 0   // leftOffset (px) 0 => horizontal symmetry
    function moveshadow() {
        var diff = $(window).scrollTop() - $(this).offset().top,
            tOH = $(this)[0].offsetHeight,
            should = (-diff < wH) && (diff < tOH),
            factor = should ? -((diff / wH + 1) / (1 + tOH / wH) - .5) * sO + tO : 0;
        if (should) {
            $(this).css({
                "box-shadow": lO +"px " + factor + "px 8px -2px rgba(0,0,0,.1), " + lO + "px " +
                (factor + sO / 20) + "px 17px 4px rgba(0,0,0,.07), " + lO + "px " +
                (factor - sO / 20) + "px 22px 8px rgba(0,0,0,.06), " + lO/2 + "px " +
                factor / 20 + "px 21px 1px rgba(0,0,0,.12)"
            });
        }
    };



    /* Window Resize */
    var photoWidth = $('.photo').width();
    $('.photo').css('height', photoWidth );

    $(window).on('resize', function() {
        wH = $(window).height();
        photoWidth = $('.photo').width();
        $('.photo').css('height', photoWidth );
        $('.work-folder').each(function() {
            $(this).next().animate({height: 0}, 300, "linear");
        });
    }).on('scroll resize', function() {
        $('.photo-frame').each(moveshadow);
    });

    /* Work dropdowns */



    $('.work-folder').on('click', function() {

        var workList = $(this).next();
        if(workList.height() == 0) {
            workList.animate({height: workList.get(0).scrollHeight}, 300, "linear");
        } else {
            workList.animate({height: 0}, 300, "linear");
        }

    });



});
