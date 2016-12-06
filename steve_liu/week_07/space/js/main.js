

$(document).ready(function(){

window.setInterval(function(){

  var issLongitude = $(".longitude").text();
  var issLatitude = $(".latitude").text();
  issLongitude = parseFloat(issLongitude);
  issLatitude = parseFloat(issLatitude);

  console.log(issLongitude + " GFSFDSFSDF");
  var iss = {lat: issLatitude, lng: issLongitude};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: issLatitude, lng: issLongitude}
  });

  var marker = new google.maps.Marker({
    position: iss,
    map: map
  });

}, 5000);

});
