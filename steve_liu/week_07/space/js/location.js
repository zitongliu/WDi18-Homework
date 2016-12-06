var baseLocationURL = "http://api.open-notify.org/iss-now.json";

locationTimer = null;


var displayLocation = function( data ){
  var longitude = data.iss_position.longitude;
  var latitude = data.iss_position.latitude;
  console.log(longitude, latitude);
  $(".longitude").text(longitude);
  $(".latitude").text(latitude);
};

var getLocation = function (){
  $.ajax({
    url: baseLocationURL,
    dataType: "JSONP"
  }).done( displayLocation );

};

$(document).ready(function(){
  getLocation();
  locationTimer = window.setInterval(function(){
    getLocation();
  }, 2000);
});
