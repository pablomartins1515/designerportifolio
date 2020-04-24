(function ($) {
    'use strict';

    // Fullscreen Slider Active Code
    $(window).on('resizeEnd', function () {
        $(".welcome_area, .welcome_slides .single_slide, .single_slide").height($(window).height());
    });

    $(window).on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // Welcome Slider Active Code
    if ($.fn.owlCarousel) {
        $(".welcome_slides, .single_advisor_profile").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="icofont icofont-swoosh-left"></i>', '<i class="icofont icofont-swoosh-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 10000 // 1s = 1000ms
        });
    }

    var owl = $('.welcome_slides');
    owl.owlCarousel();
    owl.on('translate.owl.carousel', function (event) {
        $('.owl-item .single_slide .slide_text h2').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text h3').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text .btn').removeClass('animated').hide();
    })
    owl.on('translated.owl.carousel', function (event) {
        $('.owl-item.active .single_slide .slide_text h2').addClass('animated custom_slideInUp').show();
        $('.owl-item.active .single_slide .slide_text h3').addClass('animated custom_slideInUp_2').show();
        $('.owl-item.active .single_slide .slide_text .btn').addClass('animated custom_slideInUp_btn_1').show();
    })

    // Text Slider Active Code 
    if ($.fn.owlCarousel) {
        $(".textslider").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 1500
        });
    }

    var owl = $('.textslider');
    owl.owlCarousel();
    owl.on('translate.owl.carousel', function (event) {
        $('.owl-item .single_slide .slide_text h2').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text h3').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text .btn').removeClass('animated').hide();
    })
    owl.on('translated.owl.carousel', function (event) {
        $('.owl-item.active .single_slide .slide_text h2').addClass('animated slideInRight').show();
        $('.owl-item.active .single_slide .slide_text h3').addClass('animated slideInLeft').show();
        $('.owl-item.active .single_slide .slide_text .btn').addClass('animated bounceInDown').show();
    })

    // Testimonials Slider Active code
    if ($.fn.owlCarousel) {
        $(".testimonials").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 800
        });
    }

    // Meanmenu active code
    $('.main_menu_area .mainmenu nav').meanmenu();

    // Onepage nav active code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'current_page_item',
            easing: 'easeInOutQuart'
        });
    }

    // Magnific-popup Video active code
    if ($.fn.magnificPopup) {
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }
    // ScrollUp active code
    $.scrollUp({
        scrollName: 'scrollUp',
        scrollDistance: 450,
        easingType: 'easeInOutQuart',
        scrollText: '<i class="icofont icofont-swoosh-up"></i>',
        zIndex: 2147483647
    });

    // wow active code
    new WOW().init();

    // scrollUp active code
    if ($.fn.stellar) {
        $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
    }
    
    // YouTube video active code
    if ($.fn.mb_YTPlayer) {
        $('.player').mb_YTPlayer();
    }

    // PreventDefault a click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // footer reveal active code
    if ($.fn.footerReveal) {
        $('.footer_area').footerReveal({
            shadowOpacity: 0.2
        });
    }

    // Sticky Active Code
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 350) {
            $('.main_header_area').addClass('sticky slideInDown');
            $('body').addClass('mobile_menu_on');

        } else {
            $('.main_header_area').removeClass('sticky slideInDown');
            $('body').removeClass('mobile_menu_on');
        }
    });

    // Preloader active code
    $(window).on('load', function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);