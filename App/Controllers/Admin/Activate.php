<?php


namespace RdEvents\App\Controllers\Admin;

if (!class_exists('\\RdEvents\\App\\Controllers\\Admin\\Activate')) {
    /**
     * The controller that will be working on activate the plugin.
     */
    class Activate implements \RdEvents\App\Controllers\ControllerInterface
    {


        use \RdEvents\App\AppTrait;


        /**
         * Activate the plugin.
         * 
         * @access protected Do not access this method directly. It is for callback only.
         * @global \wpdb $wpdb WordPress db class.
         */
        public function activateAction()
        {
            global $wpdb;

            \RdEvents\App\Libraries\Debug::writeLog('RdEvents activateAction() method was called.');

            // check that there is an option from this plugin added, if not then add new.
            $plugin_option = get_option($this->main_option_name);
            if ($plugin_option === false) {
                // not exists, add new.
                add_option($this->main_option_name, []);
            }
            unset($plugin_option);
            // finished activate the plugin.

            // register post type
            // @link https://codex.wordpress.org/Function_Reference/register_post_type Reference.
            $EventsPostType = new \RdEvents\App\Controllers\Admin\Events\EventsPostType();
            $EventsPostType->registerPostType();
            unset($EventsPostType);

            // flush after register post type.
            flush_rewrite_rules();
        }// activateAction


        /**
         * {@inheritDoc}
         */
        public function registerHooks()
        {
            // register activate hook
            register_activation_hook(RDEVENTS_FILE, [&$this, 'activateAction']);
        }// registerHooks


    }
}