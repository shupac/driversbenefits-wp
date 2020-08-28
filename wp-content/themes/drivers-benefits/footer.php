

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
		<div>
			<div class="footer-list">
				<div class="fl-item">FAQ</div>
				<div class="fl-item">About Us</div>
				<div class="fl-item">Contact</div>
				<div class="fl-item">News</div>
			</div>
		</div>
		<div class="social">
			<a href="https://www.facebook.com/driversbenefits/"><i class="fab fa-facebook-f"></i></a>
			<a href="https://twitter.com/DriversBenefits"><i class="fab fa-twitter"></i></a>
		</div>
		<p id="copyright">© Copyright 2020 Drivers Benefits Fund</p>
	</footer>
	<script src="/wp-content/themes/drivers-benefits/js/posts.js"></script>
	<script src="/wp-content/themes/drivers-benefits/js/footer.js"></script>
<?php wp_footer(); ?>
</body>
</html>
