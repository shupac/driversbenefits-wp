<?php get_header(); ?>
	<div class="home__hero">
		<div class="home__testimonials">
			<img class="home__testimonials_bg" src="<?php echo get_template_directory_uri(); ?>/assets/image-testimonial-1-bg.png">
			<div class="home__testimonials_slides"></div>
		</div>
	</div>
	<?php if (have_posts()) : while(have_posts()) : the_post(); ?>
		<?php the_content(); ?>
	<?php endwhile; endif; ?>

<!-- 		<div class="home__cta">
			<h3>
				Free and Discounted Benefits
			</h3>
			<div class="home__cta_info">
				for drivers of Black Car services such as <strong>Uber</strong>, <strong>Lyft</strong>, <strong>Via</strong>, <strong>Juno</strong>, and <strong>Vital</strong>
			</div>
			<button class="btn btn-primary">Use Your Benefits</button>
			<div class="home__cta_signin">
				Already enrolled? <a href="/verify">Sign In</a>
			</div>
		</div>

	</div> -->



<!-- 	<div id='partners'>
		<h4>Partners</h4>
		<a class='p-logo'><img src="http://drivers072120.wpengine.com/wp-content/uploads/2020/08/TheBCFLogoPNGversion2.png"></a>
		<a class='p-logo'><img src="http://drivers072120.wpengine.com/wp-content/uploads/2020/08/IDG-logo.png"></a>
	</div> -->
<?php get_footer(); ?>

<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

<script>
	$('.home__cta').prependTo('.home__hero');
	$('.home__cta_signin').appendTo('.home__cta');
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
						<img src="<?php echo get_template_directory_uri(); ?>/assets/icon-${company}.png">
						${name}
					</div>
					<img class="home__testimonial_avatar" src="${avatar}">
				</div>
			</div>
			`
		)
		$(slide).appendTo($('.home__testimonials_slides'))
	});

	$('.home__testimonials_slides').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	});

	setTimeout(() => {
		$('.slick-dots').appendTo($('.home__hero'))
		$('.home__hero').fadeTo(100, 1);
	}, 100);
</script>

