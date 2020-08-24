const cta = $('.home__cta');
cta.prependTo('.home__hero').show();
$('.ab-button').attr('class', 'btn btn-primary').appendTo(cta).attr('style', '');
$('.home__cta_signin').appendTo(cta).show();
const slides = $('.home__testimonials_slides');
$('.home__testimonial').each((index, el) => {
	const $el = $(el);
	const testimonial = $el.find('.ab-testimonial-text p').html();
	const avatar = $el.find('img').attr('src');
	const name = $el.find('.ab-testimonial-name').html();
	const company = $el.find('.ab-testimonial-title').html().toLowerCase();
	const slide = $.parseHTML(`
		<div class="home__slide">
			<div class="home__testimonial">
				<div>
					${testimonial}
				</div>
				<div class="home__testimonial_person">
					<img src="/wp-content/themes/drivers-benefits/assets/icon-${company}.png">
					${name}
				</div>
				<img class="home__testimonial_avatar" src="${avatar}">
			</div>
		</div>
	`);

	$(slide).appendTo(slides);
});

slides.slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
});

$('.slick-dots').appendTo($('.home__hero'))

setTimeout(() => {
	$('.home__hero').fadeTo(100, 1);
}, 10);

$('.home__testimonials_shadow').parent().parent().remove();
