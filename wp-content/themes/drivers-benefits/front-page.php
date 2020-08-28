<?php get_header(); ?>
<?php wp_nav_menu(); ?>

<header class="home__header_responsive">
	<div class="header__container">
		<a href="/">
			<img class="header__logo" src="<?php echo get_template_directory_uri(); ?>/assets/icon-logo.png">
		</a>
		<a class="header__signup" href="">
			<button class="btn btn-primary"></button>
		</a>
	</div>
	<script>
		$(document).ready(() => {
			$('.home__header_responsive .header__signup').attr('href', signupUrl)
			$('.home__header_responsive .header__signup').find('button').html(signupText)
		})
	</script>
</header>

<section class="home__hero">
	<div class="home__testimonials">
		<div class="home__testimonials_slides"></div>
	</div>
</section>
<section class="home__benefits">
	<div class="home__benefits_grid"></div>
</section>
<section class="footer__posts">
</section>

<?php the_content(); ?>

<?php get_footer(); ?>

<script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="/wp-content/themes/drivers-benefits/js/homeHero.js"></script>
<script src="/wp-content/themes/drivers-benefits/js/home.js"></script>
