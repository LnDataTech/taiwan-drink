;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	var loading = function() {
		window.addEventListener('load', function() {
		var loader = document.querySelector('.loader');
		loader.style.display = 'none'; 

		document.querySelector('.content').style.display = 'block'; 
		});
	};

	window.addEventListener('load', function() {
		document.body.style.overflow = 'auto';
		document.querySelector('.content').style.display = 'block'; 
	  });

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('#colorlib-main-nav').hasClass('menu-show') ) {
				$('#colorlib-main-nav').removeClass('menu-show');
				$('body').removeClass('menu-show');
				$('#mobile-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('#colorlib-main-nav').addClass('menu-show');
				$('body').addClass('menu-show');
			}
		})
	};


	// Animations
	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#colorlib-counter').length > 0 ) {
			$('#colorlib-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Owl Carousel
	var owlCarouselFeatureSlide = function() {
		var owl = $('.owl-carousel1');
		owl.owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav:true,
		   dots: false,
		   autoHeight: true,
		   responsive:{
		      0:{
		         items:1
		      },
		      600:{
		         items:2
		      },
		      1000:{
		         items:3
		      }
		   },
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});
		var owl2 = $('.owl-carousel');
		owl2.owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav:false,
		   dots: true,
		   autoHeight: true,
		   items: 1,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});
		var owl3 = $('.owl-carousel3');
		owl3.owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav:false,
		   dots: false,
		   autoHeight: true,
		   items: 1,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});	
	};

	


	// Document on load.
	$(function(){
		fullHeight();
		burgerMenu();
		counterWayPoint();
		contentWayPoint();
		loading();
		owlCarouselFeatureSlide();
	});

	document.addEventListener('scroll', function() {
		var scrollIndicator = document.querySelector('.scroll-indicator');
		scrollIndicator.style.opacity = 1 - window.scrollY*1.42 / window.innerHeight;
	});

	window.addEventListener('scroll', function () {
		var rightSide = document.getElementById('rightSide');
		var dynamicIndicators = document.querySelectorAll('.dynamic-indicator');
		var dynamicContents = document.querySelectorAll('.dynamic-content');
  
		dynamicIndicators.forEach(function (dynamicIndicator, index) {
			var rect = dynamicIndicator.getBoundingClientRect();
	
			var scrollThreshold = rect.top;
	
			var scrollPosition = window.scrollY || document.documentElement.scrollTop;
	
			if (scrollThreshold < 100 && scrollThreshold > -300) {

			  dynamicContents[index].classList.add('fade-in');
			} else {

			  dynamicContents[index].classList.remove('fade-in');
			}
		  });
	  });

	  document.addEventListener('DOMContentLoaded', function () {
		var hoverIndicators = document.querySelectorAll('.hover-indicator');
		var hoverContents = document.querySelectorAll('.hover-content');
  
		hoverIndicators.forEach(function (indicator) {
		  indicator.addEventListener('mouseover', function () {
			var dataId = indicator.getAttribute('data-id');
			var correspondingContent = document.querySelector('.hover-content[data-id="' + dataId + '"]');
  
			correspondingContent.classList.add('fade-in');
			correspondingContent.classList.remove('fade-out');
		  });
  
		  indicator.addEventListener('mouseout', function () {
			var dataId = indicator.getAttribute('data-id');
			var correspondingContent = document.querySelector('.hover-content[data-id="' + dataId + '"]');
  
			correspondingContent.classList.add('fade-out');
			correspondingContent.classList.remove('fade-in');
		  });
		});
	  });

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  
  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  targetSection.scrollIntoView({
    behavior: 'smooth'
  });
}

	  let prevScrollPos = window.pageYOffset;
const nav = document.querySelector('header');

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    nav.classList.add('show');
    nav.classList.remove('hide');
  } else {
    nav.classList.add('hide');
    nav.classList.remove('show');
  }
  prevScrollPos = currentScrollPos;
};

window.addEventListener('mousemove', function (e) {
  if (e.clientY < 20) {
    nav.classList.add('show');
    nav.classList.remove('hide');
  }
});



}());