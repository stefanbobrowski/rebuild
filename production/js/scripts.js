$(document).ready(function(){"use strict";var t=$("html, body");$(".hero-button").click(function(){t.animate({scrollTop:$("main").offset().top},1e3);return false});$(".work-link").click(function(){t.animate({scrollTop:$(".professional").offset().top-20},1300);return false});$(".contact-link").click(function(){t.animate({scrollTop:$(".contact").offset().top-20},1500);return false});var o=$(window).height(),i=105,e=2,n=0;function a(){var t=$(window).scrollTop()-$(this).offset().top,a=$(this)[0].offsetHeight,r=-t<o&&t<a,h=r?-((t/o+1)/(1+a/o)-.5)*i+e:0;if(r){$(this).css({"box-shadow":n+"px "+h+"px 8px -2px rgba(0,0,0,.1), "+n+"px "+(h+i/20)+"px 17px 4px rgba(0,0,0,.07), "+n+"px "+(h-i/20)+"px 22px 8px rgba(0,0,0,.06), "+n/2+"px "+h/20+"px 21px 1px rgba(0,0,0,.12)"})}}var r=$(".photo").width();$(".photo").css("height",r);$(window).on("resize",function(){o=$(window).height();r=$(".photo").width();$(".photo").css("height",r);$(".work-folder").each(function(){$(this).next().animate({height:0},300,"linear")})}).on("scroll resize",function(){$(".photo-frame").each(a)});$(".work-folder").on("click",function(){var t=$(this).next();if(t.height()==0){t.animate({height:t.get(0).scrollHeight},300,"linear")}else{t.animate({height:0},300,"linear")}})});