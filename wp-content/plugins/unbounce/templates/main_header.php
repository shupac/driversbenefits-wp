<img class="ub-logo src=<?php echo $img_url; ?>" />
<h1 class="ub-unbounce-pages-heading">Unbounce Pages</h1>

<?php if ($authorization === 'success' && $is_authorized) : ?>
  <div class="updated"><p>Authorized with Unbounce and WordPress domain successfully enabled.</p></div>
<?php elseif ($authorization === 'success') : ?>
  <div class="updated"><p>Successfully authorized with Unbounce.</p></div>
<?php elseif ($authorization === 'failure') : ?>
  <div class="error"><p>Sorry, there was an error authorizing with Unbounce. Please try again.</p></div>
<?php endif; ?>

<?php // Only show error if they've never authorized, otherwise it will be shown right away ?>
<?php if ($show_warning) : ?>
  <div class="error">
    <p>
      We have identified a configuration issue with this Unbounce Pages Plugin and your WordPress
      configuration, please <a href="<?php echo admin_url('admin.php?page=unbounce-pages-diagnostics'); ?>">click here
      </a> for more details.
    </p>
  </div>
<?php endif; ?>
