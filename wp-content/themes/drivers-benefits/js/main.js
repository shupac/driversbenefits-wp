$(document).ready(() => {
	$('.home__testimonials').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	})

	setTimeout(() => {
		$('.slick-dots').appendTo($('.home__hero'))
		$('.home__hero').fadeTo(100, 1);
	}, 100)
});
