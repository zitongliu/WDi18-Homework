var basePeopleURL = "http://api.open-notify.org/astros.json?callback=CALLBACK";

peopleTimer = null;

var displayPeople = function( data ){
  console.log(data);
  var people = data.people;
  console.log(people.length);

  $(".people p").remove();

  var $peopleCount = $("<p></p>");
  $peopleCount.text("Number of astronauts aboard ISS: " + people.length).addClass("peopleCount");
  $(".people").append($peopleCount);

  for ( i=0; i<people.length; i++ ){
    console.log( people[i] );
    var $name = $("<p></p>");
    $name.text(people[i].name);
    $(".people").append( $name );

  }

};

var getPeople = function( ){
  console.log("Getting people..");

  $.ajax({
    url: basePeopleURL,
    type: "GET",
    dataType: "JSONP"
  }).done( displayPeople );

};

$(document).ready(function(){
  getPeople();
  peopleTimer = window.setInterval(function(){
    getPeople();
  }, 5000);




});
