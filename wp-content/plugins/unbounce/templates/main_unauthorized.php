<div class="ub-authorize-message">
    Before you can publish your pages to WordPress you will have to authorize your Unbounce account.
</div>

<?php

 echo UBTemplate::render(
     'authorize_button',
     array(
       'text' => 'Authorize With Unbounce',
       'domain' => $domain,
       'wrap_in_p' => true,
       'is_primary' => true,
     )
 ) ?>

<form method="get" action="http://unbounce.com/landing-pages-for-wordpress/" target='_blank'>
  <input type="hidden" name="utm_medium" value="product" />
  <input type="hidden" name="utm_source" value="wordpress-plugin" />
  <input type="hidden" name="utm_campaign" value="product-launch-wordpress" />
  <p>
    Not an Unbounce customer?
    <?php echo get_submit_Button('Try Unbounce For Free', 'secondary', null, false); ?>
  </p>
</form>