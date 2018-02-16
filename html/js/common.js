$(function() {

    'use strict';

    /*****************************************************/
    //stick menu
    /*****************************************************/

    var stickInner;
    $(window).scroll(function() {

        stickInner = $(window).width() > 480 ? $('.header') : $('.header__menu');
        if ( $(window).scrollTop() > stickInner.height() ) {
            if ( !stickInner.closest('.stick').length ) {
                stickInner.wrap('<div class="stick" style="height: ' + stickInner.height() + 'px;"><div class="stick__inner"></div></div>');
                setTimeout(function() {
                    stickInner.css({
                        '-webkit-transform': 'translateY(0)',
                        '-moz-transform': 'translateY(0)',
                        'transform': 'translateY(0)',
                        '-webkit-transition': 'all .5s ease',
                        '-moz-transition': 'all .5s ease',
                        'transition':' all .5s ease'
                    });
            	}, 1);
            }
        } else if ($(window).scrollTop() == 0 ) {
            stickInner.removeAttr('style').unwrap('.stick__inner').unwrap('.stick');
        }
    });

    $(window).resize(function() {
        if ( $('.stick').length ) {
            stickInner.removeAttr('style').unwrap('.stick__inner').unwrap('.stick');
        }
    });

});
