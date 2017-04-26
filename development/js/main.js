$(document).ready(function(){
    'use strict';



    // Next button page change

    $('.page-nav-button').click(function() {
        var pageID = $(this).parent().attr("id");
        var pageIDNum = parseInt(pageID.match(/(\d+)[^-]*$/g)[0]);

        if($(this).hasClass('prev')) {
            pageIDNum -= 1;
        } else {
            pageIDNum += 1;
        }

        var nextPageID = $('#page-' + pageIDNum);

        if(nextPageID.length !== 0) {
            $(this).parent().removeClass('active');
            nextPageID.addClass('active');
        }
    });

    /* Next & Previous buttons */
    $('.next').click(function() {
        var parentPage = $(this).closest('.page');
        var pageNum = parseInt(parentPage.attr('class').match(/\d+/g)[0]) + 1;
        var nextPage = $('.page-' + pageNum);

        while(nextPage.hasClass('page-correct') || nextPage.hasClass('page-incorrect')) {
            pageNum++;
            nextPage = $('.page-' + pageNum);
        }
        nextPage.addClass('active-page');
        parentPage.removeClass('active-page');
    });

    $('.prev').click(function() {
        var parentPage = $(this).closest('.page');
        var pageNum = parseInt(parentPage.attr('class').match(/\d+/g)[0]) - 1;
        var prevPage = $('.page-' + pageNum);

        while(prevPage.hasClass('page-correct') || prevPage.hasClass('page-incorrect')) {
            pageNum--;
            prevPage = $('.page-' + pageNum);
        }
        prevPage.addClass('active-page');
        parentPage.removeClass('active-page');
    });

    /* Quesions & Answers */
    $('.answer').click(function() {
        var parentPage = $(this).closest('.page');
        var pageNum = parseInt(parentPage.attr('class').match(/\d+/g)[0]);
        parentPage.removeClass('active-page');

        if( $(this).hasClass('answer-correct')) {
            console.log('ya did it');
            $('.page-' + (pageNum + 1)).addClass('active-page');
        } else {
            console.log("RONG");
            $('.page-' + (pageNum + 2)).addClass('active-page');
        }
    });

    // Image scroller
    // var imageWidth = $('.scrolling-image').width();
    // $('.page-container').animate({
    //     scrollLeft: imageWidth / 8
    // }, 10000, function() {
    //     console.log("Leggo");
    // });


});
