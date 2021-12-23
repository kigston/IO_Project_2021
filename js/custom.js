/*------------------------------------------------
Index Of Script
----------------------------------------------*/

(function (jQuery) {
	"use strict";
	jQuery(document).ready(function() {

		function activaTab(pill) {
			jQuery(pill).addClass('active show');
		}

		/*---------------------------------------------------------------------
			Sticky Header Animation & Height
		----------------------------------------------------------------------- */
		function headerHeight() {
			var height = jQuery("#main-header").height();
			jQuery('.iq-height').css('height', height + 'px');
		}
		jQuery(function() {
			var header = jQuery("#main-header"),
				yOffset = 0,
				triggerPoint = 80;

			headerHeight();

			jQuery(window).resize(headerHeight);
			jQuery(window).on('scroll', function() {

				yOffset = jQuery(window).scrollTop();

				if (yOffset >= triggerPoint) {
					header.addClass("menu-sticky animated slideInDown");
				} else {
					header.removeClass("menu-sticky animated slideInDown");
				}

			});
		});

		/*---------------------------------------------------------------------
			Header Menu Dropdown
		---------------------------------------------------------------------*/
		jQuery('[data-toggle=more-toggle]').on('click', function() {
			jQuery(this).next().toggleClass('show');
		});

		jQuery(document).on('click', function(e) {
			let myTargetElement = e.target;
			let selector, mainElement;
			if (jQuery(myTargetElement).hasClass('search-toggle') || jQuery(myTargetElement).parent().hasClass('search-toggle') || jQuery(myTargetElement).parent().parent().hasClass('search-toggle')) {
				if (jQuery(myTargetElement).hasClass('search-toggle')) {
					selector = jQuery(myTargetElement).parent();
					mainElement = jQuery(myTargetElement);
				} else if (jQuery(myTargetElement).parent().hasClass('search-toggle')) {
					selector = jQuery(myTargetElement).parent().parent();
					mainElement = jQuery(myTargetElement).parent();
				} else if (jQuery(myTargetElement).parent().parent().hasClass('search-toggle')) {
					selector = jQuery(myTargetElement).parent().parent().parent();
					mainElement = jQuery(myTargetElement).parent().parent();
				}
				if (!mainElement.hasClass('active') && jQuery(".navbar-list li").find('.active')) {
					jQuery('.navbar-right li').removeClass('iq-show');
					jQuery('.navbar-right li .search-toggle').removeClass('active');
				}

				selector.toggleClass('iq-show');
				mainElement.toggleClass('active');

				e.preventDefault();
			} else if (jQuery(myTargetElement).is('.search-input')) {} else {
				jQuery('.navbar-right li').removeClass('iq-show');
				jQuery('.navbar-right li .search-toggle').removeClass('active');
			}
		});

	/*---------------------------------------------------------------------
			Slick Slider
		----------------------------------------------------------------------- */
		$('#home-slider').slick({
			autoplay: false,
			speed: 800,
			lazyLoad: 'progressive',
			arrows: true,
			dots: false,
			prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
			nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: true,
						arrows: false,
					}
				}
			]
		}).slickAnimation();
		$('.slick-nav').on('click touch', function (e) {

			e.preventDefault();

			var arrow = $(this);

			if (!arrow.hasClass('animate')) {
				arrow.addClass('animate');
				setTimeout(() => {
					arrow.removeClass('animate');
				}, 1600);
			}

		});
		jQuery('.favorites-slider').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			autoplay: false,
			slidesToShow: 4,
			slidesToScroll: 1,		
			// appendArrows: $('#sm-slick-arrow'),
			
			nextArrow: '<a href="#" class="slick-arrow slick-next"><i class= "fa fa-chevron-right"></i></a>',
			prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class= "fa fa-chevron-left"></i></a>',
			responsive: [
			{
				breakpoint: 1200,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
				// arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
			]
		});

		jQuery('#top-ten-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '#top-ten-slider-nav',
			responsive: [
			{
				breakpoint: 992,
				settings: {
				asNavFor: false,
				arrows: true,
				nextArrow: '<button class="NextArrow"><i class="ri-arrow-right-s-line"></i></button>',
				prevArrow: '<button class="PreArrow"><i class="ri-arrow-left-s-line"></i></button>',
				}
			}
			]
		});
		jQuery('#top-ten-slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '#top-ten-slider',
			dots: false,
			arrows: true,
			infinite: true,
			vertical:true,
			verticalSwiping: true,
			centerMode: false,
			nextArrow:'<button class="NextArrow"><i class="ri-arrow-down-s-line"></i></button>',
			prevArrow:'<button class="PreArrow"><i class="ri-arrow-up-s-line"></i></button>',
			focusOnSelect: true,
			responsive: [		    
				{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
				},
				{
					breakpoint: 600,
					settings: {
						asNavFor: false,
					}
				},
			]
		});

		jQuery('#episodes-slider2').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			autoplay: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
			]
		});

		jQuery('#episodes-slider3').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			autoplay: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
			]
		});

		jQuery('#trending-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,		 
			arrows: false,
			fade: true,
			draggable:false,
			asNavFor: '#trending-slider-nav',	
		});
		jQuery('#trending-slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '#trending-slider',
			dots: false,
			arrows: true,
			nextArrow: '<a href="#" class="slick-arrow slick-next"><i class= "fa fa-chevron-right"></i></a>',
			prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class= "fa fa-chevron-left"></i></a>',
			infinite: true,
			centerMode: true,
			centerPadding:0,
			focusOnSelect: true,
			responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
			]
		});
		
		jQuery('#tvshows-slider').slick({
			centerMode: true,
			centerPadding: '200px',
			slidesToShow: 1,
			nextArrow: '<button class="NextArrow"><i class="ri-arrow-right-s-line"></i></button>',
			prevArrow: '<button class="PreArrow"><i class="ri-arrow-left-s-line"></i></button>',
			arrows:true,
			dots:false,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '20px',
						slidesToShow: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '20px',
						slidesToShow: 1
					}
				}
			]
		});


		/*---------------------------------------------------------------------
		Mobile Menu Overlay
		----------------------------------------------------------------------- */
		jQuery(document).on("click", function(event){
	    var $trigger = jQuery(".main-header .navbar");
	    if($trigger !== event.target && !$trigger.has(event.target).length){
			jQuery(".main-header .navbar-collapse").collapse('hide');
			jQuery('body').removeClass('nav-open');
	    }            
		});
		jQuery('.c-toggler').on("click", function(){
			jQuery('body').addClass('nav-open');
		}); 

	

	});
})(jQuery);