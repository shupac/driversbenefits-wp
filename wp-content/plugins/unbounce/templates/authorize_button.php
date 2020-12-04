<form method="post" action="<?php echo admin_url('admin-post.php?action=set_unbounce_domains') ?>">
  <input type="hidden" name="domains" />
  <input type="hidden" name="user_id" />
  <input type="hidden" name="domain_id" />
  <input type="hidden" name="client_id" />
    <?php if (isset($outer_text)) { ?>
    <?php echo $outer_text; ?>
    <?php } ?>
    <?php $style = isset($outer_text) ? 'vertical-align: baseline' : ''; ?>
    <?php

    echo get_submit_button(
        $text,
        $is_primary ? 'primary' : 'secondary',
        'set-unbounce-domains',
        $wrap_in_p,
        array(
                               'data-set-domains-url' => admin_url('admin-post.php?action=set_unbounce_domains'),
                                     'data-redirect-uri' => admin_url('admin.php?page=unbounce-pages'),
                                     'data-api-url' => UBConfig::api_url(),
                                     'data-api-client-id' => UBConfig::api_client_id(),
                                     'data-wordpress-domain-name' => $domain,
                                     'style' => $style,
        )
    ); ?>
</form>