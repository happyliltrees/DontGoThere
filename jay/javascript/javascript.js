$("").on("click","value", function(){
     
})

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:  25.761681, lng: -80.191788 },
      zoom: 8
    });

      console.log('init')
      var geocoder = new google.maps.Geocoder;
       var infowindow = new google.maps.InfoWindow;

         document.getElementById('submit').addEventListener('click', function() {
           geocodeLatLng(geocoder, map, infowindow);
         });
}
function geocodeLatLng(geocoder, map, infowindow) {
  var input = document.getElementById('latlng').value;
  var latlngStr = input.split(',', 2);
  var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        map.setZoom(11);
        var marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
        infowindow.setContent(results[0].formatted_address);
        infowindow.open(map, marker);
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}
