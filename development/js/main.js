$(document).ready(function(){
    'use strict';

    console.log('yo wautup');

    var $root = $('html, body');
    $('.hero-button').click(function() {
        console.log('yo');
        $root.animate({
            scrollTop: $('main').offset().top
        }, 1000);
        return false;
    });


});
