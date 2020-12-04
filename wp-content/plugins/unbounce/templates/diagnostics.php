<?php

$domain_is_authorized = "<p>The plugin is not able to verify that your domain ({$domain}) is added to your account in Unbounce.</p>
                      <p>Possible causes:</p>
                      <ul class=\"causes\">
                      <li>Log in & out of Unbounce. It s possible that your session has expired</li>
                      <li>Domain is not added in Unbounce account you are using to authorize. Make sure that the domain is present in a client you are the owner or administrator for.</li>
                      <li>Domain in Unbounce does not match WP configured domain (i.e. has, or does not have www.). The domain listed in Unbounce must match the WP domain exactly, so if it is configured to be www.domain.com, then that should be what is listed in the domain portion of your Unbounce account.</li>
                      <li>In order to connect with Unbounce, we need to validate the cert for wp.unbounce.com. Please make sure that your CA Cert file is up to date, as an out of date CA Cert file can cause the connection to fail</li>
                      </ul>
                      For more troubleshooting information please read our <a href=\"https://documentation.unbounce.com/hc/en-us/articles/360000393623-Troubleshooting-WordPress-Plugin-Technical-Issues\" target=\"_blank\">Support Article</a>";

$can_fetch_page_listing = "<p>We are unable to fetch the page listing from Unbounce, there are a few possible reasons for this issue.</p>
                           <ul class=\"causes\">
                             <li>Occasionally the domain in Unbounce can be added improperly, and sitemap file does not exist on our servers. To fix this issue simply remove & re-add the domain in Unbounce.</li>
                             <li>Your plugin may need to re-authorize with Unbounce, try clicking the \"Update Published Page List\". This will trigger an attempt to re-authorize with Unbounce.</li>
                             <li>If your WP install is behind a proxy or a firewall, then the Unbounce WP Plugin might have difficulty connecting with the Unbounce servers. Please see our troubleshooting documentation linked below for additional information</li>
                             <li>The plugin uses cURL in order to fetch the published page list. Ensure that your server has php-curl installed. You may need to ask your hosting provider for support.</li>
                           </ul>

<p>For more troubleshooting information please read our <a href=\"https://documentation.unbounce.com/hc/en-us/articles/360000393623-Troubleshooting-WordPress-Plugin-Technical-Issues\" target=\"_blank\">Support Article</a></p>";

$curl_support = '<p>The Unbounce Plugin uses cURL to fetch page listing information. Either the version of cURL installed is not supported, or the php-curl extension is not installed.</p>
                 <p>Please ensure that cURL has been properly configured on your server.</p>';

$xml_support = '<p>The Unbounce Plugin requires that the php-xml extension be installed. We parse xml in order to determine what pages should be served by Unbounce</p>
                      <p>Please ensure that your server has php-xml installed.</p>';

$permalink_structure = "<p>By default WordPress uses web URLs which have question marks and lots of numbers in them; however, this default structure will not work with the Unbounce Plugin. </p>

                      <p>Please update your <a href=\"{$permalink_url}\" target=\"_blank\">WordPress Permalink Structure</a> (link to: yourdomain.com/wp-admin/options-permalink) and change to anything other than the default WordPress setting.</p>";

$supported_php_version = 'The Unbounce Pages plugin is supported when using PHP version 5.6 or higher, please contact your hosting provider or IT professional and update to a supported version.';

$supported_wordpress_version = 'The Unbounce Pages plugin is supported on WordPress versions 4.0 and higher, please contact your hosting provider or IT professional and update to a supported version.';

$sni_support = 'The Unbounce Plugin communicates with the Unbounce servers using a TLS 1.2 connection, this requires SNI support in order to function. Our diagnostics indicate that your server does not currently have SNI support.';

$diagnostic_descriptions = array(
    'Curl Support' => $curl_support,
    'XML Support' => $xml_support,
    'Permalink Structure' => $permalink_structure,
    'Domain is Authorized' => $domain_is_authorized,
    'Can Fetch Page Listing' => $can_fetch_page_listing,
    'Supported PHP Version' => $supported_php_version,
    'Supported Wordpress Version' => $supported_wordpress_version,
    'SNI Support' => $sni_support
);

