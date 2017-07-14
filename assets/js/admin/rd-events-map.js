/**
 * Rundiz events map
 */


/**
 * Clear location.
 * 
 * @returns {undefined}
 */
function rdEventsClearLocation() {
    $('#rd-events-location').val('');
    $('#rd-events-location-lat').val('');
    $('#rd-events-location-lng').val('');
    marker.setVisible(false);
    infowindow.close();
}// rdEventsClearLocation


/**
 * Disable press enter on input.
 * 
 * @returns {Boolean} Return false on enter.
 */
function rdEventsDisableEnterInput() {
    $ = jQuery.noConflict();

    $('#rd-events-location').on('keyup keypress', function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });
}// rdEventsDisableEnterInput


/**
 * Initialize the Google Map.
 * 
 * @returns {undefined}
 */
function rdEventsInitMap() {
    $ = jQuery.noConflict();

    var bangkok = {lat: 13.736717, lng: 100.523186};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: bangkok
    });
    if (navigator.geolocation && $('#rd-events-location-lat').val() == '' && $('#rd-events-location-lng').val() == '') {
        // if browser support for geolocation and there are no any saved lat, lng values.
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
        });
    }

    var input = document.getElementById('rd-events-location');
    var autocomplete = new google.maps.places.Autocomplete(
        input, {placeIdOnly: true}
    );
    autocomplete.bindTo('bounds', map);

    infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('rd-events-infowindow-content');
    infowindow.setContent(infowindowContent);
    var geocoder = new google.maps.Geocoder;
    marker = new google.maps.Marker({
        map: map,
        draggable: true
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    // click to add marker.
    map.addListener('click', function(event) {
        marker.setPosition(event.latLng);
        marker.setVisible(true);
        geocoder.geocode({'latLng': marker.getPosition()}, function (results, status) {
            if (status !== 'OK') {
                return ;
            }
            infowindowContent.children['rd-events-place-name'].textContent = '';
            infowindowContent.children['rd-events-place-address'].textContent = results[0].formatted_address;
            infowindow.open(map, marker);
            $('#rd-events-location').val(results[0].formatted_address);
            $('#rd-events-location-lat').val(event.latLng.lat());
            $('#rd-events-location-lng').val(event.latLng.lng());
        });
    });

    // drag marker to change info including lat, lng.
    marker.addListener('dragend', function(event) {
        marker.setPosition(event.latLng);
        marker.setVisible(true);
        geocoder.geocode({'latLng': marker.getPosition()}, function (results, status) {
            if (status !== 'OK') {
                return ;
            }
            console.log(results[0]);
            infowindowContent.children['rd-events-place-name'].textContent = '';
            infowindowContent.children['rd-events-place-address'].textContent = results[0].formatted_address;
            infowindow.open(map, marker);
            $('#rd-events-location').val(results[0].formatted_address);
            $('#rd-events-location-lat').val(event.latLng.lat());
            $('#rd-events-location-lng').val(event.latLng.lng());
        });
    });

    // autocomplete add marker.
    autocomplete.addListener('place_changed', function () {
        infowindow.close();
        var place = autocomplete.getPlace();

        if (!place.place_id) {
            return;
        }
        geocoder.geocode({'placeId': place.place_id}, function (results, status) {
            if (status !== 'OK') {
                window.alert(status);
                return;
            }
            map.setCenter(results[0].geometry.location);
            // Set the position of the marker using the location.
            marker.setPosition(results[0].geometry.location);
            marker.setVisible(true);
            infowindowContent.children['rd-events-place-name'].textContent = place.name;
            infowindowContent.children['rd-events-place-address'].textContent = results[0].formatted_address;
            infowindow.open(map, marker);
            $('#rd-events-location-lat').val(results[0].geometry.location.lat());
            $('#rd-events-location-lng').val(results[0].geometry.location.lng());
        });
    });

    // check that this page already set marker or not, if yes then add marker.
    if ($('#rd-events-location-lat').val() != '' && $('#rd-events-location-lng').val() != '') {
        // there are values of lat, lng. add the marker.
        var current_marker_on_loaded = new google.maps.LatLng($('#rd-events-location-lat').val(), $('#rd-events-location-lng').val());
        marker.setPosition(current_marker_on_loaded);
        marker.setVisible(true);
        map.setCenter(current_marker_on_loaded);
        // set info window data.
        if ($('#rd-events-location').val() != '') {
            infowindowContent.children['rd-events-place-name'].textContent = $('#rd-events-location').val();
        } else {
            infowindowContent.children['rd-events-place-address'].textContent = $('#rd-events-location-lat').val()+', '+$('#rd-events-location-lng').val();
        }
        infowindow.open(map, marker);
        delete current_marker_on_loaded;
    }
}// rdEventsInitMap


// set variable for use cross function.
var map;
var marker;
var infowindow;


// on page loaded ---------------------------------------------------------------------------
jQuery(function($) {
    rdEventsDisableEnterInput();
});