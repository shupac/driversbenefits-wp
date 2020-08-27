<?php /* Template Name: Benefits Page */ ?>

<?php get_header(); ?>

<?php if (have_posts()) : while(have_posts()) : the_post(); ?>
	<?php the_content(); ?>
<?php endwhile; endif; ?>

<div class="benefits__benefits"></div>

<script src="/wp-content/themes/drivers-benefits/js/benefits.js"></script>

<?php get_footer(); ?>


