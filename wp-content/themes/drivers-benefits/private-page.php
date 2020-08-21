<?php /* Template Name: Private Page */ ?>

<?php get_header(); ?>
<meta name="robots" content="noindex">

<script>
	const isAuth = JSON.parse(localStorage.getItem('driverVerified'));
	if (!isAuth) window.location = '/verify';
</script>

<h1><?php the_title(); ?></h1>

<?php if (have_posts()) : while(have_posts()) : the_post(); ?>
	<?php the_content(); ?>
<?php endwhile; endif; ?>

<?php get_footer(); ?>
