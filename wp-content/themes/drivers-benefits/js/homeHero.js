$(document).ready(() => {
	const hero = $('.home__hero')
	const cta = $('.home__cta')
	const signin = $('.home__cta_signin')
	const slides = $('.home__testimonials_slides')

	cta.prependTo(hero).show()
	$('.ab-button')
		.attr('class', 'home__cta_button btn btn-primary')
		.appendTo(cta)
		.attr('style', null)
	signin.appendTo(cta).attr('style', null)

	$('.home__testimonial')
		.slice(0, 3)
		.each((index, el) => {
			const $el = $(el)
			const testimonial = $el.find('.ab-testimonial-text p').html()
			const avatar = $el.find('img').attr('src')
			const name = $el.find('.ab-testimonial-name').html()
			const company = $el.find('.ab-testimonial-title').html().toLowerCase()
			const slide = $.parseHTML(`
				<div class="home__slide">
					<img
						class="home__testimonials_bg"
						src="${ASSETS}/image-testimonial-bg-${index + 1}.png"
					>
					<div class="home__testimonial">
						<div>
							${testimonial}
						</div>
						<div class="home__testimonial_person">
							<img src="${ASSETS}/icon-${company}.png">
							${name}
						</div>
						<img class="home__testimonial_avatar" src="${avatar}">
					</div>
				</div>
			`)

			$(slide).appendTo(slides)
		})

	slides.slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	})

	$('.slick-dots').appendTo(hero)

	setTimeout(() => {
		signin.show()
		hero.fadeTo(500, 1)
	}, 10)

	$('.home__testimonials_shadow').parent().parent().remove()
})
