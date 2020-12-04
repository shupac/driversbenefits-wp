<h2 class="ub-published-pages-heading">Published Pages</h2>

<form method="get" action="https://app.unbounce.com" target="_blank">
  <?php

  echo get_submit_button(
      'Manage Pages In Unbounce',
      'primary',
      'flush-unbounce-pages',
      false,
      array('style' => 'margin-top: 10px')
  ); ?>
</form>

<div class="ub-page-list">
    <?php $table = new UBPageTable($proxyable_url_set); ?>
    <?php echo $table->display(); ?>

  <p>Last refreshed  <?php echo $last_refreshed; ?>.</p>

    <?php

    echo UBTemplate::render(
        'authorize_button',
        array(
                                'text' => 'Update WordPress Enabled Domains',
                                      'domain' => $domain,
                                      'wrap_in_p' => false,
                                      'is_primary' => false,
        )
    ); ?>
</div>