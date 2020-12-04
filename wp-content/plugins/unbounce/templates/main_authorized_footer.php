<?php

$flush_pages_url = admin_url('admin-post.php');
$diagnostics_url = admin_url('admin.php?page=unbounce-pages-diagnostics');
$refresh_button = get_submit_button('refreshing the Published Pages list', 'secondary', 'flush-unbounce-pages', false);
?>

<h2 class="ub-need-help-header">Need Help?</h2>

<form method="post" action="<?php $flush_pages_url ?>">
  <input type="hidden" name="action" value="flush_unbounce_pages" />
  <p>
    If your pages are not showing up, first try <?php echo $refresh_button; ?>.
    If they are still not appearing, double check that your Unbounce pages are using a Wordpress domain.
  </p>
</form>
<a href="https://documentation.unbounce.com/hc/en-us/articles/360000393623-Troubleshooting-WordPress-Plugin-Technical-Issues" target="_blank">
  Check out our knowledge base.
</a>
<br/>
<a class="ub-diagnostics-link" href="<?php echo $diagnostics_url ?>">
  Click here for troubleshooting and plugin diagnostics
</a>
<p class="ub-version">Unbounce Version 1.0.45</p>
