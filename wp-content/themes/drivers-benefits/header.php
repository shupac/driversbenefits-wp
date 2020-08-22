<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>

  <title><?php the_title();?></title>
  <?php wp_head();?>
</head>
<body <?php body_class();?>>
	<div class="header__header">
		<div class="header__container">
			<div class="header__left">
				<a href="/">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/icon-logo.png">
				</a>
			</div>
			<div class="header__right">
				<div class="phone">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/icon-phone.png">
					<a href="tel:18338148590">1-833-814-8590</a>
				</div>
				<a href="https://driversbenefits.org/activate-now/?utm_source=WB">
					<button class="btn btn-primary">Test</button>
				</a>
			</div>
		</div>
	</div>


