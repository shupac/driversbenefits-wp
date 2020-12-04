<?php

class UBUtil
{

    public static function array_select_by_key($input, $keep)
    {
        return array_intersect_key($input, array_flip($keep));
    }

    public static function array_fetch($array, $index, $default = null)
    {
        return isset($array[$index]) ? $array[$index] : $default;
    }

    public static function time_ago($timestamp)
    {
        $now = new DateTime('now');
        $from = new DateTime();
        $from->setTimestamp($timestamp);
        $diff = date_diff($now, $from);

        if ($diff->y > 0) {
            $message = $diff->y . ' year'. ($diff->y > 1 ? 's' : '');
        } elseif ($diff->m > 0) {
            $message = $diff->m . ' month'. ($diff->m > 1 ? 's' : '');
        } elseif ($diff->d > 0) {
            $message = $diff->d . ' day' . ($diff->d > 1 ? 's' : '');
        } elseif ($diff->h > 0) {
            $message = $diff->h . ' hour' . ($diff->h > 1 ? 's' : '');
        } elseif ($diff->i > 0) {
            $message = $diff->i . ' minute' . ($diff->i > 1 ? 's' : '');
        } elseif ($diff->s > 0) {
            $message = $diff->s . ' second' . ($diff->s > 1? 's' : '');
        } else {
            $message = 'a moment';
        }

        return $message . ' ago';
    }

    public static function clear_flash()
    {
        foreach ($_COOKIE as $cookie_name => $value) {
            if (strpos($cookie_name, 'ub-flash-') === 0) {
                setcookie($cookie_name, '', time() - 60);
            }
        }
    }

    public static function get_flash($cookie_name, $default = null)
    {
        return UBUtil::array_fetch($_COOKIE, "ub-flash-${cookie_name}", $default);
    }

    public static function set_flash($cookie_name, $value)
    {
        setcookie("ub-flash-${cookie_name}", $value, time() + 60);
    }

    public static function get_lock()
    {
        global $wpdb;

        try {
            $lock = $wpdb->get_var('select coalesce(get_lock("' . UBConfig::UB_LOCK_NAME . '",0), 0);');

            return (bool) $lock;
        } catch (Exception $e) {
            // ensure backward compatibility on failure
            return true;
        }
    }

    public static function release_lock()
    {
        global $wpdb;

        try {
            $release = $wpdb->get_var('select coalesce(release_lock("' . UBConfig::UB_LOCK_NAME . '"), 0);');

            return (bool) $release;
        } catch (Exception $e) {
            // ensure backward compatibility on failure
            return true;
        }
    }

  /**
   * Checks if the current page is a preview page (from on GET parameters).
   *
   * This is needed because Wordpress's is_preview() is only true for pages that
   * are already published.
   *
   * This should return true when:
   *   - previewing posts
   *   - previewing pages
   *   - previewing drafts (of posts & pages)
   */
    public static function is_wordpress_preview($get_params)
    {
        return isset($get_params['preview'])
        && (isset($get_params['p']) || isset($get_params['page_id']) || isset($get_params['preview_id']));
    }
}
