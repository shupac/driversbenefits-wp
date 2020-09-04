<?php /* Template Name: Verify */ ?>

<?php get_header(); ?>

<div class="verify__container">
	<h3 class="verify__title"><?php the_title(); ?></h3>
	<div class="verify__main">
		<?php the_content(); ?>
	</div>
</div>

<script>
	const DB_BACKEND_URL = '<?php echo DB_BACKEND_URL;?>';
</script>
<script src="/wp-content/themes/drivers-benefits/js/verify.js"></script>


<?php get_footer(); ?>
