<?php get_header(); ?>

<section class="home__hero">
	<?php
		$query = new WP_Query( array( 'pagename' => '__private__cta' ) );
	  $query->the_post();
	  echo the_content();
		wp_reset_postdata();
	?>

	<div class="home__testimonials">
		<div class="home__testimonials_slides"></div>
	</div>
</section>
<section class="home__benefits">
	<div class="home__benefits_grid"></div>
</section>
<section class="footer__posts">
</section>
<section class="home__partners_wrapper">
</section>

<?php the_content(); ?>

<?php get_footer(); ?>

<script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="/wp-content/themes/drivers-benefits/js/homeHero.js"></script>
<script src="/wp-content/themes/drivers-benefits/js/home.js"></script>
