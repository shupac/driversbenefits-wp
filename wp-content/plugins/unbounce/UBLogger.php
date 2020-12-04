<?php

class UBLogger
{

  // should be called when the plugin is loaded
    public static function setup_logger()
    {
        if (!isset($GLOBALS['wp_log_plugins'])) {
            $GLOBALS['wp_log_plugins'] = array();
        }
        $GLOBALS['wp_log_plugins'][UBConfig::UB_PLUGIN_NAME] = array();
        $GLOBALS['wp_log_plugins'][UBConfig::UB_PLUGIN_NAME . '-vars'] = array();
    }

    public static function format_log_entry($level, $msg)
    {
        $msg = is_string($msg) ? $msg : print_r($msg, true);
        return '[' . UBConfig::UB_PLUGIN_NAME . '] [' . $level . '] ' . $msg;
    }

    private static function log_wp_log($log_entry)
    {
        $GLOBALS['wp_log'][UBConfig::UB_PLUGIN_NAME][] = $log_entry;
    }

    private static function log_wp_log_var($var, $val)
    {
        $GLOBALS['wp_log'][UBConfig::UB_PLUGIN_NAME . '-vars'][$var] = $val;
    }

    private static function log_error_log($log_entry)
    {
        error_log($log_entry);
    }

    public static function log($level, $msg)
    {
        if (UBConfig::debug_loggging_enabled()) {
            $log_entry = UBLogger::format_log_entry($level, $msg);
            UBLogger::log_wp_log($log_entry);
            UBLogger::log_error_log($log_entry);
        }
    }

    public static function log_var($level, $var, $val)
    {
        if (UBConfig::debug_loggging_enabled()) {
            UBLogger::log($level, '$' . $var . ': ' . $val);
            UBLogger::log_wp_log_var($var, $val);
        }
    }

    public static function info($msg)
    {
        UBLogger::log('INFO', $msg);
    }

    public static function warning($msg)
    {
        UBLogger::log('WARNING', $msg);
    }

    public static function debug($msg)
    {
        UBLogger::log('DEBUG', $msg);
    }

    public static function debug_var($var, $val)
    {
        UBLogger::log_var('DEBUG', $var, $val);
    }

    public static function config($msg)
    {
        UBLogger::log('CONFIG', $msg);
    }
}
