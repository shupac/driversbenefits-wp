<?php

namespace Buttonizer\Api\PageRules\WordPressData;

use Buttonizer\Utils\Maintain;

/**
 * WordPress Buttonizer API
 * 
 * @endpoint /wp-json/buttonizer/pagerules/pages
 * @methods GET
 */
class ApiPages {
    /**
     * Register route
     */
    public function registerRoute() {
        register_rest_route('buttonizer', '/page_rules/pages', [
            [
                'methods'  => ['GET'],
                'args' => [
                    'nonce' => [
                        'validate_callback' => function($value) {
                            return wp_verify_nonce($value, 'wp_rest');
                        },
                        'required' => true
                    ]
                ],
                'callback' => [$this, 'get'],
                'permission_callback' => function() {
                    return Maintain::hasPermission();
                }
            ]
        ]);
    }

    /**
     * Get page rules pages
     */
    public function get() {
        $frontPageID = get_option('page_on_front');

        $query = new \WP_Query([
            'post_type' => 'any',
            'numberposts' => -1,
            'orderby' => 'post_type',
            'order' => 'ASC'
        ]);

        $pages = [];

        while ($query->have_posts()) {
            $query->the_post();
            $postType = get_post_type_object(get_post_type());

            $pages[] = [
                'id'    => get_the_ID(),
                'name' => get_the_title() . (is_front_page() ? ' (frontpage, home)' : ''),
                'type' => $postType ? $postType->labels->singular_name : get_post_type()
            ];
        }

        return [
            'success' => true,
            'data' => $pages,
            'result_count' => count($pages)
        ];
    }
}