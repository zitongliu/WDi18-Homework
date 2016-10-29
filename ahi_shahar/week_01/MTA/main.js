// MTA Lab
//
// Objectives:
//
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
//
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
var reverseArr = function (myArray) {
  for (i = 0; i < myArray.length / 2 ; i++) { // '/2' to stop the function from going back and reversing itself
    var old = myArray[i]; // store the original data from location 'i'
    myArray[i] = myArray[myArray.length - 1 - i]; // store the data from the opposite side of the array into location 'i'
    myArray[myArray.length - 1 - i] = old; // put back the old data from location 'i' into the opposite side of the array
  };
  return myArray;
};
var nLine = {
  line : "N",
  stops : ["Times Square", "34th", "28th", "23rd North", "Union Square", "8th North"]
};
var lLine = {
  line : "L",
  stops : ["8th", "6th", "Union Square", "3rd", "1st"]
};
var sLine = {
  line : "6",
  stops : ["Grand Central", "33rd", "28th St", "23rd", "Union Square", "Astor Place"]
};
var checkChange = function (trip,tripEnd) {
  for (i = 0 ; i < trip.length ; i += 1) {
    for ( x = 0 ; x < tripEnd.length ; x += 1) {
      if (trip[i] === tripEnd[x]) {
        return trip[i];
      };
    };
  };
};
// pick the right lane to start the journey on
var pickLine1 = function () {
  if ( nLine.line === startLn) var trip = nLine.stops;
  else if ( lLine.line === startLn) var trip = lLine.stops;
  else if ( sLine.line === startLn) var trip = sLine.stops;
  else return(console.log("You're a dick."));
  return trip;
};
// pick the right lane to finish the journey on
var pickLane2 = function (end.Ln) {
  if ( nLine.line === endLn) var tripEnd = nLine.stops;
  else if ( lLine.line === endLn) var tripEnd = lLine.stops;
  else if ( sLine.line === endLn) var tripEnd = sLine.stops;
  else console.log( "You're a dick.");
};
var planTrip = function (startPt, startLn, endLn, endPt) {
  startLn = startLn.toUpperCase().charAt(0);
  endLn = endLn.toUpperCase().charAt(0);
  if (startLn.valueOf() === endLn.valueOf()) { // check if the user is a cunt
    if (startPt.valueOf() === endPt.valueOf()) { // meaning, is he an idiot and is already at his destination
      return prompt("You're already at your destination you fool.")
    };
  };
  // start line
  var trip = pickLine1( startLn );
  if (startLn.valueOf() === endLn.valueOf()) { // check if the user needs to change lines if he doesn't, lets sum things up
    trip.pop();
    trip.shift();
    var bonVoyage = "You are traveling from " + startPt + " on line " + startLn + ".\n" +
    "Travel through " + trip.join(", ") + " all the way to " + endPt + ".\n" + (trip.length + 1) + " stops in total.";
    alert(bonVoyage);
    return;
  };
  // end line
  var tripEnd = pickLine2( endLn );
  // check connections
  var changePoint = checkChange(trip,tripEnd);
  // The next 2 conditions check the direction of travel and return the array facing the right way
  if ( tripEnd.indexOf(endPt) < tripEnd.indexOf(changePoint)) {
    tripEnd = reverseArr(tripEnd);
  };
  if (trip.indexOf(startPt) > trip.indexOf(changePoint)) {
    trip = reverseArr(trip);
  };
  trip = trip.slice( trip.indexOf( startPt ) , trip.indexOf( changePoint ) );
  tripEnd =  tripEnd.slice( tripEnd.indexOf( changePoint ) +1 ,tripEnd.indexOf( endPt ) );
  var totalStops = trip.length + tripEnd.length + 1;
  // var finalTrip = trip.concat(tripEnd); // not completely neccesary ATM as its just as easy to count 2 arrays, but for future use (if you'll want to connect two lines and find where they would meet another line)
  trip.shift();
  var bonVoyage = "You are traveling from " + startPt + " on line " + startLn + " going through " + trip.join(", ") + ",\n" +
   "Change lines at " + changePoint + ".\n" +
    "Take line " + endLn + " and continue through " + tripEnd.join(", ") + " all the way to " + endPt + ".\n" + totalStops + " stops in total.";
  console.log(bonVoyage);
};
planTrip(
  startPt = prompt("Where are you starting your trip?"),
  startLn = prompt("on which line?"),
  endLn = prompt("any line you would like to change to?"),
  endPt = prompt("and where are you going to?")
);
