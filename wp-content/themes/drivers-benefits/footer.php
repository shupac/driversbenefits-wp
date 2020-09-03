	<?php
		$query = new WP_Query( array( 'pagename' => '__private__posts' ) );
	  $query->the_post();
	  echo the_content();
		wp_reset_postdata();
	?>

	<section class="footer__posts">
	</section>

	</main>
	<footer class="main-footer">
		<div class="footer__cta_shadow">
			<?php
				$query = new WP_Query( array( 'pagename' => '__private__cta' ) );
			  $query->the_post();
			  echo the_content();
				wp_reset_postdata();
			?>
		</div>
		<div class="footer__cta"></div>
		<?php wp_nav_menu( array ( 'menu' => 'footer-menu' ) ); ?>
		<div class="social">
			<a href="https://www.facebook.com/driversbenefits/" target="_blank" rel="no-referrer"><i class="fab fa-facebook-f"></i></a>
			<a href="https://twitter.com/DriversBenefits" target="_blank" rel="no-referrer"><i class="fab fa-twitter"></i></a>
		</div>
		<p id="copyright">© Copyright 2020 Drivers Benefits Fund</p>
	</footer>
	<script src="/wp-content/themes/drivers-benefits/js/posts.js"></script>
	<script src="/wp-content/themes/drivers-benefits/js/footer.js"></script>
	<script src="/wp-content/themes/drivers-benefits/js/news.js"></script>
	<script src="/wp-content/themes/drivers-benefits/js/accordion.js"></script>
<?php wp_footer(); ?>
</body>
</html>
