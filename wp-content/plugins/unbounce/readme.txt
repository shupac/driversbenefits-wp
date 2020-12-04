=== Unbounce Landing Pages ===
Contributors: unbouncewordpress
Tags: Unbounce, AB testing, A/B testing, split testing, CRO, conversion optimization, wordpress landing page, wp landing pages, splash pages, landing pages, squeeze pages, lead gen, lead generation, email list, responsive landing pages, templates, inbound marketing, ppc, analytics
Requires at least: 4.1.5
Tested up to: 5.4
Stable tag: 1.0.45
Requires PHP: 7.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Unbounce is the most powerful standalone landing page builder available.

== Description ==

With Unbounce’s landing page plugin for WordPress, marketers can create fully customized landing pages for
their campaigns and publish them to their existing WordPress sites.

To publish landing pages on your WordPress website:

1. Build your landing page in Unbounce, the world’s most powerful landing page builder
1. Publish your page to WordPress using this very plugin
1. Manage all your WordPress landing pages through the plugin’s interface
1. Edit and update all your landing pages from Unbounce’s page builder. They’ll automatically get updated on your WordPress site

Unbounce allows you to customize your landing pages to match your brand perfectly. The WYSIWYG builder allows
for quick and easy page editing. With the Unbounce WordPress Landing Page Plugin, you can launch your landing
page on your own domain without ever talking to I.T. Try it for a month for free!

More than 10,000 digital marketers use Unbounce. Some of the features they love the most include:

- Publish pages to your WordPress domain
- A team of Customer Success coaches that are easy to reach when you need help
- 80+ free templates (plus more on ThemeForest)
- Complete customizability of the desktop and mobile layouts
- Built in A/B testing features
- Integrations with the tools marketers use - MailChimp, SalesForce, Hubspot & more
- Easy Google Analytics tagging & event tracking
- Plus much more

== Installation ==

Our plugin requires the following setup for the WordPress Server:
- cURL 7.34.0+
- OpenSSL 1.0.1+

We recommend at least PHP 7.2.

