<?php

class UBEvents
{

    public static function successful_authorization_event($data)
    {
        return UBEvents::event(
            'WordPressSuccessfulAuthorizationEventV1.0',
            UBEvents::authorization_event($data)
        );
    }

    public static function failed_authorization_event($data)
    {
        return UBEvents::event(
            'WordPressFailedAuthorizationEventV1.0',
            UBEvents::authorization_event($data)
        );
    }

    /**
     * @param array $environment
     * @param array|null $sitemapRequest
     * @param string|null $previousVersion
     *
     * @return array
     */
    public static function activationEvent($environment, $sitemapRequest, $previousVersion = null)
    {
        $data = array('environment' => $environment, 'sitemap_request' => $sitemapRequest);

        if ($previousVersion) {
            $data['previous_version'] = $previousVersion;
        }

        return UBEvents::event('WordpressActivationEventV1.0', $data);
    }

    public static function log_event($data)
    {
        return UBEvents::event('WordpressLogV1.0', $data);
    }

    private static function authorization_event($data)
    {
        $event = array(
        'domain_name' => $data['domain_name'],
        'first_authorization' => (boolean) $data['first_authorization'],
        'metadata' => array()
        );

        if ($data['domain_id']) {
            $event['domain_id'] = UBEvents::maybe_convert_to_int($data['domain_id']);
        }

        if ($data['user_id']) {
            $event['metadata']['user_id'] = UBEvents::maybe_convert_to_int($data['user_id']);
        }

        if ($data['client_id']) {
            $event['metadata']['client_id'] = UBEvents::maybe_convert_to_int($data['client_id']);
        }

        return $event;
    }

    private static function maybe_convert_to_int($str)
    {
        if (is_numeric($str)) {
            return intval($str);
        } else {
            return $str;
        }
    }

    private static function event($type, $data)
    {
        $event = array_merge(
            array('type' => $type),
            UBEvents::default_attributes(),
            $data
        );
        $json_unescaped = json_encode($event);
        return str_replace('\\/', '/', $json_unescaped);
    }

    private static function default_attributes()
    {
        $datetime = new DateTime('NOW', new DateTimeZone('UTC'));
        return array('id' => uniqid(),
                 'time_sent' => $datetime->format('Y-m-d\TH:i:s\Z'),
                 'source' => UBConfig::UB_USER_AGENT . ' ' . gethostname());
    }
}
