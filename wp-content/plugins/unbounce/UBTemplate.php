<?php

class UBTemplate
{

 /*
  * Renders a PHP template with local variables.
  *
  * `$template` Path to a PHP template
  * `$vars` An array of local variables to render in the template
  *
  * For example:
  *
  * templates/hello.php:
  * <h1>Hello, <?php $name; ?>!</h1>
  *
  * echo UBTemplate::render('hello', array('name' => 'World'));
  *
  * will output:
  *
  * <h1>Hello, World!</h1>
  *
  */

    public static function render($template, $vars = array())
    {
        ob_start();
        try {
            extract($vars);
            include(UBTemplate::template_path($template));
        } catch (Exception $e) {
            echo $e;
        }
        return ob_get_clean();
    }

    public static function template_path($template)
    {
        return UBTemplate::join_paths(dirname(__FILE__), 'templates', $template . '.php');
    }

    private static function join_paths()
    {
        return preg_replace('~[/\\\]+~', DIRECTORY_SEPARATOR, implode(DIRECTORY_SEPARATOR, func_get_args()));
    }
}
