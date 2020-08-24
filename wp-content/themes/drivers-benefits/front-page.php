<?php get_header(); ?>

<div class="home__hero">
	<div class="home__testimonials">
		<img class="home__testimonials_bg" src="<?php echo get_template_directory_uri(); ?>/assets/image-testimonial-1-bg.png">
		<div class="home__testimonials_slides"></div>
	</div>
</div>
<div class="home__benefits">
	<div class="home__benefits_grid"></div>
</div>

<?php if (have_posts()) : while(have_posts()) : the_post(); ?>
	<?php the_content(); ?>
<?php endwhile; endif; ?>

<?php get_footer(); ?>

<script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script src="/wp-content/themes/drivers-benefits/js/homeHero.js"></script>
<script src="/wp-content/themes/drivers-benefits/js/home.js"></script>
