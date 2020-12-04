<div class="error">
  <p>It looks like <strong><?php echo $domain; ?></strong> has not been added as a WordPress domain
    in your Unbounce account.</p>
</div>

<form method="get" action="https://app.unbounce.com/add_wordpress_domain" target="_blank">
  <input type="hidden" name="domain_name" value="<?php echo $domain; ?>" />
    <?php

    get_submit_Button(
        'Add My Domain in Unbounce',
        'primary',
        null,
        true,
        array(
          'id' => 'add-domain',
          'onclick' => 'swap_primary_buttons("add-domain", "set-unbounce-domains");',
        )
    ); ?>
</form>

<?php

 echo UBTemplate::render(
     'authorize_button',
     array(
                              'text' => 'Update WordPress Enabled Domains',
                                    'domain' => $domain,
                                    'wrap_in_p' => false,
                                    'is_primary' => false,
                                    'outer_text' => 'After adding your domain in Unbounce, come back here and ',
     )
 ); ?>