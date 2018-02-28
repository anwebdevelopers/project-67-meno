$(function() {

    'use strict';

    /*****************************************************/
    //STICK MENU
    /*****************************************************/

    var $window = $(window),
        $header = $('.header');

    $window.scroll(function() {
        if ( $window.scrollTop() > $header.height() ) {
            if ( !$header.closest('.stick').length ) {
                $header.wrap('<div class="stick" style="height: ' + $header.height() + 'px;"><div class="stick__inner"></div></div>');
                setTimeout(function() {
                    $('.stick__inner').css({
                        '-webkit-transform': 'translateY(0)',
                        '-moz-transform': 'translateY(0)',
                        'transform': 'translateY(0)',
                        '-webkit-transition': 'all .5s ease',
                        '-moz-transition': 'all .5s ease',
                        'transition':' all .5s ease'
                    });
            	}, 1);
            }
        } else if ( $window.scrollTop() == 0 ) {
            $header.unwrap('.stick__inner').unwrap('.stick');
        }
    });

    $window.resize(function() {
        if ( $('.stick').length ) {
            $('.stick').css({ 'height': $header.height() + 'px' });
        }
    });

    /*******************************************************/
    //MENU MOBILE
    /*******************************************************/
    var $menu = $('.header__menu, .header__login'),
        $buttonMenuMobile = $('.header__button-menu');
    $buttonMenuMobile.click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $menu.slideToggle(200);
    });
    $(window).resize(function() {
       $buttonMenuMobile.removeClass('active');
       $menu.removeAttr('style');
   });


   /*******************************************************/
   //CAROUSEL
   /*******************************************************/
   $('.carousel').addClass('owl-carousel').owlCarousel({
       loop: true,
       items: 3,
       nav: true,
       navText: '',
       autoplayTimeout: 5000,
       autoplay: true,
       smartSpeed: 600,
       responsiveClass: true,
       responsive: {
           0: {
               items: 1
           },
           481: {
               items: 2
           },
           769: {
               items: 3
           }
       }
   });

   /*******************************************************/
   //SLIDER
   /*******************************************************/
   $('.slider').addClass('owl-carousel').owlCarousel({
       loop: true,
       items: 1,
       nav: true,
       navText: '',
       autoplayTimeout: 5000,
       autoplay: true,
       smartSpeed: 600
   });

   /*******************************************************/
   //POPUP
   /*******************************************************/

   $('.popup-with-move-anim').magnificPopup({
       type: 'inline',
       fixedContentPos: false,
       fixedBgPos: true,
       overflowY: 'auto',
       closeBtnInside: true,
       preloader: false,
       midClick: true,
       removalDelay: 300,
       mainClass: 'my-mfp-slide-bottom'
   });

   /*******************************************************/
   //TABS
   /*******************************************************/
   $('.tabs-buttons').each(function() {
       $(this).before('<div class="tabs"></div>').siblings('.tabs').prepend($(this), $(this).siblings().addClass('tabs-item'));
       $(this).closest('.tabs').find('.tabs-item').wrapAll('<div class="tabs-box"></div>').not(':first').hide();
       $(this).children('a').first().addClass('active');
   }).on('click', 'a:not(.active)', function(e) {
       e.preventDefault();
       var $this = $(this);
       $this.addClass('active').siblings().removeClass('active').closest('.tabs').find('.tabs-box .tabs-item').stop().slideUp(300, 'swing').eq($this.index()).stop().slideDown(300, 'swing');
    });

    /*******************************************************/
    //CONTENT GALLERY
    /*******************************************************/
    $('.content-gallery').addClass('owl-carousel').owlCarousel({
        nav: true,
        navText: '',
        smartSpeed: 600,

        autoWidth: true,
        margin: 20,
    }).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