?>

<div class="ub-plugin-wrapper">
  <img class="ub-logo" src="<?php echo $img_url; ?>" />
  <h1 class="ub-unbounce-pages-heading">Unbounce Pages Diagnostics</h1>
  <a href="<?php echo admin_url('admin.php?page=unbounce-pages'); ?>">Main Plugin Page</a>
  <br/>
  <ul class="ub-diagnostics-checks">
    <?php foreach ($checks as $check => $success) : ?>
    <?php $css_class = ($success ? 'dashicons-yes' : 'dashicons-no-alt'); ?>
      <li>
        <span class='dashicons <?php echo $css_class; ?>'></span>
        <?php
        echo $check;

        if (!$success) {
            foreach ($diagnostic_descriptions as $title => $description) {
                if ($title == $check) {
                    echo '<p class="ub-diagnostics-check-description">' . $description . '</p>';
                }
            }
        }
        ?>
      </li>
    <?php endforeach; ?>
  </ul>

  <h2>Troubleshooting Information</h2>
  <p>There are a number of known issues with the Unbounce WP Plugin, with different possible causes.</p>

  <div class="info">
   <h2>Known issues:</h2>
   <ul class="causes">
            <li>Unbounce Pages 404ing</li>
            <li>                Unbounce Pages are not tracking stats</li>
            <li>Form Confirmation Dialog isn't loading</li>
<li>Lightboxes aren't loading</li>
            <li>Buttons (clkn/clkg) links do not redirect properly</li>
            <li>Domain Directory in Unbounce says "Plugin Setup Required"</li>
            <li>Seeing Protected Assets after form submission</li>
    </ul>


            <p>Each of the above issues are usually a configuration issue. Please read through our <a href="https://documentation.unbounce.com/hc/en-us/articles/360000393623-Troubleshooting-WordPress-Plugin-Technical-Issues" target="_blank">Troubleshooting Documentation</a> to address each symptom.</p>
  </div>

  <div class="info">
            <h2>Known Incompatible Plugins:</h2>

            <p>Check that you don’t have any caching plugins installed, or any plugins that affect the order in which Javascript is loaded. These types of plugins will affect how Unbounce pages behave on WordPress.</p>
            <ul class="causes">
             <li>wp-rocket - This plugin re-orders script tags, which breaks how Javascript loads for Unbounce pages.</li>
             <li>wp-super-cache - caching plugins often cause Unbounce pages to 404</li>
             <li>wp-total-cache - caching plugins often cause Unbounce pages to 404</li>
             <li>Cloudflare - caching plugins often cause Unbounce pages to 404</li>
            </ul>
            <p>Please see our <a href="https://documentation.unbounce.com/hc/en-us/articles/360000393623-Troubleshooting-WordPress-Plugin-Technical-Issues" target="_blank">Support Documentation</a> for troubleshooting.</p>
  </div>

  <div class="info">
    <h2>Still having issues? Contact our support team</h2>
    <p>If you are experiencing problems with the Unbounce Pages plugin after attempting to troubleshoot the issue, please reach out to our support team at <em>support@unbounce.com</em>.</p>
    <p>Please make sure to include the details below, and if possible, please also provide details on your hosting provider.</p>
  </div>

  <h2>Details</h2>
  <textarea id="ub-diagnostics-text" rows="10" cols="100">
<?php

foreach ($details as $detail_name => $detail) {
    echo "[${detail_name}] ${detail}\n";
}

    ?>
  </textarea>
  <div id="ub-diagnostics-copy-result"></div>
    <?php

    echo get_submit_button(
        'Copy to Clipboard',
        'primary',
        'ub-diagnostics-copy',
        false,
        array('data-clipboard-target' => '#ub-diagnostics-text')
    );

    ?>
</div>
