/*global jQuery */
(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // SlickNav JS
        $('.mainmenu').slicknav({
            label: '',
            prependTo: '.header-bottom .col-lg-2'
        });

        $('.mainmenu li:has(ul.sub)').addClass('icon');

        // FunfactCounter
        $('.countup').counterUp();

        // Team Area Carousel
        $('.team-content-wrap').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                576: {
                    items: 2
                },
                // breakpoint from 768 up
                768: {
                    items: 2
                },
                // breakpoint from 992 up
                992: {
                    items: 4
                }
            }
        });

        // Testimonial Area Carousel
        $('.testimonial-content-wrap').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                576: {
                    items: 1
                },
                // breakpoint from 768 up
                768: {
                    items: 1
                },
                // breakpoint from 992 up
                992: {
                    items: 2
                }
            }
        });


        //Scroll Top JS
        $('.scroll-top').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 2000);
        });


        //Header Fix JS
        var header = document.getElementById("fixheader"),
            sticky = header.offsetTop;

        function headerfix() {
            if (window.pageYOffset >= sticky) {
                header.classList.add("fixed");
            } else {
                header.classList.remove("fixed");
            }
        }

        //Home2 Slider JS
        $("#slider-area").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500
        });

        // Hom2 Testimonial Carousel JS
        $('.testimonial-content').owlCarousel({
            loop: true,
            items: 1,
            thumbs: true,
            thumbsPrerendered: true
        });

        /*==================================
         All Window Srcoll Function
        ===================================*/
        $(window).scroll(function () {

            //Header Fix JS
            headerfix();

            //Scroll top Hide Show
            if ($(window).scrollTop() >= 500) {
                $('.scroll-top').slideDown(400);
            } else {
                $('.scroll-top').slideUp(400);
            }

        });
        /*==================================
         All Window Srcoll Function
        ===================================*/

    }); //Ready Function End

    jQuery(window).on('load', function () {
        jQuery('.preloader').fadeOut();
        jQuery('.preloader-spinner').delay(350).fadeOut('slow');
        jQuery('body').removeClass('preloader-active');
    }); //window load End


}(jQuery));