1. Create a Wordpress domain in [Unbounce](http://unbounce.com/ "The Mobile Responsive Landing Page Builder for Marketers")
1. Install this plugin through the WordPress store
1. Activate this plugin after installation completes

OR

1. Create a Wordpress domain in [Unbounce](http://unbounce.com/ "The Mobile Responsive Landing Page Builder for Marketers")
1. Upload the zip file via the 'Plugins' menu in WordPress
1. Activate this plugin after installation completes

== Frequently Asked Questions ==

= Do I need an Unbounce account? =

Yes. You need to sign up for Unbounce in order to publish pages. To publish Unbounce pages to your
Unbounce site, you will need to add a Wordpress domain in Unbounce. For example, if you Wordpress
site is available at www.example.com, you will need to add www.example.com and publish pages in
Unbounce to that domain for them to be visible on your Wordpress site.

= Do I need to log in to Unbounce? =

Yes, after installing and activating this plugin, you will need to go "Unbounce Pages" in the admin
section and click "Authorize With Unbounce." You will then be sent to Unbounce where you need to
log in. You must log in as an Unbounce user that has access to the Client that has the current
domain in Unbounce, or you will need to authorize again as an authorized user before the plugin
will function.

= Does this plugin fetch any data from Unbounce? =

Yes, this plugin will pull information from Unbounce's servers regarding which pages you have
published from Unbounce to your Wordpress site. Any pages that you have published to your Wordpress
site in Unbounce will be fetched from Unbounce's servers and displayed on your Wordpress site.
If you have a page published in Unbounce and are using the same URL for a Wordpress Page, the
Unbounce page will be displayed, not the Wordpress page.

= Does this plugin send any data to Unbounce? =

No, not by default. This plugin as an optional "debug" mode which will send diagnostic information to
Unbounce when switched on. This feature is disabled when you install the plugin. An Unbounce Customer
Success Coach may request that you turn the debug feature on if you are experiencing issues with the plugin
to help track down the issue.

= Unbounce Pages are loading, but my conversions are not being tracked =

This is typically caused by caching responses which affects how users are assigned unique identifiers.
You should add a rule to your cache to avoid caching Unbounce Pages which have the HTTP header "X-Unbounce-Plugin".

== Screenshots ==

1. Build your landing page in Unbounce, the world’s most powerful landing page builder.
2. Publish your page to WordPress using this very plugin.
3. View all of your WordPress landing pages in the plugin’s interface and easily manage them in Unbounce.
4. Edit and update all your landing pages from Unbounce’s page builder. They’ll automatically get updated on your WordPress site.

== Changelog ==

= 1.0.45 =
* Documentation updates to reflect minimum PHP requirements (currently 7.2)
* Add support for PHP 7.2 and higher
* Tested with WP 5.4

= 1.0.44 =
* Documentation updates to reflect minimum PHP requirements (currently 5.3)
* Tested with WP 5.1

= 1.0.43 =
* Fixes an issue handling cookies
* Fixes an issue handling redirects

= 1.0.42 =
* Fixes an issue causing older versions of PHP to get a 404 when visiting pages
* Updated diagnostics and matching documentation to require PHP 5.6 or higher

= 1.0.41 =
* Fixed the issue in 1.0.39 that cause the API client ID to be defaulted to empty

= 1.0.40 =
* Effective reversal to 1.0.37 to address blocking issue to some customers

= 1.0.39 =
* Fixes an issue preventing new options from being created when upgrading the plugin

= 1.0.38 =
* Adds an option (ub-use-curl) to opt-out of using cURL as a proxying client, the alternative being wp_remore_request

= 1.0.37 =
* Better documentation and troubleshooting
* Tested with WP 5.0

= 1.0.36 =
* Improved testing instrumentation

= 1.0.35 =
* Update plugin requirements

= 1.0.34 =
* New diagnostics entry for SSL's SNI Support on WordPress installations
* Better

= 1.0.33 =
* Improved support for PHP 7.1

= 1.0.32 =
* Fix support for PHP 5.3

= 1.0.31 =
* Un-released 1.0.30 (same as 1.0.29)

= 1.0.30 =
* Minor bug fix

= 1.0.29 =
* Minor bug fix

= 1.0.28 =
* Disables the unbounce plugin when editing drafts as a logged in user.

= 1.0.27 =
* Add a custom header "X-Unbounce-Plugin: 1" to identify all pages served by the plugin to support cache invalidation.

= 1.0.26 =
* Minor fix

= 1.0.25 =
* Minor bug fix

= 1.0.24 =
* Improves support for installations using SSL
  * is_ssl() has higher precedence for determing protocol of content to serve

= 1.0.23 =
* Add optional support for web servers with a load balancer or proxy that is on a different network
  * This feature can be enabled with the ub-allow-public-address-x-forwarded-for option
  * This feature may decrease the effectiveness of spam detection in some cases, and should only be enabled if absolutely necessary

= 1.0.22 =
* Add global UB_ENABLE_LOCAL_LOGGING to enable/disable debug logging of Unbounce Plugin

= 1.0.21 =
* Fixes some multi-site compatibility issues

= 1.0.20 =
* Revert changes in 1.0.19

= 1.0.19 =
* Minor bug fix

= 1.0.18 =
* Minor bug fix

= 1.0.17 =
* Fixes some multi-site compatibility issues

= 1.0.16 =
* Update compatibility information and changelog

= 1.0.15 =
* Added support for rounded corners, gradients, and transparency on IE 8

= 1.0.14 =
* Minor improvements
* Added support for viewing page variants directly (i.e. a.html, b.html, etc)

= 1.0.13 =
* Minor bug fix

= 1.0.11 =
* Add support for earlier versions of curl on WP installs (<7.30)
* Increased timeout for proxying pages
* Updated plugin description and diagnostics page

= 1.0.10 =
* Minor bug fix

= 1.0.9 =
* Minor bug fixes

= 1.0.6 =
* Fixed a bug with how checkbox values were being sent

= 1.0.4 =
* Add support for POSTS to landing page URLS
* Minor bug fixes

= 1.0.3 =
* Added a diagnostics page

= 1.0.2 =
* Fix bug with Unbounce accounts that have more than 50 domains

= 1.0.1 =
* Updated plugin description readme

= 1.0.0 =
* Bug fixes for authorization and caching issues.
* No longer in beta!

= 0.1.19 =
* This release introduces the requirement to authorize your installation with Unbounce. After installing
  you will need to go "Unbounce Pages" in the admin section and click "Authorize With Unbounce." You
  will then be sent to Unbounce where you need to log in. You must log in as an Unbounce user that
  has access to the Client that has the current domain in Unbounce, or you will need to authorize
  again as an authorized user before the plugin will function.
* Fixes compatibility issues with caching plugins such as ZenCache, W3 Total Cache, and WP Super Cache

= 0.1.1 =
* Initial release

== Upgrade Notice ==
