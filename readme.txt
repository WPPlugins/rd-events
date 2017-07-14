=== Rundiz Events ===
Contributors: okvee
Tags: events, meeting, plans, calendar
Requires at least: 4.0
Tested up to: 4.7.4
Stable tag: 0.2.3
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9HQE4GVV4KTZE
License: MIT
License URI: http://opensource.org/licenses/MIT

Manage your events and display in the calendar or list.

== Description ==
Manage your events such as meetings, product launch, workshop, etc and display it in the calendar or list.

This is not include the ticket system or any commerce system, it is just for displaying what events is coming or past.

= System requirement =
PHP 5.5 or higher<br>
WordPress 4.0 or higher

== Installation ==
1. Upload "rd-events" folder to the "/wp-content/plugins/" directory.
2. Activate the plugin through the "Plugins" menu in WordPress.
3. Done.

== Frequently Asked Questions ==
= Is multisite support? =
No, it doesn't but if you found that it works very well on multisite enabled then please tell me.

= Is it including ticket system or any additional plugin for this? =
No, it doesn't support for now. It is just only for display events no any ticket system.

= Does it cleanup database on uninstall? =
Yes, it is. This plugin will remove all of its post type and options on uninstall. So, your database will be clean.

= Can I design for my own theme =
Yes, you can create archive-rd_events.php and single-rd_events.php for display archive and single page for this plugin. The rd_events suffix is custom post type for this plugin.
You can use the example from with in example folder that we provide with this plugin, or you can use default template in App/templates folder.

= Any more question? =
Please ask your question in support section and add mention to @okvee.

== Screenshots ==
1. Events in admin page.
2. Editing the event form.
3. Example of event calendar widget.
4. Example of event calendar in archive page. You can also switch view to day/week/month. Thanks to Fullcalendar for this powerful calendar javascript.
5. Example of event details page (single post). This also included Google Maps and we have API settings for you so you can use with new Google Maps API version with no problem.
6. Screenshot of how it works on real website.

== Changelog ==

= 0.2 =
2017-04-11

* Fix error on activate.
* Add lang parameter while ajax get data to support polylang. (0.2.1)
* Fix to allow quick edit. (0.2.2)
* Add setting to not use ajax (get all events at once on page load). (0.2.3)

= 0.1 =
2017-04-05

* The beginning.

== Upgrade Notice ==

