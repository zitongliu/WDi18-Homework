var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 3,
  center: {lat: 0, lng: 0}
});

var marker = new google.maps.Marker({
    position: {lat: 0, lng: 0},
    map: map,
    title:"Hello World!"
});

$(document).ready(function(){


window.setInterval(function(){

  var issLongitude = $(".longitude").text();
  var issLatitude = $(".latitude").text();
  issLongitude = parseFloat(issLongitude);
  issLatitude = parseFloat(issLatitude);


  var iss = {lat: issLatitude, lng: issLongitude};
  var marker = new google.maps.Marker({
    position: iss,
    // map: map
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);

  // To remove the marker from the map
  // marker.setMap(null);

  // var marker = new google.maps.Marker({
  //   position: iss,
  //   map: map
  // });

}, 5000);

});
