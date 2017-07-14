<?php
/**
 * Plugin Name: Rundiz Events
 * Plugin URI: http://rundiz.com
 * Description: Manage your events and display in the calendar or list.
 * Version: 0.2.3
 * Author: Vee Winch
 * Author URI: 
 * License: MIT
 * License URI: http://opensource.org/licenses/MIT
 * Text Domain: rd-events
 * Domain Path: /App/languages/
 * 
 * @package rundiz-events
 */


// Define this plugin main file path.
if (!defined('RDEVENTS_FILE')) {
    define('RDEVENTS_FILE', __FILE__);
}
// Define this plugin version. Useful in enqueue scripts and styles.
if (!defined('RDEVENTS_VERSION')) {
    define('RDEVENTS_VERSION', '0.2');
}


// Plugin's autoload.
require __DIR__ . DIRECTORY_SEPARATOR . 'autoload.php';


// Run this wp plugin.
$App = new \RdEvents\App\App();
$App->run();
unset($App);


// include the functions file so people can easily use it in their template.
require __DIR__ . DIRECTORY_SEPARATOR . 'App' . DIRECTORY_SEPARATOR . 'functions' . DIRECTORY_SEPARATOR . 'utilities.php';


// That's it. Everything is load and works inside the main App class.