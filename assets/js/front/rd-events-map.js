/**
 * Rundiz events map for front-end only.
 */


/**
 * Initialize the Google Map.
 * 
 * @param {string} map_id
 * @returns {undefined}
 */
function rdEventsInitMap(map_id) {
    $ = jQuery.noConflict();

    var rdevents_default_location_bangkok = {lat: 13.736717, lng: 100.523186};
    var rdevents_map_html = document.getElementById(map_id);
    var rdevents_map_zoom = 12;
    if (
        typeof(rdevents_map_html) !== 'undefined' &&
        typeof(rdevents_map_html.dataset) !== 'undefined' &&
        typeof(rdevents_map_html.dataset.mapzoom) !== 'undefined'
    ) {
        if (parseInt(rdevents_map_html.dataset.mapzoom) < 1 && parseInt(rdevents_map_html.dataset.mapzoom) > 20) {
            rdevents_map_zoom = 12;
        } else {
            rdevents_map_zoom = parseInt(rdevents_map_html.dataset.mapzoom);
        }
    }

    rdevents_map = new google.maps.Map(rdevents_map_html, {
        zoom: rdevents_map_zoom,
        center: rdevents_default_location_bangkok
    });

    rdevents_marker = new google.maps.Marker({
        map: rdevents_map
    });

    // check that this page already set marker or not, if yes then add marker.
    if (
        typeof(rdevents_map_html) !== 'undefined' &&
        typeof(rdevents_map_html.dataset) !== 'undefined' &&
        typeof(rdevents_map_html.dataset.markerlat) !== 'undefined' &&
        typeof(rdevents_map_html.dataset.markerlng) !== 'undefined'
    ) {
        // there are values of lat, lng. add the marker.
        var current_marker_on_loaded = new google.maps.LatLng(rdevents_map_html.dataset.markerlat, rdevents_map_html.dataset.markerlng);
        rdevents_marker.setPosition(current_marker_on_loaded);
        rdevents_marker.setVisible(true);
        rdevents_map.setCenter(current_marker_on_loaded);
        delete current_marker_on_loaded;
    }

    // clear.
    delete rdevents_default_location_bangkok;
    delete rdevents_map_html;
    delete rdevents_map_zoom;
}// rdEventsInitMap


// set variable for global use.
var rdevents_map;
var rdevents_marker;


// on page loaded ---------------------------------------------------------------------------
jQuery(function($) {
    rdEventsInitMap('rundiz-events-map');
});